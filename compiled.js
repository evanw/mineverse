(function(){var Ea=Math.imul||function(a,c){var b=a>>16&65535,d=c>>16&65535,g=a&65535,h=c&65535;return g*h+(b*h+g*d<<16)|0};function Ia(){var a=0,c=!1,b=null,d={},g=new Fa,h=g.d.domElement,i=null,j=function(){d={},c=!1},n=function(l){d[l.which]=1,l.which===84?ra(g.g.c):l.which===71?oa(g.h):l.which===70?sa(g.g.c):l.which===79&&ta(g.g.c)},m=function(f){d[f.which]=0},o=function(e){e.ctrlKey?L(g,0,e.deltaY*.1):M(g,e.deltaX*-.007853981633974483,e.deltaY*-.007853981633974483),e.preventDefault()},q=function(k){c=!0,k.preventDefault()},p=function(){c=!1},s=function(r){if(c){var x=b?r.pageX-b.pageX:0,v=b?r.pageY-b.pageY:0;M(g,x*.007853981633974483,v*.007853981633974483)}b=r},t=function(){var y=window.devicePixelRatio;Z(g,Math.round(window.innerWidth*y)|0,Math.round(window.innerHeight*y)|0)},w=0;i=function(){if(++w,!(w%2)){var A=window.performance.now(),H=Math.min(.25,(A-a)/1000);a=A;var I=(4+(z(d,16,0)<<4)|0)*H,J=(z(d,68,0)-z(d,65,0)|0)*I,K=(z(d,83,0)-z(d,87,0)|0)*I;L(g,J,K),_(g,H),document.title=$(g)}window.requestAnimationFrame(i)},
t(),i();var E=document.createElement('div'),u=E.style;u.position='absolute',u.left=u.top='20px',u.padding='13px 15px',u.background='rgba(0, 0, 0, 0.5)',u.color='white',u.pointerEvents='none',u.whiteSpace='pre',u.font='14px/20px sans-serif',u.borderRadius='5px',E.textContent='W/A/S/D: Move\nShift: Move fast\nDrag: Rotate\nT: Toggle textures\nG: Toggle godrays\nF: Toggle fog\nO: Toggle occlusion',document.body.appendChild(h),document.body.appendChild(E),document.onkeydown=n,document.onkeyup=m,window.onblur=j,window.onresize=t,window.onmousedown=q,window.onmouseup=p,window.onmousemove=s,window.onwheel=o}function Z(b,a,c){b.b.setViewOffset(a,c,0,0,a,c),b.b.updateProjectionMatrix(),b.d.setSize(a,c,!1),b.h.j.setSize(a,c)}function L(b,a,c){(a!=0||c!=0)&&(b.a.set(a,0,c),b.a.applyEuler(b.b.rotation),ya(b.g.c,b.i,b.a))}function M(d,a,c){var b=d.b.rotation;b.x=Math.min(1.5707963267948966,Math.max(-1.5707963267948966,b.x-c)),b.y-=a,b.y-=Math.floor(b.y/6.283185307179586)*6.283185307179586}function _(b,a){b.j=b.j*.9+.1/a,b.b.position.copy(b.i.a),
b.b.updateMatrixWorld(),b.b.matrixWorldInverse.getInverse(b.b.matrixWorld),wa(b.g.c,a,b.b),ma(b.g.c.e,b.d,b.g.c,b.g.b);var c=b.h.j;b.d.setViewport(0,0,c.width,c.height),b.d.render(b.c,b.b,c),pa(b.h,b.d,b.b)}function $(a){return Math.round(a.j)+' fps/'+Math.round(a.g.c.q)+' units/'+va(a.g.c)+' quads'}function da(g){N(g);for(var a=0;a<6;++a){var c=g.l[a];if(c){var b=(a+3|0)%6;c.l[b].A=!0,c.l[b]=null}}if(g.s){for(var h=0,i=g.s,j=i.length;h<j;++h){var d=i[h];R(g.a.e,d)}g.s=g.r=null,g.x={}}}function N(a){a.t&&(a.c.remove(a.t),a.t=null),a.y&&(a.b.remove(a.y),a.y=null),a.w&&(a.d.remove(a.w),a.w=null),a.v&&(a.v.dispose(),a.v=null)}function ea(a){return a.h>>5&1023|a.i<<5&1047552|a.j<<15&1072693248}function fa(d,a,c,b){return a-=d.h,c-=d.i,b-=d.j,a>-1&&a<32&&c>-1&&c<32&&b>-1&&b<32}function ga(b,a,c){b.l[c]=a,a.l[(c+3|0)%6]=b,b.A=a.A=!0}function O(d,a,c,b){return fa(d,a,c,b)?d.n[(a-d.h|0)+((c-d.i|0)+(b-d.j<<5)<<5)|0]:0}function B(g,a,c,b){var d=g;return a<d.h&&d.l[0]?d=d.l[0]:a>=(d.h+32|0)&&d.l[3]&&(d=d.l[3]),c<d.i&&d.l[1]?d=d.l[1]:c>=(d.i+32|0)&&d.l[4]&&(d=d.l[4]),
b<d.j&&d.l[2]?d=d.l[2]:b>=(d.j+32|0)&&d.l[5]&&(d=d.l[5]),O(d,a,c,b)}function ha(f){if(f.A){N(f),f.s=[],f.r={},f.o=[],f.e=[],f.q=[],f.k=[],f.p=[];for(var a=f.h,q=f.h+33|0;a<q;++a)for(var c=f.i,e=f.i+33|0;c<e;++c)for(var b=f.j,o=f.j+33|0;b<o;++b){var d=Ea(a+Ea(c+Ea(b,33)|0,33)|0,6);if(c<(f.i+32|0)&&b<(f.j+32|0)){var g=B(f,a-1|0,c,b),h=B(f,a,c,b);!g&&h?C(f,a,c+1|0,b+1|0,0,0,-1,0,-1,0,F[h][2],d):g&&!h&&C(f,a,c+1|0,b,0,0,1,0,-1,0,F[g][2],d+1|0)}if(a<(f.h+32|0)&&b<(f.j+32|0)){var i=B(f,a,c-1|0,b),j=B(f,a,c,b);!i&&j?C(f,a,c,b,1,0,0,0,0,1,F[j][1],d+2|0):i&&!j&&C(f,a+1|0,c,b,-1,0,0,0,0,1,F[i][0],d+3|0)}if(a<(f.h+32|0)&&c<(f.i+32|0)){var n=B(f,a,c,b-1|0),l=B(f,a,c,b);!n&&l?C(f,a,c+1|0,b,1,0,0,0,-1,0,F[l][2],d+4|0):n&&!l&&C(f,a+1|0,c+1|0,b,-1,0,0,0,-1,0,F[n][2],d+5|0)}}for(var k=0,p=X(f.x),s=p.length;k<s;++k){var m=p[k];R(f.a.e,m)}f.x=f.r,f.r=null,f.v=new THREE.BufferGeometry,f.v.setIndex(new THREE.BufferAttribute(new Uint16Array(f.p),1)),f.v.addAttribute('position',new THREE.BufferAttribute(new Float32Array(f.o),3)),f.v.addAttribute('uvs',
new THREE.BufferAttribute(new Float32Array(f.e),4)),f.v.addAttribute('updateUV',new THREE.BufferAttribute(new Float32Array(f.q),2)),f.v.addAttribute('updatePosition',new THREE.BufferAttribute(new Float32Array(f.k),3)),f.t=new THREE.Mesh(f.v,f.g),f.y=new THREE.Mesh(f.v,f.a.e.h),f.w=new THREE.Mesh(f.v,f.a.e.i),f.c.add(f.t),f.b.add(f.y),f.d.add(f.w),f.w.frustumCulled=!1,f.o=f.e=null,f.q=f.k=null,f.p=null,f.A=!1}}function C(w,a,c,b,d,g,h,i,j,n,l,m){var f=a+d*.5+i*.5,o=c+g*.5+j*.5,e=b+h*.5+n*.5,q=(1+l%16|0)/16-.0001,k=1-(l/16|0)/16-.0001,p=q-.0625+.0002,s=k-.0625+.0002,r=w.o.length/3|0,x=w.p;x.push(r),x.push(r+1|0),x.push(r+2|0),x.push(r),x.push(r+2|0),x.push(r+3|0);var v=z(w.x,m,-1);~v?delete w.x[m]:v=ka(w.a.e);var t=w.f,y=w.m;la(w.a.e,v,t),S(w.a.e,v,y),w.s.push(v),w.r[m]=v,D(w,a,c,b,q,k,t.min.x,t.min.y,y.min.x,y.min.y,f,o,e),D(w,a+d|0,c+g|0,b+h|0,p,k,t.max.x,t.min.y,y.max.x,y.min.y,f,o,e),D(w,(a+d|0)+i|0,(c+g|0)+j|0,(b+h|0)+n|0,p,s,t.max.x,t.max.y,y.max.x,y.max.y,f,o,e),D(w,a+i|0,c+j|0,b+n|0,q,s,t.min.x,t.max.y,y.min.x,
y.max.y,f,o,e)}function ia(a){return a.s?a.s.length:0}function D(o,a,c,b,d,g,h,i,j,n,l,m,f){o.o.push(a),o.o.push(c),o.o.push(b),o.e.push(d),o.e.push(g),o.e.push(h),o.e.push(i),o.q.push(j),o.q.push(n),o.k.push(l+(a-l)*2),o.k.push(m+(c-m)*2),o.k.push(f+(b-f)*2)}function ja(k){for(var a=k.j,r=k.j+32|0;a<r;++a)for(var c=k.h,s=k.h+32|0;c<s;++c)for(var b=Math.round(35.2+Ba(c*.02,a*.02)*16)|0,d=(c-k.h|0)+(a-k.j<<5<<5)|0,g=Math.max(0,k.i),p=Math.min(b,k.i+32|0);g<p;++g){var h=(g+1|0)^b?g<(b-3|0)?3:1:2;k.n[d+(g-k.i<<5)|0]=h}for(var i=0;i<6;++i){var j=63-Ea(i,10)|0;if(j>=k.i&&j<(k.i+32|0))for(var n=k.j,v=k.j+32|0;n<v;++n)for(var l=k.h,x=k.h+32|0;l<x;++l){var m=l*.01,f=n*.01;f/=.866025404,m-=f*.5,i&1&&(m-=1/3),m-=Math.floor(m),f-=Math.floor(f);var o=1-m-f;o<0&&(m=1-m,f=1-f,o=-o);var e=Math.max(Math.max(m,f),o),q=Math.min(Math.min(m,f),o);!(e>.6966666666666667)&&(!(e<.6366666666666666)||!(q>.03))&&(k.n[(l-k.h|0)+((j-k.i|0)+(n-k.j<<5)<<5)|0]=5)}}k.A=!0}function ka(c){if(c.t==-1)return-1;var a=c.t;return c.t=c.l[a],S(c,a,c.m),
Q(c,c.m.min.x,c.m.min.y,c.m.max.x,c.m.min.y,c.m.max.x,c.m.max.y),Q(c,c.m.min.x,c.m.min.y,c.m.max.x,c.m.max.y,c.m.min.x,c.m.max.y),a}function Q(i,a,c,b,d,g,h){i.s.push(a*2-1),i.s.push(c*2-1),i.s.push(0),i.s.push(b*2-1),i.s.push(d*2-1),i.s.push(0),i.s.push(g*2-1),i.s.push(h*2-1),i.s.push(0)}function R(c,a){~a&&(c.l[a]=c.t,c.t=a)}function S(g,a,c){var b=a%g.a|0,d=a/g.a|0;c.min.x=b/g.a,c.min.y=d/g.c,c.max.x=(b+1)/g.a,c.max.y=(d+1)/g.c}function la(g,a,c){var b=a%g.a<<1,d=a/g.a<<1;c.min.x=(b+.5)/(g.a<<1),c.min.y=(d+.5)/(g.c<<1),c.max.x=(b+1.5)/(g.a<<1),c.max.y=(d+1.5)/(g.c<<1)}function ma(e,a,c,b){if(e.v%2){if(a.autoClear=!1,a.setViewport(0,0,e.r.width,e.r.height),e.s.length){var m=new THREE.BufferGeometry;m.addAttribute('position',new THREE.BufferAttribute(new Float32Array(e.s),3));var f=new THREE.Mesh(m,e.j);f.frustumCulled=!1,e.g.add(f),a.render(e.g,e.p,e.r),e.g.remove(f),e.s=[]}e.i.uniforms.rayLight.value.copy(e.k),e.i.uniforms.previous.value=e.r,a.render(e.d,e.p,e.x),a.autoClear=!0;var o=e.r;e.r=e.x,e.x=o}else{
var d=Math.random()*6.283185307179586,g=Math.asin(Math.random()*2-1);e.k.set(Math.cos(d)*Math.cos(g),Math.sin(g),Math.sin(d)*Math.cos(g)),e.k.y=Math.abs(+e.k.y),e.v%6?e.k.multiplyScalar(.1).add(b.position).normalize():(e.k.y+=1,e.k.normalize()),e.q.set(e.k.y,e.k.z,e.k.x).cross(e.k).normalize(),e.e.copy(e.q).cross(e.k).normalize(),e.f.min.set(Infinity,Infinity,Infinity),e.f.max.set(-Infinity,-Infinity,-Infinity);for(var q=0,k=c.d,p=k.length;q<p;++q)for(var h=k[q],i=0;i<8;++i){var j=h.h+(i&1?32:0),n=h.i+(i&2?32:0),l=h.j+(i&4?32:0);e.o.set(j,n,l),e.o.set(e.o.dot(e.e),e.o.dot(e.q),e.o.dot(e.k)),e.f.expandByPoint(e.o)}e.f.expandByScalar(1),e.p.left=e.f.min.x,e.p.right=e.f.max.x,e.p.bottom=e.f.min.y,e.p.top=e.f.max.y,e.p.near=-e.f.max.z,e.p.far=-e.f.min.z,e.p.matrix.makeBasis(e.e,e.q,e.k),e.p.matrix.decompose(e.p.position,e.p.quaternion,e.p.scale),e.p.updateProjectionMatrix(),a.setViewport(0,0,e.n.width,e.n.height),a.render(e.b,e.p,e.n)}++e.v}function oa(a){a.n=!a.n}function pa(h,a,c){var b=h.c.uniforms,d=h.a.b.position;
h.b.set(d.x,d.y,d.z,0),h.b.applyMatrix4(h.g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse)),b.uvLight.value.set(h.b.x/h.b.w*.5+.5,h.b.y/h.b.w*.5+.5),b.rayLight.value.copy(d),b.cameraToWorldMatrix.value.multiplyMatrices(c.matrixWorld,h.g.getInverse(c.projectionMatrix)),h.d.set(0,0,1),h.d.applyMatrix4(b.cameraToWorldMatrix.value),h.d.normalize();var g=d.x*h.d.x+d.y*h.d.y+d.z*h.d.z;b.godrayStrength.value=h.n?Math.max(0,Math.pow(Math.max(0,g),4)/2-.1):0,b.randomSeed.value=Math.random(),a.render(h.h,h.i)}function ra(c){var a=c.b.uniforms.renderTextureMap;a.value=!a.value}function sa(c){var a=c.b.uniforms.renderFog;a.value=!a.value}function ta(c){var a=c.b.uniforms.renderOcclusion;a.value=!a.value}function ua(u,a){u.n.setFromMatrix(u.m.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse));for(var c=u.q+Math.sqrt(3072)/2,b=a.position,d=Math.floor((b.x-c)/32)|0,g=Math.ceil((b.x+c)/32)|0,h=Math.max(0,Math.floor((b.y-c)/32)|0),i=Math.min(2,Math.ceil((b.y+c)/32)|0),j=Math.floor((b.z-c)/32)|0,n=Math.ceil((b.z+c)/32)|0,l=0;l<u.d.length;){
var m=u.d[l];U(b.x,b.y,b.z,m.h+16,m.i+16,m.j+16)>c?(delete u.g[ea(m)],u.d.splice(l,1),da(m)):++l}for(var f=null,o=-Infinity,e=d;e<g;++e)for(var q=e<<5,k=h;k<i;++k)for(var p=k<<5,s=j;s<n;++s){var r=s<<5,x=U(b.x,b.y,b.z,q+16,p+16,r+16);if(!(x>c)){var v=q>>5&1023|p<<5&1047552|r<<15&1072693248,t=z(u.g,v,null);if(!t){t=new Ga(u,u.h,u.i,u.j,u.b,q,p,r),ja(t),u.g[v]=t,u.d.push(t);for(var y=0;y<6;++y){var w=y,A=q+(aa(w)<<5)|0,H=p+(ba(w)<<5)|0,I=r+(ca(w)<<5)|0,J=z(u.g,A>>5&1023|H<<5&1047552|I<<15&1072693248,null);J&&ga(t,J,w)}u.l.min.set(q,p,r),u.l.max.set(q+32|0,p+32|0,r+32|0)}if(t.A){var K=u.n.intersectsBox(u.l),E=K?u.q-x:-x;E>o&&(f=t,o=E)}}}f&&ha(f)}function va(b){for(var a=0,d=0,g=b.d,h=g.length;d<h;++d){var c=g[d];a+=ia(c)}return a}function wa(d,a,c){d.k=d.k*.95+.05/a,d.q=Math.max(64,Math.min(128,d.q+(d.k-25)*a)),ua(d,c);var b=d.b.uniforms;b.drawDistance.value=d.q,b.randomSeed.value=Math.random(),b.rayLight.value.copy(d.a.b.position)}function xa(h,a,c,b){var d=(a&-32)>>5&1023|(c&-32)<<5&1047552|(b&-32)<<15&1072693248,g=z(h.g,
d,null);return g?O(g,a,c,b):0}function T(l,a,c,b,d,g,h){for(var i=a,o=c+1|0;i<o;++i)for(var j=b,f=d+1|0;j<f;++j)for(var n=g,m=h+1|0;n<m;++n)if(xa(l,i,j,n))return!1;return!0}function ya(b,a,c){G(b,a,0,c.x),G(b,a,1,c.y),G(b,a,2,c.z)}function G(f,a,c,b){var d=f.f.copy(a.a).sub(a.c).floor(),g=f.o.copy(a.a).add(a.c).ceil(),h=a.a.getComponent(c),i=a.c.getComponent(c);if(b<0){for(var j=Math.floor(h-i+b)|0,n=Math.floor(h-i-1)|0;n>=j;--n)if(!T(f,c?d.x:n,c?g.x-1:n,c^1?d.y:n,c^1?g.y-1:n,c^2?d.z:n,c^2?g.z-1:n)){a.a.setComponent(c,(n+1|0)+i+.0001);return}}else if(b>0)for(var l=Math.ceil(h+i+b-1)|0,m=Math.ceil(h+i)|0;m<=l;++m)if(!T(f,c?d.x:m,c?g.x-1:m,c^1?d.y:m,c^1?g.y-1:m,c^2?d.z:m,c^2?g.z-1:m)){a.a.setComponent(c,m-i-.0001);return}a.a.setComponent(c,h+b)}function U(a,c,b,d,g,h){return a-=d,c-=g,b-=h,Math.sqrt(a*a+c*c+b*b)}function za(a,c){var b=a+Ea(c,57)|0;return b=b<<13^b,1-(Ea(b,Ea(Ea(b,b),15731)+789221|0)+1376312589&2147483647)*(1/1073741824)}function V(a){return a*a*(3-a*2)}function Aa(a,c){for(var b=Math.floor(a)|0,d=Math.floor(c)|0,g=V(a-b),h=V(c-d),i=0,j=0;j<4;++j){
var n=j&1,l=j>>1&1;i+=za(b+n|0,d+l|0)*(n?g:1-g)*(l?h:1-h)}return i}function Ba(a,c){for(var b=0,d=1,g=0;g<3;++g)b+=Aa(a,c)*d,d*=.5,a*=2,c*=2;return b}function z(d,a,c){var b=d[a];return b!==void 0?b:c}function X(b){var a=[];for(var c in b)a.push(b[c]);return a}function aa(a){return a?a^3?0:1:-1}function ba(a){return a^1?a^4?0:1:-1}function ca(a){return a^2?a^5?0:1:-1}function Fa(){this.a=new THREE.Vector3,this.c=new THREE.Scene,this.b=new THREE.PerspectiveCamera(75,1,.1,1000),this.d=new THREE.WebGLRenderer,this.g=this.h=null,this.i=new La,this.j=0,this.g=new Ma(this.c),this.h=new Ja(this.g),this.i.a.y=50,this.i.c.set(.4,.4,.4),this.b.rotation.order='YXZ',this.d.setClearColor(0,0),this.d.gammaInput=this.d.gammaOutput=!0}function Ga(a,c,b,d,g,h,i,j){this.a=a,this.c=c,this.b=b,this.d=d,this.g=g,this.h=h,this.i=i,this.j=j,this.n=new Uint8Array(32768),this.l=[null,null,null,null,null,null],this.m=new THREE.Box2,this.f=new THREE.Box2,this.o=this.e=null,this.q=this.k=null,this.p=this.s=null,this.r=null,this.x={},this.v=this.t=null,
this.y=this.w=null,this.A=!1}function Ha(a,c){this.a=this.c=0,this.b=new THREE.Scene,this.d=new THREE.Scene,this.g=new THREE.Scene,this.h=this.i=null,this.j=this.n=null,this.l=null,this.m=new THREE.Box2,this.f=new THREE.Box3,this.o=new THREE.Vector3,this.e=new THREE.Vector3,this.q=new THREE.Vector3,this.k=new THREE.Vector3,this.p=new THREE.OrthographicCamera(0,1,0,1,0,1),this.s=[],this.r=this.x=null,this.v=this.t=0,this.a=a,this.c=c,this.r=new THREE.WebGLRenderTarget(a<<1,c<<1,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat}),this.r.texture.generateMipmaps=!1,this.x=new THREE.WebGLRenderTarget(a<<1,c<<1,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat}),this.x.texture.generateMipmaps=!1,this.n=new THREE.WebGLRenderTarget(1024,1024,{minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,format:THREE.RGBFormat}),this.n.texture.generateMipmaps=!1;var b=THREE.UniformsUtils.merge([THREE.UniformsLib.common]);this.h=new THREE.ShaderMaterial({uniforms:b,
vertexShader:'\n        varying vec4 position_;\n\n        void main() {\n          position_ = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n          gl_Position = position_;\n        }\n      ',fragmentShader:'\n        varying vec4 position_;\n\n        void main() {\n          float depth = position_.z / position_.w * 0.5 + 0.5;\n          vec3 v = fract(depth * vec3(1.0, 256.0, 65536.0));\n          v = floor(v * 256.0) / 256.0;\n          gl_FragColor = vec4(v, 1.0);\n        }\n      '}),b=THREE.UniformsUtils.merge([THREE.UniformsLib.common,{map:{type:'t',value:null}},{previous:{type:'t',value:null}},{rayLight:{type:'v3',value:new THREE.Vector3}},{accumulationFactor:{type:'f',value:.015625}}]),b.map.value=this.n,this.i=new THREE.ShaderMaterial({uniforms:b,vertexShader:'\n        attribute vec2 updateUV;\n        attribute vec3 updatePosition;\n        varying vec3 worldPosition;\n        varying vec4 clipPosition;\n        varying vec2 updateUV_;\n\n        void main() {\n          updateUV_ = updateUV;\n          worldPosition = updatePosition;\n          clipPosition = projectionMatrix * modelViewMatrix * vec4(updatePosition, 1.0);\n          gl_Position = vec4(updateUV * 2.0 - 1.0, 0.0, 1.0);\n        }\n      ',
fragmentShader:'\n        uniform sampler2D map;\n        uniform sampler2D previous;\n        uniform float accumulationFactor;\n        uniform vec3 rayLight;\n        varying vec3 worldPosition;\n        varying vec4 clipPosition;\n        varying vec2 updateUV_;\n\n        void main() {\n          vec3 position = clipPosition.xyz / clipPosition.w * 0.5 + 0.5;\n          vec3 encoded = texture2D(map, position.xy).rgb;\n          float depth = dot(encoded, vec3(1.0, 1.0 / 256.0, 1.0 / 65536.0));\n          vec3 normal = normalize(cross(dFdx(worldPosition), dFdy(worldPosition)));\n          float visibility = float(depth + 1.0 / 256.0 > position.z) * max(0.0, dot(rayLight, normal));\n\n          vec4 previous8 = texture2D(previous, updateUV_);\n          vec2 previous16 = vec2(\n            dot(previous8.rg, vec2(1.0, 1.0 / 256.0)),\n            dot(previous8.ba, vec2(1.0, 1.0 / 256.0)));\n          vec2 next16 = mix(previous16, vec2(1.0 - visibility, 1.0), accumulationFactor);\n          vec4 next8 = fract(vec4(next16.x * vec2(1.0, 256.0), next16.y * vec2(1.0, 256.0)));\n          next8 = floor(next8 * 256.0) / 256.0;\n          gl_FragColor = next8;\n        }\n      ',
derivatives:!0}),b=THREE.UniformsUtils.merge([THREE.UniformsLib.common]),this.j=new THREE.ShaderMaterial({uniforms:b,vertexShader:'\n        void main() {\n          gl_Position = vec4(position, 1.0);\n        }\n      ',fragmentShader:'\n        void main() {\n          gl_FragColor = vec4(0.0);\n        }\n      '});var d=Ea(a,c);this.l=new Int32Array(d);for(var g=0;g<d;++g)this.l[g]=(g+1|0)^d?g+1|0:-1}function Ja(a){this.a=this.c=null,this.b=new THREE.Vector4,this.d=new THREE.Vector3,this.g=new THREE.Matrix4,this.h=new THREE.Scene,this.i=new THREE.OrthographicCamera(0,1,0,1,0,1),this.j=new THREE.WebGLRenderTarget(1,1,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat}),this.n=!0,this.a=a;var c=THREE.UniformsUtils.merge([THREE.UniformsLib.common,{map:{type:'t',value:null}},{cameraToWorldMatrix:{type:'m4',value:new THREE.Matrix4}},{clearColor:{type:'c',value:a.d}},{uvLight:{type:'v3',value:new THREE.Vector3}},{rayLight:{type:'v3',value:new THREE.Vector3}},{randomSeed:{type:'f',
value:0}},{godrayStrength:{type:'f',value:0}}]);c.map.value=this.j,this.j.texture.generateMipmaps=!1,this.c=new THREE.ShaderMaterial({uniforms:c,vertexShader:[THREE.ShaderChunk.uv_pars_vertex,'\n        uniform mat4 cameraToWorldMatrix;\n        varying vec3 ray_;\n        varying vec2 uv_;\n\n        void main() {\n          vec4 projected = cameraToWorldMatrix * vec4(position.xy, 1.0, 1.0);\n          uv_ = uv;\n          ray_ = projected.xyz / projected.w;\n          gl_Position = vec4(position, 1.0);\n        }\n        '].join('\n'),fragmentShader:[THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.map_pars_fragment,'\n        uniform sampler2D map;\n        uniform float randomSeed;\n        uniform vec3 clearColor;\n        uniform vec3 rayLight;\n        uniform vec3 uvLight;\n        uniform float godrayStrength;\n        varying vec3 ray_;\n        varying vec2 uv_;\n\n        float lightMagnitude(vec3 ray) {\n          float falloff = max(0.0, dot(rayLight, normalize(ray)));\n          return pow(falloff, 4.0);\n        }\n\n        float godray() {\n          if (godrayStrength == 0.0) {\n            return 0.0;\n          }\n\n          float random = fract(sin(dot(gl_FragCoord.xy + randomSeed, vec2(12.9898, 78.233))) * 43758.5453);\n          vec3 deltaRayX = dFdx(ray_) / dFdx(uv_).x;\n          vec3 deltaRayY = dFdy(ray_) / dFdy(uv_).y;\n          const int count = 12;\n          float alpha = 0.0;\n\n          for (int i = 0; i < count; i++) {\n            float t = (float(i) + random) / float(count);\n            vec2 uv = mix(uv_, uvLight.xy, t * 0.5);\n            vec3 ray = ray_ +\n              deltaRayX * (uv.x - uv_.x) +\n              deltaRayY * (uv.y - uv_.y);\n            float magnitude = lightMagnitude(ray);\n\n            if (magnitude != 0.0) {\n              float occlusion = 1.0 - texture2D(map, uv).a;\n              float falloff = 1.0 - t;\n              alpha += occlusion * falloff;\n            }\n          }\n\n          // The integral of (1.0 - t) from 0 to 1 is 0.5\n          alpha *= 2.0;\n\n          return alpha * godrayStrength / float(count);\n        }\n\n        void main() {\n          vec4 color = texture2D(map, uv_);\n          vec3 backgroundColor = mix(clearColor, vec3(1.0), lightMagnitude(ray_));\n          color.rgb = mix(backgroundColor, color.rgb, color.a);\n          color.rgb += godray();\n          gl_FragColor = color;\n        }\n        '].join('\n'),
derivatives:!0}),this.h.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2,1,1),this.c))}function Ka(a){this.a=this.c=null,this.b=null,this.d=[],this.g={},this.h=new THREE.Group,this.i=new THREE.Group,this.j=new THREE.Group,this.n=new THREE.Frustum,this.l=new THREE.Box3,this.m=new THREE.Matrix4,this.f=new THREE.Vector3,this.o=new THREE.Vector3,this.e=new Ha(1024,1024),this.q=96,this.k=60,this.a=a,this.c=new THREE.TextureLoader().load('terrain.png'),this.c.minFilter=this.c.magFilter=THREE.NearestFilter;var c=THREE.UniformsUtils.merge([THREE.UniformsLib.common,{map:{type:'t',value:null}},{lightmap:{type:'t',value:null}},{rayLight:{type:'v3',value:new THREE.Vector3}},{clearColor:{type:'c',value:a.d}},{drawDistance:{type:'f',value:0}},{randomSeed:{type:'f',value:0}},{renderTextureMap:{type:'i',value:!0}},{renderFog:{type:'i',value:!0}},{renderOcclusion:{type:'i',value:!0}}]);c.map.value=this.c,c.lightmap.value=this.e.r,this.b=new THREE.ShaderMaterial({uniforms:c,vertexShader:'\n        attribute vec4 uvs;\n        varying vec3 worldSpacePosition;\n        varying vec3 cameraSpacePosition;\n        varying vec4 uvs_;\n\n        void main() {\n          worldSpacePosition = position;\n          vec4 transformed = modelViewMatrix * vec4(position, 1.0);\n          cameraSpacePosition = transformed.xyz / transformed.w;\n          uvs_ = uvs;\n          gl_Position = projectionMatrix * transformed;\n        }\n      ',
fragmentShader:[THREE.ShaderChunk.common,'\n        uniform bool renderTextureMap;\n        uniform bool renderFog;\n        uniform bool renderOcclusion;\n        uniform sampler2D map;\n        uniform sampler2D lightmap;\n        uniform float randomSeed;\n        uniform vec3 rayLight;\n        uniform vec3 clearColor;\n        uniform float drawDistance;\n        varying vec3 worldSpacePosition;\n        varying vec3 cameraSpacePosition;\n        varying vec4 uvs_;\n\n        void main() {\n          // Occlusion\n          float occlusion;\n          if (renderOcclusion) {\n            vec4 sample = texture2D(lightmap, uvs_.zw);\n            occlusion = 1.0 -\n              dot(sample.rg, vec2(1.0, 1.0 / 256.0)) /\n              dot(sample.ba, vec2(1.0, 1.0 / 256.0));\n          } else {\n            vec3 normal = normalize(cross(dFdx(worldSpacePosition), dFdy(worldSpacePosition)));\n            occlusion = 0.1 + 0.9 * max(0.0, dot(rayLight, normal));\n          }\n\n          // Terrain\n          vec3 color = renderTextureMap ? inputToLinear(texture2D(map, uvs_.xy).rgb) * occlusion : vec3(occlusion);\n          if (renderFog) {\n            float fade = max(0.0, 1.0 - length(cameraSpacePosition) / drawDistance);\n            color = mix(inputToLinear(clearColor), color, 1.0 - exp(fade * fade * -5.541263545158676));\n          }\n\n          // Finalize\n          color = linearToOutput(color);\n          float random = fract(sin(dot(gl_FragCoord.xy + randomSeed, vec2(12.9898, 78.233))) * 43758.5453);\n          color += (random - 0.5) / 255.0;\n          gl_FragColor = vec4(color, 1.0);\n        }\n        '].join('\n'),
derivatives:!0}),a.a.add(this.h),this.e.b.add(this.i),this.e.d.add(this.j),this.j.frustumCulled=!1}function La(){this.a=new THREE.Vector3,this.c=new THREE.Vector3}function Ma(a){this.a=this.c=null,this.b=new THREE.DirectionalLight(16777215,1),this.d=new THREE.Color(8372223),this.a=a,this.b.position.set(1,3,2),this.b.position.normalize(),a.add(this.b),this.c=new Ka(this)}var F=[[0,0,0],[2,2,2],[0,2,3],[1,1,1],[66,2,68],[6,6,5]];Ia()})();
