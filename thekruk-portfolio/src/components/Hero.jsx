import { useEffect, useRef, useState } from "react";

function Typewriter({ text, speed = 160, delay = 300 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const start = () => {
      const id = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
        }
      }, speed);
    };
    const timer = setTimeout(start, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, delay]);

  return (
    <span className="typewriter">
      {display}
      <span className="caret" aria-hidden="true">|</span>
    </span>
  );
}

function BinaryGlobe({ size = 240, density = 12, speed = 0.003, growDuration = 1200, jitter = 8 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";

    const styles = getComputedStyle(document.documentElement);
    const accent = (styles.getPropertyValue("--green") || "#00B4D8").trim();

    function hexToRgb(hex) {
      const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
      if (!m) return { r: 0, g: 180, d: 216 };
      return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
    }
    const { r, g, b } = hexToRgb(accent);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const R = (Math.min(canvas.width, canvas.height) / 2 - 8 * dpr);
    const tilt = -0.35; // slight tilt for 3D feel
    const fov = 420 * dpr;

    // Precompute points on a sphere
    const pts = [];
    for (let lat = -80; lat <= 80; lat += density) {
      for (let lon = 0; lon < 360; lon += density) {
        const la = (lat * Math.PI) / 180;
        const lo = (lon * Math.PI) / 180;
        const x = Math.cos(la) * Math.cos(lo);
        const y = Math.sin(la);
        const z = Math.cos(la) * Math.sin(lo);
        // alternate 0/1 pattern by grid position
        const bit = ((Math.floor((lat + 90) / density) + Math.floor(lon / density)) % 2) ? "1" : "0";
        // per-point deterministic-ish jitter
        pts.push({ x, y, z, bit, jx: Math.random() * 2 - 1, jy: Math.random() * 2 - 1 });
      }
    }

    let angle = 0;
    let raf;
    const t0 = performance.now();

    function draw() {
      angle += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // animation progress for jitter fade (0..1)
      const elapsed = performance.now() - t0;
      const raw = Math.min(1, elapsed / Math.max(1, growDuration));
      const easeOutCubic = (u) => 1 - Math.pow(1 - u, 3);
      const s = easeOutCubic(raw);

      // clip to circular area so it looks like a globe
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      ctx.translate(cx, cy);

      // draw from back to front by z
      const projected = [];
      for (const p of pts) {
        // rotate around Y
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        let x = p.x * cosA - p.z * sinA;
        let z = p.x * sinA + p.z * cosA;

        // tilt around X
        const cosT = Math.cos(tilt);
        const sinT = Math.sin(tilt);
        let y = p.y * cosT - z * sinT;
        z = p.y * sinT + z * cosT;

        const depth = z; // -1..1
        const persp = fov / (fov + z * R);
        let sx = x * R * persp;
        let sy = y * R * persp;
        // jitter that fades as it grows
        const amp = (jitter * dpr) * (1 - s);
        sx += p.jx * amp;
        sy += p.jy * amp;
        projected.push({ sx, sy, depth, bit: p.bit, scale: persp });
      }

      projected.sort((a, b) => a.depth - b.depth);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const baseSize = 13 * dpr;

      for (const q of projected) {
        const alpha = 0.25 + (q.depth + 1) * 0.35; // brighter when closer
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.font = `600 ${Math.max(10 * dpr, baseSize * q.scale)}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
        ctx.fillText(q.bit, q.sx, q.sy);
      }

      ctx.restore();

      // soft ring glow
      const grd = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R);
      grd.addColorStop(0, `rgba(${r},${g},${b},0)`);
      grd.addColorStop(1, `rgba(${r},${g},${b},0.08)`);
      ctx.strokeStyle = grd;
      ctx.lineWidth = 6 * dpr;
      ctx.beginPath();
      ctx.arc(cx, cy, R - 3 * dpr, 0, Math.PI * 2);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [size, density, speed]);

  return (
    <div className="binary-globe">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" data-section className="section hero">
      <BinaryGlobe size={260} density={12} speed={0.0032} growDuration={1600} />
      <h1>
        Hi, I am <Typewriter text="Piotr" /> 👋
      </h1>
      <p className="lead">
    I’m a Data Engineer and data enthusiast, building infrastructures and models that process billions of records for millions of customers. 
    Every day I work on turning complex data into reliable solutions with real-world impact.
      </p>
      <div style={{display:"flex", gap:".75rem", marginTop:"1rem", justifyContent:"center"}}>
        <a className="button solid" href="#projects">Projects</a>
        <a className="button" href="#contact">Let's talk</a>
      </div>
    </section>
  );
}
