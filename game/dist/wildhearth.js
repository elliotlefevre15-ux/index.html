(()=>{var Pa="186";var ku=0,Wc=1,Hu=2;var ps=1,Vu=2,or=3,qn=0,ni=1,Bi=2,fn=0,Yn=1,ms=2,Xc=3,qc=4,Gu=5;var gs=100,Wu=101,Xu=102,qu=103,Yu=104,$u=200,Zu=201,Ju=202,Ku=203,Yc=204,$c=205,ju=206,Qu=207,td=208,ed=209,id=210,nd=211,sd=212,rd=213,od=214,Ko=0,jo=1,Qo=2,Xs=3,ta=4,ea=5,ia=6,na=7,Zc=0,ad=1,ld=2,en=0,Jc=1,Kc=2,jc=3,Qr=4,Qc=5,th=6,eh=7;var ih=300,$n=301,xs=302,La=303,Da=304,to=306,sa=1e3,Fi=1001,ra=1002,ti=1003,cd=1004;var eo=1005;var ze=1006,Na=1007;var Zn=1008;var wi=1009,nh=1010,sh=1011,ar=1012,Ua=1013,nn=1014,zi=1015,sn=1016,Fa=1017,Oa=1018,lr=1020,rh=35902,oh=35899,ah=1021,lh=1022,Ei=1023,cn=1026,Jn=1027,Ba=1028,za=1029,Kn=1030,ka=1031;var Ha=1033,io=33776,no=33777,so=33778,ro=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,$a=37496,Za=37488,Ja=37489,oo=37490,Ka=37491,ja=37808,Qa=37809,tl=37810,el=37811,il=37812,nl=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,ao=36285,xl=36286;var Ir=2300,oa=2301,Zo=2302,Nc=2303,Uc=2400,Fc=2401,Oc=2402;var hd=3200;var _l=0,ud=1,Tn="",pi="srgb",Pr="srgb-linear",Lr="linear",pe="srgb";var Jo=7680;var dd=519,fd=512,pd=513,md=514,vl=515,gd=516,xd=517,yl=518,_d=519,ch=35044,hh=35048;var uh="300 es",Ji=2e3,qs=2001;function Xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vd(){let n=Dr("canvas");return n.style.display="block",n}var ou={},Ys=null;function Nr(...n){let t="THREE."+n.shift();Ys?Ys("log",t,...n):console.log(t,...n)}function yd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=yd(n);let t="THREE."+n.shift();if(Ys)Ys("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Pt(...n){n=yd(n);let t="THREE."+n.shift();if(Ys)Ys("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function os(...n){let t=n.join(" ");t in ou||(ou[t]=!0,Rt(...n))}function Md(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bd={[Ko]:jo,[Qo]:ia,[ta]:na,[Xs]:ea,[jo]:Ko,[ia]:Qo,[na]:ta,[ea]:Xs},hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,Cr=Math.PI/180,$s=180/Math.PI;function wn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[e&63|128]+ai[e>>8&255]+"-"+ai[e>>16&255]+ai[e>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function dh(n,t){return(n%t+t)%t}function Yf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function $f(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function Zf(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function Jf(n,t=1){return t-Math.abs(dh(n,t*2)-t)}function Kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function jf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function tp(n,t){return n+Math.random()*(t-n)}function ep(n){return n*(.5-Math.random())}function ip(n){n!==void 0&&(au=n);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(n){return n*Cr}function sp(n){return n*$s}function rp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ap(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fh={DEG2RAD:Cr,RAD2DEG:$s,generateUUID:wn,clamp:te,euclideanModulo:dh,mapLinear:Yf,inverseLerp:$f,lerp:Rr,damp:Zf,pingpong:Jf,smoothstep:Kf,smootherstep:jf,randInt:Qf,randFloat:tp,randFloatSpread:ep,seededRandom:ip,degToRad:np,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:lp,normalize:xe,denormalize:Zi},_h=class _h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;var Lt=_h,mi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var R=vh,uc=new R,lu=new mi,yh=class yh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],y=s[1],E=s[4],M=s[7],w=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*g+a*E+l*S,r[6]=o*p+a*M+l*A,r[1]=c*x+h*y+d*w,r[4]=c*g+h*E+d*S,r[7]=c*p+h*M+d*A,r[2]=u*x+f*y+m*w,r[5]=u*g+f*E+m*S,r[8]=u*p+f*M+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(t,e)),this}rotate(t){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-t)),this}translate(t,e){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;var Ut=yh,dc=new Ut,cu=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){let n={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pr]:{primaries:t,whitePoint:i,transfer:Lr,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}var Qt=cp();function En(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ts,aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=Dr("canvas")),Ts.width=t.width,Ts.height=t.height;let s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(En(e[i]/255)*255):e[i]=En(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,Zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fc(s[o].image)):r.push(fc(s[o]))}else r=fc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var up=0,pc=new R,gi=class n extends hn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Fi,s=Fi,r=ze,o=Zn,a=Ei,l=wi,c=n.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=wn(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=ih;gi.DEFAULT_ANISOTROPY=1;var Mh=class Mh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(f+1)/2,w=(p+1)/2,S=(h+u)/4,A=(d+x)/4,v=(m+g)/4;return E>M&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=v/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;var Re=Mh,la=class extends hn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gi(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends la{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ur=class extends gi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends gi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,i){let s=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Fn.crossVectors(i,Ci),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Fn.crossVectors(i,Ci)),Fn.normalize(),bo.crossVectors(Ci,Fn),s[0]=Fn.x,s[4]=bo.x,s[8]=Ci.x,s[1]=Fn.y,s[5]=bo.y,s[9]=Ci.y,s[2]=Fn.z,s[6]=bo.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],y=i[3],E=i[7],M=i[11],w=i[15],S=s[0],A=s[4],v=s[8],T=s[12],I=s[1],N=s[5],O=s[9],V=s[13],L=s[2],H=s[6],q=s[10],Y=s[14],it=s[3],X=s[7],j=s[11],et=s[15];return r[0]=o*S+a*I+l*L+c*it,r[4]=o*A+a*N+l*H+c*X,r[8]=o*v+a*O+l*q+c*j,r[12]=o*T+a*V+l*Y+c*et,r[1]=h*S+d*I+u*L+f*it,r[5]=h*A+d*N+u*H+f*X,r[9]=h*v+d*O+u*q+f*j,r[13]=h*T+d*V+u*Y+f*et,r[2]=m*S+x*I+g*L+p*it,r[6]=m*A+x*N+g*H+p*X,r[10]=m*v+x*O+g*q+p*j,r[14]=m*T+x*V+g*Y+p*et,r[3]=y*S+E*I+M*L+w*it,r[7]=y*A+E*N+M*H+w*X,r[11]=y*v+E*O+M*q+w*j,r[15]=y*T+E*V+M*Y+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*f-c*u,E=a*f-c*d,M=a*u-l*d,w=o*f-c*h,S=o*u-l*h,A=o*d-a*h;return e*(x*y-g*E+p*M)-i*(m*y-g*w+p*S)+s*(m*E-x*w+p*A)-r*(m*M-x*S+g*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-i*o,E=e*l-s*o,M=e*c-r*o,w=i*l-s*a,S=i*c-r*a,A=s*c-r*l,v=h*x-d*m,T=h*g-u*m,I=h*p-f*m,N=d*g-u*x,O=d*p-f*x,V=u*p-f*g,L=y*V-E*O+M*N+w*I-S*T+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(a*V-l*O+c*N)*H,t[1]=(s*O-i*V-r*N)*H,t[2]=(x*A-g*S+p*w)*H,t[3]=(u*S-d*A-f*w)*H,t[4]=(l*I-o*V-c*T)*H,t[5]=(e*V-s*I+r*T)*H,t[6]=(g*M-m*A-p*E)*H,t[7]=(h*A-u*M+f*E)*H,t[8]=(o*O-a*I+c*v)*H,t[9]=(i*I-e*O-r*v)*H,t[10]=(m*S-x*M+p*y)*H,t[11]=(d*M-h*S-f*y)*H,t[12]=(a*T-o*N-l*v)*H,t[13]=(e*N-i*T+s*v)*H,t[14]=(x*E-m*w-g*y)*H,t[15]=(h*w-d*E+u*y)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,y=l*c,E=l*h,M=l*d,w=i.x,S=i.y,A=i.z;return s[0]=(1-(x+p))*w,s[1]=(f+M)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+E)*A,s[9]=(g-y)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Xi.copy(this);let c=1/o,h=1/a,d=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,e.setFromRotationMatrix(Xi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Ji,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Ji)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===qs)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ji,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Ji)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===qs)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ia.prototype.isMatrix4=!0;var Zt=Ia,As=new R,Xi=new Zt,dp=new R(0,0,0),fp=new R(1,1,1),Fn=new R,bo=new R,Ci=new R,uu=new Zt,du=new mi,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,fu=new R,Cs=new mi,_n=new Zt,So=new R,_r=new R,mp=new R,gp=new mi,pu=new R(1,0,0),mu=new R(0,1,0),gu=new R(0,0,1),xu={type:"added"},xp={type:"removed"},Rs={type:"childadded",child:null},mc={type:"childremoved",child:null},Pe=class n extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new Ii,i=new mi,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ut}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(_r,So,this.up):_n.lookAt(So,_r,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(_n),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},wo={h:0,s:0,l:0};function gc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var st=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=dh(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=pi){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){let i=Sd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Qt.workingToColorSpace(li.copy(this),t),Math.round(te(li.r*255,0,255))*65536+Math.round(te(li.g*255,0,255))*256+Math.round(te(li.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(li.copy(this),e);let i=li.r,s=li.g,r=li.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(li.copy(this),e),t.r=li.r,t.g=li.g,t.b=li.b,t}getStyle(t=pi){Qt.workingToColorSpace(li.copy(this),t);let e=li.r,i=li.g,s=li.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(wo);let i=Rr(On.h,wo.h,e),s=Rr(On.s,wo.s,e),r=Rr(On.l,wo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new st;st.NAMES=Sd;var Fr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var as=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qi=new R,vn=new R,xc=new R,yn=new R,Is=new R,Ps=new R,_u=new R,_c=new R,vc=new R,yc=new R,Mc=new Re,bc=new Re,Sc=new Re,Sn=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qi.subVectors(t,e),s.cross(qi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){qi.subVectors(s,e),vn.subVectors(i,e),xc.subVectors(t,e);let o=qi.dot(qi),a=qi.dot(vn),l=qi.dot(xc),c=vn.dot(vn),h=vn.dot(xc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Mc.setScalar(0),bc.setScalar(0),Sc.setScalar(0),Mc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,i),Sc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(bc,r.y),o.addScaledVector(Sc,r.z),o}static isFrontFacing(t,e,i,s){return qi.subVectors(i,e),vn.subVectors(t,e),qi.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),qi.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ps.subVectors(r,i),_c.subVectors(t,i);let l=Is.dot(_c),c=Ps.dot(_c);if(l<=0&&c<=0)return e.copy(i);vc.subVectors(t,s);let h=Is.dot(vc),d=Ps.dot(vc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);yc.subVectors(t,r);let f=Is.dot(yc),m=Ps.dot(yc);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ps,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return _u.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(_u,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yi):Yi.fromBufferAttribute(r,o),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),To.subVectors(this.max,vr),Ls.subVectors(t.a,vr),Ds.subVectors(t.b,vr),Ns.subVectors(t.c,vr),Bn.subVectors(Ds,Ls),zn.subVectors(Ns,Ds),is.subVectors(Ls,Ns);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-is.z,is.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,is.z,0,-is.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-is.y,is.x,0];return!wc(e,Ls,Ds,Ns,To)||(e=[1,0,0,0,1,0,0,0,1],!wc(e,Ls,Ds,Ns,To))?!1:(Ao.crossVectors(Bn,zn),e=[Ao.x,Ao.y,Ao.z],wc(e,Ls,Ds,Ns,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mn=[new R,new R,new R,new R,new R,new R,new R,new R],Yi=new R,Eo=new bi,Ls=new R,Ds=new R,Ns=new R,Bn=new R,zn=new R,is=new R,vr=new R,To=new R,Ao=new R,ns=new R;function wc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Be=new R,Co=new Lt,vp=0,Jt=class extends hn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Or=class extends Jt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Br=class extends Jt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends Jt{constructor(t,e,i){super(new Float32Array(t),e,i)}},yp=new bi,yr=new R,Ec=new R,un=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(Ec)),this.expandByPoint(yr.copy(t.center).sub(Ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mp=0,Ui=new Zt,Tc=new Pe,Us=new R,Ri=new bi,Mr=new bi,Qe=new R,_e=class n extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?Br:Or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,e,i){return Ui.makeTranslation(t,e,i),this.applyMatrix4(Ui),this}scale(t,e,i){return Ui.makeScale(t,e,i),this.applyMatrix4(Ui),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Ri.min,Mr.min),Ri.expandByPoint(Qe),Qe.addVectors(Ri.max,Mr.max),Ri.expandByPoint(Qe)):(Ri.expandByPoint(Mr.min),Ri.expandByPoint(Mr.max))}Ri.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),Qe.add(Us)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new R,l[v]=new R;let c=new R,h=new R,d=new R,u=new Lt,f=new Lt,m=new Lt,x=new R,g=new R;function p(v,T,I){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(N),a[v].add(x),a[T].add(x),a[I].add(x),l[v].add(g),l[T].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){let I=y[v],N=I.start,O=I.count;for(let V=N,L=N+O;V<L;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new R,M=new R,w=new R,S=new R;function A(v){w.fromBufferAttribute(s,v),S.copy(w);let T=a[v];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(S,T);let N=M.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,N)}for(let v=0,T=y.length;v<T;++v){let I=y[v],N=I.start,O=I.count;for(let V=N,L=N+O;V<L;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},fi=new R,js=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix4(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyNormalMatrix(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.transformDirection(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ac=new R,bp=new R,Sp=new Ut,$i=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ac.subVectors(i,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wp=0,Ki=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Yn,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=$c,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new st().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qs=class extends Ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fs,br=new R,Os=new R,Bs=new R,zs=new Lt,Sr=new Lt,wd=new Zt,Ro=new R,wr=new R,Io=new R,vu=new Lt,Cc=new Lt,yu=new Lt,kr=class extends Pe{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zr(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new js(i,3,0,!1)),Fs.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new Lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Po(Ro.set(-.5,-.5,0),Bs,o,Os,s,r),Po(wr.set(.5,-.5,0),Bs,o,Os,s,r),Po(Io.set(.5,.5,0),Bs,o,Os,s,r),vu.set(0,0),Cc.set(1,0),yu.set(1,1);let a=t.ray.intersectTriangle(Ro,wr,Io,!1,br);if(a===null&&(Po(wr.set(-.5,.5,0),Bs,o,Os,s,r),Cc.set(0,1),a=t.ray.intersectTriangle(Ro,Io,wr,!1,br),a===null))return;let l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:Sn.getInterpolation(br,Ro,wr,Io,vu,Cc,yu,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Po(n,t,e,i,s,r){zs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*zs.x-s*zs.y,Sr.y=s*zs.x+r*zs.y):Sr.copy(zs),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(wd)}var bn=new R,Rc=new R,Lo=new R,Do=new R,ls=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rc.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Do.copy(this.origin).sub(Rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Lo),a=Do.dot(this.direction),l=-Do.dot(Lo),c=Do.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rc).addScaledVector(Lo,u),f}intersectSphere(t,e){if(t.radius<0)return null;bn.subVectors(t.center,this.origin);let i=bn.dot(this.direction),s=bn.dot(bn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=i.x-o.x,y=i.y-o.y,E=i.z-o.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),A,v,T,I,N,O,V,L,H,q,Y,it;if(M>=w&&M>=S?(T=l,O=d,H=m,it=p,l>=0?(A=c,v=h,I=u,N=f,V=x,L=g,q=y,Y=E):(A=h,v=c,I=f,N=u,V=g,L=x,q=E,Y=y)):w>=S?(T=c,O=u,H=x,it=y,c>=0?(A=h,v=l,I=f,N=d,V=g,L=m,q=E,Y=p):(A=l,v=h,I=d,N=f,V=m,L=g,q=p,Y=E)):(T=h,O=f,H=g,it=E,h>=0?(A=l,v=c,I=d,N=u,V=m,L=x,q=p,Y=y):(A=c,v=l,I=u,N=d,V=x,L=m,q=y,Y=p)),T===0)return null;let X=A/T,j=v/T,et=1/T,wt=I-X*O,Et=N-j*O,me=V-X*H,ne=L-j*H,ue=q-X*it,Z=Y-j*it,tt=ue*ne-Z*me,vt=wt*Z-Et*ue,Ft=me*Et-ne*wt;if(s){if(tt<0||vt<0||Ft<0)return null}else if((tt<0||vt<0||Ft<0)&&(tt>0||vt>0||Ft>0))return null;let xt=tt+vt+Ft;if(xt===0)return null;let Xt=et*(tt*O+vt*H+Ft*it);return(xt>0?Xt<0:Xt>0)?null:this.at(Xt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new Zt,ss=new ls,No=new un,bu=new R,Uo=new R,Fo=new R,Oo=new R,Ic=new R,Bo=new R,Su=new R,zo=new R,le=class extends Pe{constructor(t=new _e,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ic.fromBufferAttribute(d,t),o?Bo.addScaledVector(Ic,h):Bo.addScaledVector(Ic.sub(e),h))}e.add(Bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(No.containsPoint(ss.origin)===!1&&(ss.intersectSphere(No,bu)===null||ss.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=E;M<w;M+=3){let S=a.getX(M),A=a.getX(M+1),v=a.getX(M+2);s=ko(this,p,t,i,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),E=a.getX(g+1),M=a.getX(g+2);s=ko(this,o,t,i,c,h,d,y,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=E;M<w;M+=3){let S=M,A=M+1,v=M+2;s=ko(this,p,t,i,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,E=g+1,M=g+2;s=ko(this,o,t,i,c,h,d,y,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ep(n,t,e,i,s,r,o,a){let l;if(t.side===ni?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:n}}function ko(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Uo),n.getVertexPosition(l,Fo),n.getVertexPosition(c,Oo);let h=Ep(n,t,e,i,Uo,Fo,Oo,Su);if(h){let d=new R;Sn.getBarycoord(Su,Uo,Fo,Oo,d),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,d,new Lt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Sn.getNormal(Uo,Fo,Oo,u.normal),h.face=u,h.barycoord=d}return h}var cs=class extends gi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=ti,h=ti,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends Jt{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ks=new Zt,wu=new Zt,Ho=[],Eu=new bi,Tp=new Zt,Er=new le,Tr=new un,hs=class extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),Eu.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(Eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),Tr.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),wu.multiplyMatrices(i,ks),Er.matrixWorld=wu,Er.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){let l=Ho[o];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,Ba,zi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new un,Ap=new Lt(.5,.5),Vo=new R,er=class{constructor(t=new $i,e=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ji,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,p-m,w-y).normalize(),s[1].setComponents(c+o,f+h,p+m,w+y).normalize(),s[2].setComponents(c+a,f+d,p+x,w+E).normalize(),s[3].setComponents(c-a,f-d,p-x,w-E).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,p-g,w-M).normalize();else if(s[4].setComponents(c-l,f-u,p-g,w-M).normalize(),e===Ji)s[5].setComponents(c+l,f+u,p+g,w+M).normalize();else if(e===qs)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=Ap.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new R,ua=new R,Tu=new Zt,Ar=new ls,Go=new un,Pc=new R,Au=new R,da=class extends Pe{constructor(t=new _e,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),ua.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new oe(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;Tu.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),E=Wo(this,t,Ar,l,p,y,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Wo(this,t,Ar,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Wo(this,t,Ar,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Wo(this,t,Ar,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wo(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),ua.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,ua,Pc,Au)>i)return;Pc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pc);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Cu=new R,Ru=new R,ir=class extends da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Cu.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cu.distanceTo(Ru);t.setAttribute("lineDistance",new oe(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fa=class extends Ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new Zt,Bc=new ls,Xo=new un,qo=new R,Hr=class extends Pe{constructor(t=new _e,e=new fa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;Iu.copy(s).invert(),Bc.copy(t.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);qo.fromBufferAttribute(d,g),Pu(qo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)qo.fromBufferAttribute(d,m),Pu(qo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pu(n,t,e,i,s,r,o){let a=Bc.distanceSqToPoint(n);if(a<e){let l=new R;Bc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vr=class extends gi{constructor(t=[],e=$n,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gr=class extends gi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends gi{constructor(t,e,i=nn,s,r,o,a=ti,l=ti,c,h=cn,d=1){if(h!==cn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pa=class extends Hn{constructor(t,e=nn,i=$n,s,r,o=ti,a=ti,l,c=cn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends gi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class n extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function m(x,g,p,y,E,M,w,S,A,v,T){let I=M/A,N=w/v,O=M/2,V=w/2,L=S/2,H=A+1,q=v+1,Y=0,it=0,X=new R;for(let j=0;j<q;j++){let et=j*N-V;for(let wt=0;wt<H;wt++){let Et=wt*I-O;X[x]=Et*y,X[g]=et*E,X[p]=L,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),d.push(wt/A),d.push(1-j/v),Y+=1}}for(let j=0;j<v;j++)for(let et=0;et<A;et++){let wt=u+et+H*j,Et=u+et+H*(j+1),me=u+(et+1)+H*(j+1),ne=u+(et+1)+H*j;l.push(wt,Et,ne),l.push(Et,me,ne),it+=6}a.addGroup(f,it,T),f+=it,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var nr=class n extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new Lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class n extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=i/2,p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function y(){let M=new R,w=new R,S=0,A=(e-t)/i;for(let v=0;v<=r;v++){let T=[],I=v/r,N=I*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,L=V*l+a,H=Math.sin(L),q=Math.cos(L);w.x=N*H,w.y=-I*i+g,w.z=N*q,d.push(w.x,w.y,w.z),M.set(H,A,q).normalize(),u.push(M.x,M.y,M.z),f.push(V,1-I),T.push(m++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let I=x[T][v],N=x[T+1][v],O=x[T+1][v+1],V=x[T][v+1];(t>0||T!==0)&&(h.push(I,N,V),S+=3),(e>0||T!==r-1)&&(h.push(N,O,V),S+=3)}c.addGroup(p,S,0),p+=S}function E(M){let w=m,S=new Lt,A=new R,v=0,T=M===!0?t:e,I=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),m++;let N=m;for(let O=0;O<=s;O++){let L=O/s*l+a,H=Math.cos(L),q=Math.sin(L);A.x=T*q,A.y=g*I,A.z=T*H,d.push(A.x,A.y,A.z),u.push(0,I,0),S.x=H*.5+.5,S.y=q*.5*I+.5,f.push(S.x,S.y),m++}for(let O=0;O<s;O++){let V=w+O,L=N+O;M===!0?h.push(L,L+1,V):h.push(L+1,L,V),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Si=class n extends ke{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xr=class n extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new R,M=new R,w=new R;for(let S=0;S<e.length;S+=3)f(e[S+0],E),f(e[S+1],M),f(e[S+2],w),l(E,M,w,y)}function l(y,E,M,w){let S=w+1,A=[];for(let v=0;v<=S;v++){A[v]=[];let T=y.clone().lerp(M,v/S),I=E.clone().lerp(M,v/S),N=S-v;for(let O=0;O<=N;O++)O===0&&v===S?A[v][O]=T:A[v][O]=T.clone().lerp(I,O/N)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){let I=Math.floor(T/2);T%2===0?(u(A[v][I+1]),u(A[v+1][I]),u(A[v][I])):(u(A[v][I+1]),u(A[v+1][I+1]),u(A[v+1][I]))}}function c(y){let E=new R;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let y=new R;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let M=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(M,1-w)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],M=o[y+2],w=o[y+4],S=Math.max(E,M,w),A=Math.min(E,M,w);S>.9&&A<.1&&(E<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){let M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function m(){let y=new R,E=new R,M=new R,w=new R,S=new Lt,A=new Lt,v=new Lt;for(let T=0,I=0;T<r.length;T+=9,I+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),S.set(o[I+0],o[I+1]),A.set(o[I+2],o[I+3]),v.set(o[I+4],o[I+5]),w.copy(y).add(E).add(M).divideScalar(3);let N=g(w);x(S,I+0,y,N),x(A,I+2,E,N),x(v,I+4,M,N)}}function x(y,E,M,w){w<0&&y.x===1&&(o[E]=y.x-1),M.x===0&&M.z===0&&(o[E]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},qr=class n extends Xr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ji=class n extends Xr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Qi=class n extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let E=0;E<c;E++){let M=E*d-r;m.push(M,-y,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,M=y+c*(p+1),w=y+1+c*(p+1),S=y+1+c*p;f.push(E,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var tn=class n extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let y=[],E=p/i,M=o+E*a,w=t*Math.cos(M),S=Math.sqrt(t*t-w*w),A=0;p===0&&o===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let T=v/e,I=s+T*r;d.x=-S*Math.cos(I),d.y=w,d.z=S*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+A,1-E),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let E=h[p][y+1],M=h[p][y],w=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(E,M,S),(p!==i-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ds=class n extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,m=new R;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(p,y,M),l.push(y,E,M)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Lu(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function hi(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function Lu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ph(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var cr={clone:_s,merge:hi},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(s.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oi=class extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ga=class extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Lc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Vn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends Vn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fc:r=t,a=2*e-i;break;case Oc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:o=t,l=2*i-e;break;case Oc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*x+.5*m,M=f*g-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[c+w]+E*o[l+w]+M*o[d+w];return r}},va=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ya=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends Vn{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,y=d[p],E=d[p+1],M=t*u+m*2,w=h[M],S=h[M+1],A=Lp(i,e,y,w,s);r[m]=Ed(A,x,E,S,g)}return r}};function Ed(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Pp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Lp(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ed(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Pp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Pi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Lc(t.settings)&&(i.settings={inTangents:Hs(t.settings.inTangents,Array),outTangents:Hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case oa:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case Nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Lc(this.settings)&&(Du(this.settings.inTangents,t),Du(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Pt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Lc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Du(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Pi.prototype.ValueTypeName="";Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=oa;var Gn=class extends Pi{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Ir;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}};ba.prototype.ValueTypeName="color";var Sa=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="number";var wa=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yr=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Pi{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Ir;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}};Ea.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new Ta,Aa=class{constructor(t){this.manager=t!==void 0?t:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fs=class extends sr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dc=new Zt,Nu=new R,Uu=new R,$r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Dc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===qs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yo=new R,$o=new mi,ln=new R,Zr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yo,$o,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yo,$o,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kn=new R,Fu=new Lt,Ou=new Lt,qe=class extends Zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Ou),e.subVectors(Ou,Fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zc=class extends $r{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Jr=class extends sr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},rr=class extends Zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kc=class extends $r{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xn=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Vs=-90,Gs=1,Ca=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Vs,Gs,t,e);s.layers=this.layers,this.add(s);let r=new qe(Vs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new qe(Vs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new qe(Vs,Gs,t,e);a.layers=this.layers,this.add(a);let l=new qe(Vs,Gs,t,e);l.layers=this.layers,this.add(l);let c=new qe(Vs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ra=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mh="\\[\\]\\.:\\/",Dp=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Np="[^"+mh.replace("\\.","")+"]",Up=/((?:WC+[\/:])*)/.source.replace("WC",gh),Fp=/(WCOD+)?/.source.replace("WCOD",Np),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),zp=new RegExp("^"+Up+Fp+Op+Bp+"$"),kp=["material","materials","bones","map"],Hc=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=zp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Hc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);var Bu=new Zt,Kr=class{constructor(t,e,i=0,s=1/0){this.ray=new ls(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(t,e=!0,i=[]){return Vc(t,this,i,e),i.sort(zu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Vc(t[s],this,i,e);return i.sort(zu),i}};function zu(n,t){return n.distance-t.distance}function Vc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Vc(r[o],t,e,!0)}}var bh=class bh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};bh.prototype.isMatrix2=!0;var Gc=bh;var jr=class extends ir{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new _e;r.setIndex(new Jt(i,1)),r.setAttribute("position",new oe(s,3)),super(r,new us({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function xh(n,t,e,i){let s=Hp(i);switch(e){case ah:return n*t;case Ba:return n*t/s.components*s.byteLength;case za:return n*t/s.components*s.byteLength;case Kn:return n*t*2/s.components*s.byteLength;case ka:return n*t*2/s.components*s.byteLength;case lh:return n*t*3/s.components*s.byteLength;case Ei:return n*t*4/s.components*s.byteLength;case Ha:return n*t*4/s.components*s.byteLength;case io:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(n,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(n,8)*Math.max(t,8)/2;case qa:case Ya:case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $a:case oo:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case dl:case fl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ao:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(n){switch(n){case wi:case nh:return{byteLength:1,components:1};case ar:case sh:case sn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case nn:case Ua:case zi:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);function $d(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,m0=`#define PI 3.141592653589793
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
} // validated`,g0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,W0=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,X0=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,gg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,_g=`#define TOON
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
}`,vg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:Kp,aomap_fragment:jp,aomap_pars_fragment:Qp,batching_pars_vertex:t0,batching_vertex:e0,begin_vertex:i0,beginnormal_vertex:n0,bsdfs:s0,iridescence_fragment:r0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:h0,color_fragment:u0,color_pars_fragment:d0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:x0,displacementmap_pars_vertex:_0,displacementmap_vertex:v0,emissivemap_fragment:y0,emissivemap_pars_fragment:M0,colorspace_fragment:b0,colorspace_pars_fragment:S0,envmap_fragment:w0,envmap_common_pars_fragment:E0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:R0,fog_pars_vertex:I0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:N0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:F0,lights_pars_begin:O0,lights_toon_fragment:z0,lights_toon_pars_fragment:k0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:G0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,lightprobes_pars_fragment:$0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:j0,map_fragment:Q0,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:im,metalnessmap_fragment:nm,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Im,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Km,depth_vert:jm,depth_frag:Qm,distance_vert:tg,distance_frag:eg,equirect_vert:ig,equirect_frag:ng,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:og,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:_g,meshtoon_frag:vg,points_vert:yg,points_frag:Mg,shadow_vert:bg,shadow_frag:Sg,sprite_vert:wg,sprite_frag:Eg},ot={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},mn={basic:{uniforms:hi([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:hi([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:hi([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:hi([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:hi([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new st(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:hi([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:hi([ot.points,ot.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:hi([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:hi([ot.common,ot.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:hi([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:hi([ot.sprite,ot.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:hi([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:hi([ot.lights,ot.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};mn.physical={uniforms:hi([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ml={r:0,b:0,g:0},Tg=new Zt,Zd=new Ut;Zd.set(-1,0,0,0,1,0,0,0,1);function Ag(n,t,e,i,s,r){let o=new st(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let M=y.backgroundBlurriness>0;E=t.get(E,M)}return E}function m(y){let E=!1,M=f(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,E){let M=f(E);M&&(M.isCubeTexture||M.mapping===to)?(c===void 0&&(c=new le(new dn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:_s(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==pe,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new le(new Qi(2,2),new Ye({name:"BackgroundMaterial",uniforms:_s(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,E){y.getRGB(Ml,ph(n)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Cg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(N,O,V,L,H){let q=!1,Y=d(N,L,V,O);r!==Y&&(r=Y,c(r.object)),q=f(N,L,V,H),q&&m(N,L,V,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(N,O,V,L),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,O,V,L){let H=L.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let Y=N.isInstancedMesh===!0?N.id:0,it=q[Y];it===void 0&&(it={},q[Y]=it);let X=it[V.id];X===void 0&&(X={},it[V.id]=X);let j=X[H];return j===void 0&&(j=u(l()),X[H]=j),j}function u(N){let O=[],V=[],L=[];for(let H=0;H<e;H++)O[H]=0,V[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,O,V,L){let H=r.attributes,q=O.attributes,Y=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let et=H[X],wt=q[X];if(wt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),et===void 0||et.attribute!==wt||wt&&et.data!==wt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function m(N,O,V,L){let H={},q=O.attributes,Y=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let et=q[X];et===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));let wt={};wt.attribute=et,et&&et.data&&(wt.data=et.data),H[X]=wt,Y++}r.attributes=H,r.attributesNum=Y,r.index=L}function x(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function g(N){p(N,0)}function p(N,O){let V=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),H[N]!==O&&(n.vertexAttribDivisor(N,O),H[N]=O)}function y(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,L=O.length;V<L;V++)O[V]!==N[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function E(N,O,V,L,H,q,Y){Y===!0?n.vertexAttribIPointer(N,O,V,H,q):n.vertexAttribPointer(N,O,V,L,H,q)}function M(N,O,V,L){x();let H=L.attributes,q=V.getAttributes(),Y=O.defaultAttributeValues;for(let it in q){let X=q[it];if(X.location>=0){let j=H[it];if(j===void 0&&(it==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),it==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let et=j.normalized,wt=j.itemSize,Et=t.get(j);if(Et===void 0)continue;let me=Et.buffer,ne=Et.type,ue=Et.bytesPerElement,Z=ne===n.INT||ne===n.UNSIGNED_INT||j.gpuType===Ua;if(j.isInterleavedBufferAttribute){let tt=j.data,vt=tt.stride,Ft=j.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<X.locationSize;xt++)g(X.location+xt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let xt=0;xt<X.locationSize;xt++)E(X.location+xt,wt/X.locationSize,ne,et,vt*ue,(Ft+wt/X.locationSize*xt)*ue,Z)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<X.locationSize;tt++)g(X.location+tt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let tt=0;tt<X.locationSize;tt++)E(X.location+tt,wt/X.locationSize,ne,et,wt*ue,wt/X.locationSize*tt*ue,Z)}}else if(Y!==void 0){let et=Y[it];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(X.location,et);break;case 3:n.vertexAttrib3fv(X.location,et);break;case 4:n.vertexAttrib4fv(X.location,et);break;default:n.vertexAttrib1fv(X.location,et)}}}}y()}function w(){T();for(let N in i){let O=i[N];for(let V in O){let L=O[V];for(let H in L){let q=L[H];for(let Y in q)h(q[Y].object),delete q[Y];delete L[H]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let V in O){let L=O[V];for(let H in L){let q=L[H];for(let Y in q)h(q[Y].object),delete q[Y];delete L[H]}}delete i[N.id]}function A(N){for(let O in i){let V=i[O];for(let L in V){let H=V[L];if(H[N.id]===void 0)continue;let q=H[N.id];for(let Y in q)h(q[Y].object),delete q[Y];delete H[N.id]}}}function v(N){for(let O in i){let V=i[O],L=N.isInstancedMesh===!0?N.id:0,H=V[L];if(H!==void 0){for(let q in H){let Y=H[q];for(let it in Y)h(Y[it].object),delete Y[it];delete H[q]}delete V[L],Object.keys(V).length===0&&delete i[O]}}}function T(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Rg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ig(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&A!==zi&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:S}}function Pg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new $i,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,E=y*4,M=p.clippingState||null;l.value=M,M=h(m,u,E,f);for(let w=0;w!==E;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,M=f;E!==x;++E,M+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var ur=4,Lg=6,Dg=20,Ng=256,lo=new rr,Ad=new st,Sh=null,wh=0,Eh=0,Th=!1,Ug=new R,vs=new R,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Ug}=r;Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,wh,Eh),this._renderer.xr.enabled=Th,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:sn,format:Ei,colorSpace:Pr,depthBuffer:!1},s=Cd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fg(r)),this._blurMaterial=Bg(r,t,e),this._ggxMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new le(new _e,t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,i,s,r){let l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ad),d.toneMapping=en,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new dn,new xi({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(Ad),p=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let w=this._cubeSize;hr(s,M*w,E>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===$n||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,lo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-ur?i-m+ur:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,hr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,hr(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,lo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),u=4*(this._cubeSize-h);hr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,lo)}};function Fg(n){let t=[],e=[],i=n,s=n-ur+1+Lg;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,E=p>2?0:-1,M=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];m.set(M,f*u*p);for(let w=0;w<u;w++){let S=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?vs.set(1,A,S):p===1?vs.set(-S,1,-A):p===2?vs.set(-S,A,1):p===3?vs.set(-1,A,-S):p===4?vs.set(-S,-1,A):vs.set(S,A,-1),vs.toArray(x,(p*u+w)*f)}}let g=new _e;g.setAttribute("position",new Jt(m,f)),g.setAttribute("outputDirection",new Jt(x,f)),e.push(new le(g,null)),i>ur&&i--}return{lodMeshes:e,sizeLods:t}}function Cd(n,t,e){let i=new ci(n,t,e);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Og(n,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Bg(n,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Rd(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Id(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:fn});r.uniforms.tEquirect.value=e;let o=new le(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=ze),new Ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function zg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===La||f===Da)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new wl(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===La||f===Da,x=f===$n||f===xs;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Sl(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Sl(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===La?u.mapping=$n:f===Da&&(u.mapping=xs),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function kg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&os("WebGLRenderer: "+i+" extension not supported."),s}}}function Hg(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let E=0,M=y.length;E<M;E+=3){let w=y[E+0],S=y[E+1],A=y[E+2];u.push(w,S,S,A,A,w)}}else{let y=m.array;x=m.version;for(let E=0,M=y.length/3-1;E<M;E+=3){let w=E+0,S=E+1,A=E+2;u.push(w,S,S,A,A,w)}}let g=new(m.count>=65535?Br:Or)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Vg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wg(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let M=a.attributes.position.count*E,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*w*4*d),A=new Ur(S,M,w,d);A.type=zi,A.needsUpdate=!0;let v=E*4;for(let I=0;I<d;I++){let N=g[I],O=p[I],V=y[I],L=M*w*4*I;for(let H=0;H<N.count;H++){let q=H*v;f===!0&&(s.fromBufferAttribute(N,H),S[L+q+0]=s.x,S[L+q+1]=s.y,S[L+q+2]=s.z,S[L+q+3]=0),m===!0&&(s.fromBufferAttribute(O,H),S[L+q+4]=s.x,S[L+q+5]=s.y,S[L+q+6]=s.z,S[L+q+7]=0),x===!0&&(s.fromBufferAttribute(V,H),S[L+q+8]=s.x,S[L+q+9]=s.y,S[L+q+10]=s.z,S[L+q+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Lt(M,w)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Xg(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var qg={[Jc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[Qr]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function Yg(n,t,e,i,s,r){let o=new ci(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _e;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new le(c,h),u=new rr(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,y=[],E=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){y=M,E=y.length>0&&y[0].isRenderPass===!0;let w=o.width,S=o.height;y.length>0&&a===null&&(a=new ci(w,S,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new ci(w,S,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(w,S)}},this.begin=function(M,w){if(x||M.toneMapping===en&&y.length===0)return!1;if(p=w,w!==null){let S=w.width,A=w.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=en,!0},this.hasRenderPass=function(){return E},this.end=function(M,w){M.toneMapping=g,x=!0;let S=o,A=a;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(M,A,S,w),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,h.defines={},Qt.getTransfer(f)===pe&&(h.defines.SRGB_TRANSFER="");let v=qg[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Jd=new gi,Rh=new Hn(1,1),Kd=new Ur,jd=new ca,Qd=new Vr,Pd=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Al(n,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Ze(e,i)}}function Qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),Ze(e,i)}}function tx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Ze(e,i)}}function ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=e.isReversedDepthBuffer()?yl:vl,r=Rh):r=Jd,e.setTexture2D(t||r,s)}function hx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function ux(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qd,s)}function dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kd,s)}function fx(n){switch(n){case 5126:return $g;case 35664:return Zg;case 35665:return Jg;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return ix;case 35668:case 35672:return nx;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}function px(n,t){n.uniform1fv(this.addr,t)}function mx(n,t){let e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function gx(n,t){let e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function xx(n,t){let e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function _x(n,t){let e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vx(n,t){let e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yx(n,t){let e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mx(n,t){n.uniform1iv(this.addr,t)}function bx(n,t){n.uniform2iv(this.addr,t)}function Sx(n,t){n.uniform3iv(this.addr,t)}function wx(n,t){n.uniform4iv(this.addr,t)}function Ex(n,t){n.uniform1uiv(this.addr,t)}function Tx(n,t){n.uniform2uiv(this.addr,t)}function Ax(n,t){n.uniform3uiv(this.addr,t)}function Cx(n,t){n.uniform4uiv(this.addr,t)}function Rx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Rh:o=Jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ix(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function Px(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function Lx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function Dx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return xx;case 35674:return _x;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return bx;case 35668:case 35672:return Sx;case 35669:case 35673:return wx;case 5125:return Ex;case 36294:return Tx;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}var Ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},Ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function Fd(n,t){n.seq.push(t),n.map[t.id]=t}function Nx(n,t,e){let i=n.name,s=i.length;for(Ah.lastIndex=0;;){let r=Ah.exec(i),o=Ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(e,c===void 0?new Ih(a,n,t):new Ph(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Lh(a),Fd(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Nx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Od(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ux=37297,Fx=0;function Ox(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Bd=new Ut;function Bx(n){Qt._getMatrix(Bd,Qt.workingColorSpace,n);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Lr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ox(n.getShaderSource(t),a)}else return r}function zx(n,t){let e=Bx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kx={[Jc]:"Linear",[Kc]:"Reinhard",[jc]:"Cineon",[Qr]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};function Hx(n,t){let e=kx[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bl=new R;function Vx(){Qt.getLuminanceCoefficients(bl);let n=bl.x.toFixed(4),t=bl.y.toFixed(4),e=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Wx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ho(n){return n!==""}function kd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(qx,$x)}var Yx=new Map;function $x(n,t){let e=Ht[t];if(e===void 0){let i=Yx.get(t);if(i!==void 0)e=Ht[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dh(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(n){return n.replace(Zx,Jx)}function Jx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Kx={[ps]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function jx(n){return Kx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qx={[$n]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function t_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var e_={[xs]:"ENVMAP_MODE_REFRACTION"};function i_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[Zc]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[ld]:"ENVMAP_BLENDING_ADD"};function s_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":n_[n.combine]||"ENVMAP_BLENDING_NONE"}function r_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function o_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jx(e),c=t_(e),h=i_(e),d=s_(e),u=r_(e),f=Gx(e),m=Wx(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(g=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==en?"#define TONE_MAPPING":"",e.toneMapping!==en?Ht.tonemapping_pars_fragment:"",e.toneMapping!==en?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=Dh(o),o=kd(o,e),o=Hd(o,e),a=Dh(a),a=kd(a,e),a=Hd(a,e),o=Vd(o),a=Vd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=y+g+o,M=y+p+a,w=Od(s,s.VERTEX_SHADER,E),S=Od(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(S)||"",H=O.trim(),q=V.trim(),Y=L.trim(),it=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,S);else{let j=zd(s,w,"vertex"),et=zd(s,S,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+j+`
`+et)}else H!==""?Rt("WebGLProgram: Program Info Log:",H):(q===""||Y==="")&&(X=!1);X&&(N.diagnostics={runnable:it,programLog:H,vertexShader:{log:q,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(w),s.deleteShader(S),v=new dr(s,x),T=Xx(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Ux)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var a_=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uh(t),e.set(t,i)),i}},Uh=class{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}};function l_(n){return n===Kn||n===oo||n===ao}function c_(n,t,e,i,s,r){let o=new Js,a=new Nh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,I,N,O,V){let L=N.fog,H=O.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,it=t.get(v.envMap||q,Y),X=it&&it.mapping===to?it.image.height:null,j=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Rt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=et!==void 0?et.length:0,Et=0;H.morphAttributes.position!==void 0&&(Et=1),H.morphAttributes.normal!==void 0&&(Et=2),H.morphAttributes.color!==void 0&&(Et=3);let me,ne,ue,Z;if(j){let Se=mn[j];me=Se.vertexShader,ne=Se.fragmentShader}else{me=v.vertexShader,ne=v.fragmentShader;let Se=a.getVertexShaderStage(v),de=a.getFragmentShaderStage(v);a.update(v,Se,de),ue=Se.id,Z=de.id}let tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,Xt=!!v.map,Xe=!!v.matcap,Yt=!!it,ae=!!v.aoMap,be=!!v.lightMap,jt=!!v.bumpMap&&v.wireframe===!1,Ce=!!v.normalMap,je=!!v.displacementMap,Mi=!!v.emissiveMap,Ie=!!v.metalnessMap,Fe=!!v.roughnessMap,F=v.anisotropy>0,ri=v.clearcoat>0,ge=v.dispersion>0,C=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,G=v.transmission>0,$=F&&!!v.anisotropyMap,rt=ri&&!!v.clearcoatMap,at=ri&&!!v.clearcoatNormalMap,J=ri&&!!v.clearcoatRoughnessMap,Q=_&&!!v.iridescenceMap,lt=_&&!!v.iridescenceThicknessMap,Tt=B&&!!v.sheenColorMap,dt=B&&!!v.sheenRoughnessMap,ct=!!v.specularMap,At=!!v.specularColorMap,It=!!v.specularIntensityMap,Bt=G&&!!v.transmissionMap,U=G&&!!v.thicknessMap,ht=!!v.gradientMap,K=!!v.alphaMap,ut=v.alphaTest>0,mt=!!v.alphaHash,nt=!!v.extensions,Ct=en;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let bt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:ne,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:Xe,envMap:Yt,envMapMode:Yt&&it.mapping,envMapCubeUVHeight:X,aoMap:ae,lightMap:be,bumpMap:jt,normalMap:Ce,displacementMap:je,emissiveMap:Mi,normalMapObjectSpace:Ce&&v.normalMapType===ud,normalMapTangentSpace:Ce&&v.normalMapType===_l,packedNormalMap:Ce&&v.normalMapType===_l&&l_(v.normalMap.format),metalnessMap:Ie,roughnessMap:Fe,anisotropy:F,anisotropyMap:$,clearcoat:ri,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:J,dispersion:ge,retroreflection:C,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:lt,sheen:B,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:At,specularIntensityMap:It,transmission:G,transmissionMap:Bt,thicknessMap:U,gradientMap:ht,opaque:v.transparent===!1&&v.blending===Yn&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:mt,combine:v.combine,mapUv:Xt&&m(v.map.channel),aoMapUv:ae&&m(v.aoMap.channel),lightMapUv:be&&m(v.lightMap.channel),bumpMapUv:jt&&m(v.bumpMap.channel),normalMapUv:Ce&&m(v.normalMap.channel),displacementMapUv:je&&m(v.displacementMap.channel),emissiveMapUv:Mi&&m(v.emissiveMap.channel),metalnessMapUv:Ie&&m(v.metalnessMap.channel),roughnessMapUv:Fe&&m(v.roughnessMap.channel),anisotropyMapUv:$&&m(v.anisotropyMap.channel),clearcoatMapUv:rt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:dt&&m(v.sheenRoughnessMap.channel),specularMapUv:ct&&m(v.specularMap.channel),specularColorMapUv:At&&m(v.specularColorMap.channel),specularIntensityMapUv:It&&m(v.specularIntensityMap.channel),transmissionMapUv:Bt&&m(v.transmissionMap.channel),thicknessMapUv:U&&m(v.thicknessMap.channel),alphaMapUv:K&&m(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||F),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Xt||K),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&Ce===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:Mi&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bi,flipSided:v.side===ni,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(T,v),y(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let T=f[v.type],I;if(T){let N=mn[T];I=cr.clone(N.uniforms)}else I=v.uniforms;return I}function M(v,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new o_(n,T,v,s),c.push(I),h.set(T,I)),I}function w(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:A}}function h_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function u_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},n[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function l(u,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let E=a(u,f,m,x,g,p);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,f,m,x,g,p){let y=a(u,f,m,x,g,p);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||u_),i.length>1&&i.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function d_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Xd,n.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function f_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new st};break;case"SpotLight":e={position:new R,direction:new R,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function p_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var m_=0;function g_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function x_(n){let t=new f_,e=p_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new Zt,o=new Zt;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,E=0,M=0,w=0,S=0,A=0,v=0,T=0,I=0;c.sort(g_);for(let O=0,V=c.length;O<V;O++){let L=c[O],H=L.color,q=L.intensity,Y=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Kn?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],q);I++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=it;let wt=j.getViewportCount();for(let Et=0;Et<wt;Et++)i.sunShadowMatrix[x+Et]=j.getMatrix(Et),i.sunShadowCascade[x+Et]=j._cascadeData[Et];x+=wt,m++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=X,g++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[y]=X;let j=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[y]=j.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=it,A++}y++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=X,E++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=L.shadow.matrix,S++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(q),X.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[M]=X,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==y||N.rectAreaLength!==E||N.hemiLength!==M||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==S||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=E,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,N.sunLength=f,N.directionalLength=g,N.pointLength=p,N.spotLength=y,N.rectAreaLength=E,N.hemiLength=M,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=S,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=I,i.version=m_++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let M=c[y];if(M.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function qd(n){let t=new x_(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function __(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(n),t.set(s,[a])):r>=o.length?(a=new qd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,M_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],b_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Yd=new Zt,co=new R,Ch=new R;function S_(n,t,e){let i=new er,s=new Lt,r=new Lt,o=new Re,a=new ga,l=new xa,c={},h=e.maxTextureSize,d={[qn]:ni,[ni]:qn,[Bi]:Bi},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:v_,fragmentShader:y_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new _e;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(S,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Vu&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){let q=S[L],Y=q.shadow;if(Y===void 0){Rt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let it=Y.getFrameExtents();s.multiply(it),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===or){if(q.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ci(s.x,s.y,{format:Kn,type:sn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Hn(s.x,s.y,zi),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=cn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ti,Y.map.depthTexture.magFilter=ti}else q.isPointLight?(Y.map=new wl(s.x),Y.map.depthTexture=new pa(s.x,nn)):(Y.map=new ci(s.x,s.y),Y.map.depthTexture=new Hn(s.x,s.y,nn)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=cn,this.type===ps?(Y.map.depthTexture.compareFunction=X?yl:vl,Y.map.depthTexture.minFilter=ze,Y.map.depthTexture.magFilter=ze):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ti,Y.map.depthTexture.magFilter=ti);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,v);for(let et=0;et<j;et++){let wt=Y.getCamera(et);if(q.isPointLight){let Et=Y.camera,me=Y.matrix,ne=q.distance||Et.far;ne!==Et.far&&(Et.far=ne,Et.updateProjectionMatrix()),co.setFromMatrixPosition(q.matrixWorld),Et.position.copy(co),Ch.copy(Et.position),Ch.add(M_[et]),Et.up.copy(b_[et]),Et.lookAt(Ch),Et.updateMatrixWorld(),me.makeTranslation(-co.x,-co.y,-co.z),Yd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Yd,Et.coordinateSystem,Et.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,et),n.clear();else{et===0&&(n.setRenderTarget(Y.map),n.clear());let Et=Y.getViewport(et);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),O.viewport(o)}i=Y.getFrustum(et),M(A,v,wt,q,this.type)}Y.isPointLightShadow!==!0&&this.type===or&&y(Y,v),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,I,N)};function y(S,A){let v=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new ci(s.x,s.y,{format:Kn,type:sn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,v,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,v,f,x,null)}function E(S,A,v,T){let I=null,N=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=I.uuid,V=A.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let H=L[V];H===void 0&&(H=I.clone(),L[V]=H,A.addEventListener("dispose",w)),I=H}if(I.visible=A.visible,I.wireframe=A.wireframe,T===or?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=n.properties.get(I);O.light=v}return I}function M(S,A,v,T,I){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===or)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let V=t.update(S),L=S.material;if(Array.isArray(L)){let H=V.groups;for(let q=0,Y=H.length;q<Y;q++){let it=H[q],X=L[it.materialIndex];if(X&&X.visible){let j=E(S,X,T,I);S.onBeforeShadow(n,S,A,v,V,j,it),n.renderBufferDirect(v,null,V,j,S,it),S.onAfterShadow(n,S,A,v,V,j,it)}}}else if(L.visible){let H=E(S,L,T,I);S.onBeforeShadow(n,S,A,v,V,H,null),n.renderBufferDirect(v,null,V,H,S,null),S.onAfterShadow(n,S,A,v,V,H,null)}}let O=S.children;for(let V=0,L=O.length;V<L;V++)M(O[V],A,v,T,I)}function w(S){S.target.removeEventListener("dispose",w);for(let v in c){let T=c[v],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function w_(n,t){function e(){let U=!1,ht=new Re,K=null,ut=new Re(0,0,0,0);return{setMask:function(mt){K!==mt&&!U&&(n.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){U=mt},setClear:function(mt,nt,Ct,bt,Se){Se===!0&&(mt*=bt,nt*=bt,Ct*=bt),ht.set(mt,nt,Ct,bt),ut.equals(ht)===!1&&(n.clearColor(mt,nt,Ct,bt),ut.copy(ht))},reset:function(){U=!1,K=null,ut.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,K=null,ut=null,mt=null;return{setReversed:function(nt){if(ht!==nt){let Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ht=nt;let bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return ht},setTest:function(nt){nt?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(nt){K!==nt&&!U&&(n.depthMask(nt),K=nt)},setFunc:function(nt){if(ht&&(nt=bd[nt]),ut!==nt){switch(nt){case Ko:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Qo:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case ea:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=nt}},setLocked:function(nt){U=nt},setClear:function(nt){mt!==nt&&(mt=nt,ht&&(nt=1-nt),n.clearDepth(nt))},reset:function(){U=!1,K=null,ut=null,mt=null,ht=!1}}}function s(){let U=!1,ht=null,K=null,ut=null,mt=null,nt=null,Ct=null,bt=null,Se=null;return{setTest:function(de){U||(de?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(de){ht!==de&&!U&&(n.stencilMask(de),ht=de)},setFunc:function(de,Wi,on){(K!==de||ut!==Wi||mt!==on)&&(n.stencilFunc(de,Wi,on),K=de,ut=Wi,mt=on)},setOp:function(de,Wi,on){(nt!==de||Ct!==Wi||bt!==on)&&(n.stencilOp(de,Wi,on),nt=de,Ct=Wi,bt=on)},setLocked:function(de){U=de},setClear:function(de){Se!==de&&(n.clearStencil(de),Se=de)},reset:function(){U=!1,ht=null,K=null,ut=null,mt=null,nt=null,Ct=null,bt=null,Se=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,M=null,w=null,S=null,A=null,v=new st(0,0,0),T=0,I=!1,N=null,O=null,V=null,L=null,H=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=it>=2);let j=null,et={},wt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),me=new Re().fromArray(wt),ne=new Re().fromArray(Et);function ue(U,ht,K,ut){let mt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(U,nt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<K;Ct++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ht+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return nt}let Z={};Z[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc(Xs),jt(!1),Ce(Wc),tt(n.CULL_FACE),ae(fn);function tt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ft(U,ht){return u[U]!==ht?(n.bindFramebuffer(U,ht),u[U]=ht,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function xt(U,ht){let K=m,ut=!1;if(U){K=f.get(ht),K===void 0&&(K=[],f.set(ht,K));let mt=U.textures;if(K.length!==mt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Ct=mt.length;nt<Ct;nt++)K[nt]=n.COLOR_ATTACHMENT0+nt;K.length=mt.length,ut=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ut=!0);ut&&n.drawBuffers(K)}function Xt(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let Xe={[gs]:n.FUNC_ADD,[Wu]:n.FUNC_SUBTRACT,[Xu]:n.FUNC_REVERSE_SUBTRACT};Xe[qu]=n.MIN,Xe[Yu]=n.MAX;let Yt={[$u]:n.ZERO,[Zu]:n.ONE,[Ju]:n.SRC_COLOR,[Yc]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[td]:n.DST_COLOR,[ju]:n.DST_ALPHA,[Ku]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[ed]:n.ONE_MINUS_DST_COLOR,[Qu]:n.ONE_MINUS_DST_ALPHA,[nd]:n.CONSTANT_COLOR,[sd]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(U,ht,K,ut,mt,nt,Ct,bt,Se,de){if(U===fn){g===!0&&(vt(n.BLEND),g=!1);return}if(g===!1&&(tt(n.BLEND),g=!0),U!==Gu){if(U!==p||de!==I){if((y!==gs||w!==gs)&&(n.blendEquation(n.FUNC_ADD),y=gs,w=gs),de)switch(U){case Yn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",U);break}else switch(U){case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",U);break}E=null,M=null,S=null,A=null,v.set(0,0,0),T=0,p=U,I=de}return}mt=mt||ht,nt=nt||K,Ct=Ct||ut,(ht!==y||mt!==w)&&(n.blendEquationSeparate(Xe[ht],Xe[mt]),y=ht,w=mt),(K!==E||ut!==M||nt!==S||Ct!==A)&&(n.blendFuncSeparate(Yt[K],Yt[ut],Yt[nt],Yt[Ct]),E=K,M=ut,S=nt,A=Ct),(bt.equals(v)===!1||Se!==T)&&(n.blendColor(bt.r,bt.g,bt.b,Se),v.copy(bt),T=Se),p=U,I=!1}function be(U,ht){U.side===Bi?vt(n.CULL_FACE):tt(n.CULL_FACE);let K=U.side===ni;ht&&(K=!K),jt(K),U.blending===Yn&&U.transparent===!1?ae(fn):ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ut=U.stencilWrite;a.setTest(ut),ut&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mi(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function Ce(U){U!==ku?(tt(n.CULL_FACE),U!==O&&(U===Wc?n.cullFace(n.BACK):U===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),O=U}function je(U){U!==V&&(Y&&n.lineWidth(U),V=U)}function Mi(U,ht,K){U?(tt(n.POLYGON_OFFSET_FILL),(L!==ht||H!==K)&&(L=ht,H=K,o.getReversed()&&(ht=-ht),n.polygonOffset(ht,K))):vt(n.POLYGON_OFFSET_FILL)}function Ie(U){U?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=n.TEXTURE0+q-1),j!==U&&(n.activeTexture(U),j=U)}function F(U,ht,K){K===void 0&&(j===null?K=n.TEXTURE0+q-1:K=j);let ut=et[K];ut===void 0&&(ut={type:void 0,texture:void 0},et[K]=ut),(ut.type!==U||ut.texture!==ht)&&(j!==K&&(n.activeTexture(K),j=K),n.bindTexture(U,ht||Z[U]),ut.type=U,ut.texture=ht)}function ri(){let U=et[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function B(){try{n.texSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function rt(){try{n.texStorage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function at(){try{n.texStorage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function lt(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Tt(U,ht){d[U]!==ht&&(n.pixelStorei(U,ht),d[U]=ht)}function dt(U){me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function ct(U){ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function At(U,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let ut=K.get(U);ut===void 0&&(ut=n.getUniformBlockIndex(ht,U.name),K.set(U,ut))}function It(U,ht){let ut=c.get(ht).get(U);l.get(ht)!==ut&&(n.uniformBlockBinding(ht,ut,U.__bindingPointIndex),l.set(ht,ut))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,et={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,M=null,w=null,S=null,A=null,v=new st(0,0,0),T=0,I=!1,N=null,O=null,V=null,L=null,H=null,me.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:vt,bindFramebuffer:Ft,drawBuffers:xt,useProgram:Xt,setBlending:ae,setMaterial:be,setFlipSided:jt,setCullFace:Ce,setLineWidth:je,setPolygonOffset:Mi,setScissorTest:Ie,activeTexture:Fe,bindTexture:F,unbindTexture:ri,compressedTexImage2D:ge,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Tt,getParameter:lt,updateUBOMapping:At,uniformBlockBinding:It,texStorage2D:rt,texStorage3D:at,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:dt,viewport:ct,reset:Bt}}function E_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return m?new OffscreenCanvas(C,_):Dr("canvas")}function g(C,_,B){let G=1,$=ge(C);if(($.width>B||$.height>B)&&(G=B/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(G*$.width),at=Math.floor(G*$.height);u===void 0&&(u=x(rt,at));let J=_?x(rt,at):u;return J.width=rt,J.height=at,J.getContext("2d").drawImage(C,0,0,rt,at),Rt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+rt+"x"+at+")."),J}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,_,B,G,$,rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&at&&(J=at.R16_EXT),B===n.SHORT&&at&&(J=at.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),_===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&at&&(J=at.RG16_EXT),B===n.SHORT&&at&&(J=at.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&at&&(J=at.RGB16_EXT),B===n.SHORT&&at&&(J=at.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){let Q=rt?Lr:Qt.getTransfer($);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Q===pe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&at&&(J=at.RGBA16_EXT),B===n.SHORT&&at&&(J=at.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function w(C,_){let B;return C?_===null||_===nn||_===lr?B=n.DEPTH24_STENCIL8:_===zi?B=n.DEPTH32F_STENCIL8:_===ar&&(B=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nn||_===lr?B=n.DEPTH_COMPONENT24:_===zi?B=n.DEPTH_COMPONENT32F:_===ar&&(B=n.DEPTH_COMPONENT16),B}function S(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ti&&C.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){let _=C.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(C){let _=C.target;_.removeEventListener("dispose",v),N(_)}function T(C){let _=i.get(C);if(_.__webglInit===void 0)return;let B=C.source,G=f.get(B);if(G){let $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(C),Object.keys(G).length===0&&f.delete(B)}i.remove(C)}function I(C){let _=i.get(C);n.deleteTexture(_.__webglTexture);let B=C.source,G=f.get(B);delete G[_.__cacheKey],o.memory.textures--}function N(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[G][$]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,$=B.length;G<$;G++){let rt=i.get(B[G]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(C)}let O=0;function V(){O=0}function L(){return O}function H(C){O=C}function q(){let C=O;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function Y(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function it(C,_){let B=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function X(C,_){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,_);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function j(C,_){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,_);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function et(C,_){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ft(B,C,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let wt={[sa]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[ra]:n.MIRRORED_REPEAT},Et={[ti]:n.NEAREST,[cd]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},me={[fd]:n.NEVER,[_d]:n.ALWAYS,[pd]:n.LESS,[vl]:n.LEQUAL,[md]:n.EQUAL,[yl]:n.GEQUAL,[gd]:n.GREATER,[xd]:n.NOTEQUAL};function ne(C,_){if(_.type===zi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===Na||_.magFilter===eo||_.magFilter===Zn||_.minFilter===ze||_.minFilter===Na||_.minFilter===eo||_.minFilter===Zn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,wt[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,wt[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,wt[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Et[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ti||_.minFilter!==eo&&_.minFilter!==Zn||_.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ue(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));let G=_.source,$=f.get(G);$===void 0&&($={},f.set(G,$));let rt=Y(_);if(rt!==C.__cacheKey){$[rt]===void 0&&($[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[rt].usedTimes++;let at=$[C.__cacheKey];at!==void 0&&($[C.__cacheKey].usedTimes--,at.usedTimes===0&&I(_)),C.__cacheKey=rt,C.__webglTexture=$[rt].texture}return B}function Z(C,_,B){return Math.floor(Math.floor(C/B)/_)}function tt(C,_,B,G){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{rt.sort((Tt,dt)=>Tt.start-dt.start);let at=0;for(let Tt=1;Tt<rt.length;Tt++){let dt=rt[at],ct=rt[Tt],At=dt.start+dt.count,It=Z(ct.start,_.width,4),Bt=Z(dt.start,_.width,4);ct.start<=At+1&&It===Bt&&Z(ct.start+ct.count-1,_.width,4)===It?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++at,rt[at]=ct)}rt.length=at+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),lt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Tt=0,dt=rt.length;Tt<dt;Tt++){let ct=rt[Tt],At=Math.floor(ct.start/4),It=Math.ceil(ct.count/4),Bt=At%_.width,U=Math.floor(At/_.width),ht=It,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Bt,U,ht,K,B,G,_.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,lt)}}function vt(C,_,B){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let $=ue(C,_),rt=_.source;e.bindTexture(G,C.__webglTexture,n.TEXTURE0+B);let at=i.get(rt);if(rt.version!==at.__version||$===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Qt.getPrimaries(Qt.workingColorSpace),ut=_.colorSpace===Tn?null:Qt.getPrimaries(_.colorSpace),mt=_.colorSpace===Tn||K===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=g(_.image,!1,s.maxTextureSize);Q=ri(_,Q);let lt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),dt=M(_.internalFormat,lt,Tt,_.normalized,_.colorSpace,_.isVideoTexture);ne(G,_);let ct,At=_.mipmaps,It=_.isVideoTexture!==!0,Bt=at.__version===void 0||$===!0,U=rt.dataReady,ht=S(_,Q);if(_.isDepthTexture)dt=w(_.format===Jn,_.type),Bt&&(It?e.texStorage2D(n.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,lt,Tt,null));else if(_.isDataTexture)if(At.length>0){It&&Bt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,At[0].width,At[0].height);for(let K=0,ut=At.length;K<ut;K++)ct=At[K],It?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,K,dt,ct.width,ct.height,0,lt,Tt,ct.data);_.generateMipmaps=!1}else It?(Bt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,Q.width,Q.height),U&&tt(_,Q,lt,Tt)):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,lt,Tt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,dt,At[0].width,At[0].height,Q.depth);for(let K=0,ut=At.length;K<ut;K++)if(ct=At[K],_.format!==Ei)if(lt!==null)if(It){if(U)if(_.layerUpdates.size>0){let mt=xh(ct.width,ct.height,_.format,_.type);for(let nt of _.layerUpdates){let Ct=ct.data.subarray(nt*mt/ct.data.BYTES_PER_ELEMENT,(nt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,nt,ct.width,ct.height,1,lt,Ct)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,Q.depth,lt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,dt,ct.width,ct.height,Q.depth,0,ct.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,Q.depth,lt,Tt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,dt,ct.width,ct.height,Q.depth,0,lt,Tt,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Bt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,At[0].width,At[0].height);for(let K=0,ut=At.length;K<ut;K++)ct=At[K],_.format!==Ei?lt!==null?It?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,K,dt,ct.width,ct.height,0,ct.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,Tt,ct.data):e.texImage2D(n.TEXTURE_2D,K,dt,ct.width,ct.height,0,lt,Tt,ct.data)}else if(_.isDataArrayTexture)if(It){if(Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,dt,Q.width,Q.height,Q.depth),U)if(_.layerUpdates.size>0){let K=xh(Q.width,Q.height,_.format,_.type);for(let ut of _.layerUpdates){let mt=Q.data.subarray(ut*K/Q.data.BYTES_PER_ELEMENT,(ut+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,lt,Tt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,Tt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,lt,Tt,Q.data);else if(_.isData3DTexture)It?(Bt&&e.texStorage3D(n.TEXTURE_3D,ht,dt,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,lt,Tt,Q.data);else if(_.isFramebufferTexture){if(Bt)if(It)e.texStorage2D(n.TEXTURE_2D,ht,dt,Q.width,Q.height);else{let K=Q.width,ut=Q.height;for(let mt=0;mt<ht;mt++)e.texImage2D(n.TEXTURE_2D,mt,dt,K,ut,0,lt,Tt,null),K>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(_),K.onpaint=ut=>{let mt=ut.changedElements;for(let nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let mt=n.RGBA,nt=n.RGBA,Ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,nt,Ct,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(At.length>0){if(It&&Bt){let K=ge(At[0]);e.texStorage2D(n.TEXTURE_2D,ht,dt,K.width,K.height)}for(let K=0,ut=At.length;K<ut;K++)ct=At[K],It?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,lt,Tt,ct):e.texImage2D(n.TEXTURE_2D,K,dt,lt,Tt,ct);_.generateMipmaps=!1}else if(It){if(Bt){let K=ge(Q);e.texStorage2D(n.TEXTURE_2D,ht,dt,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Tt,Q)}else e.texImage2D(n.TEXTURE_2D,0,dt,lt,Tt,Q);p(_)&&y(G),at.__version=rt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ft(C,_,B){if(_.image.length!==6)return;let G=ue(C,_),$=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let rt=i.get($);if($.version!==rt.__version||G===!0){e.activeTexture(n.TEXTURE0+B);let at=Qt.getPrimaries(Qt.workingColorSpace),J=_.colorSpace===Tn?null:Qt.getPrimaries(_.colorSpace),Q=_.colorSpace===Tn||at===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Tt=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let nt=0;nt<6;nt++)!lt&&!Tt?dt[nt]=g(_.image[nt],!0,s.maxCubemapSize):dt[nt]=Tt?_.image[nt].image:_.image[nt],dt[nt]=ri(_,dt[nt]);let ct=dt[0],At=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Bt=M(_.internalFormat,At,It,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ht=rt.__version===void 0||G===!0,K=$.dataReady,ut=S(_,ct);ne(n.TEXTURE_CUBE_MAP,_);let mt;if(lt){U&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Bt,ct.width,ct.height);for(let nt=0;nt<6;nt++){mt=dt[nt].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){let bt=mt[Ct];_.format!==Ei?At!==null?U?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Bt,bt.width,bt.height,0,bt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,bt.width,bt.height,At,It,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,Bt,bt.width,bt.height,0,At,It,bt.data)}}}else{if(mt=_.mipmaps,U&&ht){mt.length>0&&ut++;let nt=ge(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Bt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt[nt].width,dt[nt].height,At,It,dt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,dt[nt].width,dt[nt].height,0,At,It,dt[nt].data);for(let Ct=0;Ct<mt.length;Ct++){let Se=mt[Ct].image[nt].image;U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,Se.width,Se.height,At,It,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Bt,Se.width,Se.height,0,At,It,Se.data)}}else{U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,It,dt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,At,It,dt[nt]);for(let Ct=0;Ct<mt.length;Ct++){let bt=mt[Ct];U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,At,It,bt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,Bt,At,It,bt.image[nt])}}}p(_)&&y(n.TEXTURE_CUBE_MAP),rt.__version=$.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xt(C,_,B,G,$,rt){let at=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Q=M(B.internalFormat,at,J,B.normalized,B.colorSpace),lt=i.get(_),Tt=i.get(B);if(Tt.__renderTarget=_,!lt.__hasExternalTextures){let dt=Math.max(1,_.width>>rt),ct=Math.max(1,_.height>>rt);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,rt,Q,dt,ct,_.depth,0,at,J,null):e.texImage2D($,rt,Q,dt,ct,0,at,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,$,Tt.__webglTexture,0,Ie(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,$,Tt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(C,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){let G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,rt=w(_.stencilBuffer,$),at=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(_),rt,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,C)}else{let G=_.textures;for(let $=0;$<G.length;$++){let rt=G[$],at=r.convert(rt.format,rt.colorSpace),J=r.convert(rt.type),Q=M(rt.internalFormat,at,J,rt.normalized,rt.colorSpace);Fe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(_),Q,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(_),Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(C,_,B){let G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ne(n.TEXTURE_CUBE_MAP,_.depthTexture);let lt=r.convert(_.depthTexture.format),Tt=r.convert(_.depthTexture.type),dt;_.depthTexture.format===cn?dt=n.DEPTH_COMPONENT24:_.depthTexture.format===Jn&&(dt=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,_.width,_.height,0,lt,Tt,null)}}else it(_.depthTexture,0);let rt=$.__webglTexture,at=Ie(_),J=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=_.depthTexture.format===Jn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===cn)Fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,rt,0);else if(_.depthTexture.format===Jn)Fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(C){let _=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Xe(_.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Xe(_.__webglFramebuffer[0],C,0):Xe(_.__webglFramebuffer,C,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Xt(_.__webglDepthbuffer[G],C,!1);else{let $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,rt)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Xt(_.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(C,_,B){let G=i.get(C);_!==void 0&&xt(G.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Yt(C)}function be(C){let _=C.texture,B=i.get(C),G=i.get(_);C.addEventListener("dispose",v);let $=C.textures,rt=C.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,o.memory.textures++),rt){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(at)for(let J=0,Q=$.length;J<Q;J++){let lt=i.get($[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Fe(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let Q=$[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let lt=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),dt=M(Q.internalFormat,lt,Tt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ct=Ie(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ne(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)xt(B.__webglFramebuffer[J][Q],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else xt(B.__webglFramebuffer[J],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let J=0,Q=$.length;J<Q;J++){let lt=$[J],Tt=i.get(lt),dt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Tt.__webglTexture),ne(dt,lt),xt(B.__webglFramebuffer,C,lt,n.COLOR_ATTACHMENT0+J,dt,0),p(lt)&&y(dt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),ne(J,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)xt(B.__webglFramebuffer[Q],C,_,n.COLOR_ATTACHMENT0,J,Q);else xt(B.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,J,0);p(_)&&y(J),e.unbindTexture()}C.depthBuffer&&Yt(C)}function jt(C){let _=C.textures;for(let B=0,G=_.length;B<G;B++){let $=_[B];if(p($)){let rt=E(C),at=i.get($).__webglTexture;e.bindTexture(rt,at),y(rt),e.unbindTexture()}}}let Ce=[],je=[];function Mi(C){if(C.samples>0){if(Fe(C)===!1){let _=C.textures,B=C.width,G=C.height,$=n.COLOR_BUFFER_BIT,rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(C),J=_.length>1;if(J)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Tt=i.get(_[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,$,n.NEAREST),l===!0&&(Ce.length=0,je.length=0,Ce.push(n.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ce.push(rt),je.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Tt=i.get(_[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ie(C){return Math.min(s.maxSamples,C.samples)}function Fe(C){let _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function ri(C,_){let B=C.colorSpace,G=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Pr&&B!==Tn&&(Qt.getTransfer(B)===pe?(G!==Ei||$!==wi)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",B)),_}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=it,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=ae,this.setupRenderTarget=be,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Mi,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function T_(n,t){function e(i,s=Tn){let r,o=Qt.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nh)return n.BYTE;if(i===sh)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===Ua)return n.INT;if(i===nn)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===sn)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===lh)return n.RGB;if(i===Ei)return n.RGBA;if(i===cn)return n.DEPTH_COMPONENT;if(i===Jn)return n.DEPTH_STENCIL;if(i===Ba)return n.RED;if(i===za)return n.RED_INTEGER;if(i===Kn)return n.RG;if(i===ka)return n.RG_INTEGER;if(i===Ha)return n.RGBA_INTEGER;if(i===io||i===no||i===so||i===ro)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Va||i===Ga||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===$a||i===Za||i===Ja||i===oo||i===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===Ya)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Za)return r.COMPRESSED_R11_EAC;if(i===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return r.COMPRESSED_RG11_EAC;if(i===Ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===Qa||i===tl||i===el||i===il||i===nl||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===fl||i===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===gl||i===ao||i===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ye({vertexShader:A_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends hn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Fh,p={},y=e.getContextAttributes(),E=null,M=null,w=[],S=[],A=new Lt,v=null,T=null,I=new qe;I.viewport=new Re;let N=new qe;N.viewport=new Re;let O=[I,N],V=new Ra,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Ks,w[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Ks,w[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Ks,w[Z]=tt),tt.getHandSpace()};function q(Z){let tt=S.indexOf(Z.inputSource);if(tt===-1)return;let vt=w[tt];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<w.length;Z++){let tt=S[Z];tt!==null&&(S[Z]=null,w[Z].disconnect(tt))}L=null,H=null,g.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,M=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ft=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?Jn:cn,Ft=y.stencil?lr:nn);let Xt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ci(u.textureWidth,u.textureHeight,{format:Ei,type:wi,depthTexture:new Hn(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ci(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(Z){for(let tt=0;tt<Z.removed.length;tt++){let vt=Z.removed[tt],Ft=S.indexOf(vt);Ft>=0&&(S[Ft]=null,w[Ft].disconnect(vt))}for(let tt=0;tt<Z.added.length;tt++){let vt=Z.added[tt],Ft=S.indexOf(vt);if(Ft===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=S.length){S.push(vt),Ft=Xt;break}else if(S[Xt]===null){S[Xt]=vt,Ft=Xt;break}if(Ft===-1)break}let xt=w[Ft];xt&&xt.connect(vt)}}let X=new R,j=new R;function et(Z,tt,vt){X.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Ft=X.distanceTo(j),xt=tt.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,Xe=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),ae=(xt[9]+1)/xt[5],be=(xt[9]-1)/xt[5],jt=(xt[8]-1)/xt[0],Ce=(Xt[8]+1)/Xt[0],je=Xe*jt,Mi=Xe*Ce,Ie=Ft/(-jt+Ce),Fe=Ie*-jt;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Fe),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=Xe+Ie,ri=Yt+Ie,ge=je-Fe,C=Mi+(Ft-Fe),_=ae*Yt/ri*F,B=be*Yt/ri*F;Z.projectionMatrix.makePerspective(ge,C,_,B,F,ri),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function wt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,vt=Z.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),V.near=N.near=I.near=tt,V.far=N.far=I.far=vt,(L!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,H=V.far),V.layers.mask=Z.layers.mask|6,I.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ft=Z.parent,xt=V.cameras;wt(V,Ft);for(let Xt=0;Xt<xt.length;Xt++)wt(xt[Xt],Ft);xt.length===2?et(V,I,N):V.projectionMatrix.copy(I.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Et(Z,V,Ft)};function Et(Z,tt,vt){vt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$s*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Z){return p[Z]};let me=null;function ne(Z,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ft=!1;vt.length!==V.cameras.length&&(V.cameras.length=0,Ft=!0);for(let Yt=0;Yt<vt.length;Yt++){let ae=vt[Yt],be=null;if(f!==null)be=f.getViewport(ae);else{let Ce=d.getViewSubImage(u,ae);be=Ce.viewport,Yt===0&&(t.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(M))}let jt=O[Yt];jt===void 0&&(jt=new qe,jt.layers.enable(Yt),jt.viewport=new Re,O[Yt]=jt),jt.matrix.fromArray(ae.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(ae.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(be.x,be.y,be.width,be.height),Yt===0&&(V.matrix.copy(jt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ft===!0&&V.cameras.push(jt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Yt=d.getDepthInformation(vt[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Yt=0;Yt<vt.length;Yt++){let ae=vt[Yt].camera;if(ae){let be=p[ae];be||(be=new Wr,p[ae]=be);let jt=d.getCameraImage(ae);be.sourceTexture=jt}}}}for(let vt=0;vt<w.length;vt++){let Ft=S[vt],xt=w[vt];Ft!==null&&xt!==void 0&&xt.update(Ft,tt,c||o)}me&&me(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}let ue=new $d;ue.setAnimationLoop(ne),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}},R_=new Zt,tf=new Ut;tf.set(-1,0,0,0,1,0,0,0,1);function I_(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ph(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ni&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ni&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,M=y.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let S=w.program;i.uniformBlockBinding(M,S)}function c(M,w){let S=s[M.id];S===void 0&&(g(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",y));let A=w.program;i.updateUBOMapping(M,A);let v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let w=d();M.__bindingPointIndex=w;let S=n.createBuffer(),A=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,T=S.length;v<T;v++){let I=S[v];if(Array.isArray(I))for(let N=0,O=I.length;N<O;N++)f(I[N],v,N,A);else f(I,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,S,A){if(x(M,w,S,A)===!0){let v=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let N=0;N<T.length;N++){let O=T[N],V=p(O);m(O,M.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function m(M,w,S){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,S)}function x(M,w,S,A){let v=M.value,T=w+"_"+S;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let I=A[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(M){let w=M.uniforms,S=0,A=16;for(let T=0,I=w.length;T<I;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,V=N.length;O<V;O++){let L=N[O],H=Array.isArray(L.value)?L.value:[L.value];for(let q=0,Y=H.length;q<Y;q++){let it=H[q],X=p(it),j=S%A,et=j%X.boundary,wt=j+et;S+=et,wt!==0&&A-wt<X.storage&&(S+=A-wt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=X.storage}}}let v=S%A;return v>0&&(S+=A-v),M.__size=S,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){let w=M.target;w.removeEventListener("dispose",y);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pn=null;function D_(){return pn===null&&(pn=new cs(L_,16,16,Kn,sn),pn.name="DFG_LUT",pn.minFilter=ze,pn.magFilter=ze,pn.wrapS=Fi,pn.wrapT=Fi,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}var El=class{constructor(t={}){let{canvas:e=vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wi}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Ha,ka,za]),p=new Set([wi,nn,ar,lr,Fa,Oa]),y=new Uint32Array(4),E=new Int32Array(4),M=new R,w=null,S=null,A=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,V=null,L=null,H=null;this._outputColorSpace=pi;let q=0,Y=0,it=null,X=-1,j=null,et=new Re,wt=new Re,Et=null,me=new st(0),ne=0,ue=e.width,Z=e.height,tt=1,vt=null,Ft=null,xt=new Re(0,0,ue,Z),Xt=new Re(0,0,ue,Z),Xe=!1,Yt=new er,ae=!1,be=!1,jt=new Zt,Ce=new R,je=new Re,Mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Fe(){return it===null?tt:1}let F=i;function ri(b,D){return e.getContext(b,D)}let ge,C,_,B,G,$,rt,at,J,Q,lt,Tt,dt,ct,At,It,Bt,U,ht,K,ut,mt,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Wi,!1),F===null){let D="webgl2";if(F=ri(D,b),F===null)throw ri(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(b){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Wi,!1),Pt("WebGLRenderer: "+b.message),b}function Ct(){ge=new kg(F),ge.init(),ut=new T_(F,ge),C=new Ig(F,ge,t,ut),_=new w_(F,ge),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=F.createFramebuffer(),L=F.createFramebuffer(),H=F.createFramebuffer(),B=new Gg(F),G=new h_,$=new E_(F,ge,_,G,C,ut,B),rt=new zg(I),at=new Xp(F),mt=new Cg(F,at),J=new Hg(F,at,B,mt),Q=new Xg(F,J,at,mt,B),U=new Wg(F,C,$),At=new Pg(G),lt=new c_(I,rt,ge,C,mt,At),Tt=new I_(I,G),dt=new d_,ct=new __(ge),Bt=new Ag(I,rt,_,Q,m,l),It=new S_(I,Q,C),nt=new P_(F,B,C,_),ht=new Rg(F,ge,B),K=new Vg(F,ge,B),B.programs=lt.programs,I.capabilities=C,I.extensions=ge,I.properties=G,I.renderLists=dt,I.shadowMap=It,I.state=_,I.info=B}x!==wi&&(T=new Yg(x,e.width,e.height,a,s,r));let bt=new Oh(I,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(ue,Z,!1))},this.getSize=function(b){return b.set(ue,Z)},this.setSize=function(b,D,W=!0){if(bt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=b,Z=D,e.width=Math.floor(b*tt),e.height=Math.floor(D*tt),W===!0&&(e.style.width=b+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ue*tt,Z*tt).floor()},this.setDrawingBufferSize=function(b,D,W){ue=b,Z=D,tt=W,e.width=Math.floor(b*W),e.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===wi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,D,W,z){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,D,W,z),_.viewport(et.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,D,W,z){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,D,W,z),_.scissor(wt.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){_.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,W=!0){let z=0;if(b){let k=!1;if(it!==null){let pt=it.texture.format;k=g.has(pt)}if(k){let pt=it.texture.type,_t=p.has(pt),ft=Bt.getClearColor(),yt=Bt.getClearAlpha(),St=ft.r,zt=ft.g,$t=ft.b;_t?(y[0]=St,y[1]=zt,y[2]=$t,y[3]=yt,F.clearBufferuiv(F.COLOR,0,y)):(E[0]=St,E[1]=zt,E[2]=$t,E[3]=yt,F.clearBufferiv(F.COLOR,0,E))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Wi,!1),Bt.dispose(),dt.dispose(),ct.dispose(),G.dispose(),rt.dispose(),Q.dispose(),mt.dispose(),nt.dispose(),lt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Kh),bt.removeEventListener("sessionend",jh),es.stop()};function Se(b){b.preventDefault(),Nr("WebGLRenderer: Context Lost."),N=!0}function de(){Nr("WebGLRenderer: Context Restored."),N=!1;let b=B.autoReset,D=It.enabled,W=It.autoUpdate,z=It.needsUpdate,k=It.type;Ct(),B.autoReset=b,It.enabled=D,It.autoUpdate=W,It.needsUpdate=z,It.type=k}function Wi(b){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function on(b){let D=b.target;D.removeEventListener("dispose",on),Bf(D)}function Bf(b){zf(b),G.remove(b)}function zf(b){let D=G.get(b).programs;D!==void 0&&(D.forEach(function(W){lt.releaseProgram(W)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,z,k,pt){D===null&&(D=Mi);let _t=k.isMesh&&k.matrixWorld.determinantAffine()<0,ft=Vf(b,D,W,z,k);_.setMaterial(z,_t);let yt=W.index,St=1;if(z.wireframe===!0){if(yt=J.getWireframeAttribute(W),yt===void 0)return;St=2}let zt=W.drawRange,$t=W.attributes.position,Mt=zt.start*St,fe=(zt.start+zt.count)*St;pt!==null&&(Mt=Math.max(Mt,pt.start*St),fe=Math.min(fe,(pt.start+pt.count)*St)),yt!==null?(Mt=Math.max(Mt,0),fe=Math.min(fe,yt.count)):$t!=null&&(Mt=Math.max(Mt,0),fe=Math.min(fe,$t.count));let Oe=fe-Mt;if(Oe<0||Oe===1/0)return;mt.setup(k,z,ft,W,yt);let Te,Me=ht;if(yt!==null&&(Te=at.get(yt),Me=K,Me.setIndex(Te)),k.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Fe()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(k.isLine){let oi=z.linewidth;oi===void 0&&(oi=1),_.setLineWidth(oi*Fe()),k.isLineSegments?Me.setMode(F.LINES):k.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else k.isPoints?Me.setMode(F.POINTS):k.isSprite&&Me.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let oi=k._multiDrawStarts,gt=k._multiDrawCounts,di=k._multiDrawCount,re=yt?at.get(yt).bytesPerElement:1,Ni=G.get(z).currentProgram.getUniforms();for(let an=0;an<di;an++)Ni.setValue(F,"_gl_DrawID",an),Me.render(oi[an]/re,gt[an])}else if(k.isInstancedMesh)Me.renderInstances(Mt,Oe,k.count);else if(W.isInstancedBufferGeometry){let oi=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gt=Math.min(W.instanceCount,oi);Me.renderInstances(Mt,Oe,gt)}else Me.render(Mt,Oe)};function Jh(b,D,W,z){O!==null&&b.isNodeMaterial&&O.setObject(z,b),ae===!0&&At.setState(b,W,!1),b.transparent===!0&&b.side===Bi&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,Mo(b,D,z),b.side=qn,b.needsUpdate=!0,Mo(b,D,z),b.side=Bi):Mo(b,D,z)}this.compile=function(b,D,W=null){W===null&&(W=b),O!==null&&O.renderStart(b,D,W),S=ct.get(W),S.init(D),v.push(S),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),be=this.localClippingEnabled,ae=At.init(this.clippingPlanes,be),ae===!0&&At.setGlobalState(this.clippingPlanes,D),O!==null&&It.render(S.state.shadowsArray,W,D);let z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){let ft=pt[_t];Jh(ft,W,D,k),z.add(ft)}else Jh(pt,W,D,k),z.add(pt)}),S=v.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(b,D,W=null){let z=this.compile(b,D,W);return new Promise(k=>{function pt(){if(z.forEach(function(_t){let yt=G.get(_t).currentProgram;(yt===void 0||yt.isReady())&&z.delete(_t)}),z.size===0){k(b);return}setTimeout(pt,10)}ge.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let cc=null;function kf(b){cc&&cc(b)}function Kh(){es.stop()}function jh(){es.start()}let es=new $d;es.setAnimationLoop(kf),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(b){cc=b,bt.setAnimationLoop(b),b===null?es.stop():es.start()},bt.addEventListener("sessionstart",Kh),bt.addEventListener("sessionend",jh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(b,D);let W=bt.enabled===!0&&bt.isPresenting===!0,z=T!==null&&(it===null||W)&&T.begin(I,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,D,it),S=ct.get(b,v.length),S.init(D),S.state.textureUnits=$.getTextureUnits(),v.push(S),jt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Yt.setFromProjectionMatrix(jt,Ji,D.reversedDepth),be=this.localClippingEnabled,ae=At.init(this.clippingPlanes,be),w=dt.get(b,A.length),w.init(),A.push(w),bt.enabled===!0&&bt.isPresenting===!0){let _t=I.xr.getDepthSensingMesh();_t!==null&&hc(_t,D,-1/0,I.sortObjects)}hc(b,D,0,I.sortObjects),w.finish(),O!==null&&O.updateLights(S.state.lightsArray),I.sortObjects===!0&&w.sort(vt,Ft),Ie=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ie&&Bt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&At.beginShadows();let k=S.state.shadowsArray;if(It.render(k,b,D),ae===!0&&At.endShadows(),(z&&T.hasRenderPass())===!1){let _t=w.opaque,ft=w.transmissive;if(S.setupLights(),D.isArrayCamera){let yt=D.cameras;if(ft.length>0)for(let St=0,zt=yt.length;St<zt;St++){let $t=yt[St];tu(_t,ft,b,$t)}Ie&&Bt.render(b);for(let St=0,zt=yt.length;St<zt;St++){let $t=yt[St];Qh(w,b,$t,$t.viewport)}}else ft.length>0&&tu(_t,ft,b,D),Ie&&Bt.render(b),Qh(w,b,D)}it!==null&&Y===0&&($.updateMultisampleRenderTarget(it),$.updateRenderTargetMipmap(it)),z&&T.end(I),b.isScene===!0&&b.onAfterRender(I,b,D),mt.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(S=v[v.length-1],$.setTextureUnits(S.state.textureUnits),ae===!0&&At.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,O!==null&&O.renderEnd()};function hc(b,D,W,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Yt)){z&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);let _t=Q.update(b),ft=b.material;ft.visible&&w.push(b,_t,ft,W,je.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Yt))){let _t=Q.update(b),ft=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),je.copy(_t.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(ft)){let yt=_t.groups;for(let St=0,zt=yt.length;St<zt;St++){let $t=yt[St],Mt=ft[$t.materialIndex];Mt&&Mt.visible&&w.push(b,_t,Mt,W,je.z,$t,D)}}else ft.visible&&w.push(b,_t,ft,W,je.z,null,D)}}let pt=b.children;for(let _t=0,ft=pt.length;_t<ft;_t++)hc(pt[_t],D,W,z)}function Qh(b,D,W,z){let{opaque:k,transmissive:pt,transparent:_t}=b;S.setupLightsView(W),ae===!0&&At.setGlobalState(I.clippingPlanes,W),z&&_.viewport(et.copy(z)),k.length>0&&yo(k,D,W),pt.length>0&&yo(pt,D,W),_t.length>0&&yo(_t,D,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function tu(b,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let Mt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new ci(1,1,{generateMipmaps:!0,type:Mt?sn:wi,minFilter:Zn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let pt=S.state.transmissionRenderTarget[z.id],_t=z.viewport||et;pt.setSize(_t.z*I.transmissionResolutionScale,_t.w*I.transmissionResolutionScale);let ft=I.getRenderTarget(),yt=I.getActiveCubeFace(),St=I.getActiveMipmapLevel();I.setRenderTarget(pt),I.getClearColor(me),ne=I.getClearAlpha(),ne<1&&I.setClearColor(16777215,.5),I.clear(),Ie&&Bt.render(W);let zt=I.toneMapping;I.toneMapping=en;let $t=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),ae===!0&&At.setGlobalState(I.clippingPlanes,z),yo(b,W,z),$.updateMultisampleRenderTarget(pt),$.updateRenderTargetMipmap(pt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let fe=0,Oe=D.length;fe<Oe;fe++){let Te=D[fe],{object:Me,geometry:oi,material:gt,group:di}=Te;if(gt.side===Bi&&Me.layers.test(z.layers)){let re=gt.side;gt.side=ni,gt.needsUpdate=!0,eu(Me,W,z,oi,gt,di),gt.side=re,gt.needsUpdate=!0,Mt=!0}}Mt===!0&&($.updateMultisampleRenderTarget(pt),$.updateRenderTargetMipmap(pt))}I.setRenderTarget(ft,yt,St),I.setClearColor(me,ne),$t!==void 0&&(z.viewport=$t),I.toneMapping=zt}function yo(b,D,W){let z=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pt=b.length;k<pt;k++){let _t=b[k],{object:ft,geometry:yt,group:St}=_t,zt=_t.material;zt.allowOverride===!0&&z!==null&&(zt=z),ft.layers.test(W.layers)&&eu(ft,D,W,yt,zt,St)}}function eu(b,D,W,z,k,pt){O!==null&&k.isNodeMaterial&&O.setObject(b,k),b.onBeforeRender(I,D,W,z,k,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(I,D,W,z,b,pt),k.transparent===!0&&k.side===Bi&&k.forceSinglePass===!1?(k.side=ni,k.needsUpdate=!0,I.renderBufferDirect(W,D,z,k,b,pt),k.side=qn,k.needsUpdate=!0,I.renderBufferDirect(W,D,z,k,b,pt),k.side=Bi):I.renderBufferDirect(W,D,z,k,b,pt),b.onAfterRender(I,D,W,z,k,pt)}function Mo(b,D,W){D.isScene!==!0&&(D=Mi);let z=G.get(b),k=S.state.lights,pt=S.state.shadowsArray,_t=k.state.version,ft=lt.getParameters(b,k.state,pt,D,W,S.state.lightProbeGridArray),yt=lt.getProgramCacheKey(ft),St=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=rt.get(b.envMap||z.environment,zt),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,St===void 0&&(b.addEventListener("dispose",on),St=new Map,z.programs=St);let $t=St.get(yt);if($t!==void 0){if(z.currentProgram===$t&&z.lightsStateVersion===_t)return nu(b,ft),$t}else ft.uniforms=lt.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,W,ft),b.onBeforeCompile(ft,I),$t=lt.acquireProgram(ft,yt),St.set(yt,$t),z.uniforms=ft.uniforms;let Mt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=At.uniform),nu(b,ft),z.needsLights=Wf(b),z.lightsStateVersion=_t,z.needsLights&&(Mt.ambientLightColor.value=k.state.ambient,Mt.lightProbe.value=k.state.probe,Mt.sunLights.value=k.state.sun,Mt.sunLightShadows.value=k.state.sunShadow,Mt.directionalLights.value=k.state.directional,Mt.directionalLightShadows.value=k.state.directionalShadow,Mt.spotLights.value=k.state.spot,Mt.spotLightShadows.value=k.state.spotShadow,Mt.rectAreaLights.value=k.state.rectArea,Mt.ltc_1.value=k.state.rectAreaLTC1,Mt.ltc_2.value=k.state.rectAreaLTC2,Mt.pointLights.value=k.state.point,Mt.pointLightShadows.value=k.state.pointShadow,Mt.hemisphereLights.value=k.state.hemi,Mt.sunShadowMatrix.value=k.state.sunShadowMatrix,Mt.sunShadowCascade.value=k.state.sunShadowCascade,Mt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Mt.spotLightMatrix.value=k.state.spotLightMatrix,Mt.spotLightMap.value=k.state.spotLightMap,Mt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=$t,z.uniformsList=null,$t}function iu(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function nu(b,D){let W=G.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Hf(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=b.length;W<z;W++){let k=b[W];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Vf(b,D,W,z,k){D.isScene!==!0&&(D=Mi),$.resetTextureUnits();let pt=D.fog,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ft=it===null?I.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Qt.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,St=rt.get(z.envMap||_t,yt),zt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$t=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,Oe=!!W.morphAttributes.color,Te=en;z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Te=I.toneMapping);let Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oi=Me!==void 0?Me.length:0,gt=G.get(z),di=S.state.lights;if(ae===!0&&(be===!0||b!==j)){let we=b===j&&z.id===X;At.setState(z,b,we)}let re=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==di.state.version||gt.outputColorSpace!==ft||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==St||z.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==At.numPlanes||gt.numIntersection!==At.numIntersection)||gt.vertexAlphas!==zt||gt.vertexTangents!==$t||gt.morphTargets!==Mt||gt.morphNormals!==fe||gt.morphColors!==Oe||gt.toneMapping!==Te||gt.morphTargetsCount!==oi||!!gt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,gt.__version=z.version);let Ni=gt.currentProgram;re===!0&&(Ni=Mo(z,D,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Ni,gt));let an=!1,Dn=!1,ws=!1,ve=Ni.getUniforms(),De=gt.uniforms;if(_.useProgram(Ni.program)&&(an=!0,Dn=!0,ws=!0),z.id!==X&&(X=z.id,Dn=!0),gt.needsLights){let we=Hf(S.state.lightProbeGridArray,k);gt.lightProbeGrid!==we&&(gt.lightProbeGrid=we,Dn=!0)}if(an||j!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(F,"projectionMatrix",b.projectionMatrix),ve.setValue(F,"viewMatrix",b.matrixWorldInverse);let Un=ve.map.cameraPosition;Un!==void 0&&Un.setValue(F,Ce.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Dn=!0,ws=!0)}if(gt.needsLights&&(di.state.sunShadowMap.length>0&&ve.setValue(F,"sunShadowMap",di.state.sunShadowMap,$),di.state.directionalShadowMap.length>0&&ve.setValue(F,"directionalShadowMap",di.state.directionalShadowMap,$),di.state.spotShadowMap.length>0&&ve.setValue(F,"spotShadowMap",di.state.spotShadowMap,$),di.state.pointShadowMap.length>0&&ve.setValue(F,"pointShadowMap",di.state.pointShadowMap,$)),k.isSkinnedMesh){ve.setOptional(F,k,"bindMatrix"),ve.setOptional(F,k,"bindMatrixInverse");let we=k.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ve.setValue(F,"boneTexture",we.boneTexture,$))}k.isBatchedMesh&&(ve.setOptional(F,k,"batchingTexture"),ve.setValue(F,"batchingTexture",k._matricesTexture,$),ve.setOptional(F,k,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",k._indirectTexture,$),ve.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",k._colorsTexture,$));let Nn=W.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&U.update(k,W,Ni),(Dn||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,ve.setValue(F,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=D_()),Dn){if(ve.setValue(F,"toneMappingExposure",I.toneMappingExposure),gt.needsLights&&Gf(De,ws),pt&&z.fog===!0&&Tt.refreshFogUniforms(De,pt),Tt.refreshMaterialUniforms(De,z,tt,Z,S.state.transmissionRenderTarget[b.id]),gt.needsLights&&gt.lightProbeGrid){let we=gt.lightProbeGrid;De.probesSH.value=we.texture,De.probesMin.value.copy(we.boundingBox.min),De.probesMax.value.copy(we.boundingBox.max),De.probesResolution.value.copy(we.resolution)}dr.upload(F,iu(gt),De,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(dr.upload(F,iu(gt),De,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(F,"center",k.center),ve.setValue(F,"modelViewMatrix",k.modelViewMatrix),ve.setValue(F,"normalMatrix",k.normalMatrix),ve.setValue(F,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let we=z.uniformsGroups;for(let Un=0,Es=we.length;Un<Es;Un++){let ru=we[Un];nt.update(ru,Ni),nt.bind(ru,Ni)}}return Ni}function Gf(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Wf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,D,W){let z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let W=G.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){it=b,q=D,Y=W;let z=null,k=!1,pt=!1;if(b){let ft=G.get(b);if(ft.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(b.viewport),wt.copy(b.scissor),Et=b.scissorTest,_.viewport(et),_.scissor(wt),_.setScissorTest(Et),X=-1;return}else if(ft.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(ft.__hasExternalTextures)$.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let zt=b.depthTexture;if(ft.__boundDepthTexture!==zt){if(zt!==null&&G.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let yt=b.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);let St=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(St[D])?z=St[D][W]:z=St[D],k=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(St)?z=St[W]:z=St,et.copy(b.viewport),wt.copy(b.scissor),Et=b.scissorTest}else et.copy(xt).multiplyScalar(tt).floor(),wt.copy(Xt).multiplyScalar(tt).floor(),Et=Xe;if(W!==0&&(z=V),_.bindFramebuffer(F.FRAMEBUFFER,z)&&_.drawBuffers(b,z),_.viewport(et),_.scissor(wt),_.setScissorTest(Et),k){let ft=G.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,W)}else if(pt){let ft=D;for(let yt=0;yt<b.textures.length;yt++){let St=G.get(b.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,St.__webglTexture,W,ft)}}else if(b!==null&&W!==0){let ft=G.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,W)}X=-1};function su(b){let D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=C.textureFormatReadable(b.format),D.__typeReadable=C.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,W,z,k,pt,_t,ft=0){if(!(b&&b.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){_.bindFramebuffer(F.FRAMEBUFFER,yt);try{let St=b.textures[ft],zt=St.format,$t=St.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Mt=su(St);if(Mt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&W>=0&&W<=b.height-k&&F.readPixels(D,W,z,k,ut.convert(zt),ut.convert($t),pt)}finally{let St=it!==null?G.get(it).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,z,k,pt,_t,ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(D>=0&&D<=b.width-z&&W>=0&&W<=b.height-k){_.bindFramebuffer(F.FRAMEBUFFER,yt);let St=b.textures[ft],zt=St.format,$t=St.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Mt=su(St);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(D,W,z,k,ut.convert(zt),ut.convert($t),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Oe=it!==null?G.get(it).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Oe);let Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Md(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(fe),F.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,W=0){let z=Math.pow(2,-W),k=Math.floor(b.image.width*z),pt=Math.floor(b.image.height*z),_t=D!==null?D.x:0,ft=D!==null?D.y:0;$.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,_t,ft,k,pt),_.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,z=null,k=0,pt=0){let _t,ft,yt,St,zt,$t,Mt,fe,Oe,Te=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(W!==null)_t=W.max.x-W.min.x,ft=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,zt=W.min.y,$t=W.isBox3?W.min.z:0;else{let De=Math.pow(2,-k);_t=Math.floor(Te.width*De),ft=Math.floor(Te.height*De),b.isDataArrayTexture?yt=Te.depth:b.isData3DTexture?yt=Math.floor(Te.depth*De):yt=1,St=0,zt=0,$t=0}z!==null?(Mt=z.x,fe=z.y,Oe=z.z):(Mt=0,fe=0,Oe=0);let Me=ut.convert(D.format),oi=ut.convert(D.type),gt;D.isData3DTexture?($.setTexture3D(D,0),gt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?($.setTexture2DArray(D,0),gt=F.TEXTURE_2D_ARRAY):($.setTexture2D(D,0),gt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let di=_.getParameter(F.UNPACK_ROW_LENGTH),re=_.getParameter(F.UNPACK_IMAGE_HEIGHT),Ni=_.getParameter(F.UNPACK_SKIP_PIXELS),an=_.getParameter(F.UNPACK_SKIP_ROWS),Dn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,St),_.pixelStorei(F.UNPACK_SKIP_ROWS,zt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);let ws=b.isDataArrayTexture||b.isData3DTexture,ve=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let De=G.get(b),Nn=G.get(D),we=G.get(De.__renderTarget),Un=G.get(Nn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,we.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Es=0;Es<yt;Es++)ws&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(b).__webglTexture,k,$t+Es),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(D).__webglTexture,pt,Oe+Es)),F.blitFramebuffer(St,zt,_t,ft,Mt,fe,_t,ft,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||G.has(b)){let De=G.get(b),Nn=G.get(D);_.bindFramebuffer(F.READ_FRAMEBUFFER,L),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let we=0;we<yt;we++)ws?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,k,$t+we):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,De.__webglTexture,k),ve?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nn.__webglTexture,pt,Oe+we):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nn.__webglTexture,pt),k!==0?F.blitFramebuffer(St,zt,_t,ft,Mt,fe,_t,ft,F.COLOR_BUFFER_BIT,F.NEAREST):ve?F.copyTexSubImage3D(gt,pt,Mt,fe,Oe+we,St,zt,_t,ft):F.copyTexSubImage2D(gt,pt,Mt,fe,St,zt,_t,ft);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(gt,pt,Mt,fe,Oe,_t,ft,yt,Me,oi,Te.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,pt,Mt,fe,Oe,_t,ft,yt,Me,Te.data):F.texSubImage3D(gt,pt,Mt,fe,Oe,_t,ft,yt,Me,oi,Te):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,Mt,fe,_t,ft,Me,oi,Te.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,Mt,fe,Te.width,Te.height,Me,Te.data):F.texSubImage2D(F.TEXTURE_2D,pt,Mt,fe,_t,ft,Me,oi,Te);_.pixelStorei(F.UNPACK_ROW_LENGTH,di),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Ni),_.pixelStorei(F.UNPACK_SKIP_ROWS,an),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Dn),pt===0&&D.generateMipmaps&&F.generateMipmap(gt),_.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){q=0,Y=0,it=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};function ef(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Cl(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}function ys(n,t,e=1){let i=Math.floor(n),s=Math.floor(t),r=n-i,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Cl(i,s,e),h=Cl(i+1,s,e),d=Cl(i,s+1,e),u=Cl(i+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function ki(n,t,e=4,i=1){let s=.5,r=1,o=0,a=0;for(let l=0;l<e;l++)o+=s*ys(n*r,t*r,i+l*17),a+=s,s*=.5,r*=2.03;return o/a}var Ot=(n,t,e)=>n<t?t:n>e?e:n,ee=(n,t,e)=>n+(t-n)*e;function ce(n,t,e){let i=Ot((e-n)/(t-n),0,1);return i*i*(3-2*i)}function An(n,t,e,i){return ee(n,t,1-Math.exp(-e*i))}function Bh(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function jn(n,t,e,i){return n+Bh(n,t)*(1-Math.exp(-e*i))}var Vt={size:200,half:100,cells:256},Ve=-.45,nf=-1.3,Dt={x:-6,z:22,h:1.4,r:12},Ne={x:20,z:-6,r:17},rn={x:-58,z:-30,r:26};function Rl(n){return 44+13*Math.sin(n*.04+.6)+5*Math.sin(n*.11+2)}function sf(n){return ce(-78,-55,n)}var rf=[[[-6,22],[-16,16],[-28,10],[-38,6],[-50,-6],[-58,-16]],[[-6,22],[4,14],[14,8],[22,6],[30,8],[40,10],[52,8]],[[-6,22],[-4,6],[-2,-8],[-6,-22],[-12,-38],[-18,-52],[-22,-62]],[[-6,22],[-2,36],[6,50],[20,60],[34,70]]],Cn=[{name:"Fourr\xE9 ouest",x:-64,z:-6,r:9},{name:"Lisi\xE8re des rochers",x:-44,z:-46,r:8},{name:"Bois de l'est",x:72,z:-34,r:9},{name:"Vallon sud",x:62,z:56,r:9}],uo={x:-33,z:8},Ms=[{x:-52,z:-56,r:12},{x:-18,z:-66,r:12},{x:12,z:-72,r:12}],of=[{id:"camp",name:"Camp",x:Dt.x,z:Dt.z,always:!0,icon:"camp"},{id:"river",name:"Rivi\xE8re",x:46,z:24,icon:"water"},{id:"meadow",name:"Clairi\xE8re des bisons",x:Ne.x,z:Ne.z,icon:"bison"},{id:"rocks",name:"Zone rocheuse",x:rn.x,z:rn.z,icon:"rock"},{id:"mountain",name:"Montagne",x:-14,z:-68,icon:"mountain"},{id:"ibex",name:"Cr\xEAte des bouquetins",x:-18,z:-66,icon:"ibex"},{id:"forest",name:"For\xEAt profonde",x:-42,z:22,icon:"tree"}];var Ge=Vt.cells,zh=Vt.size,Il=Vt.half,Pl=zh/Ge;function af(n,t,e,i){return 1-Math.abs(2*ki(n,t,e,i)-1)}function N_(n,t){let e=1.4+(ki(n*.02+10,t*.02+3,4,3)-.5)*9;e+=(ki(n*.09,t*.09,2,9)-.5)*1.1;let i=ce(-28,-88,t),s=af(n*.024+50,t*.024+20,4,11);e+=i*(9+s*27)+ce(-50,-80,t)*ki(n*.06,t*.06,3,5)*6;let r=Math.hypot(n-rn.x,t-rn.z),o=1-ce(rn.r*.35,rn.r*1.3,r);e+=o*(2+af(n*.07,t*.07,3,21)*9);let a=ce(70,100,Math.max(Math.abs(n),Math.abs(t)));e+=a*a*22,e<.7&&(e=.7+(e-.7)*.15);let l=Math.hypot(n-Dt.x,t-Dt.z);e=ee(e,Dt.h,1-ce(Dt.r-1,Dt.r+9,l));let c=sf(t);if(c>0){let h=Math.abs(n-Rl(t)),d=3.2+1.2*Math.sin(t*.09),u=(1-ce(d,d*2.6+2,h))*c,f=nf+(1-ce(0,d,h))*-.1+ys(n*.3,t*.3,4)*.25;e=ee(e,Math.min(e,f+ce(d*.7,d*2,h)*2.4),u)}return e}var lf=[];for(let n of rf)for(let t=0;t<n.length-1;t++)lf.push([n[t][0],n[t][1],n[t+1][0],n[t+1][1]]);function fo(n,t){let e=1e9;for(let i of lf){let s=i[2]-i[0],r=i[3]-i[1],o=Ot(((n-i[0])*s+(t-i[1])*r)/(s*s+r*r),0,1),a=Math.hypot(n-(i[0]+s*o),t-(i[1]+r*o));a<e&&(e=a)}return e+(ys(n*.25,t*.25,8)-.5)*1.2}var Ll=class{constructor(){this.heights=new Float32Array((Ge+1)*(Ge+1));for(let t=0;t<=Ge;t++)for(let e=0;e<=Ge;e++)this.heights[t*(Ge+1)+e]=N_(-Il+e*Pl,-Il+t*Pl);this.mesh=this._buildMesh(),this.depthTexture=this._buildDepthTexture()}heightAt(t,e){let i=(t+Il)/Pl,s=(e+Il)/Pl,r=Math.floor(i),o=Math.floor(s);r<0?r=0:r>Ge-1&&(r=Ge-1),o<0?o=0:o>Ge-1&&(o=Ge-1);let a=Ot(i-r,0,1),l=Ot(s-o,0,1),c=Ge+1,h=this.heights,d=h[o*c+r],u=h[o*c+r+1],f=h[(o+1)*c+r],m=h[(o+1)*c+r+1];return d+(u-d)*a+(f-d)*l+(d-u-f+m)*a*l}slopeAt(t,e){let s=this.heightAt(t+.8,e)-this.heightAt(t-.8,e),r=this.heightAt(t,e+.8)-this.heightAt(t,e-.8);return Math.hypot(s,r)/(2*.8)}isWater(t,e){return this.heightAt(t,e)<Ve}waterDepth(t,e){return Math.max(0,Ve-this.heightAt(t,e))}_buildMesh(){let t=new Qi(zh,zh,Ge,Ge);t.rotateX(-Math.PI/2);let e=t.attributes.position,i=new Float32Array(e.count*3),s=new st,r=new st(6261306),o=new st(8231493),a=new st(4155952),l=new st(9071172),c=new st(9143672),h=new st(7170659),d=new st(11902579),u=new st(15659765),f=new st(5917236),m=new st(10197586);for(let g=0;g<e.count;g++){let p=e.getX(g),y=e.getZ(g),E=g,M=E%(Ge+1),w=Math.floor(E/(Ge+1)),S=this.heights[w*(Ge+1)+M];e.setY(g,S);let A=this.slopeAt(p,y),v=ki(p*.05,y*.05,3,31),T=ys(p*.4,y*.4,32);s.copy(r).lerp(o,ce(.35,.7,v)),s.lerp(a,ce(.45,.7,ki(p*.035+200,y*.035+9,4,1))*.75),s.lerp(m,ce(.6,.85,ki(p*.03+90,y*.03,3,44))*.5),s.multiplyScalar(.92+T*.16);let I=ce(.55,1.1,A+(v-.5)*.3)+ce(15,26,S+v*4)*.8;s.lerp(c.clone().lerp(h,T),Ot(I,0,1)),s.lerp(u,ce(34,44,S+(v-.5)*6)*(1-ce(1,1.5,A)*.4)),s.lerp(d,(1-ce(-.1,.45,S))*.9),s.lerp(f,(1-ce(Ve-.3,Ve+.05,S))*.8);let N=fo(p,y);s.lerp(l,(1-ce(.7,1.7,N))*.85*(1-ce(.8,1.3,A))),i[g*3]=s.r,i[g*3+1]=s.g,i[g*3+2]=s.b}t.setAttribute("color",new Jt(i,3)),t.computeVertexNormals();let x=new le(t,new Oi({vertexColors:!0,roughness:1,metalness:0}));return x.receiveShadow=!0,x}_buildDepthTexture(){let t=new Uint8Array((Ge+1)*(Ge+1)*4);for(let i=0;i<this.heights.length;i++){let s=Ot((Ve-this.heights[i])/1.6,0,1);t[i*4]=Math.round(s*255),t[i*4+1]=0,t[i*4+2]=0,t[i*4+3]=255}let e=new cs(t,Ge+1,Ge+1,Ei);return e.magFilter=ze,e.minFilter=ze,e.wrapS=e.wrapT=Fi,e.needsUpdate=!0,e}};function hf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=cf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=cf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function cf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Jt(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var uf=new Zt,df=new mi,ff=new Ii,U_=new R,F_=new R(1,1,1),Qn=new st;function P(n,t={}){let e=n.index?n.toNonIndexed():n.clone(),i=t.pos||[0,0,0],s=t.rot||[0,0,0],r=t.scale==null?[1,1,1]:typeof t.scale=="number"?[t.scale,t.scale,t.scale]:t.scale;ff.set(s[0],s[1],s[2],"YXZ"),df.setFromEuler(ff),uf.compose(U_.set(i[0],i[1],i[2]),df,F_.set(r[0],r[1],r[2])),e.applyMatrix4(uf),t.flat&&e.computeVertexNormals();let o=e.attributes.position.count,a=new Float32Array(o*3),l=e.attributes.position;for(let c=0;c<o;c++){let h=t.color==null?16777215:t.color;typeof h=="function"&&(h=h(l.getX(c),l.getY(c),l.getZ(c),c)),Qn.set(h);let d=t.jitter?1+(Math.random()-.5)*t.jitter:1;a[c*3]=Qn.r*d,a[c*3+1]=Qn.g*d,a[c*3+2]=Qn.b*d}return e.setAttribute("color",new Jt(a,3)),e.attributes.uv||e.setAttribute("uv",new Jt(new Float32Array(o*2),2)),e}function Gt(n){let t=hf(n,!1);return t.computeBoundingSphere(),t.computeBoundingBox(),t}function ie(n,t,e,i,s,r=6){let o=new R(...n),a=new R(...t),l=o.distanceTo(a),h=new ke(i,e,l,r,1).toNonIndexed(),d=new mi().setFromUnitVectors(new R(0,1,0),a.clone().sub(o).normalize()),u=o.clone().add(a).multiplyScalar(.5);h.applyMatrix4(new Zt().compose(u,d,new R(1,1,1)));let f=h.attributes.position.count,m=new Float32Array(f*3);Qn.set(s);for(let x=0;x<f;x++)m[x*3]=Qn.r,m[x*3+1]=Qn.g,m[x*3+2]=Qn.b;return h.setAttribute("color",new Jt(m,3)),h}var _i=new Oi({vertexColors:!0,roughness:.92,metalness:0}),po=new Oi({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0});var Dl=class{constructor(t=8){this.cell=t,this.map=new Map}_key(t,e){return t*73856093^e*19349663}add(t,e,i,s){let r={x:t,z:e,r:i,ref:s,active:!0},o=this._key(Math.floor(t/this.cell),Math.floor(e/this.cell)),a=this.map.get(o);return a||this.map.set(o,a=[]),a.push(r),r}hits(t,e,i){let s=Math.floor(t/this.cell),r=Math.floor(e/this.cell);for(let o=s-1;o<=s+1;o++)for(let a=r-1;a<=r+1;a++){let l=this.map.get(this._key(o,a));if(l){for(let c of l)if(c.active){let h=t-c.x,d=e-c.z,u=c.r+i;if(h*h+d*d<u*u)return!0}}}return!1}resolve(t,e){let i=!1,s=Math.floor(t.x/this.cell),r=Math.floor(t.z/this.cell);for(let o=s-1;o<=s+1;o++)for(let a=r-1;a<=r+1;a++){let l=this.map.get(this._key(o,a));if(l)for(let c of l){if(!c.active)continue;let h=t.x-c.x,d=t.z-c.z,u=c.r+e,f=h*h+d*d;if(f<u*u){let m=Math.sqrt(f)||1e-4;t.x=c.x+h/m*u,t.z=c.z+d/m*u,i=!0}}}return i}};var ye=ef(20240607),Kt=(n,t)=>n+ye()*(t-n);function Nl(n,t){let e=n.attributes.position;for(let i=0;i<e.count;i++){let s=e.getX(i),r=e.getY(i),o=e.getZ(i),a=Math.sin(s*3.7+r*2.9+1.3)*Math.cos(o*3.1-r*2.3)+Math.sin((s+o)*5.1)*.5,l=1+a*t;e.setXYZ(i,s*l,r*(1+a*t*.6),o*l)}return n.computeVertexNormals(),n}function Ul({blades:n=7,h:t=.55,w:e=.07,base:i=3891492,tip:s=10272845,spread:r=.18}){let o=[],a=new st(i),l=new st(s);for(let c=0;c<n;c++){let h=ye()*Math.PI*2,d=ye()*r,u=t*(.6+ye()*.7),f=(ye()-.4)*.35,m=new _e,x=e*(.7+ye()*.6),g=new Float32Array([-x,0,0,x,0,0,-x*.6,u*.55,0,x,0,0,x*.6,u*.55,0,-x*.6,u*.55,0,-x*.6,u*.55,0,x*.6,u*.55,0,0,u,0]);m.setAttribute("position",new Jt(g,3));let p=[];for(let E=0;E<9;E++){let M=g[E*3+1]/u,w=a.clone().lerp(l,M);p.push(w.r,w.g,w.b)}m.setAttribute("color",new Jt(new Float32Array(p),3)),m.setAttribute("normal",new Jt(new Float32Array(27).map((E,M)=>M%3===1?1:0),3)),m.setAttribute("uv",new Jt(new Float32Array(18),2));let y=new Zt().compose(new R(Math.cos(h)*d,0,Math.sin(h)*d),new mi().setFromEuler(new Ii(f,h,0,"YXZ")),new R(1,1,1));m.applyMatrix4(y),o.push(m)}return Gt(o)}function O_(n){let t=new Oi({vertexColors:!0,roughness:1,side:Bi});return t.onBeforeCompile=e=>{e.uniforms.uTime=n,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3]);
        float sw = sin(uTime*1.7 + ip.x*0.35 + ip.z*0.27) * 0.5 + sin(uTime*2.9 + ip.x*0.9)*0.25;
        transformed.x += sw * 0.13 * position.y;
        transformed.z += sw * 0.07 * position.y;
      #endif`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`)},t}var Fl=class{constructor(t,e){this.scene=t,this.terrain=e,this.nodes=[],this.colliders=new Dl(8),this.time={value:0},this.group=new kt,t.add(this.group),this.buckets=[],this.chunks=[],this._dummy=new Pe,this.trees=[],this.plantMat=O_(this.time),this._buildTrees(),this._buildRocks(),this._buildPlants(),this._buildGrass(),this._buildFlowers(),this._finalize()}_inst(t,e,i,{cast:s=!0,receive:r=!0,range:o=120}={}){let a={geo:t,mat:e,cast:s,receive:r,range:o,items:[]};return this.buckets.push(a),a}_push(t,e,i,s,r,o,a,l=0){let c=this._dummy;c.position.set(e,i,s),c.rotation.set(l,r,0,"YXZ"),typeof o=="number"?c.scale.set(o,o,o):c.scale.set(o[0],o[1],o[2]),c.updateMatrix();let h={m:c.matrix.clone(),color:a?a.clone():null,x:e,z:s,mesh:null,i:0};return t.items.push(h),h}_setScale(t,e){let i=this._dummy;i.position.set(t.x,t.y,t.z),i.rotation.set(t.tilt||0,t.yaw,0,"YXZ");let s=t.baseScale*e;i.scale.set(s,s,s),i.updateMatrix();let r=t.idx;r.mesh.setMatrixAt(r.i,i.matrix),r.mesh.instanceMatrix.needsUpdate=!0}_finalize(){this.chunks=[];for(let e of this.buckets){let i=new Map;for(let s of e.items){let r=Math.floor((s.x+100)/25)*1e3+Math.floor((s.z+100)/25),o=i.get(r);o||i.set(r,o=[]),o.push(s)}for(let s of i.values()){let r=new hs(e.geo,e.mat,s.length);s.forEach((o,a)=>{r.setMatrixAt(a,o.m),o.color&&r.setColorAt(a,o.color),o.mesh=r,o.i=a}),r.castShadow=e.cast,r.receiveShadow=e.receive,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingSphere(),r.userData.range=e.range,this.group.add(r),this.chunks.push(r)}}}cull(t){let e=t;for(let i of this.chunks){let s=i.boundingSphere,r=Math.hypot(s.center.x-e.x,s.center.z-e.z)-s.radius;i.visible=r<i.userData.range}}_ok(t,e,{maxSlope:i=.8,minH:s=.35,maxH:r=26,avoidPath:o=0,avoidCamp:a=0}={}){let l=this.terrain;if(Math.abs(t)>Vt.half-6||Math.abs(e)>Vt.half-6)return!1;let c=l.heightAt(t,e);return!(c<s||c>r||l.slopeAt(t,e)>i||a&&Math.hypot(t-Dt.x,e-Dt.z)<a||o&&fo(t,e)<o)}_buildTrees(){let t=this.terrain,e=[];e.push(P(new ke(.16,.3,2.6,7),{pos:[0,1.3,0],color:5914672,jitter:.15})),[[2,2.5,2.4],[1.6,2.3,3.7],[1.15,2.1,4.9],[.7,1.7,6]].forEach(([f,m,x],g)=>e.push(P(Nl(new Si(f,m,9,1),.12),{pos:[0,x,0],rot:[0,g*.7,0],flat:!0,color:(p,y)=>new st(2377258).lerp(new st(5012026),Ot((y-(x-m/2))/m,0,1)*.8+g/6),jitter:.12})));let s=Gt(e),r=[];r.push(P(new ke(.2,.36,2.8,7),{pos:[0,1.4,0],color:6967864,jitter:.15})),r.push(ie([0,2.2,0],[.9,3.5,.3],.14,.07,6967864)),r.push(ie([0,2.4,0],[-.8,3.4,-.4],.14,.07,6967864)),[[0,4.1,0,1.75],[1,3.6,.3,1.3],[-1,3.5,-.4,1.35],[.2,3.5,-1,1.2],[-.2,4.9,.3,1.1]].forEach(([f,m,x,g],p)=>r.push(P(Nl(new ji(g,1),.22),{pos:[f,m,x],flat:!0,scale:[1,.85,1],color:(y,E)=>new st(3103526).lerp(new st(8037434),Ot((E-m+g)/(2*g),0,1)),jitter:.14})));let o=Gt(r),a=Gt([P(new ke(.2,.34,.5,7),{pos:[0,.25,0],color:7033400})]),l=this._inst(s,_i,1e3,{range:200}),c=this._inst(o,_i,1e3,{range:170}),h=this._inst(a,_i,1e3,{cast:!1,range:90}),d=new st,u=0;for(;this.trees.length<1e3&&u++<16e3;){let f=Kt(-Vt.half+5,Vt.half-5),m=Kt(-Vt.half+5,Vt.half-5);if(!this._ok(f,m,{maxSlope:.85,maxH:25,minH:.5,avoidPath:2.4,avoidCamp:Dt.r+3})||Math.hypot(f-Ne.x,m-Ne.z)<Ne.r-2)continue;let x=ki(f*.035+200,m*.035+9,4,1),g=ce(.44,.62,x)*.95+.05;if(ye()>g)continue;let p=t.heightAt(f,m),y=p>11?ye()<.95:ye()<.5,E=(y?Kt(.8,1.5):Kt(.85,1.35))*(1-ce(14,26,p)*.4),M=ye()*6.28;d.setHSL(Kt(.22,.29),.28,Kt(.42,.62)),d.setRGB(Kt(.8,1.1),Kt(.85,1.15),Kt(.8,1.05));let w=y?l:c,S=this._push(w,f,p-.05,m,M,E,d),A={kind:"tree",x:f,y:p-.05,z:m,yaw:M,baseScale:E,mesh:w,idx:S,hits:3,maxHits:3,alive:!0,respawnAt:0,r:.9*E+.5,stumps:h};A.stumpIdx=this._push(h,f,p-.05,m,M,E*.001,null),A.col=this.colliders.add(f,m,.32*E+.08,A),this.trees.push(A),this.nodes.push(A)}}_buildRocks(){let t=(a,l,c,h)=>{let d=Nl(new qr(1,1),.28+a*.03);return Gt([P(d,{scale:[l,c,h],flat:!0,color:(u,f)=>new st(8223346).lerp(new st(10131341),Ot(f*.5+.5,0,1)).lerp(new st(6255429),Ot((f-.4)*.7,0,.35)),jitter:.12})])},e=[this._inst(t(0,1,.75,1.1),po,400,{range:180}),this._inst(t(1,1.2,.6,.9),po,400,{range:180}),this._inst(t(2,.8,1.1,.85),po,400,{range:180})],i=new st,s=(a,l,c,h)=>{let d=this.terrain,u=d.heightAt(a,l),f=e[Math.floor(ye()*3)],m=ye()*6.28;i.setRGB(Kt(.85,1.1),Kt(.85,1.1),Kt(.85,1.1));let x=u-c*.25,g=this._push(f,a,x,l,m,c,i),p={kind:"rock",x:a,y:x,z:l,yaw:m,baseScale:c,mesh:f,idx:g,alive:!0,respawnAt:0,gather:h,hits:3,maxHits:3,r:c*.9+.6};p.col=this.colliders.add(a,l,c*.85,p),h?this.nodes.push(p):this._staticRocks=(this._staticRocks||0)+1},r=0,o=0;for(;r<16&&o++<3e3;){let a=ye()*6.28,l=Kt(Dt.r+2,34),c=Dt.x+Math.cos(a)*l,h=Dt.z+Math.sin(a)*l;this._ok(c,h,{maxSlope:.7,minH:.6})&&(s(c,h,Kt(.5,.75),!0),r++)}for(r=0,o=0;r<90&&o++<6e3;){let a=Kt(-95,95),l=Kt(-95,95);this._ok(a,l,{maxSlope:1.4,minH:.6,maxH:40,avoidPath:1.5,avoidCamp:Dt.r+2})&&(s(a,l,Kt(.5,.85),!0),r++)}for(r=0,o=0;r<240&&o++<2e4;){let a=Kt(-95,95),l=Kt(-95,95),h=Math.hypot(a-rn.x,l-rn.z)<rn.r*1.1,d=l<-38,u=this.terrain.slopeAt(a,l)>.75&&this.terrain.heightAt(a,l)<34;if(!(h||d&&ye()<.3||u&&ye()<.3||ye()<.02)||!this._ok(a,l,{maxSlope:2.2,minH:.6,maxH:40,avoidPath:2,avoidCamp:Dt.r+2}))continue;let f=h?Kt(1.1,3.2):Kt(.9,2.6);s(a,l,f,!1),r++}}_buildPlants(){let t=this.terrain,e=Ul({blades:9,h:1,w:.06,base:7113274,tip:14144634,spread:.25}),i=this._inst(e,this.plantMat,200,{cast:!1,receive:!1,range:80}),s=[];[[0,.5,0,.75],[.5,.4,.2,.55],[-.45,.4,-.1,.55],[.1,.5,-.5,.5]].forEach(([h,d,u,f])=>s.push(P(Nl(new ji(f,1),.18),{pos:[h,d,u],flat:!0,scale:[1,.85,1],color:(m,x)=>new st(2837794).lerp(new st(6261301),Ot(x*.9,0,1)),jitter:.15})));for(let h=0;h<14;h++){let d=ye()*6.28,u=ye()*3.1,f=.72;s.push(P(new ji(.06,0),{pos:[Math.cos(d)*Math.sin(u)*f,.55+Math.cos(u)*.45,Math.sin(d)*Math.sin(u)*f],color:11544632}))}let r=this._inst(Gt(s),po,160,{range:90}),o=this._inst(Gt([ie([-.5,.04,0],[.5,.06,.05],.045,.03,7164216),ie([-.15,.06,.02],[.3,.1,.35],.03,.02,8019008),ie([.1,.05,.02],[.4,.05,-.3],.025,.02,6112560)]),_i,240,{receive:!1,range:60}),a=0,l=0,c=(h,d,u,f,m)=>{for(a=0,l=0;a<u&&l++<u*60;){let x=f.near&&ye()<f.near,g,p;if(x){let S=ye()*6.28,A=Kt(Dt.r-2,40);g=Dt.x+Math.cos(S)*A,p=Dt.z+Math.sin(S)*A}else g=Kt(-92,92),p=Kt(-92,92);if(!this._ok(g,p,{maxSlope:.7,minH:f.minH??.5,maxH:f.maxH??14})||f.forest&&ki(g*.035+200,p*.035+9,4,1)<f.forest)continue;let y=t.heightAt(g,p),E=ye()*6.28,M=Kt(.85,1.25),w=this._push(d,g,y-.02,p,E,M,null);this.nodes.push({kind:h,x:g,y:y-.02,z:p,yaw:E,baseScale:M,mesh:d,idx:w,alive:!0,respawnAt:0,hits:1,maxHits:1,r:1,...m}),a++}};c("plant",i,130,{near:.5},{}),c("bush",r,80,{near:.3,forest:.4},{}),c("branch",o,170,{near:.55,forest:.35},{})}_buildGrass(){let t=this.terrain,e=this.plantMat,i=Ul({blades:6,h:.4,w:.045,base:3101216,tip:7971388,spread:.14}),s=Ul({blades:5,h:.55,w:.045,base:2837019,tip:7313976,spread:.14}),r=Ul({blades:4,h:.7,w:.12,base:2575647,tip:6131257,spread:.3}),o=this._inst(i,e,16e3,{cast:!1,receive:!1,range:48}),a=this._inst(s,e,6e3,{cast:!1,receive:!1,range:62}),l=this._inst(r,e,2200,{cast:!1,receive:!1,range:50}),c=new st,h=0;for(;(o.items.length<16e3||a.items.length<6e3||l.items.length<2200)&&h++<16e4;){let d=Kt(-96,96),u=Kt(-96,96),f=t.heightAt(d,u);if(f<.3||f>22||t.slopeAt(d,u)>.85)continue;let m=fo(d,u);if(m<1.2||Math.hypot(d-Dt.x,u-Dt.z)<Dt.r-2&&ye()<.85)continue;let g=ki(d*.035+200,u*.035+9,4,1),p=Math.hypot(d-Ne.x,u-Ne.z)<Ne.r,y=ye(),E=ce(.3,1.3,m)*(1-ce(16,24,f));if(y>.35+E*.5&&!p)continue;c.setRGB(Kt(.8,1.15),Kt(.85,1.15),Kt(.75,1.1));let M=ye()*6.28;g>.55&&l.items.length<2200&&ye()<.3?this._push(l,d,f-.03,u,M,Kt(.8,1.4),c):ye()<.5&&a.items.length<6e3?this._push(a,d,f-.03,u,M,Kt(.9,1.6),c):o.items.length<16e3&&this._push(o,d,f-.03,u,M,Kt(.9,1.7),c)}}_buildFlowers(){let t=this.terrain,e=Gt([P(new ke(.008,.012,.32,4),{pos:[0,.16,0],color:5208623}),P(new ji(.055,0),{pos:[0,.34,0],scale:[1,.55,1],color:16777215}),P(new ji(.02,0),{pos:[0,.37,0],color:15908920})]),i=this._inst(e,_i,1200,{cast:!1,receive:!1,range:45}),s=[16777215,16110919,11635423,15296139,9418734].map(o=>new st(o)),r=0;for(;i.items.length<1200&&r++<6e4;){let o=Kt(-92,92),a=Kt(-92,92),l=t.heightAt(o,a);!(Math.hypot(o-Ne.x,a-Ne.z)<Ne.r+4||Math.hypot(o-Dt.x,a-Dt.z)<Dt.r+10)||l<.5||l>10||t.slopeAt(o,a)>.5||fo(o,a)<1||ys(o*.25,a*.25,77)<.55||this._push(i,o,l-.02,a,ye()*6.28,Kt(.8,1.5),s[Math.floor(ye()*s.length)])}}update(t,e){if(this.time.value=e,this._acc=(this._acc||0)+t,!(this._acc<1)){this._acc=0;for(let i of this.nodes)!i.alive&&e>i.respawnAt&&this.setAlive(i,!0)}}setAlive(t,e,i=0){if(t.alive=e,t.kind==="tree"){this._setScale(t,e?1:1e-4);let s=this._dummy;s.position.set(t.x,t.y,t.z),s.rotation.set(0,t.yaw,0);let r=e?1e-4:t.baseScale;s.scale.set(r,r,r),s.updateMatrix(),t.stumpIdx.mesh.setMatrixAt(t.stumpIdx.i,s.matrix),t.stumpIdx.mesh.instanceMatrix.needsUpdate=!0,t.col.active=!0,t.col.r=e?.32*t.baseScale+.08:.3}else t.kind==="rock"?(this._setScale(t,e?1:.35),t.col.r=t.baseScale*(e?.85:.3)):this._setScale(t,e?1:1e-4);e&&(t.hits=t.maxHits)}hit(t,e,i=1){if(!t.alive||(t.hits--,t.hits>0))return null;let s={tree:300,rock:200,plant:130,bush:160,branch:170}[t.kind];t.respawnAt=e+s,this.setAlive(t,!1);let r=(o,a)=>Math.round(Kt(o,a)*i);switch(t.kind){case"tree":return{wood:r(4,6)};case"rock":return{stone:r(2,3)};case"plant":return{fiber:r(2,3)};case"bush":return{berry:r(2,4)};case"branch":return{wood:r(1,2)}}return null}nearest(t,e,i,s){let r=null,o=i*i;for(let a of this.nodes){if(!a.alive||s&&!s(a))continue;let l=a.x-t,c=a.z-e,h=l*l+c*c;h<o&&(o=h,r=a)}return r}};function pf(n){let t=cr.merge([ot.fog,{uTime:{value:0},uDepth:{value:n.depthTexture},uSize:{value:Vt.size},uSky:{value:new st(12375784)},uShallow:{value:new st(7319194)},uDeep:{value:new st(2054770)},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new st(16777215)},uLight:{value:1}}]),e=new Ye({uniforms:t,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vWorld;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime, uSize, uLight;
      uniform sampler2D uDepth;
      uniform vec3 uSky, uShallow, uDeep, uSunDir, uSunColor;
      varying vec3 vWorld;
      #include <fog_pars_fragment>
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 uv = (vWorld.xz + uSize*0.5) / uSize;
        float d = texture2D(uDepth, uv).r * 1.6;
        if (d < 0.004) discard;
        vec2 flow = vec2(0.0, uTime*0.9);
        float n1 = vn(vWorld.xz*vec2(2.2,0.9) - flow);
        float n2 = vn(vWorld.xz*vec2(5.0,2.2) - flow*1.6 + 7.0);
        vec3 N = normalize(vec3((n1-0.5)*0.55 + (n2-0.5)*0.3, 1.0, (n2-0.5)*0.4));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(N,V),0.0), 3.0);
        vec3 base = mix(uShallow, uDeep, smoothstep(0.0, 1.1, d)) * (0.35 + 0.65*uLight);
        vec3 col = mix(base, uSky, clamp(fres*0.85 + 0.12, 0.0, 1.0));
        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N,H),0.0), 90.0) * uLight;
        col += uSunColor * spec * 1.4;
        // \xE9cume sur les bords + filets
        float edge = 1.0 - smoothstep(0.0, 0.22, d);
        float foam = edge * smoothstep(0.35, 0.75, vn(vWorld.xz*3.5 + vec2(0.0, -uTime*0.4)) + edge*0.35);
        float streak = smoothstep(0.72, 0.9, n1) * 0.18 * smoothstep(0.1, 0.5, d);
        col = mix(col, vec3(0.92,0.96,0.97)*(0.4+0.6*uLight), clamp(foam*0.8 + streak, 0.0, 1.0));
        float alpha = smoothstep(0.0, 0.12, d) * (0.62 + 0.3*smoothstep(0.0, 1.0, d));
        alpha = max(alpha, foam*0.7);
        gl_FragColor = vec4(col, alpha);
        #include <fog_fragment>
      }`}),i=new le(new Qi(Vt.size,Vt.size),e);return i.rotation.x=-Math.PI/2,i.position.y=Ve,i.renderOrder=2,{mesh:i,uniforms:t}}var Ol=class{constructor(t){this.scene=t,this.terrain=new Ll,t.add(this.terrain.mesh),this.veg=new Fl(t,this.terrain),this.water=pf(this.terrain),t.add(this.water.mesh);let e=new le(new Qi(1600,1600),new xi({color:3493932}));e.rotation.x=-Math.PI/2,e.position.y=-3,t.add(e),this.far=e,this.colliders=this.veg.colliders,this.veg.cull({x:0,z:0}),this._cullT=0}heightAt(t,e){return this.terrain.heightAt(t,e)}update(t,e,i,s){this.veg.update(t,e),this._cullT-=t,this._cullT<=0&&(this._cullT=.2,this.veg.cull(s.position));let r=this.water.uniforms;r.uTime.value=e,r.uSky.value.copy(i.skyUniforms.uHor.value),r.uSunDir.value.copy(i.sunDir),r.uSunColor.value.copy(i.skyUniforms.uSunColor.value),r.uLight.value=.15+.85*i.dayFactor,this.far.material.color.copy(i.scene.fog.color).multiplyScalar(.6)}};var ei=n=>new st(n),Hi={day:{top:ei(3108804),hor:ei(12047334),fog:ei(11783126),sun:ei(16773330),hemiSky:ei(12572927),hemiGround:ei(5918008)},dusk:{top:ei(3490684),hor:ei(15769712),fog:ei(13081216),sun:ei(16750674),hemiSky:ei(13214880),hemiGround:ei(4864562)},night:{top:ei(330522),hor:ei(1319743),fog:ei(858670),sun:ei(9349375),hemiSky:ei(4877486),hemiGround:ei(1317414)}},Bl=class{constructor(t,e){this.scene=t,this.hours=9,this.dayLength=600,this.frozen=!1,this.sunDir=new R(0,1,0),this.nightFactor=0,this.dayFactor=1,this.twilight=0,this.sun=new Xn(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let i=this.sun.shadow.camera;i.left=-42,i.right=42,i.top=42,i.bottom=-42,i.near=1,i.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,t.add(this.sun,this.sun.target),this.moon=new Xn(9349375,.3),t.add(this.moon,this.moon.target),this.hemi=new fs(16777215,4473924,1),t.add(this.hemi),t.fog=new Fr(11783126,.0058),this.skyUniforms={uTop:{value:new st},uHor:{value:new st},uSun:{value:new R(0,1,0)},uSunColor:{value:new st},uNight:{value:0},uTime:{value:0},uTwi:{value:0}},this.sky=new le(new tn(450,32,16),new Ye({uniforms:this.skyUniforms,side:ni,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uTop, uHor, uSun, uSunColor; uniform float uNight, uTime, uTwi;
        varying vec3 vDir;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float h31(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7))) * 43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
        void main(){
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.2, 1.0);
          vec3 col = mix(uHor, uTop, pow(max(h,0.0), 0.55));
          col = mix(col, uHor*0.8, smoothstep(0.0, -0.2, d.y));
          float sd = max(dot(d, normalize(uSun)), 0.0);
          col += uSunColor * (pow(sd, 6.0)*0.25*(0.4+uTwi) + smoothstep(0.9975, 0.9992, sd) * 1.6) * (1.0 - uNight*0.9);
          // lune
          float md = max(dot(d, -normalize(uSun)), 0.0);
          col += vec3(0.85,0.9,1.0) * smoothstep(0.9988, 0.9994, md) * uNight;
          col += vec3(0.25,0.3,0.45) * pow(md, 40.0) * 0.25 * uNight;
          // \xE9toiles
          if (d.y > 0.0) {
            vec3 sp = floor(d*140.0);
            float st = step(0.9965, h31(sp));
            col += vec3(1.0) * st * uNight * (0.6 + 0.4*h31(sp+3.0));
          }
          // nuages
          if (d.y > 0.02) {
            vec2 cp = d.xz / (d.y + 0.35) * 1.6 + vec2(uTime*0.006, uTime*0.002);
            float c = vn(cp*1.5)*0.55 + vn(cp*3.1)*0.3 + vn(cp*6.3)*0.15;
            float cl = smoothstep(0.52, 0.78, c) * smoothstep(0.02, 0.25, d.y);
            vec3 cc = mix(vec3(1.0), uHor*1.1, 0.35) * (1.0 - uNight*0.85);
            cc = mix(cc, uSunColor, uTwi*0.4);
            col = mix(col, cc, cl*0.75);
          }
          gl_FragColor = vec4(col, 1.0);
        }`})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.apply(0)}get clockText(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}get isNight(){return this.nightFactor>.55}update(t,e,i){this.frozen||(this.hours=(this.hours+t*24/this.dayLength)%24),this.apply(t,e,i)}apply(t,e,i){let s=(this.hours-6)/12*Math.PI;this.sunDir.set(Math.cos(s)*.9,Math.sin(s),.42).normalize();let r=this.sunDir.y,o=ce(-.08,.35,r),a=Math.exp(-Math.pow((r-0)/.2,2));this.dayFactor=o,this.nightFactor=1-ce(-.22,.05,r),this.twilight=a;let l=m=>new st().copy(Hi.night[m]).lerp(Hi.day[m],o).lerp(Hi.dusk[m],a*.85),c=l("top"),h=l("hor"),d=l("fog"),u=this.skyUniforms;u.uTop.value.copy(c),u.uHor.value.copy(h),u.uSun.value.copy(this.sunDir),u.uSunColor.value.copy(Hi.day.sun).lerp(Hi.dusk.sun,a),u.uNight.value=this.nightFactor,u.uTwi.value=a,u.uTime.value+=t,this.scene.fog.color.copy(d),this.scene.fog.density=ee(.0058,.0095,this.nightFactor)+a*.0012;let f=ce(-.05,.3,r)*3.4;if(this.sun.color.copy(Hi.day.sun).lerp(Hi.dusk.sun,a*.9),this.sun.intensity=f,this.moon.intensity=this.nightFactor*1.1,this.hemi.intensity=.36+.72*ce(-.14,.35,r)+a*.08,this.hemi.color.copy(Hi.night.hemiSky).lerp(Hi.day.hemiSky,o).lerp(Hi.dusk.hemiSky,a*.7),this.hemi.groundColor.copy(Hi.night.hemiGround).lerp(Hi.day.hemiGround,o),this.sun.castShadow=r>.03,e){let m=e;this.sun.position.set(m.x+this.sunDir.x*110,m.y+this.sunDir.y*110+5,m.z+this.sunDir.z*110),this.sun.target.position.set(m.x,m.y,m.z),this.moon.position.set(m.x-this.sunDir.x*80,m.y-this.sunDir.y*80+10,m.z-this.sunDir.z*80),this.moon.target.position.set(m.x,m.y,m.z),this.sun.target.updateMatrixWorld(),this.moon.target.updateMatrixWorld()}i&&this.sky.position.copy(i.position)}};var mo=class{constructor(t,e=600,i=!1){this.max=e,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Float32Array(e),this.flick=new Float32Array(e),this.cursor=0;let s=new _e;this.aPos=new Jt(this.p,3),this.aCol=new Jt(this.col,3),this.aSize=new Jt(this.size,1),this.aAlpha=new Jt(this.alpha,1);for(let r of[this.aPos,this.aCol,this.aSize,this.aAlpha])r.setUsage(hh);s.setAttribute("position",this.aPos),s.setAttribute("color",this.aCol),s.setAttribute("size",this.aSize),s.setAttribute("alpha",this.aAlpha),this.mat=new Ye({transparent:!0,depthWrite:!1,fog:!0,blending:i?ms:Yn,uniforms:cr.merge([ot.fog,{uScale:{value:600}}]),vertexShader:`
        attribute vec3 color; attribute float size; attribute float alpha;
        varying vec3 vCol; varying float vA; uniform float uScale;
        #include <fog_pars_vertex>
        void main(){ vCol = color; vA = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * uScale / max(-mvPosition.z, 0.5);
          #include <fog_vertex>
        }`,fragmentShader:`
        varying vec3 vCol; varying float vA;
        #include <fog_pars_fragment>
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.2, d) * vA;
          if (a < 0.01) discard; gl_FragColor = vec4(vCol, a);
          #include <fog_fragment>
        }`}),this.points=new Hr(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}setScale(t){this.mat.uniforms.uScale.value=t}emit(t,e,i,s,r,o,{color:a=16777215,size:l=.1,life:c=1,gravity:h=0,drag:d=0,alpha:u=1,grow:f=0,flicker:m=0}={}){let x=this.cursor;this.cursor=(this.cursor+1)%this.max;let g=new st(a);this.p[x*3]=t,this.p[x*3+1]=e,this.p[x*3+2]=i,this.v[x*3]=s,this.v[x*3+1]=r,this.v[x*3+2]=o,this.col[x*3]=g.r,this.col[x*3+1]=g.g,this.col[x*3+2]=g.b,this.base[x]=l,this.size[x]=l,this.alpha[x]=u,this.life[x]=c,this.maxLife[x]=c,this.grav[x]=h,this.drag[x]=d,this.grow[x]=f,this.flick[x]=m,this._a0=this._a0||new Float32Array(this.max),this._a0[x]=u}burst(t,e,i,s,r,o=1.5,a=1.5){for(let l=0;l<s;l++)this.emit(t,e,i,(Math.random()-.5)*o,Math.random()*a,(Math.random()-.5)*o,{...r,life:(r.life||1)*(.7+Math.random()*.6),size:(r.size||.1)*(.7+Math.random()*.6)})}update(t,e){let i=this._a0||(this._a0=new Float32Array(this.max));for(let s=0;s<this.max;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}this.life[s]-=t;let r=this.life[s]/this.maxLife[s],o=Math.max(0,1-this.drag[s]*t);this.v[s*3]*=o,this.v[s*3+1]=this.v[s*3+1]*o-this.grav[s]*t,this.v[s*3+2]*=o,this.p[s*3]+=this.v[s*3]*t,this.p[s*3+1]+=this.v[s*3+1]*t,this.p[s*3+2]+=this.v[s*3+2]*t;let a=Math.min(1,r*3)*Math.min(1,(1-r)*6+.001);this.flick[s]&&(a*=.55+.45*Math.sin(e*this.flick[s]+s*1.7)),this.alpha[s]=Math.max(0,i[s]*a),this.size[s]=this.base[s]*(1+this.grow[s]*(1-r))}this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=this.aAlpha.needsUpdate=!0}};var kh={KeyW:"forward",KeyS:"back",KeyA:"left",KeyD:"right",ShiftLeft:"sprint",ShiftRight:"sprint",ControlLeft:"crouch",KeyC:"crouch",Space:"jump",KeyE:"interact",KeyF:"eat",KeyQ:"observe",KeyB:"build",KeyI:"inventory",Tab:"inventory",KeyM:"map",KeyH:"hints",KeyN:"mute",KeyR:"rotate",KeyG:"grab",Delete:"delete",Backspace:"delete",KeyX:"delete",KeyT:"snap",PageUp:"raise",PageDown:"lower",Escape:"escape",Digit1:"n1",Digit2:"n2",Digit3:"n3",Digit4:"n4",Digit5:"n5",Digit6:"n6",Digit7:"n7",Digit8:"n8",Digit9:"n9",Numpad1:"n1",Numpad2:"n2",Numpad3:"n3",Numpad4:"n4",Numpad5:"n5",Numpad6:"n6",Numpad7:"n7",Numpad8:"n8",Numpad9:"n9"},zl=class{constructor(t,e){this.canvas=t,this.root=e,this.down=new Set,this.pressedQ=new Set,this.releasedQ=new Set,this.look={x:0,y:0},this.mouse={x:0,y:0,nx:0,ny:0,inside:!1,left:!1,right:!1},this.wheel=0,this.locked=!1,this.enabled=!0,this.wantLock=!0,this.clicks=[],this._drag={down:!1,moved:0,button:-1},this.layout=null,this.onLockChange=()=>{},this._bind(),navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{this.layout=i}).catch(()=>{})}keyLabel(t){let e={Space:"Espace",Escape:"\xC9chap",Delete:"Suppr",ControlLeft:"Ctrl",ShiftLeft:"Maj",Tab:"Tab"};return e[t]?e[t]:this.layout&&this.layout.get(t)?this.layout.get(t).toUpperCase():t.replace("Key","").replace("Digit","")}_bind(){addEventListener("keydown",e=>{if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;let i=kh[e.code];i&&(["Tab","Space","Backspace","PageUp","PageDown"].includes(e.code)&&e.preventDefault(),this.down.has(e.code)||this.pressedQ.add(i),this.down.add(e.code))}),addEventListener("keyup",e=>{let i=kh[e.code];this.down.delete(e.code),i&&this.releasedQ.add(i)}),addEventListener("blur",()=>{this.down.clear(),this.mouse.left=this.mouse.right=!1});let t=this.canvas;t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{this._drag={down:!0,moved:0,button:e.button},e.button===0&&(this.mouse.left=!0),e.button===2&&(this.mouse.right=!0),this._updateMouse(e),this.locked&&this.clicks.push({button:e.button,drag:!1,locked:!0})}),addEventListener("mouseup",e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1),this._drag.down&&this._drag.button===e.button&&(this.locked||this.clicks.push({button:e.button,drag:this._drag.moved>5,locked:!1}),this._drag.down=!1)}),addEventListener("mousemove",e=>{this.locked?(this.look.x+=e.movementX,this.look.y+=e.movementY):(this._updateMouse(e),this.mouse.inside=e.target===this.canvas,this._drag.down&&(this._drag.moved+=Math.abs(e.movementX)+Math.abs(e.movementY),this._drag.moved>5&&(this._drag.button===2||this._drag.button===1||!this.wantLock||this._dragLook)&&(this.look.x+=e.movementX,this.look.y+=e.movementY)))}),t.addEventListener("mouseleave",()=>{this.mouse.inside=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.wheel+=Math.sign(e.deltaY)*(e.shiftKey?.001:1),this._shiftWheel=e.shiftKey},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange(this.locked)})}_updateMouse(t){let e=this.canvas.getBoundingClientRect();this.mouse.x=t.clientX-e.left,this.mouse.y=t.clientY-e.top,this.mouse.nx=this.mouse.x/e.width*2-1,this.mouse.ny=-(this.mouse.y/e.height*2-1),this.mouse.inside=!0}requestLock(){if(this.canvas.requestPointerLock)try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}pressed(t){return this.pressedQ.has(t)}released(t){return this.releasedQ.has(t)}isDown(t){for(let e of this.down)if(kh[e]===t)return!0;return!1}get move(){let t=0,e=0;this.isDown("forward")&&(e+=1),this.isDown("back")&&(e-=1),this.isDown("right")&&(t+=1),this.isDown("left")&&(t-=1),this.down.has("ArrowUp")&&(e+=1),this.down.has("ArrowDown")&&(e-=1),this.down.has("ArrowRight")&&(t+=1),this.down.has("ArrowLeft")&&(t-=1);let i=Math.hypot(t,e);return i>1?{x:t/i,y:e/i}:{x:t,y:e}}takeLook(){let t={...this.look};return this.look.x=0,this.look.y=0,t}takeWheel(){let t=this.wheel;return this.wheel=0,t}takeClicks(){let t=this.clicks;return this.clicks=[],t}endFrame(){this.pressedQ.clear(),this.releasedQ.clear()}};var kl=class{constructor(){this.ctx=null,this.muted=!1,this.master=null,this.listener={x:0,z:0},this._birdT=2,this._fireT=0,this._owlT=30}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(e.destination);let i=e.sampleRate*2,s=e.createBuffer(1,i,e.sampleRate),r=s.getChannelData(0),o=0,a=0,l=0;for(let u=0;u<i;u++){let f=Math.random()*2-1;o=.99765*o+f*.099046,a=.963*a+f*.2965164,l=.57*l+f*1.0526913,r[u]=(o+a+l+f*.1848)*.2}this.noiseBuf=s;let c=e.createBuffer(1,i,e.sampleRate),h=c.getChannelData(0);for(let u=0;u<i;u++)h[u]=Math.random()*2-1;this.whiteBuf=c;let d=(u,f,m,x)=>{let g=e.createBufferSource();g.buffer=u,g.loop=!0;let p=e.createBiquadFilter();p.type=f,p.frequency.value=m,p.Q.value=x;let y=e.createGain();return y.gain.value=0,g.connect(p),p.connect(y),y.connect(this.master),g.start(),{s:g,f:p,g:y}};this.wind=d(s,"bandpass",500,.6),this.river=d(c,"lowpass",900,.4),this.cricket=this._makeCrickets()}_makeCrickets(){let t=this.ctx,e=t.createOscillator();e.type="sine",e.frequency.value=4300;let i=t.createGain();i.gain.value=0;let s=t.createOscillator();s.frequency.value=9;let r=t.createGain();r.gain.value=.5;let o=t.createGain();return o.gain.value=0,s.connect(r),r.connect(i.gain),e.connect(i),i.connect(o),o.connect(this.master),i.gain.value=.5,e.start(),s.start(),{out:o}}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:.8),this.muted}_noise(t,{type:e="bandpass",f:i=1e3,f2:s=null,q:r=1,gain:o=.2,delay:a=0,buf:l="noiseBuf",attack:c=.005}){let h=this.ctx;if(!h||this.muted)return;let d=h.currentTime+a,u=h.createBufferSource();u.buffer=this[l];let f=h.createBiquadFilter();f.type=e,f.frequency.setValueAtTime(i,d),s&&f.frequency.exponentialRampToValueAtTime(s,d+t),f.Q.value=r;let m=h.createGain();m.gain.setValueAtTime(1e-4,d),m.gain.linearRampToValueAtTime(o,d+c),m.gain.exponentialRampToValueAtTime(1e-4,d+t),u.connect(f),f.connect(m),m.connect(this.master),u.start(d,Math.random()*1.5),u.stop(d+t+.05)}_tone(t,e,{type:i="sine",gain:s=.15,f2:r=null,delay:o=0,attack:a=.005}={}){let l=this.ctx;if(!l||this.muted)return;let c=l.currentTime+o,h=l.createOscillator();h.type=i,h.frequency.setValueAtTime(t,c),r&&h.frequency.exponentialRampToValueAtTime(r,c+e);let d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(s,c+a),d.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(d),d.connect(this.master),h.start(c),h.stop(c+e+.05)}step(t,e=.6){t==="wood"?(this._tone(150+Math.random()*30,.1,{type:"triangle",gain:.16*e}),this._noise(.06,{f:1800,gain:.05*e})):t==="water"?this._noise(.28,{type:"lowpass",f:1800,f2:500,gain:.16*e,buf:"whiteBuf"}):this._noise(.1,{f:700+Math.random()*400,q:.6,gain:.13*e})}play(t){if(this.ctx)switch(t){case"swing":this._noise(.22,{f:500,f2:2200,q:1.2,gain:.14});break;case"throw":this._noise(.35,{f:400,f2:2600,q:1,gain:.18}),this._tone(120,.15,{type:"triangle",gain:.08});break;case"hit":this._noise(.16,{type:"lowpass",f:600,gain:.3}),this._tone(90,.18,{type:"sine",gain:.3,f2:50});break;case"thud":this._noise(.12,{type:"lowpass",f:400,gain:.25}),this._tone(80,.15,{gain:.2,f2:50});break;case"chop":this._tone(190,.09,{type:"triangle",gain:.3,f2:110}),this._noise(.09,{f:1800,gain:.2});break;case"mine":this._tone(1100,.06,{type:"square",gain:.07,f2:700}),this._noise(.08,{f:3e3,gain:.2}),this._tone(140,.1,{gain:.12});break;case"pluck":this._noise(.18,{type:"highpass",f:2500,gain:.1});break;case"place":this._tone(120,.14,{type:"triangle",gain:.3,f2:70}),this._noise(.1,{f:1200,gain:.15}),this._tone(520,.08,{gain:.05,delay:.03});break;case"remove":this._noise(.2,{f:900,f2:300,gain:.16});break;case"deny":this._tone(140,.18,{type:"sawtooth",gain:.1,f2:100});break;case"pickup":this._tone(660,.07,{gain:.1}),this._tone(990,.1,{gain:.1,delay:.06});break;case"eat":[0,.12,.24].forEach(e=>this._noise(.07,{f:1500,q:2,gain:.14,delay:e}));break;case"drink":[0,.11,.2].forEach(e=>this._tone(500+Math.random()*300,.09,{gain:.08,f2:900,delay:e}));break;case"hurt":this._tone(180,.35,{type:"sawtooth",gain:.16,f2:70}),this._noise(.2,{type:"lowpass",f:500,gain:.2});break;case"click":this._tone(700,.04,{type:"triangle",gain:.06});break;case"craft":this._tone(440,.09,{gain:.09}),this._tone(660,.09,{gain:.09,delay:.08}),this._tone(880,.16,{gain:.09,delay:.16});break;case"level":[523,659,784,1046].forEach((e,i)=>this._tone(e,.28,{type:"triangle",gain:.11,delay:i*.11}));break;case"cook":this._noise(.5,{f:3500,q:.8,gain:.12,buf:"whiteBuf"});break;case"sleep":this._tone(220,1.2,{type:"sine",gain:.08,f2:110});break;case"open":this._tone(200,.12,{type:"triangle",gain:.14,f2:260}),this._noise(.14,{f:800,gain:.08});break;case"skin":this._noise(.35,{f:1e3,f2:400,gain:.16}),this._tone(100,.2,{gain:.14});break}}at(t,e,i){if(!this.ctx||this.muted)return;let s=Math.hypot(e-this.listener.x,i-this.listener.z),r=Ot(1-s/60,0,1);if(r<=.02)return;let o=r*r;switch(t){case"grunt":this._tone(85,.55,{type:"sawtooth",gain:.16*o,f2:55}),this._noise(.4,{type:"lowpass",f:300,gain:.12*o});break;case"bark":this._noise(.12,{f:900,f2:500,q:1.5,gain:.22*o}),this._tone(420,.14,{type:"square",gain:.05*o,f2:260});break;case"hit":this._noise(.18,{type:"lowpass",f:500,gain:.32*o}),this._tone(85,.2,{gain:.3*o,f2:45});break}}update(t,{player:e,daynight:i,camp:s,world:r}){let o=this.ctx;if(!o)return;this.listener.x=e.pos.x,this.listener.z=e.pos.z;let a=o.currentTime,l=Ot(e.pos.y/30,0,1);this.wind.g.gain.setTargetAtTime(this.muted?0:.05+l*.12+.02*Math.sin(a*.3),a,.4),this.wind.f.frequency.setTargetAtTime(350+l*500+120*Math.sin(a*.21),a,.3);let c=e.pos.z>-70?Math.abs(e.pos.x-Rl(e.pos.z)):200;this.river.g.gain.setTargetAtTime(this.muted?0:Ot(1-(c-3)/38,0,1)*.16,a,.3);let h=i.nightFactor;if(this.cricket.out.gain.setTargetAtTime(this.muted?0:h*.008,a,1),this._birdT-=t,this._birdT<=0&&(this._birdT=2+Math.random()*7,h<.35&&!this.muted)){let d=2200+Math.random()*1800,u=2+Math.floor(Math.random()*3);for(let f=0;f<u;f++)this._tone(d,.1,{type:"sine",gain:.035,f2:d*(1.2+Math.random()*.5),delay:f*.13})}if(this._owlT-=t,this._owlT<=0&&(this._owlT=20+Math.random()*30,h>.7&&(this._tone(340,.5,{gain:.05,f2:290}),this._tone(340,.5,{gain:.05,f2:290,delay:.7}))),this._fireT-=t,this._fireT<=0&&s){this._fireT=.08+Math.random()*.25;let d=s.nearest("fire",e.pos.x,e.pos.z,22);if(d){let u=Math.hypot(d.x-e.pos.x,d.z-e.pos.z);this._noise(.05+Math.random()*.05,{f:1500+Math.random()*3e3,q:1.5,gain:Ot(1-u/22,0,1)*.12,buf:"whiteBuf"})}}}};var Hl=class{constructor(){this.m=new Map}on(t,e){(this.m.get(t)||this.m.set(t,[]).get(t)).push(e)}emit(t,...e){let i=this.m.get(t);if(i)for(let s of i)s(...e)}};var Vl="wildhearth_save_v1",bs={has(){try{return!!localStorage.getItem(Vl)}catch{return!1}},clear(){try{localStorage.removeItem(Vl)}catch{}},save(n){try{let t={v:1,t:Date.now(),player:n.player.serialize(),inv:n.inventory.serialize(),camp:n.camp.serialize(),hours:n.daynight.hours,obj:n.objectives.serialize(),map:btoa(String.fromCharCode(...n.mapview.explored.map(e=>e>150?1:0)))};return localStorage.setItem(Vl,JSON.stringify(t)),!0}catch{return!1}},load(n){try{let t=localStorage.getItem(Vl);if(!t)return!1;let e=JSON.parse(t);if(n.inventory.load(e.inv),n.camp.load(e.camp),n.player.load(e.player),typeof e.hours=="number"&&(n.daynight.hours=e.hours),n.objectives.load(e.obj),e.map){let i=atob(e.map);for(let s=0;s<i.length&&s<n.mapview.explored.length;s++)i.charCodeAt(s)&&(n.mapview.explored[s]=255);n.mapview.dirty=!0}return!0}catch{return!1}}};var Gl=class{constructor(t){this.ctx=t,this.index=0,this.deerSeen=!1,this._t=0;let e=s=>t.inventory.stats.gathered[s]||0,i=()=>t.camp.counts();this.steps=[{id:"gather",title:"R\xE9colte de quoi construire",text:()=>`Bois ${Math.min(8,e("wood"))}/8 \xB7 Pierre ${Math.min(4,e("stone"))}/4 \xB7 Fibre ${Math.min(4,e("fiber"))}/4`,detail:"Approche-toi d\u2019un arbre, d\u2019un rocher ou d\u2019une plante et appuie sur E.",done:()=>e("wood")>=8&&e("stone")>=4&&e("fiber")>=4,target:()=>({x:Dt.x+8,z:Dt.z-6})},{id:"walls",title:"Construis ton abri",text:()=>`Sols ${Math.min(1,i().floor)}/1 \xB7 Murs ${Math.min(4,i().wall)}/4`,detail:"Ouvre le mode construction (bouton marteau ou B). Pose un sol, puis 4 murs autour.",done:()=>i().floor>=1&&i().wall>=4,target:()=>({x:Dt.x,z:Dt.z})},{id:"roof",title:"Ferme ta cabane",text:()=>`Toit ${Math.min(1,i().roof)}/1 \xB7 Porte ${Math.min(1,i().door)}/1`,detail:"Ajoute un toit sur les murs (il s\u2019aimante \xE0 leur sommet) et une porte.",done:()=>i().roof>=1&&i().door>=1,target:()=>({x:Dt.x,z:Dt.z})},{id:"fire",title:"Allume un feu",text:()=>`Feu ${Math.min(1,i().fire)}/1`,detail:"Mobilier \u2192 Feu de camp. Il \xE9claire la nuit et cuit la viande (E).",done:()=>i().fire>=1,target:()=>({x:Dt.x,z:Dt.z})},{id:"bison",title:"Chasse un bison",text:()=>`Peaux ${Math.min(2,e("hide"))}/2`,detail:"Direction la clairi\xE8re \xE0 l\u2019est. Reste accroupi (C), observe (Q), clic droit + clic gauche pour lancer la lance. D\xE9p\xE8ce avec E.",done:()=>e("hide")>=2,target:()=>({x:Ne.x,z:Ne.z})},{id:"tracks",title:"Trouve les empreintes du Cerf g\xE9ant",text:()=>t.animals.tracks.discovered>0?"Empreintes trouv\xE9es !":"Cherche dans la for\xEAt, \xE0 l\u2019ouest du camp",detail:"Le Cerf g\xE9ant est rare. Maintiens Q pour observer : les traces brillent.",done:()=>t.animals.tracks.discovered>0,target:()=>({x:uo.x,z:uo.z})},{id:"follow",title:"Suis la piste",text:()=>"Empreintes, branches cass\xE9es, lits d\u2019herbe couch\xE9e\u2026",detail:"Avance lentement, accroupi. Le cerf t\u2019entend et te voit de loin.",done:()=>this.deerSeen||(t.inventory.stats.killed.deer||0)>0,target:null},{id:"hunt",title:"Abats le Cerf g\xE9ant",text:()=>"Approche-toi sans te faire rep\xE9rer, puis lance ta lance.",detail:"Un cerf bless\xE9 laisse des traces de sang. Rapporte-en le troph\xE9e.",done:()=>t.inventory.count("trophy_deer")>0||t.camp.counts().trophy>0,target:null},{id:"mount",title:"Expose ton troph\xE9e",text:()=>"Construire \u2192 D\xE9coration \u2192 Troph\xE9e : Cerf g\xE9ant",detail:"Place-le sur un mur de ta cabane ou sur un pied dans ta maison.",done:()=>t.camp.counts().trophy>0,target:()=>({x:Dt.x,z:Dt.z})},{id:"ibex",title:"Monte vers les cr\xEAtes",text:()=>`Bouquetin abattu ${Math.min(1,t.inventory.stats.killed.ibex||0)}/1`,detail:"Les bouquetins vivent sur les rochers, au nord. Ils bondissent et fuient vers les hauteurs : approche par le dessous du vent.",done:()=>(t.inventory.stats.killed.ibex||0)>=1,target:()=>({x:Ms[1].x,z:Ms[1].z})},{id:"grow",title:"Agrandis ton camp",text:()=>`Camp niv. ${Math.min(3,t.camp.level().level)}/3 \u2014 ${t.camp.level().name}`,detail:"Rien n\u2019impose la forme : sols, murs et toits \xE0 ta guise. Un \xE9tabli permet de fabriquer de meilleurs sacs et lances.",done:()=>t.camp.level().level>=3,target:()=>({x:Dt.x,z:Dt.z})},{id:"master",title:"Deviens ma\xEEtre du camp",text:()=>`Camp niv. ${t.camp.level().level}/5 \u2014 ${t.camp.level().name}`,get detail(){return t.camp.level().next.hint},done:()=>t.camp.level().level>=5,target:null}]}get current(){return this.steps[this.index]||null}get finished(){return this.index>=this.steps.length}update(t){if(this._t-=t,this._t>0)return;this._t=.4;let{animals:e,player:i}=this.ctx,s=e.deer;s&&Math.hypot(s.x-i.pos.x,s.z-i.pos.z)<42&&i.observing&&(this.deerSeen=!0),s&&Math.hypot(s.x-i.pos.x,s.z-i.pos.z)<20&&(this.deerSeen=!0);let r=this.current;if(r&&r.done()){this.ctx.ui.toast(`\u2713 ${r.title}`,"good"),this.ctx.audio.play("level"),this.index++;let o=this.current;setTimeout(o?()=>this.ctx.ui.toast(o.title,"info"):()=>this.ctx.ui.toast("Tu es le ma\xEEtre du camp. Construis, chasse, explore librement !","good"),1200)}}serialize(){return{i:this.index,seen:this.deerSeen}}load(t){t&&(this.index=t.i||0,this.deerSeen=!!t.seen)}};var Je={wood:{name:"BOIS",icon:"wood",cat:"res"},stone:{name:"PIERRE",icon:"stone",cat:"res"},fiber:{name:"FIBRE",icon:"fiber",cat:"res"},hide:{name:"PEAU",icon:"hide",cat:"res"},bone:{name:"OS",icon:"bone",cat:"res"},meat:{name:"VIANDE CRUE",icon:"meat",cat:"food",food:12,water:0,hurt:6},cooked:{name:"VIANDE CUITE",icon:"cooked",cat:"food",food:40,water:0,heal:6},berry:{name:"BAIES",icon:"berry",cat:"food",food:8,water:6},trophy_deer:{name:"Bois du Cerf g\xE9ant",icon:"trophy",cat:"trophy",rare:"Troph\xE9e rare",mount:"deer"},trophy_bison:{name:"Cr\xE2ne de bison",icon:"trophy",cat:"trophy",rare:"Troph\xE9e",mount:"bison"},trophy_ibex:{name:"Cornes de bouquetin",icon:"trophy",cat:"trophy",rare:"Troph\xE9e",mount:"ibex"}},mf=["wood","stone","fiber","meat","cooked","berry","hide","bone"],gf={spear:{name:"Lance en bois",melee:20,throw:46,range:2.7},stone_spear:{name:"Lance \xE0 pointe de pierre",melee:32,throw:72,range:2.9}},Wl=[{id:"spear",name:"Lance de chasse",desc:"Pour lancer sur le gibier (elle se ramasse).",cost:{wood:3,stone:1,fiber:1},give:{item:"spear",n:1},bench:!1},{id:"stone_spear",name:"Lance \xE0 pointe de pierre",desc:"D\xE9g\xE2ts +60 %. Remplace ta lance.",cost:{wood:4,stone:4,fiber:3,bone:1},give:{weapon:"stone_spear"},bench:!0},{id:"bag2",name:"Sac en peau",desc:"Capacit\xE9 par ressource : 60.",cost:{hide:3,fiber:6},give:{bag:2},bench:!0},{id:"bag3",name:"Grand sac de chasseur",desc:"Capacit\xE9 par ressource : 120.",cost:{hide:8,fiber:10,bone:4},give:{bag:3},bench:!0}],xf=[0,30,60,120];var Xl=class{constructor(){this.items={wood:10,stone:4,fiber:6},this.spears=2,this.weapon="spear",this.bag=1,this.listeners=[],this.stats={gathered:{},killed:{},trophies:0}}onChange(t){this.listeners.push(t)}_emit(){for(let t of this.listeners)t()}get cap(){return xf[this.bag]}count(t){return this.items[t]||0}has(t){return Object.entries(t).every(([e,i])=>this.count(e)>=i)}add(t,e,i=!0){let s=Je[t],r=s&&s.cat==="trophy"?99:this.cap,o=this.count(t),a=Math.max(0,Math.min(e,r-o));return a>0&&(this.items[t]=o+a,i&&(this.stats.gathered[t]=(this.stats.gathered[t]||0)+a,s&&s.cat==="trophy"&&this.stats.trophies++),this._emit()),a}remove(t,e){return this.count(t)<e?!1:(this.items[t]-=e,this.items[t]<=0&&delete this.items[t],this._emit(),!0)}pay(t){if(!this.has(t))return!1;for(let[e,i]of Object.entries(t))this.remove(e,i);return!0}refund(t){for(let[e,i]of Object.entries(t)){let s=Je[e]&&Je[e].cat==="trophy"?99:9999;this.items[e]=Math.min(s,this.count(e)+i)}this._emit()}addSpear(t=1){this.spears+=t,this._emit()}canCraft(t){return this.has(t.cost)}craft(t){if(!this.pay(t.cost))return!1;let e=t.give;return e.item==="spear"&&(this.spears+=e.n),e.weapon&&(this.weapon=e.weapon),e.bag&&(this.bag=Math.max(this.bag,e.bag)),this._emit(),!0}get weaponDef(){return gf[this.weapon]}best(t){return(t==="water"?["berry"]:["cooked","berry","meat"]).find(i=>this.count(i)>0)||null}serialize(){return{items:this.items,spears:this.spears,weapon:this.weapon,bag:this.bag,stats:this.stats}}load(t){t&&(this.items=t.items||{},this.spears=t.spears??2,this.weapon=t.weapon||"spear",this.bag=t.bag||1,this.stats=t.stats||this.stats,this._emit())}};var Li=2,Le=2.2,Ke=[8017460,7031339,8740666,7557168],ui=5191713,$l=12099939,ts=10121280,Hh=7031341,ql=9399624,Yl=13878172,vi=15129796,Rn=9078912,Ss=10591892,Zl=7170659,_f=11901525,B_=9401920,Vh=11026474,Jl=()=>Ke[Math.floor(Math.random()*Ke.length)],Wt=(n,t,e,i=7)=>new ke(t,n,e,i),Ee=(n,t,e)=>new dn(n,t,e),We=(n,t=9)=>new tn(n,t,Math.max(5,t-3)),yi=(n,t=0)=>new ji(n,t);function z_(n,t,e,i=0,s=.125){let r=e-t;return P(Wt(s*1.04,s*.96,r,6),{pos:[n,t+r/2,i],color:Jl(),jitter:.12})}function In(n,t,e,i,s=.125){let r=[],o=Math.max(1,Math.round((t-n)/(s*2))),a=(t-n)/o;for(let l=0;l<o;l++)r.push(z_(n+a*(l+.5),e,i+(Math.random()-.5)*.06,(Math.random()-.5)*.03,a/2*1.02));return r}function go(n,t=2.02){return P(Ee(t,.06,.3),{pos:[0,n,0],color:$l,jitter:.1})}function k_(n){let t=[];for(let[i,s]of n){let[r,o,a,l]=i.map(d=>new R(...d)),c=new R().subVectors(o,r).cross(new R().subVectors(a,r)),h=[[r,o,a],[r,a,l]];c.dot(new R(...s))<0&&(h=[[r,a,o],[r,l,a]]);for(let d of h)for(let u of d)t.push(u.x,u.y,u.z)}let e=new _e;return e.setAttribute("position",new Jt(new Float32Array(t),3)),e.computeVertexNormals(),e}function H_(n,t,e,i,s){let r=[-n,0,t],o=[n,0,t],a=[n,0,-t],l=[-n,0,-t],c=[-n,e,t],h=[n,e,t],d=[n,i,-t],u=[-n,i,-t],f=k_([[[c,h,d,u],[0,1,.3]],[[r,o,a,l],[0,-1,0]],[[r,o,h,c],[0,0,1]],[[l,a,d,u],[0,0,-1]],[[r,l,u,c],[-1,0,0]],[[o,a,d,h],[1,0,0]]]),m=f.attributes.position,x=new Float32Array(m.count*3),g=new st;for(let p=0;p<m.count;p++)g.set(s(m.getX(p),m.getY(p),m.getZ(p))),x[p*3]=g.r,x[p*3+1]=g.g,x[p*3+2]=g.b;return f.setAttribute("color",new Jt(x,3)),f.setAttribute("uv",new Jt(new Float32Array(m.count*2),2)),f}function Wh(n,t=1){let e=[],i=[[.05,0,0],[.12,.12,-.02],[.28,.26,-.06],[.42,.46,-.14],[.46,.7,-.22],[.4,.96,-.28]];for(let s=0;s<i.length-1;s++){let r=i[s],o=i[s+1],a=.052*(1-s*.1);e.push(ie([r[0]*n*t,r[1]*t,r[2]*t],[o[0]*n*t,o[1]*t,o[2]*t],a,a*.85,Yl))}return[[2,.3,.18,.05],[3,.36,.3,.02],[4,.28,.32,-.02],[1,.14,.14,.1]].forEach(([s,r,o,a])=>{let l=i[s];e.push(ie([l[0]*n*t,l[1]*t,l[2]*t],[(l[0]+r*.55)*n*t,(l[1]+o)*t,(l[2]+a-.06)*t],.034,.01,Yl))}),e.push(ie([.4*n*t,.96*t,-.28*t],[.26*n*t,1.12*t,-.3*t],.04,.01,Yl)),e.push(ie([.4*n*t,.96*t,-.28*t],[.5*n*t,1.1*t,-.3*t],.04,.01,Yl)),e}function V_(n,t,e,i,s=0,r=0){let o=[],l=null;for(let c=0;c<=8;c++){let h=c/8*i,d=[n*(Math.cos(h*1)*-t+t+.02)*1,Math.sin(h)*t*.9+s,-Math.sin(h*.5)*t*.4];l&&o.push(ie(l,d,e*(1-(c-1)/8*.75),e*(1-c/8*.75),13616292,5)),l=d}return o}var G_={foundation(){let n=[P(Ee(2,.14,2),{pos:[0,-.07,0],color:Ss,jitter:.1})];for(let t=0;t<14;t++){let e=(Math.random()-.5)*1.9,i=(Math.random()-.5)*1.9;n.push(P(yi(.34+Math.random()*.14,1),{pos:[e,-.42-Math.random()*.3,i],scale:[1,.9,1],color:[Rn,Zl,Ss][t%3],flat:!0,jitter:.15}))}for(let t=0;t<8;t++){let e=t/8*Math.PI*2,i=Math.cos(e)*.95,s=Math.sin(e)*.95;n.push(P(yi(.26,1),{pos:[Math.max(-.92,Math.min(.92,i*1.05)),-.16,Math.max(-.92,Math.min(.92,s*1.05))],scale:[1.2,.7,1.2],color:Rn,flat:!0,jitter:.15}))}return{parts:n}},floor(){let n=[];for(let t=0;t<8;t++)n.push(P(Ee(.245,.12,2),{pos:[-.875+t*.25,-.06,0],color:Jl(),jitter:.1}));return[-.6,.6].forEach(t=>n.push(P(Wt(.09,.09,2,6),{pos:[0,-.2,t],rot:[0,0,Math.PI/2],color:ui}))),{parts:n}},wall(){return{parts:[...In(-1,1,-.35,Le),go(.55),go(1.7)]}},halfwall(){return{parts:[...In(-1,1,-.35,1.1),go(.55,2.02),P(Ee(2.08,.09,.32),{pos:[0,1.12,0],color:Ke[2]})]}},door(){let n=[...In(-1,-.5,-.35,Le),...In(.5,1,-.35,Le)];return n.push(P(Wt(.14,.14,1.2,6),{pos:[0,2,0],rot:[0,0,Math.PI/2],color:Ke[1]})),n.push(...In(-.5,.5,2.1,Le)),n.push(P(Ee(.98,1.75,.035),{pos:[0,.98,.04],rot:[.02,0,0],color:ts,jitter:.12})),n.push(P(Ee(.98,.05,.07),{pos:[0,1.88,.04],color:ui})),[[-.22,1.35],[.2,1.1],[0,.7]].forEach(([t,e])=>n.push(P(yi(.06,0),{pos:[t,e,.065],scale:[1,1.2,.3],color:Vh,flat:!0}))),n.push(P(Ee(.06,1.85,.32),{pos:[-.51,.93,0],color:ui}),P(Ee(.06,1.85,.32),{pos:[.51,.93,0],color:ui})),{parts:n}},window(){let n=[...In(-1,-.5,-.35,Le),...In(.5,1,-.35,Le),...In(-.5,.5,-.35,.9),...In(-.5,.5,1.6,Le)];return n.push(P(Ee(1.1,.07,.36),{pos:[0,.93,.02],color:Ke[2]})),n.push(P(Ee(.06,.75,.3),{pos:[-.5,1.25,0],color:ui}),P(Ee(.06,.75,.3),{pos:[.5,1.25,0],color:ui})),n.push(P(Ee(.48,.5,.02),{pos:[-.28,1.27,.09],rot:[0,.05,.1],color:ts,jitter:.1})),n.push(go(.5),go(1.9)),{parts:n}},beam(){let n=[P(Wt(.16,.14,2.7,7),{pos:[0,1,0],color:Jl(),jitter:.1})];return[.3,1.6].forEach(t=>n.push(P(Wt(.17,.17,.07,7),{pos:[0,t,0],color:$l}))),n.push(P(yi(.12,0),{pos:[0,2.32,0],scale:[1,.6,1],color:Ss,flat:!0})),{parts:n}},roof(){let t=[H_(1.2,1.2,.14,.66,(e,i,s)=>{let r=.5+.5*Math.sin(e*15+Math.sin(s*4)*.6);return new st(_f).lerp(new st(B_),r*.55+(i<.01?.4:0))})];[-.78,-.26,.26,.78].forEach(e=>t.push(P(Wt(.05,.05,2.4,6),{pos:[e,-.05,0],rot:[Math.PI/2,0,0],color:ui})));for(let e=0;e<14;e++)t.push(P(Wt(.02,.005,.28,4),{pos:[-1.1+e*.17,.06,1.24],rot:[.15,0,0],color:_f,jitter:.2}));return t.push(P(Wt(.05,.05,2.45,6),{pos:[0,.66,-1.2],rot:[0,0,Math.PI/2],color:ui})),{parts:t,flat:!1}},stairs(){let n=[];for(let t=0;t<5;t++){let e=.44*(t+1),i=.8-t*.4;n.push(P(Ee(1.7,e+.1,.4),{pos:[0,(e-.1)/2,i],color:Jl(),jitter:.1})),n.push(P(Ee(1.72,.05,.42),{pos:[0,e-.02,i],color:Ke[2]}))}return[-.9,.9].forEach(t=>n.push(ie([t,-.1,1.05],[t,2.25,-1.05],.09,.08,ui))),{parts:n}},fire(){let n=[P(Wt(.42,.42,.04,12),{pos:[0,.02,0],color:2762017})];for(let t=0;t<9;t++){let e=t/9*Math.PI*2;n.push(P(yi(.15,1),{pos:[Math.cos(e)*.47,.1,Math.sin(e)*.47],scale:[1,.8,1],color:[Rn,Zl,Ss][t%3],flat:!0,jitter:.15}))}return[0,1.05,2.1].forEach(t=>n.push(P(Wt(.06,.05,.7,6),{pos:[Math.cos(t)*.14,.14,Math.sin(t)*.14],rot:[Math.PI/2-.35,-t+Math.PI/2,0],color:3811868}))),{parts:n}},bed(){let n=[];return[[-.45,-.95],[.45,-.95],[-.45,.95],[.45,.95]].forEach(([t,e])=>n.push(P(Wt(.07,.07,.42,6),{pos:[t,.21,e],color:Ke[1]}))),[-.45,.45].forEach(t=>n.push(P(Wt(.06,.06,2,6),{pos:[t,.38,0],rot:[Math.PI/2,0,0],color:Ke[0]}))),[-.9,.9].forEach(t=>n.push(P(Wt(.05,.05,1,6),{pos:[0,.38,t],rot:[0,0,Math.PI/2],color:Ke[0]}))),n.push(P(Ee(.9,.16,1.9),{pos:[0,.46,0],color:ql,jitter:.12})),n.push(P(yi(.42,1),{pos:[0,.56,.2],scale:[1,.22,1.45],color:ts,flat:!0,jitter:.1})),n.push(P(We(.22),{pos:[0,.62,-.7],scale:[1.6,.55,1],color:13219215})),{parts:n}},chest(){let n=[P(Ee(.92,.5,.56),{pos:[0,.25,0],color:8082994,jitter:.06})];for(let e=0;e<3;e++)n.push(P(Ee(.93,.012,.57),{pos:[0,.1+e*.16,0],color:ui}));let t=new ke(.29,.29,.94,10,1,!1,0,Math.PI);return n.push(P(t,{pos:[0,.5,0],rot:[0,0,Math.PI/2],scale:[1,1,1],color:8806458})),[-.3,.3].forEach(e=>n.push(P(Ee(.06,.62,.6),{pos:[e,.3,0],color:$l}))),n.push(P(yi(.06,0),{pos:[0,.48,.3],color:Ss,flat:!0})),{parts:n}},table(){let n=[P(Wt(.6,.6,.1,12),{pos:[0,.75,0],color:9069112,jitter:.08})];for(let t=0;t<3;t++){let e=t/3*Math.PI*2+.4;n.push(P(Wt(.07,.06,.75,6),{pos:[Math.cos(e)*.35,.37,Math.sin(e)*.35],color:Ke[1]}))}return n.push(P(Wt(.11,.09,.08,8),{pos:[.12,.84,.08],color:5913126}),P(yi(.05,0),{pos:[-.2,.83,-.1],color:Rn,flat:!0}),P(Wt(.02,.02,.3,5),{pos:[-.25,.81,.18],rot:[0,0,Math.PI/2-.2],color:vi})),{parts:n}},chair(){let n=[P(Wt(.26,.28,.4,9),{pos:[0,.2,0],color:Ke[0]}),P(Wt(.28,.28,.04,9),{pos:[0,.41,0],color:ql})];return n.push(P(Wt(.05,.05,.6,6),{pos:[-.2,.65,-.22],color:Ke[1]}),P(Wt(.05,.05,.6,6),{pos:[.2,.65,-.22],color:Ke[1]})),n.push(P(Ee(.5,.3,.05),{pos:[0,.75,-.24],color:ts})),{parts:n}},workbench(){let n=[P(Ee(1.7,.12,.8),{pos:[0,.9,0],color:8806458,jitter:.08})];return[[-.75,-.3],[.75,-.3],[-.75,.3],[.75,.3]].forEach(([t,e])=>n.push(P(Wt(.08,.07,.9,6),{pos:[t,.45,e],color:Ke[1]}))),n.push(P(Ee(1.6,.06,.6),{pos:[0,.3,0],color:Ke[3]})),n.push(ie([-.5,.98,.1],[-.15,.98,.2],.03,.03,ui),P(yi(.1,0),{pos:[-.12,.99,.2],scale:[1.3,.6,.8],color:Rn,flat:!0})),n.push(P(yi(.16,1),{pos:[.45,1,0],scale:[1.2,.6,.9],color:Ss,flat:!0}),P(Wt(.02,.02,.35,5),{pos:[.1,.97,-.15],rot:[0,0,Math.PI/2],color:vi})),n.push(P(Ee(.5,.03,.4),{pos:[-.5,.97,-.1],color:ts})),{parts:n}},bones(){let n=[ie([-.4,.08,-.2],[.4,.08,.2],.04,.04,vi),ie([-.4,.14,.2],[.4,.14,-.2],.04,.04,vi)];return[[-.4,-.2],[.4,.2],[-.4,.2],[.4,-.2]].forEach(([t,e],i)=>n.push(P(We(.06),{pos:[t,i<2?.08:.14,e],color:vi}))),n.push(P(We(.13),{pos:[0,.27,0],scale:[1,.9,1.1],color:vi}),P(Wt(.05,.08,.16,6),{pos:[0,.24,.16],rot:[Math.PI/2,0,0],color:vi})),n.push(P(We(.035),{pos:[-.05,.3,.11],color:1577484}),P(We(.035),{pos:[.05,.3,.11],color:1577484})),{parts:n}},rack(){let n=[];return[-.7,.7].forEach(t=>n.push(P(Wt(.07,.07,1.6,6),{pos:[t,.8,0],color:Ke[1]}))),n.push(P(Wt(.05,.05,1.6,6),{pos:[0,1.3,0],rot:[0,0,Math.PI/2],color:Ke[0]}),P(Wt(.05,.05,1.6,6),{pos:[0,.7,0],rot:[0,0,Math.PI/2],color:Ke[0]})),[[-.3,.12],[.1,-.1],[.42,.08]].forEach(([t,e])=>{n.push(ie([t,.05,.12],[t+e,1.75,.08],.025,.02,ui),P(new Si(.04,.2,5),{pos:[t+e,1.85,.08],rot:[0,0,-e*.4],color:Rn,flat:!0}))}),n.push(P(yi(.1,0),{pos:[.72,1.35,.06],scale:[1,1.5,.5],color:Hh,flat:!0})),{parts:n}},torch(){let n=[P(Wt(.05,.04,1.7,6),{pos:[0,.85,0],color:ui}),P(Wt(.09,.07,.24,7),{pos:[0,1.7,0],color:2759698})];return n.push(P(Wt(.07,.07,.03,6),{pos:[0,1.62,0],color:$l})),[0,1,2].forEach(t=>n.push(P(yi(.08,0),{pos:[Math.cos(t*2.1)*.22,.06,Math.sin(t*2.1)*.22],color:Rn,flat:!0}))),{parts:n}},banner(){let n=[P(Wt(.04,.04,2.3,6),{pos:[0,1.15,0],color:ui}),P(Wt(.03,.03,.85,6),{pos:[0,2.15,0],rot:[0,0,Math.PI/2],color:Ke[0]})];n.push(P(Ee(.7,1.1,.03),{pos:[0,1.55,.05],color:ts,jitter:.1})),n.push(P(yi(.16,1),{pos:[0,1.6,.075],scale:[1,1,.2],color:Vh,flat:!0}),P(Ee(.44,.05,.02),{pos:[0,1.25,.075],color:Vh}),P(Ee(.44,.05,.02),{pos:[0,1.95,.075],color:2760728}));for(let t=0;t<5;t++)n.push(P(Wt(.02,.005,.2,4),{pos:[-.28+t*.14,.94,.05],color:ts}));return n.push(P(We(.06),{pos:[0,2.33,0],color:vi})),{parts:n}},rug(){let n=[P(We(1),{pos:[0,0,0],scale:[.75,.03,1],color:ql,jitter:.15}),P(We(1),{pos:[0,.01,0],scale:[.55,.03,.78],color:Hh,jitter:.1})];return[[-.7,-.7],[.7,-.7],[-.6,.85],[.6,.85]].forEach(([t,e])=>n.push(P(We(.2),{pos:[t,0,e],scale:[1,.15,1.3],color:ql}))),n.push(P(We(.22),{pos:[0,.04,1.05],scale:[1,.35,1.2],color:Hh})),{parts:n}},cairn(){let n=[];return[[.5,0],[.36,.3],[.26,.55],[.17,.75]].forEach(([t,e],i)=>n.push(P(yi(t,1),{pos:[i%2*.03,e+t*.6,0],scale:[1,.7,1],color:[Rn,Ss,Zl,Rn][i],flat:!0,jitter:.12}))),n.push(ie([0,.85,0],[.05,1.3,0],.03,.03,ui),P(We(.07),{pos:[.05,1.32,0],color:vi})),{parts:n}},trophy_deer(n){let t=Gh(n,.34);t.push(P(We(.13),{pos:[0,.02,.1],scale:[.85,1.1,.8],color:vi}),P(Wt(.035,.07,.26,6),{pos:[0,-.08,.2],rot:[Math.PI/2+.2,0,0],color:vi})),t.push(P(We(.025),{pos:[-.06,.04,.18],color:1577484}),P(We(.025),{pos:[.06,.04,.18],color:1577484}));let e=.1;return[-1,1].forEach(i=>Wh(i,1.15).forEach(s=>t.push(P(s,{pos:[i*.06,.12,.05+e*0],rot:[-.25,0,0]})))),{parts:t,mountBase:!0}},trophy_bison(n){let t=Gh(n,.36);return t.push(P(We(.17),{pos:[0,0,.12],scale:[1,1.15,1.1],color:vi}),P(Wt(.06,.11,.3,7),{pos:[0,-.12,.24],rot:[Math.PI/2+.15,0,0],color:vi})),t.push(P(We(.03),{pos:[-.1,.05,.22],color:1577484}),P(We(.03),{pos:[.1,.05,.22],color:1577484})),[-1,1].forEach(e=>V_(e,.32,.05,2.4,.08).forEach(i=>t.push(P(i,{pos:[e*.1,.05,.1],rot:[.1,0,0]})))),t.push(P(yi(.2,1),{pos:[0,.16,.06],scale:[1.1,.6,.8],color:3811352,flat:!0})),{parts:t,mountBase:!0}},trophy_ibex(n){let t=Gh(n,.3);return t.push(P(We(.1),{pos:[0,-.02,.1],scale:[.85,1.15,.9],color:vi}),P(Wt(.03,.06,.22,6),{pos:[0,-.1,.19],rot:[Math.PI/2+.2,0,0],color:vi})),t.push(P(We(.022),{pos:[-.05,.02,.17],color:1577484}),P(We(.022),{pos:[.05,.02,.17],color:1577484})),[-1,1].forEach(e=>{let i=null;for(let s=0;s<=10;s++){let r=s/10,o=r*1.9,a=[e*(.06+Math.sin(o)*.12+r*.06),.06+Math.sin(o)*.34*(1-r*.2),.02-r*r*.55*.5+.1];i&&t.push(ie(i,a,.036*(1-(s-1)/10*.75),.036*(1-s/10*.75),13616292,5));for(let l=0;l<1&&s>1&&s<10&&s%2===0;l++)t.push(P(Wt(.041*(1-r*.7),.041*(1-r*.7),.012,5),{pos:a,rot:[0,0,e*.4],color:11642498}));i=a}}),{parts:t,mountBase:!0}}};function Gh(n,t){let e=[P(Wt(t,t,.08,14),{pos:[0,0,0],rot:[Math.PI/2,0,0],color:7162668,jitter:.08}),P(new ds(t,.025,6,16),{pos:[0,0,.04],color:ts})];return n&&n.mount==="stand"&&(e.push(P(Wt(.07,.08,1.15,6),{pos:[0,-.6,-.08],color:ui})),e.push(P(Ee(.5,.06,.4),{pos:[0,-1.15,-.08],color:Zl}))),e}var Ti={foundation:{cat:"struct",name:"Fondation",kind:"tile",cost:{wood:2,stone:4},surface:"flat",tag:"floor"},floor:{cat:"struct",name:"Sol en bois",kind:"tile",cost:{wood:3},surface:"flat",tag:"floor"},wall:{cat:"struct",name:"Mur",kind:"wall",cost:{wood:3,fiber:1},boxes:[{cx:0,cz:0,hx:1,hz:.14,y0:0,y1:Le}],tag:"wall"},halfwall:{cat:"struct",name:"Demi-mur",kind:"wall",cost:{wood:2},boxes:[{cx:0,cz:0,hx:1,hz:.14,y0:0,y1:1.1}],tag:"wall"},beam:{cat:"struct",name:"Poutre",kind:"beam",cost:{wood:2},boxes:[{cx:0,cz:0,hx:.15,hz:.15,y0:0,y1:2.4}],tag:"beam"},roof:{cat:"struct",name:"Toit",kind:"tile",cost:{wood:2,fiber:3},tag:"roof"},door:{cat:"struct",name:"Porte",kind:"wall",cost:{wood:3,fiber:2},boxes:[{cx:-.78,cz:0,hx:.24,hz:.14,y0:0,y1:Le},{cx:.78,cz:0,hx:.24,hz:.14,y0:0,y1:Le}],tag:"door"},window:{cat:"struct",name:"Fen\xEAtre",kind:"wall",cost:{wood:3,fiber:1},boxes:[{cx:0,cz:0,hx:1,hz:.14,y0:0,y1:Le}],tag:"window"},stairs:{cat:"struct",name:"Escalier",kind:"tile",cost:{wood:5},surface:"ramp",tag:"stairs"},fire:{cat:"furn",name:"Feu de camp",kind:"free",cost:{wood:3,stone:4},boxes:[{cx:0,cz:0,hx:.42,hz:.42,y0:0,y1:.3}],tag:"fire",light:{color:16747068,intensity:34,dist:16,y:.8}},bed:{cat:"furn",name:"Lit de fourrure",kind:"free",cost:{wood:4,hide:2,fiber:2},boxes:[{cx:0,cz:0,hx:.5,hz:1,y0:0,y1:.6}],tag:"bed"},chest:{cat:"furn",name:"Coffre",kind:"free",cost:{wood:6,fiber:1},boxes:[{cx:0,cz:0,hx:.46,hz:.29,y0:0,y1:.7}],tag:"chest"},table:{cat:"furn",name:"Table",kind:"free",cost:{wood:5},boxes:[{cx:0,cz:0,hx:.55,hz:.55,y0:0,y1:.85}],tag:"table"},chair:{cat:"furn",name:"Si\xE8ge",kind:"free",cost:{wood:2,hide:1},boxes:[{cx:0,cz:0,hx:.25,hz:.25,y0:0,y1:.5}],tag:"chair"},workbench:{cat:"furn",name:"\xC9tabli",kind:"free",cost:{wood:6,stone:3},boxes:[{cx:0,cz:0,hx:.85,hz:.4,y0:0,y1:1}],tag:"workbench"},trophy_deer:{cat:"decor",name:"Troph\xE9e : Cerf g\xE9ant",kind:"mount",cost:{wood:2,trophy_deer:1},tag:"trophy",trophy:!0},trophy_bison:{cat:"decor",name:"Troph\xE9e : Bison",kind:"mount",cost:{wood:2,trophy_bison:1},tag:"trophy",trophy:!0},trophy_ibex:{cat:"decor",name:"Troph\xE9e : Bouquetin",kind:"mount",cost:{wood:2,trophy_ibex:1},tag:"trophy",trophy:!0},bones:{cat:"decor",name:"Ossements",kind:"free",cost:{bone:2},tag:"decor"},rack:{cat:"decor",name:"R\xE2telier \xE0 lances",kind:"free",cost:{wood:3,fiber:2},boxes:[{cx:0,cz:0,hx:.8,hz:.12,y0:0,y1:1.7}],tag:"decor"},torch:{cat:"decor",name:"Torche",kind:"free",cost:{wood:1,fiber:1},boxes:[{cx:0,cz:0,hx:.1,hz:.1,y0:0,y1:1.7}],tag:"decor",light:{color:16752714,intensity:14,dist:9,y:1.85}},banner:{cat:"decor",name:"\xC9tendard en peau",kind:"free",cost:{hide:1,wood:1},boxes:[{cx:0,cz:0,hx:.1,hz:.1,y0:0,y1:2.3}],tag:"decor"},rug:{cat:"decor",name:"Tapis de fourrure",kind:"free",cost:{hide:1},tag:"decor",flat:!0},cairn:{cat:"decor",name:"Cairn totem",kind:"free",cost:{stone:3,bone:1},boxes:[{cx:0,cz:0,hx:.4,hz:.4,y0:0,y1:1.3}],tag:"decor"}};for(let[n,t]of Object.entries(Ti))t.id=n;var Xh=[{id:"struct",name:"Structures"},{id:"furn",name:"Mobilier"},{id:"decor",name:"D\xE9coration"}],vf=new Map,W_=new xi({color:16751146,transparent:!0,opacity:.92,fog:!0,depthWrite:!1}),X_=new xi({color:16765530,transparent:!0,opacity:.95,fog:!0,depthWrite:!1}),q_=new xi({color:16773808,transparent:!0,opacity:.95,fog:!0,depthWrite:!1});function yf(n,t){let e=n+"|"+(t&&t.mount||""),i=vf.get(e);if(!i){let s=G_[n](t);i=Gt(s.parts),vf.set(e,i)}return i}function pr(n,t={}){let e=Ti[n],i=new kt;if(i.userData.type=n,e.kind==="mount"&&e.standBanner){let o=new le(yf(n,{}),_i);return o.castShadow=o.receiveShadow=!0,i.add(o),i}let s=e.kind==="mount"?{mount:t.mount||"stand"}:{},r=new le(yf(n,s),_i);if(r.castShadow=!0,r.receiveShadow=!0,e.kind==="mount"&&s.mount==="stand"&&(r.position.y=1.15+.06),i.add(r),i.userData.mount=s.mount||null,n==="fire"||n==="torch"){let o=new kt,a=n==="fire"?.16:1.78,l=n==="fire"?1:.55,c=[[.24,.7,W_],[.17,.55,X_],[.1,.38,q_]].map(([h,d,u])=>{let f=new le(new Si(h*l,d*l,7,1,!0),u);return f.position.y=a+d*l/2,o.add(f),f.userData.h=d*l,f});i.add(o),i.userData.flames=c,i.userData.animated=!0}return i}function Mf(n,t,e=0){let i=n.userData.flames;i&&i.forEach((s,r)=>{let o=.85+.25*Math.sin(t*(9+r*3)+e+r)+.1*Math.sin(t*23+r*5);s.scale.set(1+.12*Math.sin(t*13+r),o,1+.12*Math.cos(t*11+r)),s.rotation.y=t*(1+r),s.position.y=s.userData.h*o*.5+(n.userData.type==="fire"?.16:1.78)-s.userData.h*.5+s.userData.h*.5})}var bf=[{name:"Terrain vierge",hint:"Pose un sol et deux murs pour un abri rudimentaire."},{name:"Abri rudimentaire",hint:"Ferme 4 murs, ajoute un toit et une porte."},{name:"Cabane en bois",hint:"Agrandis : 4 sols, 10 murs, 4 toits et un feu."},{name:"Grande cabane",hint:"\xC9quipe : feu, lit, coffre, \xE9tabli et table."},{name:"Camp organis\xE9",hint:"Expose un troph\xE9e, d\xE9core, ajoute une fen\xEAtre : 45 pi\xE8ces."},{name:"Base avanc\xE9e",hint:"Ton camp est complet. Construis encore !"}],Kl=class{constructor(t,e){this.scene=t,this.world=e,this.group=new kt,t.add(this.group),this.pieces=new Map,this.nextId=1,this.changed=!1,this.listeners=[],this.emitters=[],this.lights=[];for(let i=0;i<4;i++){let s=new Jr(16747068,0,14,2);s.castShadow=!1,t.add(s),this.lights.push(s)}this._lightT=0}onChange(t){this.listeners.push(t)}_emit(){this.changed=!0,this._counts=null,this._collect();for(let t of this.listeners)t()}add(t,e,i,s,r=0,o={},a=null){let l=Ti[t];if(!l)return null;let c=pr(t,{mount:o.mount});c.position.set(e,i,s),c.rotation.y=r;let h={id:a||this.nextId++,type:t,def:l,x:e,y:i,z:s,rot:r,data:o,group:c,phase:Math.random()*6.28};return a&&a>=this.nextId&&(this.nextId=a+1),c.userData.pieceId=h.id,this.group.add(c),this.pieces.set(h.id,h),this._computeBoxes(h),this._emit(),h}remove(t){let e=this.pieces.get(t);return e?(this.group.remove(e.group),this.pieces.delete(t),this._emit(),e):null}moveTo(t,e,i,s,r,o){t.x=e,t.y=i,t.z=s,t.rot=r,o&&(t.data={...t.data,...o}),t.group.position.set(e,i,s),t.group.rotation.y=r,this._computeBoxes(t),this._emit()}pieceFromObject(t){for(;t;){if(t.userData&&t.userData.pieceId)return this.pieces.get(t.userData.pieceId)||null;t=t.parent}return null}_computeBoxes(t){let e=Math.cos(t.rot),i=Math.sin(t.rot);t.obbs=(t.def.boxes||[]).map(s=>({x:t.x+s.cx*e+s.cz*i,z:t.z-s.cx*i+s.cz*e,rot:t.rot,hx:s.hx,hz:s.hz,y0:t.y+s.y0,y1:t.y+s.y1}))}_collect(){this.emitters=[];for(let t of this.pieces.values())t.def.light&&this.emitters.push(t);this.surfaces=[],this.solids=[];for(let t of this.pieces.values())t.def.surface&&this.surfaces.push(t),t.obbs.length&&this.solids.push(t)}surfaceAt(t,e,i){let s=-1/0;for(let r of this.surfaces||[]){let o=t-r.x,a=e-r.z;if(o*o+a*a>2.4)continue;let l=Math.cos(r.rot),c=Math.sin(r.rot),h=o*l-a*c,d=o*c+a*l,u;if(r.def.surface==="flat"){if(Math.abs(h)>1.02||Math.abs(d)>1.02)continue;u=r.y}else{if(Math.abs(h)>.95||Math.abs(d)>1.02)continue;u=r.y+Math.min(Le,1.1*(1-d)+.22)}u<=i&&u>s&&(s=u)}return s}collide(t,e,i,s=1.7){let r=!1;for(let o of this.solids||[]){let a=t.x-o.x,l=t.z-o.z;if(!(a*a+l*l>12))for(let c of o.obbs){if(i+s<c.y0+.05||i>c.y1-.28)continue;let h=Math.cos(c.rot),d=Math.sin(c.rot),u=t.x-c.x,f=t.z-c.z,m=u*h-f*d,x=u*d+f*h,g=Math.max(-c.hx,Math.min(c.hx,m)),p=Math.max(-c.hz,Math.min(c.hz,x)),y=m-g,E=x-p,M=y*y+E*E;if(M>=e*e)continue;let w,S;if(M>1e-8){let A=Math.sqrt(M);w=y/A,S=E/A;let v=e-A;y=w*v,E=S*v}else{let A=c.hx-Math.abs(m),v=c.hz-Math.abs(x);A<v?(y=Math.sign(m||1)*(A+e),E=0):(E=Math.sign(x||1)*(v+e),y=0)}t.x+=y*h+E*d,t.z+=-y*d+E*h,r=!0}}return r}hitsPoint(t,e,i,s=.25){for(let r of this.solids||[])if(!((r.x-t)**2+(r.z-i)**2>9))for(let o of r.obbs){if(e<o.y0-s||e>o.y1+s)continue;let a=Math.cos(o.rot),l=Math.sin(o.rot),c=t-o.x,h=i-o.z,d=c*a-h*l,u=c*l+h*a;if(Math.abs(d)<o.hx+s&&Math.abs(u)<o.hz+s)return!0}return!1}nearest(t,e,i,s,r){let o=null,a=s*s;for(let l of this.pieces.values()){if(l.def.tag!==t)continue;let c=l.x-e,h=l.z-i,d=c*c+h*h;d<a&&(a=d,o=l)}return o}counts(){if(this._counts)return this._counts;let t={total:this.pieces.size,floor:0,wall:0,beam:0,roof:0,door:0,window:0,stairs:0,fire:0,bed:0,chest:0,table:0,workbench:0,chair:0,trophy:0,decor:0};for(let e of this.pieces.values()){let i=e.def.tag;t[i]!=null&&t[i]++,(i==="door"||i==="window")&&t.wall++}return this._counts=t,t}level(){let t=this.counts(),e=0;return t.floor>=1&&t.wall>=2&&(e=1),e===1&&t.floor>=1&&t.wall>=4&&t.roof>=1&&t.door>=1&&(e=2),e===2&&t.floor>=4&&t.wall>=10&&t.roof>=4&&t.fire>=1&&(e=3),e===3&&t.fire>=1&&t.bed>=1&&t.chest>=1&&t.workbench>=1&&t.table>=1&&(e=4),e===4&&t.trophy>=1&&t.decor>=3&&t.window>=1&&t.total>=45&&(e=5),{level:e,...bf[e],next:bf[Math.min(5,e+1)]}}nearFire(t,e,i=9){return!!this.nearest("fire",t,e,i)}update(t,e,i){let s=i.x,r=i.z;for(let o of this.emitters){let a=o.x-s,l=o.z-r;o.group.visible=!0,a*a+l*l<2500&&Mf(o.group,e,o.phase)}if(this._lightT-=t,this._lightT<=0){this._lightT=.3;let o=this.emitters.map(a=>({p:a,d:(a.x-s)**2+(a.z-r)**2})).sort((a,l)=>a.d-l.d).slice(0,this.lights.length);this.lights.forEach((a,l)=>{a._src=o[l]?o[l].p:null})}this.lights.forEach((o,a)=>{let l=o._src;if(!l){o.intensity=0;return}let c=l.def.light;o.color.setHex(c.color),o.position.set(l.x,l.y+c.y,l.z),o.distance=c.dist,o.intensity=c.intensity*(.85+.15*Math.sin(e*11+l.phase)+.08*Math.sin(e*27+a))})}serialize(){return[...this.pieces.values()].map(t=>({id:t.id,t:t.type,x:+t.x.toFixed(3),y:+t.y.toFixed(3),z:+t.z.toFixed(3),r:+t.rot.toFixed(4),d:t.data}))}load(t){for(let e of[...this.pieces.values()])this.group.remove(e.group);this.pieces.clear();for(let e of t||[])this.add(e.t,e.x,e.y,e.z,e.r,e.d||{},e.id);this._emit()}};var Sf=new xi({color:6750105,transparent:!0,opacity:.5,depthWrite:!1}),Y_=new xi({color:16734792,transparent:!0,opacity:.5,depthWrite:!1}),$_=new Set(["floor","stairs","roof","wall","door","window","beam"]),Z_=new Set(["floor","stairs","roof"]),wf=new Set(["wall","door","window"]),xo={wall:Le,door:Le,window:Le,beam:Le},Ef=new Kr,Tf=new Lt,Af=new R,jl=class{constructor(t){this.ctx=t,this.active=!1,this.tool="select",this.category="struct",this.snap=!0,this.rotStep=0,this.yawFree=0,this.heightOffset=0,this.ghost=null,this.ghostKey="",this.moving=null,this.hover=null,this.target=null,this.valid=!1,this.reason="",this.listeners=[],this.outline=new jr(new bi,16769658),this.outline.visible=!1,this.outline.material.depthTest=!1,this.outline.renderOrder=20,t.scene.add(this.outline),this.grid=this._makeGrid(),t.scene.add(this.grid)}onChange(t){this.listeners.push(t)}_emit(){for(let t of this.listeners)t()}_makeGrid(){let t=[];for(let s=-3;s<=4;s++){let r=s*2-1;t.push(-7,0,r,7,0,r,r,0,-7,r,0,7)}let e=new _e;e.setAttribute("position",new oe(t,3));let i=new ir(e,new us({color:16777215,transparent:!0,opacity:.22,depthWrite:!1}));return i.visible=!1,i.renderOrder=10,i.frustumCulled=!1,i}enter(){this.active||(this.active=!0,this.ctx.input.releaseLock(),this.tool="select",this._emit())}exit(){this.active&&(this._cancelMove(),this.active=!1,this._clearGhost(),this.outline.visible=!1,this.grid.visible=!1,this._emit())}toggle(){this.active?this.exit():this.enter()}selectTool(t){this._cancelMove(),this.tool=t,this.rotStep=0,this.heightOffset=0,this._emit()}setCategory(t){this.category=t,this._emit()}list(){return Object.values(Ti).filter(t=>t.cat===this.category)}toggleSnap(){this.snap=!this.snap,this._emit(),this.ctx.ui.toast(this.snap?"Aimantation activ\xE9e":"Placement libre","info")}rotate(t=1){let e=Ti[this.tool];e&&(this.snap?e.kind==="tile"?this.rotStep+=t:e.kind==="wall"?this.rotStep+=t:this.yawFree+=t*Math.PI/4:this.yawFree+=t*Math.PI/12)}_ray(){let{camera:t,input:e}=this.ctx,i=e.mouse;return Tf.set(i.inside?i.nx:0,i.inside?i.ny:0),Ef.setFromCamera(Tf,t),Ef}_pick(){let t=this._ray(),{world:e,camp:i}=this.ctx,s=null,r=t.intersectObjects(i.group.children,!0);for(let u of r){let f=i.pieceFromObject(u.object);if(!(!f||this.moving&&f===this.moving)){Af.copy(u.face?u.face.normal:new R(0,1,0)).transformDirection(u.object.matrixWorld),s={point:u.point.clone(),normal:Af.clone(),piece:f,dist:u.distance,terrain:!1};break}}let o=t.ray.origin,a=t.ray.direction,l=.5,c=0,h=!1,d=s?s.dist:70;for(;l<d;){let u=o.x+a.x*l,f=o.y+a.y*l,m=o.z+a.z*l;if(f<=e.heightAt(u,m)){h=!0;break}c=l,l+=.5}if(h){let u=c,f=l;for(let M=0;M<8;M++){let w=(u+f)/2,S=o.y+a.y*w,A=o.x+a.x*w,v=o.z+a.z*w;S<=e.heightAt(A,v)?f=w:u=w}let m=o.x+a.x*f,x=o.z+a.z*f,g=e.heightAt(m,x),p=e.heightAt(m+.5,x)-e.heightAt(m-.5,x),y=e.heightAt(m,x+.5)-e.heightAt(m,x-.5),E=new R(-p,1,-y).normalize();s={point:new R(m,g,x),normal:E,piece:null,dist:f,terrain:!0}}return s}_structNear(t,e){let i=null,s=e*e;for(let r of this.ctx.camp.pieces.values()){if(!$_.has(r.def.tag)||r===this.moving)continue;let o=r.x-t.x,a=r.z-t.z,l=o*o+a*a;l<s&&(s=l,i=r)}return i}_frame(t){let e=this._structNear(t,4.2);if(!e)return{ax:0,az:0,yaw:0};let i=Math.cos(e.rot),s=Math.sin(e.rot),r=e.def.tag;return Z_.has(r)?{ax:e.x,az:e.z,yaw:e.rot}:wf.has(r)?{ax:e.x+s,az:e.z+i,yaw:e.rot}:{ax:e.x+i+s,az:e.z-s+i,yaw:e.rot}}_toLocal(t,e,i){let s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=e-t.ax,a=i-t.az;return[o*s-a*r,o*r+a*s]}_toWorld(t,e,i){let s=Math.cos(t.yaw),r=Math.sin(t.yaw);return[t.ax+e*s+i*r,t.az-e*r+i*s]}_levelFromHit(t){if(!t||t.terrain||!t.piece)return null;let e=t.piece,i=e.def.tag;return xo[i]!=null&&t.point.y>e.y+xo[i]-.45?e.y+xo[i]:e.y}_floorAdjacent(t,e,i){let s=null,r=i*i;for(let o of this.ctx.camp.pieces.values()){if(o.def.surface!=="flat"||o===this.moving)continue;let a=o.x-t,l=o.z-e,c=a*a+l*l;c<r&&(r=c,s=o)}return s}_compute(t,e){let{world:i,camp:s}=this.ctx,r=e.point,o=this._levelFromHit(e),a={x:r.x,y:r.y,z:r.z,rot:0,data:{}},l=this.heightOffset,c=this.rotStep*(t.kind==="wall"?Math.PI:Math.PI/2);if(t.kind==="tile"&&this.snap){let h=this._frame(r),[d,u]=this._toLocal(h,r.x,r.z),[f,m]=this._toWorld(h,Math.round(d/Li)*Li,Math.round(u/Li)*Li);a.x=f,a.z=m,a.rot=h.yaw+c,a.frame=h,a.y=this._tileY(t,f,m,o,e)}else if(t.kind==="wall"&&this.snap){let h=this._frame(r),[d,u]=this._toLocal(h,r.x,r.z),f=Math.round(d/Li)*Li,m=Math.round(u/Li)*Li,x=d-f,g=u-m,p,y,E;Math.abs(x)>Math.abs(g)?(p=f+Math.sign(x||1),y=m,E=h.yaw+Math.PI/2+(x>0?0:Math.PI)):(p=f,y=m+Math.sign(g||1),E=h.yaw+(g>0?0:Math.PI));let[M,w]=this._toWorld(h,p,y);a.x=M,a.z=w,a.rot=E+c,a.frame=h,a.y=o??this._wallBaseY(M,w,h,p,y)}else if(t.kind==="beam"&&this.snap){let h=this._frame(r),[d,u]=this._toLocal(h,r.x,r.z),f=Math.round(d/Li)*Li,m=Math.round(u/Li)*Li,[x,g]=this._toWorld(h,f+Math.sign(d-f||1),m+Math.sign(u-m||1));a.x=x,a.z=g,a.rot=h.yaw,a.frame=h,a.y=o??i.heightAt(x,g)}else t.kind==="mount"?!e.terrain&&Math.abs(e.normal.y)<.55?(a.data.mount="wall",a.rot=Math.atan2(e.normal.x,e.normal.z),a.x=r.x+e.normal.x*.06,a.z=r.z+e.normal.z*.06,a.y=r.y,this.snap&&(a.y=Math.round(r.y/.25)*.25)):(a.data.mount="stand",a.rot=this.yawFree,this.snap&&(a.x=Math.round(r.x/.5)*.5,a.z=Math.round(r.z/.5)*.5),a.y=e.terrain?i.heightAt(a.x,a.z):r.y):(a.rot=this.yawFree,this.snap&&t.kind==="free"&&(a.x=Math.round(r.x/.5)*.5,a.z=Math.round(r.z/.5)*.5),a.y=e.terrain?i.heightAt(a.x,a.z):r.y,(t.kind==="tile"||t.kind==="wall"||t.kind==="beam")&&(o!=null?a.y=o:t.tag==="roof"&&(a.y=i.heightAt(a.x,a.z)+Le),t.tag==="roof"&&o==null&&(a.y=i.heightAt(a.x,a.z)+Le)),t.flat&&(a.y+=.03));return a.y+=l,a}_tileY(t,e,i,s,r){let{world:o}=this.ctx;if(t.tag==="roof"){let c=-1/0;for(let h of this.ctx.camp.pieces.values()){if(!(wf.has(h.def.tag)||h.def.tag==="halfwall"||h.def.tag==="beam")||h===this.moving)continue;let d=h.x-e,u=h.z-i;d*d+u*u>1.25*1.25+.3||(c=Math.max(c,h.y+(xo[h.def.tag]||1.1)))}return c>-1/0?c:s!=null?r.piece&&xo[r.piece.def.tag]!=null&&r.point.y>r.piece.y+1?s:s+Le:o.heightAt(e,i)+Le}if(s!=null)return s;let l=this._floorAdjacent(e,i,2.7);if(l&&Math.abs(l.y-o.heightAt(e,i))<2.6)return l.y;if(t.id==="foundation"){let c=o.heightAt(e,i);for(let[h,d]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])c=Math.max(c,o.heightAt(e+h,i+d));return Math.round((c+.05)*20)/20}return Math.round((o.heightAt(e,i)+.12)*20)/20}_wallBaseY(t,e,i,s,r){let{world:o}=this.ctx,a=Math.abs(r-Math.round(r/2)*2)>.5,l=null,c=1.3;for(let h of this.ctx.camp.pieces.values()){if(h.def.surface!=="flat")continue;let d=Math.hypot(h.x-t,h.z-e);d<c&&(c=d,l=h)}return l?l.y:o.heightAt(t,e)}_validate(t,e){let{player:i,world:s,camp:r,inventory:o}=this.ctx;if(Math.abs(e.x)>Vt.half-8||Math.abs(e.z)>Vt.half-8)return"Trop pr\xE8s du bord du monde";if(Math.hypot(e.x-i.pos.x,e.z-i.pos.z)>24)return"Trop loin du personnage";if(s.heightAt(e.x,e.z)<Ve+.02&&e.y<Ve+.6)return"Impossible de construire dans l'eau";this.replace=null;let c=d=>d.kind==="wall"?"wall":d.tag==="floor"?"floor":d.tag==="roof"?"roof":d.tag==="stairs"?"stairs":d.kind==="beam"?"beam":null,h=c(t);for(let d of r.pieces.values()){if(d===this.moving)continue;let u=d.x-e.x,f=d.z-e.z,m=d.y-e.y;if(!(u*u+f*f>.09||Math.abs(m)>.15)){if(h&&c(d.def)===h){if(h==="wall"){let x=Math.abs(((d.rot-e.rot)%Math.PI+Math.PI)%Math.PI);if(x>.1&&Math.PI-x>.1)continue}if(d.type===t.id)return"D\xE9j\xE0 occup\xE9";this.replace=d}else if(d.type===t.id&&u*u+f*f<.0036&&Math.abs(m)<.05)return"D\xE9j\xE0 occup\xE9"}}return!this.moving&&!o.has(t.cost)?"Ressources insuffisantes":""}_setGhost(t,e){let i=t+"|"+(e||"");if(this.ghostKey===i&&this.ghost)return;this._clearGhost();let s=pr(t,{mount:e});s.traverse(r=>{r.isMesh&&(r.material=Sf,r.castShadow=!1,r.receiveShadow=!1)}),this.ctx.scene.add(s),this.ghost=s,this.ghostKey=i}_clearGhost(){this.ghost&&(this.ctx.scene.remove(this.ghost),this.ghost=null,this.ghostKey="")}grab(){if(!this.hover)return;let t=this.hover;this.moving=t,t.group.visible=!1,this.tool=t.type,this.yawFree=t.rot,this.heightOffset=0,this.ctx.ui.toast("D\xE9placement : clic gauche pour poser, clic droit pour annuler","info"),this._emit()}_cancelMove(){this.moving&&(this.moving.group.visible=!0,this.moving=null)}deleteHover(){let t=this.hover||this.moving;if(!t)return;let{camp:e,inventory:i,audio:s,ui:r}=this.ctx;if(this.moving===t&&(this.moving.group.visible=!0,this.moving=null,this.tool="select"),t.data&&t.data.items)for(let[o,a]of Object.entries(t.data.items))i.items[o]=Math.min(9999,(i.items[o]||0)+a);e.remove(t.id),i.refund(t.def.cost),this.hover=null,s.play("remove"),r.toast(`${t.def.name} retir\xE9 \u2014 ressources r\xE9cup\xE9r\xE9es`,"info"),this.ctx.fx.burst(t.x,t.y+.5,t.z,12,{color:12101002,size:.35,life:.8,alpha:.5,grow:2,drag:2},1.6,.8),this._emit()}place(){if(!this.target||!this.valid){this.reason&&(this.ctx.ui.toast(this.reason,"warn"),this.ctx.audio.play("deny"));return}let t=Ti[this.tool],{camp:e,inventory:i,audio:s,fx:r,ui:o}=this.ctx,a=this.target;if(this.moving){let l=this.moving;e.moveTo(l,a.x,a.y,a.z,a.rot,a.data),l.group.visible=!0,this.moving=null,this.tool="select",s.play("place")}else{if(!i.pay(t.cost))return;this.replace&&(e.remove(this.replace.id),i.refund(this.replace.def.cost),o.toast(`${this.replace.def.name} remplac\xE9`,"info"),this.replace=null);let l={...a.data};t.id==="chest"&&(l.items={}),e.add(t.id,a.x,a.y,a.z,a.rot,l),s.play("place"),this.ctx.events.emit("placed",t)}r.burst(a.x,a.y+.15,a.z,10,{color:12890250,size:.3,life:.7,alpha:.45,grow:2.2,drag:3},1.8,.5),this._emit()}cancel(){if(this.moving){this._cancelMove(),this.tool="select",this._emit();return}this.tool!=="select"&&(this.tool="select",this._emit())}update(t){if(!this.active)return;let{input:e,camp:i}=this.ctx,s=e.mouse,r=e.takeClicks(),o=s.inside||e.locked?this._pick():null;this.hover=o&&o.piece&&!o.terrain?o.piece:null,o&&o.piece&&o.terrain===!1&&(this.hover=o.piece);let a=Ti[this.tool];this.hover&&(this.tool==="select"||e.isDown("delete"))?(this.outline.box.setFromObject(this.hover.group),this.outline.visible=!0,this.outline.material.color.setHex(16769658)):this.outline.visible=!1,e.pressed("rotate")&&this.rotate(e.isDown("sprint")?-1:1),e.pressed("grab")&&this.grab(),e.pressed("delete")&&this.deleteHover(),e.pressed("snap")&&this.toggleSnap(),e.pressed("raise")&&(this.heightOffset+=.25),e.pressed("lower")&&(this.heightOffset-=.25);let l=this.list();for(let u=1;u<=9;u++)e.pressed("n"+u)&&l[u-1]&&this.selectTool(l[u-1].id);if(!a||!o){this.ghost&&(this.ghost.visible=!1),this.grid.visible=!1,this.target=null,this.valid=!1,this.reason="";for(let u of r)!u.drag&&u.button===2&&this.cancel();return}let c=this._compute(a,o),h=this._validate(a,c);this.target=c,this.valid=!h,this.reason=h,this._setGhost(a.id,c.data.mount),this.ghost.visible=!0,this.ghost.position.set(c.x,c.y,c.z),this.ghost.rotation.y=c.rot;let d=this.valid?Sf:Y_;if(this.ghost.traverse(u=>{u.isMesh&&u.material!==d&&(u.material=d)}),this.snap&&c.frame&&(a.kind==="tile"||a.kind==="wall"||a.kind==="beam")){let u=c.frame;this.grid.visible=!0,this.grid.position.set(u.ax,c.y+.04,u.az),this.grid.rotation.y=u.yaw;let[f,m]=this._toLocal(u,c.x,c.z),x=Math.cos(u.yaw),g=Math.sin(u.yaw),p=Math.round(f/2)*2,y=Math.round(m/2)*2;this.grid.position.x+=p*x+y*g,this.grid.position.z+=-p*g+y*x}else this.grid.visible=!1;for(let u of r)u.drag||(u.button===0?this.tool==="select"?this.hover&&this._openInfo(this.hover):this.place():u.button===2&&this.cancel())}_openInfo(t){t.def.tag==="chest"&&this.ctx.ui.openChest(t)}get info(){let t=Ti[this.tool];return{tool:this.tool,def:t,valid:this.valid,reason:this.reason,snap:this.snap,moving:!!this.moving,hover:this.hover}}};var gn=13079144,qh=11040080,Ql=7031341,tc=9136709,ec=9069112,_o=2891284,Yh=15261640,J_=7228720,Cf=9277324,Ue=(n,t=10)=>new tn(n,t,Math.max(6,t-2)),si=(n,t,e,i=8)=>new ke(t,n,e,i);function xn(n,t=!0){let e=new le(n,_i);return e.castShadow=t,e.receiveShadow=!1,e}function Rf(){let n=new kt,t=new kt;n.add(t);let e=new kt;e.position.y=.95,t.add(e);let i=p=>{let y=new kt;y.position.set(p*.12,0,0),e.add(y),y.add(xn(Gt([P(si(.1,.075,.46),{pos:[0,-.23,0],color:gn}),P(si(.105,.085,.2),{pos:[0,-.1,0],color:Ql})])));let E=new kt;return E.position.y=-.46,y.add(E),E.add(xn(Gt([P(si(.075,.06,.44),{pos:[0,-.22,0],color:gn}),P(si(.09,.075,.26),{pos:[0,-.2,0],color:ec}),P(si(.095,.095,.03),{pos:[0,-.09,0],color:12098154}),P(Ue(.085),{pos:[0,-.46,.035],scale:[1,.8,1.6],color:Ql})]))),{thigh:y,knee:E}},s=i(-1),r=i(1),o=new kt;e.add(o),o.add(xn(Gt([P(si(.16,.2,.32,10),{pos:[0,.16,0],color:gn}),P(Ue(.23),{pos:[0,.44,0],scale:[1.15,.95,.72],color:gn}),P(Ue(.235),{pos:[0,.44,.015],scale:[1.18,.7,.78],color:(p,y)=>new st(Ql).lerp(new st(tc),Ot((y-.3)*3,0,1))}),P(si(.2,.2,.06,12),{pos:[0,.02,0],color:4863268}),P(si(.19,.2,.22,10),{pos:[0,-.05,0],color:ec}),P(Ue(.045),{pos:[.05,.06,.2],color:Yh})])));let a=xn(Gt([P(Ue(.3),{pos:[0,.6,-.04],scale:[1.2,.34,.9],color:tc,jitter:.1}),P(Ue(.22),{pos:[0,.46,-.16],scale:[1.2,.9,.42],color:Ql,jitter:.1}),P(Ue(.12),{pos:[-.27,.56,0],color:tc,jitter:.1}),P(Ue(.12),{pos:[.27,.56,0],color:tc,jitter:.1})]));o.add(a);let l=xn(Gt([P(Ue(.19),{pos:[.02,.28,-.27],scale:[1,1.15,.75],color:8215093}),P(si(.05,.08,.06,8),{pos:[.02,.5,-.27],color:6243366}),P(new ds(.2,.014,5,14,Math.PI),{pos:[0,.4,0],rot:[0,0,0],scale:[1,1,1],color:4863268})]));o.add(l);let c=new kt;c.position.y=.68,o.add(c);let h=new kt;h.position.y=.06,c.add(h),h.add(xn(Gt([P(si(.06,.07,.1,8),{pos:[0,-.02,0],color:qh}),P(Ue(.125,14),{pos:[0,.14,.01],scale:[.95,1.08,1.05],color:gn}),P(Ue(.08,10),{pos:[0,.07,.07],scale:[1.1,.8,.9],color:gn}),P(new dn(.19,.035,.05),{pos:[0,.185,.11],color:qh}),P(Ue(.02),{pos:[-.045,.165,.118],color:1314056}),P(Ue(.02),{pos:[.045,.165,.118],color:1314056}),P(Ue(.02),{pos:[0,.135,.14],scale:[1,1.2,1.2],color:qh}),P(Ue(.095,10),{pos:[0,.055,.075],scale:[1.05,.9,.8],color:_o,jitter:.2}),P(Ue(.135,12),{pos:[0,.19,-.02],scale:[1.05,.85,1.05],color:_o,jitter:.25}),P(Ue(.1,8),{pos:[0,.1,-.11],scale:[1.1,1.3,.8],color:_o,jitter:.25}),P(Ue(.06,8),{pos:[-.12,.12,-.03],color:_o,jitter:.25}),P(Ue(.06,8),{pos:[.12,.12,-.03],color:_o,jitter:.25}),P(si(.012,.012,.12,5),{pos:[.1,.24,-.02],rot:[0,0,.5],color:Yh})])));let d=p=>{let y=new kt;y.position.set(p*.26,.6,0),o.add(y),y.add(xn(Gt([P(Ue(.075),{pos:[0,0,0],color:gn}),P(si(.07,.055,.3),{pos:[0,-.15,0],color:gn}),P(si(.08,.07,.07),{pos:[0,-.08,0],color:ec})])));let E=new kt;return E.position.y=-.3,y.add(E),E.add(xn(Gt([P(si(.055,.045,.28),{pos:[0,-.14,0],color:gn}),P(si(.062,.062,.05),{pos:[0,-.2,0],color:ec}),P(Ue(.05),{pos:[0,-.3,0],color:gn})]))),{shoulder:y,elbow:E}},u=d(-1),f=d(1),m=new kt;m.position.set(0,-.3,.02),f.elbow.add(m),m.add(xn(Gt([ie([0,-.6,0],[0,1.45,0],.025,.02,J_),P(new Si(.045,.24,6),{pos:[0,1.56,0],color:Cf,flat:!0}),P(si(.032,.032,.09,6),{pos:[0,1.4,0],color:12098154}),P(new Si(.028,.08,5),{pos:[0,1.32,0],rot:[Math.PI,0,0],color:Yh})])));let x=xn(Gt([P(si(.012,.012,.1,5),{pos:[.16,-.05,.13],rot:[.2,0,0],color:5913120}),P(new Si(.02,.12,4),{pos:[.16,-.14,.14],rot:[Math.PI+.2,0,0],color:Cf})]));return e.add(x),n.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),{root:n,body:t,hips:e,torso:o,head:h,neck:c,legL:s,legR:r,armL:u,armR:f,spear:m,sack:l,phase:0,speedBlend:0,crouch:0,action:null,actionT:0,aim:0}}function If(n,t,e,i){let s=1-Math.exp(-e*10);n.speedBlend=ee(n.speedBlend,t.speed,s),n.crouch=ee(n.crouch,t.crouching?1:0,1-Math.exp(-e*9)),n.aim=ee(n.aim,t.aiming?1:0,1-Math.exp(-e*12));let r=n.speedBlend,o=n.crouch;n.phase+=e*(2+r*1.55)*(t.grounded?1:.2);let a=Math.min(1,r/2.2),l=Math.sin(n.phase*2)*a,c=.75*(.6+Math.min(r,7)/7*.7),h=-.95*o,d=1.5*o,u=w=>Math.max(0,w);n.legL.thigh.rotation.x=-l*c+h,n.legR.thigh.rotation.x=l*c+h,n.legL.knee.rotation.x=u(l)*.9*a+d,n.legR.knee.rotation.x=u(-l)*.9*a+d,t.grounded||(n.legL.thigh.rotation.x=-.6,n.legR.thigh.rotation.x=.3,n.legL.knee.rotation.x=.8,n.legR.knee.rotation.x=.4);let f=Math.abs(Math.sin(n.phase*2))*.05*a;n.hips.position.y=.95-o*.34+f-(1-a)*0,n.body.rotation.x=o*.28+(t.sprint?.14:0)*a,n.torso.rotation.y=-l*.18*a,n.torso.rotation.x=.03*Math.sin(i*1.6)*(1-a)-o*.1,n.head.rotation.x=-o*.25-n.body.rotation.x*.6;let m=Math.sin(i*1.6)*.03,x=l*c*.9+m,g=-.15-u(-l)*.5*a,p=-l*c*.5-.2,y=-.5,E=.08,M=[-.25,0,0];if(n.aim>.01){let w=n.aim;p=ee(p,-2.55,w),y=ee(y,-.4,w),x=ee(x,-1,w),M=[ee(-.25,-1.45,w),0,0]}if(n.action){n.actionT+=e;let w={thrust:.42,throw:.4,gather:.55,hit:.5}[n.action]||.4,S=Ot(n.actionT/w,0,1);if(n.action==="thrust"){let A=Math.sin(S*Math.PI);p=ee(p,-1.55,A),y=ee(y,-.1,A),M=[ee(M[0],-1.5,A),0,0],n.torso.rotation.y+=.35*(1-A)-.2*A,n.body.rotation.x+=.15*A}else if(n.action==="throw"){let A=S<.35?-Math.sin(S/.35*Math.PI*.5):1-(S-.35)/.65;p=S<.35?ee(-2.55,-2.9,S/.35):ee(-1.3,-2.55,(S-.35)/.65),M=[-1.45,0,0],n.body.rotation.x+=.1*(1-S)}else if(n.action==="gather"){let A=Math.sin(S*Math.PI);n.body.rotation.x+=.55*A,p=ee(p,-.9-.9*Math.sin(S*Math.PI*3),A),x=ee(x,-.6,A)}S>=1&&(n.action=null)}n.armL.shoulder.rotation.x=x,n.armL.elbow.rotation.x=g,n.armL.shoulder.rotation.z=-.08,n.armR.shoulder.rotation.x=p,n.armR.elbow.rotation.x=y,n.armR.shoulder.rotation.z=E,n.spear.rotation.set(M[0],M[1],M[2]),n.spear.visible=!n.spearHidden}function Pf(n,t){n.action=t,n.actionT=0}function K_(){let n=Gt([ie([0,0,-.9],[0,0,.85],.022,.018,7228720),P(new Si(.04,.22,6),{pos:[0,0,.98],rot:[Math.PI/2,0,0],color:9277324,flat:!0}),P(new ke(.03,.03,.08,6),{pos:[0,0,.82],rot:[Math.PI/2,0,0],color:12098154})]),t=new le(n,_i);return t.castShadow=!0,t}var ic=class{constructor(t){this.ctx=t,this.pos=new R(Dt.x+3,0,Dt.z+4),this.pos.y=t.world.heightAt(this.pos.x,this.pos.z),this.vy=0,this.grounded=!0,this.yaw=Math.PI,this.speed=0,this.health=100,this.food=85,this.water=85,this.crouching=!1,this.sprinting=!1,this.aiming=!1,this.observing=!1,this.crouchAmt=0,this.noiseRadius=6,this.visibility=1,this.noiseBoost=0,this.invuln=0,this.knock={x:0,z:0},this.attackCd=0,this.pendingHit=null,this.stepDist=0,this.inWater=!1,this.cover=!1,this._coverT=0,this.rig=Rf(),t.scene.add(this.rig.root),this.spears=[],this.pickups=[],this.dead=!1,this.regenBlock=0,this.lastGround="grass"}get forward(){return{x:Math.sin(this.yaw),z:Math.cos(this.yaw)}}playAction(t){Pf(this.rig,t)}addNoise(t){this.noiseBoost=Math.max(this.noiseBoost,t)}hurt(t,e,i){if(this.invuln>0||this.dead)return;this.health-=t,this.invuln=1.1;let s=Math.hypot(this.pos.x-e,this.pos.z-i)||1;this.knock.x=(this.pos.x-e)/s*9,this.knock.z=(this.pos.z-i)/s*9,this.vy=4,this.grounded=!1,this.ctx.cam.shake=.35,this.ctx.ui.flashDamage(),this.ctx.audio.play("hurt"),this.health<=0&&this.die()}die(){this.dead=!0,this.ctx.ui.showDeath(),setTimeout(()=>{this.dead=!1,this.health=60,this.food=Math.max(this.food,40),this.water=Math.max(this.water,40),this.pos.set(Dt.x+3,this.ctx.world.heightAt(Dt.x+3,Dt.z+4),Dt.z+4),this.vy=0,this.ctx.ui.hideDeath()},2600)}eat(){let{inventory:t,ui:e,audio:i}=this.ctx,s=t.best("food");if(!s){e.toast("Rien \xE0 manger \u2014 chasse ou cueille des baies","warn");return}let r={meat:{food:12,water:0,hurt:6},cooked:{food:40,water:0,heal:6},berry:{food:8,water:6}}[s];t.remove(s,1),this.food=Ot(this.food+r.food,0,100),this.water=Ot(this.water+r.water,0,100),r.hurt&&(this.health-=r.hurt,e.toast("Viande crue : mieux vaut la cuire au feu !","warn")),r.heal&&(this.health=Ot(this.health+r.heal,0,100)),i.play("eat"),e.toast(s==="berry"?"Tu manges des baies":s==="cooked"?"Tu manges de la viande cuite":"Tu manges de la viande crue","info")}drink(){this.water=Ot(this.water+28,0,100),this.playAction("gather"),this.ctx.audio.play("drink")}attack(){if(this.attackCd>0||this.dead)return;let t=this.ctx.inventory,e=(t.spears>0,t.weaponDef);this.attackCd=.65,this.playAction("thrust"),this.pendingHit={t:.16,dmg:t.spears>0?e.melee:9,range:t.spears>0?e.range:1.9},this.addNoise(24),this.ctx.audio.play("swing")}throwSpear(){let t=this.ctx.inventory;if(this.attackCd>0||this.dead)return;if(t.spears<=0){this.ctx.ui.toast("Plus de lance ! Ramasse-la ou fabrique-en une (sac \u2192 fabrication)","warn");return}this.attackCd=.9,t.spears-=1,t._emit(),this.playAction("throw");let e=this.ctx.camera,i=new R;e.getWorldDirection(i);let s=new R(this.pos.x,this.pos.y+1.55,this.pos.z).addScaledVector(i,.9),o=new R().copy(e.position).addScaledVector(i,40).sub(s).normalize().multiplyScalar(34);o.y+=1.6;let a=K_();a.position.copy(s),this.ctx.scene.add(a),this.spears.push({mesh:a,pos:s.clone(),vel:o,life:4,dmg:t.weaponDef.throw}),this.addNoise(26),this.ctx.audio.play("throw")}_updateSpears(t){let{world:e,animals:i,fx:s,audio:r}=this.ctx;for(let o=this.spears.length-1;o>=0;o--){let a=this.spears[o];a.life-=t;let l=a.pos.clone();a.vel.y-=9.5*t,a.pos.addScaledVector(a.vel,t),a.mesh.position.copy(a.pos),a.mesh.lookAt(a.pos.x+a.vel.x,a.pos.y+a.vel.y,a.pos.z+a.vel.z);let c=i.hitSegment(l,a.pos,.15);if(c){c.damage(a.dmg,this.pos.x,this.pos.z),this._dropSpear(c.x+(Math.random()-.5)*1.5,c.z+(Math.random()-.5)*1.5,a.mesh),this.spears.splice(o,1),this.ctx.events.emit("hit-animal",c);continue}let h=e.heightAt(a.pos.x,a.pos.z);(a.pos.y<=h+.05||a.life<=0)&&(s.burst(a.pos.x,h+.1,a.pos.z,6,{color:9140826,size:.2,life:.6,gravity:3},1.2,1.4),r.play("thud"),this._dropSpear(a.pos.x,a.pos.z,a.mesh,h),this.spears.splice(o,1))}for(let o=this.pickups.length-1;o>=0;o--){let a=this.pickups[o];a.life-=t,Math.hypot(a.mesh.position.x-this.pos.x,a.mesh.position.z-this.pos.z)<1.7&&Math.abs(a.mesh.position.y-this.pos.y)<2?(this.ctx.scene.remove(a.mesh),this.pickups.splice(o,1),this.ctx.inventory.addSpear(1),r.play("pickup"),this.ctx.ui.toast("Lance r\xE9cup\xE9r\xE9e","info")):a.life<=0&&(this.ctx.scene.remove(a.mesh),this.pickups.splice(o,1))}}_dropSpear(t,e,i,s){let r=(s??this.ctx.world.heightAt(t,e))+.12;i.position.set(t,r,e),i.rotation.set(.15,Math.random()*6.28,0),this.pickups.push({mesh:i,life:300}),i.userData.pickup=!0}update(t,e,i,s){let{world:r,camp:o,animals:a,fx:l,audio:c,ui:h}=this.ctx,d=i.enabled&&!this.dead,u=d?i.move:{x:0,y:0};d&&i.pressed("crouch")&&(this.crouching=!this.crouching),s==="build"?this.aiming=!1:this.aiming=d&&i.mouse.right&&i.locked,this.observing=d&&(i.isDown("observe")||!!this.observeHold)&&s!=="build",this.sprinting=d&&i.isDown("sprint")&&u.y>0&&!this.crouching&&!this.aiming&&!this.observing,this.sprinting&&(this.crouching=!1),this.crouchAmt=An(this.crouchAmt,this.crouching?1:0,8,t);let f=r.terrain.waterDepth(this.pos.x,this.pos.z);this.inWater=f>.12;let m=this.crouching?2.1:this.sprinting?7:4.3;this.aiming&&(m*=.55),this.observing&&(m*=.45),this.inWater&&(m*=.6),(this.pendingHit||this.rig.action==="gather")&&(m*=.4);let x=e.forward,g=e.right,p=x.x*u.y+g.x*u.x,y=x.z*u.y+g.z*u.x,E=Math.hypot(p,y),M=E>.05;M&&(p/=E,y/=E);let w=M?{x:p*m*Math.min(1,E),z:y*m*Math.min(1,E)}:{x:0,z:0};this.vel=this.vel||{x:0,z:0};let S=this.grounded?14:3;this.vel.x=An(this.vel.x,w.x,S,t),this.vel.z=An(this.vel.z,w.z,S,t),this.knock.x*=Math.exp(-t*5),this.knock.z*=Math.exp(-t*5);let A=(this.vel.x+this.knock.x)*t,v=(this.vel.z+this.knock.z)*t,T=r.terrain,I=(X,j)=>{let et=this.pos.x+X,wt=this.pos.z+j,Et=T.heightAt(et,wt)-T.heightAt(this.pos.x,this.pos.z),me=Math.hypot(X,j);return me>1e-5&&Et/me>1.35&&this.grounded&&this.pos.y<T.heightAt(et,wt)-.2||T.waterDepth(et,wt)>1.18?!1:(this.pos.x=et,this.pos.z=wt,!0)};I(A,v)||I(A,0)||I(0,v);let N=Vt.half-5;this.pos.x=Ot(this.pos.x,-N,N),this.pos.z=Ot(this.pos.z,-N,N),r.colliders.resolve(this.pos,.36),o.collide(this.pos,.36,this.pos.y),r.colliders.resolve(this.pos,.36);let O=T.heightAt(this.pos.x,this.pos.z),V=o.surfaceAt(this.pos.x,this.pos.z,this.pos.y+.62),L=Math.max(O,V);this.lastGround=V>O?"wood":this.inWater?"water":"grass",d&&i.pressed("jump")&&this.grounded&&!this.crouching&&(this.vy=5.4,this.grounded=!1,this.addNoise(16)),this.grounded&&(this.pos.y-L>.35?this.grounded=!1:this.pos.y+=(L-this.pos.y)*Math.min(1,t*22),Math.abs(this.pos.y-L)<.001&&(this.pos.y=L)),this.grounded||(this.vy-=17*t,this.pos.y+=this.vy*t,this.pos.y<=L&&(this.vy<-7&&(c.play("thud"),this.addNoise(18),this.hurtFall(-this.vy)),this.pos.y=L,this.vy=0,this.grounded=!0));let H=Math.atan2(x.x,x.z);this.aiming||this.observing?this.yaw=jn(this.yaw,H,14,t):M?this.yaw=jn(this.yaw,Math.atan2(p,y),11,t):this.rig.action==="thrust"&&(this.yaw=jn(this.yaw,H,10,t)),this.speed=Math.hypot(this.vel.x,this.vel.z);let q=this.speed;if(this.grounded&&q>.5){this.stepDist+=q*t;let X=this.sprinting?2.3:this.crouching?1.2:1.6;this.stepDist>X&&(this.stepDist=0,c.step(this.lastGround,this.crouching?.35:this.sprinting?1:.65),this.inWater&&l.burst(this.pos.x,Ve+.05,this.pos.z,4,{color:14675954,size:.16,life:.5,gravity:5,alpha:.7},1,1.6))}this.noiseBoost=Math.max(0,this.noiseBoost-t*22);let Y=q<.4?this.crouching?2.5:6:this.sprinting?30:this.crouching?6.5:16;this.inWater&&q>.4&&(Y+=6),this.lastGround==="wood"&&q>.4&&(Y+=3),this.noiseRadius=Math.max(Y,this.noiseBoost),this._coverT-=t,this._coverT<=0&&(this._coverT=.3,this.cover=!!r.veg.nearest(this.pos.x,this.pos.z,2.6,X=>X.kind==="tree"||X.kind==="bush"));let it=1;if(this.crouching&&(it*=.5),q<.4&&(it*=.7),this.cover&&(it*=.75),this.sprinting&&(it*=1.25),this.visibility=it,this.attackCd=Math.max(0,this.attackCd-t),this.invuln=Math.max(0,this.invuln-t),this.pendingHit&&(this.pendingHit.t-=t,this.pendingHit.t<=0)){let X=this.pendingHit;this.pendingHit=null;let j=a.meleeHit(this.pos.x,this.pos.z,this.yaw,X.range);j&&(j.damage(X.dmg,this.pos.x,this.pos.z),this.ctx.cam.shake=.12,this.ctx.events.emit("hit-animal",j))}if(d&&s!=="build")for(let X of i.takeClicks())X.button===0&&i.locked?this.aiming?this.throwSpear():this.attack():!i.locked&&!X.drag&&X.button===0&&i.requestLock();this._updateSpears(t),this._survive(t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.spearHidden=this.ctx.inventory.spears<=0,If(this.rig,{speed:this.speed,crouching:this.crouching,aiming:this.aiming,sprint:this.sprinting,inWater:this.inWater,grounded:this.grounded},t,this.ctx.time)}hurtFall(t){let e=(t-7)*6;e>0&&(this.health-=e,this.ctx.ui.flashDamage(),this.health<=0&&this.die())}_survive(t){let{camp:e}=this.ctx,i=e.level().level>=2&&e.nearFire(this.pos.x,this.pos.z,12),s=i?.55:1;this.food=Ot(this.food-t*.085*s*(this.sprinting?1.6:1),0,100),this.water=Ot(this.water-t*.13*s*(this.sprinting?1.8:1),0,100),this.food<=0||this.water<=0?(this.health-=t*1.2,this.regenBlock=4,this.health<=0&&!this.dead&&this.die()):(this.regenBlock-=t,this.regenBlock<=0&&this.food>25&&this.water>25&&this.health<100&&(this.health=Ot(this.health+t*(i?2.4:.9),0,100))),this.invuln>.9&&(this.regenBlock=6),this._warnT=(this._warnT||0)-t,this._warnT<=0&&(this.food<22?(this._warnT=50,this.ctx.ui.toast("Tu as faim \u2014 mange (F). La viande se cuit au feu.","warn")):this.water<22&&(this._warnT=50,this.ctx.ui.toast("Tu as soif \u2014 bois \xE0 la rivi\xE8re (E).","warn"))),this.health=Ot(this.health,0,100)}serialize(){return{x:this.pos.x,y:this.pos.y,z:this.pos.z,yaw:this.yaw,health:this.health,food:this.food,water:this.water}}load(t){t&&(this.pos.set(t.x,this.ctx.world.heightAt(t.x,t.z)+.1,t.z),this.yaw=t.yaw||0,this.health=Math.max(20,t.health??100),this.food=t.food??80,this.water=t.water??80,this.pos.y=Math.max(this.pos.y,t.y||0))}};var nc=class{constructor(t,e){this.camera=t,this.world=e,this.yaw=.4,this.pitch=.32,this.dist=6.4,this.buildDist=10,this.fov=62,this.pos=new R,this.target=new R,this._init=!1,this.shake=0,this.sens=.0024}get forward(){return{x:-Math.sin(this.yaw),z:-Math.cos(this.yaw)}}get right(){return{x:Math.cos(this.yaw),z:-Math.sin(this.yaw)}}update(t,e,i,s,r,o){this.yaw-=r.x*this.sens,this.pitch=Ot(this.pitch+r.y*this.sens,s==="build"?.15:-.32,s==="build"?1.45:1.15),s==="build"&&(this.buildDist=Ot(this.buildDist+o*1.3,4,24));let a=e.aiming,l=e.observing,c=s==="build"?this.buildDist:a?3.4:l?.6:6.2-(e.crouchAmt||0)*.6,h=l?26:a?46:s==="build"?58:62+(e.sprinting?5:0),d=s==="build"?0:a?.75:l?0:.5,u=s==="build"?1:l?e.crouching?1.15:1.6:e.crouching?1.15:1.5;this.fov=An(this.fov,h,7,t),this.curDist=An(this.curDist??c,c,8,t),this.curShoulder=An(this.curShoulder??d,d,8,t),this.curHeight=An(this.curHeight??u,u,8,t);let f=e.pos.x,m=e.pos.z,x=e.pos.y,g=f+Math.cos(this.yaw)*this.curShoulder,p=m-Math.sin(this.yaw)*this.curShoulder,y=x+this.curHeight,E=Math.cos(this.pitch),M=Math.sin(this.pitch),w=Math.sin(this.yaw)*E,S=M,A=Math.cos(this.yaw)*E,v=this.curDist;for(let V=0;V<12;V++){let L=g+w*v,H=p+A*v,q=y+S*v,Y=this.world.heightAt(L,H);if(q>Y+.35&&!(this.world.colliders.hits(L,H,.4)&&q<Y+3.2)&&!(this.camp&&this.camp.hitsPoint(L,q,H)))break;v*=.88}let T=g+w*v,I=Math.max(y+S*v,this.world.heightAt(g+w*v,p+A*v)+.35),N=p+A*v;this._init||(this.pos.set(T,I,N),this.target.set(g,y,p),this._init=!0);let O=1-Math.exp(-t*26);this.pos.x=ee(this.pos.x,T,O),this.pos.y=ee(this.pos.y,I,O),this.pos.z=ee(this.pos.z,N,O),this.target.x=ee(this.target.x,g,O),this.target.y=ee(this.target.y,y,O),this.target.z=ee(this.target.z,p,O),this.camera.position.copy(this.pos),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake*=Math.exp(-t*9)),this.camera.lookAt(this.target),e.rig.root.visible=this.curDist>1.8,Math.abs(this.camera.fov-this.fov)>.05&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var j_={tree:"l\u2019arbre",rock:"la pierre",plant:"des fibres",bush:"les baies",branch:"une branche"},Q_={tree:"Couper",rock:"Casser",plant:"Cueillir",bush:"Cueillir",branch:"Ramasser"},sc=class{constructor(t){this.ctx=t,this.target=null,this.cd=0,this._t=0;let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=i.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,240,190,1)"),s.addColorStop(.35,"rgba(255,214,120,.55)"),s.addColorStop(1,"rgba(255,200,90,0)"),i.fillStyle=s,i.fillRect(0,0,64,64),this.marker=new kr(new Qs({map:new Gr(e),transparent:!0,depthTest:!1,depthWrite:!1,blending:ms,fog:!1})),this.marker.renderOrder=40,this.marker.visible=!1,this.marker.scale.setScalar(.7),t.scene.add(this.marker)}scan(){let{player:t,world:e,camp:i,animals:s,inventory:r}=this.ctx,o=t.pos,a=t.forward,l=[],c=s.nearestCarcass(o.x,o.z,3.4);c&&l.push({score:.2+Math.hypot(c.x-o.x,c.z-o.z)*.1,label:`D\xE9pecer : ${c.animal.def.name}`,run:()=>this.skin(c),pos:[c.x,e.heightAt(c.x,c.z)+1.3,c.z]});for(let f of["chest","fire","bed","workbench"]){let m=i.nearest(f,o.x,o.z,3);if(!m||Math.abs(m.y-o.y)>2)continue;let x=Math.hypot(m.x-o.x,m.z-o.z),g,p;f==="chest"?(g="Ouvrir le coffre",p=()=>this.ctx.ui.openChest(m)):f==="workbench"?(g="Utiliser l\u2019\xE9tabli",p=()=>this.ctx.ui.openInventory("craft")):f==="fire"?r.count("meat")>0?(g=`Cuire la viande (${r.count("meat")})`,p=()=>this.cook()):(g="Se r\xE9chauffer pr\xE8s du feu",p=()=>this.ctx.ui.toast("Le feu cr\xE9pite. Rapporte de la viande crue pour la cuire.","info")):(g=this.ctx.daynight.isNight?"Dormir jusqu\u2019au matin":"Se reposer",p=()=>this.sleep(m)),l.push({score:x*.12,label:g,run:p,pos:[m.x,m.y+(f==="chest"?.9:f==="fire"?1.5:1.2),m.z]})}let h=o.x+a.x*1.3,d=o.z+a.z*1.3;(e.terrain.waterDepth(h,d)>.08||e.terrain.waterDepth(o.x,o.z)>.08)&&l.push({score:.35,label:"Boire",run:()=>this.drink(),pos:null});let u=e.veg.nearest(o.x,o.z,2.9,f=>{let m=f.x-o.x,x=f.z-o.z,g=Math.hypot(m,x);return g<f.r+.4&&(g<1.1||(m*a.x+x*a.z)/g>.15)});if(u){let f=`${Q_[u.kind]} ${j_[u.kind]}${u.maxHits>1?` (${u.hits})`:""}`,m={tree:1.7,rock:.5+u.baseScale*.7,plant:1.2,bush:1.3,branch:.5}[u.kind];l.push({score:Math.hypot(u.x-o.x,u.z-o.z)*.15,label:f,run:()=>this.gather(u),pos:[u.x,u.y+m,u.z]})}return l.sort((f,m)=>f.score-m.score),this.target=l[0]||null,this.target}update(t,e){this.cd=Math.max(0,this.cd-t),this._t-=t,this._t<=0&&(this._t=.08,this.scan());let i=this.target;i&&i.pos&&!this.ctx.builder.active&&e.enabled?(this.marker.visible=!0,this.marker.position.set(i.pos[0],i.pos[1],i.pos[2]),this.marker.scale.setScalar(.55+.12*Math.sin(this.ctx.time*5)),this.marker.material.opacity=.75+.25*Math.sin(this.ctx.time*5)):this.marker.visible=!1,e.enabled&&e.pressed("interact")&&this.use(),e.enabled&&e.pressed("eat")&&this.ctx.player.eat()}use(){this.cd>0||this.ctx.player.dead||this.target&&(this.cd=.4,this.target.run())}gather(t){let{player:e,world:i,inventory:s,ui:r,audio:o,fx:a}=this.ctx;e.playAction("gather"),e.yaw=Math.atan2(t.x-e.pos.x,t.z-e.pos.z);let l=t.kind;o.play(l==="tree"?"chop":l==="rock"?"mine":"pluck"),e.addNoise(l==="tree"?22:l==="rock"?26:7);let c=l==="tree"?6261301:l==="rock"?10131341:l==="bush"?5208620:9416782;a.burst(t.x,t.y+(l==="tree"?2.4:.6),t.z,l==="tree"?10:7,{color:c,size:l==="rock"?.14:.2,life:1.2,gravity:3,alpha:.9},2.4,1.6);let h=i.veg.hit(t,this.ctx.time);if(h){let d=[],u=!1;for(let[f,m]of Object.entries(h)){let x=s.add(f,m);x<m&&(u=!0),x>0&&d.push(`+${x} ${Je[f].name}`)}r.toast(d.length?d.join("  "):"Sac plein !",u?"warn":"good"),l==="tree"&&a.burst(t.x,t.y+3,t.z,22,{color:5208620,size:.26,life:1.8,gravity:2.2,alpha:.9},4,1)}}skin(t){let{animals:e,inventory:i,ui:s,audio:r,player:o}=this.ctx;o.playAction("gather"),r.play("skin");let a=e.lootCarcass(t),l=[];for(let[c,h]of Object.entries(a)){let d=i.add(c,h);d>0&&l.push(`+${d} ${Je[c].name}`)}s.toast(l.join("  ")||"Sac plein !","good"),a.trophy_deer?setTimeout(()=>s.toast("Troph\xE9e rare : Bois du Cerf g\xE9ant ! Expose-le dans ta cabane.","good"),900):(a.trophy_bison||a.trophy_ibex)&&setTimeout(()=>s.toast("Un troph\xE9e ! Il ira bien sur un mur de ta cabane.","good"),900),a.meat&&!this._meatTip&&(this._meatTip=!0,setTimeout(()=>s.toast("Astuce : la viande crue rend malade \u2014 cuis-la au feu (E).","info"),2200))}cook(){let{inventory:t,ui:e,audio:i,fx:s,player:r}=this.ctx,o=t.count("meat");o&&(t.remove("meat",o),t.add("cooked",o,!1),r.playAction("gather"),i.play("cook"),e.toast(`${o} viande cuite${o>1?"s":""} \u2014 bon app\xE9tit (F pour manger)`,"good"),s.burst(r.pos.x+r.forward.x,r.pos.y+.9,r.pos.z+r.forward.z,12,{color:14277081,size:.3,life:1.4,alpha:.4,grow:2},.6,1.2))}drink(){let{player:t,ui:e}=this.ctx;if(t.water>96){e.toast("Tu n\u2019as pas soif","info");return}t.drink()}sleep(t){let{daynight:e,ui:i,player:s,audio:r}=this.ctx,o=e.hours;if(!(o>=19||o<5)){i.toast("Tu n\u2019as pas sommeil. Reviens \xE0 la nuit tomb\xE9e.","info");return}r.play("sleep"),i.fade(()=>{e.hours=6.2,s.health=100,s.food=Math.max(20,s.food-10),s.water=Math.max(20,s.water-10),i.toast("Tu te r\xE9veilles \xE0 l\u2019aube, repos\xE9","good"),this.ctx.save()})}};var he=(n,t=12)=>new tn(n,t,Math.max(6,t-3)),Ln=(n,t,e,i=7)=>new ke(t,n,e,i),Di=n=>{let t=new le(n,_i);return t.castShadow=!0,t},Pn=(n,t=.06)=>{let e=new st(n);return e.offsetHSL((Math.random()-.5)*t,0,(Math.random()-.5)*t),e.getHex()};function Vi(n,t,e,i,s,r,o,a,l){let c=new kt;c.position.set(n,t,e);let h=i*.52,d=i*.48,u=[P(Ln(a,a*.72,h,7),{pos:[0,-h/2,0],color:s})];l&&u.push(P(he(a*1.6,8),{pos:[0,-h*.35,0],scale:[1,1.8,1.1],color:l})),c.add(Di(Gt(u)));let f=new kt;return f.position.y=-h,c.add(f),f.add(Di(Gt([P(Ln(a*.72,a*.55,d,7),{pos:[0,-d/2,0],color:r}),P(Ln(a*.68,a*.8,a*1.5,7),{pos:[0,-d+a*.75,a*.1],color:o})]))),{pivot:c,knee:f,len:i}}function tv(n){let t=new kt;t.rotation.order="YXZ";let e=new kt;t.add(e);let i=[],s,r,o,a,l;if(n==="bison"){let c=Pn(3876888),h=Pn(2496528),d=Pn(5914150),u=1840658;e.add(Di(Gt([P(he(.62),{pos:[0,1.05,-.55],scale:[1,.95,1.35],color:c,jitter:.12}),P(he(.75),{pos:[0,1.28,.35],scale:[1.05,1.1,1.25],color:h,jitter:.15}),P(he(.5),{pos:[0,1.75,.35],scale:[.9,.9,1.2],color:h,jitter:.15}),P(he(.4),{pos:[0,1.15,.9],scale:[1.1,1,.9],color:d,jitter:.2}),P(he(.3),{pos:[0,.75,.75],scale:[.9,1.4,.9],color:h,jitter:.2})]))),i.push(Vi(-.4,.98,.5,.98,h,d,u,.14,h),Vi(.4,.98,.5,.98,h,d,u,.14,h),Vi(-.36,.95,-.85,.95,c,c,u,.13),Vi(.36,.95,-.85,.95,c,c,u,.13)),r=new kt,r.position.set(0,1.35,.95),e.add(r),s=new kt,s.position.set(0,0,.15),r.add(s),s.add(Di(Gt([P(he(.34,12),{pos:[0,-.2,.25],scale:[.85,1.15,1.15],color:h,jitter:.1}),P(Ln(.16,.22,.42,8),{pos:[0,-.5,.45],rot:[.35,0,0],color:2759698}),P(he(.28),{pos:[0,0,.1],scale:[1.1,.7,.8],color:d,jitter:.2}),P(he(.04),{pos:[-.26,-.12,.42],color:788486}),P(he(.04),{pos:[.26,-.12,.42],color:788486}),P(Ln(.05,.05,.4,5),{pos:[-.2,-.75,.62],color:h}),ie([-.27,0,.25],[-.5,.12,.28],.06,.05,2038292),ie([-.5,.12,.28],[-.55,.36,.3],.05,.02,14077365),ie([.27,0,.25],[.5,.12,.28],.06,.05,2038292),ie([.5,.12,.28],[.55,.36,.3],.05,.02,14077365)]))),o=new kt,o.position.set(0,1.35,-1.35),e.add(o),o.add(Di(Gt([ie([0,0,0],[0,-.55,-.1],.04,.03,c),P(he(.08),{pos:[0,-.6,-.1],scale:[1,1.5,1],color:h})]))),a=1.9,l=1.2}else if(n==="deer"){let c=Pn(10448706),h=14469539,d=Pn(6111273),u=2760728;e.add(Di(Gt([P(he(.5),{pos:[0,1.32,-.35],scale:[.82,.92,1.45],color:c,jitter:.1}),P(he(.5),{pos:[0,1.36,.42],scale:[.85,.95,1.05],color:c,jitter:.1}),P(he(.42),{pos:[0,1.15,0],scale:[.85,.7,1.7],color:h,jitter:.06}),P(he(.25),{pos:[0,1.4,-.98],scale:[1,1,.5],color:15853260}),P(he(.3),{pos:[0,1.75,.6],scale:[.7,1,1],color:d,jitter:.15})]))),i.push(Vi(-.2,1.22,.5,1.22,c,d,u,.075),Vi(.2,1.22,.5,1.22,c,d,u,.075),Vi(-.2,1.22,-.72,1.22,c,d,u,.08),Vi(.2,1.22,-.72,1.22,c,d,u,.08)),r=new kt,r.position.set(0,1.62,.78),r.rotation.x=-.05,e.add(r),r.add(Di(Gt([ie([0,0,0],[0,.55,.32],.2,.13,d,8),P(he(.25),{pos:[0,.12,.05],scale:[.7,1.1,1],color:d,jitter:.2})]))),s=new kt,s.position.set(0,.6,.36),r.add(s),s.add(Di(Gt([P(he(.15,10),{pos:[0,0,.05],scale:[.9,1,1.25],color:c}),P(Ln(.07,.1,.28,8),{pos:[0,-.06,.28],rot:[Math.PI/2+.25,0,0],color:Pn(9266240)}),P(he(.045),{pos:[0,-.09,.42],color:1314832}),P(he(.035),{pos:[-.1,.05,.12],color:788486}),P(he(.035),{pos:[.1,.05,.12],color:788486}),P(he(.08),{pos:[-.14,.14,-.05],scale:[.6,1.4,.6],rot:[0,0,.6],color:c}),P(he(.08),{pos:[.14,.14,-.05],scale:[.6,1.4,.6],rot:[0,0,-.6],color:c}),...[-1,1].flatMap(f=>Wh(f,1.9).map(m=>P(m,{pos:[f*.07,.15,-.06],rot:[-.35,0,0]})))]))),o=new kt,o.position.set(0,1.45,-1.05),e.add(o),o.add(Di(P(he(.08),{pos:[0,-.05,-.05],scale:[.8,1.4,.9],color:15853260}))),a=2.2,l=1.4}else{let c=Pn(8022614),h=12036494,d=Pn(4010280),u=1972243;e.add(Di(Gt([P(he(.36),{pos:[0,.75,-.25],scale:[.85,.9,1.4],color:c,jitter:.12}),P(he(.38),{pos:[0,.8,.28],scale:[.85,1,1.05],color:c,jitter:.12}),P(he(.3),{pos:[0,.62,0],scale:[.85,.7,1.6],color:h}),P(he(.22),{pos:[0,1,.35],scale:[.6,.8,1.2],color:d,jitter:.15})]))),i.push(Vi(-.17,.62,.32,.66,c,d,u,.07),Vi(.17,.62,.32,.66,c,d,u,.07),Vi(-.17,.62,-.5,.66,c,d,u,.075),Vi(.17,.62,-.5,.66,c,d,u,.075)),r=new kt,r.position.set(0,.95,.55),e.add(r),r.add(Di(ie([0,0,0],[0,.22,.2],.15,.11,c,8))),s=new kt,s.position.set(0,.26,.24),r.add(s);let f=[P(he(.12,10),{pos:[0,0,.03],scale:[.9,1,1.2],color:c}),P(Ln(.06,.085,.2,8),{pos:[0,-.05,.2],rot:[Math.PI/2+.2,0,0],color:Pn(7167048)}),P(he(.03),{pos:[-.08,.04,.1],color:788486}),P(he(.03),{pos:[.08,.04,.1],color:788486}),P(Ln(.02,.005,.18,5),{pos:[0,-.2,.28],color:d})];[-1,1].forEach(m=>{let x=null;for(let g=0;g<=9;g++){let p=g/9,y=p*2,E=[m*(.06+Math.sin(y)*.08+p*.05),.1+Math.sin(y)*.5*(1-p*.15),-.04-Math.sin(y*.5)*.22];x&&f.push(ie(x,E,.055*(1-(g-1)/9*.7),.055*(1-g/9*.7),13221274,5)),g>1&&g<9&&g%2===0&&f.push(P(Ln(.045*(1-p*.6),.045*(1-p*.6),.012,6),{pos:E,rot:[0,0,m*.3],color:10326128})),x=E}}),s.add(Di(Gt(f))),o=new kt,o.position.set(0,.85,-.65),e.add(o),o.add(Di(P(he(.05),{pos:[0,0,-.03],scale:[1,1.4,1],color:d}))),a=1.3,l=.8}return i.forEach(c=>e.add(c.pivot)),t.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{kind:n,root:t,body:e,legs:i,head:s,neck:r,tail:o,height:a,hitY:l,phase:Math.random()*6,headPitch:0,bob:0}}function Lf(n){return tv(n)}function Df(n,t,e,i,s,r=0){let o=n.kind,a=o==="bison"?1:o==="deer"?.9:1.1;n.phase+=t*e*(1.6/a)*(1+r*.3);let l=Math.sin(n.phase),c=Ot(e/3,0,1)*(.45+r*.5),h=r>.5;n.legs.forEach((u,f)=>{let m=f<2,x=h?m?l:Math.sin(n.phase+.5):f===0||f===3?l:-l;u.pivot.rotation.x=-x*c*(m?1:-1)*1,u.knee.rotation.x=Math.max(0,m?-x:x)*c*1.1*(m?1:-1)*-1+0,m?u.knee.rotation.x=Math.max(0,x)*c*1.3:u.knee.rotation.x=Math.max(0,-x)*c*1.3});let d=0;i==="graze"?d=o==="bison"?.95:1.05:i==="alert"?d=-.25:i==="charge"?d=.55:i==="move"&&(d=o==="deer"?-.05:.1+Math.sin(n.phase)*.06*c),n.headPitch=ee(n.headPitch,d,1-Math.exp(-t*6)),n.head&&(n.head.rotation.x=n.headPitch*(o==="deer"?.9:1)),n.neck&&(n.neck.rotation.x=(o==="deer"?-.05:0)+n.headPitch*(o==="deer"?.7:.35)),n.body.position.y=Math.abs(Math.sin(n.phase))*.06*c*(1+r),n.body.rotation.z=Math.sin(n.phase)*.03*c,n.tail&&(n.tail.rotation.x=.25+Math.sin(s*3+n.phase)*.12+r*.5)}function Nf(n){n.root.rotation.z=Math.PI/2*.98,n.root.position.y=0,n.legs.forEach((t,e)=>{t.pivot.rotation.x=-.4+e%2*.5,t.knee.rotation.x=.5}),n.head&&(n.head.rotation.x=.3)}var vo={bison:{name:"Bison",hp:120,walk:1.3,run:7.6,radius:1,hitR:1.4,sight:27,hearMul:.85,slope:.62,panic:5,bleed:.5},deer:{name:"Cerf g\xE9ant",hp:85,walk:2.1,run:11.5,radius:.75,hitR:1.15,sight:38,hearMul:1.15,slope:.85,panic:6,bleed:1.1},ibex:{name:"Bouquetin",hp:45,walk:1.9,run:9.8,radius:.5,hitR:.8,sight:33,hearMul:1,slope:3.5,panic:5,bleed:.9}},ii=(n,t)=>n+Math.random()*(t-n),mr=class{constructor(t,e,i,s){this.kind=t,this.def=vo[t],this.ctx=s,this.rig=Lf(t),this.scale=t==="bison"?ii(.92,1.1):t==="deer"?1:ii(.92,1.06),this.rig.root.scale.setScalar(this.scale),s.scene.add(this.rig.root),this.x=e,this.z=i,this.y=s.world.heightAt(e,i),this.yaw=ii(0,6.28),this.speed=0,this.pitch=0,this.state="graze",this.stateT=ii(0,6),this.awareness=0,this.calmT=0,this.hp=this.def.hp,this.wounded=!1,this.dead=!1,this.target=null,this.herd=null,this.home=null,this.lastPrint={x:e,z:i},this.foot=1,this.fleeDir=0,this.retarget=0,this.chargeT=0,this.hitCd=0,this.hop=0,this.zoneIdx=0,this.restUntil=0,this.bedMade=!1,this.mode="graze",this.sync()}get pos(){return{x:this.x,z:this.z}}get label(){return this.def.name}_perceive(t){let{player:e,daynight:i}=this.ctx,s=e.pos.x-this.x,r=e.pos.z-this.z,o=Math.hypot(s,r);this.dPlayer=o;let a=i.nightFactor>.5?.65:1,l=this.state==="rest"?.6:1,c=e.noiseRadius*this.def.hearMul*l*(this.kind==="deer"&&this.state!=="rest",1),h=this.def.sight*e.visibility*l*a,d=Math.sin(this.yaw),u=Math.cos(this.yaw),m=(o>.01?(d*s+u*r)/o:1)>-.35||this.state==="alert",x=o<c,g=o<h&&m;if(x||g){let p=Math.max(x?c:0,g?h:0),y=1-o/Math.max(p,1);this.awareness=Math.min(1.4,this.awareness+t*(.12+y*y*2.6)),this.calmT=0}else this.calmT+=t,this.awareness=Math.max(0,this.awareness-t*.28);return o}_blocked(t,e){let{world:i}=this.ctx;if(Math.abs(t)>Vt.half-6||Math.abs(e)>Vt.half-6)return!0;let s=i.terrain;return!!(s.heightAt(t,e)<Ve+.12||this.def.slope<3&&s.slopeAt(t,e)>this.def.slope||this.home&&this.kind==="ibex"&&Math.hypot(t-this.home.x,e-this.home.z)>this.home.r*1.8&&e>-34)}_move(t,e,i,s,r=5){let o=Math.atan2(t-this.x,e-this.z);this.yaw=jn(this.yaw,o,r,s);let a=Math.max(i*s,.001),l=!1;for(let u of[0,.5,-.5,1,-1,1.7,-1.7]){let f=this.yaw+u*(this.fleeDir||1),m=Math.max(1.2,i*.25)+this.def.radius;if(this._blocked(this.x+Math.sin(f)*m,this.z+Math.cos(f)*m))continue;let x=this.x+Math.sin(f)*a,g=this.z+Math.cos(f)*a,p={x,z:g};this.ctx.world.colliders.resolve(p,this.def.radius*.75),this.x=p.x,this.z=p.z,u!==0&&(this.yaw=jn(this.yaw,f,4,s)),l=!0;break}!l&&this.state==="flee"&&(this.fleeAngle=(this.fleeAngle??this.yaw)+(Math.random()<.5?1:-1)*1.3,this.retarget=0),this.speed=ee(this.speed,l?i:0,1-Math.exp(-s*6));let c=this.x-this.lastPrint.x,h=this.z-this.lastPrint.z,d=this.kind==="bison"?1.5:this.kind==="deer"?1.3:.8;c*c+h*h>d*d&&this.ctx.tracks&&this.speed>.4&&this._leaveTrack(c,h)}_leaveTrack(t,e){let i=this.ctx.tracks,s=Math.atan2(t,e);this.foot*=-1;let r=.14*this.foot,o=this.x+Math.cos(s)*r,a=this.z-Math.sin(s)*r;this.wounded&&this.hp<this.def.hp*.9&&i.add("blood",o,a,s,{sp:this.kind,life:420,mirror:this.foot}),(this.kind==="deer"||this.kind==="bison"||Math.random()<.5)&&i.add("print",o,a,s,{sp:this.kind,life:this.kind==="deer"?780:240,mirror:this.foot}),this.kind==="deer"&&Math.random()<.08&&i.add("branch",this.x+Math.cos(s)*.7,this.z-Math.sin(s)*.7,Math.random()*6.28,{sp:"deer",life:700}),this.lastPrint={x:this.x,z:this.z}}_setState(t){this.state=t,this.stateT=0}startFlee(t,e,i=null){if(this.dead)return;let s=Math.atan2(this.x-t,this.z-e);this.fleeAngle=s+ii(-.5,.5),this.fleeDir=Math.random()<.5?1:-1,this.panic=i||this.def.panic*ii(.85,1.2),this._setState("flee"),this.awareness=1.4,this.kind==="bison"&&this.ctx.audio.at("grunt",this.x,this.z),this.kind==="deer"&&this.ctx.audio.at("bark",this.x,this.z)}_fleeTarget(t,e){if(this.kind==="ibex"){let s=null,r=-1e9;for(let l of Ms){let c=Math.hypot(l.x-t,l.z-e)-Math.hypot(l.x-this.x,l.z-this.z)*.4;c>r&&(r=c,s=l)}let o=Math.random()*6.28,a=Math.random()*s.r*.9;return{x:s.x+Math.cos(o)*a,z:s.z+Math.sin(o)*a}}let i=this.fleeAngle;return Math.hypot(this.x,this.z)>72&&(i+=Bh(i,Math.atan2(-this.x,-this.z))*.6),this.fleeAngle=i,{x:this.x+Math.sin(i)*26,z:this.z+Math.cos(i)*26}}update(t){if(this.dead)return;let{player:e}=this.ctx,i=this._perceive(t);if(this.stateT+=t,this.hitCd=Math.max(0,this.hitCd-t),this.wounded&&(this.hp-=this.def.bleed*t,this.hp<=0)){this.die();return}let s=this.wounded&&this.hp<this.def.hp*.45,r=0,o="graze",a=0;switch(this.state){case"graze":case"walk":case"rest":{if(o=this.state==="graze"?"graze":"move",this.state==="rest"){o="graze",this._rest(t),r=0,this.awareness>.45&&this._setState("alert");break}this._calmBehavior(t),r=this.state==="walk"&&this.target?this.def.walk:0,this.state==="walk"&&this.target&&(this._move(this.target.x,this.target.z,r,t,3),Math.hypot(this.target.x-this.x,this.target.z-this.z)<1.2&&this._arrive()),this.awareness>.32&&this._setState("alert");break}case"alert":{o="alert";let l=Math.atan2(e.pos.x-this.x,e.pos.z-this.z);this.yaw=jn(this.yaw,l,4,t),this.speed=ee(this.speed,0,1-Math.exp(-t*8)),this.awareness>=1?this.herd?this.herd.alarm(this):this.startFlee(e.pos.x,e.pos.z):this.calmT>3.5&&this.awareness<.1&&this._setState("graze"),this.kind==="bison"&&this.awareness>.9&&i<7&&!s&&Math.random()<t*.4&&this.herd&&this.herd.bull===this&&this._charge();break}case"flee":{o="move",a=1,this.retarget-=t,(this.retarget<=0||!this.target)&&(this.retarget=.6,this.target=this._fleeTarget(e.pos.x,e.pos.z)),r=this.def.run*(s?.65:1),this._move(this.target.x,this.target.z,r,t,8),this.panic-=t,this.panic<=0&&(i>this.def.sight*.9||this.panic<-8)&&(this.awareness=.2,this.target=null,this.kind==="deer"?this._deerTravel(e.pos.x,e.pos.z):(this._setState("walk"),this._pickWander()));break}case"charge":{o="charge",a=1,this.chargeT-=t,r=this.def.run*1.18,this._move(e.pos.x,e.pos.z,r,t,7),i<1.9&&this.hitCd<=0&&(this.hitCd=1.6,e.hurt(24,this.x,this.z),this.chargeT=Math.min(this.chargeT,1.2)),(this.chargeT<=0||s)&&this.startFlee(e.pos.x,e.pos.z,6);break}}this.mode=o,Df(this.rig,t,this.speed,o,this.ctx.time,a),this.sync(t)}_calmBehavior(t){if(this.kind==="deer")return this._deerCalm(t);this.state==="graze"&&this.stateT>this._grazeFor()?(this._pickWander(),this._setState("walk")):this.state==="walk"&&!this.target&&this._setState("graze"),this.herd&&this.herd.leader!==this&&this.state==="graze"&&Math.hypot(this.herd.leader.x-this.x,this.herd.leader.z-this.z)>9&&(this._pickWander(),this._setState("walk"))}_grazeFor(){return this._gf||(this._gf=ii(6,20))}_pickWander(){if(this._gf=ii(6,22),this.herd&&this.herd.leader!==this){let t=this.herd.leader,e=ii(0,6.28),i=ii(2,6);this.target={x:t.x+Math.cos(e)*i,z:t.z+Math.sin(e)*i}}else if(this.home){let t=ii(0,6.28),e=Math.sqrt(Math.random())*this.home.r;this.target={x:this.home.x+Math.cos(t)*e,z:this.home.z+Math.sin(t)*e}}else this.target={x:this.x+ii(-8,8),z:this.z+ii(-8,8)};this._blocked(this.target.x,this.target.z)&&(this.target={x:this.x+ii(-4,4),z:this.z+ii(-4,4)})}_arrive(){if(this.kind==="deer"&&this.route)return this._deerArrive();this.target=null,this._setState("graze")}_deerCalm(t){this.state==="graze"?this.stateT>this._grazeFor()&&(this.route?(this.state="walk",this.stateT=0):(this._setState("rest"),this.restUntil=ii(70,150),this._makeBed())):this.state==="walk"&&(this.target||this._setState("graze"))}_rest(t){let{daynight:e}=this.ctx,i=e.hours,s=i>4.5&&i<9.5||i>16.5&&i<21.5;this.speed=ee(this.speed,0,1-Math.exp(-t*8)),this.kind==="deer"?this.stateT>this.restUntil&&s&&this._deerTravel():this.stateT>20&&this._setState("graze")}_makeBed(){this.kind!=="deer"||!this.ctx.tracks||this.ctx.tracks.add("bed",this.x,this.z,this.yaw,{sp:"deer",life:900})}_deerTravel(t,e){let i=Cn.filter((r,o)=>o!==this.zoneIdx),s;t!=null?s=i.sort((r,o)=>Math.hypot(o.x-t,o.z-e)-Math.hypot(r.x-t,r.z-e))[0]:s=i[Math.floor(Math.random()*i.length)],this.zoneIdx=Cn.indexOf(s),this.home=s,this.route=!0,this.target={x:s.x+ii(-3,3),z:s.z+ii(-3,3)},this._setState("walk")}_deerArrive(){this.route=!1,this.target=null,this._setState("graze")}_charge(){this.chargeT=9,this._setState("charge"),this.ctx.audio.at("grunt",this.x,this.z)}damage(t,e,i){if(!this.dead){if(this.awareness<.35&&["graze","walk","rest"].includes(this.state)&&(t*=1.6,this.ctx.ui.toast("Coup pr\xE9cis !","good")),this.hp-=t,this.wounded=!0,this.ctx.fx.burst(this.x,this.y+this.rig.hitY,this.z,14,{color:9049104,size:.16,life:.7,gravity:6,alpha:.9},2.4,2.2),this.ctx.audio.at("hit",this.x,this.z),this.hp<=0){this.die();return}this.herd&&this.herd.alarm(this,!0),this.kind==="bison"&&this.hp>this.def.hp*.5&&Math.random()<.85?this._charge():this.startFlee(e,i,this.def.panic*1.3)}}die(){this.dead||(this.dead=!0,this.state="dead",Nf(this.rig),this.ctx.events.emit("kill",this))}sync(t=.016){let e=this.ctx.world.terrain;this.y=e.heightAt(this.x,this.z);let i=Math.sin(this.yaw),s=Math.cos(this.yaw),r=e.heightAt(this.x+i*.9,this.z+s*.9),o=e.heightAt(this.x-i*.9,this.z-s*.9),a=-Math.atan2(r-o,1.8);this.pitch=ee(this.pitch,a,1-Math.exp(-t*8));let l=0;this.kind==="ibex"&&this.state==="flee"&&(this.hop+=t*9,l=Math.max(0,Math.sin(this.hop))*.55);let c=this.rig.root,h=this.state==="rest"&&this.kind==="deer"?.62:0;c.position.set(this.x,this.y+l-h,this.z),c.rotation.y=this.yaw,c.rotation.x=this.pitch,this.state==="rest"&&this.kind==="deer"&&this.rig.legs.forEach(d=>{d.pivot.rotation.x=-1.3,d.knee.rotation.x=2.5})}dispose(){this.ctx.scene.remove(this.rig.root)}};var ev={deer:1,bison:1.5,ibex:.65};function Uf(){let n=t=>{let e=new nr(.068,7);return e.rotateX(-Math.PI/2),e.scale(.7,1,1.5),e.translate(t,0,0),P(e,{color:16777215})};return Gt([n(-.033),n(.033)])}var rc=class{constructor(t,e){this.world=e,this.scene=t;let i=(s,r)=>new Oi({color:s,roughness:1,emissive:r,emissiveIntensity:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexColors:!0});this.kinds={print:this._mk(Uf(),i(3352090,16760928),700),blood:this._mk(Uf(),i(6951440,16728112),300),branch:this._mk(Gt([ie([-.28,.04,-.1],[.3,.06,.12],.02,.014,14269838),ie([-.1,.05,.14],[.22,.05,-.2],.014,.01,13610620)]),i(16777215,16760928),120),bed:this._mk(Gt([P(new nr(.85,12).rotateX(-Math.PI/2),{color:16777215})]),i(9275973,16769168),24)},this.entries=[],this.discovered=0,this.onDiscover=null,this._d=new Pe,this._t=0}_mk(t,e,i){let s=new hs(t,e,i);s.frustumCulled=!1,s.receiveShadow=!0,s.count=i;let r=new Zt().makeScale(0,0,0);for(let o=0;o<i;o++)s.setMatrixAt(o,r);return this.scene.add(s),{mesh:s,free:Array.from({length:i},(o,a)=>i-1-a),max:i,live:[]}}add(t,e,i,s,{sp:r="deer",life:o=600,mirror:a=1}={}){let l=this.kinds[t];if(!l)return null;let c=l.free.pop();if(c==null){let d=l.live.shift();c=d.idx,this.entries.splice(this.entries.indexOf(d),1)}let h={kind:t,x:e,z:i,yaw:s,sp:r,life:o,age:0,idx:c,mirror:a,found:t!=="print"||r!=="deer",scale:ev[r]||1};return l.live.push(h),this.entries.push(h),this._place(h,1),h}_place(t,e){let i=this.kinds[t.kind],s=this._d,r=this.world.heightAt(t.x,t.z)+.035;s.position.set(t.x,r,t.z),s.rotation.set(0,t.yaw,0);let o=t.scale*e;s.scale.set(o*t.mirror,o,o),s.updateMatrix(),i.mesh.setMatrixAt(t.idx,s.matrix),i.mesh.instanceMatrix.needsUpdate=!0,t.y=r}update(t,e,i,s){for(let r of Object.values(this.kinds))r.mesh.material.emissiveIntensity=i?1.1+.6*Math.sin(s*5):0,r.mesh.material.depthTest=!i,r.mesh.renderOrder=i?30:0;if(this._t-=t,!(this._t>0)){this._t=.4;for(let r=this.entries.length-1;r>=0;r--){let o=this.entries[r];o.age+=.4;let a=o.life-o.age;if(a<=0){let l=this.kinds[o.kind];this._place(o,0),l.free.push(o.idx),l.live.splice(l.live.indexOf(o),1),this.entries.splice(r,1);continue}if(a<45&&this._place(o,a/45),!o.found){let l=o.x-e.x,c=o.z-e.z;l*l+c*c<3.6*3.6&&(o.found=!0,this.discovered++,this.onDiscover&&this.onDiscover(o))}}}}foundDeerTracks(){return this.entries.filter(t=>t.sp==="deer"&&t.found&&t.kind==="print")}};var gr=(n,t)=>n+Math.random()*(t-n),$h=class{constructor(t){this.members=[],this.leader=null,this.bull=null,this.ctx=t}add(t){t.herd=this,this.members.push(t),this.leader||(this.leader=t)}pickLeader(){let t=this.members.filter(e=>!e.dead);this.leader=t[0]||null,this.bull=t.length?t.reduce((e,i)=>e.scale>i.scale?e:i):null}alarm(t,e=!1){let i=this.ctx.player.pos;for(let s of this.members)s.dead||s.state==="flee"||s.state==="charge"||s===t&&e||(s.awareness=1.2,s.startFlee(i.x,i.z,s.def.panic*(.9+Math.random()*.3)),s.fleeAngle=Math.atan2(t.x-i.x,t.z-i.z)+(Math.random()-.5)*.7)}},iv={bison:()=>({meat:6+Math.floor(Math.random()*3),hide:3,bone:2,...Math.random()<.3?{trophy_bison:1}:{}}),deer:()=>({meat:5,hide:2,bone:3,trophy_deer:1}),ibex:()=>({meat:3,hide:1,bone:1,...Math.random()<.3?{trophy_ibex:1}:{}})},oc=class{constructor(t){this.ctx=t,t.tracks=this.tracks=new rc(t.scene,t.world),this.all=[],this.herds=[],this.carcasses=[],this.respawns=[],this.spawnBison(),this.spawnDeer(0,!0),this.spawnIbex(),t.events.on("kill",e=>this._onKill(e))}get deer(){return this.all.find(t=>t.kind==="deer"&&!t.dead)||null}_reg(t){return this.all.push(t),t}spawnBison(){let t=new $h(this.ctx),e=7;for(let i=0;i<e;i++){let s=new mr("bison",Ne.x+gr(-7,7),Ne.z+gr(-7,7),this.ctx);s.home={x:Ne.x,z:Ne.z,r:Ne.r*.7},t.add(s),this._reg(s),i===0&&(s.rig.root.scale.multiplyScalar(1.12),s.scale*=1.12)}t.pickLeader(),this.herds.push(t)}spawnDeer(t=0,e=!1){let i=Cn[t],s=new mr("deer",i.x+gr(-2,2),i.z+gr(-2,2),this.ctx);return s.home=i,s.zoneIdx=t,s.state="rest",s.stateT=0,s.restUntil=gr(60,130),s._makeBed(),this._reg(s),e&&this._layTrail(uo,i),s}_layTrail(t,e){let i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s),o=-s/r,a=i/r,l=12,c=null,h=1,d=0,u=Math.floor(r*1.25/1.3);for(let f=0;f<=u;f++){let m=f/u,x=Math.sin(m*Math.PI)*l+Math.sin(m*17)*.8,g=t.x+i*m+o*x,p=t.z+s*m+a*x;if(!(this.ctx.world.terrain.heightAt(g,p)<Ve+.2)){if(c){let y=Math.atan2(g-c.x,p-c.z);h*=-1;let E=g+Math.cos(y)*.14*h,M=p-Math.sin(y)*.14*h;this.tracks.add("print",E,M,y,{sp:"deer",life:3e3,mirror:h}),++d%9===0&&this.tracks.add("branch",g+Math.cos(y)*.8,p-Math.sin(y)*.8,Math.random()*6.28,{sp:"deer",life:3e3})}c={x:g,z:p}}}this.tracks.add("bed",t.x+1.5,t.z-1,.7,{sp:"deer",life:3e3})}spawnIbex(){let t=[2,2,1];Ms.forEach((e,i)=>{for(let s=0;s<t[i];s++)this._spawnIbexAt(e)})}_spawnIbexAt(t){let e=this.ctx.world.terrain,i=t.x,s=t.z;for(let o=0;o<60;o++){let a=gr(0,6.28),l=Math.sqrt(Math.random())*t.r,c=t.x+Math.cos(a)*l,h=t.z+Math.sin(a)*l;if(e.heightAt(c,h)>2&&e.slopeAt(c,h)>.3){i=c,s=h;break}}let r=new mr("ibex",i,s,this.ctx);return r.home=t,this._reg(r),r}update(t,e){this.ctx.time=e;for(let i of this.all)i.update(t);for(let i of this.herds)i.leader&&i.leader.dead&&i.pickLeader();for(let i=this.carcasses.length-1;i>=0;i--){let s=this.carcasses[i];s.age+=t,(s.age>420||s.looted)&&(this.ctx.scene.remove(s.animal.rig.root),this.carcasses.splice(i,1))}for(let i=this.respawns.length-1;i>=0;i--){let s=this.respawns[i];s.t-=t,s.t<=0&&(s.fn(),this.respawns.splice(i,1))}this.tracks.update(t,this.ctx.player.pos,this.ctx.player.observing,e)}_onKill(t){let e=this.all.indexOf(t);e>=0&&this.all.splice(e,1),this.carcasses.push({animal:t,x:t.x,z:t.z,kind:t.kind,age:0,looted:!1}),this.ctx.inventory.stats.killed[t.kind]=(this.ctx.inventory.stats.killed[t.kind]||0)+1;let i=t.herd;t.kind==="deer"?this.respawns.push({t:360,fn:()=>this.spawnDeer(Math.floor(Math.random()*Cn.length))}):t.kind==="ibex"?this.respawns.push({t:420,fn:()=>this._spawnIbexAt(t.home)}):i&&i.members.every(s=>s.dead)&&(this.herds.splice(this.herds.indexOf(i),1),this.respawns.push({t:480,fn:()=>this.spawnBison()})),this.ctx.ui.toast(`${vo[t.kind].name} abattu \u2014 approche-toi pour le d\xE9pecer`,"good")}nearestCarcass(t,e,i){let s=null,r=i*i;for(let o of this.carcasses){if(o.looted)continue;let a=(o.x-t)**2+(o.z-e)**2;a<r&&(r=a,s=o)}return s}lootCarcass(t){return t.looted=!0,iv[t.kind]()}hitSegment(t,e,i=.2){let s=null,r=2,o=new R().subVectors(e,t),a=o.lengthSq();for(let l of this.all){if(l.dead)continue;let c=new R(l.x,l.y+l.rig.hitY*l.scale,l.z),h=Math.max(0,Math.min(1,new R().subVectors(c,t).dot(o)/(a||1))),d=new R().copy(t).addScaledVector(o,h),u=l.def.hitR*l.scale+i;d.distanceTo(c)<u&&h<r&&(r=h,s=l)}return s}meleeHit(t,e,i,s,r=.55){let o=null,a=1e9;for(let l of this.all){if(l.dead)continue;let c=l.x-t,h=l.z-e,d=Math.hypot(c,h)-l.def.hitR*l.scale*.6;d>s||(Math.sin(i)*c+Math.cos(i)*h)/(Math.hypot(c,h)||1)<r||d<a&&(a=d,o=l)}return o}};var qt=(n,t="")=>`<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${t}>${n}</svg>`,nv={heart:qt('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="currentColor" fill-opacity=".25"/>'),food:qt('<path d="M7 14c-2-4 1-8 5-8 3 0 5 2.5 4.5 5.5C16 15 12 19 9 17.5L5 20l1-4z" fill="currentColor" fill-opacity=".25"/><circle cx="15.5" cy="8.5" r="1"/>'),water:qt('<path d="M12 3.5s6 6.3 6 10.5a6 6 0 0 1-12 0c0-4.2 6-10.5 6-10.5z" fill="currentColor" fill-opacity=".25"/>'),map:qt('<path d="M3 6.5l6-2.5 6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5z" fill="currentColor" fill-opacity=".18"/><path d="M9 4v13.5M15 6.5V20"/>'),bag:qt('<path d="M6 9h12l1.4 10.5a1 1 0 0 1-1 1.1H5.6a1 1 0 0 1-1-1.1z" fill="currentColor" fill-opacity=".2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/>'),build:qt('<path d="M4 20l9-9M12.5 5.5l3-2 5 5-2 3-3-1-1-3z" fill="currentColor" fill-opacity=".2"/><path d="M4 20l2.5-.5"/>'),eye:qt('<path d="M2 12s3.7-6.5 10-6.5S22 12 22 12s-3.700 6.500-10 6.500S2 12 2 12z" fill="currentColor" fill-opacity=".15"/><circle cx="12" cy="12" r="2.8"/>'),crouch:qt('<circle cx="12" cy="5" r="2"/><path d="M12 8v5l-3 3v4M12 13l3 3v4M9 10l-3 1M15 10l3 1"/>'),eat:qt('<path d="M7 14c-2-4 1-8 5-8 3 0 5 2.5 4.5 5.5C16 15 12 19 9 17.5L5 20l1-4z"/>'),close:qt('<path d="M6 6l12 12M18 6L6 18"/>'),snap:qt('<path d="M5 4v7a7 7 0 0 0 14 0V4M5 8h4M15 8h4"/>'),rotate:qt('<path d="M20 12a8 8 0 1 1-3-6.200M20 4v4.500h-4.500"/>'),move:qt('<path d="M12 3v18M3 12h18M12 3l-2.500 2.500M12 3l2.500 2.500M12 21l-2.500-2.500M12 21l2.500-2.500M3 12l2.500-2.500M3 12l2.500 2.500M21 12l-2.500-2.500M21 12l-2.500 2.500"/>'),trash:qt('<path d="M5 7h14M9 7V4.500h6V7M7 7l1 13h8l1-13"/>'),select:qt('<path d="M6 3l12 8-5.500 1.500L15 19l-3 1-2.500-6.500L6 17z" fill="currentColor" fill-opacity=".2"/>'),hint:qt('<circle cx="12" cy="12" r="9"/><path d="M12 8v.5M12 11v5"/>'),sound:qt('<path d="M4 9.500v5h3.500L12 18.500v-13L7.500 9.500zM15.500 9a4 4 0 0 1 0 6M18 6.500a8 8 0 0 1 0 11"/>'),mute:qt('<path d="M4 9.500v5h3.500L12 18.500v-13L7.500 9.500zM16 10l5 4M21 10l-5 4"/>'),moon:qt('<path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500z" fill="currentColor" fill-opacity=".25"/>'),sun:qt('<circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity=".25"/><path d="M12 2.500v2.500M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300l1.800 1.800M16.900 16.900l1.800 1.800M5.300 18.700l1.800-1.800M16.900 7.100l1.800-1.800"/>'),check:qt('<path d="M5 12.500l4.500 4.500L19 7.500"/>'),lock:qt('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),wood:qt('<rect x="3" y="8" width="18" height="8" rx="4" fill="currentColor" fill-opacity=".22"/><circle cx="17" cy="12" r="2"/><path d="M7 10.500h5M7 13.500h3"/>'),stone:qt('<path d="M4 16l3-8 6-2 6 5-2 6-7 1z" fill="currentColor" fill-opacity=".22"/><path d="M7 8l4 3 8 0M11 11l1 7"/>'),fiber:qt('<path d="M12 21c0-6-1-10-6-14M12 21c0-6 1-10 6-14M12 21V5M12 21c-1-3-5-5-8-5M12 21c1-3 5-5 8-5"/>'),hide:qt('<path d="M6 4l3 2h6l3-2 3 5-3 3v8H6v-8L3 9z" fill="currentColor" fill-opacity=".22"/>'),bone:qt('<path d="M8 8a2.500 2.500 0 1 1-3-2 2.500 2.500 0 0 1 4 1.500l6 6a2.500 2.500 0 0 1 4 1.500 2.500 2.500 0 1 1-3 2 2.500 2.500 0 0 1-4-1.500z" fill="currentColor" fill-opacity=".2"/>'),meat:qt('<path d="M7 14c-2-4 1-8 5-8 3 0 5 2.500 4.500 5.500C16 15 12 19 9 17.500L5 20l1-4z" fill="currentColor" fill-opacity=".3"/><circle cx="14.500" cy="9" r="1.200"/>'),cooked:qt('<path d="M7 14c-2-4 1-8 5-8 3 0 5 2.500 4.500 5.500C16 15 12 19 9 17.500L5 20l1-4z" fill="currentColor" fill-opacity=".5"/><path d="M9 3c-1 1 1 2 0 3M13 2c-1 1 1 2 0 3"/>'),berry:qt('<circle cx="9" cy="14" r="4" fill="currentColor" fill-opacity=".3"/><circle cx="16" cy="13" r="3.500" fill="currentColor" fill-opacity=".3"/><path d="M12 9c0-2 1-3.500 3-4.500"/>'),trophy:qt('<path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 20h8" fill="none"/><path d="M7 4h10v5a5 5 0 0 1-10 0z" fill="currentColor" fill-opacity=".22"/>'),spear:qt('<path d="M4 20L18 6M15 4l5 5-5 1z" fill="currentColor" fill-opacity=".3"/>'),camp:qt('<path d="M3 20L12 5l9 15zM12 20v-6" fill="currentColor" fill-opacity=".2"/>'),bison:qt('<path d="M4 14c0-4 3-6 7-6s7 2 8 5v4H6z" fill="currentColor" fill-opacity=".25"/><path d="M4 9l2 1M20 9l-2 1"/>'),rock:qt('<path d="M3 18l4-9 5 3 4-5 5 11z" fill="currentColor" fill-opacity=".25"/>'),mountain:qt('<path d="M2 19l7-12 4 6 3-4 6 10z" fill="currentColor" fill-opacity=".25"/>'),ibex:qt('<path d="M8 20v-5M14 20v-5M6 15c0-3 3-4 6-4s5 1 6 3M8 11c-2-1-3-3-2-6M8 11c0-2 1-4 3-5"/>'),tree:qt('<path d="M12 3l6 9h-3l4 6H5l4-6H6z" fill="currentColor" fill-opacity=".25"/><path d="M12 18v3"/>')},se=n=>nv[n]||"";var Nt=(n,t=document)=>t.querySelector(n),Ff=(n,t,e=!1)=>Object.entries(n).map(([i,s])=>`<span class="chip ${e||t.count(i)>=s?"":"bad"}" title="${Je[i].name}">${se(Je[i].icon)}<b>${s}</b></span>`).join(""),ac=class{constructor(t,e){this.ctx=t,this.root=e,this.modal=null,this.thumbs={},this.toasts=[],this._acc=0,this._miniAcc=0,this.labels=new Map,this.hintsOn=!0,this._buildKey="",e.innerHTML=this._template(),this.el={hp:Nt("#b-hp i"),food:Nt("#b-food i"),water:Nt("#b-water i"),hpN:Nt("#b-hp b"),obj:Nt("#obj"),objT:Nt("#obj .ot"),objX:Nt("#obj .ox"),objD:Nt("#obj .od"),mini:Nt("#mini"),clock:Nt("#clock"),camp:Nt("#camp"),toasts:Nt("#toasts"),prompt:Nt("#prompt"),promptT:Nt("#prompt span"),cross:Nt("#cross"),build:Nt("#buildui"),sheet:Nt("#sheet"),tabs:Nt("#tabs"),cards:Nt("#cards"),bmsg:Nt("#bmsg"),btop:Nt("#btop"),inv:Nt("#inv"),invBody:Nt("#inv-body"),map:Nt("#mapm"),mapCv:Nt("#mapcv"),mapLeg:Nt("#mapleg"),chest:Nt("#chest"),chestBody:Nt("#chest-body"),start:Nt("#start"),death:Nt("#death"),dmg:Nt("#dmg"),fade:Nt("#fade"),resume:Nt("#resume"),labels:Nt("#labels"),quick:Nt("#quick"),hud:Nt("#hud")},this.miniCtx=this.el.mini.getContext("2d"),this.mapCtx=this.el.mapCv.getContext("2d"),this._wire(),this._buildHints()}_template(){return`
    <div id="hud">
      <div id="stats">
        <div class="stat" id="b-hp">${se("heart")}<div class="bar"><i></i></div><b>100</b></div>
        <div class="stat" id="b-food">${se("food")}<div class="bar"><i></i></div></div>
        <div class="stat" id="b-water">${se("water")}<div class="bar"><i></i></div></div>
      </div>
      <div id="obj"><div class="ot"></div><div class="ox"></div><div class="od"></div></div>
      <div id="topright">
        <button id="btn-map" class="mapbtn"><canvas id="mini" width="240" height="240"></canvas><span>${se("map")} MAP</span></button>
        <div class="row"><button data-act="mute" id="mutebtn" title="Son (N)">${se("sound")}</button><div id="clock"></div></div>
      </div>
      <div id="camp"></div>
      <div id="toasts"></div>
      <div id="cross"></div>
      <div id="prompt"><kbd>E</kbd><span></span></div>
      <div id="quick">
        <button data-act="eat" title="Manger (F)" data-k="KeyF">${se("eat")}<i class="key"></i></button>
        <button data-act="crouch" title="Accroupi (C)" data-k="KeyC">${se("crouch")}<i class="key"></i></button>
        <button data-act="observe" title="Observer (Q, maintenu)" data-k="KeyQ">${se("eye")}<i class="key"></i></button>
        <button data-act="inventory" class="big" title="Sac (I)" data-k="KeyI">${se("bag")}<small>SAC</small><i class="key"></i></button>
        <button data-act="build" class="big accent" title="Construire (B)" data-k="KeyB">${se("build")}<small>B\xC2TIR</small><i class="key"></i></button>
      </div>
      <div id="labels"></div>
    </div>
    <div id="buildui" class="hidden">
      <div id="btop">
        <button data-act="build" class="pill exit">${se("close")} Quitter</button>
        <div class="bt-title">CONSTRUCTION<small></small></div>
        <button data-act="snap" class="pill snap">${se("snap")} <span>Aimant</span></button>
      </div>
      <div id="bside">
        <button data-act="rotate" title="Pivoter (R)">${se("rotate")}<small>R</small></button>
        <button data-act="grab" title="D\xE9placer (G)">${se("move")}<small>G</small></button>
        <button data-act="delete" title="Supprimer (Suppr)">${se("trash")}<small>Suppr</small></button>
        <button data-act="help" title="Aide">${se("hint")}<small>H</small></button>
      </div>
      <div id="bmsg"></div>
      <div id="sheet"><div id="tabs"></div><div id="cards"></div></div>
    </div>
    <div class="modal hidden" id="inv"><div class="panel"><div class="ph"><div id="inv-tabs"></div><button data-close class="x">${se("close")}</button></div><div id="inv-body"></div></div></div>
    <div class="modal hidden" id="mapm"><div class="panel"><div class="ph"><h3>Carte</h3><button data-close class="x">${se("close")}</button></div><canvas id="mapcv" width="720" height="720"></canvas><div id="mapleg"></div></div></div>
    <div class="modal hidden" id="chest"><div class="panel"><div class="ph"><h3>Coffre</h3><button data-close class="x">${se("close")}</button></div><div id="chest-body"></div></div></div>
    <div id="resume" class="hidden"><div>Clique pour reprendre \u2014 souris captur\xE9e<br><small>\xC9chap pour lib\xE9rer la souris</small></div></div>
    <div id="dmg"></div><div id="fade"></div>
    <div id="death" class="hidden"><div>Tu t\u2019\xE9vanouis\u2026<small>Tu te r\xE9veilles au camp.</small></div></div>
    <div id="start"></div>`}_wire(){let t=this.ctx;this.root.addEventListener("click",i=>{let s=i.target.closest("button");s&&(s.dataset.act&&(t.audio.play("click"),this.action(s.dataset.act)),s.hasAttribute("data-close")&&this.closeModal())}),this.root.addEventListener("mousedown",i=>i.stopPropagation()),Nt("#btn-map").addEventListener("click",()=>this.openMap());let e=this.root.querySelector('[data-act="observe"]');e.addEventListener("pointerdown",i=>{i.preventDefault(),t.player.observeHold=!0}),addEventListener("pointerup",()=>{t.player.observeHold=!1}),e.addEventListener("click",i=>i.stopPropagation()),t.inventory.onChange(()=>{this._invDirty=!0}),t.builder.onChange(()=>{this._buildDirty=!0}),t.camp.onChange(()=>{this._buildDirty=!0,this._invDirty=!0}),t.input.onLockChange=i=>{this._lockChanged=!0}}action(t){let e=this.ctx;switch(t){case"eat":e.player.eat();break;case"crouch":e.player.crouching=!e.player.crouching;break;case"observe":break;case"inventory":this.modal==="inv"?this.closeModal():this.openInventory("bag");break;case"build":e.toggleBuild();break;case"snap":e.builder.toggleSnap();break;case"rotate":e.builder.rotate();break;case"grab":e.builder.grab();break;case"delete":e.builder.deleteHover();break;case"help":this.toggleHints();break;case"mute":{let i=e.audio.toggleMute();Nt("#mutebtn").innerHTML=se(i?"mute":"sound");break}}}get modalOpen(){return!!this.modal}_open(t,e){this.closeModal(!0),this.modal=t,e.classList.remove("hidden"),this.ctx.input.enabled=!1,this.ctx.input.releaseLock(),this.ctx.audio.play("open")}closeModal(t=!1){if(this.modal){for(let e of[this.el.inv,this.el.map,this.el.chest])e.classList.add("hidden");this.modal=null,this.chestPiece=null,this.ctx.input.enabled=!0,t||(this.ctx.audio.play("click"),!this.ctx.builder.active&&this.ctx.started&&this.ctx.input.requestLock())}}openInventory(t="bag"){this.invTab=t,this._open("inv",this.el.inv),this.renderInv()}renderInv(){let t=this.ctx,e=t.inventory,i=this.invTab,s=[["bag","Sac"],["craft","Fabrication"],["trophy","Troph\xE9es"]];Nt("#inv-tabs").innerHTML=s.map(([a,l])=>`<button class="tab ${i===a?"on":""}" data-tab="${a}">${l}</button>`).join(""),Nt("#inv-tabs").querySelectorAll(".tab").forEach(a=>a.onclick=()=>{this.invTab=a.dataset.tab,this.renderInv(),t.audio.play("click")});let r="";if(i==="bag"){let a=e.cap;r+=`<div class="sub">Capacit\xE9 par ressource : <b>${a}</b> \xB7 sac ${["","simple","en peau","de chasseur"][e.bag]}</div><div class="grid">`;for(let c of mf){let h=e.count(c),d=Je[c];r+=`<div class="cell ${h?"":"empty"}">${se(d.icon)}<div class="cn">${d.name}</div><div class="cv"><b>${h}</b><small>/${a}</small></div>${d.cat==="food"&&h?`<button class="mini" data-eat="${c}">Manger</button>`:""}</div>`}r+="</div>";let l=e.weaponDef;r+=`<div class="weapon">${se("spear")}<div><div class="wn">${l.name}</div><div class="ws">M\xEAl\xE9e ${l.melee} \xB7 Lancer ${l.throw} \xB7 <b>${e.spears}</b> lance${e.spears>1?"s":""} en r\xE9serve</div></div></div>`,r+='<div class="tip">Clic droit maintenu : viser \xB7 clic gauche : lancer. Une lance lanc\xE9e se ramasse en marchant dessus.</div><button class="mini danger" data-reset>Nouvelle partie\u2026</button>'}else if(i==="craft"){let a=t.camp.nearest("workbench",t.player.pos.x,t.player.pos.z,7);r+=`<div class="sub">${a?"\xC9tabli \xE0 proximit\xE9 \u2713":"Certaines recettes demandent un \xE9tabli (Mobilier) \xE0 moins de 7 m"}</div><div class="recipes">`;for(let l of Wl){let c=e.canCraft(l),h=l.bench&&!a,d=l.give.bag&&e.bag>=l.give.bag||l.give.weapon&&e.weapon===l.give.weapon;r+=`<div class="recipe"><div class="rt"><b>${l.name}</b><small>${l.desc}</small></div><div class="rc">${Ff(l.cost,e)}</div><button class="mini ${c&&!h&&!d?"go":""}" data-craft="${l.id}" ${c&&!h&&!d?"":"disabled"}>${d?"Poss\xE9d\xE9":h?"\xC9tabli requis":"Fabriquer"}</button></div>`}r+="</div>"}else{let a=Object.keys(Je).filter(l=>Je[l].cat==="trophy");r+=`<div class="sub">Troph\xE9es expos\xE9s dans ton camp : <b>${t.camp.counts().trophy}</b></div><div class="grid">`;for(let l of a){let c=e.count(l);r+=`<div class="cell ${c?"rare":"empty"}">${se("trophy")}<div class="cn">${Je[l].name}</div><div class="cv"><b>${c}</b></div><small class="rar">${Je[l].rare}</small></div>`}r+='</div><div class="tip">Place-les dans ta cabane : Construire \u2192 D\xE9coration. Un troph\xE9e se pose sur un mur ou sur un pied.</div>'}this.el.invBody.innerHTML=r;let o=this.el.invBody.querySelector("[data-reset]");o&&(o.onclick=()=>{confirm("Effacer la sauvegarde et recommencer ?")&&(bs.clear(),this.ctx.started=!1,location.reload())}),this.el.invBody.querySelectorAll("[data-eat]").forEach(a=>a.onclick=()=>{let l=a.dataset.eat;t.inventory.best("food"),this._eatSpecific(l)}),this.el.invBody.querySelectorAll("[data-craft]").forEach(a=>a.onclick=()=>{let l=Wl.find(c=>c.id===a.dataset.craft);t.inventory.craft(l)&&(t.audio.play("craft"),this.toast(`${l.name} fabriqu\xE9e`,"good"),this.renderInv())})}_eatSpecific(t){let e=this.ctx,i=e.inventory,s=e.player,r=Je[t];i.remove(t,1)&&(s.food=Math.min(100,s.food+r.food),s.water=Math.min(100,s.water+(r.water||0)),r.hurt&&(s.health-=r.hurt,this.toast("Viande crue : mieux vaut la cuire !","warn")),r.heal&&(s.health=Math.min(100,s.health+r.heal)),e.audio.play("eat"),this.renderInv())}openMap(){this._open("map",this.el.map);let t=this.ctx.mapview._poiList().map(e=>`<span>${se(e.icon)} ${e.name}</span>`).join("");this.el.mapLeg.innerHTML=t+'<span class="dim">Les zones inconnues se d\xE9voilent en explorant.</span>',this.drawMap()}drawMap(){let t=this.ctx,e=this.el.mapCv,i=t.objectives.current&&t.objectives.current.target?t.objectives.current.target():null;t.mapview.draw(this.mapCtx,e.width,e.height,{cx:0,cz:0,span:200,rot:0,full:!0,player:t.player,objective:i,camp:t.camp,tracks:t.animals.tracks})}openChest(t){this.chestPiece=t,this._open("chest",this.el.chest),this.renderChest()}renderChest(){let t=this.ctx,e=this.chestPiece;if(!e)return;let i=e.data.items||(e.data.items={}),s=t.inventory,r=(o,a)=>Object.entries(o).filter(([,l])=>l>0).map(([l,c])=>`<button class="cell mv" data-${a}="${l}">${se(Je[l].icon)}<div class="cn">${Je[l].name}</div><div class="cv"><b>${c}</b></div></button>`).join("")||'<div class="dim pad">Vide</div>';this.el.chestBody.innerHTML=`<div class="cols"><div><h4>Sac <small>\u2192 d\xE9poser</small></h4><div class="grid one">${r(s.items,"put")}</div></div><div><h4>Coffre <small>\u2190 reprendre</small></h4><div class="grid one">${r(i,"take")}</div></div></div><button class="mini go wide" data-all>Tout d\xE9poser</button>`,this.el.chestBody.querySelectorAll("[data-put]").forEach(o=>o.onclick=()=>{let a=o.dataset.put,l=s.count(a);s.remove(a,l),i[a]=(i[a]||0)+l,t.audio.play("click"),this.renderChest()}),this.el.chestBody.querySelectorAll("[data-take]").forEach(o=>o.onclick=()=>{let a=o.dataset.take,l=i[a]||0,c=s.add(a,l,!1);i[a]=l-c,c<l&&this.toast("Sac plein","warn"),t.audio.play("click"),this.renderChest()}),this.el.chestBody.querySelector("[data-all]").onclick=()=>{for(let o of Object.keys(s.items)){if(Je[o].cat==="trophy")continue;let a=s.count(o);s.remove(o,a),i[o]=(i[o]||0)+a}t.audio.play("click"),this.renderChest()}}toast(t,e="info"){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i),setTimeout(()=>i.classList.add("out"),3200),setTimeout(()=>i.remove(),3700);this.el.toasts.children.length>5;)this.el.toasts.firstChild.remove()}flashDamage(){let t=this.el.dmg;t.style.opacity=.9,setTimeout(()=>{t.style.opacity=0},90)}showDeath(){this.el.death.classList.remove("hidden")}hideDeath(){this.el.death.classList.add("hidden")}fade(t){let e=this.el.fade;e.style.opacity=1,setTimeout(()=>{t(),e.style.opacity=0},1300)}_buildHints(){let t=this.ctx.input,e=s=>`<kbd>${t.keyLabel(s)}</kbd>`,i=document.createElement("aside");i.id="hints",i.innerHTML=`<h4>Contr\xF4les <button data-h>${se("close")}</button></h4>
      <div class="hg"><b>Explorer</b>
      <p>${e("KeyW")}${e("KeyA")}${e("KeyS")}${e("KeyD")} Se d\xE9placer</p><p>Souris \u2014 Cam\xE9ra</p>
      <p>${e("ShiftLeft")} Courir \xB7 ${e("KeyC")} S'accroupir \xB7 ${e("Space")} Sauter</p>
      <p>${e("KeyE")} Interagir (r\xE9colter, d\xE9pecer, boire\u2026)</p>
      <p><kbd>Clic G</kbd> Coup de lance</p><p><kbd>Clic D</kbd> maintenu : viser, puis <kbd>Clic G</kbd> lancer</p>
      <p>${e("KeyQ")} maintenu \u2014 Observer (traces & animaux)</p>
      <p>${e("KeyF")} Manger \xB7 ${e("KeyI")} Sac \xB7 ${e("KeyM")} Carte</p></div>
      <div class="hg"><b>Construction (${e("KeyB")})</b>
      <p><kbd>Clic G</kbd> Poser \xB7 <kbd>Clic D</kbd> Annuler</p><p><kbd>Clic D</kbd> glisser \u2014 Tourner la cam\xE9ra</p>
      <p>${e("KeyR")} Pivoter \xB7 ${e("KeyG")} D\xE9placer \xB7 ${e("Delete")} Supprimer</p>
      <p>${e("KeyT")} Aimant on/off \xB7 <kbd>Molette</kbd> Zoom</p><p>${e("PageUp")}${e("PageDown")} Hauteur \xB7 <kbd>1-9</kbd> Pi\xE8ces \xB7 ${e("Escape")} Quitter</p></div>
      <div class="hg"><p>${e("KeyH")} Masquer l'aide \xB7 ${e("KeyN")} Son</p></div>`,document.getElementById("stage").appendChild(i),this.hintsEl=i,i.querySelector("[data-h]").onclick=()=>this.toggleHints()}toggleHints(){this.hintsOn=!this.hintsOn,this.hintsEl.classList.toggle("off",!this.hintsOn)}showStart(t,e){let i=this.el.start;i.innerHTML=`<div class="sbox"><div class="logo">WILDHEARTH</div><div class="tag">Chasse \xB7 Survie \xB7 Construction \u2014 Cro-Magnon</div>
      <div class="how"><div>${se("tree")}<span>R\xE9colte bois, pierre, fibres</span></div><div>${se("build")}<span>B\xE2tis ta cabane pi\xE8ce par pi\xE8ce</span></div><div>${se("eye")}<span>Piste, observe, chasse</span></div><div>${se("trophy")}<span>Expose le troph\xE9e du Cerf g\xE9ant</span></div></div>
      <button class="play" id="play">${t?"CONTINUER":"JOUER"}</button>${t?'<button class="ghost" id="newgame">Nouvelle partie</button>':""}
      <div class="fine">La souris sera captur\xE9e pour la cam\xE9ra \u2014 \xC9chap pour la lib\xE9rer.<br>Clavier AZERTY et QWERTY pris en charge.</div></div>`,i.classList.remove("hidden"),Nt("#play",i).onclick=()=>{i.classList.add("hidden"),e(!1)};let s=Nt("#newgame",i);s&&(s.onclick=()=>{i.classList.add("hidden"),e(!0)})}_renderBuild(){let t=this.ctx,e=t.builder,i=t.inventory;this.el.tabs.innerHTML=Xh.map(a=>`<button class="tab ${e.category===a.id?"on":""}" data-cat="${a.id}">${a.name}</button>`).join(""),this.el.tabs.querySelectorAll("[data-cat]").forEach(a=>a.onclick=()=>{e.setCategory(a.dataset.cat),t.audio.play("click")});let s=e.list(),r=`<button class="card sel ${e.tool==="select"?"on":""}" data-tool="select">${se("select")}<div class="cname">S\xE9lection</div><div class="ccost"><small>survole \xB7 d\xE9place \xB7 supprime</small></div></button>`;s.forEach((a,l)=>{r+=`<button class="card ${e.tool===a.id?"on":""}" data-tool="${a.id}"><img src="${this.thumbs[a.id]||""}" alt=""><div class="cname">${a.name}<i>${l+1}</i></div><div class="ccost">${Ff(a.cost,i)}</div></button>`}),this.el.cards.innerHTML=r,this.el.cards.querySelectorAll("[data-tool]").forEach(a=>a.onclick=()=>{t.audio.play("click"),e.selectTool(a.dataset.tool)});let o=t.camp.level();Nt(".bt-title small",this.el.btop).textContent=`Niv. ${o.level} \xB7 ${o.name}`,this.el.btop.querySelector(".snap").classList.toggle("on",e.snap),this.el.btop.querySelector(".snap span").textContent=e.snap?"Aimant":"Libre"}update(t,e){let i=this.ctx,s=i.player;this._keyT=(this._keyT||0)-t,this._keyT<=0&&(this._keyT=1.5,this.root.querySelectorAll("[data-k]").forEach(u=>{u.querySelector(".key").textContent=i.input.keyLabel(u.dataset.k)})),this.el.hp.style.width=s.health+"%",this.el.hpN.textContent=Math.ceil(s.health),this.el.food.style.width=s.food+"%",this.el.water.style.width=s.water+"%",Nt("#b-food").classList.toggle("low",s.food<20),Nt("#b-water").classList.toggle("low",s.water<20),Nt("#b-hp").classList.toggle("low",s.health<30);let r=i.daynight;this.el.clock.innerHTML=`${se(r.isNight?"moon":"sun")} ${r.clockText}`;let o=i.camp.level();this.el.camp.innerHTML=`<b>Camp niv. ${o.level}</b> ${o.name}`;let a=i.objectives.current;i.objectives.index!==this._objIdx&&(this._objIdx=i.objectives.index,this._objT=0),this._objT+=t,this.el.obj.classList.toggle("compact",this._objT>30),a?(this.el.objT.textContent=a.title,this.el.objX.textContent=a.text(),this.el.objD.textContent=a.detail,this.el.obj.classList.remove("hidden")):(this.el.objT.textContent="Ma\xEEtre du camp",this.el.objX.textContent=`Camp : ${o.name}`,this.el.objD.textContent=o.level<5?o.hint:"Continue de construire et de chasser librement.");let l=i.builder.active;this.el.build.classList.toggle("hidden",!l),this.el.hud.classList.toggle("building",l),this.el.hud.classList.toggle("observing",s.observing),this.el.cross.style.display=!l&&i.input.locked&&!this.modal?"block":"none",this.el.cross.classList.toggle("aim",s.aiming);let c=i.started&&this.el.start.classList.contains("hidden")&&!l&&!this.modal&&!i.input.locked&&!s.dead;this.el.resume.classList.toggle("hidden",!c);let h=i.interact.target,d=h&&!l&&!this.modal&&!s.dead;if(this.el.prompt.style.opacity=d?1:0,d&&(this.el.promptT.textContent=h.label,Nt("kbd",this.el.prompt).textContent=i.input.keyLabel("KeyE")),this._invDirty&&this.modal==="inv"&&(this._invDirty=!1,this.renderInv()),this._buildDirty&&l&&(this._buildDirty=!1,this._renderBuild()),l&&this._buildMessage(),this._miniAcc+=t,this._miniAcc>.05){this._miniAcc=0;let u=a&&a.target?a.target():null;i.mapview.draw(this.miniCtx,240,240,{cx:s.pos.x,cz:s.pos.z,span:70,rot:e.yaw,player:s,objective:u,camp:i.camp,tracks:i.animals.tracks})}this.modal==="map"&&(this._mapAcc=(this._mapAcc||0)+t,this._mapAcc>.2&&(this._mapAcc=0,this.drawMap())),this._labels(e.camera)}_buildMessage(){let t=this.ctx.builder,e=this.ctx.inventory,i=Ti[t.tool],s="",r="";t.tool==="select"?s=t.hover?`${t.hover.def.name} \u2014 <b>G</b> d\xE9placer \xB7 <b>Suppr</b> retirer${t.hover.def.tag==="chest"?" \xB7 clic : ouvrir":""}`:"S\xE9lection : vise une pi\xE8ce pour la d\xE9placer ou la retirer":t.reason?(s=t.reason,r="bad"):i&&(s=`${t.moving?"D\xE9placer":"Poser"} : ${i.name} \xB7 <b>R</b> pivoter \xB7 <b>T</b> aimant ${t.snap?"actif":"coup\xE9"} \xB7 clic droit annuler`);let o=`<span class="${r}">${s}</span>`;this._lastMsg!==o&&(this.el.bmsg.innerHTML=o,this._lastMsg=o)}_labels(t){let e=this.ctx,i=e.player,s=i.observing&&!e.builder.active;if(this.el.labels.style.display=s?"block":"none",!s)return;let r=new R,o=new Set;for(let a of e.animals.all){let l=Math.hypot(a.x-i.pos.x,a.z-i.pos.z);if(l>85||a.dead||(r.set(a.x,a.y+a.rig.height*a.scale+.4,a.z).project(t),r.z>1||Math.abs(r.x)>1.1||Math.abs(r.y)>1.1))continue;let c=this.labels.get(a);c||(c=document.createElement("div"),c.className="lab",this.el.labels.appendChild(c),this.labels.set(a,c)),o.add(a);let h=a.awareness>=1?"fuite":a.awareness>.3?"alerte":"calme";c.className="lab "+h,c.innerHTML=`<b>${vo[a.kind].name}</b><span class="meter"><i style="width:${Math.min(100,a.awareness*100)}%"></i></span><small>${Math.round(l)} m \xB7 ${h}${a.wounded?" \xB7 bless\xE9":""}</small>`,c.style.left=(r.x*.5+.5)*100+"%",c.style.top=(-r.y*.5+.5)*100+"%"}for(let[a,l]of this.labels)o.has(a)||(l.remove(),this.labels.delete(a))}};var Ai=100,Gi=400,lc=class{constructor(t,e){this.world=t,this.ctx=e,this.explored=new Uint8Array(Ai*Ai),this.base=document.createElement("canvas"),this.base.width=this.base.height=Gi,this.fog=document.createElement("canvas"),this.fog.width=this.fog.height=Ai,this._paintBase(),this.dirty=!0,this._t=0,this.deerHint={x:0,z:0,ox:(Math.random()-.5)*16,oz:(Math.random()-.5)*16},this.reveal(Dt.x,Dt.z,34)}_paintBase(){let t=this.world.terrain,e=this.base.getContext("2d"),i=e.createImageData(Gi,Gi),s=t.mesh.geometry.attributes.color,r=Vt.cells;for(let o=0;o<Gi;o++)for(let a=0;a<Gi;a++){let l=a/Gi*Vt.size-Vt.half,c=o/Gi*Vt.size-Vt.half,h=t.heightAt(l,c),d=Math.min(r,Math.round(a/Gi*r)),f=Math.min(r,Math.round(o/Gi*r))*(r+1)+d,m=s.getX(f),x=s.getY(f),g=s.getZ(f);m=Math.pow(m,1/2.2),x=Math.pow(x,1/2.2),g=Math.pow(g,1/2.2);let p=Ot(1+(t.heightAt(l-1.5,c-1.5)-t.heightAt(l+1.5,c+1.5))*.09,.62,1.35);if(m*=p,x*=p,g*=p,h<Ve){let E=Ot((Ve-h)/1.2,0,1);m=.22-E*.08,x=.5-E*.14,g=.66-E*.1}let y=(o*Gi+a)*4;i.data[y]=Ot(m,0,1)*255,i.data[y+1]=Ot(x,0,1)*255,i.data[y+2]=Ot(g,0,1)*255,i.data[y+3]=255}e.putImageData(i,0,0),e.fillStyle="rgba(20,50,25,0.32)";for(let o of this.world.veg.trees){let a=(o.x+Vt.half)/Vt.size*Gi,l=(o.z+Vt.half)/Vt.size*Gi;e.beginPath(),e.arc(a,l,2.1*o.baseScale,0,6.3),e.fill()}}reveal(t,e,i){let s=(t+Vt.half)/2,r=(e+Vt.half)/2,o=i/2;for(let a=Math.max(0,Math.floor(r-o));a<=Math.min(Ai-1,Math.ceil(r+o));a++)for(let l=Math.max(0,Math.floor(s-o));l<=Math.min(Ai-1,Math.ceil(s+o));l++){let c=Math.hypot(l+.5-s,a+.5-r);if(c<=o){let h=c<o*.7?255:Math.round(255*(1-(c-o*.7)/(o*.3)));h>this.explored[a*Ai+l]&&(this.explored[a*Ai+l]=h,this.dirty=!0)}}}isExplored(t,e){let i=Math.floor((t+Vt.half)/2),s=Math.floor((e+Vt.half)/2);return i<0||s<0||i>=Ai||s>=Ai?!1:this.explored[s*Ai+i]>150}update(t,e){if(this._t-=t,this._t<=0&&(this._t=.5,this.reveal(e.pos.x,e.pos.z,30)),this.dirty){let i=this.fog.getContext("2d"),s=i.createImageData(Ai,Ai);for(let r=0;r<Ai*Ai;r++)s.data[r*4]=22,s.data[r*4+1]=26,s.data[r*4+2]=24,s.data[r*4+3]=255-this.explored[r]*.97;i.putImageData(s,0,0),this.dirty=!1}}_poiList(){let t=[];for(let e of of)(e.always||this.isExplored(e.x,e.z))&&t.push(e);return t}draw(t,e,i,{cx:s,cz:r,span:o,rot:a=0,full:l=!1,player:c,objective:h,camp:d,tracks:u}){let f=e/o;t.save(),t.fillStyle="#161a18",t.fillRect(0,0,e,i),t.translate(e/2,i/2),t.rotate(a),t.translate(-s*f,-r*f);let m=Vt.size*f,x=-Vt.half*f;if(t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(this.base,x,x,m,m),t.drawImage(this.fog,x,x,m,m),d){t.fillStyle="#e8b45a";for(let p of d.pieces.values())(p.def.tag==="floor"||p.def.tag==="stairs")&&t.fillRect(p.x*f-1.1*f,p.z*f-1.1*f,2.2*f,2.2*f)}if(u){let p=u.foundDeerTracks();t.fillStyle="rgba(255,220,140,0.9)";for(let y of p)t.beginPath(),t.arc(y.x*f,y.z*f,Math.max(1.4,.6*f),0,6.3),t.fill();if(p.length>=3&&this.deerHint.z!==void 0){let y=this.ctx.animals.deer;if(y){let E=Cn[y.zoneIdx].x+this.deerHint.ox,M=Cn[y.zoneIdx].z+this.deerHint.oz;t.strokeStyle="rgba(255,200,110,0.9)",t.lineWidth=Math.max(1.5,f*.5),t.setLineDash([f*1.6,f*1.2]),t.beginPath(),t.arc(E*f,M*f,20*f,0,6.3),t.stroke(),t.setLineDash([]),l&&(t.fillStyle="#ffd38a",t.font=`600 ${Math.max(10,f*3.2)}px system-ui`,t.textAlign="center",t.fillText("Zone du Cerf ?",E*f,M*f-22*f))}}}for(let p of this._poiList()){let y=p.x*f,E=p.z*f;t.fillStyle=p.always?"#e8b45a":"#f4efe2",t.strokeStyle="#1b1f1c",t.lineWidth=Math.max(1,f*.35),t.beginPath(),t.arc(y,E,Math.max(3,f*(l?1.5:1.3)),0,6.3),t.fill(),t.stroke(),l&&(t.save(),t.rotate(-a),t.restore(),t.fillStyle="#f4efe2",t.font=`600 ${Math.max(9,f*2.8)}px system-ui`,t.textAlign="center",t.lineWidth=3,t.strokeStyle="rgba(10,12,10,0.8)",t.strokeText(p.name,y,E-f*2.4),t.fillText(p.name,y,E-f*2.4))}if(h){let p=h.x*f,y=h.z*f,E=1+.25*Math.sin(performance.now()/260);t.strokeStyle="#ffdb7a",t.lineWidth=Math.max(1.5,f*.5),t.beginPath(),t.arc(p,y,Math.max(5,f*3.2)*E,0,6.3),t.stroke(),t.fillStyle="#ffdb7a",t.beginPath(),t.arc(p,y,Math.max(2,f*.9),0,6.3),t.fill()}t.save(),t.translate(c.pos.x*f,c.pos.z*f),t.rotate(-c.yaw+Math.PI);let g=Math.max(6,f*(l?2.6:2.2));t.fillStyle="#ffffff",t.strokeStyle="#1b1f1c",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-g),t.lineTo(g*.7,g*.8),t.lineTo(0,g*.4),t.lineTo(-g*.7,g*.8),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore()}};function Of(n,t=112){let e=new as;e.add(new fs(14674687,5917240,1.4));let i=new Xn(16773336,2.8);i.position.set(3,5,4),e.add(i);let s=new qe(30,1,.1,50),r=new ci(t*2,t*2,{samples:4,colorSpace:pi}),o=new Uint8Array(t*2*t*2*4),a=document.createElement("canvas");a.width=a.height=t*2;let l=a.getContext("2d"),c={},h=n.getRenderTarget(),d=n.getClearColor(new st),u=n.getClearAlpha();n.setClearColor(0,0);for(let f of Object.values(Ti)){let m=pr(f.id,{mount:f.kind==="mount"?"wall":void 0});m.traverse(S=>{S.isMesh&&(S.castShadow=!1)}),e.add(m),m.userData.animated&&m.userData.flames.forEach(S=>{S.scale.set(1,1,1)});let x=new bi().setFromObject(m),g=x.getCenter(new R),p=x.getSize(new R),E=(Math.max(p.x,p.y,p.z)*.5+.1)/Math.tan(fh.degToRad(s.fov/2))*1.25,M=new R(.75,.62,1).normalize();s.position.copy(g).addScaledVector(M,E),s.lookAt(g),n.setRenderTarget(r),n.clear(),n.render(e,s),n.readRenderTargetPixels(r,0,0,t*2,t*2,o);let w=l.createImageData(t*2,t*2);for(let S=0;S<t*2;S++){let A=(t*2-1-S)*t*2*4;w.data.set(o.subarray(A,A+t*2*4),S*t*2*4)}l.putImageData(w,0,0),c[f.id]=a.toDataURL("image/png"),e.remove(m)}return n.setRenderTarget(h),n.setClearColor(d,u),r.dispose(),c}var Zh=class{constructor(){let t=document.getElementById("gl"),e=document.getElementById("screen");this.canvas=t,this.screen=e;let i=this.renderer=new El({canvas:t,antialias:!0,powerPreference:"high-performance"});i.shadowMap.enabled=!0,i.shadowMap.type=ps,i.toneMapping=Qr,i.toneMappingExposure=1.05;let s=this.scene=new as,r=this.camera=new qe(62,9/16,.1,700);s.add(r);let o=this.ctx=this;this.time=0,this.started=!1,this.events=new Hl,this.inventory=new Xl,this.audio=new kl,this.world=new Ol(s),this.daynight=new Bl(s,i),this.camp=new Kl(s,this.world),this.fx=new mo(s,700,!1),this.glow=new mo(s,500,!0),this.input=new zl(t,e),this.cam=new nc(r,this.world),this.cam.camp=this.camp,this.player=new ic(o),this.animals=new oc(o),this.builder=new jl(o),this.interact=new sc(o),this.mapview=new lc(this.world,o),this.objectives=new Gl(o),this.ui=new ac(o,document.getElementById("ui")),this.save=()=>bs.save(this),this.toggleBuild=()=>this._toggleBuild(),this.animals.tracks.onDiscover=l=>{let c=this.animals.tracks.discovered===1;!c&&this.time-(this._lastTrackToast||-99)<12||(this._lastTrackToast=this.time,this.ui.toast(c?"Empreintes de Cerf g\xE9ant ! Suis la piste\u2026":"Les traces continuent\u2026","good"),this.audio.play("pickup"))},this.events.on("placed",()=>{this._saveSoon=2.5}),this.camp.onChange(()=>{this._saveSoon=2.5}),this._resize(),new ResizeObserver(()=>this._resize()).observe(e);try{this.ui.thumbs=Of(i,112)}catch(l){console.warn("thumbs",l)}this._place(),addEventListener("beforeunload",()=>{this.started&&this.save()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.started&&this.save()}),document.getElementById("ui").classList.add("prestart"),this.ui.showStart(bs.has(),l=>this.start(l));let a=document.getElementById("loading");a&&(a.classList.add("gone"),setTimeout(()=>a.remove(),600)),this.last=performance.now(),this._saveT=15,requestAnimationFrame(l=>this.loop(l))}_place(){this.cam.yaw=this.player.yaw+Math.PI,this.cam.pitch=.28,this.cam.update(.016,this.player,this.input,"explore",{x:0,y:0},0)}start(t){document.getElementById("ui").classList.remove("prestart"),this.audio.init(),t?bs.clear():bs.load(this),this.started=!0,this.input.enabled=!0,this.input.requestLock(),this._place(),this.ui.toast("Astuce : Q maintenu = observer \xB7 E = interagir","info")}_toggleBuild(){this.ui.modalOpen||(this.builder.toggle(),this.builder.active?(this.ui._buildDirty=!0,this.player.crouching=!1,this.cam.pitch=Math.max(this.cam.pitch,.6),this.cam.buildDist=Math.max(this.cam.buildDist,9),this.ui.toast("Mode construction \u2014 clic gauche pour poser","info")):(this.save(),this.input.requestLock()))}_resize(){let t=this.screen.getBoundingClientRect();this.maxPr=Math.min(window.devicePixelRatio||1,1.75),this.pr==null&&(this.pr=Math.min(this.maxPr,1.4));let e=this.pr;this.renderer.setPixelRatio(e),this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix(),this.fx.setScale(t.height*e*.62),this.glow.setScale(t.height*e*.62)}loop(t){requestAnimationFrame(s=>this.loop(s));let e=(t-this.last)/1e3,i=Math.min(.05,e);if(this.last=t,this._perf(e),!window.__manual){try{this.update(i)}catch(s){this._err||(this._err=!0,console.error(s))}this.renderer.render(this.scene,this.camera),this.input.endFrame()}}_perf(t){if(window.__manual||t>.5||(this._ema=(this._ema||.016)*.94+t*.06,this._perfT=(this._perfT||0)+t,this._perfT<2.5))return;this._perfT=0;let e=1/this._ema;e<40&&this.pr>.7?(this.pr=Math.max(.7,this.pr-.15),this._resize()):e>57&&this.pr<this.maxPr-.01&&(this.pr=Math.min(this.maxPr,this.pr+.1),this._resize())}update(t){let e=this.input,i=this.ui;if(this.time+=t,!this.started){this.cam.yaw+=t*.08,this.cam.update(t,this.player,e,"explore",{x:0,y:0},0),this.daynight.update(t*.3,this.player.pos,this.camera),this.world.update(t,this.time,this.daynight,this.camera),this.animals.update(t,this.time),this.player.rig.root.position.copy(this.player.pos),e.takeClicks(),e.takeLook();return}e.pressed("escape")&&(i.modalOpen?i.closeModal():this.builder.active&&this._toggleBuild()),e.pressed("build")&&this._toggleBuild(),e.pressed("inventory")&&(i.modal==="inv"?i.closeModal():!i.modalOpen&&i.openInventory("bag")),e.pressed("map")&&(i.modal==="map"?i.closeModal():!i.modalOpen&&i.openMap()),e.pressed("hints")&&i.toggleHints(),e.pressed("mute")&&i.toast(this.audio.toggleMute()?"Son coup\xE9":"Son activ\xE9","info");let s=this.builder.active,r=e.takeLook(),o=e.takeWheel(),a=!i.modalOpen&&(e.locked||s||e.mouse.right||this._dragging);this.player.update(t,this.cam,e,s?"build":"explore"),this.cam.update(t,this.player,e,s?"build":"explore",a?r:{x:0,y:0},i.modalOpen?0:o),s?this.builder.update(t):e.takeClicks(),s?this.interact.target=null:this.interact.update(t,e),this.camp.update(t,this.time,this.player.pos),this.world.update(t,this.time,this.daynight,this.camera),this.animals.update(t,this.time),this.objectives.update(t),this.mapview.update(t,this.player),this.daynight.update(t,{x:Math.round(this.player.pos.x/2)*2,y:Math.round(this.player.pos.y),z:Math.round(this.player.pos.z/2)*2},this.camera),this._dayToasts(),this._ambientFx(t),this.fx.update(t,this.time),this.glow.update(t,this.time),this.audio.update(t,this),i.update(t,this.cam),this._saveT-=t,this._saveSoon!=null&&(this._saveSoon-=t,this._saveSoon<=0&&(this._saveSoon=null,this.save())),this._saveT<=0&&(this._saveT=15,this.save())}_dayToasts(){let t=this.daynight.hours,e=this._prevH??t;if(this._prevH=t,Math.abs(t-e)>1)return;let i=s=>e<s&&t>=s;i(17)&&this.ui.toast("Le soleil descend \u2014 les animaux sortent : le Cerf g\xE9ant se d\xE9place au cr\xE9puscule","info"),i(19.5)&&this.ui.toast("La nuit tombe \u2014 allume un feu ou rentre au camp","info"),i(5)&&this.ui.toast("L\u2019aube se l\xE8ve \u2014 le gibier est actif","info")}_ambientFx(t){let e=this.player.pos,i=this.daynight,s=this.world;for(this._pollen=(this._pollen||0)+t*(10+i.nightFactor*22);this._pollen>1;){this._pollen-=1;let r=Math.random()*6.28,o=3+Math.random()*14,a=e.x+Math.cos(r)*o,l=e.z+Math.sin(r)*o,c=s.heightAt(a,l)+.4+Math.random()*2.2;i.nightFactor>.5?this.glow.emit(a,c,l,(Math.random()-.5)*.4,(Math.random()-.5)*.25,(Math.random()-.5)*.4,{color:14221178,size:.09,life:5,alpha:.9,flicker:3+Math.random()*4}):Math.random()<.6&&this.glow.emit(a,c,l,.25+Math.random()*.3,.05,(Math.random()-.5)*.3,{color:16773577,size:.05,life:6,alpha:.35})}if(this._emberT=(this._emberT||0)-t,this._emberT<=0){this._emberT=.09;for(let r of this.camp.emitters)Math.hypot(r.x-e.x,r.z-e.z)>32||(Math.random()<.6&&this.glow.emit(r.x+(Math.random()-.5)*.3,r.y+(r.type==="fire"?.5:1.85),r.z+(Math.random()-.5)*.3,(Math.random()-.5)*.5,.9+Math.random()*1.2,(Math.random()-.5)*.5,{color:16752704,size:.07,life:1.3+Math.random(),alpha:1,drag:.4}),r.type==="fire"&&Math.random()<.45&&this.fx.emit(r.x+(Math.random()-.5)*.2,r.y+.9,r.z+(Math.random()-.5)*.2,(Math.random()-.5)*.15,.7,(Math.random()-.5)*.15,{color:9079430,size:.5,life:3,alpha:.22,grow:3.5,drag:.3}))}}},xr=new Zh;window.__game=xr;window.__step=(n=1,t=.05,e=!0)=>{for(let i=0;i<n;i++)xr.update(t),xr.input.endFrame();e&&xr.renderer.render(xr.scene,xr.camera)};})();
