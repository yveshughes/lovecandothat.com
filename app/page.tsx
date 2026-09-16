import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import InquiryForm from "./components/InquiryForm";
import SiteNav from "./components/SiteNav";
import IdentityWheel from "./components/IdentityWheel";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "Love Can Do That",
  description:
    "Executive coaching, development, and three day immersions for leaders in the middle of something.",
  openGraph: {
    title: "Love Can Do That",
    description:
      "Coaching, development, and three day immersions. Doorways to possibility you could not see before.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteNav current="home" />

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
            Private coaching and three day immersions for leaders in the middle of something. The
            container is the safety. Integration is the work.
          </p>
          <div className="facts rv">
            <span>One to one</span>
            <span>Immersions of four, never more</span>
            <span>Roatán and the Hudson Valley</span>
            <span>By conversation only</span>
          </div>
          <div
            className="rv"
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px 26px",
            }}
          >
            <a className="cta" href="#inquire">
              Start with a conversation
            </a>
            <span style={{ fontSize: ".82rem", color: "var(--muted)" }}>
              No commitment. We talk first.
            </span>
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
        <div className="wrap duo wide-r">
          <div className="rv">
            <p className="eyebrow">Who&apos;s asking</p>
            <h2 style={{ marginTop: 22 }}>
              You are successful on paper, and some part of you knows that is <i>not the whole
              story</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Maybe you are in the middle of something, a change you chose or one that chose you.
              Maybe you have held it together for everyone else so long that you are tired in a way
              sleep does not touch. Maybe you have done years of talk therapy and hit a wall you can
              describe perfectly. You are not in crisis. You are not fine either.
            </p>
            <p className="dim">
              I know that place because I have stood in it. In the summer of 2024 my partner went
              into heart failure and my mother was sick at the same time. I could not be at work the
              way I needed to be, and everything was coming down at once. That summer I sat down and
              wrote the plan for my life. It is the plan I am living now.
            </p>
            <p className="dim">
              I spent nearly thirty years advising leaders before I ever did this work. That is
              not why you are here. It is why I can sit across from you and already know what this is
              costing you.
            </p>
            <p className="dim">
              And I do this for one reason. When people in real power wake up to how connected
              everything is, <i>the world changes</i>. That is the whole mission.
            </p>
          </div>
          <figure className="fig rv">
            <img
              src="/images/portraits/tracey-stevie-tee.jpg"
              alt="Tracey Abbott at home in a Stevie Nicks t-shirt and tulle skirt"
              loading="lazy"
            />
          </figure>
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
                These are the nine that keep showing up for work. They are why I can sit with a CEO
                at nine and someone taking the mask off at two, and never become a different person
                in between.
              </p>
              <p className="dim">
                Touch a word and it will tell you its story. Then the real question is not mine. It
                is yours. <i>What are yours?</i>
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
              For thirty years I watched the answer come from analysis. What actually moved people
              was the thing they already knew and had never said out loud. It will be the same for
              you.
            </p>
            <p className="dim">
              You are not broken. You are carrying something that has never had a safe place to be
              set down. The healing starts the moment the mask comes off. I have lived that too.
            </p>
            <p className="dim">
              I do not fix anyone. I hold the container, and I am the catalyst. The insight is the
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
            <li>curiosity</li>
            <li>possibility</li>
            <li>creativity</li>
            <li>wonder</li>
            <li>play</li>
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
              There is a version of you that is <i>less defended</i> and more alive. Most people
              met her once and have been looking for the door ever since.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              In the right room, the part of you that manages and edits and defends gets quiet.
              What is behind it was always there.
            </p>
            <p className="dim">
              Jung called it the collective unconscious. I did not study psychology to believe it.
              I studied people, in boardrooms and in that room, and watched them meet something
              older than their own biography.
            </p>
            <p className="dim">
              I studied Chinese medicine before I did any of this, and the oldest idea in it is the
              one I kept. Balance, and impermanence. Nothing in you is fixed. Yin turns into yang,
              the tide goes out and comes back, and the heaviest thing you carry is already moving
              whether you touch it or not. This work just lets you be there when it turns.
            </p>
            <p className="dim">
              Some find grief they filed away years ago. Some find a decision they made at
              nineteen. Some find they are not angry, they are tired. Almost nobody finds something
              they did not already own.
            </p>
            <p className="dim">
              And it is not all heavy. People brace for something solemn and meet, instead, their
              own curiosity. Wonder. A flame they were sure had gone out, catching again. I am still
              the girl who loved Alice in Wonderland, and the way in is not grief. It is the
              willingness to get curious and <i>follow the white rabbit</i> to see where it goes.
            </p>
            <p className="dim">The veil is not hiding a different you. It is hiding this one.</p>
            <p style={{ marginTop: 26 }}>
              <a
                href="/immersion"
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

      {/* ============ HOW IT RUNS ============ */}
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">How it runs</p>
            </div>
            <div className="rv">
              <h2>
                Nothing starts from a form. <i>We talk first</i>.
              </h2>
            </div>
          </div>
          <div className="doors">
            <div className="door rv">
              <span className="n">i</span>
              <h3>The conversation</h3>
              <p>
                It always starts the same way. No commitment, just the two of us deciding together
                whether this is right for you. Either of us can decide not to go forward, and that
                decision costs you nothing.
              </p>
            </div>
            <div className="door rv">
              <span className="n">ii</span>
              <h3>The work</h3>
              <p>
                Standing sessions, and real access between them. You text before a board meeting,
                I respond. You need to think out loud after a hard conversation with your CFO, I am
                there. Depth over breadth.
              </p>
            </div>
            <div className="door rv">
              <span className="n">iii</span>
              <h3>Integration</h3>
              <p>
                Insight is the cheap part. The work is what you do with it on an ordinary Tuesday,
                in your kitchen, in your relationships, in your company. That is where it lands or
                evaporates.
              </p>
            </div>
          </div>
          <div className="rv" style={{ marginTop: "clamp(48px,7vh,84px)", textAlign: "center" }}>
            <a className="cta" href="#inquire">
              Start with a conversation
            </a>
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
              Never more than four people. Past four, a room becomes an audience, and this work
              does not survive an audience.
            </p>
            <p className="dim">
              Start tonight if you want.{" "}
              <a
                href="/immersion#pearldive"
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
              And for teams who want to go further, there is{" "}
              <a
                href="/immersion"
                style={{
                  color: "var(--clay)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--tan)",
                }}
              >
                the three day immersion
              </a>
              , on Roatán or in my woods in the Hudson Valley.
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
          <p className="attrib">The whole reason I do this</p>
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
                  High performers who are stuck, successful on paper, and cannot yet see what is
                  next.
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
                <li>Anyone looking for a quick fix.</li>
                <li>Anyone in acute crisis who needs clinical care first, not coaching.</li>
                <li>Anyone where the power dynamic feels off in the first conversation.</li>
                <li>Anyone looking for a guarantee. I will tell you no, and I will mean it kindly.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SAY IT STRAIGHT ============ */}
      <section className="band">
        <div className="wrap duo wide-r">
          <div className="rv">
            <p className="eyebrow">Say it straight</p>
            <h2 style={{ marginTop: 22 }}>
              What I <i>do</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Twenty five years operating across five continents. A P&amp;L, a franchise, eight
              years as a private equity Operating Partner, five board seats. I coach from my lived
              experience. My failures as much as the things that worked.
            </p>
            <p className="dim">
              What you will get is a partner who stays, questions that go where analysis cannot,
              and confidentiality that is not negotiable. And enough respect for you to say no when
              no is the right answer.
            </p>
            <p className="dim">
              I am not a therapist and this is not therapy. I do not diagnose, I do not treat, and I
              do not promise outcomes. Anyone who promises you an outcome is selling something.
            </p>
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
                Start with a conversation. Not a booking, <i>just a conversation</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Tell me a little about what brings you here. I hold this confidentially, and I
                answer everything personally, usually within a few days. Nothing is scheduled from a form.
                We talk first, and only if it is right for you does anything happen after that.
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
            <span>Executive coaching and immersions</span>
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
            <a href="/immersion" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Immersion
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
            Coaching is not therapy, medical care, or mental health treatment, and nothing on this
            page is medical advice, a diagnosis, or a treatment claim. Coaching is not a substitute
            for care from a licensed medical or mental health professional. If you are in crisis,
            call or text 988.{" "}
            <a href="/private" style={{ color: "#8B7F75" }}>
              Client materials
            </a>
          </p>
        </div>
      </footer>

      <Reveal />
    </>
  );
}
