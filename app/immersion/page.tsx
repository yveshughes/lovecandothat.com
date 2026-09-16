import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteNav from "../components/SiteNav";
import InquiryForm from "../components/InquiryForm";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "The Immersion · Love Can Do That",
  description:
    "A three day immersion for a small group. The Hudson Valley in the fall, Roatán in the spring. Find the current. Power the current. Become the current.",
  openGraph: {
    title: "The Immersion",
    description:
      "A three day immersion for a small group. The Hudson Valley in the fall, Roatán in the spring.",
  },
};

export default function Immersion() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteNav current="immersion" />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="wrap">
          <img
            src="/images/brand/logo-horizontal-teal.svg"
            alt="Love can do that. Risk the possible."
            className="rv"
            style={{ width: "min(440px, 84vw)", height: "auto", objectFit: "contain", marginBottom: 44 }}
          />
          <p className="eyebrow rv">A three day immersion &nbsp;·&nbsp; Small groups</p>
          <h1 className="rv">
            What if you could feel fully alive, fully present, and <i>fully yourself</i>?
          </h1>
          <p className="lede rv">
            Highly successful people drift further and further off their center, and off their
            core. Three days, a small group, and enough distance from your calendar
            that the phone stops mattering. These immersions bring us back to the very essence of
            ourselves.
          </p>
          <div className="facts rv">
            <span>Three days</span>
            <span>Small groups</span>
            <span>Hudson Valley in the fall</span>
            <span>Roatán in the spring</span>
          </div>

          <div className="pair rv" style={{ marginTop: "clamp(48px,7vh,84px)" }}>
            <a href="#hudson-valley" className="settinglink" style={{ margin: 0, display: "block", textDecoration: "none" }}>
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/hudson-house.jpg"
                    alt="The house in the Hudson Valley woods, a long table on the stone patio under a big maple"
                    loading="eager"
                    style={{ objectPosition: "center 62%" }}
                  />
                </div>
                <figcaption className="cap">Fall &nbsp;·&nbsp; Cold Spring, New York &nbsp;→</figcaption>
              </figure>
            </a>
            <a href="#roatan" className="settinglink" style={{ margin: 0, display: "block", textDecoration: "none" }}>
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/roatan-house-lawn.jpg"
                    alt="The green house on Roatan seen from the lawn, palms and red ti plants in front of the wraparound veranda"
                    loading="eager"
                  />
                </div>
                <figcaption className="cap">Spring &nbsp;·&nbsp; Roatán, Honduras &nbsp;→</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </header>

      {/* ============ TWO SETTINGS ============ */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">Two settings</p>
          </div>
          <div className="rv">
            <h2>
              The Hudson Valley in the fall. <i>Roatán in the spring</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              Same three days, two very different kinds of quiet. In the fall the woods around my
              house in Cold Spring turn and the river goes cold. In the spring I am on my island,
              on the second largest reef in the world. Pick the one your body is asking for, or tap
              a photo above to see it.
            </p>
          </div>
        </div>
      </section>

      {/* ============ THE PREMISE ============ */}
      <section className="band">
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
              This is not a retreat. This is an immersion. You come here to go into the depths.
            </p>
          </div>
        </div>
      </section>

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
                Mornings are the work. Afternoons are for getting back in your body. A small group,
                so everyone gets real time.
              </p>
            </div>
          </div>
          <div className="doors">
            <div className="door rv">
              <span className="n">i</span>
              <h3>Find the current</h3>
              <p>
                Strip away the noise and find your base case. Where you actually are, underneath
                everything you have been managing, before you decide a single thing. Most people
                have never once stopped long enough to look.
              </p>
            </div>
            <div className="door rv">
              <span className="n">ii</span>
              <h3>Power the current</h3>
              <p>
                Move from insight to momentum. Align your energy, your choices, and your action
                behind what you found. This is the day the decision gets made, and the first move
                gets taken.
              </p>
            </div>
            <div className="door rv">
              <span className="n">iii</span>
              <h3>Become the current</h3>
              <p>
                This is about tapping into the electricity and the force that already runs through
                you, and through the world, and letting it carry you instead of fighting it. You
                stop navigating from the outside. You become the thing itself.
              </p>
            </div>
          </div>
          <div className="split rv" style={{ marginTop: "clamp(56px,8vh,90px)" }}>
            <div>
              <p className="eyebrow">And after</p>
            </div>
            <div>
              <p className="dim">
                Everyone gets follow up sessions once they are home. Integration is where it becomes
                real. I give you the tools to take what opened up here and put it to work in how you
                lead, and in the decisions only you can make. That is the part that actually changes
                anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HUDSON VALLEY ============ */}
      <section className="band" id="hudson-valley">
        <div className="wrap">
          <div className="duo wide-r mid">
            <div className="rv">
              <p className="eyebrow">Hudson Valley &nbsp;·&nbsp; Fall</p>
              <h2 style={{ marginTop: 22 }}>
                My woods. <i>Cold Spring, New York</i>.
              </h2>
              <p style={{ marginTop: 32 }} className="dim">
                Nervous system regulation is not a wellness trend. It is a performance requirement.
                You cannot lead clearly from a body still braced for the last hit, and the woods
                here are very good at unbracing it.
              </p>
              <p className="dim">
                Trees, cold air, a fire and nowhere to be. Afternoons are hiking, kayaking on the
                river, long walks in the forest, and a little shopping in town if that is up your
                alley.
              </p>
            </div>
            <figure className="fig rv">
              <img
                src="/images/hudson-waterfront.jpg"
                alt="The Cold Spring waterfront, sun over the mountain and a dock reaching into the river"
                loading="lazy"
                style={{ objectPosition: "center 55%" }}
              />
            </figure>
          </div>

          <div className="pair rv">
            <figure style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/hudson-river-beach.jpg"
                  alt="A sandy bend of the Hudson River with driftwood, the highlands across the water"
                  loading="lazy"
                  style={{ objectPosition: "center 60%" }}
                />
              </div>
              <figcaption className="cap">The river.</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/hudson-falls.jpg"
                  alt="A creek pouring over dark rocks beside an old brick mill, trees on both banks"
                  loading="lazy"
                />
              </div>
              <figcaption className="cap">The current, close to home.</figcaption>
            </figure>
          </div>

          <figure className="rv" style={{ maxWidth: 720, margin: "clamp(40px,6vh,64px) auto 0" }}>
            <div className="fig" style={{ aspectRatio: "3/2" }}>
              <img
                src="/images/hudson-garden-path.jpg"
                alt="The stone garden path beside the house, a teak bench and a black cat sitting in the grass"
                loading="lazy"
                style={{ objectPosition: "center 55%" }}
              />
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              The garden path.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ ROATAN ============ */}
      <section id="roatan">
        <div className="wrap">
          <div className="duo wide-l mid">
            <figure className="fig rv">
              <img
                src="/images/roatan-water.jpg"
                alt="A scuba diver hovering over the coral wall on the Roatan reef, deep blue water above"
                loading="lazy"
                style={{ objectPosition: "center 45%" }}
              />
            </figure>
            <div className="rv">
              <p className="eyebrow">Roatán &nbsp;·&nbsp; Spring</p>
              <h2 style={{ marginTop: 22 }}>
                Let the water <i>do the work</i>.
              </h2>
              <p style={{ marginTop: 32 }} className="dim">
                Afternoons here are breathwork, yoga, massage, diving and snorkeling over the second
                largest reef in the world. Long stretches of time in warm water, which has a way of
                teaching people to stop controlling things.
              </p>
              <p className="dim">
                You do not come here to be quiet by yourself. You come to do deep work alongside a
                few other powerful people who are also ready to transform. That is rarer than the
                island, and it is the real reason to come.
              </p>
            </div>
          </div>

          <figure
            className="rv"
            style={{ maxWidth: 560, margin: "clamp(40px,6vh,70px) auto 0" }}
          >
            <div className="fig" style={{ aspectRatio: "3/4" }}>
              <img
                src="/images/roatan-reef2.jpg"
                alt="Aerial view of Roatan from the plane, the reef and turquoise shallows tracing the green island coastline"
                loading="lazy"
              />
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              The reef from the plane. Second largest in the world.
            </figcaption>
          </figure>

          <div className="pair rv">
            <figure style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/roatan-cay-boats.jpg"
                  alt="Fishing boats pulled up to a white sand cay, palm thatch huts under coconut palms"
                  loading="lazy"
                  style={{ objectPosition: "center 55%" }}
                />
              </div>
            </figure>
            <figure style={{ margin: 0 }}>
              <div className="fig" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/images/roatan-beach2.jpg"
                  alt="The beach out front on Roatan: a wooden dock, a leaning palm, loungers on the sand, and calm water"
                  loading="lazy"
                  style={{ objectPosition: "center 55%" }}
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ GYPSY'S JEWEL (the Roatán house) ============ */}
      <section className="band" id="gypsys-jewel" style={{ paddingBottom: "clamp(24px,4vh,48px)" }}>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The house</p>
            </div>
            <div className="rv">
              <h2>
                The house is Gypsy&apos;s Jewel. So is the dive site. My mother named it{" "}
                <i>herself</i>.
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

          <div className="rv" style={{ maxWidth: 760, margin: "clamp(40px,6vh,64px) auto 0" }}>
            <div className="pair" style={{ marginTop: 0 }}>
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/gypsys-jewel-dive.jpg"
                    alt="Tracey at the surface in scuba gear, smiling in her mask, one arm over the Gypsy's Jewel mooring buoy"
                    loading="lazy"
                    style={{ objectPosition: "center 55%" }}
                  />
                </div>
              </figure>
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/gypsys-jewel-plaque.jpg"
                    alt="The Roatan Marine Park carving of the island in relief, marked Gypsy's Jewel with its coordinates"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              Gypsy&apos;s Jewel, the dive site she named, on her water, and the carving with its
              coordinates.
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
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/roatan-living-room.jpg"
                    alt="The living room, wicker chairs with navy cushions around a low table, screened porch and palms beyond"
                    loading="lazy"
                  />
                </div>
              </figure>
              <figure style={{ margin: 0 }}>
                <div className="fig" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="/images/roatan-dining-lamps.jpg"
                    alt="The long dining table in the house, blue mosaic lamps hanging in the corner, jungle through the windows"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
            <figcaption className="cap" style={{ textAlign: "center" }}>
              Inside. One long table, and room for a few.
            </figcaption>
          </div>
        </div>
      </section>

      {/* ============ WHAT THE WATER TAUGHT ME ============ */}
      <section>
        <div className="wrap duo wide-l mid">
          <figure className="fig rv">
            <img
              src="/images/dive-lotus.jpg"
              alt="Tracey hovering cross-legged and weightless in deep blue water, a coral tower rising below her"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">What the water taught me</p>
            <h2 style={{ marginTop: 22 }}>
              I get out of my head and into my soul <i>down there</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              The ocean taught me to let go of control. To let the current carry me. To be a kid
              again, full of wonder and play, at an age when most people have quietly agreed to
              stop.
            </p>
            <p className="dim">
              It also taught me the thing I use most in the actual work. I am a rescue diver and a
              deep sea wreck diver, trained to go down to the wrecks where the light does not reach.
              When someone else is in trouble, the job is not to fix it fast. It is to stay calm, and
              stay with them, and hold space at the bottom while they find their way back up.
            </p>
            <p className="dim">
              My best friend calls me a pearl diver into other people. A <i>deep dive master</i>,
              above the surface and below it. That is the whole job. I hold the container, and I
              take people to the depths.
            </p>
          </div>
        </div>
      </section>

      <div className="pull rv">
        <div className="wrap">
          <p>
            I hold space for my clients at the bottom of the ocean of emotion, and help them safely
            back to the surface.
          </p>
          <p className="attrib">What diving taught me about sitting with people</p>
        </div>
      </div>

      {/* ============ THE PEARL DIVE ============ */}
      <section className="band" id="pearldive">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow rv">Take something with you</p>
          <h2 className="rv" style={{ marginTop: 18, maxWidth: "26ch", marginInline: "auto" }}>
            The Pearl Dive. A journal, a pen, and <i>the questions that matter</i>.
          </h2>
          <p className="dim rv" style={{ marginTop: 24, maxWidth: "52ch", marginInline: "auto" }}>
            You do not have to work with me to use this. It is a journal I made for the leaders I
            coach, a set of deep questions you sit with on your own. It is free.
          </p>

          <figure
            className="cover rv"
            style={{ maxWidth: 340, margin: "clamp(40px,6vh,64px) auto 0" }}
          >
            <img
              src="/images/pearldive-cover.jpg"
              alt="Cover of The Pearl Dive, a complimentary journal by Tracey Abbott"
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
                We start with <i>a conversation</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                There is no booking button, and no set calendar. Tell me what you are in the middle
                of, and which season is calling. If one of these is right for you, we will find the
                time together. If it is not, I will say so, and point you somewhere better.
              </p>
            </div>
          </div>

          <InquiryForm
            formId="YOUR_IMMERSION_FORM_ID"
            subject="Immersion inquiry from"
            selectName="type"
            selectLabel="What you have in mind"
            selectOptions={[
              "Hudson Valley, this fall",
              "Roatán, this spring",
              "Something for my leadership team",
              "Not sure yet",
            ]}
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
            <a href="/private" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Client materials
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
