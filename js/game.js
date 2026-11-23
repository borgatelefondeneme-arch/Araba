var hp=0,hu=1,up=2;var Hs=1,dp=2,Hr=3,pi=0,Zt=1,an=2,Wi=0,Gr=1,Pn=2,uu=3,du=4,fp=5;var Gs=100,pp=101,mp=102,gp=103,bp=104,xp=200,_p=201,vp=202,yp=203,fu=204,pu=205,Mp=206,Sp=207,Tp=208,Ep=209,wp=210,Ap=211,Rp=212,Cp=213,Pp=214,gl=0,bl=1,xl=2,yr=3,_l=4,vl=5,yl=6,Ml=7,ql=0,Ip=1,Lp=2,mi=0,io=1,so=2,ro=3,Vs=4,ao=5,oo=6,lo=7,jh="attached",Dp="detached",mu=300,Ws=301,Vr=302,Xl=303,jl=304,An=1e3,Gn=1001,Mr=1002,Ft=1003,Kl=1004;var qs=1005;var Kt=1006,Wr=1007;var Xn=1008;var In=1009,gu=1010,bu=1011,qr=1012,Yl=1013,ii=1014,On=1015,hn=1016,Jl=1017,Zl=1018,Xs=1020,xu=35902,_u=35899,vu=1021,yu=1022,jn=1023,Ii=1026,qi=1027,$l=1028,Ql=1029,us=1030,ec=1031;var tc=1033,co=33776,ho=33777,uo=33778,fo=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,hc=37489,po=37490,uc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,bc=37813,xc=37814,_c=37815,vc=37816,yc=37817,Mc=37818,Sc=37819,Tc=37820,Ec=37821,wc=36492,Ac=36494,Rc=36495,Cc=36283,Pc=36284,mo=36285,Ic=36286;var As=2300,Rs=2301,pl=2302,Kh=2303,Yh=2400,Jh=2401,Zh=2402,Np=2500;var Mu=0,go=1,Xr=2,Fp=3200;var bo=0,Up=1,Xi="",mt="srgb",Mn="srgb-linear",wa="linear",dt="srgb";var ml=7680;var Op=519,kp=512,Bp=513,zp=514,Su=515,Hp=516,Gp=517,Tu=518,Eu=519,wu=35044;var Au="300 es",Vn=2e3,Sr=2001;function jg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vp(){let i=Tr("canvas");return i.style.display="block",i}var pf={},Er=null;function Aa(...i){let e="THREE."+i.shift();Er?Er("log",e,...i):console.log(e,...i)}function Wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Wp(i);let e="THREE."+i.shift();if(Er)Er("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Wp(i);let e="THREE."+i.shift();if(Er)Er("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ws(...i){let e=i.join(" ");e in pf||(pf[e]=!0,Le(...i))}function qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xp={[gl]:gl,[xl]:yl,[_l]:_l,[yr]:vl,[bl]:bl,[yl]:xl,[Ml]:Ml,[vl]:yr},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mf=1234567,Ma=Math.PI/180,Cs=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function Yg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jg(i,e,t){return i!==e?(t-i)/(e-i):0}function Sa(i,e,t){return(1-t)*i+t*e}function Zg(i,e,t,n){return Sa(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(Ru(i,e*2)-e)}function Qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(mf=i);let e=mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*Ma}function a0(i){return i*Cs}function o0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Lc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(i,e){if(e.constructor===Float32Array)return i;let t=Lc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Iu(i,e){if(e.constructor===Float32Array)return i;let t=Lc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Sn={DEG2RAD:Ma,RAD2DEG:Cs,generateUUID:si,clamp:et,euclideanModulo:Ru,mapLinear:Yg,inverseLerp:Jg,lerp:Sa,damp:Zg,pingpong:$g,smoothstep:Qg,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:a0,isPowerOfTwo:o0,ceilPowerOfTwo:l0,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:c0,normalize:Iu,denormalize:Pu},Ou=class Ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ou.prototype.isVector2=!0;var J=Ou,zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,o=Math.sin(o*_)/M,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ku=class ku{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ku.prototype.isVector3=!0;var I=ku,_h=new I,gf=new zt,Bu=class Bu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],v=s[7],S=s[2],T=s[5],b=s[8];return r[0]=a*x+o*_+l*S,r[3]=a*m+o*M+l*T,r[6]=a*g+o*v+l*b,r[1]=c*x+h*_+d*S,r[4]=c*m+h*M+d*T,r[7]=c*g+h*v+d*b,r[2]=u*x+f*_+p*S,r[5]=u*m+f*M+p*T,r[8]=u*g+f*v+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;var qe=Bu,vh=new qe,bf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){let i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:bf,fromXYZ:xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:bf,fromXYZ:xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),i}var Je=h0();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,Sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=Tr("canvas")),nr.width=e.width,nr.height=e.height;let s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},u0=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yh(s[a].image)):r.push(yh(s[a]))}else r=yh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var d0=0,Mh=new I,Yt=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=Kt,a=Xn,o=jn,l=In,c=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=si(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=mu;Yt.DEFAULT_ANISOTROPY=1;var zu=class zu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,S=(g+1)/2,T=(h+u)/4,b=(d+x)/4,y=(p+m)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=b/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=b/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;var vt=zu,Tl=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Wl=class Wl{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),$i.crossVectors(n,Dn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),$i.crossVectors(n,Dn)),$i.normalize(),ko.crossVectors(Dn,$i),s[0]=$i.x,s[4]=ko.x,s[8]=Dn.x,s[1]=$i.y,s[5]=ko.y,s[9]=Dn.y,s[2]=$i.z,s[6]=ko.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],M=n[7],v=n[11],S=n[15],T=s[0],b=s[4],y=s[8],C=s[12],A=s[1],P=s[5],N=s[9],O=s[13],L=s[2],H=s[6],W=s[10],G=s[14],ne=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=a*T+o*A+l*L+c*ne,r[4]=a*b+o*P+l*H+c*q,r[8]=a*y+o*N+l*W+c*Q,r[12]=a*C+o*O+l*G+c*te,r[1]=h*T+d*A+u*L+f*ne,r[5]=h*b+d*P+u*H+f*q,r[9]=h*y+d*N+u*W+f*Q,r[13]=h*C+d*O+u*G+f*te,r[2]=p*T+x*A+m*L+g*ne,r[6]=p*b+x*P+m*H+g*q,r[10]=p*y+x*N+m*W+g*Q,r[14]=p*C+x*O+m*G+g*te,r[3]=_*T+M*A+v*L+S*ne,r[7]=_*b+M*P+v*H+S*q,r[11]=_*y+M*N+v*W+S*Q,r[15]=_*C+M*O+v*G+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*u,M=o*f-c*d,v=o*u-l*d,S=a*f-c*h,T=a*u-l*h,b=a*d-o*h;return t*(x*_-m*M+g*v)-n*(p*_-m*S+g*T)+s*(p*M-x*S+g*b)-r*(p*v-x*T+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*o-n*a,M=t*l-s*a,v=t*c-r*a,S=n*l-s*o,T=n*c-r*o,b=s*c-r*l,y=h*x-d*p,C=h*m-u*p,A=h*g-f*p,P=d*m-u*x,N=d*g-f*x,O=u*g-f*m,L=_*O-M*N+v*P+S*A-T*C+b*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(o*O-l*N+c*P)*H,e[1]=(s*N-n*O-r*P)*H,e[2]=(x*b-m*T+g*S)*H,e[3]=(u*T-d*b-f*S)*H,e[4]=(l*A-a*O-c*C)*H,e[5]=(t*O-s*A+r*C)*H,e[6]=(m*v-p*b-g*M)*H,e[7]=(h*b-u*v+f*M)*H,e[8]=(a*N-o*A+c*y)*H,e[9]=(n*A-t*N-r*y)*H,e[10]=(p*T-x*v+g*_)*H,e[11]=(d*v-h*T-f*_)*H,e[12]=(o*C-a*P-l*y)*H,e[13]=(t*P-n*C+s*y)*H,e[14]=(x*M-p*S-m*_)*H,e[15]=(h*S-d*M+u*_)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,_=l*c,M=l*h,v=l*d,S=n.x,T=n.y,b=n.z;return s[0]=(1-(x+g))*S,s[1]=(f+v)*S,s[2]=(p-M)*S,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+g))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(p+M)*b,s[9]=(m-_)*b,s[10]=(1-(u+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ir.set(s[0],s[1],s[2]).length(),o=ir.set(s[4],s[5],s[6]).length(),l=ir.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,h=1/o,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Sr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Vn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Sr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Wl.prototype.isMatrix4=!0;var Ve=Wl,ir=new I,Qn=new Ve,f0=new I(0,0,0),p0=new I(1,1,1),$i=new I,ko=new I,Dn=new I,_f=new Ve,vf=new zt,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m0=0,yf=new I,sr=new zt,Si=new Ve,Bo=new I,ca=new I,g0=new I,b0=new zt,Mf=new I(1,0,0),Sf=new I(0,1,0),Tf=new I(0,0,1),Ef={type:"added"},x0={type:"removed"},rr={type:"childadded",child:null},Sh={type:"childremoved",child:null},At=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Wn,n=new zt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ca,Bo,this.up):Si.lookAt(Bo,ca,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Si),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),rr.child=e,this.dispatchEvent(rr),rr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Ru(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Th(a,r,e+1/3),this.g=Th(a,r,e),this.b=Th(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Je.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=mt){Je.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(zo);let n=Sa(Qi.h,zo.h,t),s=Sa(Qi.s,zo.s,t),r=Sa(Qi.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new xe;xe.NAMES=jp;var Ca=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qn=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new I,Ti=new I,Eh=new I,Ei=new I,ar=new I,or=new I,wf=new I,wh=new I,Ah=new I,Rh=new I,Ch=new vt,Ph=new vt,Ih=new vt,Ci=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ti.subVectors(n,t),Eh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Ti),l=ei.dot(Eh),c=Ti.dot(Ti),h=Ti.dot(Eh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ch.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Ch.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,n),Ih.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ch,r.x),a.addScaledVector(Ph,r.y),a.addScaledVector(Ih,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ti.subVectors(e,t),ei.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ei.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ar.subVectors(s,n),or.subVectors(r,n),wh.subVectors(e,n);let l=ar.dot(wh),c=or.dot(wh);if(l<=0&&c<=0)return t.copy(n);Ah.subVectors(e,s);let h=ar.dot(Ah),d=or.dot(Ah);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ar,a);Rh.subVectors(e,r);let f=ar.dot(Rh),p=or.dot(Rh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(or,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return wf.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(wf,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Go.subVectors(this.max,ha),lr.subVectors(e.a,ha),cr.subVectors(e.b,ha),hr.subVectors(e.c,ha),es.subVectors(cr,lr),ts.subVectors(hr,cr),ys.subVectors(lr,hr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-ys.z,ys.y,es.z,0,-es.x,ts.z,0,-ts.x,ys.z,0,-ys.x,-es.y,es.x,0,-ts.y,ts.x,0,-ys.y,ys.x,0];return!Lh(t,lr,cr,hr,Go)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,lr,cr,hr,Go))?!1:(Vo.crossVectors(es,ts),t=[Vo.x,Vo.y,Vo.z],Lh(t,lr,cr,hr,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,Ho=new gn,lr=new I,cr=new I,hr=new I,es=new I,ts=new I,ys=new I,ha=new I,Go=new I,Vo=new I,Ms=new I;function Lh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ms.fromArray(i,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vt=new I,Wo=new J,v0=0,Bt=class extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?Lc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Iu(e,this.array)}};var Pa=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=new gn,ua=new I,Dh=new I,Rn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ua,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Dh)),this.expandByPoint(ua.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M0=0,Hn=new Ve,Nh=new At,ur=new I,Nn=new gn,da=new gn,sn=new I,ft=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Nn.min,da.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,da.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(da.min),Nn.expandByPoint(da.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),sn.add(ur)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;let h=new I,d=new I,u=new I,f=new J,p=new J,x=new J,m=new I,g=new I;function _(C,A,P){c[C]=c[A]=c[P]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,P),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(N),o[C].add(m),o[A].add(m),o[P].add(m),l[C].add(g),l[A].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,A=M.length;C<A;++C){let P=M[C],N=P.start,O=P.count;for(let L=N,H=N+O;L<H;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new I,S=new I,T=new I,b=new I;function y(C){T.fromBufferAttribute(s,C),b.copy(T);let A=o[C];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(b,A);let N=S.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,A=n.count;C<A;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Bt(u,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wu,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Af(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Af(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Af(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=si()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var yn=new I,ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Lc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Iu(e,this.data.array)}},Fh=new I,S0=new I,T0=new qe,ni=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fh.subVectors(n,t).cross(S0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||T0.getNormalMatrix(e),s=this.coplanarPoint(Fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},E0=0,ln=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Gr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=pu,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cr=class extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,fa=new I,fr=new I,pr=new I,mr=new J,pa=new J,Kp=new Ve,qo=new I,ma=new I,Xo=new I,Rf=new J,Uh=new J,Cf=new J,La=class extends At{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ps(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new ss(n,3,0,!1)),dr.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new J(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Kp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;jo(qo.set(-.5,-.5,0),pr,a,fr,s,r),jo(ma.set(.5,-.5,0),pr,a,fr,s,r),jo(Xo.set(.5,.5,0),pr,a,fr,s,r),Rf.set(0,0),Uh.set(1,0),Cf.set(1,1);let o=e.ray.intersectTriangle(qo,ma,Xo,!1,fa);if(o===null&&(jo(ma.set(-.5,.5,0),pr,a,fr,s,r),Uh.set(0,1),o=e.ray.intersectTriangle(qo,Xo,ma,!1,fa),o===null))return;let l=e.ray.origin.distanceTo(fa);l<e.near||l>e.far||t.push({distance:l,point:fa.clone(),uv:Ci.getInterpolation(fa,qo,ma,Xo,Rf,Uh,Cf,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function jo(i,e,t,n,s,r){mr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(pa.x=r*mr.x-s*mr.y,pa.y=s*mr.x+r*mr.y):pa.copy(mr),i.copy(e),i.x+=pa.x,i.y+=pa.y,i.applyMatrix4(Kp)}var Ai=new I,Oh=new I,Ko=new I,Yo=new I,rs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oh.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Yo.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ko),o=Yo.dot(this.direction),l=-Yo.dot(Ko),c=Yo.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oh).addScaledVector(Ko,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,_=n.y-a.y,M=n.z-a.z,v=Math.abs(l),S=Math.abs(c),T=Math.abs(h),b,y,C,A,P,N,O,L,H,W,G,ne;if(v>=S&&v>=T?(C=l,N=d,H=p,ne=g,l>=0?(b=c,y=h,A=u,P=f,O=x,L=m,W=_,G=M):(b=h,y=c,A=f,P=u,O=m,L=x,W=M,G=_)):S>=T?(C=c,N=u,H=x,ne=_,c>=0?(b=h,y=l,A=f,P=d,O=m,L=p,W=M,G=g):(b=l,y=h,A=d,P=f,O=p,L=m,W=g,G=M)):(C=h,N=f,H=m,ne=M,h>=0?(b=l,y=c,A=d,P=u,O=p,L=x,W=g,G=_):(b=c,y=l,A=u,P=d,O=x,L=p,W=_,G=g)),C===0)return null;let q=b/C,Q=y/C,te=1/C,Ee=A-q*N,ze=P-Q*N,j=O-q*H,_e=L-Q*H,we=W-q*ne,Oe=G-Q*ne,ve=we*_e-Oe*j,ke=Ee*Oe-ze*we,Ct=j*ze-_e*Ee;if(s){if(ve<0||ke<0||Ct<0)return null}else if((ve<0||ke<0||Ct<0)&&(ve>0||ke>0||Ct>0))return null;let He=ve+ke+Ct;if(He===0)return null;let Qe=te*(ve*N+ke*H+Ct*ne);return(He>0?Qe<0:Qe>0)?null:this.at(Qe/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pf=new Ve,Ss=new rs,Jo=new Rn,If=new I,Zo=new I,$o=new I,Qo=new I,kh=new I,el=new I,Lf=new I,tl=new I,Fe=class extends At{constructor(e=new ft,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){el.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(kh.fromBufferAttribute(d,e),a?el.addScaledVector(kh,h):el.addScaledVector(kh.sub(t),h))}t.add(el)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Jo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Jo,If)===null||Ss.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Pf.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=M;v<S;v+=3){let T=o.getX(v),b=o.getX(v+1),y=o.getX(v+2);s=nl(this,g,e,n,c,h,d,T,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=nl(this,a,e,n,c,h,d,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=M;v<S;v+=3){let T=v,b=v+1,y=v+2;s=nl(this,g,e,n,c,h,d,T,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,M=m+1,v=m+2;s=nl(this,a,e,n,c,h,d,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function w0(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;tl.copy(o),tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Zo),i.getVertexPosition(l,$o),i.getVertexPosition(c,Qo);let h=w0(i,e,t,n,Zo,$o,Qo,Lf);if(h){let d=new I;Ci.getBarycoord(Lf,Zo,$o,Qo,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,l,c,d,new J)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new J)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Ci.getNormal(Zo,$o,Qo,u.normal),h.face=u,h.barycoord=d}return h}var ga=new vt,Df=new vt,Nf=new vt,A0=new vt,Ff=new Ve,il=new I,Bh=new Rn,Uf=new Ve,zh=new rs,Da=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,il),this.boundingBox.expandByPoint(il)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,il),this.boundingSphere.expandByPoint(il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bh.copy(this.boundingSphere),Bh.applyMatrix4(s),e.ray.intersectsSphere(Bh)!==!1&&(Uf.copy(s).invert(),zh.copy(e.ray).applyMatrix4(Uf),!(this.boundingBox!==null&&zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Df.fromBufferAttribute(s.attributes.skinIndex,e),Nf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ga.copy(t),t.set(0,0,0,0)):(ga.set(t.x,t.y,t.z,1),t.set(0,0,0)),ga.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Nf.getComponent(r);if(a!==0){let o=Df.getComponent(r);Ff.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(A0.copy(ga).applyMatrix4(Ff),a)}}return t.isVector4&&(t.w=ga.w),t.applyMatrix4(this.bindMatrixInverse)}},Pr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ir=class extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,h=Ft,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Of=new Ve,R0=new Ve,Na=class i{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:R0;Of.multiplyMatrices(o,t[r]),Of.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ir(t,e,e,jn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Pr),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Li=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Ve,kf=new Ve,sl=[],Bf=new gn,C0=new Ve,ba=new Fe,xa=new Rn,Di=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Bf.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),xa.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),e.ray.intersectsSphere(xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),kf.multiplyMatrices(n,gr),ba.matrixWorld=kf,ba.raycast(e,sl);for(let a=0,o=sl.length;a<o;a++){let l=sl[a];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(s*this.count),s,this.count,$l,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Rn,P0=new J(.5,.5),rl=new I,as=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,g-p,S-_).normalize(),s[1].setComponents(c+a,f+h,g+p,S+_).normalize(),s[2].setComponents(c+o,f+d,g+x,S+M).normalize(),s[3].setComponents(c-o,f-d,g-x,S-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,g-m,S-v).normalize();else if(s[4].setComponents(c-l,f-u,g-m,S-v).normalize(),t===Vn)s[5].setComponents(c+l,f+u,g+m,S+v).normalize();else if(t===Sr)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=P0.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zf=new Ve,wl=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];zf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new as),n[s].setFromProjectionMatrix(zf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var os=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new I,Rl=new I,Hf=new Ve,_a=new rs,al=new Rn,Hh=new I,Gf=new I,Is=class extends At{constructor(e=new ft,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Al.fromBufferAttribute(t,s-1),Rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Al.distanceTo(Rl);e.setAttribute("lineDistance",new je(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;Hf.copy(s).invert(),_a.copy(e.ray).applyMatrix4(Hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),M=ol(this,e,_a,l,g,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=ol(this,e,_a,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=ol(this,e,_a,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ol(this,e,_a,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ol(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Al.fromBufferAttribute(o,s),Rl.fromBufferAttribute(o,r),t.distanceSqToSegment(Al,Rl,Hh,Gf)>n)return;Hh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hh);if(!(c<e.near||c>e.far))return{distance:c,point:Gf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vf=new I,Wf=new I,Ls=class extends Is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vf.fromBufferAttribute(t,s),Wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new je(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends Is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ls=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qf=new Ve,$h=new rs,ll=new Rn,cl=new I,Ds=class extends At{constructor(e=new ft,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;qf.copy(s).invert(),$h.copy(e.ray).applyMatrix4(qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);cl.fromBufferAttribute(d,m),Xf(cl,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)cl.fromBufferAttribute(d,p),Xf(cl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xf(i,e,t,n,s,r,a){let o=$h.distanceSqToPoint(i);if(o<t){let l=new I;$h.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ua=class extends Yt{constructor(e=[],t=Ws,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cn=class extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends Yt{constructor(e,t,n=ii,s,r,a,o=Ft,l=Ft,c,h=Ii,d=1){if(h!==Ii&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oa=class extends Ni{constructor(e,t=ii,n=Ws,s,r,a=Ft,o=Ft,l,c=Ii){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},It=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function p(x,m,g,_,M,v,S,T,b,y,C){let A=v/b,P=S/y,N=v/2,O=S/2,L=T/2,H=b+1,W=y+1,G=0,ne=0,q=new I;for(let Q=0;Q<W;Q++){let te=Q*P-O;for(let Ee=0;Ee<H;Ee++){let ze=Ee*A-N;q[x]=ze*_,q[m]=te*M,q[g]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ee/b),d.push(1-Q/y),G+=1}}for(let Q=0;Q<y;Q++)for(let te=0;te<b;te++){let Ee=u+te+H*Q,ze=u+te+H*(Q+1),j=u+(te+1)+H*(Q+1),_e=u+(te+1)+H*Q;l.push(Ee,ze,_e),l.push(ze,j,_e),ne+=6}o.addGroup(f,ne,C),f+=ne,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fi=class i extends ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,x=s+1,m=new I,g=new I;for(let _=0;_<=p;_++){let M=0,v=0,S=0,T=0;if(_<=n){let C=_/n,A=C*Math.PI/2;v=-h-e*Math.cos(A),S=e*Math.sin(A),T=-e*Math.cos(A),M=C*d}else if(_<=n+r){let C=(_-n)/r;v=-h+C*t,S=e,T=0,M=d+C*u}else{let C=(_-n-r)/n,A=C*Math.PI/2;v=h+e*Math.sin(A),S=e*Math.cos(A),T=e*Math.sin(A),M=d+u+C*d}let b=Math.max(0,Math.min(1,M/f)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let C=0;C<=s;C++){let A=C/s,P=A*Math.PI*2,N=Math.sin(P),O=Math.cos(P);g.x=-S*O,g.y=v,g.z=S*N,o.push(g.x,g.y,g.z),m.set(-S*O,T,S*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+y,b)}if(_>0){let C=(_-1)*x;for(let A=0;A<s;A++){let P=C+A,N=C+A+1,O=_*x+A,L=_*x+A+1;a.push(P,N,O),a.push(N,L,O)}}}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ns=class i extends ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class i extends ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(f,2));function _(){let v=new I,S=new I,T=0,b=(t-e)/n;for(let y=0;y<=r;y++){let C=[],A=y/r,P=A*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,L=O*l+o,H=Math.sin(L),W=Math.cos(L);S.x=P*H,S.y=-A*n+m,S.z=P*W,d.push(S.x,S.y,S.z),v.set(H,b,W).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-A),C.push(p++)}x.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let A=x[C][y],P=x[C+1][y],N=x[C+1][y+1],O=x[C][y+1];(e>0||C!==0)&&(h.push(A,P,O),T+=3),(t>0||C!==r-1)&&(h.push(P,N,O),T+=3)}c.addGroup(g,T,0),g+=T}function M(v){let S=p,T=new J,b=new I,y=0,C=v===!0?e:t,A=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let L=N/s*l+o,H=Math.cos(L),W=Math.sin(L);b.x=C*W,b.y=m*A,b.z=C*H,d.push(b.x,b.y,b.z),u.push(0,A,0),T.x=H*.5+.5,T.y=W*.5*A+.5,f.push(T.x,T.y),p++}for(let N=0;N<s;N++){let O=S+N,L=P+N;v===!0?h.push(L,L+1,O):h.push(L+1,L,O),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fn=class i extends Wt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lr=class i extends ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new I,v=new I,S=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],v),f(t[T+2],S),l(M,v,S,_)}function l(_,M,v,S){let T=S+1,b=[];for(let y=0;y<=T;y++){b[y]=[];let C=_.clone().lerp(v,y/T),A=M.clone().lerp(v,y/T),P=T-y;for(let N=0;N<=P;N++)N===0&&y===T?b[y][N]=C:b[y][N]=C.clone().lerp(A,N/P)}for(let y=0;y<T;y++)for(let C=0;C<2*(T-y)-1;C++){let A=Math.floor(C/2);C%2===0?(u(b[y][A+1]),u(b[y+1][A]),u(b[y][A])):(u(b[y][A+1]),u(b[y+1][A+1]),u(b[y+1][A]))}}function c(_){let M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new I;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=m(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;a.push(v,1-S)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let M=a[_+0],v=a[_+2],S=a[_+4],T=Math.max(M,v,S),b=Math.min(M,v,S);T>.9&&b<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),S<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,M){let v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){let _=new I,M=new I,v=new I,S=new I,T=new J,b=new J,y=new J;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),T.set(a[A+0],a[A+1]),b.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),S.copy(_).add(M).add(v).divideScalar(3);let P=m(S);x(T,A+0,_,P),x(b,A+2,M,P),x(y,A+4,v,P)}}function x(_,M,v,S){S<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Fs=class i extends Lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new J:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Ve;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Dr=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Dr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var jf=new I,Kf=new I,Gh=new Lu,Vh=new Lu,Wh=new Lu,Pl=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Kf.subVectors(s[0],s[1]).add(s[0]),c=Kf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Gh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Vh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Wh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Gh.calc(l),Vh.calc(l),Wh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function I0(i,e){let t=1-i;return t*t*e}function L0(i,e){return 2*(1-i)*i*e}function D0(i,e){return i*i*e}function Ta(i,e,t,n){return I0(i,e)+L0(i,t)+D0(i,n)}function N0(i,e){let t=1-i;return t*t*t*e}function F0(i,e){let t=1-i;return 3*t*t*i*e}function U0(i,e){return 3*(1-i)*i*i*e}function O0(i,e){return i*i*i*e}function Ea(i,e,t,n,s){return N0(i,e)+F0(i,t)+U0(i,n)+O0(i,s)}var Ba=class extends Un{constructor(e=new J,t=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,s.x,r.x,a.x,o.x),Ea(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends Un{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,s.x,r.x,a.x,o.x),Ea(e,s.y,r.y,a.y,o.y),Ea(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends Un{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends Un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends Un{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ta(e,s.x,r.x,a.x),Ta(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends Un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ta(e,s.x,r.x,a.x),Ta(e,s.y,r.y,a.y),Ta(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Yf(o,l.x,c.x,h.x,d.x),Yf(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new J().fromArray(s))}return this}},Qh=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:Ba,CubicBezierCurve3:Il,EllipseCurve:Dr,LineCurve:za,LineCurve3:Ll,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:Dl,SplineCurve:Ga}),Nl=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Qh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Va=class extends Nl{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ha(this.currentPoint.clone(),new J(e,t),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ba(this.currentPoint.clone(),new J(e,t),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Dr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hi=class extends Va{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Va().fromJSON(s))}return this}};function k0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=V0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Wa(r,a,t,o,l,c,0),a}function Yp(i,e,t,n,s){let r;if(s===eb(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jf(a/n|0,i[a],i[a+1],r);return r&&Nr(r,r.next)&&(Xa(r),r=r.next),r}function Us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Nr(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&K0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?z0(i,n,s,r):B0(i)){e.push(l.i,i.i,c.i),Xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=H0(Us(i),e),Wa(i,e,t,n,s,r,2)):a===2&&G0(i,e,t,n,s,r):Wa(Us(i),e,t,n,s,r,1);break}}}function B0(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&va(s,o,r,l,a,c,p.x,p.y)&&Nt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function z0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Nt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=eu(f,p,e,t,n),_=eu(x,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&va(o,h,l,d,c,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&va(o,h,l,d,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&va(o,h,l,d,c,u,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&va(o,h,l,d,c,u,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function H0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Nr(n,s)&&Zp(n,t,t.next,s)&&qa(n,s)&&qa(s,n)&&(e.push(n.i,t.i,s.i),Xa(t),Xa(t.next),t=i=s),t=t.next}while(t!==i);return Us(t)}function G0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let l=$p(a,o);a=Us(a,a.next),l=Us(l,l.next),Wa(a,e,t,n,s,r,0),Wa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function V0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Yp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(J0(c))}s.sort(W0);for(let r=0;r<s.length;r++)t=q0(s[r],t);return t}function W0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function q0(i,e){let t=X0(i,e);if(!t)return e;let n=$p(t,i);return Us(n,n.next),Us(t,t.next)}function X0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Nr(i,t))return t;do{if(Nr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);qa(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&j0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function j0(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function K0(i,e,t,n){let s=i;do s.z===0&&(s.z=eu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y0(s)}function Y0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function eu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function J0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function va(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Jp(i,e,t,n,s,r,a,o)}function Z0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$0(i,e)&&(qa(i,e)&&qa(e,i)&&Q0(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Nr(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Nr(i,e){return i.x===e.x&&i.y===e.y}function Zp(i,e,t,n){let s=ul(Nt(i,e,t)),r=ul(Nt(i,e,n)),a=ul(Nt(t,n,i)),o=ul(Nt(t,n,e));return!!(s!==r&&a!==o||s===0&&hl(i,t,e)||r===0&&hl(i,n,e)||a===0&&hl(t,i,n)||o===0&&hl(t,e,n))}function hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ul(i){return i>0?1:i<0?-1:0}function $0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qa(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Q0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $p(i,e){let t=tu(i.i,i.x,i.y),n=tu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(i,e,t,n){let s=tu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eb(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nu=class{static triangulate(e,t,n=2){return k0(e,t,n)}},Es=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Zf(e),$f(n,e);let a=e.length;t.forEach(Zf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$f(n,t[l]);let o=nu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $f(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ui=class i extends ft{constructor(e=new hi([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:tb,M,v=!1,S,T,b,y;if(g){M=g.getSpacedPoints(h),v=!0,u=!1;let ee=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,ee),T=new I,b=new I,y=new I}u||(m=0,f=0,p=0,x=0);let C=o.extractPoints(c),A=C.shape,P=C.holes;if(!Es.isClockWise(A)){A=A.reverse();for(let ee=0,he=P.length;ee<he;ee++){let oe=P[ee];Es.isClockWise(oe)&&(P[ee]=oe.reverse())}}function O(ee){let oe=10000000000000001e-36,Te=ee[0];for(let be=1;be<=ee.length;be++){let Ke=be%ee.length,De=ee[Ke],st=De.x-Te.x,rt=De.y-Te.y,ut=st*st+rt*rt,U=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Te.x),Math.abs(Te.y)),Ht=oe*U*U;if(ut<=Ht){ee.splice(Ke,1),be--;continue}Te=De}}O(A),P.forEach(O);let L=P.length,H=A;for(let ee=0;ee<L;ee++){let he=P[ee];A=A.concat(he)}function W(ee,he,oe){return he||Ge("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(he,oe)}let G=A.length;function ne(ee,he,oe){let Te,be,Ke,De=ee.x-he.x,st=ee.y-he.y,rt=oe.x-ee.x,ut=oe.y-ee.y,U=De*De+st*st,Ht=De*ut-st*rt;if(Math.abs(Ht)>Number.EPSILON){let nt=Math.sqrt(U),St=Math.sqrt(rt*rt+ut*ut),pe=he.x-st/nt,kt=he.y+De/nt,Be=oe.x-ut/St,We=oe.y+rt/St,R=((Be-pe)*ut-(We-kt)*rt)/(De*ut-st*rt);Te=pe+De*R-ee.x,be=kt+st*R-ee.y;let E=Te*Te+be*be;if(E<=2)return new J(Te,be);Ke=Math.sqrt(E/2)}else{let nt=!1;De>Number.EPSILON?rt>Number.EPSILON&&(nt=!0):De<-Number.EPSILON?rt<-Number.EPSILON&&(nt=!0):Math.sign(st)===Math.sign(ut)&&(nt=!0),nt?(Te=-st,be=De,Ke=Math.sqrt(U)):(Te=De,be=st,Ke=Math.sqrt(U/2))}return new J(Te/Ke,be/Ke)}let q=[];for(let ee=0,he=H.length,oe=he-1,Te=ee+1;ee<he;ee++,oe++,Te++)oe===he&&(oe=0),Te===he&&(Te=0),q[ee]=ne(H[ee],H[oe],H[Te]);let Q=[],te,Ee=q.concat();for(let ee=0,he=L;ee<he;ee++){let oe=P[ee];te=[];for(let Te=0,be=oe.length,Ke=be-1,De=Te+1;Te<be;Te++,Ke++,De++)Ke===be&&(Ke=0),De===be&&(De=0),te[Te]=ne(oe[Te],oe[Ke],oe[De]);Q.push(te),Ee=Ee.concat(te)}let ze;if(m===0)ze=Es.triangulateShape(H,P);else{let ee=[],he=[];for(let oe=0;oe<m;oe++){let Te=oe/m,be=f*Math.cos(Te*Math.PI/2),Ke=p*Math.sin(Te*Math.PI/2)+x;for(let De=0,st=H.length;De<st;De++){let rt=W(H[De],q[De],Ke);ke(rt.x,rt.y,-be),Te===0&&ee.push(rt)}for(let De=0,st=L;De<st;De++){let rt=P[De];te=Q[De];let ut=[];for(let U=0,Ht=rt.length;U<Ht;U++){let nt=W(rt[U],te[U],Ke);ke(nt.x,nt.y,-be),Te===0&&ut.push(nt)}Te===0&&he.push(ut)}}ze=Es.triangulateShape(ee,he)}let j=ze.length,_e=p+x;for(let ee=0;ee<G;ee++){let he=u?W(A[ee],Ee[ee],_e):A[ee];v?(b.copy(S.normals[0]).multiplyScalar(he.x),T.copy(S.binormals[0]).multiplyScalar(he.y),y.copy(M[0]).add(b).add(T),ke(y.x,y.y,y.z)):ke(he.x,he.y,0)}for(let ee=1;ee<=h;ee++)for(let he=0;he<G;he++){let oe=u?W(A[he],Ee[he],_e):A[he];v?(b.copy(S.normals[ee]).multiplyScalar(oe.x),T.copy(S.binormals[ee]).multiplyScalar(oe.y),y.copy(M[ee]).add(b).add(T),ke(y.x,y.y,y.z)):ke(oe.x,oe.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){let he=ee/m,oe=f*Math.cos(he*Math.PI/2),Te=p*Math.sin(he*Math.PI/2)+x;for(let be=0,Ke=H.length;be<Ke;be++){let De=W(H[be],q[be],Te);ke(De.x,De.y,d+oe)}for(let be=0,Ke=P.length;be<Ke;be++){let De=P[be];te=Q[be];for(let st=0,rt=De.length;st<rt;st++){let ut=W(De[st],te[st],Te);v?ke(ut.x,ut.y+M[h-1].y,M[h-1].x+oe):ke(ut.x,ut.y,d+oe)}}}we(),Oe();function we(){let ee=s.length/3;if(u){let he=0,oe=G*he;for(let Te=0;Te<j;Te++){let be=ze[Te];Ct(be[2]+oe,be[1]+oe,be[0]+oe)}he=h+m*2,oe=G*he;for(let Te=0;Te<j;Te++){let be=ze[Te];Ct(be[0]+oe,be[1]+oe,be[2]+oe)}}else{for(let he=0;he<j;he++){let oe=ze[he];Ct(oe[2],oe[1],oe[0])}for(let he=0;he<j;he++){let oe=ze[he];Ct(oe[0]+G*h,oe[1]+G*h,oe[2]+G*h)}}n.addGroup(ee,s.length/3-ee,0)}function Oe(){let ee=s.length/3,he=0;ve(H,he),he+=H.length;for(let oe=0,Te=P.length;oe<Te;oe++){let be=P[oe];ve(be,he),he+=be.length}n.addGroup(ee,s.length/3-ee,1)}function ve(ee,he){let oe=ee.length;for(;--oe>=0;){let Te=oe,be=oe-1;be<0&&(be=ee.length-1);for(let Ke=0,De=h+m*2;Ke<De;Ke++){let st=G*Ke,rt=G*(Ke+1),ut=he+Te+st,U=he+be+st,Ht=he+be+rt,nt=he+Te+rt;He(ut,U,Ht,nt)}}}function ke(ee,he,oe){l.push(ee),l.push(he),l.push(oe)}function Ct(ee,he,oe){Qe(ee),Qe(he),Qe(oe);let Te=s.length/3,be=_.generateTopUV(n,s,Te-3,Te-2,Te-1);it(be[0]),it(be[1]),it(be[2])}function He(ee,he,oe,Te){Qe(ee),Qe(he),Qe(Te),Qe(he),Qe(oe),Qe(Te);let be=s.length/3,Ke=_.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);it(Ke[0]),it(Ke[1]),it(Ke[3]),it(Ke[1]),it(Ke[2]),it(Ke[3])}function Qe(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function it(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qh[s.type]().fromJSON(s)),new i(n,e.options)}},tb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-d),new J(u,1-p),new J(x,1-g)]:[new J(o,1-l),new J(h,1-d),new J(f,1-p),new J(m,1-g)]}};function nb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends Lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Fr=class i extends Lr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qt=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*u-a;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let M=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),T=_+1+c*g;f.push(M,v,T),f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ja=class i extends ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new I,p=new J;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let _=g+m,M=_,v=_+n+1,S=_+n+2,T=_+1;o.push(M,v,T),o.push(v,S,T)}}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var rn=class i extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],M=g/n,v=a+M*o,S=e*Math.cos(v),T=Math.sqrt(e*e-S*S),b=0;g===0&&a===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){let C=y/t,A=s+C*r;d.x=-T*Math.cos(A),d.y=S,d.z=T*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(C+b,1-M),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let M=h[g][_+1],v=h[g][_],S=h[g+1][_],T=h[g+1][_+1];(g!==0||a>0)&&f.push(M,v,T),(g!==n-1||l<Math.PI)&&f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class i extends ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,p=new I;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ka=class extends ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qf(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=js(i[t]);for(let s in n)e[s]=n[s]}return e}function Qf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ib(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var ri={clone:js,merge:bn},sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sb,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=ib(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new J().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ur=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lt=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yt=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fl=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ya(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ab(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function ob(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jh:r=e,o=2*t-n;break;case Zh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:a=e,l=2*n-t;break;case Zh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+_*a[c+S]+M*a[l+S]+v*a[d+S];return r}},kl=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Bl=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zl=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,_=d[g],M=d[g+1],v=e*u+p*2,S=h[v],T=h[v+1],b=cb(n,t,_,S,s);r[p]=Qp(b,x,M,T,m)}return r}};function Qp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function lb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function cb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Qp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=lb(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ya(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Kh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ya(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ya(this.settings)&&(np(this.settings.inTangents,e),np(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Kg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function np(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Rs;var Oi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=As;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Ja.prototype.ValueTypeName="color";var ki=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ki.prototype.ValueTypeName="number";var Hl=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bi=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Cn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=As;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};hs.prototype.ValueTypeName="vector";var Za=class{constructor(e="",t=-1,n=[],s=Np){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ub(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=ab(l);l=ep(l,1,h),c=ep(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function hb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Ja;case"quaternion":return Bi;case"bool":case"boolean":return Oi;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ub(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hb(i.type);if(i.times===void 0){let n=[],s=[];ob(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ya(i.settings)&&(t.settings={inTangents:is(i.settings.inTangents,Float32Array),outTangents:is(i.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ip(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ip(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ip(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Or=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},em=new Or,di=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},kr=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ri[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){_();function _(){d.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,b=h.length;T<b;T++){let y=h[T];y.onProgress&&y.onProgress(S)}g.enqueue(v),_()}},M=>{g.error(M)})}}});return new Response(m)}else throw new iu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{li.add(`file:${e}`,c);let h=Ri[e];delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=new WeakMap,Gl=class extends di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=br.get(a);d===void 0&&(d=[],br.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Tr("img");function l(){h(),t&&t(this);let d=br.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}br.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),li.remove(`image:${e}`);let u=br.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var $a=class extends di{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,a=new Gl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ks=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bs=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qh=new Ve,sp=new I,rp=new I,Br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(sp),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new I,fl=new zt,oi=new I,Qa=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,fl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new I,ap=new J,op=new J,Dt=class extends Qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,ap,op),t.subVectors(op,ap)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},su=class extends Br{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zs=class extends ks{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ru=class extends Br{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Hi=class extends ks{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gi=class extends Qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},au=class extends Br{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xh=new WeakMap,eo=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Xh.has(a)===!0?(s&&s(Xh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xh.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xr=-90,_r=1,zr=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new Dt(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new Dt(xr,_r,e,t);a.layers=this.layers,this.add(a);let o=new Dt(xr,_r,e,t);o.layers=this.layers,this.add(o);let l=new Dt(xr,_r,e,t);l.layers=this.layers,this.add(l);let c=new Dt(xr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vl=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},to=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=db.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function db(){this._document.hidden===!1&&this.reset()}var Nu="\\[\\]\\.:\\/",fb=new RegExp("["+Nu+"]","g"),Fu="[^"+Nu+"]",pb="[^"+Nu.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",Fu),gb=/(WCOD+)?/.source.replace("WCOD",pb),bb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),_b=new RegExp("^"+mb+gb+bb+xb+"$"),vb=["material","materials","bones","map"],ou=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){let t=_b.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=ou;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tS=new Float32Array(1);var lp=new Ve,no=class{constructor(e,t,n=0,s=1/0){this.ray=new rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(e,t=!0,n=[]){return lu(e,this,n,t),n.sort(cp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)lu(e[s],this,n,t);return n.sort(cp),n}};function cp(i,e){return i.distance-e.distance}function lu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)lu(r[a],e,t,!0)}}var Hu=class Hu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Hu.prototype.isMatrix2=!0;var cu=Hu;function Uu(i,e,t,n){let s=yb(n);switch(t){case vu:return i*e;case $l:return i*e/s.components*s.byteLength;case Ql:return i*e/s.components*s.byteLength;case us:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case yu:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case po:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mo:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yb(i){switch(i){case In:case gu:return{byteLength:1,components:1};case qr:case bu:case hn:return{byteLength:2,components:1};case Jl:case Zl:return{byteLength:2,components:4};case ii:case Yl:case On:return{byteLength:4,components:1};case xu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Mm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sb(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
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
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb=`#ifdef USE_BATCHING
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
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,kb=`#ifdef USE_BUMPMAP
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
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
#endif`,yx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
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
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform float backgroundBlurriness;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,U_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,q_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,K_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,J_=`#define TOON
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
}`,Z_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ev=`uniform vec3 color;
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
}`,tv=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Tb,alphahash_pars_fragment:Eb,alphamap_fragment:wb,alphamap_pars_fragment:Ab,alphatest_fragment:Rb,alphatest_pars_fragment:Cb,aomap_fragment:Pb,aomap_pars_fragment:Ib,batching_pars_vertex:Lb,batching_vertex:Db,begin_vertex:Nb,beginnormal_vertex:Fb,bsdfs:Ub,iridescence_fragment:Ob,bumpmap_pars_fragment:kb,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Hb,clipping_planes_vertex:Gb,color_fragment:Vb,color_pars_fragment:Wb,color_pars_vertex:qb,color_vertex:Xb,common:jb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Yb,displacementmap_vertex:Jb,emissivemap_fragment:Zb,emissivemap_pars_fragment:$b,colorspace_fragment:Qb,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:bx,lights_phong_fragment:xx,lights_phong_pars_fragment:_x,lights_physical_fragment:vx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:Tx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Ix,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Ux,morphcolor_vertex:Ox,morphnormal_vertex:kx,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Gx,normal_pars_fragment:Vx,normal_pars_vertex:Wx,normal_vertex:qx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Jx,opaque_fragment:Zx,packing:$x,premultiplied_alpha_fragment:Qx,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:a_,shadowmap_vertex:o_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:b_,transmission_pars_fragment:x_,uv_pars_fragment:__,uv_pars_vertex:v_,uv_vertex:y_,worldpos_vertex:M_,background_vert:S_,background_frag:T_,backgroundCube_vert:E_,backgroundCube_frag:w_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distance_vert:I_,distance_frag:L_,equirect_vert:D_,equirect_frag:N_,linedashed_vert:F_,linedashed_frag:U_,meshbasic_vert:O_,meshbasic_frag:k_,meshlambert_vert:B_,meshlambert_frag:z_,meshmatcap_vert:H_,meshmatcap_frag:G_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:q_,meshphong_frag:X_,meshphysical_vert:j_,meshphysical_frag:K_,meshtoon_vert:Y_,meshtoon_frag:J_,points_vert:Z_,points_frag:$_,shadow_vert:Q_,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},Me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},bi={basic:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:bn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:bn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:bn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:bn([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:bn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:bn([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:bn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:bn([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:bn([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:bn([Me.lights,Me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};bi.physical={uniforms:bn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Dc={r:0,b:0,g:0},iv=new Ve,Sm=new qe;Sm.set(-1,0,0,0,1,0,0,0,1);function sv(i,e,t,n,s,r){let a=new xe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(_){let M=!1,v=f(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new Fe(new It(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:js(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sm),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==dt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Fe(new qt(2,2),new Xt({name:"BackgroundMaterial",uniforms:js(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Dc,Du(i)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:x,dispose:g}}function rv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,N,O,L,H){let W=!1,G=d(P,L,O,N);r!==G&&(r=G,c(r.object)),W=f(P,L,O,H),W&&p(P,L,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,N,O,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,O,L){let H=L.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let G=P.isInstancedMesh===!0?P.id:0,ne=W[G];ne===void 0&&(ne={},W[G]=ne);let q=ne[O.id];q===void 0&&(q={},ne[O.id]=q);let Q=q[H];return Q===void 0&&(Q=u(l()),q[H]=Q),Q}function u(P){let N=[],O=[],L=[];for(let H=0;H<t;H++)N[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,N,O,L){let H=r.attributes,W=N.attributes,G=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let te=H[q],Ee=W[q];if(Ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function p(P,N,O,L){let H={},W=N.attributes,G=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let te=W[q];te===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));let Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),H[q]=Ee,G++}r.attributes=H,r.attributesNum=G,r.index=L}function x(){let P=r.newAttributes;for(let N=0,O=P.length;N<O;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let O=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;O[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),H[P]!==N&&(i.vertexAttribDivisor(P,N),H[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==P[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function M(P,N,O,L,H,W,G){G===!0?i.vertexAttribIPointer(P,N,O,H,W):i.vertexAttribPointer(P,N,O,L,H,W)}function v(P,N,O,L){x();let H=L.attributes,W=O.getAttributes(),G=N.defaultAttributeValues;for(let ne in W){let q=W[ne];if(q.location>=0){let Q=H[ne];if(Q===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let te=Q.normalized,Ee=Q.itemSize,ze=e.get(Q);if(ze===void 0)continue;let j=ze.buffer,_e=ze.type,we=ze.bytesPerElement,Oe=_e===i.INT||_e===i.UNSIGNED_INT||Q.gpuType===Yl;if(Q.isInterleavedBufferAttribute){let ve=Q.data,ke=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Ct=Q.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)g(q.location+He,ve.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);i.bindBuffer(i.ARRAY_BUFFER,j);for(let He=0;He<q.locationSize;He++)M(q.location+He,Ee/q.locationSize,_e,te,ke*we,(Ct+Ee/q.locationSize*He)*we,Oe)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)g(q.location+ve,Q.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ve=0;ve<q.locationSize;ve++)M(q.location+ve,Ee/q.locationSize,_e,te,Ee*we,Ee/q.locationSize*ve*we,Oe)}}else if(G!==void 0){let te=G[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}_()}function S(){C();for(let P in n){let N=n[P];for(let O in N){let L=N[O];for(let H in L){let W=L[H];for(let G in W)h(W[G].object),delete W[G];delete L[H]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let O in N){let L=N[O];for(let H in L){let W=L[H];for(let G in W)h(W[G].object),delete W[G];delete L[H]}}delete n[P.id]}function b(P){for(let N in n){let O=n[N];for(let L in O){let H=O[L];if(H[P.id]===void 0)continue;let W=H[P.id];for(let G in W)h(W[G].object),delete W[G];delete H[P.id]}}}function y(P){for(let N in n){let O=n[N],L=P.isInstancedMesh===!0?P.id:0,H=O[L];if(H!==void 0){for(let W in H){let G=H[W];for(let ne in G)h(G[ne].object),delete G[ne];delete H[W]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function C(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function av(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ov(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let y=b===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==In&&b!==On&&!y&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:T}}function lv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ni,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,M=_*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,f);for(let S=0;S!==M;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var vo=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Wi});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Kt),new zr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},tm=256,cv=3,hv=20,Tm=256,Em=16,uv=3,dv=new I,fv=new xe,ds=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zr(1,10,null),this._boxMesh=new Fe(new It(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=dv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(fv));let m=new zr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tm,Cu(e))}_fromTexture(e,t){e.mapping===Ws||e.mapping===Vr?this._setSize(e.image.length===0?tm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nm(e,!1,!1),n=Math.log2(e)-cv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ws||e.mapping===Vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=im()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=pv(),this._integrationMaterial=mv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Em);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-uv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Tm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function nm(i,e,t){return new vo(i,{minFilter:Xn,generateMipmaps:e,type:hn,colorSpace:Mn,depthBuffer:t})}function yo(i,e,t){return new Xt({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Zt,blending:Wi,depthTest:!1,depthWrite:!1})}function pv(){return yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tm}u

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
	`)}function mv(){return yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Em}},`

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
	`)}function gv(){return yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hv}
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
	`)}function im(){return yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sm(){return yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Xl||f===jl)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new vo(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Xl||f===jl,x=f===Ws||f===Vr;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ds(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new ds(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Xl?u.mapping=Ws:f===jl&&(u.mapping=Vr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function xv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function _v(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Ia:Pa,v=new M(Math.ceil(_/3)*6,1),S=v.array;if(x!==null){let b=x.array;g=x.version;for(let y=0,C=0;y<_;y+=3){let A=b[y+0],P=b[y+1],N=b[y+2];S[C++]=A,S[C++]=P,S[C++]=P,S[C++]=N,S[C++]=N,S[C++]=A}}else{g=m.version;for(let b=0,y=0;b<_;b+=3){let C=b+0,A=b+1,P=b+2;S[y++]=C,S[y++]=A,S[y++]=A,S[y++]=P,S[y++]=P,S[y++]=C}}v.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function vv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let C=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*S*4*d),b=new Ra(T,v,S,d);b.type=On,b.needsUpdate=!0;let y=M*4;for(let A=0;A<d;A++){let P=m[A],N=g[A],O=_[A],L=v*S*4*A;for(let H=0;H<P.count;H++){let W=H*y;f===!0&&(s.fromBufferAttribute(P,H),T[L+W+0]=s.x,T[L+W+1]=s.y,T[L+W+2]=s.z,T[L+W+3]=0),p===!0&&(s.fromBufferAttribute(N,H),T[L+W+4]=s.x,T[L+W+5]=s.y,T[L+W+6]=s.z,T[L+W+7]=0),x===!0&&(s.fromBufferAttribute(O,H),T[L+W+8]=s.x,T[L+W+9]=s.y,T[L+W+10]=s.z,T[L+W+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new J(v,S)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Tv={[io]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[oo]:"AGX_TONE_MAPPING",[lo]:"NEUTRAL_TONE_MAPPING",[ao]:"CUSTOM_TONE_MAPPING"};function Ev(i,e,t,n,s,r){let a=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ft;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let d=new Ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(h,d),f=new Gi(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,M=[],v=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let b=0;b<M.length;b++){let y=M[b];y.setSize&&y.setSize(S,T)}},this.setEffects=function(S){M=S,v=M.length>0&&M[0].isRenderPass===!0;let T=a.width,b=a.height;M.length>0&&o===null&&(o=new Jt(T,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(T,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&M.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ni(T,b),r===!0&&(c.format=qi,c.type=Xs)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(T,b),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,T){if(m||S.toneMapping===mi&&M.length===0)return!1;if(_=T,T!==null){let b=T.width,y=T.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return v===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(S,T){S.toneMapping=g,m=!0;let b=a,y=o;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(S,y,b,T),A.needsSwap!==!1&&(b=y,y=y===o?l:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,d.defines={},Je.getTransfer(p)===dt&&(d.defines.SRGB_TRANSFER="");let C=Tv[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(_),S.render(u,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var wm=new Yt,Am=new Ni(1,1),Rm=new Oa(1),Cm=new Ra,Pm=new El,Im=new Ua,rm=[],am=[],om=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rm[s];if(r===void 0&&(r=new Float32Array(s),rm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uc(i,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function Pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;cm.set(n),i.uniformMatrix2fv(this.addr,!1,cm),Qt(t,n)}}function Iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;lm.set(n),i.uniformMatrix3fv(this.addr,!1,lm),Qt(t,n)}}function Lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;om.set(n),i.uniformMatrix4fv(this.addr,!1,om),Qt(t,n)}}function Dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function Oc(i){return i.version===0&&(i.compareFunction=Eu,i.needsUpdate=!0),i}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Oc(Am):r=wm,t.setTexture2D(e||r,s)}function Gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pm,s)}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Oc(Rm):r=Im,t.setTextureCube(e||r,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cm,s)}function qv(i){switch(i){case 5126:return wv;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return kv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Wv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function jv(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function Kv(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jv(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zv(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $v(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qv(i,e){i.uniform1iv(this.addr,e)}function ey(i,e){i.uniform2iv(this.addr,e)}function ty(i,e){i.uniform3iv(this.addr,e)}function ny(i,e){i.uniform4iv(this.addr,e)}function iy(i,e){i.uniform1uiv(this.addr,e)}function sy(i,e){i.uniform2uiv(this.addr,e)}function ry(i,e){i.uniform3uiv(this.addr,e)}function ay(i,e){i.uniform4uiv(this.addr,e)}function oy(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oc(Am):a=wm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ly(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pm,r[a])}function cy(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Oc(Rm):a=Im;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function hy(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cm,r[a])}function uy(i){switch(i){case 5126:return Xv;case 35664:return jv;case 35665:return Kv;case 35666:return Yv;case 35674:return Jv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Qv;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}var Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}},Xu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function hm(i,e){i.seq.push(e),i.map[e.id]=e}function dy(i,e,t){let n=i.name,s=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),a=Gu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hm(t,c===void 0?new Wu(o,i,e):new qu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Xu(o),hm(t,d)),t=d}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function um(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fy=37297,py=0;function my(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dm=new qe;function gy(i){Je._getMatrix(dm,Je.workingColorSpace,i);let e=`mat3( ${dm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+my(i.getShaderSource(e),o)}else return r}function by(i,e){let t=gy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xy={[io]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[Vs]:"ACESFilmic",[oo]:"AgX",[lo]:"Neutral",[ao]:"Custom"};function _y(i,e){let t=xy[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new I;function vy(){Je.getLuminanceCoefficients(Nc);let i=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function My(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _o(i){return i!==""}function pm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function mm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(i){return i.replace(Ty,Ey)}function Ey(i,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ju(t)}var wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(i){return i.replace(wy,Ay)}function Ay(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ry={[Hs]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function Cy(i){return Ry[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Py={[Vr]:"ENVMAP_MODE_REFRACTION"};function Iy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Py[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ly={[ql]:"ENVMAP_BLENDING_MULTIPLY",[Ip]:"ENVMAP_BLENDING_MIX",[Lp]:"ENVMAP_BLENDING_ADD"};function Dy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ly[i.combine]||"ENVMAP_BLENDING_NONE"}function Ny(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Iy(t),d=Dy(t),u=yy(t),f=My(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_o).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_o).join(`
`),m.length>0&&(m+=`
`)):(x=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?$e.tonemapping_pars_fragment:"",t.toneMapping!==mi?_y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,by("linearToOutputTexel",t.outputColorSpace),vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),a=ju(a),a=pm(a,t),a=mm(a,t),o=ju(o),o=pm(o,t),o=mm(o,t),a=gm(a),o=gm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+a,M=g+m+o,v=um(s,s.VERTEX_SHADER,_),S=um(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(A){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(S)||"",L=P.trim(),H=N.trim(),W=O.trim(),G=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,S);else{let q=fm(s,v,"vertex"),Q=fm(s,S,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+q+`
`+Q)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(H===""||W==="")&&(ne=!1);ne&&(A.diagnostics={runnable:G,programLog:L,vertexShader:{log:H,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(v),s.deleteShader(S),b=new jr(s,p),y=Sy(s,p)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,fy)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=S,this}var Fy=0,Ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yu(e),t.set(e,n)),n}},Yu=class{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}};function Uy(i){return i===us||i===po||i===mo}function Oy(i,e,t,n,s,r){let a=new Ar,o=new Ku,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,y,C,A,P,N){let O=A.fog,L=P.geometry,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||H,W),ne=u[b.type],q=n.precision;b.precision!==null&&(q=n.getMaxPrecision(b.precision),q!==b.precision&&Le("WebGLProgram.getParameters:",b.precision,"not supported, using",q,"instead."));let Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=Q!==void 0?Q.length:0,Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let ze,j,_e,we;if(ne){let ye=bi[ne];ze=ye.vertexShader,j=ye.fragmentShader}else{ze=b.vertexShader,j=b.fragmentShader;let ye=o.getVertexShaderStage(b),_t=o.getFragmentShaderStage(b);o.update(b,ye,_t),_e=ye.id,we=_t.id}let Oe=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),ke=P.isInstancedMesh===!0,Ct=P.isBatchedMesh===!0,He=!!b.map,Qe=!!b.matcap,it=!!G,ee=it&&G.isPMREMTexture===!0,he=!!b.aoMap,oe=!!b.lightMap,Te=!!b.bumpMap&&b.wireframe===!1,be=!!b.normalMap,Ke=!!b.displacementMap,De=!!b.emissiveMap,st=!!b.metalnessMap,rt=!!b.roughnessMap,ut=b.anisotropy>0,U=b.clearcoat>0,Ht=b.diffuseRoughness>0,nt=b.dispersion>0,St=b.retroreflectivity>0,pe=b.iridescence>0,kt=b.sheen>0,Be=b.transmission>0,We=ut&&!!b.anisotropyMap,R=U&&!!b.clearcoatMap,E=U&&!!b.clearcoatNormalMap,B=U&&!!b.clearcoatRoughnessMap,ie=Ht&&!!b.diffuseRoughnessMap,$=pe&&!!b.iridescenceMap,le=pe&&!!b.iridescenceThicknessMap,me=kt&&!!b.sheenColorMap,K=kt&&!!b.sheenRoughnessMap,Y=!!b.specularMap,ue=!!b.specularColorMap,D=!!b.specularIntensityMap,Z=Be&&!!b.transmissionMap,X=Be&&!!b.thicknessMap,de=!!b.gradientMap,re=!!b.alphaMap,ce=b.alphaTest>0,Ne=!!b.alphaHash,Ze=!!b.extensions,se=mi;b.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(se=i.toneMapping);let Ue=ee?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ye={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:j,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:q,batching:Ct,batchingColor:Ct&&P._colorsTexture!==null,instancing:ke,instancingColor:ke&&P.instanceColor!==null,instancingMorph:ke&&P.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:Qe,envMap:it,envMapMode:it&&G.mapping,envMapPMREM:ee,envMapMaxLod:ee?Ue.length-1:null,envMapSize:ee?Ue[0].width:null,aoMap:he,lightMap:oe,bumpMap:Te,normalMap:be,displacementMap:Ke,emissiveMap:De,normalMapObjectSpace:be&&b.normalMapType===Up,normalMapTangentSpace:be&&b.normalMapType===bo,packedNormalMap:be&&b.normalMapType===bo&&Uy(b.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:ut,anisotropyMap:We,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:B,diffuseRoughness:Ht,diffuseRoughnessMap:ie,dispersion:nt,retroreflection:St,iridescence:pe,iridescenceMap:$,iridescenceThicknessMap:le,sheen:kt,sheenColorMap:me,sheenRoughnessMap:K,specularMap:Y,specularColorMap:ue,specularIntensityMap:D,transmission:Be,transmissionMap:Z,thicknessMap:X,gradientMap:de,opaque:b.transparent===!1&&b.blending===Gr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:Ne,combine:b.combine,mapUv:He&&f(b.map.channel),aoMapUv:he&&f(b.aoMap.channel),lightMapUv:oe&&f(b.lightMap.channel),bumpMapUv:Te&&f(b.bumpMap.channel),normalMapUv:be&&f(b.normalMap.channel),displacementMapUv:Ke&&f(b.displacementMap.channel),emissiveMapUv:De&&f(b.emissiveMap.channel),metalnessMapUv:st&&f(b.metalnessMap.channel),roughnessMapUv:rt&&f(b.roughnessMap.channel),anisotropyMapUv:We&&f(b.anisotropyMap.channel),clearcoatMapUv:R&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(b.sheenRoughnessMap.channel),specularMapUv:Y&&f(b.specularMap.channel),specularColorMapUv:ue&&f(b.specularColorMap.channel),specularIntensityMapUv:D&&f(b.specularIntensityMap.channel),transmissionMapUv:Z&&f(b.transmissionMap.channel),thicknessMapUv:X&&f(b.thicknessMap.channel),alphaMapUv:re&&f(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||ut),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(He||re),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&b.extensions.multiDraw===!0||Ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function x(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(m(y,b),g(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function m(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapPMREM),b.push(y.envMapMaxLod),b.push(y.envMapSize),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.diffuseRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.numSunLights),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numSunLightShadows),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.numLightProbeGrids),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function g(b,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function _(b){let y=u[b.type],C;if(y){let A=bi[y];C=ri.clone(A.uniforms)}else C=b.uniforms;return C}function M(b,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new Ny(i,y,b,s),c.push(C),h.set(y,C)),C}function v(b){if(--b.usedTimes===0){let y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function S(b){o.remove(b)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function ky(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function By(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _m(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=g),e++,_}function l(u,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let M=o(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(u,f,p,x,m,g){let _=o(u,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||By),n.length>1&&n.sort(f||xm),s.length>1&&s.sort(f||xm)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function zy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new _m,i.set(n,[a])):s>=r.length?(a=new _m,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Gy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vy=0;function Wy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qy(i){let e=new Hy,t=Gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ve,a=new Ve;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,M=0,v=0,S=0,T=0,b=0,y=0,C=0,A=0;c.sort(Wy);for(let N=0,O=c.length;N<O;N++){let L=c[N],H=L.color,W=L.intensity,G=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===us?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*W,d+=H.g*W,u+=H.b*W;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],W);A++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=te,n.sunShadowMap[p]=ne;let Ee=Q.getViewportCount();for(let ze=0;ze<Ee;ze++)n.sunShadowMatrix[x+ze]=Q.getMatrix(ze),n.sunShadowCascade[x+ze]=Q._cascadeData[ze];x+=Ee,p++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(W),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;let Q=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Q.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[_]=te,n.spotShadowMap[_]=ne,b++}_++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(H).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=q,M++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(W),q.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[v]=q,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==T||P.numSpotShadows!==b||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=T,P.numSpotShadows=b,P.numSpotMaps=y,P.numLightProbes=A,n.version=Vy++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function vm(i){let e=new qy(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Xy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vm(i),e.set(s,[o])):r>=a.length?(o=new vm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
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
}`,Yy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Jy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ym=new Ve,xo=new I,Vu=new I;function Zy(i,e,t){let n=new as,s=new J,r=new J,a=new vt,o=new Fl,l=new Ul,c={},h=t.maxTextureSize,d={[pi]:Zt,[Zt]:pi,[an]:an},u=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:jy,fragmentShader:Ky}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ft;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let g=this.type;this.render=function(T,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===dp&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let C=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=g!==this.type;O&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=T.length;L<H;L++){let W=T[L],G=W.shadow;if(G===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Hr){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Jt(s.x,s.y,{format:us,type:hn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Ni(s.x,s.y,On),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft}else W.isPointLight?(G.map=new vo(s.x),G.map.depthTexture=new Oa(s.x,ii)):(G.map=new Jt(s.x,s.y),G.map.depthTexture=new Ni(s.x,s.y,ii)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Ii,this.type===Hs?(G.map.depthTexture.compareFunction=q?Tu:Su,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,y);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let Ee=0;Ee<Q;Ee++){let ze=G.getCamera(Ee);if(W.isPointLight){let j=G.camera,_e=G.matrix,we=W.distance||j.far;we!==j.far&&(j.far=we,j.updateProjectionMatrix()),xo.setFromMatrixPosition(W.matrixWorld),j.position.copy(xo),Vu.copy(j.position),Vu.add(Yy[Ee]),j.up.copy(Jy[Ee]),j.lookAt(Vu),j.updateMatrixWorld(),_e.makeTranslation(-xo.x,-xo.y,-xo.z),ym.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ym,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(G.map),i.clear());let j=G.getViewport(Ee);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(a)}n=G.getFrustum(Ee),v(b,y,ze,W,te,this.type)}G.isPointLightShadow!==!0&&this.type===Hr&&_(G,y),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(C,A,P)};function _(T,b){let y=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jt(s.x,s.y,{format:us,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,y,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,y,f,x,null)}function M(T,b,y,C){let A=null,P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=y.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let N=A.uuid,O=b.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let H=L[O];H===void 0&&(H=A.clone(),L[O]=H,b.addEventListener("dispose",S)),A=H}if(A.visible=b.visible,A.wireframe=b.wireframe,C===Hr?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=y}return A}function v(T,b,y,C,A,P){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Hr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let L=e.update(T),H=T.material;if(Array.isArray(H)){let W=L.groups;for(let G=0,ne=W.length;G<ne;G++){let q=W[G],Q=H[q.materialIndex];if(Q&&Q.visible){let te=M(T,Q,C,P);T.onBeforeShadow(i,T,b,y,L,te,q),i.renderBufferDirect(y,null,L,te,T,q),T.onAfterShadow(i,T,b,y,L,te,q)}}}else if(H.visible){let W=M(T,H,C,P);T.onBeforeShadow(i,T,b,y,L,W,null),i.renderBufferDirect(y,null,L,W,T,null),T.onAfterShadow(i,T,b,y,L,W,null)}}let O=T.children;for(let L=0,H=O.length;L<H;L++)v(O[L],b,y,C,A,P)}function S(T){T.target.removeEventListener("dispose",S);for(let y in c){let C=c[y],A=T.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function $y(i,e){function t(){let D=!1,Z=new vt,X=null,de=new vt(0,0,0,0);return{setMask:function(re){X!==re&&!D&&(i.colorMask(re,re,re,re),X=re)},setLocked:function(re){D=re},setClear:function(re,ce,Ne,Ze,se){se===!0&&(re*=Ze,ce*=Ze,Ne*=Ze),Z.set(re,ce,Ne,Ze),de.equals(Z)===!1&&(i.clearColor(re,ce,Ne,Ze),de.copy(Z))},reset:function(){D=!1,X=null,de.set(-1,0,0,0)}}}function n(){let D=!1,Z=!1,X=null,de=null,re=null;return{setReversed:function(ce){if(Z!==ce){let Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Z=ce;let Ze=re;re=null,this.setClear(Ze)}},getReversed:function(){return Z},setTest:function(ce){ce?ve(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ce){X!==ce&&!D&&(i.depthMask(ce),X=ce)},setFunc:function(ce){if(Z&&(ce=Xp[ce]),de!==ce){switch(ce){case gl:i.depthFunc(i.NEVER);break;case bl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ce}},setLocked:function(ce){D=ce},setClear:function(ce){re!==ce&&(re=ce,Z&&(ce=1-ce),i.clearDepth(ce))},reset:function(){D=!1,X=null,de=null,re=null,Z=!1}}}function s(){let D=!1,Z=null,X=null,de=null,re=null,ce=null,Ne=null,Ze=null,se=null;return{setTest:function(Ue){D||(Ue?ve(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Ue){Z!==Ue&&!D&&(i.stencilMask(Ue),Z=Ue)},setFunc:function(Ue,Ye,ye){(X!==Ue||de!==Ye||re!==ye)&&(i.stencilFunc(Ue,Ye,ye),X=Ue,de=Ye,re=ye)},setOp:function(Ue,Ye,ye){(ce!==Ue||Ne!==Ye||Ze!==ye)&&(i.stencilOp(Ue,Ye,ye),ce=Ue,Ne=Ye,Ze=ye)},setLocked:function(Ue){D=Ue},setClear:function(Ue){se!==Ue&&(i.clearStencil(Ue),se=Ue)},reset:function(){D=!1,Z=null,X=null,de=null,re=null,ce=null,Ne=null,Ze=null,se=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,S=null,T=null,b=null,y=new xe(0,0,0),C=0,A=!1,P=null,N=null,O=null,L=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=ne>=2);let Q=null,te={},Ee=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),j=new vt().fromArray(Ee),_e=new vt().fromArray(ze);function we(D,Z,X,de){let re=new Uint8Array(4),ce=i.createTexture();i.bindTexture(D,ce),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<X;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(Z+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return ce}let Oe={};Oe[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(yr),Te(!1),be(hu),ve(i.CULL_FACE),he(Wi);function ve(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ke(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ct(D,Z){return u[D]!==Z?(i.bindFramebuffer(D,Z),u[D]=Z,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function He(D,Z){let X=p,de=!1;if(D){X=f.get(Z),X===void 0&&(X=[],f.set(Z,X));let re=D.textures;if(X.length!==re.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ne=re.length;ce<Ne;ce++)X[ce]=i.COLOR_ATTACHMENT0+ce;X.length=re.length,de=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,de=!0);de&&i.drawBuffers(X)}function Qe(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let it={[Gs]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};it[gp]=i.MIN,it[bp]=i.MAX;let ee={[xp]:i.ZERO,[_p]:i.ONE,[vp]:i.SRC_COLOR,[fu]:i.SRC_ALPHA,[wp]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[Mp]:i.DST_ALPHA,[yp]:i.ONE_MINUS_SRC_COLOR,[pu]:i.ONE_MINUS_SRC_ALPHA,[Ep]:i.ONE_MINUS_DST_COLOR,[Sp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[Rp]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function he(D,Z,X,de,re,ce,Ne,Ze,se,Ue){if(D===Wi){m===!0&&(ke(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),D!==fp){if(D!==g||Ue!==A){if((_!==Gs||S!==Gs)&&(i.blendEquation(i.FUNC_ADD),_=Gs,S=Gs),Ue)switch(D){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pn:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",D);break}else switch(D){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",D);break}M=null,v=null,T=null,b=null,y.set(0,0,0),C=0,g=D,A=Ue}return}re=re||Z,ce=ce||X,Ne=Ne||de,(Z!==_||re!==S)&&(i.blendEquationSeparate(it[Z],it[re]),_=Z,S=re),(X!==M||de!==v||ce!==T||Ne!==b)&&(i.blendFuncSeparate(ee[X],ee[de],ee[ce],ee[Ne]),M=X,v=de,T=ce,b=Ne),(Ze.equals(y)===!1||se!==C)&&(i.blendColor(Ze.r,Ze.g,Ze.b,se),y.copy(Ze),C=se),g=D,A=!1}function oe(D,Z){D.side===an?ke(i.CULL_FACE):ve(i.CULL_FACE);let X=D.side===Zt;Z&&(X=!X),Te(X),D.blending===Gr&&D.transparent===!1?he(Wi):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function be(D){D!==hp?(ve(i.CULL_FACE),D!==N&&(D===hu?i.cullFace(i.BACK):D===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),N=D}function Ke(D){D!==O&&(G&&i.lineWidth(D),O=D)}function De(D,Z,X){D?(ve(i.POLYGON_OFFSET_FILL),(L!==Z||H!==X)&&(L=Z,H=X,a.getReversed()&&(Z=-Z,X=-X),i.polygonOffset(Z,X))):ke(i.POLYGON_OFFSET_FILL)}function st(D){D?ve(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function rt(D){D===void 0&&(D=i.TEXTURE0+W-1),Q!==D&&(i.activeTexture(D),Q=D)}function ut(D,Z,X){X===void 0&&(Q===null?X=i.TEXTURE0+W-1:X=Q);let de=te[X];de===void 0&&(de={type:void 0,texture:void 0},te[X]=de),(de.type!==D||de.texture!==Z)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(D,Z||Oe[D]),de.type=D,de.texture=Z)}function U(){let D=te[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function St(){try{i.texSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function pe(){try{i.texSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function kt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function We(){try{i.texStorage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function E(){try{i.texImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function B(){try{i.texImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ie(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function $(D,Z){d[D]!==Z&&(i.pixelStorei(D,Z),d[D]=Z)}function le(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function me(D){_e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function K(D,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let de=X.get(D);de===void 0&&(de=i.getUniformBlockIndex(Z,D.name),i.uniformBlockBinding(Z,de,de),X.set(D,de))}function Y(D,Z,X){let re=c.get(Z).get(D);l[re]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,X),l[re]=X)}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,te={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,S=null,T=null,b=null,y=new xe(0,0,0),C=0,A=!1,P=null,N=null,O=null,L=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:ke,bindFramebuffer:Ct,drawBuffers:He,useProgram:Qe,setBlending:he,setMaterial:oe,setFlipSided:Te,setCullFace:be,setLineWidth:Ke,setPolygonOffset:De,setScissorTest:st,activeTexture:rt,bindTexture:ut,unbindTexture:U,compressedTexImage2D:Ht,compressedTexImage3D:nt,texImage2D:E,texImage3D:B,pixelStorei:$,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:Y,texStorage2D:We,texStorage3D:R,texSubImage2D:St,texSubImage3D:pe,compressedTexSubImage2D:kt,compressedTexSubImage3D:Be,scissor:le,viewport:me,reset:ue}}function Qy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):Tr("canvas")}function _(R,E,B){let ie=1,$=We(R);if(($.width>B||$.height>B)&&(ie=B/Math.max($.width,$.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let le=Math.floor(ie*$.width),me=Math.floor(ie*$.height);u===void 0&&(u=g(le,me));let K=E?g(le,me):u;return K.width=le,K.height=me,K.getContext("2d").drawImage(R,0,0,le,me),Le("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+le+"x"+me+")."),K}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,E,B,ie,$,le=!1){if(R!==null){if(i[R]!==void 0)return i[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;ie&&(me=e.get("EXT_texture_norm16"),me||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&me&&(K=me.R16_EXT),B===i.SHORT&&me&&(K=me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),E===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&me&&(K=me.RG16_EXT),B===i.SHORT&&me&&(K=me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(B===i.UNSIGNED_SHORT&&me&&(K=me.RGB16_EXT),B===i.SHORT&&me&&(K=me.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){let Y=le?wa:Je.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Y===dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&me&&(K=me.RGBA16_EXT),B===i.SHORT&&me&&(K=me.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,E){let B;return R?E===null||E===ii||E===Xs?B=i.DEPTH24_STENCIL8:E===On?B=i.DEPTH32F_STENCIL8:E===qr&&(B=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Xs?B=i.DEPTH_COMPONENT24:E===On?B=i.DEPTH_COMPONENT32F:E===qr&&(B=i.DEPTH_COMPONENT16),B}function y(R,E){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){let E=new WeakRef(R);n.get(R).__ref=E,p.add(E),x.register(R,E,E)}function A(R){let E=n.get(R).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function P(R){O(R.target)}function N(R){L(R.target)}function O(R){R.removeEventListener("dispose",P),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",N),A(R),ne(R)}function H(){for(let R of p){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):O(E))}p.clear(),d.clear()}function W(R){let E=n.get(R);if(E.__webglInit===void 0)return;let B=R.source,ie=f.get(B);if(ie){let $=ie[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(R),Object.keys(ie).length===0&&f.delete(B)}n.remove(R)}function G(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let B=R.source,ie=f.get(B);delete ie[E.__cacheKey],a.memory.textures--}function ne(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&O(B),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let le=0;le<E.__webglFramebuffer[$].length;le++)i.deleteFramebuffer(E.__webglFramebuffer[$][le]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ie=R.textures;for(let $=0,le=ie.length;$<le;$++){let me=n.get(ie[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(ie[$])}n.remove(R)}let q=0;function Q(){q=0}function te(){return q}function Ee(R){q=R}function ze(){let R=q;return R>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function j(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function _e(R,E){let B=n.get(R);if(R.isVideoTexture&&kt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let ie=R.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,R,E);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function we(R,E){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){oe(B,R,E);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function Oe(R,E){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){oe(B,R,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function ve(R,E){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Te(B,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}let ke={[An]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},Ct={[Ft]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},He={[kp]:i.NEVER,[Eu]:i.ALWAYS,[Bp]:i.LESS,[Su]:i.LEQUAL,[zp]:i.EQUAL,[Tu]:i.GEQUAL,[Hp]:i.GREATER,[Gp]:i.NOTEQUAL};function Qe(R,E){if(E.type===On&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===Wr||E.magFilter===qs||E.magFilter===Xn||E.minFilter===Kt||E.minFilter===Wr||E.minFilter===qs||E.minFilter===Xn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ke[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ke[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ke[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ct[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ct[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ft||E.minFilter!==qs&&E.minFilter!==Xn||E.type===On&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function it(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P),C(E));let ie=E.source,$=f.get(ie);$===void 0&&($={},f.set(ie,$));let le=j(E);if(le!==R.__cacheKey){$[le]===void 0&&($[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[le].usedTimes++;let me=$[R.__cacheKey];me!==void 0&&($[R.__cacheKey].usedTimes--,me.usedTimes===0&&G(E)),R.__cacheKey=le,R.__webglTexture=$[le].texture}return B}function ee(R,E,B){return Math.floor(Math.floor(R/B)/E)}function he(R,E,B,ie){let le=R.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,B,ie,E.data);else{le.sort((D,Z)=>D.start-Z.start);let me=0;for(let D=1;D<le.length;D++){let Z=le[me],X=le[D],de=Z.start+Z.count,re=ee(X.start,E.width,4),ce=ee(Z.start,E.width,4);X.start<=de+1&&re===ce&&ee(X.start+X.count-1,E.width,4)===re?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++me,le[me]=X)}le.length=me+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let D=0,Z=le.length;D<Z;D++){let X=le[D],de=Math.floor(X.start/4),re=Math.ceil(X.count/4),ce=de%E.width,Ne=Math.floor(de/E.width),Ze=re,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(i.TEXTURE_2D,0,ce,Ne,Ze,se,B,ie,E.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function oe(R,E,B){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);let $=it(R,E),le=E.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+B);let me=n.get(le);if(le.version!==me.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),Ue=E.colorSpace===Xi?null:Je.getPrimaries(E.colorSpace),Ye=E.colorSpace===Xi||se===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Y=_(E.image,!1,s.maxTextureSize);Y=Be(E,Y);let ue=r.convert(E.format,E.colorSpace),D=r.convert(E.type),Z=T(E.internalFormat,ue,D,E.normalized,E.colorSpace,E.isVideoTexture);Qe(ie,E);let X,de=E.mipmaps,re=E.isVideoTexture!==!0,ce=me.__version===void 0||$===!0,Ne=le.dataReady,Ze=y(E,Y);if(E.isDepthTexture)Z=b(E.format===qi,E.type),ce&&(re?t.texStorage2D(i.TEXTURE_2D,1,Z,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ue,D,null));else if(E.isDataTexture)if(de.length>0){re&&ce&&t.texStorage2D(i.TEXTURE_2D,Ze,Z,de[0].width,de[0].height);for(let se=0,Ue=de.length;se<Ue;se++)X=de[se],re?Ne&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,ue,D,X.data):t.texImage2D(i.TEXTURE_2D,se,Z,X.width,X.height,0,ue,D,X.data);E.generateMipmaps=!1}else re?(ce&&t.texStorage2D(i.TEXTURE_2D,Ze,Z,Y.width,Y.height),Ne&&he(E,Y,ue,D)):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ue,D,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Z,de[0].width,de[0].height,Y.depth);for(let se=0,Ue=de.length;se<Ue;se++)if(X=de[se],E.format!==jn)if(ue!==null)if(re){if(Ne)if(E.layerUpdates.size>0){let Ye=Uu(X.width,X.height,E.format,E.type);for(let ye of E.layerUpdates){let _t=X.data.subarray(ye*Ye/X.data.BYTES_PER_ELEMENT,(ye+1)*Ye/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ye,X.width,X.height,1,ue,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Y.depth,ue,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Z,X.width,X.height,Y.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Y.depth,ue,D,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Z,X.width,X.height,Y.depth,0,ue,D,X.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{re&&ce&&t.texStorage2D(i.TEXTURE_2D,Ze,Z,de[0].width,de[0].height);for(let se=0,Ue=de.length;se<Ue;se++)X=de[se],E.format!==jn?ue!==null?re?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,ue,X.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Z,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ne&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,X.width,X.height,ue,D,X.data):t.texImage2D(i.TEXTURE_2D,se,Z,X.width,X.height,0,ue,D,X.data)}else if(E.isDataArrayTexture)if(re){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Z,Y.width,Y.height,Y.depth),Ne)if(E.layerUpdates.size>0){let se=Uu(Y.width,Y.height,E.format,E.type);for(let Ue of E.layerUpdates){let Ye=Y.data.subarray(Ue*se/Y.data.BYTES_PER_ELEMENT,(Ue+1)*se/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,Y.width,Y.height,1,ue,D,Ye)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ue,D,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,Y.width,Y.height,Y.depth,0,ue,D,Y.data);else if(E.isData3DTexture)re?(ce&&t.texStorage3D(i.TEXTURE_3D,Ze,Z,Y.width,Y.height,Y.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ue,D,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Z,Y.width,Y.height,Y.depth,0,ue,D,Y.data);else if(E.isFramebufferTexture){if(ce)if(re)t.texStorage2D(i.TEXTURE_2D,Ze,Z,Y.width,Y.height);else{let se=Y.width,Ue=Y.height;for(let Ye=0;Ye<Ze;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,Z,se,Ue,0,ue,D,null),se>>=1,Ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Y.parentNode!==se){se.appendChild(Y),d.add(E),se.onpaint=Ue=>{let Ye=Ue.changedElements;for(let ye of d)Ye.includes(ye.image)&&(ye.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Ye=i.RGBA,ye=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,ye,_t,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(re&&ce){let se=We(de[0]);t.texStorage2D(i.TEXTURE_2D,Ze,Z,se.width,se.height)}for(let se=0,Ue=de.length;se<Ue;se++)X=de[se],re?Ne&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ue,D,X):t.texImage2D(i.TEXTURE_2D,se,Z,ue,D,X);E.generateMipmaps=!1}else if(re){if(ce){let se=We(Y);t.texStorage2D(i.TEXTURE_2D,Ze,Z,se.width,se.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,D,Y)}else t.texImage2D(i.TEXTURE_2D,0,Z,ue,D,Y);M(E)&&E.mipmapsAutoUpdate===!0&&v(ie),me.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Te(R,E,B){if(E.image.length!==6)return;let ie=it(R,E),$=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let le=n.get($);if($.version!==le.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let me=Je.getPrimaries(Je.workingColorSpace),K=E.colorSpace===Xi?null:Je.getPrimaries(E.colorSpace),Y=E.colorSpace===Xi||me===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ue=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let ye=0;ye<6;ye++)!ue&&!D?Z[ye]=_(E.image[ye],!0,s.maxCubemapSize):Z[ye]=D?E.image[ye].image:E.image[ye],Z[ye]=Be(E,Z[ye]);let X=Z[0],de=r.convert(E.format,E.colorSpace),re=r.convert(E.type),ce=T(E.internalFormat,de,re,E.normalized,E.colorSpace),Ne=E.isVideoTexture!==!0,Ze=le.__version===void 0||ie===!0,se=$.dataReady,Ue=y(E,X);Qe(i.TEXTURE_CUBE_MAP,E);let Ye;if(E.isDepthTexture){if(ce=b(E.format===qi,E.type),Ze)if(Ne)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,X.width,X.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,X.width,X.height,0,de,re,null)}else if(ue){Ne&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ce,X.width,X.height);for(let ye=0;ye<6;ye++){Ye=Z[ye].mipmaps;for(let _t=0;_t<Ye.length;_t++){let tn=Ye[_t];E.format!==jn?de!==null?Ne?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,tn.width,tn.height,de,tn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,ce,tn.width,tn.height,0,tn.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,tn.width,tn.height,de,re,tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,ce,tn.width,tn.height,0,de,re,tn.data)}}}else{if(Ye=E.mipmaps,Ne&&Ze){Ye.length>0&&Ue++;let ye=We(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ce,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(D){Ne?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Z[ye].width,Z[ye].height,de,re,Z[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,Z[ye].width,Z[ye].height,0,de,re,Z[ye].data);for(let _t=0;_t<Ye.length;_t++){let Ji=Ye[_t].image[ye].image;Ne?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,Ji.width,Ji.height,de,re,Ji.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,ce,Ji.width,Ji.height,0,de,re,Ji.data)}}else{Ne?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,re,Z[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,de,re,Z[ye]);for(let _t=0;_t<Ye.length;_t++){let tn=Ye[_t];Ne?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,de,re,tn.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,ce,de,re,tn.image[ye])}}}M(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),le.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function be(R,E,B,ie,$,le){let me=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Y=T(B.internalFormat,me,K,B.normalized,B.colorSpace),ue=n.get(E),D=n.get(B);if(D.__renderTarget=E,!ue.__hasExternalTextures){let Z=Math.max(1,E.width>>le),X=Math.max(1,E.height>>le);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,le,Y,Z,X,E.depth,0,me,K,null):t.texImage2D($,le,Y,Z,X,0,me,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),pe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,$,D.__webglTexture,0,St(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,$,D.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(R,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let ie=E.depthTexture,$=ie&&ie.isDepthTexture?ie.type:null,le=b(E.stencilBuffer,$),me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(E),le,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(E),le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,R)}else{let ie=E.textures;for(let $=0;$<ie.length;$++){let le=ie[$],me=r.convert(le.format,le.colorSpace),K=r.convert(le.type),Y=T(le.internalFormat,me,K,le.normalized,le.colorSpace);pe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(E),Y,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(E),Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,E,B){let ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(E.depthTexture);$.__renderTarget=E;let le=ie?E.depthTexture.image[0]:E.depthTexture.image;(!$.__webglTexture||le.width!==E.width||le.height!==E.height)&&(le.width=E.width,le.height=E.height,E.depthTexture.needsUpdate=!0),ie?ve(E.depthTexture,0):_e(E.depthTexture,0);let me=$.__webglTexture,K=St(E),Y=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ue=E.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ii)pe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,Y,me,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ue,Y,me,0);else if(E.depthTexture.format===qi)pe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,Y,me,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ue,Y,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){let E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",$)};ie.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=ie}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)De(E.__webglFramebuffer[ie],R,ie);else R.texture.mipmaps.length>0?De(E.__webglFramebuffer[0],R,0):De(E.__webglFramebuffer,R,0);else if(B){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ke(E.__webglDepthbuffer[ie],R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ke(E.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,E,B){let ie=n.get(R);E!==void 0&&be(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&st(R)}function ut(R){let E=R.texture,B=n.get(R),ie=n.get(E);R.addEventListener("dispose",N),C(R);let $=R.textures,le=R.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Y=0;Y<E.mipmaps.length;Y++)B.__webglFramebuffer[K][Y]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(E.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(me)for(let K=0,Y=$.length;K<Y;K++){let ue=n.get($[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&pe(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let Y=$[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ue=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),Z=T(Y.internalFormat,ue,D,Y.normalized,Y.colorSpace,R.isXRRenderTarget===!0),X=St(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Z,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)be(B.__webglFramebuffer[K][Y],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Y);else be(B.__webglFramebuffer[K],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(me){for(let K=0,Y=$.length;K<Y;K++){let ue=$[K],D=n.get(ue),Z=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,D.__webglTexture),Qe(Z,ue),be(B.__webglFramebuffer,R,ue,i.COLOR_ATTACHMENT0+K,Z,0),M(ue)&&v(Z)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),Qe(K,E),E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)be(B.__webglFramebuffer[Y],R,E,i.COLOR_ATTACHMENT0,K,Y);else be(B.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,K,0);M(E)?v(K):E.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&st(R)}function U(R){let E=R.textures;for(let B=0,ie=E.length;B<ie;B++){let $=E[B];if(M($)&&$.mipmapsAutoUpdate===!0){let le=S(R),me=n.get($).__webglTexture;t.bindTexture(le,me),v(le),t.unbindTexture()}}}let Ht=[];function nt(R){if(R.samples>0){if(pe(R)===!1){let E=R.textures,B=R.width,ie=R.height,$=i.COLOR_BUFFER_BIT,le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(R),K=E.length>1;if(K)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let D=n.get(E[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,$,i.NEAREST),l===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ht.push(le),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let D=n.get(E[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function St(R){return Math.min(s.maxSamples,R.samples)}function pe(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(R){let E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Be(R,E){let B=R.colorSpace,ie=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Mn&&B!==Xi&&(Je.getTransfer(B)===dt?(ie!==jn||$!==In)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),E}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=we,this.setTexture3D=Oe,this.setTextureCube=ve,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=be,this.useMultisampledRTT=pe,this.dispose=H}function eM(i,e){function t(n,s=Xi){let r,a=Je.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===bu)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===yu)return i.RGB;if(n===jn)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===us)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===po||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Pc||n===mo||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Ju,g={},_=t.getContextAttributes(),M=null,v=null,S=[],T=[],b=new J,y=null,C=null,A=new Dt;A.viewport=new vt;let P=new Dt;P.viewport=new vt;let N=[A,P],O=new Vl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _e=S[j];return _e===void 0&&(_e=new Rr,S[j]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(j){let _e=S[j];return _e===void 0&&(_e=new Rr,S[j]=_e),_e.getGripSpace()},this.getHand=function(j){let _e=S[j];return _e===void 0&&(_e=new Rr,S[j]=_e),_e.getHandSpace()};function W(j){let _e=T.indexOf(j.inputSource);if(_e===-1)return;let we=S[_e];we!==void 0&&(we.update(j.inputSource,j.frame,c||a),we.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let j=0;j<S.length;j++){let _e=T[j];_e!==null&&(T[j]=null,S[j].disconnect(_e))}L=null,H=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,v=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Oe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?qi:Ii,Oe=_.stencil?Xs:ii);let ke={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Jt(u.textureWidth,u.textureHeight,{format:jn,type:In,depthTexture:new Ni(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Jt(f.framebufferWidth,f.framebufferHeight,{format:jn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(j){for(let _e=0;_e<j.removed.length;_e++){let we=j.removed[_e],Oe=T.indexOf(we);Oe>=0&&(T[Oe]=null,S[Oe].disconnect(we))}for(let _e=0;_e<j.added.length;_e++){let we=j.added[_e],Oe=T.indexOf(we);if(Oe===-1){for(let ke=0;ke<S.length;ke++)if(ke>=T.length){T.push(we),Oe=ke;break}else if(T[ke]===null){T[ke]=we,Oe=ke;break}if(Oe===-1)break}let ve=S[Oe];ve&&ve.connect(we)}}function q(j,_e){_e===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_e.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _e=j.near,we=j.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(we=m.depthFar)),O.near=P.near=A.near=_e,O.far=P.far=A.far=we,(L!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,H=O.far),O.layers.mask=j.layers.mask|6,A.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Oe=j.parent,ve=O.cameras;q(O,Oe);for(let ke=0;ke<ve.length;ke++)q(ve[ke],Oe);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),Q(j,O,Oe)};function Q(j,_e,we){we===null?j.matrix.copy(_e.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(_e.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return g[j]};let te=null;function Ee(j,_e){if(h=_e.getViewerPose(c||a),p=_e,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Oe=!1;we.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let He=0;He<we.length;He++){let Qe=we[He],it=null;if(f!==null)it=f.getViewport(Qe);else{let he=d.getViewSubImage(u,Qe);it=he.viewport,He===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let ee=N[He];ee===void 0&&(ee=new Dt,ee.layers.enable(He),ee.viewport=new vt,N[He]=ee),ee.matrix.fromArray(Qe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Qe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(it.x,it.y,it.width,it.height),He===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(ee)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let He=d.getDepthInformation(we[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<we.length;He++){let Qe=we[He].camera;if(Qe){let it=g[Qe];it||(it=new ka,g[Qe]=it);let ee=d.getCameraImage(Qe);it.sourceTexture=ee}}}}for(let we=0;we<S.length;we++){let Oe=T[we],ve=S[we];Oe!==null&&ve!==void 0&&ve.update(Oe,_e,c||a)}te&&te(j,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let ze=new Mm;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}},iM=new Ve,Lm=new qe;Lm.set(-1,0,0,0,1,0,0,0,1);function sM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Du(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rM(i,e,t,n){let s={},r={};function a(_,M){let v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function o(_,M){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let S=M.program;n.updateUBOMapping(_,S);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let M=i.createBuffer(),v=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,S),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],v=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,b=v.length;T<b;T++){let y=v[T];if(Array.isArray(y))for(let C=0,A=y.length;C<A;C++)h(y[C],T,C,S);else h(y,T,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,v,S){if(u(_,M,v,S)===!0){let T=_.__offset,b=_.value;if(Array.isArray(b)){let y=0;for(let C=0;C<b.length;C++){let A=b[C],P=x(A,!0);d(A,_.__data,y),y+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function d(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function u(_,M,v,S){let T=_.value,b=M+"_"+v;if(Array.isArray(T)){S[b]===void 0&&(S[b]=[]);let y=S[b],C=!1;for(let A=0;A<T.length;A++)f(T[A],y,A)===!0&&(C=!0);return C}return f(T,S,b)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let S=M[v];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function p(_){let M=_.uniforms,v=0,S=16;for(let b=0,y=M.length;b<y;b++){let C=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,P=C.length;A<P;A++){let N=C[A],O=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(M[b])||Array.isArray(N.value),H=v;for(let G=0,ne=O.length;G<ne;G++){let q=O[G],Q=x(q,L),te=v%S,Ee=te%Q.boundary,ze=te+Ee;v+=Ee,ze!==0&&S-ze<Q.storage&&(v+=S-ze),G===0&&(H=v),v+=Q.storage}let W=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new W((v-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let T=v%S;return T>0&&(v+=S-T),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:g}}var aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function oM(){return gi===null&&(gi=new Ir(aM,16,16,us,hn),gi.name="DFG_LUT",gi.minFilter=Kt,gi.magFilter=Kt,gi.wrapS=Gn,gi.wrapT=Gn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Fc=class{constructor(e={}){let{canvas:t=Vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,m=new Set([tc,ec,Ql]),g=new Set([In,ii,qr,Xs,Jl,Zl]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,T=null,b=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,N=null,O=null,L=null,H=null;this._outputColorSpace=mt;let W=0,G=0,ne=null,q=-1,Q=null,te=new vt,Ee=new vt,ze=null,j=new xe(0),_e=0,we=t.width,Oe=t.height,ve=1,ke=null,Ct=null,He=new vt(0,0,we,Oe),Qe=new vt(0,0,we,Oe),it=!1,ee=new as,he=new wl,oe=!1,Te=!1,be=new Ve,Ke=new I,De=new vt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ut(){return ne===null?ve:1}let U=n;function Ht(w,F){return t.getContext(w,F)}let nt,St,pe,kt,Be,We,R,E,B,ie,$,le,me,K,Y,ue,D,Z,X,de,re,ce,Ne;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){let F="webgl2";if(U=Ht(F,w),U===null)throw Ht(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(w){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ge("WebGLRenderer: "+w.message),w}function Ze(){nt=new xv(U),nt.init(),re=new eM(U,nt),St=new ov(U,nt,e,re),pe=new $y(U,nt),St.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),kt=new yv(U),Be=new ky,We=new Qy(U,nt,pe,Be,St,re,kt),R=new bv(A),E=new Sb(U),ce=new rv(U,E),B=new _v(U,E,kt,ce),ie=new Sv(U,B,E,ce,kt),Z=new Mv(U,St,We),Y=new lv(Be),$=new Oy(A,R,nt,St,ce,Y),le=new sM(A,Be),me=new zy,K=new Xy(nt),D=new sv(A,R,pe,ie,p,l),ue=new Zy(A,ie,St),Ne=new rM(U,kt,St,pe),X=new av(U,nt,kt),de=new vv(U,nt,kt),kt.programs=$.programs,A.capabilities=St,A.extensions=nt,A.properties=Be,A.renderLists=me,A.shadowMap=ue,A.state=pe,A.info=kt}x!==In&&(C=new Ev(x,t.width,t.height,o,s,r));let se=new Zu(A,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(we,Oe,!1))},this.getSize=function(w){return w.set(we,Oe)},this.setSize=function(w,F,V=!0){if(se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}we=w,Oe=F,t.width=Math.floor(w*ve),t.height=Math.floor(F*ve),V===!0&&(t.style.width=w+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(we*ve,Oe*ve).floor()},this.setDrawingBufferSize=function(w,F,V){we=w,Oe=F,ve=V,t.width=Math.floor(w*V),t.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===In){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(He)},this.setViewport=function(w,F,V,k){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,F,V,k),pe.viewport(te.copy(He).multiplyScalar(ut()).round())},this.getScissor=function(w){return w.copy(Qe)},this.setScissor=function(w,F,V,k){w.isVector4?Qe.set(w.x,w.y,w.z,w.w):Qe.set(w,F,V,k),pe.scissor(Ee.copy(Qe).multiplyScalar(ut()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){pe.setScissorTest(it=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){Ct=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,V=!0){let k=0;if(w){let z=!1;if(ne!==null){let ge=ne.texture.format;z=m.has(ge)}if(z){let ge=ne.texture.type,Ae=g.has(ge),fe=D.getClearColor(),Se=D.getClearAlpha(),Pe=fe.r,Xe=fe.g,at=fe.b;Ae?(_[0]=Pe,_[1]=Xe,_[2]=at,_[3]=Se,U.clearBufferuiv(U.COLOR,0,_)):(M[0]=Pe,M[1]=Xe,M[2]=at,M[3]=Se,U.clearBufferiv(U.COLOR,0,M))}else k|=U.COLOR_BUFFER_BIT}F&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),D.dispose(),me.dispose(),K.dispose(),We.dispose(),Be.dispose(),R.dispose(),ie.dispose(),B.dispose(),ce.dispose(),Ne.dispose(),$.dispose(),se.dispose(),se.removeEventListener("sessionstart",sf),se.removeEventListener("sessionend",rf),xs.stop()};function Ue(w){w.preventDefault(),Aa("WebGLRenderer: Context Lost."),P=!0}function Ye(){Aa("WebGLRenderer: Context Restored."),P=!1;let w=kt.autoReset,F=ue.enabled,V=ue.autoUpdate,k=ue.needsUpdate,z=ue.type;Ze(),kt.autoReset=w,ue.enabled=F,ue.autoUpdate=V,ue.needsUpdate=k,ue.type=z}function ye(w){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _t(w){let F=w.target;F.removeEventListener("dispose",_t),tn(F)}function tn(w){Ji(w),Be.remove(w)}function Ji(w){let F=Be.get(w).programs;F!==void 0&&(F.forEach(function(V){$.releaseProgram(V)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,k,z,ge){F===null&&(F=st);let Ae=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=Wg(w,F,V,k,z);pe.setMaterial(k,Ae);let Se=V.index,Pe=1;if(k.wireframe===!0){if(Se=B.getWireframeAttribute(V),Se===void 0)return;Pe=2}let Xe=V.drawRange,at=V.attributes.position,Re=Xe.start*Pe,ot=(Xe.start+Xe.count)*Pe;ge!==null&&(Re=Math.max(Re,ge.start*Pe),ot=Math.min(ot,(ge.start+ge.count)*Pe)),Se!==null?(Re=Math.max(Re,0),ot=Math.min(ot,Se.count)):at!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,at.count));let Gt=ot-Re;if(Gt<0||Gt===1/0)return;ce.setup(z,k,fe,V,Se);let Rt,Tt=X;if(Se!==null&&(Rt=E.get(Se),Tt=de,Tt.setIndex(Rt)),z.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*ut()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if(z.isLine){let dn=k.linewidth;dn===void 0&&(dn=1),pe.setLineWidth(dn*ut()),z.isLineSegments?Tt.setMode(U.LINES):z.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else z.isPoints?Tt.setMode(U.POINTS):z.isSprite&&Tt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let dn=z._multiDrawStarts,Ce=z._multiDrawCounts,vn=z._multiDrawCount,pt=Se?E.get(Se).bytesPerElement:1,_s=Be.get(k).currentProgram.getUniforms();for(let fn=0;fn<vn;fn++)_s.setValue(U,"_gl_DrawID",fn),Tt.render(dn[fn]/pt,Ce[fn])}else if(z.isInstancedMesh)Tt.renderInstances(Re,Gt,z.count);else if(V.isInstancedBufferGeometry){let dn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ce=Math.min(V.instanceCount,dn);Tt.renderInstances(Re,Gt,Ce)}else Tt.render(Re,Gt)};function nf(w,F,V,k){N!==null&&w.isNodeMaterial&&N.setObject(k,w),oe===!0&&Y.setState(w,V,!1),w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=Zt,w.needsUpdate=!0,la(w,F,k),w.side=pi,w.needsUpdate=!0,la(w,F,k),w.side=an):la(w,F,k)}this.compile=function(w,F,V=null){V===null&&(V=w),N!==null&&N.renderStart(w,F,V),T=K.get(V),T.init(F),y.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),w!==V&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,oe=Y.init(this.clippingPlanes,Te),oe===!0&&Y.setGlobalState(this.clippingPlanes,F),N!==null&&ue.render(T.state.shadowsArray,V,F);let k=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ge=z.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let fe=ge[Ae];nf(fe,V,F,z),k.add(fe)}else nf(ge,V,F,z),k.add(ge)}),T=y.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(w,F,V=null){let k=this.compile(w,F,V);return new Promise(z=>{function ge(){if(k.forEach(function(Ae){let Se=Be.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Ae)}),k.size===0){z(w);return}setTimeout(ge,10)}nt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bh=null;function Gg(w){bh&&bh(w)}function sf(){xs.stop()}function rf(){xs.start()}let xs=new Mm;xs.setAnimationLoop(Gg),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(w){bh=w,se.setAnimationLoop(w),w===null?xs.stop():xs.start()},se.addEventListener("sessionstart",sf),se.addEventListener("sessionend",rf),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(w,F);let V=se.enabled===!0&&se.isPresenting===!0,k=C!==null&&(ne===null||V)&&C.begin(A,ne);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,ne),T=K.get(w,y.length),T.init(F),T.state.textureUnits=We.getTextureUnits(),y.push(T),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?he.setFromArrayCamera(F):ee.setFromProjectionMatrix(be,Vn,F.reversedDepth),Te=this.localClippingEnabled,oe=Y.init(this.clippingPlanes,Te),S=me.get(w,b.length),S.init(),b.push(S),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ae=A.xr.getDepthSensingMesh();Ae!==null&&xh(Ae,F,-1/0,A.sortObjects)}xh(w,F,0,A.sortObjects),S.finish(),N!==null&&N.updateLights(T.state.lightsArray),A.sortObjects===!0&&S.sort(ke,Ct),rt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,rt&&D.addToRenderList(S,w),this.info.autoReset===!0&&this.info.reset(),oe===!0&&Y.beginShadows();let z=T.state.shadowsArray;if(ue.render(z,w,F),oe===!0&&Y.endShadows(),(k&&C.hasRenderPass())===!1){let Ae=S.opaque,fe=S.transmissive;if(T.setupLights(),F.isArrayCamera){let Se=F.cameras;if(fe.length>0)for(let Pe=0,Xe=Se.length;Pe<Xe;Pe++){let at=Se[Pe];of(Ae,fe,w,at)}rt&&D.render(w);for(let Pe=0,Xe=Se.length;Pe<Xe;Pe++){let at=Se[Pe];af(S,w,at,at.viewport)}}else fe.length>0&&of(Ae,fe,w,F),rt&&D.render(w),af(S,w,F)}ne!==null&&G===0&&(We.updateMultisampleRenderTarget(ne),We.updateRenderTargetMipmap(ne)),k&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),ce.resetDefaultState(),q=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],We.setTextureUnits(T.state.textureUnits),oe===!0&&Y.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,N!==null&&N.renderEnd()};function xh(w,F,V,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Ae=F.isArrayCamera?he:ee;if(!w.frustumCulled||w.intersectsFrustum(Ae)){k&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);let fe=ie.update(w),Se=w.material;Se.visible&&S.push(w,fe,Se,V,De.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let Ae=F.isArrayCamera?he:ee;if(!w.frustumCulled||w.intersectsFrustum(Ae)){let fe=ie.update(w),Se=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(Se)){let Pe=fe.groups;for(let Xe=0,at=Pe.length;Xe<at;Xe++){let Re=Pe[Xe],ot=Se[Re.materialIndex];ot&&ot.visible&&S.push(w,fe,ot,V,De.z,Re,F)}}else Se.visible&&S.push(w,fe,Se,V,De.z,null,F)}}}let ge=w.children;for(let Ae=0,fe=ge.length;Ae<fe;Ae++)xh(ge[Ae],F,V,k)}function af(w,F,V,k){let{opaque:z,transmissive:ge,transparent:Ae}=w;T.setupLightsView(V),oe===!0&&Y.setGlobalState(A.clippingPlanes,V),k&&pe.viewport(te.copy(k)),z.length>0&&Uo(z,F,V),ge.length>0&&Uo(ge,F,V),Ae.length>0&&Uo(Ae,F,V),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function of(w,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Jt(1,1,{generateMipmaps:!0,type:Re?hn:In,minFilter:Xn,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ge=T.state.transmissionRenderTarget[k.id],Ae=k.viewport||te;ge.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);let fe=A.getRenderTarget(),Se=A.getActiveCubeFace(),Pe=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(j),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),rt&&D.render(V);let Xe=A.toneMapping;A.toneMapping=mi;let at=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),oe===!0&&Y.setGlobalState(A.clippingPlanes,k),Uo(w,V,k),We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,Gt=F.length;ot<Gt;ot++){let Rt=F[ot],{object:Tt,geometry:dn,material:Ce,group:vn}=Rt;if(Ce.side===an&&Tt.layers.test(k.layers)){let pt=Ce.side;Ce.side=Zt,Ce.needsUpdate=!0,lf(Tt,V,k,dn,Ce,vn),Ce.side=pt,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge))}A.setRenderTarget(fe,Se,Pe),A.setClearColor(j,_e),at!==void 0&&(k.viewport=at),A.toneMapping=Xe}function Uo(w,F,V){let k=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ge=w.length;z<ge;z++){let Ae=w[z],{object:fe,geometry:Se,group:Pe}=Ae,Xe=Ae.material;Xe.allowOverride===!0&&k!==null&&(Xe=k),fe.layers.test(V.layers)&&lf(fe,F,V,Se,Xe,Pe)}}function lf(w,F,V,k,z,ge){N!==null&&z.isNodeMaterial&&N.setObject(w,z),w.onBeforeRender(A,F,V,k,z,ge),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(A,F,V,k,w,ge),z.transparent===!0&&z.side===an&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,A.renderBufferDirect(V,F,k,z,w,ge),z.side=pi,z.needsUpdate=!0,A.renderBufferDirect(V,F,k,z,w,ge),z.side=an):A.renderBufferDirect(V,F,k,z,w,ge),w.onAfterRender(A,F,V,k,z,ge)}function cf(w){let F=0;for(let V of w)V.texture!==null&&F++;return F}function la(w,F,V){F.isScene!==!0&&(F=st);let k=Be.get(w),z=T.state.lights,ge=T.state.shadowsArray,Ae=z.state.version,fe=$.getParameters(w,z.state,ge,F,V,T.state.lightProbeGridArray),Se=$.getProgramCacheKey(fe),Pe=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=R.get(w.envMap||k.environment,Xe),k.envMapRotation=k.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",_t),Pe=new Map,k.programs=Pe,k.programVariants=new Map);let at=Pe.get(Se);if(at!==void 0){if(k.currentProgram===at&&k.lightsStateVersion===Ae)return uf(w,fe),at}else fe.uniforms=$.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,V,fe),w.onBeforeCompile(fe,A),at=$.acquireProgram(fe,Se),Pe.set(Se,at),k.uniforms=fe.uniforms;let Re=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Y.uniform),uf(w,fe),k.needsLights=Xg(w),k.lightsStateVersion=Ae,k.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=cf(T.state.lightProbeGridArray),k.currentProgram=at,k.uniformsList=null,at}function Vg(w,F,V,k,z){let ge=Be.get(w),Ae=ge.currentProgram.id+","+k+","+z,fe=ge.programVariants.get(Ae);return fe===void 0?(fe=la(w,F,V),ge.programVariants.set(Ae,fe)):(ge.currentProgram=fe,ge.uniformsList=null,ge.outputColorSpace=k,ge.toneMapping=z),fe}function hf(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=jr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function uf(w,F){let V=Be.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Wg(w,F,V,k,z){F.isScene!==!0&&(F=st),We.resetTextureUnits();let ge=F.fog,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,fe=ne===null?A.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=R.get(k.envMap||Ae,Se),Xe=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,at=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Gt=!!V.morphAttributes.color,Rt=mi;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let Tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dn=Tt!==void 0?Tt.length:0,Ce=Be.get(k),vn=T.state.lights;if(oe===!0&&(Te===!0||w!==Q)){let Lt=w===Q&&k.id===q;Y.setState(k,w,Lt)}let pt=!1,_s=!1;k.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==vn.state.version||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Pe||k.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Y.numPlanes||Ce.numIntersection!==Y.numIntersection)||Ce.vertexAlphas!==Xe||Ce.vertexTangents!==at||Ce.morphTargets!==Re||Ce.morphNormals!==ot||Ce.morphColors!==Gt||Ce.morphTargetsCount!==dn||Ce.numLightProbeGrids!==cf(T.state.lightProbeGridArray)?pt=!0:(Ce.outputColorSpace!==fe||Ce.toneMapping!==Rt)&&(_s=!0):(pt=!0,Ce.__version=k.version);let fn=Ce.currentProgram;(pt===!0||_s===!0)&&(fn=_s===!0?Vg(k,F,z,fe,Rt):la(k,F,z),N&&k.isNodeMaterial&&N.onUpdateProgram(k,fn,Ce));let Oo=!1,Zi=!1,vs=!1,ht=fn.getUniforms(),on=Ce.uniforms;if(pe.useProgram(fn.program)&&(Oo=!0,Zi=!0,vs=!0),k.id!==q&&(q=k.id,Zi=!0),Oo||Q!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",w.projectionMatrix),ht.setValue(U,"viewMatrix",w.matrixWorldInverse);let nn=ht.map.cameraPosition;nn!==void 0&&nn.setValue(U,Ke.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Zi=!0,vs=!0)}if(Ce.needsLights&&(vn.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",vn.state.sunShadowMap,We),vn.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",vn.state.directionalShadowMap,We),vn.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",vn.state.spotShadowMap,We),vn.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",vn.state.pointShadowMap,We)),z.isSkinnedMesh){ht.setOptional(U,z,"bindMatrix"),ht.setOptional(U,z,"bindMatrixInverse");let Lt=z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(U,"boneTexture",Lt.boneTexture,We))}z.isBatchedMesh&&(ht.setOptional(U,z,"batchingTexture"),ht.setValue(U,"batchingTexture",z._matricesTexture,We),ht.setOptional(U,z,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",z._indirectTexture,We),ht.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",z._colorsTexture,We));let $n=V.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Z.update(z,V,fn),(Zi||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,ht.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=oM()),Zi){if(ht.setValue(U,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&qg(on,vs),ge&&k.fog===!0&&le.refreshFogUniforms(on,ge),le.refreshMaterialUniforms(on,k,ve,Oe,T.state.transmissionRenderTarget[w.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Lt=v,nn=0;for(let Mi of T.state.lightProbeGridArray)Mi.texture!==null&&(Lt.textures[nn]=Mi.texture,Lt.min[nn]=Mi.boundingBox.min,Lt.max[nn]=Mi.boundingBox.max,Lt.resolution[nn]=Mi.resolution,nn++);for(let Mi in Lt)Lt[Mi].length=nn;on.probesSH.value=Lt.textures,on.probesMin.value=Lt.min,on.probesMax.value=Lt.max,on.probesResolution.value=Lt.resolution}jr.upload(U,hf(Ce),on,We)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(jr.upload(U,hf(Ce),on,We),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(U,"center",z.center),ht.setValue(U,"modelViewMatrix",z.modelViewMatrix),ht.setValue(U,"normalMatrix",z.normalMatrix),ht.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Lt=k.uniformsGroups;for(let nn=0,Mi=Lt.length;nn<Mi;nn++){let ff=Lt[nn];Ne.update(ff,fn),Ne.bind(ff,fn)}}return fn}function qg(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Xg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(w,F,V){let k=Be.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Be.get(w.texture).__webglTexture=F,Be.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let V=Be.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){ne=w,W=F,G=V;let k=null,z=!1,ge=!1;if(w){let fe=Be.get(w);if(fe.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(w.viewport),Ee.copy(w.scissor),ze=w.scissorTest,pe.viewport(te),pe.scissor(Ee),pe.setScissorTest(ze),q=-1;return}else if(fe.__webglFramebuffer===void 0)We.setupRenderTarget(w);else if(fe.__hasExternalTextures)We.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xe=w.depthTexture;if(fe.__boundDepthTexture!==Xe){if(Xe!==null&&Be.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(w)}}let Se=w.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Pe=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?k=Pe[F][V]:k=Pe[F],z=!0):w.samples>0&&We.useMultisampledRTT(w)===!1?k=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[V]:k=Pe,te.copy(w.viewport),Ee.copy(w.scissor),ze=w.scissorTest}else te.copy(He).multiplyScalar(ve).floor(),Ee.copy(Qe).multiplyScalar(ve).floor(),ze=it;if(V!==0&&(k=O),pe.bindFramebuffer(U.FRAMEBUFFER,k)&&pe.drawBuffers(w,k),pe.viewport(te),pe.scissor(Ee),pe.setScissorTest(ze),z){let fe=Be.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,V)}else if(ge){let fe=F;for(let Se=0;Se<w.textures.length;Se++){let Pe=Be.get(w.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,V,fe)}}else if(w!==null&&V!==0){let fe=Be.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,V)}q=-1};function df(w){let F=Be.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=St.textureFormatReadable(w.format),F.__typeReadable=St.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,V,k,z,ge,Ae,fe=0){if(!(w&&w.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){pe.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Pe=w.textures[fe],Xe=Pe.format,at=Pe.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);let Re=df(Pe);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&V>=0&&V<=w.height-z&&U.readPixels(F,V,k,z,re.convert(Xe),re.convert(at),ge)}finally{let Pe=ne!==null?Be.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,k,z,ge,Ae,fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(F>=0&&F<=w.width-k&&V>=0&&V<=w.height-z){pe.bindFramebuffer(U.FRAMEBUFFER,Se);let Pe=w.textures[fe],Xe=Pe.format,at=Pe.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);let Re=df(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(F,V,k,z,re.convert(Xe),re.convert(at),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Gt=ne!==null?Be.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Gt);let Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qp(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ot),U.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,V=0){let k=Math.pow(2,-V),z=Math.floor(w.image.width*k),ge=Math.floor(w.image.height*k),Ae=F!==null?F.x:0,fe=F!==null?F.y:0;We.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Ae,fe,z,ge),pe.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,k=null,z=0,ge=0){let Ae,fe,Se,Pe,Xe,at,Re,ot,Gt,Rt=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(V!==null)Ae=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Pe=V.min.x,Xe=V.min.y,at=V.isBox3?V.min.z:0;else{let ht=Math.pow(2,-z);Ae=Math.floor(Rt.width*ht),fe=Math.floor(Rt.height*ht),w.isDataArrayTexture?Se=Rt.depth:w.isData3DTexture?Se=Math.floor(Rt.depth*ht):Se=1,Pe=0,Xe=0,at=0}k!==null?(Re=k.x,ot=k.y,Gt=k.z):(Re=0,ot=0,Gt=0);let Tt=re.convert(F.format),dn=re.convert(F.type),Ce;F.isData3DTexture?(We.setTexture3D(F,0),Ce=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),Ce=U.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),Ce=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let vn=pe.getParameter(U.UNPACK_ROW_LENGTH),pt=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),_s=pe.getParameter(U.UNPACK_SKIP_PIXELS),fn=pe.getParameter(U.UNPACK_SKIP_ROWS),Oo=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,at);let Zi=w.isDataArrayTexture||w.isData3DTexture,vs=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let ht=Be.get(w),on=Be.get(F),$n=Be.get(ht.__renderTarget),Lt=Be.get(on.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,$n.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let nn=0;nn<Se;nn++)Zi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.get(w).__webglTexture,z,at+nn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.get(F).__webglTexture,ge,Gt+nn)),U.blitFramebuffer(Pe,Xe,Pe+Ae,Xe+fe,Re,ot,Re+Ae,ot+fe,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||Be.has(w)){let ht=Be.get(w),on=Be.get(F);pe.bindFramebuffer(U.READ_FRAMEBUFFER,L),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let $n=0;$n<Se;$n++)Zi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.__webglTexture,z,at+$n):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,z),vs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,ge,Gt+$n):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,ge),z!==0?U.blitFramebuffer(Pe,Xe,Pe+Ae,Xe+fe,Re,ot,Re+Ae,ot+fe,U.COLOR_BUFFER_BIT,U.NEAREST):vs?U.copyTexSubImage3D(Ce,ge,Re,ot,Gt+$n,Pe,Xe,Ae,fe):U.copyTexSubImage2D(Ce,ge,Re,ot,Pe,Xe,Ae,fe);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vs?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ce,ge,Re,ot,Gt,Ae,fe,Se,Tt,dn,Rt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,ge,Re,ot,Gt,Ae,fe,Se,Tt,Rt.data):U.texSubImage3D(Ce,ge,Re,ot,Gt,Ae,fe,Se,Tt,dn,Rt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Re,ot,Ae,fe,Tt,dn,Rt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Re,ot,Rt.width,Rt.height,Tt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,ge,Re,ot,Ae,fe,Tt,dn,Rt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,vn),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,_s),pe.pixelStorei(U.UNPACK_SKIP_ROWS,fn),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Oo),ge===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(Ce),pe.unbindTexture()},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&We.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?We.setTextureCube(w,0):w.isData3DTexture?We.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?We.setTexture2DArray(w,0):We.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){W=0,G=0,ne=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lM=new Gi(-1,1,1,-1,0,1),$u=class extends ft{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},cM=new $u,ps=class{constructor(e){this._mesh=new Fe(cM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var kc=class extends kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ri.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mo=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Bc=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new J);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kc(Yr),this.copyPass.material.blending=Wi,this.timer=new to}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mo!==void 0&&(a instanceof Mo?n=!0:a instanceof Bc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hc=class extends kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Dm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jr=class i extends kn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Jt(r,a,{type:hn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Jt(r,a,{type:hn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Dm;this.highPassUniforms=ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ri.clone(Yr.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader,premultipliedAlpha:!0,blending:Pn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new xt,this._fsQuad=new ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Jr.BlurDirectionX=new J(1,0);Jr.BlurDirectionY=new J(0,1);var So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gc=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ri.clone(So.uniforms),this.material=new Ur({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hM={low:{pr:1,shadows:0,bloom:!1,props:.5,range:200,aa:!1},medium:{pr:1.5,shadows:1024,bloom:!0,props:.8,range:280,aa:!0},high:{pr:2,shadows:2048,bloom:!0,props:1,range:360,aa:!0}},Vc=class{constructor(e,t="auto"){let n=matchMedia("(pointer: coarse)").matches;this.level=t==="auto"?n?"medium":"high":t,this.quality=hM[this.level];let s=this.renderer=new Fc({canvas:e,antialias:this.quality.aa,powerPreference:"high-performance",alpha:!0});s.setClearColor(0,0),s.outputColorSpace=mt,s.toneMapping=Vs,s.toneMappingExposure=.7,s.shadowMap.enabled=this.quality.shadows>0,s.shadowMap.type=Hs,this.composer=new zc(s),this.renderPass=new Hc(new qn,new Dt),this.bloom=new Jr(new J(256,256),.3,.5,.9),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new Gc),this.pr=Math.min(devicePixelRatio||1,this.quality.pr),this.resize(),addEventListener("resize",()=>this.resize()),this.fpsAcc=0,this.fpsN=0,this.adaptT=0}resize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(this.pr),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.pr),this.composer.setSize(e,t),this.bloom.setSize(e*this.pr/2,t*this.pr/2),this.aspect=e/t,this.onResize&&this.onResize(e,t)}setBloom(e){this.bloom.strength=e,this.bloom.enabled=e>0}render(e,t,n=.016){if(this.quality.bloom?(this.renderPass.scene=e,this.renderPass.camera=t,this.composer.render(n)):this.renderer.render(e,t),this.fpsAcc+=n,this.fpsN++,this.fpsAcc>2){let s=this.fpsN/this.fpsAcc;this.fpsAcc=0,this.fpsN=0,s<40&&this.pr>.8?(this.pr=Math.max(.8,this.pr-.25),this.resize()):s>57&&this.pr<Math.min(devicePixelRatio||1,this.quality.pr)&&(this.pr=Math.min(this.pr+.25,devicePixelRatio||1,this.quality.pr),this.resize())}}};var $r=class extends qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new It;e.deleteAttribute("uv");let t=new lt({side:Zt}),n=new lt,s=new Hi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Di(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Fe(e,Zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,Zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Fe(e,Zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Fe(e,Zr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Fe(e,Zr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Fe(e,Zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zr(i){return new Ya({color:0,emissive:16777215,emissiveIntensity:i})}function Qr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ft;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Nm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Nm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Nm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Bt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Qu(i,e){if(e===Mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xr||e===go){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Xr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Fm(i){let e=new Map,t=new Map,n=i.clone();return Um(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Um(i.children[n],e.children[n],t)}var Wc=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new qc(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new qc(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Vi.extractUrlBase(e);a=Vi.resolveURL(c,this.path)}else a=Vi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hm){try{a[tt.KHR_BINARY_GLTF]=new yd(e)}catch(d){s&&s(d);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case tt.KHR_MATERIALS_UNLIT:a[d]=new sd;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Md(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[d]=new Sd;break;case tt.KHR_MESH_QUANTIZATION:a[d]=new Td;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ut(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},id=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hi(h),c.distance=d;break;case"spot":c=new zs(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},sd=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return xt}extendParams(e,t,n){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(r,r)}return Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,mt)),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?yt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},xd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},_d=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},qc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},vd=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let p of d){let x=new Ve,m=new I,g=new zt,_=new I(1,1,1),M=new Di(p.geometry,p.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,x.compose(m,g,_));let v=null;for(let S in l)if(S==="_COLOR_0"){let T=l[S];M.instanceColor=new Li(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let b=M.geometry;v=new ft,v.name=b.name;for(let y in b.attributes)v.setAttribute(y,b.attributes[y]);for(let y in b.morphAttributes)v.morphAttributes[y]=b.morphAttributes[y];b.index!==null&&v.setIndex(b.index),v.morphTargetsRelative=b.morphTargetsRelative;for(let y of b.groups)v.addGroup(y.start,y.count,y.materialIndex);b.boundingBox!==null&&(v.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(v.boundingSphere=b.boundingSphere.clone()),v.drawRange.start=b.drawRange.start,v.drawRange.count=b.drawRange.count,v.userData=Object.assign({},b.userData),M.geometry=v}let T=l[S];v.setAttribute(S,new Li(T.array,T.itemSize,T.normalized))}At.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Hm="glTF",To=12,Om={JSON:1313821514,BIN:5130562},yd=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,To),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-To,r=new DataView(e,To),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Om.JSON){let c=new Uint8Array(e,To+a,o);this.content=n.decode(c)}else if(l===Om.BIN){let c=To+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=wd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=wd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=ea[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(f)},o,c,Mn,u)})})}},Sd=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Td=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Xc=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*c,x=p-c,m=-2*f+3*u,g=f-u,_=1-m,M=g-u+d;for(let v=0;v!==o;v++){let S=a[x+v+o],T=a[x+v+l]*h,b=a[p+v+o],y=a[p+v]*h;r[v]=_*S+M*T+m*b+g*y}return r}},dM=new zt,Ed=class extends Xc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return dM.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},km={9728:Ft,9729:Kt,9984:Kl,9985:Wr,9986:qs,9987:Xn},Bm={33071:Gn,33648:Mr,10497:An},ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fM={CUBICSPLINE:void 0,LINEAR:Rs,STEP:As},td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),i.DefaultMaterial}function Ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function gM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bM(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nd(t.attributes):e=i.indices+":"+nd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+nd(i.targets[n]);return e}function nd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _M=new Ve,Rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new $a(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new eo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ks(r,o,s),xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ed[s.type],o=ea[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Bt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ed[s.type],c=ea[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==d){let g=Math.floor(u/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(_);M||(x=new c(o,g*f,s.count*f/h),M=new Ps(x,f/h),t.cache.add(_,M)),m=new ss(M,l,u%f/h,p)}else o===null?x=new c(s.count*l):x=new c(o,u,s.count*l),m=new Bt(x,l,p);if(s.sparse!==void 0){let g=ed.SCALAR,_=ea[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new _(a[1],M,s.sparse.count*g),T=new c(a[2],v,s.sparse.count*l);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,y=S.length;b<y;b++){let C=S[b];if(m.setX(C,T[b*l]),l>=2&&m.setY(C,T[b*l+1]),l>=3&&m.setZ(C,T[b*l+2]),l>=4&&m.setW(C,T[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=km[u.magFilter]||Kt,h.minFilter=km[u.minFilter]||Xn,h.wrapS=Bm[u.wrapS]||An,h.wrapT=Bm[u.wrapT]||An,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new Yt(m);g.needsUpdate=!0,f(g)}),t.load(Vi.resolveURL(u,r.path),x,void 0,p)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),xi(u,a),u.userData.mimeType=a.mimeType||xM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ls,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new os,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let d=s[tt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Mn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,mt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||td.OPAQUE;if(h===td.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===td.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==xt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xt){let d=r.emissiveFactor;o.emissive=new xe().setRGB(d[0],d[1],d[2],Mn)}return r.emissiveTexture!==void 0&&a!==xt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),xi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ks(s,d,r),d})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return zm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=bM(c),d=s[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=zm(new ft,c,t),c.mode===Kn.TRIANGLE_STRIP?u=u.then(f=>Qu(f,go)):c.mode===Kn.TRIANGLE_FAN&&(u=u.then(f=>Qu(f,Xr))),s[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?pM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=a[f],g,_=c[f];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Da(x,_):new Fe(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Kn.LINES)g=new Ls(x,_);else if(m.mode===Kn.LINE_STRIP)g=new Is(x,_);else if(m.mode===Kn.LINE_LOOP)g=new Fa(x,_);else if(m.mode===Kn.POINTS)g=new Ds(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&gM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),xi(g,r),m.extensions&&Ks(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ks(s,d[0],r),d[0];let u=new wt;r.extensions&&Ks(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Sn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Ve;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Na(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let M=0,v=u.length;M<v;M++){let S=u[M],T=f[M],b=p[M],y=x[M],C=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let A=n._createAnimationTracks(S,T,b,y,C);if(A)for(let P=0;P<A.length;P++)g.push(A[P])}let _=new Za(r,void 0,g);return xi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,_M)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Pr:c.length>1?h=new wt:c.length===1?h=c[0]:h=new At,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),xi(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let d=new Ve;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),xi(r,n),n.extensions&&Ks(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(Fm(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof ln||u instanceof Yt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ms[r.path]===ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ms[r.path]){case ms.weights:h=ki;break;case ms.rotation:h=Bi;break;case ms.translation:case ms.scale:h=hs;break;default:n.itemSize===1?h=ki:h=hs;break}let d=s.interpolation!==void 0?fM[s.interpolation]:Rs,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+ms[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ad(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Bi?Ed:Xc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vM(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Ad(ea[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=Ad(ea[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function zm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=wd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),xi(i,e),vM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mM(i,e.targets,t):i})}var Gm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var _=new Uint8Array(g.length),M=0;M<g.length;++M){var v=g.charCodeAt(M);_[M]=v>96?v-97:v>64?v-39:v+4}for(var S=0,M=0;M<g.length;++M)_[S++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,S)}function l(g,_,M,v,S,T,b){var y=g.exports.sbrk,C=v+3&-4,A=y(C*S),P=y(T.length),N=new Uint8Array(g.exports.memory.buffer);N.set(T,P);var O=_(A,v,S,P,T.length);if(O==0&&b&&b(A,C,S),M.set(N.subarray(A,A+v*S)),y(A-y(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(g){var _={object:new Worker(g),pending:0,requests:{}};return _.object.onmessage=function(M){var v=M.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function p(g){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),M=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(M),S=d.length;S<g;++S)d[S]=f(v);for(var S=g;S<d.length;++S)d[S].object.postMessage({});d.length=g,URL.revokeObjectURL(v)}function x(g,_,M,v,S){for(var T=d[0],b=1;b<d.length;++b)d[b].pending<T.pending&&(T=d[b]);return new Promise(function(y,C){var A=new Uint8Array(M),P=++u;T.pending+=g,T.requests[P]={resolve:y,reject:C},T.object.postMessage({id:P,count:g,size:_,source:A,mode:v,filter:S},[A.buffer])})}function m(g){var _=g.data;self.ready.then(function(M){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);l(M,M.exports[_.mode],v,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(S){self.postMessage({id:_.id,count:_.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,_,M,v,S){l(r,r.exports.meshopt_decodeVertexBuffer,g,_,M,v,r.exports[c[S]])},decodeIndexBuffer:function(g,_,M,v){l(r,r.exports.meshopt_decodeIndexBuffer,g,_,M,v)},decodeIndexSequence:function(g,_,M,v){l(r,r.exports.meshopt_decodeIndexSequence,g,_,M,v)},decodeGltfBuffer:function(g,_,M,v,S,T){l(r,r.exports[h[S]],g,_,M,v,r.exports[c[T]])},decodeGltfBufferAsync:function(g,_,M,v,S){return d.length>0?x(g,_,M,h[v],c[S]):a.then(function(){var T=new Uint8Array(g*_);return l(r,r.exports[h[v]],T,g,_,M,r.exports[c[S]]),T})}}})();function jc(i){let e=window.TURBO_ASSETS;if(!e)return i;let t=String(i).replace(/^\.\//,"").replace(location.href.replace(/[^/]*$/,""),"");return e[t]||i}var Zc={hatchback:{file:"hatchback.glb"},"1990s-sports-car":{file:"1990s-sports-car.glb"},"1990s-off-roader":{file:"1990s-off-roader.glb"},"1990s-pickup-truck":{file:"1990s-pickup-truck.glb"},"police-car":{file:"police-car.glb",fixed:!0},"muscle-car":{file:"muscle-car.glb"},"rally-car":{file:"rally-car.glb"},"monster-truck":{file:"monster-truck.glb"},"fire-truck":{file:"fire-truck.glb",fixed:!0},concept:{file:"CarConcept.glb",concept:!0},"1990s-taxi":{file:"1990s-taxi.glb",fixed:!0},"delivery-van":{file:"delivery-van.glb"},"ice-cream-truck":{file:"ice-cream-truck.glb",fixed:!0},"compact-car":{file:"compact-car.glb"},"electric-car":{file:"electric-car.glb"},"1990s-suv":{file:"1990s-suv.glb"},coupe:{file:"coupe.glb"},convertible:{file:"convertible.glb"}},qm=["compact-car","1990s-taxi","delivery-van","ice-cream-truck","electric-car","1990s-suv","coupe","convertible"],Xm=["compact-car","coupe","electric-car","convertible","1990s-taxi"],jm=new Or;jm.setURLModifier(jc);var Id=new Wc(jm);Id.setMeshoptDecoder(Gm);var Vm=()=>window.TURBO_FMT||"glb",Kc=new Map;function Ld(i){if(Zc[i]||(i="hatchback"),Kc.has(i))return Kc.get(i);let e=Zc[i].file.replace(/\.glb$/,""),t=(Vm()==="parts"?yM(e):Id.loadAsync("models/"+e+"."+Vm())).then(n=>MM(i,n.scene));return Kc.set(i,t),t.catch(()=>Kc.delete(i)),t}async function yM(i){let[e,t]=await Promise.all([fetch(`models/${i}.json`).then(h=>h.json()),fetch(`models/${i}.geo.txt`).then(h=>h.text())]),n=Uint8Array.from(atob(t.trim()),h=>h.charCodeAt(0)),s=new TextEncoder().encode(JSON.stringify(e)),r=s.length+3&-4,a=n.length+3&-4,o=20+r+8+a,l=new Uint8Array(o),c=new DataView(l.buffer);return c.setUint32(0,1179937895,!0),c.setUint32(4,2,!0),c.setUint32(8,o,!0),c.setUint32(12,r,!0),c.setUint32(16,1313821514,!0),l.fill(32,20,20+r),l.set(s,20),c.setUint32(20+r,a,!0),c.setUint32(24+r,5130562,!0),l.set(n,28+r),Id.parseAsync(l.buffer,"models/")}var Km=i=>Promise.all([...new Set(i)].map(Ld)),Jc=new Map;function MM(i,e){let t=Zc[i],n=new wt,s=new wt;s.rotation.y=Math.PI,s.add(e),n.add(s),e.traverse(c=>{if(!c.isMesh)return;c.castShadow=!0,c.receiveShadow=!0;let h=d=>{let u=(d.name||"").toLowerCase();return t.concept&&d.transmission>0?new yt({name:d.name,color:1054752,roughness:.02,metalness:0,transparent:!0,opacity:.4,clearcoat:1,envMapIntensity:1.5,side:an}):u.includes("body_pbr")?new yt({name:d.name,map:d.map,normalMap:d.normalMap,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,roughness:1,metalness:1,side:d.side,clearcoat:.9,clearcoatRoughness:.06,envMapIntensity:1.1}):(u.includes("glass")&&(d.envMapIntensity=1.6,d.roughness=Math.min(d.roughness,.06)),d)};c.material=Array.isArray(c.material)?c.material.map(h):h(c.material)}),n.updateMatrixWorld(!0);let r=[],a=new zt;e.traverse(c=>{let h=c.name||"";if(/_wheel_[fr][lr]$/i.test(h)||/^Wheel(Front|Rear)[LR]$/.test(h)){c.parent.getWorldQuaternion(a);let d=new I(1,0,0).applyQuaternion(a.clone().invert()).normalize(),u=new gn().setFromObject(c);r.push({name:h,axis:d,base:c.quaternion.clone(),r:(u.max.y-u.min.y)/2})}});let l=new gn().setFromObject(n).getSize(new I);return n.userData={key:i,wheels:r,wr:r.length?r[0].r:.35,halfW:Math.min(l.x/2,1.05),halfL:l.z/2,height:l.y},!t.concept&&!t.fixed&&(n.userData.paint=SM(e)),Jc.set(i,n),n}function Ym(i){let e=null;return i.traverse(t=>{t.isMesh&&(t.material.name||"").toLowerCase().includes("body_pbr")&&(e=t.material)}),e}function $c(i,e,t){let n=Math.max(i,e,t),s=Math.min(i,e,t),r=n-s,a=0;return r&&(a=n===i?(e-t)/r%6:n===e?(t-i)/r+2:(i-e)/r+4,a*=60,a<0&&(a+=360)),[a,n?r/n:0,n]}function Jm(i,e){let t=document.createElement("canvas");return t.width=t.height=e,t.getContext("2d",{willReadFrequently:!0}).drawImage(i,0,0,e,e),t}function SM(i){let e=Ym(i);if(!e||!e.map?.image)return null;let t=Jm(e.map.image,96),n=t.getContext("2d").getImageData(0,0,96,96).data,s=new Array(36).fill(0).map(()=>({n:0,r:0,g:0,b:0}));for(let c=0;c<n.length;c+=4){let[h,d,u]=$c(n[c]/255,n[c+1]/255,n[c+2]/255);if(d<.22||u<.25)continue;let f=s[Math.floor(h/10)%36];f.n++,f.r+=n[c],f.g+=n[c+1],f.b+=n[c+2]}let r=s.reduce((c,h)=>h.n>c.n?h:c);if(r.n<50)return null;let a=r.r/r.n,o=r.g/r.n,l=r.b/r.n;return{rgb:[a,o,l],hsv:$c(a/255,o/255,l/255)}}var Cd=new Map;function TM(i,e){let t=i.userData.key+e;if(Cd.has(t))return Cd.get(t);let n=Zc[i.userData.key],s=new Map,r=new xe(e);if(n.concept)i.traverse(a=>{if(a.isMesh&&/^Paint 1/.test(a.material.name)){let o=a.material.clone();o.color.copy(r),o.metalness=.6,o.roughness=.3,s.set(a.material,o)}});else if(i.userData.paint){let a=i.userData.paint,[o,l,c]=a.hsv,h=r.clone().convertLinearToSRGB(),d=[h.r*255,h.g*255,h.b*255],u=Ym(i),f=Math.min(1024,u.map.image.width),p=Jm(u.map.image,f),x=p.getContext("2d"),m=x.getImageData(0,0,f,f),g=m.data;for(let v=0;v<g.length;v+=4){let[S,T,b]=$c(g[v]/255,g[v+1]/255,g[v+2]/255),y=Math.abs(S-o);if(y>180&&(y=360-y),y>26||T<l*.45)continue;let C=Math.min(1,(26-y)/10)*Math.min(1,(T-l*.45)/(l*.3)),A=b/c;for(let P=0;P<3;P++)g[v+P]=g[v+P]*(1-C)+Math.min(255,d[P]*A)*C}x.putImageData(m,0,0);let _=new cn(p);_.flipY=u.map.flipY,_.colorSpace=mt,_.anisotropy=4;let M=u.clone();M.map=_,s.set(u,M),i.traverse(v=>{if(!v.isMesh||s.has(v.material)||v.material.map)return;let S=v.material.color.clone().convertLinearToSRGB(),[T,b]=$c(S.r,S.g,S.b),y=Math.abs(T-o);if(y>180&&(y=360-y),y<20&&b>.2){let C=v.material.clone();C.color.copy(r),s.set(v.material,C)}})}return Cd.set(t,s),s}var EM={metal:{metalness:.65,roughness:.32,clearcoat:1,clearcoatRoughness:.04,dropMaps:!0},matte:{metalness:0,roughness:.78,clearcoat:0,clearcoatRoughness:.5,dropMaps:!0},pearl:{metalness:.25,roughness:.3,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.35,dropMaps:!0},candy:{metalness:.85,roughness:.18,clearcoat:1,clearcoatRoughness:.02,dropMaps:!0},chrome:{metalness:1,roughness:.06,clearcoat:1,clearcoatRoughness:.02,dropMaps:!0}},Yc=new Map;function wM(i,e,t,n){let s=i.userData.key+e+t;if(Yc.has(s))return Yc.get(s);let r=EM[t],a=new Map(n||[]);return r?(i.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=a.get(l)||l,h=l.name||"";if(!(h.toLowerCase().includes("body_pbr")||/^Paint 1/.test(h)||n&&n.has(l)&&!h.toLowerCase().includes("body_pbr"))||!c.isMeshPhysicalMaterial&&!c.isMeshStandardMaterial)return;let u=c.isMeshPhysicalMaterial?c.clone():new yt({map:c.map,color:c.color,normalMap:c.normalMap});r.dropMaps&&(u.metalnessMap=null,u.roughnessMap=null),Object.assign(u,{metalness:r.metalness,roughness:r.roughness,clearcoat:r.clearcoat,clearcoatRoughness:r.clearcoatRoughness,iridescence:r.iridescence||0}),r.iridescenceIOR&&(u.iridescenceIOR=r.iridescenceIOR),u.needsUpdate=!0,a.set(l,u)}),Yc.set(s,a),a):(Yc.set(s,a),a)}function Ys(i,e,t={}){let n=Jc.get(i)||Jc.get("hatchback")||Jc.values().next().value,s=n.clone(!0),r=e&&e!=="orig"?TM(n,e):null,a=t.finish&&t.finish!=="gloss"?wM(n,e||"orig",t.finish,r):r;s.traverse(c=>{c.isMesh&&(a&&a.has(c.material)&&(c.material=a.get(c.material)),(t.noShadow||t.lite)&&(c.castShadow=!1),t.lite&&(c.receiveShadow=!1))});let o={};s.traverse(c=>{c.name&&(o[c.name]=c)});let l=n.userData.wheels.map(c=>({obj:o[c.name],axis:c.axis,base:c.base,r:c.r})).filter(c=>c.obj);if(s.userData={...n.userData,wheels:l,body:s.children[0]},t.lite){let c=AM(n.userData);s.add(c)}return s}var Wm=new zt;function Eo(i,e){for(let t of i.userData.wheels)Wm.setFromAxisAngle(t.axis,-e/t.r),t.obj.quaternion.copy(t.base).premultiply(Wm)}var Pd=null;function AM(i){if(!Pd){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,4,32,32,32);s.addColorStop(0,"rgba(0,0,0,0.7)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,64,64),Pd=new cn(t)}let e=new Fe(new qt(i.halfW*2.5,i.halfL*2.3),new xt({map:Pd,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e}var Dd=new no,Tn={chrome:new lt({color:15790324,metalness:1,roughness:.12}),black:new lt({color:1316120,metalness:.3,roughness:.45}),carbon:new yt({color:1776672,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.08}),red:new yt({color:14686232,metalness:.2,roughness:.3,clearcoat:1}),amber:new lt({color:16757504,emissive:16750592,emissiveIntensity:2.2}),blueGlow:new xt({color:4237567})},Zm=new Map,Ud=class{constructor(e){this.car=e,e.updateMatrixWorld(!0),this.inv=e.matrixWorld.clone().invert(),this.meshes=[],e.userData.body.traverse(n=>{n.isMesh&&n.visible&&this.meshes.push(n)});let t=e.userData;this.L=t.halfL,this.W=t.halfW,this.H=t.height,this.memo=Zm.get(t.key)||new Map,Zm.set(t.key,this.memo)}cast(e,t){let n=`${e.x.toFixed(3)},${e.y.toFixed(3)},${e.z.toFixed(3)}|${t.x},${t.y},${t.z}`;if(this.memo.has(n)){let r=this.memo.get(n);return r&&{p:r.p.clone(),n:r.n.clone()}}let s=this.castRaw(e,t);return this.memo.set(n,s&&{p:s.p.clone(),n:s.n.clone()}),s}castRaw(e,t){let n=this.car.matrixWorld;Dd.set(e.clone().applyMatrix4(n),t.clone().transformDirection(n)),Dd.far=20;let s=Dd.intersectObjects(this.meshes,!1)[0];if(!s)return null;let r=this.car.worldToLocal(s.point.clone()),a=s.face?s.face.normal.clone().transformDirection(s.object.matrixWorld).transformDirection(this.inv):new I(0,1,0);return a.dot(t)>0&&a.negate(),{p:r,n:a}}top(e,t){return this.cast(new I(e,this.H+3,t),new I(0,-1,0))}side(e,t,n){return this.cast(new I(e*(this.W+3),t,n),new I(-e,0,0))}front(e,t){return this.cast(new I(e,t,-this.L-3),new I(0,0,1))}rear(e,t){return this.cast(new I(e,t,this.L+3),new I(0,0,-1))}roof(){let e=null;for(let t=-this.L;t<=this.L;t+=.1){let n=this.top(0,t);n&&(!e||n.p.y>e.p.y)&&(e=n)}return e}};function wo(i,e){let t=i.length,n=i[0].length,s=[],r=[],a=[];for(let c=0;c<t;c++)for(let h=0;h<n;h++){let d=i[c][h];s.push(d.p.x+d.n.x*.012,d.p.y+d.n.y*.012,d.p.z+d.n.z*.012),r.push(h/(n-1),c/(t-1))}for(let c=0;c<t-1;c++)for(let h=0;h<n-1;h++){let d=c*n+h,u=d+1,f=d+n,p=f+1;i[c][h].ok&&i[c][h+1].ok&&i[c+1][h].ok&&i[c+1][h+1].ok&&a.push(d,f,u,u,f,p)}let o=new ft;o.setAttribute("position",new je(s,3)),o.setAttribute("uv",new je(r,2)),o.setIndex(a),o.computeVertexNormals();let l=new Fe(o,e);return l.renderOrder=2,l}function eg(i){for(let e of i){let t=null;for(let n of e)n.p?t=n:t&&(n.p=t.p.clone(),n.n=t.n.clone())}for(let e of i)for(let t of e)t.p||(t.p=new I,t.n=new I(0,1,0),t.ok=!1)}function Nd(i,e,t,n,s,r,a,o,l){let c=[];for(let h=0;h<o;h++){let d=s+(r-s)*h/(o-1),u=[];for(let f=0;f<a;f++){let p=f/(a-1),x=l?t+(n-t)*p:n-(n-t)*p,m=i.side(e,d,x);u.push(m?{...m,ok:Math.abs(m.n.x)>.25}:{ok:!1})}c.push(u)}return eg(c),c}function $m(i,e,t,n,s,r,a){let o=[];for(let l=0;l<a;l++){let c=s-(s-n)*l/(a-1),h=[];for(let d=0;d<r;d++){let u=e+(t-e)*d/(r-1),f=i.top(u,c);h.push(f?{...f,ok:!0}:{ok:!1})}o.push(h)}return eg(o),o}var Fd=new Map;function RM(i,e){let t=i+e;if(Fd.has(t))return Fd.get(t);let n=document.createElement("canvas");n.width=512,n.height=128;let s=n.getContext("2d");if(i==="flames"){let a=s.createLinearGradient(0,0,512,0);a.addColorStop(0,"#ffeb3b"),a.addColorStop(.35,"#ff9800"),a.addColorStop(.75,"#f4511e"),a.addColorStop(1,"#b71c1c"),s.fillStyle=a,s.strokeStyle="#3e0000",s.lineWidth=5,s.beginPath(),s.moveTo(0,20),s.lineTo(0,108);let o=[[150,104],[250,86],[360,100],[470,70],[400,58],[500,40],[330,36],[420,14],[230,28],[150,8],[60,22]];for(let l=0;l<o.length;l++){let[c,h]=o[l],d=l?o[l-1][0]:0;s.quadraticCurveTo((d+c)/2,h+(l%2?-26:26),c,h)}s.closePath(),s.fill(),s.stroke()}else if(i==="number")s.fillStyle="#fff",s.beginPath(),s.arc(256,64,58,0,7),s.fill(),s.lineWidth=8,s.strokeStyle=e,s.stroke(),s.fillStyle="#111",s.font="bold 84px Arial Black, Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("7",256,70);else if(i==="stars"){let a=(o,l,c,h)=>{s.beginPath();for(let d=0;d<10;d++){let u=-Math.PI/2+d*Math.PI/5,f=d%2?c*.45:c;d?s.lineTo(o+Math.cos(u)*f,l+Math.sin(u)*f):s.moveTo(o+Math.cos(u)*f,l+Math.sin(u)*f)}s.closePath(),s.fillStyle=h,s.fill(),s.lineWidth=4,s.strokeStyle="#fff",s.stroke()};a(90,64,46,"#ffd600"),a(220,50,32,"#ff4081"),a(330,74,40,"#40c4ff"),a(440,52,30,"#76ff03")}else i==="bolt"&&(s.fillStyle="#ffeb3b",s.strokeStyle="#111",s.lineWidth=7,s.beginPath(),s.moveTo(10,70),s.lineTo(180,40),s.lineTo(170,62),s.lineTo(340,30),s.lineTo(325,56),s.lineTo(505,22),s.lineTo(320,96),s.lineTo(334,72),s.lineTo(165,104),s.lineTo(176,82),s.closePath(),s.fill(),s.stroke());let r=new cn(n);return r.colorSpace=mt,r.anisotropy=4,Fd.set(t,r),r}var Qm=i=>new lt({map:i,transparent:!0,alphaTest:.35,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1}),Qc=null;function CM(){if(Qc)return Qc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Qc=new cn(i),Qc}function PM(i,e){i.quaternion.setFromUnitVectors(new I(0,1,0),e.clone().normalize())}var ai=(i,e,t,n)=>{let s=new Fe(new It(i,e,t),n);return s.castShadow=!0,s},Js=(i,e,t)=>{let n=new Fe(new Wt(e,e,i,14),t);return n.castShadow=!0,n};function eh(i,e={},t={}){var v;let n=i.getObjectByName("mods");n&&i.remove(n);let s=i.userData,r=new Ud(i),a=new wt;a.name="mods",i.add(a);let o={},l=S=>o[S]||(o[S]=(()=>{let T=new wt;return T.name=S,a.add(T),T})()),c=e.paint&&e.paint!=="orig"?e.paint:"#d32f2f",h=new yt({color:c,metalness:.3,roughness:.3,clearcoat:1,clearcoatRoughness:.04}),d=s.halfL,u=s.halfW;if(e.rim&&e.rim!=="orig"){let S=new lt({color:e.rim,metalness:.9,roughness:.22});for(let T of s.wheels)T.obj.traverse(b=>{b.isMesh&&/hubcap|rim/i.test(b.material.name||"")&&(b.material=S)})}let f={light:.35,dark:.65,black:.9}[e.tint];if(f&&i.userData.body.traverse(S=>{if(!S.isMesh||!/glass|window|windshield/i.test((S.material.name||"")+" "+(S.name||"")))return;let T=S.material.clone();T.color=new xe(T.color||2107443).lerp(new xe(131844),f),"opacity"in T&&T.transparent&&(T.opacity=Math.max(T.opacity,.5+f*.45)),T.roughness=.05,S.material=T}),e.spoiler&&e.spoiler!=="none"){let S=l("spoiler"),T=d*.86,b=r.top(0,T)||r.top(0,d*.75);if(b){let y=u*2*(e.spoiler==="big"?1:.88);if(e.spoiler==="lip"){let C=ai(y*.92,.05,.16,h);C.position.copy(b.p).add(new I(0,.03,.02)),C.rotation.x=-.25,S.add(C)}else if(e.spoiler==="duck"){let C=ai(y*.95,.1,.32,h);C.position.copy(b.p).add(new I(0,.05,.04)),C.rotation.x=-.35,S.add(C)}else{let C=e.spoiler==="big",A=C?.55:.3,P=C?.42:.32,N=ai(y,.045,P,Tn.carbon);if(N.position.set(0,b.p.y+A,b.p.z+.05),N.rotation.x=.12,S.add(N),C){let O=ai(y*.96,.035,P*.55,h);O.position.set(0,b.p.y+A+.1,b.p.z+.18),O.rotation.x=.35,S.add(O)}for(let O of[-1,1]){let L=ai(.05,A,.12,Tn.carbon);L.position.set(O*y*.3,b.p.y+A/2,b.p.z+.05),S.add(L);let H=ai(.03,C?.32:.2,P+.08,h);H.position.set(O*y/2,b.p.y+A+.04,b.p.z+.05),S.add(H)}}}}if(e.neon&&e.neon!=="none"){let S=l("neon"),T=new xt({map:CM(),color:e.neon==="rainbow"?16711680:e.neon,transparent:!0,blending:Pn,depthWrite:!1,opacity:.95}),b=new Fe(new qt(u*2+1.4,d*2+1.2),T);b.rotation.x=-Math.PI/2,b.position.y=.025,b.renderOrder=1,S.add(b);let y=new xt({color:T.color});for(let C of[-1,1]){let A=Js(d*1.5,.025,y);A.rotation.x=Math.PI/2,A.position.set(C*(u-.15),.12,0),A.castShadow=!1,S.add(A)}S.userData.neon={mat:T,tubeMat:y,rainbow:e.neon==="rainbow"}}let p=e.decal;if(p&&p!=="none"){let S=l("decal");if(p==="stripes"){let T=new xe(c).getHSL({}).l>.6,b=new lt({color:T?1118481:16777215,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-4});for(let y of[-.2,.2])S.add(wo($m(r,y-.085,y+.085,-d*.98,d*.98,2,44),b))}else{let T=RM(p,c),b=Qm(T),y=-d*.62,C=d*.25,A=s.wr*.75,P=A+(p==="number"?.5:.36);for(let N of[-1,1])if(p==="number"){let O=-d*.05;S.add(wo(Nd(r,N,O-.25,O+.25,A+.05,A+.55,12,10,N<0),b))}else S.add(wo(Nd(r,N,y,C,A,P,18,5,!0),b));p==="number"&&S.add(wo($m(r,-.3,.3,-d*.72,-d*.42,10,10),b))}}let x=t.speed||0;if(x>=1){let S=l("speed"),T=r.top(0,-d*.5);if(T){let b=.75+Math.min(x,6)*.07,y=new wt,C=ai(.52*b,.12*b,.7*b,x>=4?Tn.carbon:h);C.position.y=.04,y.add(C);let A=ai(.42*b,.07*b,.04,Tn.black);if(A.position.set(0,.05,-.36*b),y.add(A),x>=3)for(let P of[-.12,.12]){let N=ai(.02,.07*b,.03,Tn.chrome);N.position.set(P*b,.05,-.37*b),y.add(N)}y.position.copy(T.p),PM(y,T.n),S.add(y)}}let m=t.nitro||0;if(m>=1||x>=2){let S=l("nitro"),T=r.rear(0,s.wr*.9)||r.rear(0,s.wr*1.3),b=T?T.p.z:d,y=m>=5?4:m>=3?2:1,C=y===1?[u*.45]:y===2?[-u*.45,u*.45]:[-u*.52,-u*.36,u*.36,u*.52];for(let A of C){let P=Js(.3,.055+(m>=4?.015:0),Tn.chrome);if(P.rotation.x=Math.PI/2,P.position.set(A,s.wr*.62,b+.06),S.add(P),m>=1){let N=new Fe(new Ns(.045,16),Tn.blueGlow);N.position.set(A,s.wr*.62,b+.215),S.add(N)}}if(m>=3){let A=document.createElement("canvas");A.width=256,A.height=64;let P=A.getContext("2d");P.fillStyle="#29b6f6",P.font="italic 900 50px Arial Black, Arial",P.textBaseline="middle",P.fillText("N\u2082O",8,34),P.strokeStyle="#fff",P.lineWidth=2,P.strokeText("N\u2082O",8,34);let N=new cn(A);N.colorSpace=mt;let O=Qm(N);for(let L of[-1,1])S.add(wo(Nd(r,L,d*.35,d*.75,s.wr*1.6,s.wr*1.6+.16,10,4,L<0),O))}}let g=t.magnet||0;if(g>=1){let S=l("magnet"),T=r.roof();if(T){let b=.45+g*.07,y=new wt,C=new Fe(new Os(.28,.09,12,24,Math.PI),Tn.red);C.rotation.z=Math.PI,C.position.y=.38,C.castShadow=!0,y.add(C);for(let P of[-.28,.28]){let N=Js(.14,.09,Tn.chrome);N.position.set(P,.44,0),y.add(N)}let A=Js(.12,.05,Tn.black);A.position.y=.06,y.add(A),y.scale.setScalar(b),y.position.copy(T.p),y.rotation.y=Math.PI/2,S.add(y)}}let _=t.armor||0;if(_>=1){let S=l("armor"),T=r.front(0,s.wr*1.1)||r.front(0,s.wr*1.5),b=r.top(0,-d*.8),y=(T?T.p.z:-d)-.14,C=u*1.5,A=s.wr*.55,P=Math.min(s.wr*.55+.6+Math.min(_,4)*.05,(b?b.p.y:1)+.05),N=.035+_*.004;for(let O of[-C/2,-C/6,C/6,C/2]){let L=Js(P-A,N,Tn.chrome);L.position.set(O,(A+P)/2,y),S.add(L)}for(let O of[A+.08,P]){let L=Js(C,N,Tn.chrome);L.rotation.z=Math.PI/2,L.position.set(0,O,y),S.add(L)}if(_>=3){let O=r.roof();if(O){let L=ai(u*1.3,.1,.16,Tn.black);L.position.set(0,O.p.y+.12,O.p.z-.3),S.add(L);for(let H=0;H<4;H++){let W=ai(.16,.08,.04,Tn.amber);W.position.set(-u*.45+H*u*.3,O.p.y+.12,O.p.z-.39),S.add(W)}}}if(_>=5)for(let O of[-1,1]){let L=Js(d*1.2,.045,Tn.chrome);L.rotation.x=Math.PI/2,L.position.set(O*(u+.02),s.wr*.75,0),S.add(L)}}let M=Math.min(.09,(t.handling||0)*.016);if(M&&s.wheels.length){let S=new Set(s.wheels.map(A=>A.obj)),T=s.wheels[0].obj.parent,b=new zt;T.getWorldQuaternion(b);let y=new zt;i.getWorldQuaternion(y);let C=new I(0,1,0).applyQuaternion(y).applyQuaternion(b.invert());for(let A of T.children)S.has(A)||((v=A.userData).basePos??(v.basePos=A.position.clone()),A.position.copy(A.userData.basePos).addScaledVector(C,-M));a.position.y=-M,o.neon&&(o.neon.position.y=M)}return a.userData.parts=o,a}function th(i,e){let n=i.getObjectByName("neon")?.userData.neon;n&&(n.rainbow&&(n.mat.color.setHSL(e*.15%1,1,.55),n.tubeMat.color.copy(n.mat.color)),n.mat.opacity=.8+Math.sin(e*3)*.12)}var ta={paint:{phi:2.35,el:.28,zoom:1},finish:{phi:2.35,el:.4,zoom:1.05},rim:{phi:1.75,el:.12,zoom:1.35},spoiler:{phi:.55,el:.42,zoom:1.15},neon:{phi:1.6,el:.1,zoom:1.05},decal:{phi:1.45,el:.25,zoom:1.1},tint:{phi:2.2,el:.3,zoom:1.15},speed:{phi:2.7,el:.6,zoom:1.25},handling:{phi:1.6,el:.08,zoom:1.2},nitro:{phi:.35,el:.15,zoom:1.3},magnet:{phi:2,el:.75,zoom:1.15},armor:{phi:2.85,el:.25,zoom:1.25}};var nh=class{constructor(e){this.engine=e;let t=this.scene=new qn;t.background=null;let n=new ds(e.renderer);t.environment=n.fromScene(new $r,.03).texture,t.environmentIntensity=.7,n.dispose(),this.camera=new Dt(35,e.aspect,.1,200);let s=new fi(16769720,2.6);s.position.set(-7,9,4),s.castShadow=e.quality.shadows>0,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,s.shadow.normalBias=.02,s.shadow.radius=4;let r=s.shadow.camera;r.left=r.bottom=-6,r.right=r.top=6,r.near=1,r.far=30,t.add(s),t.add(new Bs(12572927,7035456,.9));let a=new fi(13623551,.7);a.position.set(5,3,6),t.add(a);let o=new Fe(new qt(40,40),new Ka({opacity:.45}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,t.add(o);let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d"),h=c.createRadialGradient(64,64,8,64,64,64);h.addColorStop(0,"rgba(0,0,0,0.75)"),h.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=h,c.fillRect(0,0,128,128),this.blob=new Fe(new qt(1,1),new xt({map:new cn(l),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.01,this.blob.visible=!1,t.add(this.blob),this.neonLight=new Hi(16777215,0,6,1.5),this.neonLight.position.y=.2,t.add(this.neonLight),this.turn=new wt,t.add(this.turn),this.t=0,this.car=null,this.req=0,this.rot=.6,this.rotV=0,this.el=.28,this.zoom=1,this.auto=!0,this.idleT=0,this.target=null,this.zone={x:0,y:0,w:1,h:1},this.active=!1,this.bindInput(e.renderer.domElement)}bindInput(e){let t=new Map,n=0,s=o=>{this.active&&(t.set(o.pointerId,{x:o.clientX,y:o.clientY}),e.setPointerCapture?.(o.pointerId),this.auto=!1,this.target=null,this.idleT=0,this.rotV=0,n=0)},r=o=>{if(!this.active||!t.has(o.pointerId))return;let l=t.get(o.pointerId),c=o.clientX-l.x,h=o.clientY-l.y;if(l.x=o.clientX,l.y=o.clientY,t.size===1){let d=6/Math.max(300,innerWidth);this.rot+=c*d,this.rotV=c*d*60,this.el=Sn.clamp(this.el+h*.004,.02,1.1)}else if(t.size===2){let[d,u]=[...t.values()],f=Math.hypot(d.x-u.x,d.y-u.y);n&&(this.zoom=Sn.clamp(this.zoom*f/n,.7,2.6)),n=f}this.idleT=0},a=o=>{t.delete(o.pointerId),n=0};e.addEventListener("pointerdown",s),e.addEventListener("pointermove",r),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("wheel",o=>{this.active&&(this.zoom=Sn.clamp(this.zoom*(o.deltaY>0?.92:1.08),.7,2.6),this.idleT=0,this.auto=!1)},{passive:!0})}async setCar(e,t={},n={},s=null){let r=++this.req;this.onLoading?.(!0);try{await Ld(e)}catch(h){console.warn(h)}if(r!==this.req)return;this.onLoading?.(!1);let a;try{a=Ys(e,t.paint,{finish:t.finish})}catch(h){console.warn(h);return}this.car&&this.turn.remove(this.car),this.car=a,this.turn.add(a);let o=null;try{o=eh(a,t,n)}catch(h){console.warn("mods",h)}let l=a.userData;this.blob.visible=!0,this.blob.scale.set(l.halfW*2.6,l.halfL*2.4,1),this.R=Math.hypot(l.halfL,l.halfW),this.Hc=l.height;let c=t.neon&&t.neon!=="none";this.neonLight.intensity=c?3:0,c&&t.neon!=="rainbow"&&this.neonLight.color.set(t.neon),this.neonRainbow=t.neon==="rainbow",s&&o?.userData.parts?.[s]&&(this.pop={obj:o.userData.parts[s],t:0})}focus(e){if(!e)return;let n=.35-e.phi;for(;n-this.rot>Math.PI;)n-=Math.PI*2;for(;n-this.rot<-Math.PI;)n+=Math.PI*2;this.target={rot:n,el:e.el,zoom:e.zoom},this.auto=!1,this.idleT=0}resetView(){this.target={rot:this.rot,el:.28,zoom:1},this.auto=!0}update(e){if(this.t+=e,this.idleT+=e,this.target){let m=1-Math.exp(-e*4);this.rot+=(this.target.rot-this.rot)*m,this.el+=(this.target.el-this.el)*m,this.zoom+=(this.target.zoom-this.zoom)*m,Math.abs(this.target.rot-this.rot)<.002&&Math.abs(this.target.zoom-this.zoom)<.002&&(this.target=null)}else this.rot+=this.rotV*e,this.rotV*=Math.pow(.04,e),(this.auto||this.idleT>6)&&(this.auto=!0,this.rot+=e*.25);if(this.turn.rotation.y=this.rot,this.blob.rotation.z=this.rot,this.car&&th(this.car,this.t),this.neonRainbow&&this.neonLight.color.setHSL(this.t*.15%1,1,.55),this.pop){this.pop.t+=e;let m=this.pop.t,g=m<.5?1+Math.sin(m/.5*Math.PI)*.35:1;this.pop.obj.scale.setScalar(g),m>.5&&(this.pop.obj.scale.setScalar(1),this.pop=null)}let t=this.camera,n=innerWidth,s=innerHeight,r=this.zone;t.aspect=n/s,t.fov=35,t.updateProjectionMatrix();let a=Math.tan(Sn.degToRad(t.fov/2)),o=a*t.aspect,l=this.R||2.3,c=this.Hc||1.5,h=l/(o*(r.w*.94/n)),d=(c*.55+l*.5*Math.sin(this.el)+.3)/(a*(r.h*.92/s)),u=Math.max(h,d)/this.zoom,f=.35,p=Math.cos(this.el),x=c*.42;t.position.set(Math.sin(f)*u*p,x+Math.sin(this.el)*u,Math.cos(f)*u*p),t.lookAt(0,x,0),t.setViewOffset(n,s,n/2-(r.x+r.w/2),s/2-(r.y+r.h/2),n,s),this.engine.renderer.toneMappingExposure=.9,this.engine.setBloom(0)}render(e){this.engine.render(this.scene,this.camera,e)}};var na=class i extends Fe{constructor(){let e=i.SkyShader,t=new Xt({name:e.name,uniforms:ri.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Zt,depthWrite:!1});super(new It(1,1,1),t),this.isSky=!0}};na.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function xn(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ih(i,e,t,n=5,s=8){let r=xn(t),a=new Float32Array(i*e),o=1,l=0;for(let c=0;c<n;c++){let h=s<<c,d=Math.max(1,Math.round(s*e/i))<<c,u=new Float32Array(h*d);for(let f=0;f<u.length;f++)u[f]=r();for(let f=0;f<e;f++){let p=f/e*d,x=Math.floor(p),m=p-x,g=m*m*(3-2*m),_=(x+1)%d;for(let M=0;M<i;M++){let v=M/i*h,S=Math.floor(v),T=v-S,b=T*T*(3-2*T),y=(S+1)%h,C=u[x*h+S],A=u[x*h+y],P=u[_*h+S],N=u[_*h+y];a[f*i+M]+=o*((C+(A-C)*b)*(1-g)+(P+(N-P)*b)*g)}}l+=o,o*=.5}for(let c=0;c<a.length;c++)a[c]/=l;return a}function _i(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function vi(i,e=!0,t=!0){let n=new cn(i);return e&&(n.colorSpace=mt),t&&(n.wrapS=n.wrapT=An),n.anisotropy=8,n}function ng(i,e,t,n=2){let s=_i(e,t),r=s.getContext("2d"),a=r.createImageData(e,t);for(let o=0;o<t;o++)for(let l=0;l<e;l++){let c=i[o*e+(l-1+e)%e],h=i[o*e+(l+1)%e],d=i[(o-1+t)%t*e+l],u=i[(o+1)%t*e+l],f=(c-h)*n,p=(d-u)*n,x=1,m=Math.hypot(f,p,x);f/=m,p/=m,x/=m;let g=(o*e+l)*4;a.data[g]=(f*.5+.5)*255,a.data[g+1]=(p*.5+.5)*255,a.data[g+2]=x*255,a.data[g+3]=255}return r.putImageData(a,0,0),vi(s,!1)}var ji={lanes:[-3.4,0,3.4],halfWidth:6.2,texLen:12};function ig(i){let n=ih(512,1024,11,6,16),s=ih(512,1024,29,3,4),r=_i(512,1024),a=r.getContext("2d"),o=a.createImageData(512,1024),l=xn(5),c=new Float32Array(512*1024),h=i==="desert"?[92,86,80]:i==="snow"?[70,72,78]:i==="city"?[38,39,42]:[58,59,62];for(let b=0;b<512*1024;b++){let y=.75+n[b]*.4+s[b]*.2,C=l();C>.985?y+=.35:C<.02&&(y-=.25),c[b]=n[b]*.6+(C>.985?.4:0),o.data[b*4]=h[0]*y,o.data[b*4+1]=h[1]*y,o.data[b*4+2]=h[2]*y,o.data[b*4+3]=255}a.putImageData(o,0,0);for(let b=0;b<6;b++)a.fillStyle=`rgba(20,20,22,${.08+l()*.1})`,a.beginPath(),a.ellipse(l()*512,l()*1024,20+l()*60,40+l()*120,l(),0,7),a.fill();let d=512/(ji.halfWidth*2),u=b=>(b+ji.halfWidth)*d;for(let b of[-3.4,0,3.4]){let y=a.createLinearGradient(u(b-1.2),0,u(b+1.2),0);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.3,"rgba(10,10,10,0.18)"),y.addColorStop(.5,"rgba(0,0,0,0)"),y.addColorStop(.7,"rgba(10,10,10,0.18)"),y.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=y,a.fillRect(u(b-1.2),0,2.4*d,1024)}let f=i==="city"?"#f2f2f2":"#eeeeee",p=(b,y,C,A,P)=>{a.fillStyle=P,a.globalAlpha=.92,a.fillRect(u(b),C,(y-b)*d,A-C),a.globalAlpha=1};for(let b of[-5.15,5])p(b,b+.15,0,1024,f);for(let b of[-1.7,1.7])p(b-.07,b+.07,0,1024*.25,f),p(b-.07,b+.07,1024*.5,1024*.75,f);a.globalCompositeOperation="multiply";for(let b=0;b<3e3;b++)a.fillStyle=`rgba(90,90,90,${l()*.5})`,a.fillRect(l()*512,l()*1024,1+l()*2,1+l()*3);a.globalCompositeOperation="source-over";let x=i==="desert"?"rgba(160,120,70,0.9)":i==="snow"?"rgba(235,240,248,0.95)":i==="city"?"rgba(80,80,85,1)":"rgba(110,100,80,0.9)";a.fillStyle=x,a.fillRect(0,0,u(-5.75),1024),a.fillRect(u(5.75),0,512-u(5.75),1024);let m=_i(512,1024),g=m.getContext("2d"),_=g.createImageData(512,1024),M=i==="city"||i==="snow";for(let b=0;b<512*1024;b++){let y=(M?.35:.82)+(s[b]-.5)*(M?.7:.25)+(n[b]-.5)*.2;y=Math.max(.05,Math.min(1,y))*255,_.data[b*4]=_.data[b*4+1]=_.data[b*4+2]=y,_.data[b*4+3]=255}g.putImageData(_,0,0);let v=vi(r),S=vi(m,!1),T=ng(c,512,1024,3);return{map:v,rough:S,normal:T}}var tg={village:[[88,128,52],[120,150,60],[70,100,40]],forest:[[52,86,40],[74,96,48],[60,70,38]],desert:[[214,170,110],[196,150,96],[230,190,130]],snow:[[236,241,248],[214,224,238],[250,252,255]],city:[[54,64,48],[70,72,70],[44,50,40]]};function sg(i){let n=tg[i]||tg.village,s=ih(512,512,77,6,6),r=ih(512,512,99,4,3),a=_i(512,512),o=a.getContext("2d"),l=o.createImageData(512,512),c=xn(3);for(let d=0;d<512*512;d++){let u=r[d],f=.8+s[d]*.4+(c()-.5)*.12,p=u<.5?n[0]:n[1],x=u<.5?n[2]:n[0],m=Math.abs(u-.5)*2;for(let g=0;g<3;g++)l.data[d*4+g]=(p[g]*(1-m)+x[g]*m)*f;l.data[d*4+3]=255}if(o.putImageData(l,0,0),i==="village"||i==="forest"||i==="city"){for(let d=0;d<9e3;d++){let u=c()*512,f=c()*512;o.strokeStyle=`rgba(${40+c()*60},${80+c()*70},${20+c()*30},0.5)`,o.beginPath(),o.moveTo(u,f),o.lineTo(u+(c()-.5)*3,f-2-c()*5),o.stroke()}if(i==="village")for(let d=0;d<160;d++)o.fillStyle=["#fff","#ffeb3b","#e57373","#ba68c8"][d%4],o.fillRect(c()*512,c()*512,2,2)}if(i==="desert")for(let d=0;d<40;d++){o.strokeStyle="rgba(150,110,60,0.25)",o.lineWidth=2,o.beginPath();let u=c()*512;o.moveTo(0,u);for(let f=0;f<=512;f+=16)o.lineTo(f,u+Math.sin(f*.03+d)*6);o.stroke()}let h=new Float32Array(512*512);for(let d=0;d<512*512;d++)h[d]=s[d];return{map:vi(a),normal:ng(h,512,512,i==="snow"?1.5:4)}}function rg(i,e=.45){let s=_i(128,256),r=s.getContext("2d"),a=xn(i);r.fillStyle="#000",r.fillRect(0,0,128,256);for(let l=6;l<250;l+=16)for(let c=6;c<122;c+=14)if(a()<e){let h=a();r.fillStyle=h<.6?`rgb(255,${200+a()*40},${120+a()*60})`:h<.85?"#cfe8ff":"#ffd27a",r.globalAlpha=.6+a()*.4,r.fillRect(c,l,9,10),r.globalAlpha=1}return vi(s)}function ag(i){let n=_i(128,256),s=n.getContext("2d"),a=40+xn(i)()*40;s.fillStyle=`rgb(${a},${a+4},${a+10})`,s.fillRect(0,0,128,256);for(let o=6;o<250;o+=16)for(let l=6;l<122;l+=14)s.fillStyle="#0c1018",s.fillRect(l,o,9,10);return vi(n)}function og(){let i=_i(128,128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),vi(i,!1,!1)}function lg(i,e="#fff"){let t=_i(256,64),n=t.getContext("2d");n.font="bold 34px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(0,0,0,0.55)";let s=Math.min(250,n.measureText(i).width+30);return n.beginPath(),n.roundRect(128-s/2,6,s,52,26),n.fill(),n.fillStyle=e,n.fillText(i,128,33),vi(t,!0,!1)}function cg(){let i=_i(256,64),e=i.getContext("2d");for(let n=0;n<4;n++)for(let s=0;s<16;s++)e.fillStyle=(s+n)%2?"#111":"#fafafa",e.fillRect(s*16,n*16,16,16);let t=vi(i);return t.magFilter=Ft,t}function hg(i,e){let s=_i(256,i==="name"||i==="dir"?128:256),r=s.getContext("2d");if(r.lineJoin="round",i==="warn")r.beginPath(),r.moveTo(128,10),r.lineTo(246,226),r.lineTo(10,226),r.closePath(),r.fillStyle="#d50000",r.fill(),r.beginPath(),r.moveTo(128,46),r.lineTo(216,206),r.lineTo(40,206),r.closePath(),r.fillStyle="#fafafa",r.fill(),r.font='84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,152);else if(i==="limit")r.beginPath(),r.arc(128,128,120,0,7),r.fillStyle="#d50000",r.fill(),r.beginPath(),r.arc(128,128,92,0,7),r.fillStyle="#fafafa",r.fill(),r.fillStyle="#111",r.font='bold 104px "Arial Narrow",Arial,sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,134);else if(i==="name")r.fillStyle="#0d47a1",r.beginPath(),r.roundRect(4,4,248,120,12),r.fill(),r.strokeStyle="#fff",r.lineWidth=6,r.beginPath(),r.roundRect(12,12,232,104,8),r.stroke(),r.fillStyle="#fff",r.font="bold 40px Arial,sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(e,128,66,220);else if(i==="dir"){r.fillStyle="#1b5e20",r.beginPath(),r.roundRect(4,4,248,120,12),r.fill(),r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.roundRect(12,12,232,104,8),r.stroke(),r.fillStyle="#fff",r.font="bold 30px Arial,sans-serif",r.textAlign="left",r.textBaseline="middle";let[o,l]=e.split("|");r.fillText(o,28,46,160),r.fillText(l,28,86,160),r.font="bold 44px Arial",r.fillText("\u279C",196,66)}return vi(s,!0,!1)}var IM={village:{elev:32,azim:150,turb:3,rayl:1.4,fog:12375012,fogD:.0042,sun:16773336,sunI:3,hemiS:13624575,hemiG:5925690,hemiI:.9,exposure:.62,bloom:0,clouds:.45},forest:{elev:9,azim:120,turb:6,rayl:2.2,fog:14202506,fogD:.0062,sun:16761994,sunI:2.6,hemiS:16767408,hemiG:3096608,hemiI:.8,exposure:.62,bloom:0,clouds:.35},desert:{elev:58,azim:170,turb:9,rayl:1,fog:15192750,fogD:.0048,sun:16774886,sunI:3.6,hemiS:16773336,hemiG:12094032,hemiI:1,exposure:.55,bloom:0,clouds:.1},snow:{elev:16,azim:140,turb:12,rayl:3,fog:14410990,fogD:.0075,sun:15660287,sunI:2.2,hemiS:15134719,hemiG:12109008,hemiI:1.2,exposure:.6,bloom:0,clouds:.75},city:{night:!0,fog:857128,fogD:.0085,sun:10466559,sunI:.55,hemiS:2767472,hemiG:1052696,hemiI:.55,exposure:1,bloom:.85}};function Zs(i,e,t){let n=xn(t),s=i.attributes.position,r=new Map;for(let a=0;a<s.count;a++){let o=`${s.getX(a).toFixed(3)},${s.getY(a).toFixed(3)},${s.getZ(a).toFixed(3)}`;r.has(o)||r.set(o,[(n()-.5)*e,(n()-.5)*e,(n()-.5)*e]);let l=r.get(o);s.setXYZ(a,s.getX(a)+l[0],s.getY(a)+l[1],s.getZ(a)+l[2])}return i.computeVertexNormals(),i}var sh=null;function Ao(){if(sh)return sh;let i=new Wt(.12,.2,1,7);i.translate(0,.5,0);let e=Qr([Zs(new cs(1,2),.25,1).translate(0,0,0),Zs(new cs(.75,2),.2,2).translate(.5,.35,.2),Zs(new cs(.7,2),.2,3).translate(-.45,.25,-.3)]);e.translate(0,.9,0);let t=Qr([0,1,2,3].map(m=>Zs(new Fn(.9-m*.18,.9,10,2),.08,10+m).translate(0,.45+m*.5,0)));t.translate(0,.3,0);let n=Qr([0,1,2,3].map(m=>new Fn(.75-m*.16,.42,10,1).translate(0,.94+m*.5,0))),s=Zs(new Fs(1,1),.35,7);s.scale(1,.6,1);let r=Zs(new cs(1,1),.3,8);r.scale(1,.7,1);let a=Qr([new Fi(.28,2.4,4,10).translate(0,1.5,0),new Fi(.18,.8,4,8).translate(.62,1.6,0),new Fi(.18,.5,4,8).rotateZ(Math.PI/2).translate(.38,1.2,0),new Fi(.16,.6,4,8).translate(-.55,1.9,0),new Fi(.16,.4,4,8).rotateZ(Math.PI/2).translate(-.33,1.55,0)]),o=new It(1,1,1);o.translate(0,.5,0);let l=new hi([new J(-.58,0),new J(.58,0),new J(0,.55)]),c=new Ui(l,{depth:1.1,bevelEnabled:!1});c.translate(0,0,-.55);let h=new It(1,1,1),d=new Wt(.07,.1,1,8);d.translate(0,.5,0);let u=new It(.9,.12,.35),f=new Wt(.7,.7,1.3,16);f.rotateZ(Math.PI/2),f.translate(0,.7,0);let p=Qr([new rn(.6,16,12).translate(0,.55,0),new rn(.42,16,12).translate(0,1.35,0),new rn(.3,16,12).translate(0,1.9,0)]),x=Zs(new Fn(1,1,18,6),.08,21);return x.translate(0,.5,0),sh={trunk:i,leafy:e,pine:t,snowcap:n,rock:s,bush:r,cactus:a,wall:o,roof:c,box:h,pole:d,lampHead:u,hay:f,snowman:p,mountain:x},sh}function LM(i,e,t){let n=new It(i,e,t);n.translate(0,e/2,0);let s=n.attributes.uv,r=n.attributes.normal;for(let a=0;a<s.count;a++){let o=Math.abs(r.getX(a)),l=Math.abs(r.getY(a)),c=o>.5?t:i,h=l>.5?t:e;s.setXY(a,s.getX(a)*c/9,s.getY(a)*h/18)}return n}var $s=class{constructor(e,t,n,s,r=!0){this.mesh=new Di(t,n,s),this.mesh.castShadow=r,this.mesh.receiveShadow=!0,this.mesh.count=0,this.mesh.frustumCulled=!1,this.cap=s,e.add(this.mesh)}},ug={village:[["warn","\u{1F404}"],["warn","\u{1F6B8}"],["warn","\u{1F69C}"],["warn","\u{1F411}"],["limit","50"],["dir","K\xF6y Meydan\u0131|2 km"],["name","YE\u015E\u0130L K\xD6Y"]],forest:[["warn","\u{1F98C}"],["warn","\u{1F43B}"],["warn","\u{1F332}"],["limit","70"],["dir","\u015Eelale|5 km"],["name","\xC7AM ORMANI"]],desert:[["warn","\u{1F42A}"],["warn","\u2600\uFE0F"],["warn","\u{1F982}"],["limit","90"],["dir","Vaha|12 km"],["name","KIZGIN \xC7\xD6L"]],snow:[["warn","\u2744\uFE0F"],["warn","\u26F7\uFE0F"],["warn","\u{1F98C}"],["limit","40"],["dir","Kayak Merkezi|3 km"],["name","KARLI DA\u011E"]],city:[["warn","\u{1F6A6}"],["warn","\u{1F6B8}"],["warn","\u{1F6B2}"],["limit","60"],["dir","\u015Eehir Merkezi|1 km"],["name","GECE \u015EEHR\u0130"]]},rh=class{constructor(e,t,n=1){this.engine=e,this.theme=t,this.T=IM[t],this.seed=n;let s=this.scene=new qn,r=this.T,a=e.quality;s.fog=new Ca(r.fog,r.fogD);let o=new ds(e.renderer);if(r.night){this.sunDir=new I(-.4,.8,-.3).normalize(),s.background=new xe(461592);let x=o.fromScene(new $r,.04).texture;s.environment=x,s.environmentIntensity=.18;let m=new Float32Array(1500*3),g=xn(4);for(let v=0;v<1500;v++){let S=new I().setFromSphericalCoords(1500,Math.acos(g()*.9),g()*Math.PI*2);m.set([S.x,S.y,S.z],v*3)}let _=new ft;_.setAttribute("position",new Bt(m,3)),this.stars=new Ds(_,new ls({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1})),s.add(this.stars);let M=this.moon=new Fe(new rn(40,24,16),new xt({color:16774877,fog:!1}));s.add(M)}else{let x=this.sky=new na;x.scale.setScalar(4500);let m=x.material.uniforms;m.turbidity.value=r.turb,m.rayleigh.value=r.rayl,m.mieCoefficient.value=.005,m.mieDirectionalG.value=.8,m.cloudCoverage&&(m.cloudCoverage.value=r.clouds,m.cloudDensity.value=.45);let g=Sn.degToRad(90-r.elev),_=Sn.degToRad(r.azim);this.sunDir=new I().setFromSphericalCoords(1,g,_),m.sunPosition.value.copy(this.sunDir);let M=new qn,v=new na;v.scale.setScalar(1e3),v.material=x.material,M.add(v);let S=new Fe(new Ns(900,16),new xt({color:new xe(r.hemiG).multiplyScalar(.6)}));S.rotation.x=-Math.PI/2,S.position.y=-5,M.add(S),s.environment=o.fromScene(M,.02).texture,s.add(x)}o.dispose(),this.hemi=new Bs(r.hemiS,r.hemiG,r.hemiI),s.add(this.hemi);let l=this.sun=new fi(r.sun,r.sunI);if(l.castShadow=a.shadows>0,l.castShadow){l.shadow.mapSize.set(a.shadows,a.shadows);let x=l.shadow.camera;x.left=-28,x.right=28,x.top=40,x.bottom=-40,x.near=1,x.far=160,l.shadow.bias=-4e-4,l.shadow.normalBias=.03,l.shadow.radius=3}s.add(l),s.add(l.target);let c=sg(t),h=10;c.map.repeat.set(700/h,900/h),c.normal.repeat.copy(c.map.repeat),this.groundTile=h;let d=this.ground=new Fe(new qt(700,900),new lt({map:c.map,normalMap:c.normal,roughness:t==="snow"?.6:.95,normalScale:new J(.8,.8)}));d.rotation.x=-Math.PI/2,d.position.y=-.04,d.receiveShadow=!0,s.add(d);let u=ig(t),f=600;for(let x of[u.map,u.rough,u.normal])x.repeat.set(1,f/ji.texLen);let p=this.road=new Fe(new qt(ji.halfWidth*2,f),new lt({map:u.map,roughnessMap:u.rough,normalMap:u.normal,normalScale:new J(.6,.6),roughness:1,metalness:t==="city"?.15:0}));p.rotation.x=-Math.PI/2,p.position.y=.005,p.receiveShadow=!0,s.add(p),this.roadLen=f,this.rail=new $s(s,Ao().box,new lt({color:t==="city"?10133672:13225168,metalness:.85,roughness:.35}),2,!0),this.posts=new $s(s,Ao().box,new lt({color:7040626,metalness:.6,roughness:.5}),260,!0),this.reflectors=new $s(s,Ao().box,new lt({color:16738816,emissive:16729088,emissiveIntensity:1.2}),260,!1),this.buildProps(),this.buildBackdrop(),this.chunks=new Map,this.chunkLen=40,this.lastKey=""}buildProps(){let e=Ao(),t=this.theme,n=this.scene,s=1400,r=o=>new lt(o);this.kinds={};let a=(o,l,c,h=s,d=!0)=>{this.kinds[o]=new $s(n,l,c,h,d)};if(a("trunk",e.trunk,r({color:5914672,roughness:.95})),a("leafy",e.leafy,r({color:16777215,roughness:.85})),a("pine",e.pine,r({color:16777215,roughness:.9})),a("snowcap",e.snowcap,r({color:16054527,roughness:.7}),s,!1),a("rock",e.rock,r({color:16777215,roughness:.9,flatShading:!0})),a("bush",e.bush,r({color:16777215,roughness:.9})),a("cactus",e.cactus,r({color:5208634,roughness:.75}),400),a("wall",e.wall,r({color:16777215,roughness:.85}),300),a("roof",e.roof,r({color:16777215,roughness:.7}),300),a("win",e.box,r({color:1713200,roughness:.08,metalness:.4,emissive:t==="city"?16762992:0,emissiveIntensity:.8}),1200,!1),a("door",e.box,r({color:5978658,roughness:.6}),300,!1),a("pole",e.pole,r({color:3948614,metalness:.7,roughness:.4}),300),a("lamp",e.lampHead,r({color:16777215,emissive:16769704,emissiveIntensity:t==="city"?4:.3}),300,!1),a("fence",e.box,r({color:9071176,roughness:.9}),1200),a("hay",e.hay,r({color:14267482,roughness:1}),200),a("snowman",e.snowman,r({color:16777215,roughness:.6}),100),this.signDefs=ug[t]||ug.village,this.signDefs.forEach(([o,l],c)=>{let h=hg(o,l),d=o==="name"||o==="dir"?2.4:1.25,u=o==="name"||o==="dir"?1.2:1.25,f=new qt(d,u);f.translate(0,u/2,0);let p=new lt({map:h,alphaTest:.5,roughness:.35,metalness:.1,side:an,emissive:16777215,emissiveMap:h,emissiveIntensity:t==="city"?.35:.08});a("sign"+c,f,p,40,!0)}),t==="city"){this.bVariants=[];for(let o=0;o<6;o++){let l=10+o%3*5,c=22+o*9,h=12,d=r({map:ag(30+o),emissiveMap:rg(50+o,.4),emissive:16777215,emissiveIntensity:1.6,roughness:.4,metalness:.3});this.bVariants.push({w:l,h:c,d:h,inst:new $s(n,LM(l,c,h),d,120,!0)})}}}buildBackdrop(){let e=Ao(),t=xn(this.seed+99),n=this.theme;this.backdrop=new wt,this.scene.add(this.backdrop);let s=n==="snow"?15265526:n==="desert"?13146722:n==="city"?988196:n==="forest"?3428398:7311194,r=new lt({color:s,roughness:1,flatShading:!0}),a=new lt({color:16777215,roughness:.8,flatShading:!0});for(let o=0;o<26;o++){let l=o%2?1:-1,c=l*(260+t()*300),h=-200-t()*700,d=n==="village"?60+t()*80:120+t()*220,u=160+t()*200,f=new Fe(e.mountain,r);if(f.scale.set(u,d,u*(.7+t()*.5)),f.position.set(c,-2,h),this.backdrop.add(f),n==="snow"||n==="forest"&&d>250){let p=new Fe(e.mountain,a);p.scale.set(u*.36,d*.36,u*.3),p.position.set(c,d*.66-2,h),this.backdrop.add(p)}}}chunkProps(e){let t=xn(this.seed*31+e*977+13),n=this.theme,s=[],r=-e*this.chunkLen,a=this.engine.quality.props,o=(d,u,f,p,x,m,g,_=0,M)=>s.push({kind:d,x:u,y:f,z:p,sx:x,sy:m,sz:g,ry:_,color:M}),l=()=>new xe().setHSL(n==="forest"?.3+t()*.06:.22+t()*.1,.45+t()*.2,n==="forest"?.18+t()*.08:.26+t()*.1),c=()=>new xe().setHSL(.36+t()*.05,.4,n==="snow"?.2+t()*.08:.15+t()*.07),h=Math.round((n==="forest"?18:n==="city"?4:10)*a);for(let d=0;d<h;d++){let u=t()<.5?-1:1,f=u*(9.5+Math.pow(t(),1.6)*90),p=r-t()*this.chunkLen,x=.8+t()*.8;if(n==="village")t()<.6?(o("trunk",f,0,p,x,2.2*x,x),o("leafy",f,2.1*x,p,1.7*x,1.6*x,1.7*x,t()*6,l())):t()<.6?o("bush",f,.2,p,1.2*x,1.1*x,1.2*x,t()*6,l()):(o("trunk",f,0,p,x*.9,1.6*x,x*.9),o("pine",f,.8*x,p,2*x,3.2*x,2*x,0,c()));else if(n==="forest"){let m=3+t()*4;o("trunk",f,0,p,x,m*.5,x),o("pine",f,m*.25,p,2.3*x,m*1.3,2.3*x,t()*6,c()),t()<.2&&o("rock",f+2,.2,p,.8*x,.8*x,.8*x,t()*6,new xe(7039846))}else if(n==="snow"){let m=3+t()*3.5;o("trunk",f,0,p,x,m*.5,x),o("pine",f,m*.25,p,2.2*x,m*1.3,2.2*x,t()*6,c()),o("snowcap",f,m*.25,p,2.2*x,m*1.3,2.2*x,0)}else n==="desert"?t()<.45?o("cactus",f,0,p,x,x*(.8+t()*.6),x,t()*6):o("rock",f,.2,p,1.5*x*(1+t()*2),1.3*x*(1+t()),1.5*x*(1+t()),t()*6,new xe().setHSL(.07,.45,.38+t()*.12)):n==="city"&&(o("trunk",u*(8+t()*1.5),0,p,.8,2,.8),o("leafy",u*(8+t()*1.5),1.9,p,1.2,1.2,1.2,t()*6,l()))}if(n==="village"||n==="snow"||n==="forest"&&t()<.35){let d=n==="village"?2:1;for(let u=0;u<d;u++)if(t()<.8){let f=t()<.5?-1:1,p=f*(16+t()*18),x=r-8-t()*24,m=6+t()*3,g=7+t()*4,_=3+t()*1.6,M=new xe().setHSL([.1,.12,.08,.55,0][Math.floor(t()*5)],.25+t()*.25,.75+t()*.15),v=n==="snow"?new xe(15922939):new xe().setHSL(.02+t()*.04,.6,.35+t()*.1);o("wall",p,0,x,m,_,g,0,M),o("roof",p,_,x,m*1.12,3.6+t()*1.2,g*1.08,0,v),o("pole",p-f*m*.2,_+m*.1,x+g*.25,4,1.4,4,0);let S=p-f*(m/2+.02);o("door",S,1.05,x,.08,2.1,1);for(let T of[-g*.3,g*.3])o("win",S,_*.55,x+T,.1,1,1.2);if(n==="village"&&t()<.7)for(let T=0;T<6;T++)o("fence",p-f*(m/2+3),.5,x-g/2+T*(g/5),.12,1,.12);n==="village"&&t()<.5&&o("fence",p-f*(m/2+3),.75,x,.08,.1,g,0),n==="village"&&t()<.4&&o("hay",p+f*6,0,x+8,1,1,1,t()*6),n==="snow"&&t()<.5&&o("snowman",p-f*(m/2+4),0,x+4,1,1,1,f>0?-Math.PI/2:Math.PI/2)}}if(n==="city")for(let d of[-1,1]){let u=r;for(;u>r-this.chunkLen;){let f=Math.floor(t()*this.bVariants.length),p=this.bVariants[f];s.push({kind:"b"+f,x:d*(14+p.d/2+t()*4),y:0,z:u-p.w/2,sx:1,sy:1,sz:1,ry:Math.PI/2}),u-=p.w+2+t()*4}}if(e%3===1||e%25===3){let d=this.signDefs.findIndex(g=>g[0]==="name"),u=e%25===3?d:Math.floor(t()*this.signDefs.length),f=e%25===3||t()<.75?1:-1,p=f*7.9,x=r-20,m=this.signDefs[u][0]==="name"||this.signDefs[u][0]==="dir";o("pole",p,0,x,.9,m?2.2:2.3,.9),m&&o("pole",p+.9,0,x,.9,2.2,.9),o("sign"+u,p+(m?.45:0),m?2:2.1,x+.05,1,1,1,f>0?-.25:.25)}if(n==="city"||n==="village"||n==="snow")for(let d of[-1,1]){let u=d*7.2,f=r-(d>0?0:this.chunkLen/2);o("pole",u,0,f,1,6,1),o("lamp",u-d*.6,6,f,1,1,1)}return s}rebuildInstances(e,t){let n=[];for(let u=e;u<=t;u++)this.chunks.has(u)||this.chunks.set(u,this.chunkProps(u)),n.push(...this.chunks.get(u));for(let u of this.chunks.keys())(u<e-1||u>t+1)&&this.chunks.delete(u);let s=new Ve,r=new zt,a=new Wn,o=new I,l=new I,c={},h=u=>u[0]==="b"&&u.length<=2?this.bVariants[+u.slice(1)].inst:this.kinds[u];for(let u of n){let f=h(u.kind);if(!f)continue;let p=c[u.kind]||0;p>=f.cap||(c[u.kind]=p+1,a.set(0,u.ry,0),r.setFromEuler(a),o.set(u.x,u.y,u.z),l.set(u.sx,u.sy,u.sz),s.compose(o,r,l),f.mesh.setMatrixAt(p,s),u.color&&f.mesh.setColorAt(p,u.color))}let d=[...Object.values(this.kinds),...(this.bVariants||[]).map(u=>u.inst)];for(let u of d){let f=Object.keys(this.kinds).find(p=>this.kinds[p]===u)||"b"+this.bVariants.findIndex(p=>p.inst===u);u.mesh.count=c[f]||0,u.mesh.instanceMatrix.needsUpdate=!0,u.mesh.instanceColor&&(u.mesh.instanceColor.needsUpdate=!0)}}update(e,t,n){let s=this.groundTile;this.ground.position.z=Math.round(e/s)*s-250,this.road.position.z=Math.round(e/12)*12-this.roadLen/2+120,this.backdrop.position.z=e,this.sky&&this.sky.position.copy(t.position),this.sky?.material.uniforms.time&&(this.sky.material.uniforms.time.value+=n),this.stars&&this.stars.position.copy(t.position),this.moon&&this.moon.position.set(t.position.x-500,420,t.position.z-1100);let r=this.sun;r.target.position.set(0,0,e-18),r.position.copy(r.target.position).addScaledVector(this.sunDir,90);let a=Math.round(e/4)*4,o=new Ve,l=0;for(let p of[-1,1])o.makeScale(.08,.28,520),o.setPosition(p*6.55,.62,a-200),this.rail.mesh.setMatrixAt(p>0?1:0,o);this.rail.mesh.count=this.theme==="city"||this.theme==="snow"||this.theme==="forest"||this.theme==="desert"?2:0;for(let p=a+40;p>a-440&&l<258;p-=4)for(let x of[-1,1])o.makeScale(.12,.8,.12),o.setPosition(x*6.62,.4,p),this.posts.mesh.setMatrixAt(l,o),o.makeScale(.03,.08,.18),o.setPosition(x*6.5,.62,p),this.reflectors.mesh.setMatrixAt(l,o),l++;this.posts.mesh.count=this.reflectors.mesh.count=this.rail.mesh.count||this.theme==="village"?l:0,this.theme==="village"&&(this.reflectors.mesh.count=0),this.posts.mesh.instanceMatrix.needsUpdate=!0,this.reflectors.mesh.instanceMatrix.needsUpdate=!0,this.rail.mesh.instanceMatrix.needsUpdate=!0;let c=Math.floor(-e/this.chunkLen),h=this.engine.quality.range,d=c-1,u=c+Math.ceil(h/this.chunkLen),f=d+":"+u;f!==this.lastKey&&(this.lastKey=f,this.rebuildInstances(d,u))}dispose(){this.scene.environment?.dispose?.();for(let e of[this.ground.material,this.road.material]){for(let t of["map","normalMap","roughnessMap"])e[t]?.dispose();e.dispose()}}};var DM=ji.lanes,fg={barrier:{hw:1.4,hl:.3,h:1.05},cones:{hw:1.3,hl:.4,h:.8},hay:{hw:1.4,hl:.8,h:1.45},logs:{hw:1.5,hl:.6,h:.95},rocks:{hw:1.3,hl:1,h:1.35},snowman:{hw:.8,hl:.8,h:2.1},jersey:{hw:1.5,hl:.5,h:.95}},dg={village:["barrier","cones","hay"],forest:["logs","cones","barrier"],desert:["rocks","barrier","cones"],snow:["snowman","cones","barrier"],city:["jersey","cones","barrier"]},ia=null;function oh(){if(ia)return ia;let i=document.createElement("canvas");i.width=256,i.height=64;let e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,256,64),e.fillStyle="#d50000";for(let u=-2;u<10;u++)e.beginPath(),e.moveTo(u*32,64),e.lineTo(u*32+16,64),e.lineTo(u*32+48,0),e.lineTo(u*32+32,0),e.fill();let t=new cn(i);t.colorSpace=mt;let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d");s.fillStyle="#ffcc00",s.fillRect(0,0,64,256),s.fillStyle="#111";for(let u=0;u<256;u+=64)s.beginPath(),s.moveTo(0,u+40),s.lineTo(32,u+10),s.lineTo(64,u+40),s.lineTo(64,u+58),s.lineTo(32,u+28),s.lineTo(0,u+58),s.fill();let r=new cn(n);r.colorSpace=mt,r.wrapS=r.wrapT=An;let a=new hi;for(let u=0;u<10;u++){let f=u/10*Math.PI*2+Math.PI/2,p=u%2?.24:.55,x=Math.cos(f)*p,m=Math.sin(f)*p;u?a.lineTo(x,m):a.moveTo(x,m)}let o=new Ui(a,{depth:.12,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:3});o.center();let l=new hi([new J(0,0),new J(7,0),new J(7,1.3)]),c=new Ui(l,{depth:3,bevelEnabled:!1});c.translate(0,0,-1.5),c.rotateY(Math.PI/2);let h=new Fn(.28,.75,16);h.translate(0,.375,0);let d=u=>new lt(u);return ia={stripeMat:d({map:t,roughness:.5}),metal:d({color:9080985,metalness:.8,roughness:.4}),cone:d({color:16734720,roughness:.55}),coneBand:d({color:15921906,roughness:.4}),coneGeo:h,hay:d({color:14201948,roughness:1}),wood:d({color:8017204,roughness:.9}),woodEnd:d({color:13214571,roughness:.9}),rock:d({color:9202252,roughness:.95,flatShading:!0}),snow:d({color:16777215,roughness:.55}),coal:d({color:1118481}),carrot:d({color:16742912}),concrete:d({color:12105392,roughness:.9}),gold:d({color:16761370,metalness:1,roughness:.2,emissive:8014336,emissiveIntensity:.55}),starGeo:o,diamond:new yt({color:8319231,metalness:.05,roughness:.02,emissive:761028,emissiveIntensity:.9,clearcoat:1,iridescence:.8,flatShading:!0}),diamondGeo:new Fr(.5,0).scale(.8,1.15,.8),rampTop:d({map:r,roughness:.5}),rampSide:d({color:2895667,metalness:.7,roughness:.5}),rampGeo:c,glow:new xt({color:16777215,transparent:!0,opacity:.35,blending:Pn,depthWrite:!1}),checker:cg()},ia}function gt(i,e,t=0,n=0,s=0,r=!0){let a=new Fe(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}function NM(i,e){let t=new wt,n=oh();switch(i){case"barrier":{t.add(gt(new It(2.8,.42,.12),n.stripeMat,0,.78));for(let r of[-1.15,1.15])t.add(gt(new It(.08,1,.08),n.metal,r,.5)),t.add(gt(new It(.08,.06,.7),n.metal,r,.03));let s=gt(new rn(.09,10,8),new lt({color:16748800,emissive:16739584,emissiveIntensity:3}),-1.15,1.05,0,!1);t.add(s);break}case"cones":for(let s of[-1,0,1])t.add(gt(n.coneGeo,n.cone,s,0)),t.add(gt(new Wt(.17,.2,.14,16),n.coneBand,s,.42,0,!1)),t.add(gt(new It(.6,.05,.6),n.cone,s,.025));break;case"hay":{let s=new Wt(.7,.7,1.3,20);s.rotateZ(Math.PI/2),t.add(gt(s,n.hay,-.7,.7)),t.add(gt(s,n.hay,.7,.7));break}case"logs":{let s=new Wt(.3,.3,3,14);s.rotateZ(Math.PI/2);for(let[r,a]of[[.3,-.32],[.3,.32],[.82,0]])t.add(gt(s,[n.wood,n.woodEnd,n.woodEnd],0,r,a));break}case"rocks":{for(let s=0;s<3;s++){let r=gt(new Fs(.6+e()*.3,0),n.rock,-.9+s*.9,.5,(e()-.5)*.8);r.rotation.set(e()*3,e()*3,0),t.add(r)}break}case"snowman":{t.add(gt(new rn(.65,20,14),n.snow,0,.6)),t.add(gt(new rn(.46,20,14),n.snow,0,1.4)),t.add(gt(new rn(.32,20,14),n.snow,0,1.95));let s=gt(new Fn(.06,.35,8),n.carrot,0,1.95,.4,!1);s.rotation.x=Math.PI/2,t.add(s);for(let r of[-.11,.11])t.add(gt(new rn(.04,8,6),n.coal,r,2.05,.28,!1));t.add(gt(new Wt(.22,.22,.32,16),n.coal,0,2.35,0)),t.add(gt(new Wt(.34,.34,.04,16),n.coal,0,2.2,0));break}case"jersey":{let s=new hi([new J(-.3,0),new J(.3,0),new J(.12,.3),new J(.09,.95),new J(-.09,.95),new J(-.12,.3)]),r=new Ui(s,{depth:1.45,bevelEnabled:!1});r.rotateY(Math.PI/2);for(let a of[-1.48,.03])t.add(gt(r,n.concrete,a,0));t.add(gt(new It(2.9,.12,.2),n.stripeMat,0,.75,0,!1));break}}return t.userData=fg[i],t}function FM(i){let e=oh(),t=new wt;if(i==="star"){let n=gt(e.starGeo,e.gold,0,0,0,!0);t.add(n)}else if(i==="diamond")t.add(gt(e.diamondGeo,e.diamond,0,0,0,!0));else{let n=i==="magnet"?16717636:i==="nitro"?2718207:58879,s=new yt({color:n,metalness:.3,roughness:.2,clearcoat:1,emissive:n,emissiveIntensity:.35});if(i==="magnet"){let a=gt(new Os(.42,.14,12,24,Math.PI),s);a.rotation.z=Math.PI,t.add(a);for(let o of[-.42,.42])t.add(gt(new Wt(.14,.14,.24,12),ia.metal,o,.12))}else if(i==="nitro")t.add(gt(new Wt(.3,.3,.9,20),s)),t.add(gt(new Wt(.12,.18,.25,12),ia.metal,0,.55));else{let a=new yt({color:8445674,transparent:!0,opacity:.35,roughness:0,clearcoat:1,emissive:48340,emissiveIntensity:.5});t.add(gt(new rn(.6,24,16),a,0,0,0,!1)),t.add(gt(new Fr(.28),s))}let r=new Fe(new ja(.7,.95,32),new xt({color:n,transparent:!0,opacity:.5,blending:Pn,depthWrite:!1,side:an}));r.rotation.x=-Math.PI/2,r.position.y=-1.15,t.add(r)}return t}function UM(){let i=oh(),e=new Fe(i.rampGeo,[i.rampSide,i.rampTop]);return e.castShadow=!0,e.receiveShadow=!0,e}function OM(){let i=oh(),e=new wt,t=i.checker.clone();t.needsUpdate=!0,t.wrapS=t.wrapT=An,t.repeat.set(1,1);let n=new Fe(new qt(12,2),new lt({map:t,roughness:.6}));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,e.add(n);let s=new lt({color:15658734,metalness:.6,roughness:.3});for(let a of[-7.2,7.2])e.add(gt(new Wt(.25,.3,7,16),s,a,3.5));let r=i.checker.clone();r.needsUpdate=!0,r.wrapS=An,r.repeat.set(2,1),e.add(gt(new It(15,1.4,.3),new lt({map:r,roughness:.5,emissive:2236962}),0,6.6));for(let a=0;a<8;a++){let o=gt(new rn(.25,12,8),new lt({color:[16717636,16771584,58998,2718207][a%4],emissive:[16717636,16771584,58998,2718207][a%4],emissiveIntensity:.6}),-6+a*1.7,5.7,0,!1);e.add(o)}return e}function Od(i){let e=xn(i.n*31+7),t=qm.filter(s=>s!=="compact-car"),n=["compact-car"];for(;n.length<4;){let s=t.splice(Math.floor(e()*t.length),1)[0];n.push(s)}return n}function kM(i,e){let t=Od(i),n=t.filter(g=>Xm.includes(g)),s=xn(e),r=[],a=i.length,o=(i.n-1)/19,l=90,c=[0,1,2],h=new Set,d=-999,u=0,f=dg[i.theme]||dg.village,p=g=>g[Math.floor(s()*g.length)],x=(g,_,M,v)=>{for(let S=_;S<M;S+=3.4)r.push({kind:"star",lane:g,z:S,y:v?v(S):1}),u++},m=g=>c.some(_=>Math.abs(_-g)<=1);for(;l<a-80;){let g=(46-o*18)*(.85+s()*.4)*(i.speed/26),_=s(),M=[0,1,2],v=new Set;if(_<.11+o*.05&&l-d>160){let b=[0,1,2].filter(m),y=p(b);r.push({kind:"ramp",lane:y,z:l,len:7,h:1.3});let C=l+7+13;r.push({kind:"traffic",lane:y,z:C,speed:0,ttype:p(n),color:"orig"});let A=i.speed+2;for(let P=1;P<=6;P++){let N=P*.1;r.push({kind:P===3||P===4?"diamond":"star",lane:y,z:l+7+A*N,y:1.3+11*N-15*N*N+.9}),P===3||P===4||u++}if(M=[0,1,2].filter(P=>P!==y),d=l,s()<.5){let P=p(M.filter(N=>!h.has(N)));P!==void 0&&M.length>1&&(r.push({kind:"obst",type:"barrier",lane:P,z:C}),M=M.filter(N=>N!==P))}l+=50,c=M.length?M:[y],h=new Set;continue}if(_<.11+i.density){let b=s()<.3+o*.4,y=[0,1,2].filter(m),C=p(y),A=[0,1,2].filter(P=>P!==C);b||(A=[p(A)]);for(let P of A)if(!h.has(P)){if(s()<i.traffic)r.push({kind:"traffic",lane:P,z:l,speed:4+s()*5,ttype:p(t),color:"orig"}),v.add(P);else{let N=p(f);if(r.push({kind:"obst",type:N,lane:P,z:l}),fg[N].h<=1.1&&s()<.35)for(let O=-1;O<=1;O++)r.push({kind:"star",lane:P,z:l+O*2.6,y:2.1-Math.abs(O)*.4}),u++}M=M.filter(N=>N!==P)}}let S=p(M);s()<.85&&x(S,l+8,l+g-8);let T=M.filter(b=>b!==S);s()<.075+o*.02?r.push({kind:"diamond",lane:T.length?p(T):S,z:l+g*.5,y:1.1}):s()<.07&&r.push({kind:p(["magnet","nitro","shield","magnet","nitro"]),lane:T.length?p(T):S,z:l+g*.55,y:1.3}),c=M,h=v,l+=g}x(1,a-70,a-10),r.push({kind:"finish",lane:1,z:a}),r.sort((g,_)=>g.z-_.z);for(let g of r)g.x=DM[g.lane];return{ents:r,totalStars:u}}var ah=class{constructor(e,t,n){this.scene=e,this.level=t;let s=kM(t,n);this.ents=s.ents,this.totalStars=s.totalStars,this.pools=new Map,this.next=0,this.active=[],this.r=xn(n+5)}acquire(e,t){let n=this.pools.get(e);if(n&&n.length){let s=n.pop();return s.visible=!0,s}return t()}release(e,t){t.visible=!1,this.pools.has(e)||this.pools.set(e,[]),this.pools.get(e).push(t)}spawn(e){let t,n;switch(e.kind){case"obst":t="o:"+e.type,n=this.acquire(t,()=>NM(e.type,this.r)),Object.assign(e,n.userData);break;case"traffic":t="t:"+e.ttype+e.color,n=this.acquire(t,()=>Ys(e.ttype,e.color,{lite:!0})),e.hw=n.userData.halfW,e.hl=n.userData.halfL,e.h=n.userData.height+.15;break;case"ramp":t="ramp",n=this.acquire(t,UM);break;case"finish":t="finish",n=this.acquire(t,OM);break;default:t=e.kind,n=this.acquire(t,()=>FM(e.kind))}n.rotation.set(0,0,0),n.scale.setScalar(1),n.position.set(e.x,e.y||0,-e.z),n.parent||this.scene.add(n),e.obj=n,e.key=t,e.alive=!0,e.active=!1,e.fly=null,e.collectT=0,this.active.push(e)}despawn(e){e.obj&&this.release(e.key,e.obj),e.obj=null}update(e,t,n){for(;this.next<this.ents.length&&this.ents[this.next].z<e+280;)this.spawn(this.ents[this.next++]);for(let s=this.active.length-1;s>=0;s--){let r=this.active[s],a=r.obj;r.kind==="traffic"&&r.speed>0&&r.alive&&(!r.active&&r.z-e<95&&(r.active=!0),r.active&&(r.z+=r.speed*t)),r.fly?(r.fly.vy-=25*t,a.position.x+=r.fly.vx*t,a.position.y=Math.max(0,a.position.y+r.fly.vy*t),a.position.z-=r.fly.vz*t,a.rotation.x+=r.fly.rx*t,a.rotation.z+=r.fly.rz*t):r.collectT>0?(r.collectT+=t,a.scale.setScalar(1+r.collectT*3),a.position.y+=t*6,r.collectT>.18&&(a.visible=!1)):(a.position.z=-r.z,r.magnet&&(a.position.x+=(r.magnet.x-a.position.x)*Math.min(1,t*12),a.position.y+=(r.magnet.y+1-a.position.y)*Math.min(1,t*12)),r.kind==="star"?a.rotation.y=n*3+r.z:r.kind==="diamond"?(a.rotation.y=n*2,a.position.y=r.y+Math.sin(n*3+r.z)*.15):["magnet","nitro","shield"].includes(r.kind)&&(a.rotation.y=n*2,a.position.y=r.y+Math.sin(n*3)*.15),r.kind==="traffic"&&Eo(a,r.z)),(r.z<e-25||r.fly&&r.fly.t!==void 0&&(r.fly.t+=t)>2.5)&&(this.despawn(r),this.active.splice(s,1))}}dispose(){for(let e of this.active)this.despawn(e);for(let e of this.pools.values())for(let t of e)this.scene.remove(t)}};var jt=null,gs,mg=!0,Ki={},BM=["engine_idle","engine_loop","engine_high","wind_loop","nitro","crash","bump","star","diamond","powerup","jump","land","horn","countdown","go","win","lose","tires"];function Qs(){if(jt){jt.state==="suspended"&&jt.resume();return}try{jt=new(window.AudioContext||window.webkitAudioContext)}catch{return}gs=jt.createGain(),gs.gain.value=mg?.8:0,gs.connect(jt.destination);for(let i of BM)fetch(jc(`sfx/${i}.mp3`)).then(e=>e.arrayBuffer()).then(e=>jt.decodeAudioData(e)).then(e=>{Ki[i]=e}).catch(()=>{})}function kd(i){mg=i,gs&&(gs.gain.value=i?.8:0)}function En(i,e=1,t=1){if(!jt||!Ki[i])return!1;let n=jt.createBufferSource(),s=jt.createGain();return n.buffer=Ki[i],n.playbackRate.value=t,s.gain.value=e,n.connect(s),s.connect(gs),n.start(),!0}function Bn(i,e,t="sine",n=.3,s=0,r=0){if(!jt)return;let a=jt.currentTime+r,o=jt.createOscillator(),l=jt.createGain();o.type=t,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(i*s,a+e),l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(gs),o.start(a),o.stop(a+e+.05)}var pg=0,ct={star:()=>{let i=performance.now();i-pg<45||(pg=i,En("star",.45,.95+Math.random()*.15)||Bn(1300,.12,"sine",.15,1.5))},diamond:()=>En("diamond",.8)||Bn(1320,.25,"triangle",.2),power:()=>En("powerup",.7)||Bn(400,.3,"square",.12,3),crash:()=>En("crash",.9)||Bn(90,.4,"sawtooth",.25,.5),bump:()=>En("bump",.7)||Bn(120,.2,"square",.2),jump:()=>En("jump",.7)||Bn(300,.25,"triangle",.15,2.2),land:()=>En("land",.7),nitro:()=>En("nitro",.9)||Bn(200,.6,"sawtooth",.12,3),beep:i=>(i?En("go",.8):En("countdown",.7))||Bn(i?1046:523,.3,"square",.15),click:()=>Bn(700,.04,"square",.05),win:()=>En("win",.8)||[523,659,784,1046].forEach((i,e)=>Bn(i,.3,"triangle",.2,1,e*.12)),lose:()=>En("lose",.8)||[392,330,262].forEach((i,e)=>Bn(i,.35,"triangle",.2,1,e*.15)),buy:()=>En("powerup",.6)||Bn(990,.2,"square",.12),horn:()=>En("horn",.9)||Bn(440,.3,"square",.2),tires:()=>En("tires",.25,.9+Math.random()*.2)},Yn=null;function lh(i){let e=jt.createBufferSource(),t=jt.createGain();return e.buffer=Ki[i],e.loop=!0,e.loopStart=.04,e.loopEnd=Ki[i].duration-.04,t.gain.value=0,e.connect(t),t.connect(gs),e.start(0,.04),{s:e,g:t}}function Bd(){if(!(!jt||Yn)){if(!Ki.engine_idle||!Ki.engine_loop||!Ki.engine_high){setTimeout(()=>{Yn===null&&ch&&Bd()},500),ch=!0;return}ch=!0,Yn={idle:lh("engine_idle"),mid:lh("engine_loop"),high:lh("engine_high"),wind:Ki.wind_loop?lh("wind_loop"):null}}}var ch=!1;function gg(i,e){if(!Yn)return;let t=jt.currentTime,n=Math.min(1.3,i/40),s=(a,o)=>Math.max(0,1-Math.abs(n-a)/o),r=(a,o,l)=>{a.g.gain.setTargetAtTime(o,t,.12),a.s.playbackRate.setTargetAtTime(l,t,.12)};r(Yn.idle,.5*s(0,.35),.85+n*.6),r(Yn.mid,.5*s(.5,.45),.8+n*.5),r(Yn.high,.45*Math.min(1,Math.max(0,(n-.45)/.35))+(e?.2:0),.75+n*.35+(e?.12:0)),Yn.wind&&r(Yn.wind,Math.min(.5,n*.35)+(e?.15:0),.9+n*.2)}function zd(){if(ch=!1,!!Yn){for(let i of Object.values(Yn))if(i)try{i.g.gain.setTargetAtTime(0,jt.currentTime,.1),i.s.stop(jt.currentTime+.5)}catch{}Yn=null}}var Mt=i=>document.getElementById(i),zM=30,hh=class{constructor(e,t){this.engine=e,this.o=t;let{level:n,carDef:s,color:r,stats:a}=t;this.level=n,this.stats=a,this.mp=!!t.mp,this.world=new rh(e,n.theme,t.seed),this.scene=this.world.scene,this.track=new ah(this.scene,n,t.seed),e.renderer.toneMappingExposure=this.world.T.exposure,e.setBloom(this.world.T.bloom),this.camera=new Dt(62,e.aspect,.3,6e3),this.car=Ys(s.type,r,{finish:t.custom?.finish}),this.scene.add(this.car);try{eh(this.car,t.custom||{},t.upg||{})}catch(f){console.warn("mods",f)}if(this.world.T.night){let f=new zs(16773590,60,70,.45,.6,1.2);f.position.set(0,.9,-this.car.userData.halfL),f.target.position.set(0,0,-this.car.userData.halfL-25),this.car.add(f),this.car.add(f.target)}this.halfW=this.car.userData.halfW,this.halfL=this.car.userData.halfL;let o=og(),l=new Fe(new qt(this.halfW*2.6,this.halfL*2.4),new xt({map:o,transparent:!0,depthWrite:!1,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.y=.02,this.scene.add(l),this.blob=l;let c=new xt({color:4033535,transparent:!0,opacity:.75,blending:Pn,depthWrite:!1});this.flames=[];for(let f of[-.35,.35]){let p=new Fe(new Fn(.13,1.1,12),c);p.rotation.x=Math.PI/2,p.position.set(f,.3,this.halfL+.65),p.visible=!1,this.car.add(p),this.flames.push(p)}let h=new xt({color:16777215,transparent:!0,opacity:.9,blending:Pn,depthWrite:!1});for(let f of[-.35,.35]){let p=new Fe(new Fn(.06,.55,10),h);p.rotation.x=Math.PI/2,p.position.set(f,.3,this.halfL+.4),p.visible=!1,this.car.add(p),this.flames.push(p)}this.bubble=new Fe(new rn(1,32,20),new yt({color:8445674,transparent:!0,opacity:.22,roughness:0,clearcoat:1,emissive:48340,emissiveIntensity:.4,depthWrite:!1})),this.bubble.scale.set(this.halfW*1.5,1.4,this.halfL*1.3),this.bubble.position.y=.8,this.bubble.visible=!1,this.car.add(this.bubble);let d=160,u=new Float32Array(d*6);if(this.windGeo=new ft,this.windGeo.setAttribute("position",new Bt(u,3)),this.wind=new Ls(this.windGeo,new os({color:16777215,transparent:!0,opacity:0,blending:Pn,depthWrite:!1})),this.wind.frustumCulled=!1,this.scene.add(this.wind),this.windP=Array.from({length:d},()=>this.newWind(!0)),this.state="countdown",this.cd=t.countdown??3.2,this.lastBeep=4,this.dist=0,this.speed=0,this.lane=1,this.prevLane=1,this.x=0,this.y=0,this.vy=0,this.onRamp=null,this.time=0,this.starsGot=0,this.diamondsGot=0,this.crashes=0,this.maxHearts=1+Math.floor(a.armor/2),this.hearts=this.maxHearts,this.nitro=.35,this.nitroT=0,this.magnetT=0,this.shieldT=0,this.invT=0,this.shake=0,this.endT=0,this.camPos=new I(0,4,9),this.camLook=new I,this.remotes=new Map,this.sendT=0,this.mp)for(let f of t.players||[])f.id!==t.myId&&this.addRemote(f);this.bindInput(),this.hudInit(),Bd()}newWind(e){return{x:(Math.random()-.5)*16,y:.5+Math.random()*5,z:-(e?Math.random()*60:60),l:1+Math.random()*3}}addRemote(e){let t=Ys(e.model||"hatchback",e.color||"orig",{lite:!0}),n=new La(new Cr({map:lg(e.name,"#ffffff"),depthTest:!1,transparent:!0}));n.scale.set(2.8,.7,1),n.position.y=t.userData.height+1.2,t.userData.label=n,n.renderOrder=10,t.add(n),t.visible=!1,this.scene.add(t),this.remotes.set(e.id,{id:e.id,name:e.name,color:e.color,car:t,d:0,x:0,y:0,s:0,rd:0,rx:0,has:!1,finished:!1}),this.hudMarkers()}remoteState(e){let t=this.remotes.get(e.id);t&&(t.d=e.d,t.x=e.x,t.y=e.y,t.s=e.s,t.has||(t.rd=e.d,t.rx=e.x),t.has=!0)}removeRemote(e){let t=this.remotes.get(e);t&&(this.scene.remove(t.car),this.remotes.delete(e),this.hudMarkers())}bindInput(){let e=Mt("touch"),t=0,n=0,s=0,r=!1;this.onTS=a=>{let o=a.changedTouches?a.changedTouches[0]:a;t=o.clientX,n=o.clientY,s=performance.now(),r=!1},this.onTM=a=>{if(r)return;let o=a.changedTouches?a.changedTouches[0]:a;if(a.type==="mousemove"&&!(a.buttons&1))return;let l=o.clientX-t,c=o.clientY-n,h=Math.min(innerWidth,innerHeight)*.06;(Math.abs(l)>h||Math.abs(c)>h)&&(r=!0,Math.abs(l)>Math.abs(c)?this.steer(l>0?1:-1):c<0?this.jump():this.useNitro()),a.cancelable&&a.preventDefault()},this.onTE=a=>{if(r)return;let o=a.changedTouches?a.changedTouches[0]:a;performance.now()-s<350&&this.steer(o.clientX<innerWidth/2?-1:1)},this.onKey=a=>{if(a.repeat)return;let o=a.key.toLowerCase();o==="arrowleft"||o==="a"?this.steer(-1):o==="arrowright"||o==="d"?this.steer(1):o==="arrowup"||o==="w"||o===" "?this.jump():o==="arrowdown"||o==="s"||o==="shift"?this.useNitro():(o==="escape"||o==="p")&&this.o.onPause?.()},e.addEventListener("touchstart",this.onTS,{passive:!0}),e.addEventListener("touchmove",this.onTM,{passive:!1}),e.addEventListener("touchend",this.onTE),e.addEventListener("mousedown",this.onTS),e.addEventListener("mousemove",this.onTM),e.addEventListener("mouseup",this.onTE),addEventListener("keydown",this.onKey),this.onNitroBtn=a=>{a.stopPropagation(),a.preventDefault(),this.useNitro()},Mt("nitro-btn").addEventListener("pointerdown",this.onNitroBtn)}unbindInput(){let e=Mt("touch");e.removeEventListener("touchstart",this.onTS),e.removeEventListener("touchmove",this.onTM),e.removeEventListener("touchend",this.onTE),e.removeEventListener("mousedown",this.onTS),e.removeEventListener("mousemove",this.onTM),e.removeEventListener("mouseup",this.onTE),removeEventListener("keydown",this.onKey),Mt("nitro-btn").removeEventListener("pointerdown",this.onNitroBtn)}steer(e){if(this.state!=="run")return;let t=Math.max(0,Math.min(2,this.lane+e));t!==this.lane&&(this.prevLane=this.lane,this.lane=t,this.speed>20&&Math.random()<.6&&ct.tires())}jump(){this.state!=="run"||this.y>.05||this.onRamp||(this.vy=9.5,ct.jump())}useNitro(){this.state!=="run"||this.nitro<1||this.nitroT>0||(this.nitroT=2.6+this.stats.nitro*.35,this.nitroDur=this.nitroT,ct.nitro(),this.flash("#4fc3f7"))}hudInit(){Mt("hud").classList.remove("hidden"),Mt("touch").classList.remove("hidden"),Mt("hud-level").textContent=this.mp?"Birlikte Yar\u0131\u015F":`B\xF6l\xFCm ${this.level.n}`,Mt("hud-hearts").classList.toggle("hidden",this.mp),Mt("countdown").textContent="",this.hudMarkers(),this.hudT=0,Mt("hud-pause").classList.toggle("hidden",this.mp)}hudMarkers(){let e=Mt("hud-markers");e.innerHTML="";for(let n of this.remotes.values()){let s=document.createElement("div");s.className="marker",s.style.background=n.color,s.title=n.name,s.id="mk-"+n.id,e.appendChild(s)}let t=document.createElement("div");t.className="marker me",t.id="mk-me",t.style.background=this.o.color,e.appendChild(t)}hud(e){if(this.hudT-=e,this.hudT>0)return;this.hudT=.08,Mt("hud-stars").textContent=this.starsGot,Mt("hud-diamonds").textContent=this.diamondsGot,Mt("hud-speed").textContent=Math.round(this.speed*3.6),Mt("hud-hearts").textContent="\u2764\uFE0F".repeat(this.hearts)+"\u{1F5A4}".repeat(Math.max(0,this.maxHearts-this.hearts));let t=Math.min(1,this.dist/this.level.length);Mt("hud-bar").style.width=t*100+"%",Mt("mk-me").style.left=t*100+"%";for(let r of this.remotes.values()){let a=Mt("mk-"+r.id);a&&(a.style.left=Math.min(100,r.rd/this.level.length*100)+"%")}let n=Mt("nitro-btn");n.style.setProperty("--fill",(this.nitroT>0?this.nitroT/this.nitroDur:Math.min(1,this.nitro))*100+"%"),n.classList.toggle("ready",this.nitro>=1&&this.nitroT<=0),n.classList.toggle("active",this.nitroT>0);let s="";this.magnetT>0&&(s+=`<span>\u{1F9F2} ${Math.ceil(this.magnetT)}</span>`),this.shieldT>0&&(s+=`<span>\u{1F6E1}\uFE0F ${Math.ceil(this.shieldT)}</span>`),Mt("hud-power").innerHTML=s}flash(e){let t=Mt("flash");t.style.background=e,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}popText(e){let t=Mt("pop");t.textContent=e,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}update(e){e=Math.min(e,.05),this.time+=e;let t=this.stats;if(this.state==="countdown"){this.cd-=e;let f=Math.ceil(this.cd);f!==this.lastBeep&&f>=0&&(this.lastBeep=f,f>0?(Mt("countdown").textContent=f,ct.beep(!1)):(Mt("countdown").textContent="BA\u015ELA!",ct.beep(!0))),this.cd<=0&&(this.state="run",setTimeout(()=>{Mt("countdown").textContent==="BA\u015ELA!"&&(Mt("countdown").textContent="")},700))}let n=this.state==="run";n&&(this.runT=(this.runT||0)+e);let s=this.dist/this.level.length,r=this.level.speed+(t.speed-1)*1.1+s*5;this.nitroT>0&&(r*=1.5),n||(r=this.state==="finish"?8:(this.state==="crashed",0));let a=this.speed<r?this.state==="run"?.9+t.speed*.05:2:2.5;this.speed+=(r-this.speed)*Math.min(1,e*a),this.state==="crashed"&&(this.speed*=Math.pow(.02,e)),this.dist+=this.speed*e;let o=ji.lanes[this.lane],l=7+t.handling*.9,c=this.x;this.x+=(o-this.x)*(1-Math.exp(-l*e));let h=(this.x-c)/Math.max(e,1e-4);this.verticalUpdate(e),this.nitroT>0&&(this.nitroT-=e,this.nitro=Math.max(0,this.nitroT/this.nitroDur),this.nitroT<=0&&(this.nitro=0)),this.magnetT>0&&(this.magnetT-=e),this.shieldT>0&&(this.shieldT-=e),this.invT>0&&(this.invT-=e),this.track.update(this.dist,e,this.time),n&&this.collide(),n&&this.dist>=this.level.length&&this.finish(),(this.state==="finish"||this.state==="crashed")&&(this.endT+=e,this.endT>2.2&&!this.ended&&(this.ended=!0,this.o.onEnd?.(this.result())));let d=this.car;d.position.set(this.x,this.y,-this.dist),this.roll=Sn.lerp(this.roll||0,h*.012,.2);let u=this.onRamp?.18:this.y>.05?Sn.clamp(this.vy*.015,-.12,.12):Math.sin(this.time*30)*.002*this.speed/30;d.rotation.set(u,-h*.035,this.roll),Eo(d,this.dist),th(d,this.time),d.visible=!(this.invT>0&&Math.floor(this.time*12)%2===0);for(let f of this.flames)f.visible=this.nitroT>0,f.scale.set(1,.8+Math.random()*.5,1);this.bubble.visible=this.shieldT>0,this.bubble.material.opacity=.18+Math.sin(this.time*8)*.05,this.blob.position.set(this.x,.02,-this.dist),this.blob.material.opacity=.85/(1+this.y*.6);for(let f of this.remotes.values()){if(!f.has)continue;f.finished||(f.d+=f.s*e),f.rd+=(f.d-f.rd)*Math.min(1,e*6),f.rx+=(f.x-f.rx)*Math.min(1,e*10);let p=f.rd-this.dist;f.car.visible=p>-30&&p<300,f.car.userData.label.visible=p>4,f.car.position.set(f.rx,f.y||0,-f.rd),Eo(f.car,f.rd)}this.mp&&(this.sendT-=e)<=0&&(this.sendT=.1,this.o.net.send({t:"state",d:+this.dist.toFixed(2),x:+this.x.toFixed(2),y:+this.y.toFixed(2),s:+this.speed.toFixed(2)})),this.updateCamera(e),this.updateWind(e),this.world.update(-this.dist,this.camera,e),gg(this.speed,this.nitroT>0),this.hud(e)}verticalUpdate(e){if(!this.onRamp&&this.y<.3){for(let t of this.track.active)if(t.kind==="ramp"&&Math.abs(this.x-t.x)<1.6&&this.dist>=t.z&&this.dist<t.z+t.len){this.onRamp=t,this.vy=0;break}}if(this.onRamp){let t=this.onRamp;if(this.dist>=t.z+t.len||Math.abs(this.x-t.x)>1.9)this.onRamp=null,this.vy=11+this.speed*.02,this.y=t.h,ct.jump(),this.popText("U\xC7U\u015E! \u2708\uFE0F");else{this.y=(this.dist-t.z)/t.len*t.h;return}}(this.y>0||this.vy>0)&&(this.vy-=zM*e,this.y+=this.vy*e,this.y<=0&&(this.vy<-8&&(ct.land(),this.shake=.25),this.y=0,this.vy=0))}collide(){let e=this.dist,t=this.magnetT>0?30+this.stats.magnet*2:0;for(let n of this.track.active){if(!n.alive)continue;let s=n.z-e;if(n.kind==="star"||n.kind==="diamond"||n.kind==="magnet"||n.kind==="nitro"||n.kind==="shield"){t&&(n.kind==="star"||n.kind==="diamond")&&s<t&&s>-3&&(n.magnet={x:this.x,y:this.y},n.z+=(e-n.z)*Math.min(1,.016*14));let r=n.obj?n.obj.position.y:n.y||1;Math.abs(s)<this.halfL+.6&&Math.abs((n.obj?n.obj.position.x:n.x)-this.x)<this.halfW+.6&&Math.abs(r-(this.y+.9))<1.6&&this.collect(n);continue}(n.kind==="obst"||n.kind==="traffic")&&Math.abs(s)<n.hl+this.halfL*.85&&Math.abs(n.x-this.x)<n.hw+this.halfW*.8&&this.y<n.h-.05&&this.hit(n,s)}}collect(e){switch(e.alive=!1,e.collectT=.001,e.kind){case"star":this.starsGot++,this.nitro=Math.min(1,this.nitro+(this.nitroT>0?0:.03)),ct.star();break;case"diamond":this.diamondsGot++,ct.diamond(),this.popText("+1 \u{1F48E}");break;case"magnet":this.magnetT=6+this.stats.magnet*1.2,ct.power(),this.popText("MIKNATIS \u{1F9F2}");break;case"nitro":this.nitro=1,ct.power(),this.popText("N\u0130TRO HAZIR \u{1F525}");break;case"shield":this.shieldT=12,ct.power(),this.popText("KALKAN \u{1F6E1}\uFE0F");break}}knock(e,t){e.alive=!1,e.fly={vx:(Math.random()-.5)*10+t*6,vy:8+Math.random()*4,vz:this.speed*.9+10,rx:(Math.random()-.5)*10,rz:(Math.random()-.5)*10,t:0}}hit(e,t){if(this.nitroT>0||this.shieldT>0){this.knock(e,Math.sign(e.x-this.x)||1),ct.bump(),this.shake=.35,this.nitroT<=0&&(this.shieldT=0,this.popText("KALKAN KIRILDI!"),this.invT=1);return}if(this.invT>0)return;if(Math.abs(t)>(e.hl+this.halfL)*.45&&this.prevLane!==this.lane){this.lane=this.prevLane,this.speed*=.85,ct.bump(),this.shake=.3,this.flash("rgba(255,180,0,0.35)"),this.invT=.4;return}if(this.crashes++,ct.crash(),this.shake=.7,this.flash("rgba(255,40,40,0.55)"),this.knock(e,Math.sign(e.x-this.x)||1),this.mp){this.speed*=.25,this.invT=1.6,this.popText("\xC7ARPI\u015EMA! \u{1F4A5}");return}this.hearts--,this.hearts<=0?(this.state="crashed",this.endT=0,this.vy=6,this.y=Math.max(this.y,.01),zd(),ct.lose(),this.popText("KAZA! \u{1F4A5}")):(this.speed*=.3,this.invT=2,this.popText(`${this.hearts} can kald\u0131`))}finish(){this.state="finish",this.endT=0,this.finishTime=this.runT||0,ct.win(),this.popText("B\u0130T\u0130\u015E! \u{1F3C1}"),this.mp&&this.o.net.send({t:"finish",time:+this.finishTime.toFixed(2),stars:this.starsGot})}result(){let e=this.track.totalStars?this.starsGot/this.track.totalStars:1,t=this.state==="finish",n=t?e>=.7&&this.crashes===0?3:e>=.4?2:1:0;return{success:t,rating:n,stars:this.starsGot,diamonds:this.diamondsGot,total:this.track.totalStars,crashes:this.crashes,time:this.finishTime||this.time,dist:this.dist}}updateCamera(e){let t=this.camera,n=this.engine.aspect<1,s=this.nitroT>0?1:0,r=n?8.8:7.6,a=n?4.4:3.5,o=(n?74:60)+s*12+Math.min(8,this.speed*.15);t.fov+=(o-t.fov)*Math.min(1,e*3),t.aspect=this.engine.aspect,t.updateProjectionMatrix();let l=new I(this.x*.75,a+this.y*.6,-this.dist+r-s*1.2);if(this.state==="countdown"&&l.add(new I(Math.sin(this.cd)*3*Math.max(0,this.cd-.5)/3,Math.max(0,this.cd-.5)*.6,0)),this.camPos.lerp(l,Math.min(1,e*8)),this.camPos.z=l.z,t.position.copy(this.camPos),this.shake>0){this.shake-=e;let c=this.shake*.4;t.position.x+=(Math.random()-.5)*c,t.position.y+=(Math.random()-.5)*c}this.camLook.set(this.x*.85,1+this.y*.5,-this.dist-9),t.lookAt(this.camLook)}updateWind(e){let t=this.nitroT>0?.55:Math.max(0,(this.speed-30)/30)*.3;if(this.wind.material.opacity+=(t-this.wind.material.opacity)*Math.min(1,e*4),this.wind.material.opacity<.01){this.wind.visible=!1;return}this.wind.visible=!0;let n=this.windGeo.attributes.position.array,s=-this.dist;this.windP.forEach((r,a)=>{r.z+=this.speed*e*1.2,r.z>8&&Object.assign(r,this.newWind(!1));let o=r.l*(1+this.speed/20);n.set([this.x+r.x,r.y,s+r.z,this.x+r.x,r.y,s+r.z-o],a*6)}),this.windGeo.attributes.position.needsUpdate=!0}render(e){this.engine.render(this.scene,this.camera,e)}dispose(){this.unbindInput(),zd(),this.track.dispose(),this.world.dispose(),Mt("hud").classList.add("hidden"),Mt("touch").classList.add("hidden"),Mt("countdown").textContent=""}};var Yi=[{id:"hatch",name:"K\xF6y Ka\u015Fifi",type:"hatchback",price:{stars:0},base:{speed:1,handling:2,nitro:1,magnet:1,armor:1},colors:["#d32f2f","#1e88e5","#fdd835","#f5f5f5","orig"]},{id:"sport",name:"\u015Eim\u015Fek GT",type:"1990s-sports-car",price:{stars:600},base:{speed:3,handling:3,nitro:2,magnet:1,armor:1},colors:["#ff6d00","#c62828","#212121","#ffd600","orig"]},{id:"offroad",name:"Da\u011F Kurdu",type:"1990s-off-roader",price:{stars:1400},base:{speed:2,handling:1,nitro:2,magnet:2,armor:3},colors:["#2e7d32","#37474f","#c62828","#eceff1","orig"]},{id:"pickup",name:"Tarla Pikab\u0131",type:"1990s-pickup-truck",price:{stars:2200},base:{speed:2,handling:2,nitro:1,magnet:3,armor:3},colors:["#b71c1c","#455a64","#f9a825","#1b5e20","orig"]},{id:"police",name:"Polis Arabas\u0131",type:"police-car",price:{stars:3200},base:{speed:3,handling:3,nitro:3,magnet:2,armor:2},colors:["orig"]},{id:"muscle",name:"Kas Kral",type:"muscle-car",price:{diamonds:40},base:{speed:4,handling:2,nitro:3,magnet:1,armor:2},colors:["#1a237e","#212121","#b71c1c","#4a148c","orig"]},{id:"rally",name:"Ralli Roket",type:"rally-car",price:{diamonds:60},base:{speed:4,handling:5,nitro:3,magnet:2,armor:1},colors:["#e53935","#76ff03","#ffffff","#ff4081","orig"]},{id:"monster",name:"Canavar Kamyon",type:"monster-truck",price:{diamonds:80},base:{speed:3,handling:2,nitro:3,magnet:3,armor:5},colors:["#43a047","#e53935","#ff9800","#212121","orig"]},{id:"fire",name:"\u0130tfaiye",type:"fire-truck",price:{diamonds:100},base:{speed:3,handling:2,nitro:4,magnet:4,armor:5},colors:["orig"]},{id:"concept",name:"Konsept X (Ultra)",type:"concept",price:{diamonds:150},base:{speed:5,handling:5,nitro:5,magnet:3,armor:3},colors:["#a80000","#e8e8ec","#2b2d33","#0d47a1","#ff6d00"]}],Hd=[{id:"speed",name:"Motor",icon:"\u26A1",desc:"Daha y\xFCksek azami h\u0131z"},{id:"handling",name:"Yol Tutu\u015F",icon:"\u{1F6DE}",desc:"\u015Eeritler aras\u0131 daha h\u0131zl\u0131 ge\xE7i\u015F"},{id:"nitro",name:"Nitro",icon:"\u{1F525}",desc:"Daha uzun ve g\xFC\xE7l\xFC nitro"},{id:"magnet",name:"M\u0131knat\u0131s",icon:"\u{1F9F2}",desc:"M\u0131knat\u0131s s\xFCresi ve menzili"},{id:"armor",name:"Z\u0131rh",icon:"\u{1F6E1}\uFE0F",desc:"Ekstra can (kalp)"}],uh=6;function bg(i){let e=Math.round(120*Math.pow(i+1,1.7)/10)*10,t=i>=4?(i-2)*4:0;return{stars:e,diamonds:t}}function xg(i,e){let t={};for(let n of Hd)t[n.id]=i.base[n.id]+(e?.[n.id]||0);return t}var Co=[{id:"village",name:"Ye\u015Fil K\xF6y",theme:"village",color:"#7cb342"},{id:"forest",name:"\xC7am Orman\u0131",theme:"forest",color:"#2e7d32"},{id:"desert",name:"K\u0131zg\u0131n \xC7\xF6l",theme:"desert",color:"#e0a64b"},{id:"snow",name:"Karl\u0131 Da\u011F",theme:"snow",color:"#cfe3f2"},{id:"city",name:"Gece \u015Eehri",theme:"city",color:"#3949ab"}],Ro=4,zn=[];Co.forEach((i,e)=>{for(let t=0;t<Ro;t++){let n=e*Ro+t+1;zn.push({n,region:i.id,theme:i.theme,regionName:i.name,length:900+n*110,speed:24+n*.55,density:.45+n*.025,traffic:Math.min(.55,.15+n*.02),reward:60+n*15,seed:1e3+n*7919})}});var Gd=[["#d32f2f","K\u0131rm\u0131z\u0131"],["#b71c1c","Bordo"],["#ff1744","Ate\u015F"],["#ff6d00","Turuncu"],["#ffab00","Kehribar"],["#ffd600","Sar\u0131"],["#c6ff00","Limon"],["#43a047","Ye\u015Fil"],["#1b5e20","Orman"],["#00bfa5","Turkuaz"],["#00b8d4","Camg\xF6be\u011Fi"],["#40c4ff","G\xF6k"],["#1e88e5","Mavi"],["#0d47a1","Lacivert"],["#304ffe","Elektrik"],["#7c4dff","Mor"],["#4a148c","Patl\u0131can"],["#f50057","Pembe"],["#ff80ab","\u015Eeker Pembe"],["#8d6e63","Kahve"],["#fafafa","Beyaz"],["#b0bec5","G\xFCm\xFC\u015F"],["#546e7a","Antrasit"],["#121212","Siyah"]].map(([i,e])=>({id:i,name:e})),_g=[{id:"gloss",name:"Parlak",price:0},{id:"metal",name:"Metalik",price:0},{id:"matte",name:"Mat",price:200},{id:"pearl",name:"Sedef",price:400},{id:"candy",name:"\u015Eeker Cila",price:600},{id:"chrome",name:"Krom",price:900}],vg=[{id:"orig",name:"Orijinal",price:0},{id:"#e0e0e0",name:"G\xFCm\xFC\u015F",price:100},{id:"#1a1a1a",name:"Siyah",price:120},{id:"#d4af37",name:"Alt\u0131n",price:300},{id:"#e53935",name:"K\u0131rm\u0131z\u0131",price:150},{id:"#1e88e5",name:"Mavi",price:150},{id:"#76ff03",name:"Neon Ye\u015Fil",price:200},{id:"#ff4081",name:"Pembe",price:150},{id:"#ff9100",name:"Turuncu",price:150}],yg=[{id:"none",name:"Yok",price:0,icon:"\u2014"},{id:"lip",name:"Dudak",price:100,icon:"\u2581"},{id:"duck",name:"\xD6rdek Kuyruk",price:200,icon:"\u25E2"},{id:"gt",name:"GT Kanat",price:350,icon:"\u2564"},{id:"big",name:"Dev Kanat",price:600,icon:"\u2566"}],Mg=[{id:"none",name:"Kapal\u0131",price:0},{id:"#00e5ff",name:"Buz Mavisi",price:250},{id:"#ff00e5",name:"Pembe",price:250},{id:"#00ff6a",name:"Ye\u015Fil",price:250},{id:"#8a2bff",name:"Mor",price:250},{id:"#ff7a00",name:"Turuncu",price:250},{id:"#ff1a1a",name:"K\u0131rm\u0131z\u0131",price:250},{id:"rainbow",name:"G\xF6kku\u015Fa\u011F\u0131",price:500}],Sg=[{id:"none",name:"Yok",price:0,icon:"\u2014"},{id:"stripes",name:"Yar\u0131\u015F \u015Eeridi",price:150,icon:"\u2551"},{id:"flames",name:"Alev",price:300,icon:"\u{1F525}"},{id:"number",name:"Yar\u0131\u015F No",price:120,icon:"7"},{id:"stars",name:"Y\u0131ld\u0131zlar",price:200,icon:"\u2B50"},{id:"bolt",name:"\u015Eim\u015Fek",price:250,icon:"\u26A1"}],Tg=[{id:"none",name:"\u015Eeffaf",price:0},{id:"light",name:"A\xE7\u0131k Film",price:80},{id:"dark",name:"Koyu Film",price:120},{id:"black",name:"Limuzin",price:160}];function Eg(i){return{paint:i.colors[0],finish:"gloss",rim:"orig",spoiler:"none",neon:"none",decal:"none",tint:"none"}}var bs=150,er=140;function Ag(i,e,t){i.innerHTML="";let n=Math.min(i.clientWidth||innerWidth,760),s=er*2+(zn.length-1)*bs,r=document.createElement("div");r.className="map-inner",r.style.width=n+"px",r.style.height=s+"px";let a=document.createElement("canvas"),o=Math.min(2,devicePixelRatio||1);a.width=n*o,a.height=s*o,a.style.width=n+"px",a.style.height=s+"px",r.appendChild(a),i.appendChild(r);let l=a.getContext("2d");l.scale(o,o);let c=xn(42),h=zn.map((m,g)=>({x:n/2+Math.sin(g*1.15)*n*.28,y:s-er-g*bs,l:m})),d=m=>[s-er-m*Ro*bs+bs*.6+(m===0?er:0),s-er-((m+1)*Ro-1)*bs-bs*.5-(m===Co.length-1?er:0)],u={village:["#8bc34a","#7cb342"],forest:["#2e7d32","#3d8b40"],desert:["#f2c879","#e6b45c"],snow:["#e8f1f8","#d3e3f0"],city:["#1f2a4d","#2c3a66"]};Co.forEach((m,g)=>{let[_,M]=d(g),v=l.createLinearGradient(0,M,0,_);v.addColorStop(0,u[m.theme][0]),v.addColorStop(1,u[m.theme][1]),l.fillStyle=v,l.fillRect(0,M,n,_-M);let S=l.createLinearGradient(0,M-30,0,M+30);S.addColorStop(0,"rgba(0,0,0,0)"),S.addColorStop(.5,"rgba(255,255,255,0.12)"),S.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=S,l.fillRect(0,M-30,n,60);for(let T=0;T<46;T++){let b=c()*n,y=M+20+c()*(_-M-40);h.some(C=>Math.hypot(C.x-b,C.y-y)<70)||HM(l,m.theme,b,y,.7+c()*.6,c)}}),l.strokeStyle="rgba(66,165,245,0.85)",l.lineWidth=22,l.lineCap="round",l.beginPath();let[,f]=d(1);for(let m=s;m>f;m-=20){let g=n*.12+Math.sin(m*.01)*30;m===s?l.moveTo(g,m):l.lineTo(g,m)}l.stroke(),l.strokeStyle="rgba(255,255,255,0.35)",l.lineWidth=3,l.stroke();let p=()=>{l.beginPath(),l.moveTo(h[0].x,h[0].y+er),l.lineTo(h[0].x,h[0].y);for(let m=1;m<h.length;m++){let g=h[m-1],_=h[m];l.bezierCurveTo(g.x,g.y-bs*.55,_.x,_.y+bs*.55,_.x,_.y)}};l.lineCap="round",l.lineJoin="round",p(),l.strokeStyle="rgba(0,0,0,0.25)",l.lineWidth=34,l.stroke(),p(),l.strokeStyle="#e9e2d0",l.lineWidth=30,l.stroke(),p(),l.strokeStyle="#4a4d52",l.lineWidth=24,l.stroke(),p(),l.setLineDash([10,12]),l.strokeStyle="#ffd54f",l.lineWidth=2.5,l.stroke(),l.setLineDash([]),Co.forEach((m,g)=>{let[,_]=d(g),M=_+34;l.font="bold 20px system-ui, sans-serif";let v=l.measureText(m.name).width+36;l.fillStyle="rgba(0,0,0,0.45)",l.beginPath(),l.roundRect(n-v-14,M-18,v,36,18),l.fill(),l.fillStyle="#fff",l.textAlign="center",l.textBaseline="middle",l.fillText(m.name,n-v/2-14,M+1)});let x=null;if(h.forEach(m=>{let g=m.l,_=g.n<=e.unlocked,M=e.levels[g.n]||0,v=document.createElement("button");v.className="node"+(_?"":" locked")+(g.n===e.unlocked?" current":""),v.style.left=m.x+"px",v.style.top=m.y+"px",v.innerHTML=`<span class="num">${_?g.n:"\u{1F512}"}</span><span class="nstars">${[1,2,3].map(S=>`<i class="${S<=M?"on":""}">\u2605</i>`).join("")}</span>`,_&&(v.onclick=()=>t(g)),r.appendChild(v),g.n===Math.min(e.unlocked,zn.length)&&(x=m)}),x){let m=document.createElement("div");m.className="map-car",m.textContent="\u{1F697}",m.style.left=x.x+"px",m.style.top=x.y-52+"px",r.appendChild(m),requestAnimationFrame(()=>{i.scrollTop=x.y-i.clientHeight*.6})}}function HM(i,e,t,n,s,r){i.save(),i.translate(t,n),i.scale(s,s);let a=()=>{i.fillStyle="rgba(0,0,0,0.18)",i.beginPath(),i.ellipse(4,4,16,6,0,0,7),i.fill()},o=r();if(e==="village")if(o<.3)a(),i.fillStyle=["#fff3e0","#ffe0b2","#f5f5f5"][Math.floor(r()*3)],i.fillRect(-14,-14,28,18),i.fillStyle="#c62828",i.beginPath(),i.moveTo(-18,-14),i.lineTo(0,-30),i.lineTo(18,-14),i.fill(),i.fillStyle="#5d4037",i.fillRect(-3,-6,6,10),i.fillStyle="#4fc3f7",i.fillRect(-11,-10,5,5),i.fillRect(6,-10,5,5);else if(o<.45){i.fillStyle="#c0ca33",i.fillRect(-26,-12,52,24),i.strokeStyle="#9e9d24",i.lineWidth=2;for(let l=-22;l<26;l+=7)i.beginPath(),i.moveTo(l,-12),i.lineTo(l,12),i.stroke()}else o<.52?(i.fillStyle="#fff",i.beginPath(),i.ellipse(0,0,9,6,0,0,7),i.fill(),i.fillStyle="#222",i.beginPath(),i.arc(-2,-1,2.5,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(9,-3,3.5,0,7),i.fill()):GM(i,"#388e3c","#66bb6a");else if(e==="forest")wg(i,o<.5?"#1b5e20":"#2e7d32");else if(e==="desert")o<.5?(i.fillStyle="#558b2f",i.fillRect(-3,-24,6,24),i.fillRect(-11,-16,5,10),i.fillRect(6,-20,5,10),i.fillRect(-11,-10,8,4),i.fillRect(3,-13,8,4)):(i.fillStyle="#d7a35a",i.beginPath(),i.ellipse(0,0,26,9,0,Math.PI,0),i.fill());else if(e==="snow")o<.4?(i.fillStyle="#90a4ae",i.beginPath(),i.moveTo(-30,8),i.lineTo(0,-36),i.lineTo(30,8),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(-10,-21),i.lineTo(0,-36),i.lineTo(10,-21),i.lineTo(4,-24),i.lineTo(-3,-20),i.fill()):(wg(i,"#2e5d3a"),i.fillStyle="#fff",i.beginPath(),i.moveTo(-6,-22),i.lineTo(0,-32),i.lineTo(6,-22),i.fill());else if(e==="city"){let l=14+r()*14,c=26+r()*40;i.fillStyle="#0d1430",i.fillRect(-l/2,-c,l,c),i.fillStyle="#ffd54f";for(let h=-c+4;h<-4;h+=7)for(let d=-l/2+3;d<l/2-3;d+=6)r()<.5&&i.fillRect(d,h,3,3)}i.restore()}function GM(i,e,t){i.fillStyle="rgba(0,0,0,0.18)",i.beginPath(),i.ellipse(4,4,12,5,0,0,7),i.fill(),i.fillStyle="#6d4c41",i.fillRect(-2,-8,4,10),i.fillStyle=e,i.beginPath(),i.arc(0,-14,11,0,7),i.fill(),i.fillStyle=t,i.beginPath(),i.arc(-3,-17,6,0,7),i.fill()}function wg(i,e){i.fillStyle="rgba(0,0,0,0.2)",i.beginPath(),i.ellipse(4,4,10,4,0,0,7),i.fill(),i.fillStyle="#5d4037",i.fillRect(-2,-4,4,7),i.fillStyle=e;for(let t=0;t<3;t++)i.beginPath(),i.moveTo(-12+t*3,-4-t*9),i.lineTo(0,-20-t*9),i.lineTo(12-t*3,-4-t*9),i.fill()}var dh=class{constructor(){this.handlers={},this.impl=null,this.queue=[]}get id(){return this.impl?.id??null}get mode(){return this.impl?.mode||null}connect(){this.impl||(this.impl=window.TURBO_NET==="peer"?new Xd(this):window.TURBO_NET==="room"||window.claude&&typeof window.claude.use=="function"?new qd(this):window.TURBO_NET==="none"?new Vd(this):new Wd(this)),this.impl.connect()}get connected(){return!!this.impl?.connected}send(e){this.impl?this.impl.send(e):this.queue.push(e)}on(e,t){var n;((n=this.handlers)[e]||(n[e]=[])).push(t)}emit(e,t){for(let n of this.handlers[e]||[])n(t)}},Vd=class{constructor(e){this.net=e,this.mode="none",this.id=null,this.connected=!1}connect(){this.net.emit("close"),this.net.emit("error",{msg:"Birlikte oynamak i\xE7in oyunu bilgisayardan (npm start) ya da claude.ai ba\u011Flant\u0131s\u0131ndan a\xE7."})}send(){}},Wd=class{constructor(e){this.net=e,this.mode="ws",this.ws=null,this.queue=[],this.id=null}connect(){if(this.ws&&this.ws.readyState<=1)return;let e=location.protocol==="https:"?"wss":"ws";this.ws=new WebSocket(`${e}://${location.host}/ws`),this.ws.onopen=()=>{for(let t of this.queue)this.ws.send(JSON.stringify(t));this.queue=[],this.net.emit("open")},this.ws.onmessage=t=>{let n;try{n=JSON.parse(t.data)}catch{return}n.t==="welcome"&&(this.id=n.id),this.net.emit(n.t,n)},this.ws.onclose=()=>this.net.emit("close"),this.ws.onerror=()=>this.net.emit("neterror")}get connected(){return this.ws&&this.ws.readyState===1}send(e){this.connected?this.ws.send(JSON.stringify(e)):this.queue.push(e)}},fh="ABCDEFGHJKLMNPRSTUVYZ",qd=class{constructor(e){this.net=e,this.mode="room",this.lobby=null,this.game=null,this.id=null,this.connected=!1,this.profile={name:"Oyuncu",car:"hatch",color:"orig"},this.level=1,this.code=null,this.epoch=0,this.results=[],this.ended=0,this.endTimer=null,this.pending=[],this.starting=!1}async connect(){if(this.starting)return;this.starting=!0;let e=window.claude?.use?await window.claude.use("room").catch(()=>null):null;if(!e){this.net.emit("close"),this.net.emit("error",{msg:"Birlikte oynama bu g\xF6r\xFCn\xFCmde kullan\u0131lam\u0131yor (giri\u015F yapm\u0131\u015F olmal\u0131s\u0131n)."}),this.starting=!1;return}this.lobby=e,e.onConnection(t=>{this.connected=t,this.net.emit(t?"open":"close")},()=>{this.connected=!1,this.net.emit("close")}),e.onPeers(t=>{let n=t.peers.find(s=>s.sameTab);n&&!this.id&&(this.id=n.peer,this.net.emit("welcome",{id:this.id})),this.pushRooms()});for(let t of this.net.queue.splice(0))this.send(t)}pushRooms(){if(!this.lobby)return;let e=this.lobby.peers().filter(t=>!t.sameTab&&t.presence?.game?.open).map(t=>({code:String(t.presence.game.code),host:String(t.presence.game.host||"?"),count:Number(t.presence.game.count)||1,level:Number(t.presence.game.level)||1}));this.net.emit("rooms",{t:"rooms",list:e})}advertise(e){if(!this.lobby)return;let t=this.game?this.game.peers().length:1;this.lobby.presence({game:e&&this.code?{code:this.code,host:this.profile.name,level:this.level,count:t,open:!0}:null}).catch(()=>{})}players(){return(this.game?.peers()||[]).filter(e=>e.presence&&e.presence.name).map(e=>({id:e.peer,name:String(e.presence.name).slice(0,16),car:String(e.presence.car||"hatch"),color:String(e.presence.color||"orig")}))}hostId(){let e=this.game?.peers()||[],t=e.find(s=>s.presence?.host===!0);return t?t.peer:e.map(s=>s.peer).sort()[0]||null}roomMsg(){return{t:"room",code:this.code,hostId:this.hostId(),level:this.level,state:this.racing?"race":"lobby",players:this.players()}}async joinGame(e,t){if(!this.lobby){this.net.queue.push({t:t?"create":"join",code:e});return}await this.leaveGame();let n;try{n=await this.lobby.join("g-"+e.toLowerCase())}catch{this.net.emit("error",{t:"error",msg:"Odaya ba\u011Flan\u0131lamad\u0131"});return}this.game=n,this.code=e,await n.presence({...this.profile,host:!!t,level:this.level}).catch(()=>{}),n.onPeers(s=>{let r=s.peers.find(a=>a.peer===this.hostId());r&&r.presence?.level&&(this.level=Number(r.presence.level)||this.level),this.hostId()===this.id&&!s.peers.find(a=>a.sameTab)?.presence?.host&&n.presence({host:!0}).catch(()=>{});for(let a of s.left)this.net.emit("left",{t:"left",id:a.peer});for(let a of[...s.updated,...s.joined]){if(a.sameTab)continue;let o=a.presence?.st;this.racing&&o&&o.e===this.epoch&&this.net.emit("state",{t:"state",id:a.peer,d:+o.d||0,x:+o.x||0,y:+o.y||0,s:+o.s||0})}this.checkResults(),this.net.emit("room",this.roomMsg()),this.hostId()===this.id&&this.advertise(!this.racing)}),n.on("start",s=>{if(s.peer!==this.hostId())return;let r=s.data||{},a=Number(r.epoch)||0;a<=this.epoch||(this.epoch=a,this.level=Number(r.level)||1,this.results=[],this.ended=0,this.racing=!0,clearTimeout(this.endTimer),n.presence({st:null,fin:null}).catch(()=>{}),this.net.emit("start",{t:"start",level:this.level,seed:Number(r.seed)||1,countdown:6e3,players:this.players()}),this.hostId()===this.id&&this.advertise(!1))}),t||setTimeout(()=>{this.game===n&&!n.peers().some(s=>s.presence?.host===!0&&!s.sameTab)&&(this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131"}),this.leaveGame(),this.net.emit("rooms",{t:"rooms",list:[]}),this.pushRooms())},2500),this.net.emit("room",this.roomMsg())}async leaveGame(){if(this.game){let e=this.game;this.game=null,this.code=null,this.racing=!1;try{await e.leave()}catch{}}this.advertise(!1)}checkResults(){if(!this.racing||!this.game)return;let e=this.game.peers(),t=e.filter(n=>n.presence?.fin&&n.presence.fin.e===this.epoch).map(n=>({id:n.peer,name:String(n.presence.name||"?").slice(0,16),time:+n.presence.fin.time||0,stars:+n.presence.fin.stars||0})).sort((n,s)=>n.time-s.time).map((n,s)=>({...n,place:s+1}));t.length!==this.results.length&&(this.results=t,this.net.emit("finish",{t:"finish",results:t}),t.length===1&&!this.endTimer&&(this.endTimer=setTimeout(()=>this.endRace(),45e3))),t.length&&t.length>=e.length&&this.endRace()}endRace(){!this.racing||this.ended===this.epoch||(this.ended=this.epoch,this.racing=!1,clearTimeout(this.endTimer),this.endTimer=null,this.net.emit("raceEnd",{t:"raceEnd",results:this.results}),this.net.emit("room",this.roomMsg()),this.hostId()===this.id&&this.advertise(!0))}send(e){if(!this.lobby){this.net.queue.push(e);return}let t=this.game;switch(e.t){case"profile":this.profile={name:String(e.name||"Oyuncu").slice(0,16),car:String(e.car||"hatch"),color:String(e.color||"orig")},t?.presence(this.profile).catch(()=>{});break;case"listRooms":this.pushRooms();break;case"create":{let n=Array.from({length:4},()=>fh[Math.floor(Math.random()*fh.length)]).join("");this.level=Number(e.level)||1,this.joinGame(n,!0).then(()=>this.advertise(!0));break}case"join":this.joinGame(String(e.code||"").toUpperCase(),!1);break;case"leave":this.leaveGame();break;case"setLevel":t&&this.hostId()===this.id&&(this.level=Number(e.level)||1,t.presence({level:this.level}).catch(()=>{}),this.advertise(!0),this.net.emit("room",this.roomMsg()));break;case"start":t&&this.hostId()===this.id&&t.emit("start",{level:this.level,seed:Math.floor(Math.random()*1e9),epoch:Date.now()}).catch(()=>this.net.emit("error",{t:"error",msg:"Ba\u015Flat\u0131lamad\u0131"}));break;case"state":t&&this.racing&&t.presence({st:{e:this.epoch,d:e.d,x:e.x,y:e.y,s:e.s}}).catch(()=>{});break;case"finish":t&&this.racing&&(t.presence({fin:{e:this.epoch,time:e.time,stars:e.stars}}).catch(()=>{}),setTimeout(()=>this.checkResults(),50));break}}},VM="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",Rg="turbokoy-oda-";function WM(i){return new Promise((e,t)=>{if(window.Peer)return e();let n=document.createElement("script");n.src=i,n.onload=e,n.onerror=t,document.head.appendChild(n)})}var Xd=class{constructor(e){this.net=e,this.mode="peer",this.id=null,this.connected=!1,this.peer=null,this.conn=null,this.host=null,this.profile={name:"Oyuncu",car:"hatch",color:"orig"}}async connect(){try{await WM(VM),this.connected=!0,this.net.emit("open"),this.net.emit("rooms",{t:"rooms",list:[]})}catch{this.net.emit("close"),this.net.emit("error",{t:"error",msg:"\u0130nternet ba\u011Flant\u0131s\u0131 gerekli"})}}makePeer(e){return new Promise((t,n)=>{let s=new window.Peer(e,{debug:0});s.on("open",r=>t(s)),s.on("error",r=>n(r))})}async create(e){this.close();let t=Array.from({length:4},()=>fh[Math.floor(Math.random()*fh.length)]).join(""),n;try{n=await this.makePeer(Rg+t.toLowerCase())}catch{return this.create(e)}this.peer=n,this.id=n.id,this.net.emit("welcome",{id:this.id});let s={id:this.id,...this.profile,conn:null};this.host={code:t,hostId:this.id,level:Number(e)||1,state:"lobby",results:[],players:new Map([[this.id,s]])},n.on("connection",r=>{r.on("data",a=>this.hostHandle(r.peer,a,r)),r.on("close",()=>this.hostLeave(r.peer)),r.on("error",()=>this.hostLeave(r.peer))}),n.on("disconnected",()=>{try{n.reconnect()}catch{}}),this.hostBroadcast(this.roomInfo())}async join(e){this.close();let t;try{t=await this.makePeer()}catch{this.net.emit("error",{t:"error",msg:"Ba\u011Flant\u0131 kurulamad\u0131"});return}this.peer=t,this.id=t.id,this.net.emit("welcome",{id:this.id});let n=t.connect(Rg+e.toLowerCase(),{reliable:!0}),s=setTimeout(()=>{n.open||(this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131 \u2013 kodu kontrol et"}),this.close())},8e3);t.on("error",r=>{String(r?.type)==="peer-unavailable"&&(clearTimeout(s),this.net.emit("error",{t:"error",msg:"Oda bulunamad\u0131 \u2013 kodu kontrol et"}),this.close())}),n.on("open",()=>{clearTimeout(s),this.conn=n,n.send({t:"hello",...this.profile})}),n.on("data",r=>{r&&typeof r.t=="string"&&this.net.emit(r.t,r)}),n.on("close",()=>{this.conn===n&&(this.conn=null,this.net.emit("error",{t:"error",msg:"Oda kapand\u0131"}),this.net.emit("room",null))})}close(){try{this.conn?.close()}catch{}try{this.peer?.destroy()}catch{}this.conn=null,this.peer=null,this.host=null}roomInfo(){let e=this.host;return{t:"room",code:e.code,hostId:e.hostId,level:e.level,state:e.state,players:[...e.players.values()].map(t=>({id:t.id,name:t.name,car:t.car,color:t.color}))}}hostBroadcast(e,t){let n=this.host;if(n){for(let s of n.players.values())if(s.id!==t)if(s.conn)try{s.conn.send(e)}catch{}else this.net.emit(e.t,e)}}hostLeave(e){let t=this.host;!t||!t.players.has(e)||(t.players.delete(e),this.hostBroadcast({t:"left",id:e}),this.hostBroadcast(this.roomInfo()),this.checkEnd())}hostHandle(e,t,n){let s=this.host;if(!s||!t||typeof t.t!="string")return;let r=(a,o)=>String(a??"").slice(0,o);switch(t.t){case"hello":case"profile":{if(!s.players.has(e)){if(s.state!=="lobby"){n?.send({t:"error",msg:"Yar\u0131\u015F s\xFCr\xFCyor, biraz bekle"});return}if(s.players.size>=6){n?.send({t:"error",msg:"Oda dolu"});return}}let a=s.players.get(e)||{id:e,conn:n};Object.assign(a,{name:r(t.name,16)||"Oyuncu",car:r(t.car,20)||"hatch",color:r(t.color,9)||"orig"}),s.players.set(e,a),this.hostBroadcast(this.roomInfo());break}case"setLevel":e===s.hostId&&s.state==="lobby"&&(s.level=Math.max(1,Number(t.level)||1),this.hostBroadcast(this.roomInfo()));break;case"start":e===s.hostId&&s.state==="lobby"&&(s.state="race",s.results=[],clearTimeout(s.timer),this.hostBroadcast({t:"start",level:s.level,seed:Math.floor(Math.random()*1e9),countdown:6e3,players:this.roomInfo().players}),s.timer=setTimeout(()=>this.endRace(),360*1e3));break;case"state":s.state==="race"&&this.hostBroadcast({t:"state",id:e,d:+t.d||0,x:+t.x||0,y:+t.y||0,s:+t.s||0},e);break;case"finish":if(s.state==="race"&&!s.results.some(a=>a.id===e)){let a=s.players.get(e);s.results.push({id:e,name:a?.name||"?",time:+t.time||0,stars:+t.stars||0,place:s.results.length+1}),this.hostBroadcast({t:"finish",results:s.results}),s.results.length===1&&(clearTimeout(s.timer),s.timer=setTimeout(()=>this.endRace(),45e3)),this.checkEnd()}break}}checkEnd(){let e=this.host;e&&e.state==="race"&&[...e.players.keys()].every(t=>e.results.some(n=>n.id===t))&&this.endRace()}endRace(){let e=this.host;!e||e.state!=="race"||(clearTimeout(e.timer),e.state="lobby",this.hostBroadcast({t:"raceEnd",results:e.results}),this.hostBroadcast(this.roomInfo()))}send(e){switch(e.t){case"profile":this.profile={name:String(e.name||"Oyuncu").slice(0,16),car:String(e.car||"hatch"),color:String(e.color||"orig")},this.host?this.hostHandle(this.id,e):this.conn?.send(e);break;case"listRooms":this.net.emit("rooms",{t:"rooms",list:[]});break;case"create":this.create(e.level);break;case"join":this.join(String(e.code||"").toUpperCase());break;case"leave":this.close();break;default:this.host?this.hostHandle(this.id,e):this.conn?.send(e)}}};var Ig="turbo-koy-save-v1",jd=()=>({name:"Oyuncu",stars:150,diamonds:5,car:"hatch",owned:{hatch:!0},colors:{},upgrades:{},levels:{},unlocked:1,quality:"auto",sound:!0,custom:{},items:{}}),Pt;try{Pt=Object.assign(jd(),JSON.parse(localStorage.getItem(Ig)||"{}"))}catch{Pt=jd()}for(let[i,e]of[["suv","offroad"],["race","rally"]])Pt.owned[i]&&(Pt.owned[e]=!0,delete Pt.owned[i]),Pt.upgrades[i]&&(Pt.upgrades[e]=Pt.upgrades[i],delete Pt.upgrades[i]),Pt.car===i&&(Pt.car=e),delete Pt.colors[i];Pt.custom||(Pt.custom={});Pt.items||(Pt.items={});var Cg,Pg;for(let[i,e]of Object.entries(Pt.colors||{}))(Pg=(Cg=Pt.custom)[i]||(Cg[i]={})).paint||(Pg.paint=e);var Ie=Pt;function _n(){try{localStorage.setItem(Ig,JSON.stringify(Pt))}catch{}}function Lg(){let i=jd();for(let e of Object.keys(Pt))delete Pt[e];Object.assign(Pt,i),_n()}var ae=i=>document.getElementById(i),Fg=new Vc(ae("gl"),Ie.quality),un=new nh(Fg);un.onLoading=i=>ae("car-loading").classList.toggle("hidden",!i);var bt=new dh,yi="home",Ot=null,Zd=!1,No=null,Lo=null,wn=null,Do=[],tr=0;kd(Ie.sound);function Zn(i){let e=ae("toast");e.textContent=i,e.classList.add("on"),clearTimeout(Zn.t),Zn.t=setTimeout(()=>e.classList.remove("on"),2200)}function $d(){ae("w-stars").textContent=Ie.stars,ae("w-dias").textContent=Ie.diamonds}var ra=i=>Yi.find(e=>e.id===i)||Yi[0],Fo=i=>({...Eg(i),...Ie.custom[i.id]||{}}),Qd=i=>Fo(i).paint,mh=i=>Ie.upgrades[i.id]||{};function Yd(i){let e=innerWidth,t=innerHeight,n=e>t;if(i==="garage"){let s=ae("car-zone").getBoundingClientRect();return s.width>50&&s.height>50?{x:s.left,y:s.top,w:s.width,h:s.height}:{x:0,y:t*.15,w:e,h:t*.4}}return i==="home"?n?{x:0,y:t*.25,w:e*.55,h:t*.7}:{x:0,y:t*.22,w:e,h:t*.34}:{x:0,y:t*.2,w:e,h:t*.6}}var Ug=i=>[1,2,3].map(e=>`<i class="${e<=i?"on":""}">\u2605</i>`).join(""),Dg=i=>[i.stars?`\u2605 ${i.stars}`:"",i.diamonds?`\u25C6 ${i.diamonds}`:""].filter(Boolean).join(" + "),ph=i=>Ie.stars>=(i.stars||0)&&Ie.diamonds>=(i.diamonds||0);function Jd(i){Ie.stars-=i.stars||0,Ie.diamonds-=i.diamonds||0,_n(),$d()}function oa(i){yi=i;for(let e of["home","map","garage","mp","settings"])ae(e).classList.toggle("hidden",e!==i);if(ae("wallet").classList.toggle("hidden",i==="race"),document.body.classList.toggle("menu-bg",i!=="race"&&i!=="map"),un.active=i==="garage"||i==="home",i==="home"||i==="mp"||i==="settings"){un.zone=Yd(i);let e=ra(Ie.car);un.setCar(e.type,Fo(e),mh(e)),un.resetView()}i==="map"&&Ag(ae("map-wrap"),Ie,JM),i==="garage"&&(tr=Yi.findIndex(e=>e.id===Ie.car),Ln={},en="up",Jn(),requestAnimationFrame(()=>{un.zone=Yd("garage")})),i==="mp"&&QM(),i==="settings"&&(ae("s-name").value=Ie.name,ae("s-quality").value=Ie.quality,ae("s-sound").checked=Ie.sound),$d()}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{Qs(),ct.click(),oa(i.dataset.go)}));var en="up",Ln={},qM=[["up","\u26A1 Y\xFCkselt"],["paint","\u{1F3A8} Boya"],["finish","\u2728 Kaplama"],["rim","\u{1F6DE} Jant"],["spoiler","\u{1FABD} Kanat"],["neon","\u{1F4A1} Neon"],["decal","\u{1F3F7}\uFE0F \xC7\u0131kartma"],["tint","\u{1F576}\uFE0F Cam"]],XM={finish:_g,rim:vg,spoiler:yg,neon:Mg,decal:Sg,tint:Tg},Og=(i,e)=>!e.price||!!Ie.items[i+":"+e.id];function jM(i){let e=Yi[tr],t={...Fo(e),...Ln};un.setCar(e.type,t,mh(e),i)}function Jn(i){let e=Yi[tr],t=!!Ie.owned[e.id],n=Fo(e),s={...n,...Ln};jM(i),ae("g-name").textContent=e.name,ae("g-lock").textContent=t?Ie.car===e.id?"\u2713 Kullan\u0131l\u0131yor":"Senin":"\u{1F512} Kilitli \u2013 \xF6nce sat\u0131n al";let r=ae("g-action");r.innerHTML="";let a=document.createElement("button");a.className="btn big",t?Ie.car===e.id?(a.textContent="\u2713 Bu arabayla yar\u0131\u015F\u0131yorsun",a.disabled=!0):(a.textContent="Bu arabay\u0131 se\xE7",a.classList.add("primary"),a.onclick=()=>{Ie.car=e.id,_n(),ct.buy(),Jn()}):(a.innerHTML=`Sat\u0131n al: ${Dg(e.price)}`,a.classList.add("primary"),a.disabled=!ph(e.price),a.onclick=()=>{ph(e.price)&&(Jd(e.price),Ie.owned[e.id]=!0,Ie.car=e.id,_n(),ct.buy(),Zn(`${e.name} senin! \u{1F389}`),Jn())}),r.appendChild(a);let o=ae("g-tabs");o.innerHTML="";for(let[h,d]of qM){let u=document.createElement("button");u.className="tab"+(en===h?" on":""),u.textContent=d,u.onclick=()=>{en=h,Ln={},ct.click(),un.focus(ta[h==="up"?"paint":h]),Jn()},o.appendChild(u)}let l=ae("g-body");l.innerHTML="";let c=e.colors.length===1&&e.colors[0]==="orig";if(en==="up"){let h=document.createElement("div");h.className="upgrades",l.appendChild(h);let d=mh(e);for(let u of Hd){let f=d[u.id]||0,p=e.base[u.id],x=document.createElement("div");x.className="upg";let m=Array.from({length:5+uh},(_,M)=>`<i class="${M<p?"b":M<p+f?"u":""}"></i>`).join("");x.innerHTML=`<div class="ico">${u.icon}</div><div><div class="nm">${u.name} <span class="muted small">Sv ${f}/${uh}</span></div><div class="ds">${u.desc}</div><div class="pips">${m}</div></div>`,x.onclick=()=>un.focus(ta[u.id]);let g=document.createElement("button");if(g.className="btn",!t)g.textContent="\u{1F512}",g.disabled=!0;else if(f>=uh)g.textContent="MAKS",g.disabled=!0;else{let _=bg(f);g.innerHTML=Dg(_),g.disabled=!ph(_),g.disabled||g.classList.add("primary"),g.onclick=M=>{var v,S;M.stopPropagation(),ph(_)&&(Jd(_),((v=Ie.upgrades)[S=e.id]||(v[S]={}))[u.id]=f+1,_n(),ct.buy(),Zn(`${u.name} seviye ${f+1}! Arabaya bak \u{1F440}`),un.focus(ta[u.id]),Jn(u.id))}}x.appendChild(g),h.appendChild(x)}}else if(en==="paint")if(c)l.innerHTML='<p class="note">Bu arac\u0131n boyas\u0131 \xF6zeldir \u{1F693}\u{1F692} \u2013 Kaplama, Jant, Neon ve di\u011Ferlerini deneyebilirsin!</p>';else{let h=document.createElement("div");h.className="swatches",l.appendChild(h);for(let d of[...Gd.map(u=>u.id),"orig"]){let u=document.createElement("div");u.className="swatch"+(s.paint===d?" on":""),u.title=d==="orig"?"Orijinal":Gd.find(f=>f.id===d).name,u.style.background=d==="orig"?"conic-gradient(#ff8a80, #ffd180, #b9f6ca, #80d8ff, #ea80fc, #ff8a80)":d,u.onclick=()=>{var f,p;ct.click(),un.focus(ta.paint),t?(((f=Ie.custom)[p=e.id]||(f[p]={})).paint=d,_n(),Ln={}):Ln={paint:d},Jn()},h.appendChild(u)}}else{let h=XM[en],d=document.createElement("div");d.className="items",l.appendChild(d),en==="finish"&&c&&l.insertAdjacentHTML("afterbegin",'<p class="note small">Bu ara\xE7ta kaplama sadece \xF6zel boyaya uygulan\u0131r.</p>');for(let u of h){let f=Og(en,u),p=s[en]===u.id,x=document.createElement("button");x.className="item"+(p?" on":"");let m="";en==="rim"?m=`<span class="pv" style="background:${u.id==="orig"?"radial-gradient(#ddd,#777)":`radial-gradient(circle at 35% 30%, #fff8, ${u.id})`}">\u{1F6DE}</span>`:en==="neon"?m=`<span class="pv" style="background:${u.id==="none"?"#333":u.id==="rainbow"?"conic-gradient(red,orange,yellow,lime,cyan,blue,magenta,red)":u.id};box-shadow:0 0 14px ${u.id==="none"?"transparent":u.id==="rainbow"?"#f0f":u.id}">\u{1F4A1}</span>`:en==="finish"?m=`<span class="pv" style="background:${{gloss:"radial-gradient(circle at 30% 25%,#fff,#d32f2f 45%)",metal:"radial-gradient(circle at 30% 25%,#fff,#9e9e9e 40%,#424242)",matte:"#7a2424",pearl:"linear-gradient(135deg,#fff,#f8bbd0,#b3e5fc,#fff)",candy:"radial-gradient(circle at 30% 25%,#ffcdd2,#c2185b 50%,#4a0020)",chrome:"linear-gradient(135deg,#fff,#888 40%,#fff 55%,#555)"}[u.id]}"></span>`:en==="tint"?m=`<span class="pv" style="background:rgba(10,15,25,${{none:.15,light:.45,dark:.75,black:.95}[u.id]});border:2px solid #9ab">\u{1F576}\uFE0F</span>`:m=`<span class="pv" style="background:rgba(255,255,255,.12)">${u.icon||"\u2022"}</span>`,x.innerHTML=`${m}<span>${u.name}</span><span class="pr ${u.price?"":"free"}">${f?u.price?"Senin":"\xDCcretsiz":"\u2605 "+u.price}</span>${f?"":'<span class="lk">\u{1F512}</span>'}`,x.onclick=()=>{var g,_;ct.click(),un.focus(ta[en]),f&&t?(((g=Ie.custom)[_=e.id]||(g[_]={}))[en]=u.id,_n(),Ln={},Jn(en)):(Ln={[en]:u.id},Jn(en),KM(e,en,u,t))},d.appendChild(x)}}(!Ln||!Object.keys(Ln).length)&&ae("g-try").classList.add("hidden"),$d()}function KM(i,e,t,n){let s=ae("g-try");s.classList.remove("hidden"),s.innerHTML="";let r=document.createElement("button");r.className="btn",r.textContent="Vazge\xE7",r.onclick=()=>{Ln={},Jn()};let a=document.createElement("button");a.className="btn primary";let o=Og(e,t);n?o?a.textContent="Uygula":(a.textContent=`Sat\u0131n al \u2605 ${t.price}`,a.disabled=Ie.stars<t.price):(a.textContent="\xD6nce arabay\u0131 sat\u0131n al",a.disabled=!0),a.onclick=()=>{var l,c;if(!o){if(Ie.stars<t.price)return;Jd({stars:t.price}),Ie.items[e+":"+t.id]=!0}((l=Ie.custom)[c=i.id]||(l[c]={}))[e]=t.id,_n(),Ln={},ct.buy(),Zn(`${t.name} tak\u0131ld\u0131! \u2728`),Jn(e)},s.append(r,a)}ae("g-prev").onclick=()=>{tr=(tr+Yi.length-1)%Yi.length,Ln={},ct.click(),un.resetView(),Jn()};ae("g-next").onclick=()=>{tr=(tr+1)%Yi.length,Ln={},ct.click(),un.resetView(),Jn()};var YM=0;addEventListener("pointerdown",()=>{yi==="garage"&&++YM>2&&ae("drag-hint").classList.add("off")});function JM(i){Qs(),ct.click(),No=i,ae("lc-title").textContent=`B\xF6l\xFCm ${i.n}`,ae("lc-region").textContent=i.regionName,ae("lc-stars").innerHTML=Ug(Ie.levels[i.n]||0),ae("lc-len").textContent=`${(i.length/1e3).toFixed(1)} km`,ae("lc-reward").textContent=`\u2605 ${i.reward} + toplad\u0131klar\u0131n`,ae("level-card").classList.remove("hidden")}ae("lc-close").onclick=()=>ae("level-card").classList.add("hidden");ae("lc-go").onclick=()=>{ae("level-card").classList.add("hidden"),aa(No,{mp:!1})};function ZM(){matchMedia("(pointer: coarse)").matches&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().catch(()=>{})}async function aa(i,e){Qs(),ZM(),Ot&&(Ot.dispose(),Ot=null);for(let s of["result","pause","level-card"])ae(s).classList.add("hidden");ae("loading").classList.remove("hidden");for(let s of["home","map","garage","mp","settings"])ae(s).classList.add("hidden");ae("wallet").classList.add("hidden"),document.body.classList.remove("menu-bg"),yi="race",Lo=e,No=i,Zd=!1;let t=ra(Ie.car),n=(e.players||[]).map(s=>({...s,model:ra(s.car).type}));try{await Km([t.type,...Od(i),...n.map(s=>s.model)])}catch(s){console.warn(s),Zn("Ara\xE7 modelleri y\xFCklenemedi")}yi!=="race"||Lo!==e||(Ot=new hh(Fg,{level:i,carDef:t,color:Qd(t),custom:Fo(t),upg:mh(t),stats:xg(t,Ie.upgrades[t.id]),seed:e.mp?e.seed:i.seed,mp:e.mp,net:bt,players:n,myId:bt.id,countdown:e.mp?Math.max(1.5,e.countdown/1e3-(performance.now()-e.t0)/1e3):3.2,onEnd:s=>$M(s),onPause:()=>gh(!0)}),ae("loading").classList.add("hidden"))}function $M(i){if(Lo.mp){zg(i);return}let e=No,t=i.success&&!Ie.levels[e.n],n=0,s=0;i.success&&(n=e.reward,i.rating===3&&(Ie.levels[e.n]||0)<3&&(s=3),t&&(s+=1)),Ie.stars+=i.stars+n,Ie.diamonds+=i.diamonds+s,i.success&&(Ie.levels[e.n]=Math.max(Ie.levels[e.n]||0,i.rating),Ie.unlocked=Math.max(Ie.unlocked,Math.min(zn.length,e.n+1))),_n(),ae("r-title").textContent=i.success?i.rating===3?"Muhte\u015Fem! \u{1F3C6}":"B\xF6l\xFCm Tamam! \u{1F3C1}":"Kaza Yapt\u0131n! \u{1F4A5}",ae("r-rating").innerHTML=Ug(i.rating),ae("r-body").innerHTML=`<div class="reward"><span>\u2605 +${i.stars+n}</span><span>\u25C6 +${i.diamonds+s}</span></div>
    <p class="muted">Toplanan y\u0131ld\u0131z: ${i.stars} / ${i.total}${i.success?` \xB7 S\xFCre: ${i.time.toFixed(1)} sn`:` \xB7 Yol: %${Math.round(i.dist/e.length*100)}`}</p>
    ${i.success&&i.rating<3?`<p class="hint">3 y\u0131ld\u0131z i\xE7in y\u0131ld\u0131zlar\u0131n %70'ini topla ve hi\xE7 \xE7arpma!</p>`:""}`;let r=ae("r-buttons");r.innerHTML="";let a=(o,l,c)=>{let h=document.createElement("button");h.className="btn "+l,h.textContent=o,h.onclick=()=>{ct.click(),c()},r.appendChild(h)};a("Harita","",()=>ef("map")),a("Tekrar","",()=>aa(e,{mp:!1})),i.success&&e.n<zn.length&&a("Sonraki \u25B6","primary",()=>aa(zn[e.n],{mp:!1})),ae("result").classList.remove("hidden")}function ef(i){Ot&&(Ot.dispose(),Ot=null);for(let e of["result","pause"])ae(e).classList.add("hidden");oa(i)}function gh(i){!Ot||Lo.mp||(Zd=i,ae("pause").classList.toggle("hidden",!i))}ae("hud-pause").onclick=()=>gh(!0);ae("horn-btn").addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),ct.horn()});ae("p-resume").onclick=()=>gh(!1);ae("p-retry").onclick=()=>aa(No,{mp:!1});ae("p-map").onclick=()=>ef("map");document.addEventListener("visibilitychange",()=>{document.hidden&&Ot&&!Lo.mp&&Ot.state==="run"&&gh(!0)});function QM(){ae("mp-name").value=Ie.name,bt.connect(),ae("mp-hint").textContent=bt.mode==="peer"?'Bir cihaz "Oda Kur"a bass\u0131n. Di\u011Feri ekranda \xE7\u0131kan 4 harfli kodu yaz\u0131p "Kat\u0131l"a bass\u0131n. \u0130nternet ba\u011Flant\u0131s\u0131 yeterli, ayn\u0131 Wi-Fi gerekmez.':bt.mode==="room"?"\u0130ki cihazda da bu sayfay\u0131 ayn\u0131 Claude hesab\u0131yla a\xE7. Biri oda kursun, di\u011Feri listeden kat\u0131ls\u0131n.":"T\xFCm cihazlar ayn\u0131 Wi-Fi'de olmal\u0131. Bir cihaz oda kurar, di\u011Feri listeden kat\u0131l\u0131r.",bt.send({t:"profile",name:Ie.name,car:Ie.car,color:Qd(ra(Ie.car))}),bt.send({t:"listRooms"}),tf()}function eS(i){let e=ae("mp-rooms");if(e.innerHTML="",!i.length){e.innerHTML='<p class="muted">Hen\xFCz a\xE7\u0131k oda yok. Bir oda kur!</p>';return}for(let t of i){let n=document.createElement("div");n.className="room",n.innerHTML=`<div><b>${Io(t.host)}</b> <span class="muted">\xB7 ${t.count} ki\u015Fi \xB7 B\xF6l\xFCm ${t.level}</span></div>`;let s=document.createElement("button");s.className="btn primary",s.textContent="Kat\u0131l",s.onclick=()=>Bg(t.code),n.appendChild(s),e.appendChild(n)}}function Io(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function kg(){let i=ae("mp-name").value.trim();i&&(Ie.name=i,_n()),bt.send({t:"profile",name:Ie.name,car:Ie.car,color:Qd(ra(Ie.car))})}function Bg(i){Qs(),ct.click(),kg(),bt.send({t:"join",code:i})}ae("mp-create").onclick=()=>{Qs(),ct.click(),kg(),bt.send({t:"create",level:Math.min(Ie.unlocked,zn.length)})};ae("mp-join").onclick=()=>{let i=ae("mp-code").value.trim().toUpperCase();i.length===4?Bg(i):Zn("4 harfli oda kodunu yaz")};ae("mp-leave").onclick=()=>{bt.send({t:"leave"}),wn=null,tf()};ae("mp-back").onclick=()=>{wn&&bt.send({t:"leave"}),wn=null,oa("home")};ae("mp-start").onclick=()=>{Qs(),bt.send({t:"start"})};ae("mp-level").onchange=()=>bt.send({t:"setLevel",level:+ae("mp-level").value});function tf(){if(ae("mp-lobby-list").classList.toggle("hidden",!!wn),ae("mp-room").classList.toggle("hidden",!wn),!wn)return;let i=wn.hostId===bt.id;ae("mp-rcode").textContent=wn.code,ae("mp-players").innerHTML=wn.players.map(n=>`<div class="player"><span class="c" style="background:${Io(n.color)}"></span>${Io(n.name)} <span class="muted">\xB7 ${Io(ra(n.car).name)}</span>${n.id===wn.hostId?" \u{1F451}":""}${n.id===bt.id?' <span class="muted">(sen)</span>':""}</div>`).join("");let e=ae("mp-level"),t=i?Math.max(Ie.unlocked,wn.level):wn.level;e.innerHTML=zn.filter(n=>n.n<=t).map(n=>`<option value="${n.n}">B\xF6l\xFCm ${n.n} \u2013 ${n.regionName}</option>`).join(""),e.value=wn.level,e.disabled=!i,ae("mp-start").classList.toggle("hidden",!i),ae("mp-wait").textContent=i?wn.players.length<2?"Di\u011Fer oyuncunun kat\u0131lmas\u0131n\u0131 bekle (tek ba\u015F\u0131na da ba\u015Flatabilirsin).":"Haz\u0131r olunca ba\u015Flat!":"Oda sahibinin ba\u015Flatmas\u0131 bekleniyor\u2026"}bt.on("open",()=>ae("mp-status").classList.add("on"));bt.on("close",()=>{ae("mp-status").classList.remove("on"),yi==="mp"&&bt.mode==="ws"&&Zn('Sunucu ba\u011Flant\u0131s\u0131 yok. Bilgisayarda "npm start" \xE7al\u0131\u015F\u0131yor mu?')});bt.on("rooms",i=>eS(i.list));bt.on("room",i=>{wn=i,yi==="mp"&&tf()});bt.on("rooms",i=>{bt.mode==="peer"&&!i.list.length&&(ae("mp-rooms").innerHTML='<p class="muted">Arkada\u015F\u0131n\u0131n oda kodunu a\u015Fa\u011F\u0131ya yaz \u{1F447}</p>')});bt.on("error",i=>Zn(i.msg));bt.on("start",i=>{Do=[],aa(zn[i.level-1],{mp:!0,seed:i.seed,players:i.players,countdown:i.countdown,t0:performance.now()})});bt.on("state",i=>Ot?.remoteState(i));bt.on("left",i=>Ot?.removeRemote(i.id));bt.on("finish",i=>{Do=i.results,(Ot?.ended||Ot?.state==="finish")&&sa(!1);for(let e of i.results){let t=Ot?.remotes.get(e.id);t&&(t.finished=!0)}});bt.on("raceEnd",i=>{Do=i.results,Ot&&(Ot.ended?sa(!0):(Ot.ended=!0,zg(Ot.result(),!0)))});var Po=null;function zg(i,e){Po=i,Ie.stars+=i.stars,Ie.diamonds+=i.diamonds,_n(),sa(!!e)}function sa(i){let e=Do.find(r=>r.id===bt.id),t=e&&e.place===1;i&&t&&!sa.paid&&(Ie.diamonds+=3,_n(),sa.paid=!0),ae("r-title").textContent=e?e.place===1?"1. oldun! \u{1F3C6}":`${e.place}. oldun \u{1F3C1}`:"Yar\u0131\u015F bitti",ae("r-rating").innerHTML="";let n=Do.map(r=>`<li class="${r.id===bt.id?"me":""}"><span>${r.place}. ${Io(r.name)}</span><span>${r.time.toFixed(1)} sn \xB7 \u2605${r.stars}</span></li>`).join("");ae("r-body").innerHTML=`<ul class="results">${n||""}</ul>${i?"":'<p class="muted">Di\u011Fer oyuncular bekleniyor\u2026</p>'}
    ${Po?`<div class="reward"><span>\u2605 +${Po.stars}</span><span>\u25C6 +${Po.diamonds+(t&&i?3:0)}</span></div>`:""}`;let s=ae("r-buttons");if(s.innerHTML="",i){let r=document.createElement("button");r.className="btn primary",r.textContent="Lobiye D\xF6n",r.onclick=()=>{sa.paid=!1,Po=null,ef("mp")},s.appendChild(r)}ae("result").classList.remove("hidden")}ae("s-name").onchange=()=>{Ie.name=ae("s-name").value.trim()||"Oyuncu",_n()};ae("s-quality").onchange=()=>{Ie.quality=ae("s-quality").value,_n(),Zn("Kalite, oyunu yeniden a\xE7\u0131nca uygulan\u0131r")};ae("s-sound").onchange=()=>{Ie.sound=ae("s-sound").checked,_n(),kd(Ie.sound)};ae("s-full").onclick=()=>document.documentElement.requestFullscreen?.().catch(()=>Zn("Bu cihaz tam ekran\u0131 desteklemiyor"));var Kd=0;ae("s-reset").onclick=()=>{if(Date.now()-Kd>3e3){Kd=Date.now(),ae("s-reset").textContent="Emin misin? Silmek i\xE7in tekrar bas",setTimeout(()=>{ae("s-reset").textContent="\u0130lerlemeyi s\u0131f\u0131rla"},3e3);return}Kd=0,Lg(),oa("home"),Zn("S\u0131f\u0131rland\u0131")};addEventListener("resize",()=>{(yi==="garage"||yi==="home")&&setTimeout(()=>{un.zone=Yd(yi)},50)});var Ng=performance.now();function Hg(i){let e=Math.min(.05,(i-Ng)/1e3);Ng=i,Ot?(Zd||Ot.update(e),Ot.render(e)):yi!=="map"&&(un.update(e),un.render(e)),requestAnimationFrame(Hg)}oa("home");ae("loading").classList.add("hidden");requestAnimationFrame(Hg);window.__game={get race(){return Ot},save:Ie,startRace:aa,LEVELS:zn,show:oa};
