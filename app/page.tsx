import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import InquiryForm from "./components/InquiryForm";
import SiteNav from "./components/SiteNav";
import IdentityWheel from "./components/IdentityWheel";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "Love Can Do That",
  description:
    "Licensed psilocybin facilitation. Private sessions with preparation, supervised administration, and integration.",
  openGraph: {
    title: "Love Can Do That",
    description:
      "Licensed psilocybin facilitation. Doorways to possibility you could not see before.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteNav current="hudson" />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="wrap">
          <img
            src="/images/brand/logo-horizontal-gold.svg"
            alt="Love can do that. Risk the possible."
            className="rv"
            style={{ width: "min(440px, 84vw)", height: "auto", objectFit: "contain", marginBottom: 44 }}
          />
          <p className="eyebrow rv">By invitation</p>
          <h1 className="rv">
            Love can do what <i>fear never will</i>.
          </h1>
          <p className="lede rv">
            It heals. It reconnects. It forgives. It transforms. It reminds us who we were before
            the world told us who to become.
          </p>
          <p className="dim rv" style={{ marginTop: 26, maxWidth: "58ch" }}>
            Licensed psilocybin facilitation. Private and prepared. The container is the work.
            Integration is the work.
          </p>
          <div className="facts rv">
            <span>State licensed</span>
            <span>InnerTrek trained</span>
            <span>Adults 21 and over</span>
            <span>No diagnosis required</span>
            <span>Private &amp; small group sessions</span>
          </div>
          <div
            className="rv"
            style={{
              marginTop: 38,
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 30px",
              fontSize: ".72rem",
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            <a
              href="/roatan"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Retreats
            </a>
            <a
              href="/roatan#pearldive"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              The Pearl Dive
            </a>
            <a
              href="/roatan#gypsys-jewel"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Gypsy&apos;s Jewel
            </a>
            <a
              href="/reading"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Research
            </a>
          </div>
        </div>
        <div className="wrap">
          <figure className="herofig rv">
            <img
              src="/images/wonderland.jpg"
              alt="Tracey Abbott seated on a brick path inside a glasshouse, brown tulle skirt spread around her"
              loading="eager"
            />
          </figure>
        </div>
      </header>

      {/* ============ WHO'S ASKING ============ */}
      <section style={{ paddingTop: "clamp(120px,17vh,200px)" }}>
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/portraits/tracey-stevie-tee.jpg"
              alt="Tracey Abbott at home in a Stevie Nicks t-shirt and tulle skirt"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Who&apos;s asking</p>
            <h2 style={{ marginTop: 22 }}>
              Twenty eight years across five continents taught me one thing about hesitation. It is
              always the most expensive decision in the room.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              I have built my life and career on curiosity. Alice in Wonderland was my favorite
              childhood book, and I learned early to follow the white rabbit through doors other
              people could not see. Alabama to a decade as an expat. Deep water to the depths of
              the human spirit.
            </p>
            <p className="dim">
              Curiosity carried me through the highest stakes of private equity, and into the roles
              that matter more. Caregiver. Daughter. Sister. Friend. Leadership is not about
              scaling results. It is about aligning power with purpose.
            </p>
            <p className="dim">
              The white rabbit came from a phone call. On the edge of leaving private equity, I
              called an investment banker turned conscious capitalist. I expected a framework.
              Instead he said, follow the white rabbit. It will lead you to doorways you cannot see
              yet. Every decision that has mattered since has come down to the same choice.
              Probability, which you can calculate. Or possibility, which you cannot. I choose
              possibility. <i>Risk the possible</i> is the method.
            </p>
            <p className="dim">
              I did not come to this work because talk therapy failed me. I came because the
              leaders I have advised for thirty years need a room like this the most, and ask for
              it the least. This is the <i>deepest door</i> I have walked through.
            </p>
          </div>
        </div>
      </section>

      {/* ============ IDENTITY WHEEL ============ */}
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Identity wheel</p>
            </div>
            <div className="rv">
              <h2>
                Who am I? It is <i>the hardest question</i> you will ever wrestle with.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Nine answers keep showing up for work. Touch a word and it will tell you its story.
              </p>
              <p className="dim">
                They are why I can sit with a CEO at nine and someone taking the mask off at two,
                and never become a different person in between.
              </p>
            </div>
          </div>

          <IdentityWheel />
        </div>
      </section>

      {/* ============ THE WORK ============ */}
      <section>
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/portraits/tracey-heartwork.jpg"
              alt="Tracey Abbott in a black heartwork t-shirt"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">The work</p>
            <h2 style={{ marginTop: 22 }}>
              This is deep internal work. Exploring the subconscious, and what happens when we
              remove <i>the masks we wear</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              For thirty years the answer was supposed to come from analysis. What actually moved
              people was the thing they already knew and had never said out loud.
            </p>
            <p className="dim">
              People are not broken. They are carrying something that has never had a safe place to
              be set down. The healing starts the moment the masks come off. I have lived it.
            </p>
            <p className="dim">
              Psilocybin services are legal here under the country&apos;s first state regulated
              model. A supervised session with a licensed facilitator, at a licensed service
              center. Real preparation before. Real integration after.
            </p>
            <p className="dim">
              I do not fix anyone. I hold the container, and I am the catalyst. The medicine is the
              short part. The healing is yours.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WORDS ============ */}
      <div className="words band rv">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: 34 }}>What opens</p>
          <ul>
            <li>possibility</li>
            <li>creativity</li>
            <li>wonder</li>
            <li>innovation</li>
            <li>expansion</li>
          </ul>
        </div>
      </div>

      {/* ============ BEHIND THE VEIL ============ */}
      <section>
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/portraits/tracey-greenhouse-walk.jpg"
              alt="Tracey Abbott in a glasshouse, brown tulle sweeping up past her face"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Behind the veil</p>
            <h2 style={{ marginTop: 22 }}>
              Every tradition that has taken this seriously describes the same thing. A veil, and
              the moment it <i>thins</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Here is the unromantic version. For a few hours, the part of you that manages and
              edits and defends gets quiet. What is behind it was always there.
            </p>
            <p className="dim">
              There is a version of you that is less defended and more alive. Most people met her
              once and have been looking for the door ever since.
            </p>
            <p className="dim">
              Jung called it the collective unconscious. I did not study psychology to believe it.
              I studied people, in boardrooms and dive tanks and that room, and watched them meet
              something older than their own biography.
            </p>
            <p className="dim">
              Some find grief they filed away years ago. Some find a decision they made at
              nineteen. Some find they are not angry, they are tired. Almost nobody finds something
              they did not already own.
            </p>
            <p className="dim">The veil is not hiding a different you. It is hiding this one.</p>
            <p style={{ marginTop: 26 }}>
              <a
                href="/roatan"
                style={{
                  fontSize: ".74rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--clay)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--tan)",
                  paddingBottom: 4,
                }}
              >
                Where the water taught me this
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============ THE ARC ============ */}
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The arc</p>
            </div>
            <div className="rv">
              <h2>
                Three meetings, and only one of them <i>involves medicine</i>.
              </h2>
            </div>
          </div>
          <div className="doors">
            <div className="door rv">
              <span className="n">i</span>
              <h3>Preparation</h3>
              <p>
                We meet before there is any medicine in the room. Health screening, medications,
                history. Then the first real work: setting your intention for the session. We build
                a safety and support plan and a plan for getting you home. Either of us can decide
                not to go forward, and that decision costs you nothing.
              </p>
            </div>
            <div className="door rv">
              <span className="n">ii</span>
              <h3>The session</h3>
              <p>
                Administration happens at a licensed service center. Several hours. Eye shades,
                music, a blanket, a facilitator who stays. My job in that room is intuition,
                sensing how to best hold the space for you. Mostly I am quiet. You do not drive
                yourself anywhere afterward.
              </p>
            </div>
            <div className="door rv">
              <span className="n">iii</span>
              <h3>Integration</h3>
              <p>
                I follow up within seventy two hours, and we meet again. The session is not the
                work. The work is what you do with it on an ordinary Tuesday, in your kitchen, in
                your relationships, in your company. That is where it lands or evaporates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR GROUPS ============ */}
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">For groups</p>
            </div>
            <div className="rv">
              <h2>Some of the deepest work happens when no one is performing for the room.</h2>
            </div>
          </div>
          <div className="rv" style={{ marginTop: 36, maxWidth: "62ch" }}>
            <p className="dim">
              Everything above is built for one person. I also hold this for small groups who have
              already earned the trust it asks for. Founders a decade in. A leadership team that
              survived a brutal year and never once talked about what it cost them.
            </p>
            <p className="dim">
              Same discipline, built for a room instead of a chair. A private location, shared only
              once everyone is confirmed. Integration continues after everyone goes home.
            </p>
            <p className="dim">
              Up to eight people. Never more. Past eight, a room becomes an audience, and this work
              does not survive an audience.
            </p>
            <p className="dim">
              Start tonight if you want.{" "}
              <a
                href="/roatan#pearldive"
                style={{
                  color: "var(--clay)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--tan)",
                }}
              >
                The Pearl Dive
              </a>{" "}
              is the free thirty minute assessment I built for the leaders I coach. It asks nothing
              of you, not even an email.
            </p>
            <p className="dim">
              And for groups who want to go further, I lead small retreats on{" "}
              <a
                href="/roatan"
                style={{
                  color: "var(--clay)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--tan)",
                }}
              >
                Roatán
              </a>

              . The medicine stays where it is licensed. The integration does not.
            </p>
          </div>
          <div
            className="rv"
            style={{
              marginTop: "clamp(64px,9vh,100px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(16px,3vw,34px)",
            }}
          >
            <figure style={{ margin: 0 }}>
              <div style={{ borderRadius: 30, overflow: "hidden", aspectRatio: "1/1" }}>
                <img
                  src="/images/group-deck.jpg"
                  alt="A circle of sheepskin floor seats on a wooden deck under a big mountain sky, a vase of roses in the center"
                  loading="lazy"
                />
              </div>
              <figcaption
                style={{
                  marginTop: 12,
                  fontSize: ".74rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                What group work looks like
              </figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <div style={{ borderRadius: 30, overflow: "hidden", aspectRatio: "1/1" }}>
                <img
                  src="/images/group-cabin.jpg"
                  alt="A log cabin room prepared for a group circle, mats and sheepskins arranged around a stone fireplace and flowers"
                  loading="lazy"
                />
              </div>
              <figcaption
                style={{
                  marginTop: 12,
                  fontSize: ".74rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                The kind of room we build
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ PULL ============ */}
      <div className="pull rv">
        <div className="wrap">
          <p>Hurt people hurt people. Healed people heal people.</p>
          <p className="attrib">The whole reason I trained</p>
        </div>
      </div>

      {/* ============ FIT ============ */}
      <section>
        <div className="wrap">
          <div className="duo wide-r mid">
            <div className="rv">
              <p className="eyebrow">Fit</p>
              <h2 style={{ marginTop: 22 }}>
                This work is not for everyone, and I would rather say so <i>on the website</i> than
                in the room.
              </h2>
            </div>
            <figure className="fig rv">
              <img
                src="/images/portraits/tracey-velvet.jpg"
                alt="Tracey Abbott seated on a terra cotta planter among cacti, wearing a velvet blazer"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="cols">
            <div className="rv">
              <h3 style={{ fontSize: "1.2rem" }}>Who tends to find me</h3>
              <ul className="plain">
                <li>
                  People in the middle of something. A transition they chose, or one that chose
                  them.
                </li>
                <li>Caregivers who have been competent about grief for a long time.</li>
                <li>
                  Founders and operators who are very good at holding it together and are tired.
                </li>
                <li>
                  People who have done years of talk therapy and hit a wall they can describe
                  perfectly.
                </li>
                <li>People who are not in crisis and are not fine either.</li>
              </ul>
            </div>
            <div className="rv">
              <h3 style={{ fontSize: "1.2rem" }}>Who I turn away</h3>
              <ul className="plain">
                <li>
                  Anyone with a personal or family history of psychosis, schizophrenia, or bipolar
                  I.
                </li>
                <li>
                  Certain cardiac conditions, and certain medications including lithium and some
                  antidepressants.
                </li>
                <li>Pregnancy or nursing. Anyone under twenty one.</li>
                <li>Anyone in acute crisis who needs clinical care first, not a journey.</li>
                <li>Anyone looking for a guarantee. I will tell you no, and I will mean it kindly.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EVIDENCE ============ */}
      <section className="band">
        <div className="wrap">
          <div className="duo wide-l mid">
            <figure className="fig rv">
              <img
                src="/images/portraits/tracey-stripes.jpg"
                alt="Tracey Abbott crouched among desert plants in a striped sweater"
                loading="lazy"
              />
            </figure>
            <div className="rv">
              <p className="eyebrow">The evidence</p>
              <h2 style={{ marginTop: 22 }}>
                I do not promise outcomes. Here is what is <i>actually known</i>, including the
                parts that complicate it.
              </h2>
              <p style={{ marginTop: 32 }} className="dim">
                This is the first place on earth where the work has run at scale in public view,
                which means there are finally real numbers instead of anecdotes. I read all of it. I
                would rather you did too.
              </p>
            </div>
          </div>

          <p className="rv" style={{ marginTop: 30 }}>
            <a
              href="/reading"
              style={{
                fontSize: ".74rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--clay)",
                textDecoration: "none",
                borderBottom: "1px solid var(--tan)",
                paddingBottom: 4,
              }}
            >
              The full reading list
            </a>
          </p>

          <ul className="cites">
            <li className="rv">
              <a
                href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2026.1777387/full"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  Inaugural year of regulated psilocybin services in Oregon: safety, motivations,
                  and utilization
                </span>
                <span className="s">Frontiers in Psychiatry &nbsp;·&nbsp; May 2026</span>
                <span className="f">
                  5,935 clients across 5,375 sessions in 2025. Serious adverse events were rare:
                  2.42 behavioral and 2.79 medical per 1,000 sessions, with seven hospitalizations
                  in the entire state across the year.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://www.medrxiv.org/content/10.64898/2026.02.18.26346580v1"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  Psilocybin services and mental health outcomes within Oregon&apos;s
                  state-regulated model
                </span>
                <span className="s">
                  Gow, Carhart-Harris, Davis et al. &nbsp;·&nbsp; February 2026, preprint
                </span>
                <span className="f">
                  The first real-world outcome study inside this exact model. 88 participants showed
                  clinically meaningful improvement in depression, anxiety, and well-being at thirty
                  days, including people who stayed on their psychiatric medication.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://www.psychiatrictimes.com/view/phase-3-program-investigating-comp360-psilocybin-for-treatment-resistant-depression-breaking-poster-data-from-the-2026-ascp-annual-meeting"
                target="_blank"
                rel="noopener"
              >
                <span className="t">COMP360 psilocybin in treatment resistant depression, phase 3</span>
                <span className="s">Compass Pathways &nbsp;·&nbsp; six month data, July 2026</span>
                <span className="f">
                  581 participants. Thirty nine percent of the 25 mg arm reached a clinically
                  meaningful drop in depression scores by week six, and separation held through week
                  twenty six. This is a controlled trial, not a service center, and the difference
                  matters.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://jamanetwork.com/journals/jama/fullarticle/2808950"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  Single-dose psilocybin for major depressive disorder: a randomized clinical trial
                </span>
                <span className="s">JAMA &nbsp;·&nbsp; 2023</span>
                <span className="f">
                  One of the trials that moved this from fringe to serious. Useful if you want to
                  see the method rather than the headline.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://oregoncapitalchronicle.com/2026/06/30/growing-scope-of-oregon-psilocybin-program-raises-safety-concerns-study-says/"
                target="_blank"
                rel="noopener"
              >
                <span className="t">Growing scope of Oregon&apos;s program raises safety concerns</span>
                <span className="s">
                  Johns Hopkins, International Journal of Drug Policy &nbsp;·&nbsp; June 2026
                </span>
                <span className="f">
                  The uncomfortable one. Most people using Oregon&apos;s program are seeking
                  wellness rather than treatment, and they skew high income and out of state.
                  Researchers flagged real concern about people bringing serious psychiatric
                  conditions into a supported adult use model that was not built for them. This is
                  exactly why I screen the way I do.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ============ SAY IT STRAIGHT ============ */}
      <section>
        <div className="wrap duo wide-r">
          <div className="rv">
            <p className="eyebrow">Say it straight</p>
            <h2 style={{ marginTop: 22 }}>
              What I am <i>not</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              I am not a therapist and this is not therapy. I am not a physician and this is not
              medical treatment. I do not diagnose, I do not treat, and I do not promise outcomes.
              Anyone who promises you an outcome is selling something.
            </p>
            <p className="dim">
              Here is what I am. I trained at InnerTrek, the program founded by Tom Eckert, who
              architected Measure 109 and the first state regulated model of psychedelic care in the
              country. I am licensed by the Oregon Health Authority. I did the practicum hours. I
              sat in my own hard chair before I ever asked anyone to sit in theirs.
            </p>
            <p className="dim">
              What you will get is careful screening, preparation that takes your questions
              seriously, a facilitator who stays, and confidentiality that is not negotiable.
            </p>
            <p className="dim">And enough respect for you to say no when no is the right answer.</p>
          </div>
          <figure className="fig rv">
            <img src="/images/tank.jpg" alt="" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ============ INQUIRY ============ */}
      <section id="inquire">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Begin</p>
            </div>
            <div className="rv">
              <h2>
                If you have read this twice, <i>write to me</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                This goes nowhere but to me. I answer everything personally, usually within a few
                days. Nothing is scheduled from a form. We talk first.
              </p>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      {/* ============ CLOSING IMAGE ============ */}
      <div className="wrap" style={{ marginTop: "clamp(20px,4vh,50px)" }}>
        <figure className="herofig rv" style={{ marginTop: 0 }}>
          <img
            src="/images/door.jpg"
            alt="Tracey Abbott standing in front of a dark barn door with her arms open"
            loading="lazy"
          />
        </figure>
      </div>

      {/* ============ CLOSE ============ */}
      <div className="close">
        <div className="wrap">
          <p className="mark rv">Love can do that.</p>
          <p className="dim rv" style={{ margin: "26px auto 0", maxWidth: "54ch" }}>
            Love is not soft. It is the force that lets us tell the truth, forgive, begin again,
            and become who we were meant to be.
          </p>
          <p className="eyebrow rv" style={{ marginTop: 26 }}>
            Risk the possible
          </p>
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
            <a href="/roatan" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Retreats
            </a>
            <a href="/reading" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Research
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
            Psilocybin services are legal for adults twenty one and over in Oregon under Oregon
            Psilocybin Services, established by Measure 109 and administered by the Oregon Health
            Authority. Administration takes place only at a licensed service center. Psilocybin
            remains a Schedule I substance under federal law. Nothing on this page is medical
            advice, a diagnosis, a treatment claim, or a substitute for care from a licensed medical
            or mental health professional. No psilocybin product is sold or provided through this
            website. If you are in crisis, call or text 988.
          </p>
        </div>
      </footer>

      <Reveal />
    </>
  );
}
