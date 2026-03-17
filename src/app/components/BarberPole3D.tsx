import { useMemo } from "react";

export function BarberPole3D(props: { className?: string }) {
  const srcDoc = useMemo(
    () => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      *{box-sizing:border-box;margin:0;padding:0;}
      html,body{height:100%;background:transparent;}
      #wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;}
      canvas{display:block;width:100%;height:100%;}
    </style>
  </head>
  <body>
    <div id="wrap"><canvas id="c"></canvas></div>
    <script>
      const wrap = document.getElementById('wrap');
      const c = document.getElementById('c');
      const gl = c.getContext('webgl', { alpha: true, premultipliedAlpha: false });

      const VS = \`
        attribute vec3 aPos; attribute vec2 aUV; attribute vec3 aNorm;
        uniform mat4 uMVP; uniform mat4 uModel;
        varying vec2 vUV; varying vec3 vNorm;
        void main(){
          vUV = aUV;
          vNorm = normalize((uModel * vec4(aNorm, 0.0)).xyz);
          gl_Position = uMVP * vec4(aPos, 1.0);
        }\`;

      const FS = \`
        precision mediump float;
        varying vec2 vUV; varying vec3 vNorm;
        uniform float uTime; uniform float uStripes;
        void main(){
          vec3 light = normalize(vec3(0.5, 0.8, 1.0));
          float diff  = dot(vNorm, light);
          float cel   = diff > 0.55 ? 1.0 : diff > 0.05 ? 0.62 : 0.30;
          float diag  = mod((vUV.x * uStripes) - (vUV.y * uStripes * 0.55) + uTime, 1.0);
          float e     = 0.05;
          float stripe = smoothstep(e, e + 0.05, diag) - smoothstep(0.5 - e, 0.5, diag);
          vec3 black  = vec3(0.08, 0.06, 0.06);
          vec3 white  = vec3(0.97, 0.96, 0.94);
          vec3 col    = mix(black, white, stripe) * cel;
          float rim   = 1.0 - abs(dot(vNorm, vec3(0.0, 0.0, 1.0)));
          rim = pow(rim, 3.2);
          col = mix(col, black, step(0.6, rim) * 0.9);
          gl_FragColor = vec4(col, 1.0);
        }\`;

      const CVS = \`
        attribute vec3 aPos; attribute vec2 aUV; attribute vec3 aNorm;
        uniform mat4 uMVP; uniform mat4 uModel;
        varying vec2 vUV; varying vec3 vNorm;
        void main(){
          vUV = aUV;
          vNorm = normalize((uModel * vec4(aNorm, 0.0)).xyz);
          gl_Position = uMVP * vec4(aPos, 1.0);
        }\`;

      const CFS = \`
        precision mediump float;
        varying vec2 vUV; varying vec3 vNorm;
        uniform vec3 uColor;
        void main(){
          float d    = length(vUV - vec2(0.5));
          if (d > 0.5) discard;
          float diff = dot(vNorm, normalize(vec3(0.5, 1.0, 0.8)));
          float cel  = diff > 0.5 ? 1.0 : diff > 0.0 ? 0.6 : 0.32;
          float ring  = smoothstep(0.37, 0.42, d);
          float outer = smoothstep(0.46, 0.50, d);
          vec3 black  = vec3(0.08, 0.06, 0.06);
          vec3 col    = uColor * cel;
          col = mix(col, black, ring  * 0.75);
          col = mix(col, black, outer);
          col += vec3(0.3) * (1.0 - smoothstep(0.0, 0.14, d)) * cel * 0.4;
          gl_FragColor = vec4(col, 1.0);
        }\`;

      const sh  = (src, t) => { const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s); return s; };
      const mkP = (vs, fs) => { const p = gl.createProgram(); gl.attachShader(p, sh(vs, gl.VERTEX_SHADER)); gl.attachShader(p, sh(fs, gl.FRAGMENT_SHADER)); gl.linkProgram(p); return p; };
      const cylP = mkP(VS, FS);
      const capP = mkP(CVS, CFS);

      const makeCyl = (sg, rg) => {
        const pos=[], uv=[], norm=[], idx=[];
        for(let r=0;r<=rg;r++){ const v=r/rg; for(let s=0;s<=sg;s++){ const u=s/sg, a=u*Math.PI*2, cx=Math.cos(a), cz=Math.sin(a); pos.push(cx*.5,-.5+v,cz*.5); uv.push(u,v); norm.push(cx,0,cz); }}
        for(let r=0;r<rg;r++) for(let s=0;s<sg;s++){ const a=r*(sg+1)+s, b=a+sg+1; idx.push(a,b,a+1,b,b+1,a+1); }
        return { pos:new Float32Array(pos), uv:new Float32Array(uv), norm:new Float32Array(norm), idx:new Uint16Array(idx) };
      };

      const makeHemi = (sg, rg, flip) => {
        const pos=[], uv=[], norm=[], idx=[];
        for(let r=0;r<=rg;r++){ const phi=(r/rg)*Math.PI*.5, y=(flip?-1:1)*Math.sin(phi)*.22, rad=Math.cos(phi)*.5; for(let s=0;s<=sg;s++){ const u=s/sg, a=u*Math.PI*2; pos.push(Math.cos(a)*rad,y,Math.sin(a)*rad); uv.push(u,r/rg); norm.push(Math.cos(a)*Math.cos(phi),(flip?-1:1)*Math.sin(phi),Math.sin(a)*Math.cos(phi)); }}
        for(let r=0;r<rg;r++) for(let s=0;s<sg;s++){ const a=r*(sg+1)+s, b=a+sg+1; idx.push(a,b,a+1,b,b+1,a+1); }
        return { pos:new Float32Array(pos), uv:new Float32Array(uv), norm:new Float32Array(norm), idx:new Uint16Array(idx) };
      };

      const makeDisc = (sg) => {
        const pos=[], uv=[], norm=[], idx=[];
        pos.push(0,0,0); uv.push(.5,.5); norm.push(0,1,0);
        for(let s=0;s<=sg;s++){ const a=s/sg*Math.PI*2; pos.push(Math.cos(a)*.5,0,Math.sin(a)*.5); uv.push(.5+Math.cos(a)*.5,.5+Math.sin(a)*.5); norm.push(0,1,0); }
        for(let s=0;s<sg;s++) idx.push(0,s+1,s+2);
        return { pos:new Float32Array(pos), uv:new Float32Array(uv), norm:new Float32Array(norm), idx:new Uint16Array(idx) };
      };

      const up  = (d, t) => { const b=gl.createBuffer(); gl.bindBuffer(t,b); gl.bufferData(t,d,gl.STATIC_DRAW); return b; };
      const toM = g => ({ p:up(g.pos,gl.ARRAY_BUFFER), u:up(g.uv,gl.ARRAY_BUFFER), n:up(g.norm,gl.ARRAY_BUFFER), i:up(g.idx,gl.ELEMENT_ARRAY_BUFFER), c:g.idx.length });

      const CM = toM(makeCyl(80,80));
      const HT = toM(makeHemi(64,24,false));
      const HB = toM(makeHemi(64,24,true));
      const DM = toM(makeDisc(64));

      const mul = (a,b) => { const o=new Float32Array(16); for(let r=0;r<4;r++) for(let cc=0;cc<4;cc++){ let s=0; for(let k=0;k<4;k++) s+=a[r+k*4]*b[k+cc*4]; o[r+cc*4]=s; } return o; };
      const persp = (fov,asp,n,f) => { const t=Math.tan(fov/2), o=new Float32Array(16); o[0]=1/(asp*t); o[5]=1/t; o[10]=-(f+n)/(f-n); o[14]=-2*f*n/(f-n); o[11]=-1; return o; };
      const rotY  = a => { const cc=Math.cos(a), s=Math.sin(a), o=new Float32Array(16); o[0]=cc; o[2]=s; o[5]=1; o[8]=-s; o[10]=cc; o[15]=1; return o; };
      const scl   = (x,y,z) => { const o=new Float32Array(16); o[0]=x; o[5]=y; o[10]=z; o[15]=1; return o; };
      const tr    = (x,y,z) => { const o=new Float32Array(16); o[0]=o[5]=o[10]=o[15]=1; o[12]=x; o[13]=y; o[14]=z; return o; };

      const draw = (prog, m, mvp, model, unis) => {
        gl.useProgram(prog);
        [[m.p,'aPos',3],[m.u,'aUV',2],[m.n,'aNorm',3]].forEach(([b,n,s]) => {
          gl.bindBuffer(gl.ARRAY_BUFFER,b);
          const l=gl.getAttribLocation(prog,n);
          if(l>=0){ gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l,s,gl.FLOAT,false,0,0); }
        });
        gl.uniformMatrix4fv(gl.getUniformLocation(prog,'uMVP'),false,mvp);
        gl.uniformMatrix4fv(gl.getUniformLocation(prog,'uModel'),false,model);
        if(unis) for(const [k,v] of Object.entries(unis)){
          const l=gl.getUniformLocation(prog,k);
          Array.isArray(v) ? gl.uniform3fv(l,new Float32Array(v)) : gl.uniform1f(l,v);
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,m.i);
        gl.drawElements(gl.TRIANGLES,m.c,gl.UNSIGNED_SHORT,0);
      };

      let proj = persp(0.65, 1, 0.1, 100);

      function resize() {
        const rect = wrap.getBoundingClientRect();
        const cssW = Math.max(1, Math.floor(rect.width));
        const cssH = Math.max(1, Math.floor(rect.height));
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const pxW = Math.floor(cssW * dpr);
        const pxH = Math.floor(cssH * dpr);
        if (c.width !== pxW || c.height !== pxH) {
          c.width = pxW;
          c.height = pxH;
          proj = persp(0.65, pxW / pxH, 0.1, 100);
        }
      }

      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(wrap);
      window.addEventListener('resize', resize);

      const CAP  = [.91, .89, .86];
      const FPS  = 12;
      const MS   = 1000 / FPS;
      let last   = 0;

      function frame(ts) {
        requestAnimationFrame(frame);
        if (ts - last < MS) return;
        last += Math.floor((ts - last) / MS) * MS;
        const t = last / 1000;
        const w = Math.sin(t * 0.7) * 0.05;

        gl.viewport(0, 0, c.width, c.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);

        const rot  = rotY(w + 0.25);
        const view = tr(0, 0, -2.9);

        const cM = mul(rot, scl(.54, 1.55, .54));
        draw(cylP, CM, mul(proj, mul(view, cM)), cM, { uTime: t * 2 * 0.38, uStripes: 5 });

        const htM = mul(rot, mul(tr(0, .775, 0), scl(.54, .18, .54)));
        draw(capP, HT, mul(proj, mul(view, htM)), htM, { uColor: CAP });
        const hbM = mul(rot, mul(tr(0, -.775, 0), scl(.54, .18, .54)));
        draw(capP, HB, mul(proj, mul(view, hbM)), hbM, { uColor: CAP });

        for (const [ty, sx, sy] of [
          [ .775, .60, .055], [-.775, .60, .055],
          [ .815, .65, .050], [-.815, .65, .050],
        ]) {
          const m = mul(rot, mul(tr(0, ty, 0), scl(sx, sy, sx)));
          draw(capP, DM, mul(proj, mul(view, m)), m, { uColor: CAP });
        }
      }

      requestAnimationFrame(frame);
    </script>
  </body>
</html>`,
    []
  );

  return (
    <div className={props.className}>
      <iframe
        title="Barber pole 3D"
        className="w-full h-full border-0"
        sandbox="allow-scripts"
        srcDoc={srcDoc}
      />
    </div>
  );
}

