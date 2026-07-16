"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/Icons";

/**
 * Placeholder photography lives in /public/images/before-after (sourced from
 * Pexels — free for commercial use). To use real job photos, overwrite the
 * files in place keeping the same names; ideally shoot each pair from the same
 * spot so the wipe lines up.
 */
export interface BeforeAfterSlide {
  id: string;
  label: string;
  service: string;
  blurb: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export const beforeAfterSlides: BeforeAfterSlide[] = [
  {
    id: "kitchen",
    label: "Kitchen reset",
    service: "Deep Cleaning",
    blurb:
      "Weeks of build-up on the counters and splashback — cleared, degreased, and polished in a single visit.",
    before: "/images/before-after/kitchen-before.jpg",
    after: "/images/before-after/kitchen-after.jpg",
    beforeAlt: "Kitchen counter cluttered with bottles, dishes and food waste before cleaning",
    afterAlt: "Bright, spotless modern kitchen with clear polished counters after cleaning",
  },
  {
    id: "sink",
    label: "Sink & fixtures",
    service: "Residential Cleaning",
    blurb:
      "Baked-on grease and a sink full of dishes, brought back to a showroom shine.",
    before: "/images/before-after/sink-before.jpg",
    after: "/images/before-after/sink-after.jpg",
    beforeAlt: "Sink piled with greasy pans and dirty dishes before cleaning",
    afterAlt: "Spotless white sink and gleaming stone countertop after cleaning",
  },
  {
    id: "bathroom",
    label: "Bathroom revival",
    service: "Deep Cleaning",
    blurb:
      "Stained basins, dulled fixtures and tired grout — scrubbed back to a sparkle.",
    before: "/images/before-after/bathroom-before.jpg",
    after: "/images/before-after/bathroom-after.jpg",
    beforeAlt: "Basin heavily stained and marked before cleaning",
    afterAlt: "Immaculate marble bathroom with gleaming fixtures after cleaning",
  },
  {
    id: "living",
    label: "Living space",
    service: "Move In / Move Out",
    blurb:
      "Clutter cleared, floors deep-cleaned, and every surface dusted and reset.",
    before: "/images/before-after/living-before.jpg",
    after: "/images/before-after/living-after.jpg",
    beforeAlt: "Living space with clothes and clutter spilling across the floor before cleaning",
    afterAlt: "Tidy, freshly cleaned living room with clear floors after cleaning",
  },
];

function Slider({ slide }: { slide: BeforeAfterSlide }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  // Bound to the window while dragging so the wipe keeps tracking even when the
  // pointer leaves the frame, and still releases if the pointer is lifted outside.
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const stop = () => setDragging(false);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, [dragging, setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={frameRef}
      className={`ba__frame${dragging ? " is-dragging" : ""}`}
      onPointerDown={(e) => {
        // Ignore secondary clicks so a right-click doesn't start a drag.
        if (e.button !== 0) return;
        setDragging(true);
        setFromClientX(e.clientX);
      }}
    >
      {/* AFTER sits underneath; BEFORE is clipped over the top by the handle. */}
      <Image
        className="ba__img"
        src={slide.after}
        alt={slide.afterAlt}
        fill
        sizes="(max-width: 980px) 100vw, 940px"
        style={{ objectFit: "cover" }}
        draggable={false}
      />
      <div className="ba__clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          className="ba__img"
          src={slide.before}
          alt={slide.beforeAlt}
          fill
          sizes="(max-width: 980px) 100vw, 940px"
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </div>

      <span className="ba__pill ba__pill--before" aria-hidden="true">Before</span>
      <span className="ba__pill ba__pill--after" aria-hidden="true">After</span>

      <div className="ba__handle" style={{ left: `${pos}%` }}>
        <button
          type="button"
          className="ba__grip"
          role="slider"
          aria-label={`${slide.label}: reveal the before and after`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            e.stopPropagation();
            setDragging(true);
          }}
        >
          <Arrow />
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const slide = beforeAfterSlides[active];

  return (
    <div className="ba">
      <div className="ba__tabs" role="tablist" aria-label="Before and after galleries">
        {beforeAfterSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`ba-tab-${s.id}`}
            aria-selected={i === active}
            aria-controls={`ba-panel-${s.id}`}
            className={`ba__tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        className="ba__stage"
        role="tabpanel"
        id={`ba-panel-${slide.id}`}
        aria-labelledby={`ba-tab-${slide.id}`}
      >
        {/* Remount per slide so the wipe resets to centre on every switch. */}
        <Slider key={slide.id} slide={slide} />

        <div className="ba__meta">
          <span className="tag">{slide.service}</span>
          <p>{slide.blurb}</p>
          <span className="ba__hint">
            <span className="ba__hint-dot" /> Drag the handle to reveal the transformation
          </span>
        </div>
      </div>
    </div>
  );
}
