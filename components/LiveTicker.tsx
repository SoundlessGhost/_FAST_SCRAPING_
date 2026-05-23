"use client";

import { useEffect, useState } from "react";

type Props = { start?: number; perSecond?: number };

export default function LiveTicker({ start = 24_318_240, perSecond = 280 }: Props) {
  const [n, setN] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => v + Math.floor(perSecond / 4) + Math.floor(Math.random() * 20));
    }, 250);
    return () => clearInterval(id);
  }, [perSecond]);
  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>{n.toLocaleString()}</span>
  );
}
