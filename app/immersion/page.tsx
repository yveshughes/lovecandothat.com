import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteNav from "../components/SiteNav";
import InquiryForm from "../components/InquiryForm";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "The Immersion · Love Can Do That",
  description:
    "A three day immersion for four people at most. Find the current. Power the current. Become the current. Roatán or the Hudson Valley.",
  openGraph: {
    title: "The Immersion",
    description:
      "A three day immersion for four people at most. Find the current. Power the current. Become the current.",
  },
};

export default function Immersion() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteNav current="immersion" />

      <header className="hero">
        <div className="wrap">
          <img
            src="/images/brand/logo-horizontal-teal.svg"
            alt="Love can do that. Risk the possible."
            className="rv"
            style={{ width: "min(440px, 84vw)", height: "auto", objectFit: "contain", marginBottom: 44 }}
          />
          <p className="eyebrow rv">Roatán and the Hudson Valley &nbsp;·&nbsp; A three day immersion</p>
          <h1 className="rv">
            What if you could feel fully alive, fully present, and <i>fully yourself</i>?
          </h1>
          <p className="lede rv">
            Highly successful people drift further and further off their center, and off their
            core. Three days, never more than four people, and enough distance from your calendar
            that the phone stops mattering. These immersions bring us back to the very essence of
            ourselves.
          </p>
          <div className="facts rv">
            <span>Three days</span>
            <span>Never more than four people</span>
            <span>Roatán or the Hudson Valley</span>
            <span>Dates set by conversation</span>
          </div>
          <figure
            className="fig rv"
            style={{ aspectRatio: "2/3", maxWidth: 560, margin: "clamp(44px,7vh,84px) auto 0" }}
          >
            <img
              src="/images/dive-lotus.jpg"
              alt="Tracey hovering cross-legged and weightless in deep blue water, a coral tower rising below her"
              loading="eager"
            />
          </figure>
        </div>
      </header>

      {/* ============ THE PREMISE ============ */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">The premise</p>
          </div>
          <div className="rv">
            <h2>
              When we slow down to find and read the right current, <i>everything else
              accelerates</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              You know the feeling. Being in the current. Being in flow. Things are effortless and
              moving, as if carried by a force outside of you and bigger than you. That current is
              the energy that runs through everything, and it was running through you before anyone
              told you who to become. We come from that place. When we are in it we feel alive, and
              we feel abundant.
            </p>
            <p className="dim">
              Most high performing people are not short on effort. They are spending enormous
              energy swimming against that current, and the further they drift from their center
              the harder they swim. Scarcity says guard it. Abundance says there is enough, and
              more.
            </p>
            <p className="dim">
              If we can learn to find the current, power it, and then become it, we become the very
              essence of energy ourselves. That is what three days here is for.
            </p>
            <p className="dim">
              This is not a retreat. A retreat is somewhere you go to pull back, and nobody comes
              here to pull back. You go in, you go under, and you come up different. Divers have a
              better word for it. Three days is short enough that you will actually come, and long
              enough that the second day can do what only a second day can do.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <figure
          className="rv"
          style={{ maxWidth: 620, margin: "clamp(40px,6vh,70px) auto 0" }}
        >
          <div className="fig" style={{ aspectRatio: "3/4" }}>
            <img
              src="/images/hudson-falls.jpg"
              alt="A creek pouring over dark rocks beside an old brick mill, trees on both banks"
              loading="lazy"
            />
          </div>
          <figcaption className="cap" style={{ textAlign: "center" }}>
            The current, close to home. Cold Spring, New York.
          </figcaption>
        </figure>
      </div>

      {/* ============ THE WATER ============ */}
      <section className="band">
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
              It also taught me the thing I use most in my actual work. I trained as a rescue diver.
              I can hold space at the bottom of the ocean, safely, while my clients explore. When
              someone else is in trouble, the job is not to fix it fast. It is to stay calm and stay
              with them.
            </p>
            <p className="dim">
              My best friend calls me a pearl diver into other people. A <i>deep dive master</i>,
              above the surface and below it. That is the whole job. I hold the container, and I
              take people to the depths.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <figure
          className="fig rv"
          style={{ aspectRatio: "3/4", maxWidth: 560, margin: "clamp(40px,6vh,70px) auto 0" }}
        >
          <img
            src="/images/roatan-reef2.jpg"
            alt="Aerial view of Roatan from the plane, the reef and turquoise shallows tracing the green island coastline"
            loading="lazy"
          />
        </figure>
      </div>

      {/* ============ THE THREE DAYS ============ */}
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The three days</p>
            </div>
            <div className="rv">
              <h2>
                Find the current. Power the current. <i>Become the current</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Real work in the mornings, water or woods in the afternoons, one long dinner where
                the actual conversation happens. Four people at most, so nobody performs for the
                room.
              </p>
            </div>
          </div>
          <div className="doors">
            <div className="door rv">
              <span className="n">i</span>
              <h3>Find the current</h3>
              <p>
                Strip away the noise. Find what is true, what matters now, and where life is
                already trying to take you. Analysis collects the dots. Intuition connects the dots.
              </p>
            </div>
            <div className="door rv">
              <span className="n">ii</span>
              <h3>Power the current</h3>
              <p>
                Move from insight to momentum. Align your energy, choices and action behind what
                you found. This is the day the decision gets made. The leaders who win move before
                they are certain.
              </p>
            </div>
            <div className="door rv">
              <span className="n">iii</span>
              <h3>Become the current</h3>
              <p>
                Stop trying to navigate from the outside. Embody it. Trust it. Become the force you
                have been looking for. Your job is to be the calmest thing in the water.
              </p>
            </div>
          </div>
          <div className="split rv" style={{ marginTop: "clamp(56px,8vh,90px)" }}>
            <div>
              <p className="eyebrow">And after</p>
            </div>
            <div>
              <p className="dim">
                Then the part nobody photographs. Everyone gets follow up sessions once they are
                home, because insight on an island is easy and insight on an ordinary Tuesday in
                your own kitchen is the only kind that counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TWO SETTINGS ============ */}
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Two settings</p>
            </div>
            <div className="rv">
              <h2>
                Salt water or cold woods. <i>Both work</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                The setting is not decoration. It decides what kind of quiet you get, and different
                people need different quiet. Mornings are the work. Afternoons are for getting back
                in your body.
              </p>
            </div>
          </div>
          <div className="settings">
            <div className="setting rv">
              <figure className="fig">
                <img
                  src="/images/roatan-house-lawn.jpg"
                  alt="The green house on Roatan seen from the lawn, palms and red ti plants in front of the wraparound veranda"
                  loading="lazy"
                />
              </figure>
              <p className="where">Roatán, Honduras</p>
              <h3>The island</h3>
              <p>
                Half the year I am on this island, on the second largest reef in the world.
                Afternoons here are yoga, breathwork, massage, and snorkeling over the reef.
              </p>
              <p>
                For anyone who wants to come in a few days early, get certified, and dive with me,
                the ocean is very good at teaching people to stop controlling things. It does not
                need my help to do it.
              </p>
              <div className="pair">
                <figure className="fig">
                  <img
                    src="/images/roatan-cay-boats.jpg"
                    alt="Fishing boats pulled up to a white sand cay, palm thatch huts under coconut palms"
                    loading="lazy"
                    style={{ objectPosition: "center 55%" }}
                  />
                </figure>
                <figure className="fig">
                  <img
                    src="/images/roatan-dining-lamps.jpg"
                    alt="The long dining table in the house, blue mosaic lamps hanging in the corner, jungle through the windows"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
            <div className="setting rv">
              <figure className="fig">
                <img
                  src="/images/hudson-house.jpg"
                  alt="The house in the Hudson Valley woods, a long table on the stone patio under a big maple"
                  loading="lazy"
                  style={{ objectPosition: "center 68%" }}
                />
              </figure>
              <p className="where">Hudson Valley, New York</p>
              <h3>The woods</h3>
              <p>
                My woods, Cold Spring, New York. Trees, cold air, a fire and nowhere to be.
                Afternoons here are hiking, kayaking on the river, long walks in the forest, and a
                little shopping in town if that is up your alley.
              </p>
              <p>
                Some people need the ocean to let go. Some people need the dark and the quiet.
              </p>
              <div className="pair">
                <figure className="fig">
                  <img
                    src="/images/hudson-river-beach.jpg"
                    alt="A sandy bend of the Hudson River with driftwood, Storm King mountain across the water"
                    loading="lazy"
                    style={{ objectPosition: "center 60%" }}
                  />
                </figure>
                <figure className="fig">
                  <img
                    src="/images/hudson-garden-path.jpg"
                    alt="The stone garden path beside the house, a teak bench and a black cat sitting in the grass"
                    loading="lazy"
                    style={{ objectPosition: "center 60%" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GYPSY'S JEWEL ============ */}
      <section id="gypsys-jewel" style={{ paddingBottom: "clamp(24px,4vh,48px)" }}>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Gypsy&apos;s Jewel</p>
            </div>
            <div className="rv">
              <h2>
                My mother named the dive site herself. <i>Gypsy&apos;s Jewel</i>.
              </h2>
            </div>
          </div>

          <div className="rv" style={{ marginTop: 36, maxWidth: "64ch" }}>
            <p className="dim">
              Her father named her Gypsy. A single mom who earned her PhD at night. A supercomputing
              pioneer in the eighties, when almost nobody who looked like her was in that room. A
              steel magnolia, with more grit in her delicate southern pinky than most boardrooms I
              have sat in. She wanted me to stay and knew I needed out, so she gave me wings.
            </p>
            <p className="dim">
              She loved the water her whole life, weightless and free. Last June I dedicated a dive
              site to her off this island, and she chose the name. She never got to dive it. Less
              than a month later I gave her eulogy, and that is where this phrase found me. Turns
              out, love can do that. Love can do everything.
            </p>
          </div>

          <figure className="rv" style={{ maxWidth: 440, margin: "clamp(40px,6vh,64px) auto" }}>
            <div className="fig" style={{ aspectRatio: "1/1" }}>
              <img
                src="/images/gypsys-jewel-buoy.jpg"
                alt="A white mooring buoy with Gypsy's Jewel hand painted on it, floating on turquoise water"
                loading="lazy"
              />
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              Gypsy&apos;s Jewel, the dive site she named.
            </figcaption>
          </figure>

          <div className="rv" style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="pair" style={{ marginTop: 0 }}>
              <figure className="fig">
                <img
                  src="/images/gypsys-jewel-dive.jpg"
                  alt="Tracey at the surface in scuba gear, smiling in her mask, one arm over the Gypsy's Jewel mooring buoy"
                  loading="lazy"
                  style={{ objectPosition: "center 55%" }}
                />
              </figure>
              <figure className="fig">
                <img
                  src="/images/gypsys-jewel-plaque.jpg"
                  alt="A carved wooden Roatan Marine Park plaque with the island in relief, marked Gypsy's Jewel with its coordinates"
                  loading="lazy"
                />
              </figure>
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              On her water, and the plaque from Roatán Marine Park.
            </figcaption>
          </div>

          <div className="rv" style={{ maxWidth: "64ch", marginTop: "clamp(40px,6vh,64px)" }}>
            <details className="more">
              <summary>More about my mother</summary>
              <p className="dim">
                When I told her about the dive site, she wrote back: so cool, thank you so much
                honey, it is such a positive thing to know that some aspect of me will live forever.
                She watched the video of the dedication instead of diving it, the first time I went
                down to see her name on the water.
              </p>
              <p className="dim">
                The house carries her name now too. We shared a favorite hour, twilight, what the
                French call <i>entre chien et loup</i>, between the dog and the wolf, when you cannot
                quite tell one from the other. She loved it because the earth was settling down.
                Twilight is where things transform.
              </p>
              <p className="dim">
                A few days before she died, I asked her how she wanted to be remembered. One word.{" "}
                <i>Kind</i>.
              </p>
            </details>
          </div>

          <figure className="rv" style={{ maxWidth: 540, margin: "clamp(40px,6vh,64px) auto" }}>
            <div className="fig" style={{ aspectRatio: "3/4" }}>
              <img
                src="/images/gypsys-jewel-house.jpg"
                alt="Gypsy's Jewel, the house: a green two story island home with a pink front door, wraparound verandas, and palms"
                loading="lazy"
              />
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              Gypsy&apos;s Jewel, the house.
            </figcaption>
          </figure>

          <div className="rv" style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="pair" style={{ marginTop: 0 }}>
              <figure className="fig">
                <img
                  src="/images/roatan-living-room.jpg"
                  alt="The living room, wicker chairs with navy cushions around a low table, screened porch and palms beyond"
                  loading="lazy"
                />
              </figure>
              <figure className="fig">
                <img
                  src="/images/roatan-great-room.jpg"
                  alt="The open great room, a long weathered wood table set for dinner, kitchen and sitting area behind"
                  loading="lazy"
                  style={{ objectPosition: "center 60%" }}
                />
              </figure>
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              Inside. One long table, and room for four.
            </figcaption>
          </div>

          <div className="rv" style={{ maxWidth: "64ch", marginTop: "clamp(40px,6vh,64px)" }}>
            <p className="dim">
              Roatán sits on the second largest reef in the world, and half my year is here, on her
              water.
            </p>
          </div>

          <figure className="rv" style={{ maxWidth: 620, margin: "clamp(40px,6vh,64px) auto" }}>
            <div className="fig" style={{ aspectRatio: "3/4" }}>
              <img
                src="/images/roatan-reef.jpg"
                alt="Aerial view of Roatan's barrier reef, the turquoise reef line dropping into deep blue ocean along the island coast"
                loading="lazy"
              />
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              The reef from the plane. Second largest in the world.
            </figcaption>
          </figure>

          <div className="rv" style={{ maxWidth: "64ch" }}>
            <p className="dim">
              This is where the immersion happens when it happens on the island. Long mornings with
              no agenda, warm water, and the kind of thinking that moves easier in the ocean than in
              a conference room.
            </p>
            <p className="dim">
              If your team is ready to go somewhere quieter,{" "}
              <a
                href="#inquire"
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
      </section>

      <div className="pull rv">
        <div className="wrap">
          <p>I can hold space at the bottom of the ocean, safely, while my clients explore.</p>
          <p className="attrib">What diving taught me about sitting with people</p>
        </div>
      </div>

      {/* ============ THE PEARL DIVE ============ */}
      <section className="band" id="pearldive">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow rv">Take something with you</p>
          <h2 className="rv" style={{ marginTop: 18, maxWidth: "24ch", marginInline: "auto" }}>
            The Pearl Dive. Thirty minutes, a pen, and <i>nobody watching</i>.
          </h2>
          <p className="dim rv" style={{ marginTop: 24, maxWidth: "52ch", marginInline: "auto" }}>
            You do not have to work with me to use this. It is the assessment I built for the
            leaders I coach, and it is free.
          </p>

          <figure
            className="cover rv"
            style={{ maxWidth: 340, margin: "clamp(40px,6vh,64px) auto 0" }}
          >
            <img
              src="/images/pearldive-cover.jpg"
              alt="Cover of The Pearl Dive, a complimentary identity tool by Tracey Abbott"
              loading="lazy"
            />
          </figure>

          <div className="rv" style={{ maxWidth: "56ch", margin: "clamp(30px,5vh,48px) auto 0" }}>
            <p className="dim">
              Every pearl begins with an irritation. Every transformation begins with the courage to
              dive. The treasures worth finding are not on the surface.
            </p>
            <p className="dim">
              Most people try to become themselves by adding. More skills, more credentials, more
              strategy. This does the opposite. It is a process of intentional subtraction, and what
              is left at the end is the thing you have been carrying the whole time.
            </p>
          </div>

          <ul
            className="giftlist rv"
            style={{ maxWidth: "44ch", margin: "26px auto 0", textAlign: "left" }}
          >
            <li>Strip away the roles that were only ever armor</li>
            <li>Find the thread that has never wavered across seasons</li>
            <li>Name the gifts you cannot not give</li>
            <li>Write the one sentence that holds your essence</li>
          </ul>

          <div className="rv">
            <a className="giftbtn" href="/The-Pearl-Dive.pdf" download>
              Download the Pearl Dive
            </a>
          </div>
          <p className="giftnote rv" style={{ margin: "18px auto 0" }}>
            Print it in color, step away from screens, and let pen meet paper. The truth lives
            offline.
          </p>
        </div>
      </section>

      {/* ============ COMING ============ */}
      <section id="inquire">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Coming</p>
            </div>
            <div className="rv">
              <h2>
                Dates are set by conversation, <i>not by a calendar page</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Tell me what you are in the middle of and I will tell you whether one of these is
                right for you, or whether something else is. I would rather send you somewhere
                better than fill a seat.
              </p>
            </div>
          </div>

          <InquiryForm
            formId="YOUR_IMMERSION_FORM_ID"
            subject="Immersion inquiry from"
            selectName="type"
            selectLabel="What you have in mind"
            selectOptions={["A seat for myself", "Something for my leadership team", "Not sure yet"]}
            messageLabel="What you are in the middle of"
            messagePlaceholder="As much or as little as you want to say."
          />
        </div>
      </section>

      <div className="close">
        <div className="wrap">
          <p className="mark rv">Love can do that.</p>
          <p className="sub rv">This is where I live, and what the water taught me.</p>
          <a className="cta rv" href="/">
            Back to the work
          </a>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <span>Coaching and immersions</span>
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
            Immersions are coaching and leadership development engagements. They are not therapy,
            medical care, or mental health treatment, and no controlled substance of any kind is
            offered, arranged, provided, or permitted at any immersion. Nothing on this page is
            medical advice, a diagnosis, a treatment claim, or a substitute for care from a licensed
            medical or mental health professional. If you are in crisis, call or text 988.
          </p>
        </div>
      </footer>

      <Reveal />
    </>
  );
}
