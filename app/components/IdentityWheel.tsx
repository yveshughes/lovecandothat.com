"use client";

import { useState } from "react";

/* The nine words sit on the wheel itself. Resting on one (or tapping it
   on touch screens) reveals its story in the centre of the wheel. */

const FACETS = [
  {
    k: "Connector",
    left: "51.7%",
    top: "1.4%",
    v: "I have spent a career putting the right people in the right room. This room only holds two. It is still the same job.",
  },
  {
    k: "Builder",
    left: "75.8%",
    top: "12.4%",
    v: "A Chick-fil-A I opened myself. A three hundred fifty million dollar P&L. A practice I started from nothing with no net. I build the container before anybody walks in.",
  },
  {
    k: "Empath",
    left: "88.6%",
    top: "40.2%",
    v: "I feel a room before I read it. For most of my career that was the thing I apologized for. Here it is the whole job.",
  },
  {
    k: "Insider",
    left: "84.1%",
    top: "71.8%",
    v: "Eight years as an Operating Partner. Five board seats. I already know what your calendar looks like and what it is costing you.",
  },
  {
    k: "Expatriate",
    left: "64.5%",
    top: "92.5%",
    v: "Ten years living outside my own country. You learn fast that the way you were raised to see things is one option, not the truth.",
  },
  {
    k: "Explorer",
    left: "38.9%",
    top: "92.5%",
    v: "Alice in Wonderland as a child. Under water off Roatán now. Follow the white rabbit is not a slogan for me. It is a method.",
  },
  {
    k: "Observer",
    left: "19.3%",
    top: "71.8%",
    v: "Thousands of hours watching leaders under pressure. I notice who partners, who opposes, and who goes quiet exactly when it matters.",
  },
  {
    k: "Outsider",
    left: "14.8%",
    top: "40.2%",
    v: "Single mom household in Alabama, then boardrooms on four continents. I have never fully belonged in either one. That turns out to be useful in here.",
  },
  {
    k: "Balanced human",
    left: "27.6%",
    top: "12.4%",
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
        <svg viewBox="44 44 534 426" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="320" cy="250" r="168" opacity=".5" />
            <circle cx="320" cy="250" r="118" opacity=".2" />
            <circle cx="320" cy="250" r="54" opacity=".5" />
            <line x1="320.0" y1="196.0" x2="320.0" y2="82.0" opacity=".28" />
            <line x1="354.7" y1="208.6" x2="428.0" y2="121.3" opacity=".28" />
            <line x1="373.2" y1="240.6" x2="485.4" y2="220.8" opacity=".28" />
            <line x1="366.8" y1="277.0" x2="465.5" y2="334.0" opacity=".28" />
            <line x1="338.5" y1="300.7" x2="377.5" y2="407.9" opacity=".28" />
            <line x1="301.5" y1="300.7" x2="262.5" y2="407.9" opacity=".28" />
            <line x1="273.2" y1="277.0" x2="174.5" y2="334.0" opacity=".28" />
            <line x1="266.8" y1="240.6" x2="154.6" y2="220.8" opacity=".28" />
            <line x1="285.3" y1="208.6" x2="212.0" y2="121.3" opacity=".28" />
          </g>
          <g className="ml" aria-hidden="true">
            <text x="385.7" y="69.6" textAnchor="start" dy="-0.25em">CONNECTOR</text>
            <text x="486.3" y="154.0" textAnchor="start" dy="0.34em">BUILDER</text>
            <text x="509.1" y="283.3" textAnchor="start" dy="0.34em">EMPATH</text>
            <text x="443.4" y="397.1" textAnchor="start" dy="0.34em">INSIDER</text>
            <text x="320.0" y="442.0" textAnchor="middle" dy="0.90em">EXPATRIATE</text>
            <text x="196.6" y="397.1" textAnchor="end" dy="0.34em">EXPLORER</text>
            <text x="130.9" y="283.3" textAnchor="end" dy="0.34em">OBSERVER</text>
            <text x="153.7" y="154.0" textAnchor="end" dy="0.34em">OUTSIDER</text>
            <text x="254.3" y="69.6" textAnchor="end" dy="-0.25em">BALANCED HUMAN</text>
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
