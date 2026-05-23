/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ---------- Animated counter (shared) ---------- */
function AnimatedNumber({ to, format = (n) => n.toLocaleString(), duration = 1400, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{format(val)}{suffix}</span>;
}

document.querySelectorAll("[data-num]").forEach((el) => {
  const to = Number(el.dataset.num);
  const suffix = el.dataset.suffix || "";
  const format = (n) => n.toLocaleString();
  ReactDOM.createRoot(el).render(<AnimatedNumber to={to} suffix={suffix} format={format} />);
});

/* ---------- Tweaks ---------- */
const { TweaksPanel, useTweaks, TweakSection, TweakSelect, TweakToggle } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakSelect
          label="Accent color"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={[
            { value: "emerald", label: "Emerald (default)" },
            { value: "indigo",  label: "Indigo"  },
            { value: "rust",    label: "Rust"    },
            { value: "slate",   label: "Slate"   },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweaksRoot = document.getElementById("tweaks-root");
if (tweaksRoot) ReactDOM.createRoot(tweaksRoot).render(<TweaksApp />);
