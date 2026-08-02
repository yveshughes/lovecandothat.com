import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "The Water · Love Can Do That",
  description:
    "Roatan, diving, and what the water taught me about staying calm when someone else cannot.",
  openGraph: {
    title: "The Water",
    description:
      "Roatan, diving, and what the water taught me about staying calm when someone else cannot.",
  },
};

export default function Roatan() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="topbar">
        <div className="wrap">
          <a className="back" href="/">
            <span></span>Love Can Do That
          </a>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <img
            src="/images/brand/logo-horizontal-teal.svg"
            alt="Love can do that. Risk the possible."
            className="rv"
            style={{ width: "min(440px, 84vw)", height: "auto", objectFit: "contain", marginBottom: 44 }}
          />
          <p className="eyebrow rv">Roatán, Honduras</p>
          <h1 className="rv">
            I trained as a rescue diver. The whole certification comes down to one thing. Staying
            calm when <i>someone else cannot</i>.
          </h1>
          <p className="lede rv">
            Half the year I am on this island. It is where I learned the thing I use most in the
            room.
          </p>
          <div className="facts rv">
            <span>Half the year on the island</span>
            <span>Half in the Hudson Valley woods</span>
            <span>Rescue diver</span>
          </div>
          <figure className="fig wide rv">
            <img
              src="/images/dive-deep.jpg"
              alt="A diver hanging in deep blue water above a coral reef"
              loading="eager"
            />
          </figure>
        </div>
      </header>

      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">The water</p>
          </div>
          <div className="rv">
            <h2>I get out of my head and into my soul down there.</h2>
            <p style={{ marginTop: 34 }} className="dim">
              The ocean taught me to stop controlling. To let the current carry me somewhere I did
              not plan. To be a kid again, full of wonder and play and exploration, at an age when
              most people have quietly agreed to stop.
            </p>
            <p className="dim">
              It also taught me the thing I use most in my actual work. When someone else is in
              trouble, your job is not to fix it fast. I can hold space as deep as the bottom of the
              ocean for people, without ever needing to fix it.
            </p>
            <p className="dim">
              My best friend calls me a pearl diver into other people. It is true above the surface
              and below it.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <figure
          className="fig rv"
          style={{ aspectRatio: "2/3", maxWidth: 520, margin: "clamp(40px,6vh,70px) auto 0" }}
        >
          <img
            src="/images/dive-1.jpg"
            alt="A diver descending toward the bow of a coral-encrusted shipwreck in deep blue water"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="pull rv">
        <div className="wrap">
          <p>I can hold space as deep as the bottom of the ocean for people.</p>
          <p className="attrib">What diving taught me about sitting with people</p>
        </div>
      </div>

      <section className="band">
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/gypsys-jewel.jpg"
              alt="Gypsy's Jewel, a green two story island house with a wraparound veranda, a pink front door, and a lush garden"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Gypsy&apos;s Jewel</p>
            <h2 style={{ marginTop: 22 }}>
              Half the year I am here. It is where I go to <i>come back</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              I split my time between the Hudson Valley woods and this island. Different quiet in
              each. One is trees and cold and long dark evenings. The other is salt on everything,
              and a boat, and a door that stays open.
            </p>
            <p className="dim">
              People find their way here. That has happened without me planning it, which is usually
              how the good things start.
            </p>
            <p className="dim">
              What that becomes now has a name. Gypsy&apos;s Jewel. It is the house the retreat lives
              in, and everything happens under its roof and on its water. The name is my
              mother&apos;s. Her father named her Gypsy, and though she has been rooted in Alabama
              her whole life, she encouraged my wanderlust. She wanted me to stay and knew I needed
              out, so she gave me wings. A single mom with a PhD. A supercomputing pioneer in the
              eighties. A steel magnolia, with more grit in her delicate southern pinky than most
              boardrooms I have sat in. This island is where her name lives now. The house is her
              jewel, and so is the dive site that carries the same name, a white buoy rocking on
              blue water.
            </p>
            <p className="dim">
              I lead small leadership retreats here, built around the same water that taught me how
              to stay calm when someone else is not. The medicine
              stays where it is licensed, at a proper service center, exactly the way the law
              requires. What happens on this island is the integration. Diving, mostly. Long
              mornings with no agenda. The kind of processing that moves easier in water than in a
              conference room.
            </p>
            <p className="dim">
              If your team already knows the room and is ready to go somewhere quieter with it,{" "}
              <a
                href="/#inquire"
                style={{
                  color: "var(--clay)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--tan)",
                }}
              >
                this is where we would go
              </a>
              .
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="pair">
            <figure className="fig rv">
              <img
                src="/images/roatan-west-end.jpg"
                alt="Small boats moored off a West End beach on Roatan, palm trees and simple beach buildings along the sand"
                loading="lazy"
              />
              <figcaption className="cap">The beach down the road</figcaption>
            </figure>
            <figure className="fig rv">
              <img
                src="/images/roatan-boats.jpg"
                alt="A wooden pier and small island boats in the shallows on a sunny Roatan afternoon"
                loading="lazy"
              />
              <figcaption className="cap">Nothing fancy. That is the point.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ THE PEARL DIVE ============ */}
      <section className="band" id="pearldive">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Take something with you</p>
            </div>
            <div className="rv">
              <h2>
                The Pearl Dive. Thirty minutes, a pen, and <i>nobody watching</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                You do not have to work with me to use this. It is the assessment I built for the
                leaders I coach, and it is free.
              </p>
            </div>
          </div>

          <div className="gift">
            <figure className="cover rv">
              <img
                src="/images/pearldive-cover.jpg"
                alt="Cover of The Pearl Dive, a complimentary leadership assessment by Tracey Abbott"
                loading="lazy"
              />
            </figure>
            <div className="rv">
              <p className="dim">
                Most people try to become themselves by adding. More skills, more credentials, more
                strategy. This does the opposite. It is a process of intentional subtraction, and
                what is left at the end is the thing you have been carrying the whole time.
              </p>
              <ul className="giftlist">
                <li>Strip away the roles that were only ever armor</li>
                <li>Find the thread that has never wavered across seasons</li>
                <li>Name the gifts you cannot not give</li>
                <li>Write the one sentence that holds your essence</li>
              </ul>
              <a className="giftbtn" href="/The-Pearl-Dive.pdf" download>
                Download the Pearl Dive
              </a>
              <p className="giftnote">
                Print it in color, step away from screens, and let pen meet paper. The truth lives
                offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="close">
        <div className="wrap">
          <p className="mark rv">Love can do that.</p>
          <p className="sub rv">
            The licensed work happens elsewhere. This page is just where I live, and what the water
            taught me.
          </p>
          <a className="cta rv" href="/">
            Back to the work
          </a>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <span>Licensed psilocybin facilitator, Oregon &nbsp;·&nbsp; InnerTrek trained</span>
            <span>Tracey Abbott</span>
            <span>&copy; 2026 Leadership Current</span>
          </div>
          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 28px",
              fontSize: ".78rem",
              letterSpacing: ".06em",
            }}
          >
            <a
              href="https://www.instagram.com/love.candothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/@love.candothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Threads
            </a>
            <a
              href="https://www.facebook.com/lovecandothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@Lovecandothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              YouTube
            </a>
            <a
              href="https://substack.com/@lovecandothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Substack
            </a>
          </div>
          <p className="disclaimer">
            Psilocybin services are offered only in Oregon, under Oregon Psilocybin Services, and
            only at a licensed service center. Nothing on this page is an offer of psilocybin
            services, and no psilocybin service of any kind is offered, arranged, or provided
            outside Oregon. Nothing here is medical advice, a diagnosis, or a treatment claim.
          </p>
        </div>
      </footer>

      <Reveal />
    </>
  );
}
