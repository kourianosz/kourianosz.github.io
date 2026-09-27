import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import { fragmentShader, vertexShader } from "./shaders";
import "./index.css";

export default function BlobBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        antialias: false,
        alpha: false,
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
        powerPreference: "low-power",
      });
    } catch {
      // The CSS palette remains visible when WebGL is unavailable.
      return;
    }

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
      },
    });

    if (!gl.getProgramParameter(program.program, gl.LINK_STATUS)) {
      geometry.remove();
      program.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return;
    }

    const mesh = new Mesh(gl, { geometry, program });
    canvas.className = "blob-background__canvas";
    background.appendChild(canvas);

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frameInterval = 1000 / 30;
    let animationFrame = 0;
    let previousTime: number | null = null;
    let elapsed = 0;
    let contextLost = false;

    const draw = () => {
      program.uniforms.uTime.value = elapsed;
      renderer.render({ scene: mesh });
    };

    const stop = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousTime = null;
    };

    const tick = (time: number) => {
      if (previousTime === null) previousTime = time;
      const delta = time - previousTime;
      if (delta >= frameInterval) {
        // Pausing a hidden tab must not make the blobs jump when it returns.
        elapsed += Math.min(delta, 100) / 1000;
        previousTime = time;
        draw();
      }
      animationFrame = requestAnimationFrame(tick);
    };

    const syncAnimation = () => {
      stop();
      if (contextLost || document.hidden) return;
      draw();
      if (!motionPreference.matches) animationFrame = requestAnimationFrame(tick);
    };

    const resize = () => {
      if (contextLost) return;
      // Measure only the fixed viewport layer, never the document's height.
      const width = Math.max(1, background.clientWidth);
      const height = Math.max(1, background.clientHeight);
      renderer.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
      if (!document.hidden) draw();
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      stop();
      canvas.style.visibility = "hidden";
    };

    const onContextRestored = () => {
      // Keep the CSS fallback after context loss; obsolete GPU resources
      // are not reused. A new component mount can create a fresh renderer.
      canvas.style.visibility = "hidden";
    };

    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(background);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", syncAnimation);
    motionPreference.addEventListener("change", syncAnimation);
    resize();
    syncAnimation();

    return () => {
      stop();
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", syncAnimation);
      motionPreference.removeEventListener("change", syncAnimation);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      geometry.remove();
      program.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      canvas.remove();
    };
  }, []);

  return <div className="blob-background" ref={backgroundRef} aria-hidden="true" />;
}
