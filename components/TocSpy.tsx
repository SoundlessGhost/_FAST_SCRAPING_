"use client";

import { useEffect } from "react";

export default function TocSpy() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".toc-list a[href^='#']"
    );
    if (!links.length) return;

    const map = new Map<Element, HTMLAnchorElement>();
    links.forEach((a) => {
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) map.set(target, a);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = map.get(entry.target);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((a) => a.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    map.forEach((_, target) => io.observe(target));

    const handlers: Array<{ link: HTMLAnchorElement; fn: (e: Event) => void }> = [];
    links.forEach((a) => {
      const fn = (e: Event) => {
        const id = a.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
          history.replaceState(null, "", "#" + id);
        }
      };
      a.addEventListener("click", fn);
      handlers.push({ link: a, fn });
    });

    return () => {
      io.disconnect();
      handlers.forEach(({ link, fn }) => link.removeEventListener("click", fn));
    };
  }, []);

  return null;
}
