"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  format?: (n: number) => string;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedNumber({
  to,
  format = (n) => n.toLocaleString(),
  duration = 1400,
  suffix = "",
  className = "",
}: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {format(val)}
      {suffix}
    </span>
  );
}
