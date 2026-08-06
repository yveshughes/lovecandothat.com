"use client";

import { useState } from "react";

/* Nine words sit evenly around a square wheel (40 degrees apart). Resting on
   one (desktop) or tapping it reveals its story in the roomy centre; tapping
   the panel or any empty spot closes it again. Geometry: viewBox 0 0 600 600,
   centre (300,300), rings r=200/140/70, spokes 70->200, labels at r=250. */

const FACETS = [
  {
    k: "Connector",
    left: "50.00%",
    top: "8.33%",
    v: "I have spent a career putting the right people in the right room. This room only holds two. It is still the same job.",
  },
  {
    k: "Builder",
    left: "76.78%",
    top: "18.08%",
    v: "A Chick-fil-A I opened myself. A three hundred fifty million dollar P&L. A practice I started from nothing with no net. I build the container before anybody walks in.",
  },
  {
    k: "Empath",
    left: "91.03%",
    top: "42.77%",
    v: "I feel a room before I read it. For most of my career that was the thing I apologized for. Here it is the whole job.",
  },
  {
    k: "Insider",
    left: "86.08%",
    top: "70.83%",
    v: "Eight years as an Operating Partner. Five board seats. I already know what your calendar looks like and what it is costing you.",
  },
  {
    k: "Expatriate",
    left: "64.25%",
    top: "89.15%",
    v: "Ten years living outside my own country. You learn fast that the way you were raised to see things is one option, not the truth.",
  },
  {
    k: "Explorer",
    left: "35.75%",
    top: "89.15%",
    v: "Alice in Wonderland as a child. Under water off Roatán now. Follow the white rabbit is not a slogan for me. It is a method.",
  },
  {
    k: "Observer",
    left: "13.92%",
    top: "70.83%",
    v: "Thousands of hours watching leaders under pressure. I notice who partners, who opposes, and who goes quiet exactly when it matters.",
  },
  {
    k: "Outsider",
    left: "8.97%",
    top: "42.77%",
    v: "Single mom household in Alabama, then boardrooms on four continents. I have never fully belonged in either one. That turns out to be useful in here.",
  },
  {
    k: "Balanced human",
    left: "23.22%",
    top: "18.08%",
    v: "Human beings and becomings, not human doings. I will not ask you to be anything in that room that I am not willing to be first.",
  },
];

export default function IdentityWheel() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="wheelwrap">
      <div
        className="wheel"
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest(".k")) setActive(null);
        }}
      >
        <svg viewBox="0 0 600 600" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="300" cy="300" r="200" opacity=".5" />
            <circle cx="300" cy="300" r="140" opacity=".2" />
            <circle cx="300" cy="300" r="70" opacity=".5" />
            <line x1="300" y1="230" x2="300" y2="100" opacity=".26" />
            <line x1="345.0" y1="246.4" x2="428.6" y2="146.8" opacity=".26" />
            <line x1="368.9" y1="287.9" x2="497.0" y2="265.3" opacity=".26" />
            <line x1="360.6" y1="335.0" x2="473.2" y2="400.0" opacity=".26" />
            <line x1="323.9" y1="365.8" x2="368.4" y2="487.9" opacity=".26" />
            <line x1="276.1" y1="365.8" x2="231.6" y2="487.9" opacity=".26" />
            <line x1="239.4" y1="335.0" x2="126.8" y2="400.0" opacity=".26" />
            <line x1="231.1" y1="287.9" x2="103.0" y2="265.3" opacity=".26" />
            <line x1="255.0" y1="246.4" x2="171.4" y2="146.8" opacity=".26" />
          </g>
        </svg>
        <ul className="facets">
          {FACETS.map((f, i) => (
            <li key={f.k} className={active === i ? "on" : undefined}>
              <span
                className="k"
                tabIndex={0}
                style={{ left: f.left, top: f.top }}
                onClick={() => setActive(active === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(active === i ? null : i);
                  }
                }}
              >
                {f.k}
              </span>
              <span className="v" style={active === i ? { opacity: 1 } : undefined}>
                {f.v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
