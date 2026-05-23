/* global React, ReactDOM */
const { useState, useEffect } = React;

/* ============================================================
   TOC scroll-spy
   ============================================================ */

(function initScrollSpy() {
  const links = document.querySelectorAll(".toc-list a[href^='#']");
  if (!links.length) return;
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) map.set(target, a);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = map.get(entry.target);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((a) => a.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

  map.forEach((_, target) => io.observe(target));

  // smooth-scroll click
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
        history.replaceState(null, "", "#" + id);
      }
    });
  });
})();

/* ============================================================
   TWEAKS
   ============================================================ */

const { TweaksPanel, useTweaks, TweakSection, TweakSelect } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { document.documentElement.setAttribute("data-accent", t.accent); }, [t]);
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
