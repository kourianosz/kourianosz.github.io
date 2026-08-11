import { useEffect, useRef } from 'react';
import { Mesh, Program, Renderer, Triangle } from 'ogl';

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

varying vec2 vUv;

float blob(vec2 point, vec2 center, float radius, vec2 shape) {
  vec2 delta = (point - center) * shape;
  return exp(-dot(delta, delta) / (radius * radius));
}

vec3 layer(vec3 base, vec3 tint, float amount, float strength) {
  return mix(base, tint, smoothstep(0.08, 0.92, amount) * strength);
}

float random(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 point = vec2(vUv.x * aspect, vUv.y);
  float t = uTime * 0.11;

  vec2 roseOneCenter = vec2(
    (0.70 + 0.08 * sin(t * 1.12) + 0.03 * cos(t * 2.0)) * aspect,
    0.34 + 0.08 * cos(t * 0.84)
  );
  vec2 roseTwoCenter = vec2(
    (0.34 + 0.07 * cos(t * 0.72)) * aspect,
    0.24 + 0.07 * sin(t * 1.18)
  );
  vec2 bubblegumCenter = vec2(
    (0.58 + 0.08 * sin(t * 0.92)) * aspect,
    0.58 + 0.08 * cos(t * 1.27)
  );
  vec2 hotPinkCenter = vec2(
    (0.86 + 0.07 * cos(t * 0.66)) * aspect,
    0.70 + 0.07 * sin(t * 1.46)
  );
  vec2 blushCenter = vec2(
    (0.48 + 0.08 * cos(t * 1.33)) * aspect,
    0.80 + 0.06 * sin(t * 0.78)
  );
  vec2 peachCenter = vec2(
    (0.76 + 0.07 * sin(t * 0.58)) * aspect,
    0.18 + 0.05 * cos(t * 1.54)
  );
  vec2 butterCenter = vec2(
    (0.22 + 0.06 * sin(t * 1.47)) * aspect,
    0.62 + 0.07 * cos(t * 0.63)
  );
  vec2 lilacCenter = vec2(
    (0.93 + 0.05 * sin(t * 0.88)) * aspect,
    0.40 + 0.08 * cos(t * 1.11)
  );

  float roseOne = blob(point, roseOneCenter, 0.36, vec2(0.92, 1.12));
  float roseTwo = blob(point, roseTwoCenter, 0.32, vec2(1.18, 0.88));
  float bubblegum = blob(point, bubblegumCenter, 0.38, vec2(0.96, 1.04));
  float hotPink = blob(point, hotPinkCenter, 0.34, vec2(0.82, 1.2));
  float blush = blob(point, blushCenter, 0.42, vec2(1.08, 0.9));
  float peach = blob(point, peachCenter, 0.34, vec2(1.12, 0.86));
  float butter = blob(point, butterCenter, 0.30, vec2(0.9, 1.1));
  float lilac = blob(point, lilacCenter, 0.32, vec2(0.78, 1.24));

  vec3 color = vec3(1.0, 0.965, 0.985);
  color = layer(color, vec3(1.0, 0.76, 0.86), blush, 0.54);
  color = layer(color, vec3(1.0, 0.49, 0.71), bubblegum, 0.58);
  color = layer(color, vec3(0.94, 0.17, 0.49), roseOne, 0.58);
  color = layer(color, vec3(0.85, 0.12, 0.43), roseTwo, 0.48);
  color = layer(color, vec3(1.0, 0.25, 0.61), hotPink, 0.44);
  color = layer(color, vec3(1.0, 0.68, 0.53), peach, 0.34);
  color = layer(color, vec3(1.0, 0.87, 0.49), butter, 0.28);
  color = layer(color, vec3(0.75, 0.57, 1.0), lilac, 0.32);

  float grain = random(gl_FragCoord.xy + uTime * 12.0) - 0.5;
  color += grain * 0.01;

  gl_FragColor = vec4(color, 1.0);
}
`;

export function BlobBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const renderer = new Renderer({
      canvas,
      antialias: false,
      alpha: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      powerPreference: 'low-power',
    });
    const gl = renderer.gl;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    let animationFrame = 0;
    let lastRender = 0;
    const frameInterval = 1000 / 40;

    const resize = () => {
      const background = canvas.parentElement;
      const page = background?.closest('.home-page');
      const width = Math.max(1, Math.round(page?.clientWidth || window.innerWidth));
      const height = Math.max(
        1,
        Math.round(
          Math.max(
            page?.scrollHeight || 0,
            page?.getBoundingClientRect().height || 0,
            window.innerHeight,
          ),
        ),
      );

      if (background) {
        background.style.height = `${height}px`;
      }

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };

    const render = (time) => {
      animationFrame = requestAnimationFrame(render);
      if (document.hidden || time - lastRender < frameInterval) {
        return;
      }

      lastRender = time;
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    const page = canvas.parentElement?.closest('.home-page');
    if (page) {
      resizeObserver.observe(page);
    }

    window.addEventListener('resize', resize);
    document.fonts?.ready.then(resize).catch(() => {});
    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="blob-background" aria-hidden="true">
      <canvas className="blob-canvas" ref={canvasRef} />
    </div>
  );
}
