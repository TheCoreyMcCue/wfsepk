"use client";

import { useId, useState } from "react";
import clsx from "clsx";

type Props = {
  title?: string;
  bio: string; // full bio text
  collapsedLines?: number; // visual height; tweak per design
};

export default function AboutBio({
  title = "About",
  bio,
  collapsedLines = 8,
}: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();

  // Approximate collapsed height (lines × line-height).
  // Tailwind default line-height for text-base is ~1.5rem.
  const collapsedMax = `${collapsedLines * 1.6}rem`;

  return (
    <div className="rounded-2xl bg-[#F9E158] text-[#1E1E1E] shadow-[0_6px_18px_rgba(0,0,0,.12)] p-8">
      <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
        {title}
      </h3>

      <div className="relative">
        <div
          id={id}
          className={clsx(
            "transition-[max-height] duration-500 ease-in-out overflow-hidden"
          )}
          style={{ maxHeight: open ? "2000px" : collapsedMax }}
          aria-live="polite"
        >
          <p className="leading-relaxed">{bio}</p>
        </div>

        {/* Fade mask only when collapsed */}
        {!open && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16
                          bg-gradient-to-t from-[#F9E158] to-transparent"
          />
        )}
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="mt-6 inline-flex items-center rounded-full bg-[#1E1E1E] text-white
                   px-5 py-2.5 font-semibold tracking-wide hover:bg-[#E17742]
                   hover:text-white transition"
      >
        {open ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
