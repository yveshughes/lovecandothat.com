import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import InquiryForm from "./components/InquiryForm";
import SiteNav from "./components/SiteNav";
import IdentityWheel from "./components/IdentityWheel";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "Love Can Do That",
  description:
    "Executive coaching and three day immersions for leaders in the middle of something. This is about transformation, in how you lead and how you live.",
  openGraph: {
    title: "Love Can Do That",
    description:
      "Coaching and three day immersions. This is about transformation, in how you lead and how you live.",
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
            Private coaching, and three day immersions for small groups. This is about
            transformation, in how you lead and how you live.
          </p>
          <div className="facts rv">
            <span>One to one</span>
            <span>Small groups</span>
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
      </header>

      {/* ============ FOLLOW THE WHITE RABBIT ============ */}
      <section style={{ paddingTop: "clamp(90px,13vh,150px)" }}>
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/wonderland.jpg"
              alt="Tracey Abbott seated in a glasshouse among cacti, brown tulle skirt spread around her, smiling"
              loading="lazy"
              style={{ objectPosition: "center 30%" }}
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Follow the white rabbit</p>
            <h2 style={{ marginTop: 22 }}>
              I am still the girl who <i>lived in Wonderland</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Alice in Wonderland&apos;s magic is how I live my life. Full of curiosity, and wonder
              at what is possible.
            </p>
            <p className="dim">
              Following the white rabbit is not a method. It is a way of seeing the world, with
              curiosity and wonder, and trusting where that leads.
            </p>
            <p className="dim">
              Most people brace for something solemn, and meet, instead, their own wonder. Play.
              Creativity. A flame they were sure had gone out, catching again.
            </p>
            <p className="dim">
              This work is about getting back the part of you that was alive and full of
              possibility, the part that was here before the world told you who to become. That is
              where everything else starts.
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
              alt="Tracey Abbott in a glasshouse, brown tulle sweeping out beside her like a veil"
              loading="lazy"
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Behind the veil</p>
            <h2 style={{ marginTop: 22 }}>
              The closer you get to nature, the more the veil <i>thins</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Out here, away from the noise and the managing and the performing, something quiets.
              The part of you that edits and defends gets still, and what is behind it was always
              there.
            </p>
            <p className="dim">
              That is where you start to hear it again. Your own intuition. Your own voice. Not the
              one the world handed you, the one that was yours before any of it.
            </p>
            <p className="dim">
              Analysis will only ever take you so far. The rest you have to feel. The veil is not
              hiding a different you. It is hiding this one.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHO'S ASKING ============ */}
      <section>
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
              I know that place because I have stood in it. In the summer of 2024 I was in the
              biggest, hardest job of my career, a senior seat in private equity, with expectations
              coming from every direction. At the same time my partner went into heart failure and
              my mother was sick. I could not be at work the way I needed to be, and everything was
              coming down at once. That summer I sat down and wrote the plan for my life. It is the
              plan I am living now.
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
          <div className="rv" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <p className="eyebrow">Identity wheel</p>
            <h2 style={{ marginTop: 18 }}>
              Who am I? It is <i>the hardest question</i> you will ever wrestle with.
            </h2>
            <p style={{ marginTop: 24, marginInline: "auto" }} className="dim">
              These are the nine that keep showing up for work. They are why I can sit with a CEO
              at nine and someone taking the mask off at two, and never become a different person
              in between.
            </p>
            <p className="dim" style={{ marginInline: "auto" }}>
              Touch a word and it will tell you its story. Then the real question is not mine. It
              is yours. <i>What are yours?</i>
            </p>
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
              I do not fix anyone. I hold the container, and I am the facilitator. The
              transformation is yours.
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
                This is where it becomes real. I give you the tools to take what opens up and put it
                to work in how you lead. This is the internal work that unlocks the next level of
                leadership, by realigning you with your values and your purpose.
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
        <div className="wrap duo wide-r">
          <div className="rv">
            <p className="eyebrow">For groups</p>
            <h2 style={{ marginTop: 22 }}>
              Some of the deepest work happens <i>alongside other people</i> doing the same.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Everything above is built for one person. I also hold this for small groups who have
              already earned the trust it asks for. Founders a decade in. A leadership team that
              survived a brutal year and never once talked about what it cost them.
            </p>
            <p className="dim">
              Same discipline, built for a room instead of a chair. A private location, shared only
              once everyone is confirmed. Small groups, so everyone gets real time, and everyone
              leaves knowing something real about the others.
            </p>
            <p className="dim">
              And for anyone who wants to go further, there is{" "}
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
          <figure className="fig rv">
            <img
              src="/images/group-deck.jpg"
              alt="A circle of sheepskin floor seats on a wooden deck under a big mountain sky, a vase of roses in the center"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="wrap">
          <figure className="rv" style={{ maxWidth: 720, margin: "clamp(40px,6vh,70px) auto 0" }}>
            <div style={{ borderRadius: 30, overflow: "hidden", aspectRatio: "3/2" }}>
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
                textAlign: "center",
              }}
            >
              The kind of room we build
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ THE PEARL DIVE ============ */}
      <section className="band">
        <div className="wrap duo wide-l">
          <figure className="fig rv">
            <img
              src="/images/pearldive-cover.jpg"
              alt="Cover of The Pearl Dive, a complimentary journal by Tracey Abbott"
              loading="lazy"
              style={{ objectPosition: "center top" }}
            />
          </figure>
          <div className="rv">
            <p className="eyebrow">Start tonight</p>
            <h2 style={{ marginTop: 22 }}>
              The Pearl Dive. A journal, a pen, and <i>the questions that matter</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              You do not have to work with me to use this. It is a journal I made for the leaders I
              coach, a set of deep questions you sit with on your own. It is free, and it asks
              nothing of you, not even an email.
            </p>
            <p className="dim">
              Every pearl begins with an irritation. Every transformation begins with the courage to
              dive. Most people try to become themselves by adding, more skills, more credentials,
              more strategy. This does the opposite. What is left at the end is the thing you have
              been carrying the whole time.
            </p>
            <p style={{ marginTop: 8 }}>
              <a className="cta" href="/The-Pearl-Dive.pdf" download>
                Download the Pearl Dive
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============ PULL ============ */}
      <div className="pull rv">
        <div className="wrap">
          <p>
            When people in power reconnect to their values and their own voice, we have the power to
            change the world.
          </p>
          <p className="attrib">Why I do this</p>
        </div>
      </div>

      {/* ============ WHO THIS IS FOR ============ */}
      <section>
        <div className="wrap">
          <div className="duo wide-r mid">
            <div className="rv">
              <p className="eyebrow">Who this is for</p>
              <h2 style={{ marginTop: 22 }}>
                This is for people who want a guide in how to <i>transform their lives</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Not a strategy, and not a pep talk. A partner for the work of becoming who you
                actually are, and leading from there.
              </p>
            </div>
            <figure className="fig rv">
              <img
                src="/images/portraits/tracey-velvet.jpg"
                alt="Tracey Abbott seated on a terra cotta planter among cacti, wearing a velvet blazer"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="rv" style={{ marginTop: "clamp(40px,6vh,64px)", maxWidth: "62ch" }}>
            <h3 style={{ fontSize: "1.2rem" }}>Who tends to find me</h3>
            <ul className="plain">
              <li>People in the middle of feeling stuck, and hesitating.</li>
              <li>People who are lonely in the roles they play.</li>
              <li>
                Founders and operators who are very good at holding it together, and are tired.
              </li>
              <li>
                High performers who are successful on paper, and cannot yet see what is next.
              </li>
              <li>
                People who have done years of talk therapy and hit a wall they can describe
                perfectly.
              </li>
              <li>People who are not in crisis, and are not fine either.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP OUTCOMES ============ */}
      <section className="band">
        <div className="wrap duo wide-r">
          <div className="rv">
            <p className="eyebrow">Why me</p>
            <h2 style={{ marginTop: 22 }}>
              The range is <i>the credential</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Twenty five years operating across five continents. An MBA in French and Finance. A
              P&amp;L, a franchise, eight years as a private equity Operating Partner, five board
              seats. I coach from lived experience, my failures as much as the things that worked.
            </p>
            <p className="dim">
              And the training under the instinct. An executive coaching certification from
              Georgetown, credentialed through the International Coaching Federation, and the program
              at InnerTrek.
            </p>
            <p className="dim">
              What you get is a partner who stays, questions that go where analysis cannot, and
              confidentiality that is not negotiable. And enough respect for you to say no when no is
              the right answer.
            </p>
            <p className="dim">I do not promise outcomes. Anyone who does is selling something.</p>
          </div>
          <figure className="fig rv">
            <img
              src="/images/portraits/tracey-stripes.jpg"
              alt="Tracey Abbott crouched among desert plants in a striped sweater"
              loading="lazy"
            />
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
            src="/images/portraits/tracey-poncho.jpg"
            alt="Tracey Abbott at a dark barn door, arms wide open in a cream fringe poncho, smiling"
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
            Coaching is not therapy, medical care, or mental health treatment, and nothing on this
            page is medical advice, a diagnosis, or a treatment claim. Coaching is not a substitute
            for care from a licensed medical or mental health professional. If you are in crisis,
            call or text 988.
          </p>
        </div>
      </footer>

      <Reveal />
    </>
  );
}
