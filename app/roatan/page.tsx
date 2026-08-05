import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteNav from "../components/SiteNav";
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

      <SiteNav current="roatan" />

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
              src="/images/dive-hover.jpg"
              alt="Tracey hovering weightless in blue water with her fins tucked, a coral tower rising in the foreground"
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
              I generate energy underwater. The ocean taught me to let go of control. To let the
              current carry me to places in flow. To be a kid again, full of wonder and play and
              exploration, at an age when most people have quietly agreed to stop.
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

      <section className="band" id="gypsys-jewel">
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/gypsys-jewel.jpg"
              alt="Gypsy's Jewel from the garden, a two story island house with wraparound verandas under palms and a bright blue sky"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Gypsy&apos;s Jewel</p>
            <h2 style={{ marginTop: 22 }}>
              My mother named the dive site herself. <i>Gypsy&apos;s Jewel</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Her father named her Gypsy. A single mom who earned her PhD at night. A supercomputing
              pioneer in the eighties, when almost nobody who looked like her was in that room. A
              steel magnolia, with more grit in her delicate southern pinky than most boardrooms I
              have sat in. She wanted me to stay and knew I needed out, so she gave me wings.
            </p>
            <p className="dim">
              She was a competitive swimmer as a girl and loved the water her whole life, weightless
              and free. So last June I dedicated a dive site to her, off this island. She picked the
              name. When I told her, she wrote back, so cool, thank you so much honey, it is such a
              positive thing to know that some aspect of me will live forever.
            </p>
            <p className="dim">
              She never got to dive it. She watched the video of the dedication instead, the first
              time I went down to see her name on the water. Less than a month later I was laying her
              to rest. I gave her eulogy, and her words came through me in flow, and that is where
              this phrase found me. We did an impossibly hard thing that day. Turns out, love can do
              that. Love can do everything.
            </p>
            <p className="dim">
              The house carries her name now too. We shared a favorite hour, twilight, what the
              French call <i>entre chien et loup</i>, between the dog and the wolf, when you cannot
              quite tell one from the other. She loved it because the earth was settling down.
              Twilight is where things transform. It is the whole reason I do this work.
            </p>
            <p className="dim">
              A few days before she died, I asked her how she wanted to be remembered. One word.{" "}
              <i>Kind</i>. The last thing I told her was that I would see her in the stars. They
              twinkle like Gypsy&apos;s Jewel.
            </p>
            <p className="dim">
              I lead small leadership retreats here, on her water. The medicine stays where it is
              licensed, at a proper service center, exactly the way the law requires. What happens on
              this island is the integration. Diving, mostly. Long mornings with no agenda. The kind
              of processing that moves easier in water than in a conference room.
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
          <div className="pair" style={{ marginTop: "clamp(64px,9vh,100px)" }}>
            <figure className="rv" style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/gypsys-jewel-buoy.jpg"
                  alt="A white mooring buoy with Gypsy's Jewel hand painted on it, floating on turquoise water"
                  loading="lazy"
                />
              </div>
              <figcaption className="cap">
                Gypsy&apos;s Jewel. Her name on the water. See you in the stars, Mama.
              </figcaption>
            </figure>
            <figure className="rv" style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/roatan-west-end.jpg"
                  alt="Small boats moored off a West End beach on Roatan, palm trees and simple beach buildings along the sand"
                  loading="lazy"
                />
              </div>
              <figcaption className="cap">The beach down the road</figcaption>
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
                Every pearl begins with an irritation. Every transformation begins with the courage
                to dive. The treasures worth finding are not on the surface.
              </p>
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
          <nav
            style={{
              marginTop: 34,
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 30px",
              fontSize: ".72rem",
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            <a href="/" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Home
            </a>
            <a href="/reading" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Research
            </a>
            <a href="#" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Back to top
            </a>
          </nav>
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
