"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => n.toString().padStart(2, "0");

export default function LetterDate() {
  const [text, setText] = useState("—");
  useEffect(() => {
    const d = new Date();
    setText(`${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`);
  }, []);
  return <>{text}</>;
}
