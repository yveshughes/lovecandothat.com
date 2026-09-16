import type { Metadata } from "next";
import { cookies } from "next/headers";
import Reveal from "../components/Reveal";
import { css } from "./styles";
import { COOKIE, isUnlocked } from "./gate";
import { unlock } from "./actions";

export const metadata: Metadata = {
  title: "Client Materials · Love Can Do That",
  description: "For people already in conversation with me.",
  robots: { index: false, follow: false, noarchive: true },
};

/* Everything about the licensed work lives on this page, behind the password.
   It is not linked from the navigation. See gate.ts for how the lock works. */

function Gate({ error }: { error: boolean }) {
  return (
    <div className="gate">
      <div className="box">
        <p className="eyebrow">Private</p>
        <h1>Client materials</h1>
        <p>This page is for people already in conversation with me. If you need the password, just ask.</p>
        <form action={unlock} autoComplete="off">
          <label htmlFor="pw">Password</label>
          <input type="password" id="pw" name="password" autoComplete="current-password" autoFocus required />
          <button className="btn" type="submit">Enter</button>
          <p className="err">{error ? "That is not it. Try again, or ask me." : ""}</p>
        </form>
        <p style={{ marginTop: 30, fontSize: ".78rem" }}>
          <a href="/" style={{ color: "var(--clay)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
            Back to Love Can Do That
          </a>
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <a className="back" href="/">
            <span></span>Love Can Do That
          </a>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <header className="hero" style={{ paddingTop: "clamp(40px,7vh,80px)" }}>
        <div className="wrap">
          <p className="eyebrow rv">Client materials &nbsp;·&nbsp; Private</p>
          <h1 className="rv" style={{ fontSize: "clamp(2.1rem,5vw,3.6rem)", maxWidth: "20ch" }}>
            This work is about one thing. <i>Transformation</i>.
          </h1>
          <p className="lede rv">
            Not a better version of the life you have been managing. The one underneath it, the one
            you would actually choose.
          </p>
          <p className="dim rv" style={{ marginTop: 24, maxWidth: "62ch" }}>
            Everything on this page, the legal frame, the training, the research, the honest limits,
            is in service of that, and nothing else. I do not promise outcomes, and anyone who does
            is selling something. What I can give you is the truth about how the licensed work is
            done and what is actually known, including the parts that complicate it. Oregon is the
            first place on earth this has run at scale in public view, so for once there are real
            numbers instead of anecdotes.
          </p>
        </div>
      </header>

      {/* ============ THE FRAME ============ */}
      <section className="band" style={{ marginTop: "clamp(50px,8vh,90px)" }}>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">The frame</p>
          </div>
          <div className="rv">
            <h2>
              How the legal work is <i>actually done</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              Psilocybin services are legal for adults twenty one and over under Oregon Psilocybin
              Services, established by Measure 109 and administered by the Oregon Health Authority. A
              supervised session with a licensed facilitator, at a licensed service center in
              Portland. No prescription, no referral, no diagnosis. None is required, and none is
              given.
            </p>
            <p className="dim">
              Getting licensed was not a weekend. I trained at InnerTrek, the program Tom Eckert
              founded, the man who architected Measure 109. More than a hundred and fifty hours of
              coursework, forty hours of supervised practicum, and fifty hours of consultation
              before I was allowed to sit with anyone. I am licensed by the Oregon Health Authority.
              My work is non-directive. I do not steer your experience, interpret it, or tell you
              what it means. I keep you safe, and I stay with you.
            </p>
            <p className="dim">
              I am not a therapist and this is not therapy. I do not diagnose, I do not treat, and I
              do not promise outcomes. I hold the container, and I am the catalyst. The medicine is
              the short part. The transformation is yours.
            </p>
            <p className="dim">
              Two different things, and I keep them clear. The three day immersions are
              transformation work, and they happen in the Hudson Valley and on Roatán. The licensed
              medicine work is its own path, and it is done in Oregon. If it is something you want to
              explore, that is a conversation you and I have one to one.
            </p>
          </div>
        </div>
      </section>

      {/* ============ HOW I CAME TO THIS ============ */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">How I came to this</p>
          </div>
          <div className="rv">
            <h2>
              I did not study this from a distance. I got here <i>the hard way</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              For the first time in my life, I hit a breaking point. A new high-powered job in New
              York, and at the same time a caregiver to family whose health would not wait. It all
              came crashing down at once.
            </p>
            <p className="dim">
              I found my way to ketamine therapy, and in one of those sessions I found the thing I
              had lost, which was my own sense of purpose. Afterward I sat down and wrote on a single
              piece of paper what my ideal life would look like. That page became the portfolio life
              I am living now.
            </p>
            <p className="dim">
              Then I went to study the deeper version of that work. I chose psilocybin because it
              grows, rather than being made in a lab. I went through the legal program at InnerTrek
              to learn to facilitate and to hold this space, with safety and consent as the two
              things I will not compromise.
            </p>
            <p className="dim">
              I facilitate the licensed medicine work inside Oregon&apos;s regulated model, at the
              service center in Portland, because that is where it is legal and where it is done
              right. The three day immersions I lead in the Hudson Valley and on Roatán are the
              transformation work. The medicine is its own path, and it is one we would walk
              together, one conversation at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PREPARATION ============ */}
      <section className="band">
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">Before &nbsp;·&nbsp; Preparation</p>
          </div>
          <div className="rv">
            <h2>
              We do the real work before there is any medicine <i>in the room</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              It starts with a conversation, sometimes a short one before you fill out a single form,
              so you can decide whether I am the right person to sit with you. Either of us can
              decide it is not the time, and that costs you nothing.
            </p>
            <p className="dim">
              Then preparation proper. We go through your history, your health, and your medications
              together. There are three things Oregon does not allow, and I will tell you plainly if
              one applies. Beyond that, if anything in your history needs a doctor&apos;s or a
              therapist&apos;s eyes first, I will say so and help you get there. I do not diagnose,
              and I will never tell you to change a medication. That is a conversation for you and
              your prescriber, and we will make time for it.
            </p>
            <p className="dim">
              We set your intention. Not a demand on the day, a compass heading. We build a safety
              and support plan, and a plan for how you get home, because you will not be driving
              yourself anywhere. You will review the Client Bill of Rights and the consent forms, and
              you can withdraw at any point before the session begins.
            </p>
            <p className="dim" style={{ fontSize: ".95rem" }}>
              Preparation is roughly three hours, usually across more than one meeting. Oregon
              requires it to happen at least a day before, and within ninety days of, your session.
            </p>
          </div>
        </div>
      </section>

      {/* ============ THE DAY ============ */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">During &nbsp;·&nbsp; The day</p>
          </div>
          <div className="rv">
            <h2>
              Six to eight hours. Eye shades, music, a blanket, and <i>someone who stays</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              You arrive and settle. You hand me your phone, your keys, your watch, so the world can
              wait. We check in briefly, and I make sure it is still a clear yes. It is your right to
              say no right up to the moment you take it.
            </p>
            <p className="dim">
              At the licensed service center in Portland, the medicine is brought to you. The come-up
              is often the most anxious stretch, and it passes. Most people lie down, put on eye
              shades, and let the music carry them inward. It comes in waves. I am beside you for all
              of it, mostly quiet, there when you need a hand or water or nothing at all.
            </p>
            <p className="dim">
              Before you begin, I give you a short orientation. The gist of it: there is no wrong way
              to do this. Every journey has a beginning, a middle, and an end, and you always come
              back. Move toward what appears, the beautiful and the frightening both, and get curious
              about it. Use the breath. Ask for help whenever you want it.
            </p>
            <p className="dim">
              If something hard comes up, my job is not to pull you out. It is to stay the calmest
              thing in the room while you look at it. Hard passages are often where the work is, and
              they rarely last the whole day. Toward the end there is quiet time, food, and a simple
              closing. You leave when I am sure you are ready, usually six to eight hours in, to the
              ride you arranged. You do not make big decisions that night. You go home and you are
              gentle with yourself.
            </p>
          </div>
        </div>
        <figure className="rv" style={{ margin: "clamp(48px,7vh,90px) auto 0", maxWidth: 720 }}>
          <div style={{ borderRadius: 30, overflow: "hidden", aspectRatio: "3/2" }}>
            <img
              src="/images/service-center-room.jpg"
              alt="A one-on-one session room at the licensed service center in Portland: a made bed under a hand-painted owl mural and hanging lanterns"
              loading="lazy"
            />
          </div>
          <figcaption
            style={{
              marginTop: 14,
              fontSize: ".74rem",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            The room in Portland, where the one-on-one work happens
          </figcaption>
        </figure>
      </section>

      {/* ============ INTEGRATION ============ */}
      <section className="band">
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">After &nbsp;·&nbsp; Integration</p>
          </div>
          <div className="rv">
            <h2>
              The session is a quarter of the work. <i>Integration is half</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              Preparation is a quarter. The session is a quarter. What you do afterward is the other
              half, and it is the part people skip and then wonder why nothing changed. Insight on
              the day is easy. Insight on an ordinary Tuesday, in your kitchen, in your marriage, in
              your company, is the only kind that counts.
            </p>
            <p className="dim">
              The first night, your only job is to be kind to yourself. Low light, a good meal,
              water, a bath, and be choosy about who you tell. I text you the next day to see how you
              are landing. We meet a couple of days later, for a good while, and again a week or two
              after that. You tell the story, we find what it meant, and we turn it into a few real
              changes and a practice or two you actually want to keep. The practices are usually
              yours, not mine. Sometimes it is as simple as, I want to sing again.
            </p>
            <p className="dim">
              You do not have to arrive with answers. You do not have to journal, though many people
              find it helps. If the experience was difficult, that is exactly when people want to
              disappear and exactly when they should come back, because a hard day that gets met and
              made sense of can become the most useful part of the whole thing. And if something
              surfaces that belongs with a therapist or a doctor, I will help you find them. That is
              care, not a door closing.
            </p>
            <p className="dim" style={{ fontSize: ".95rem" }}>
              One idea I keep, from my teacher Tom Eckert. Think of your life as a book. The chapters
              behind you are written. You arrive at today to find the page blank and the pen in your
              hand. You do not get to choose everything that happens next, but you are always the
              author of what it comes to mean.
            </p>
          </div>
        </div>
      </section>

      {/* ============ IN THE ROOM ============ */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">In the room</p>
          </div>
          <div className="rv">
            <h2>
              What it is like to <i>sit with me</i>.
            </h2>
            <p style={{ marginTop: 30 }} className="dim">
              These come from the leaders I coach, not from this work, which stays private. But the
              thing they name is the thing that matters most here too. What it is like to be in the
              room.
            </p>
            <div className="quotes">
              <blockquote className="quote">
                <p className="q">
                  She is thoughtful, calm, and clears the noise. She easily creates the trust to get
                  at the hard stuff.
                </p>
                <p className="who">A chief operating officer</p>
              </blockquote>
              <blockquote className="quote">
                <p className="q">Taking off my armor was far from easy. It changed everything.</p>
                <p className="who">A client, before a hard conversation he had been dreading</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCREENING ============ */}
      <section className="band">
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">Screening</p>
          </div>
          <div className="rv">
            <h2>
              Some people I turn away, and it is better to know <i>why now</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              Oregon does not allow this for anyone who has taken lithium in the last thirty days,
              anyone currently having thoughts of harming themselves or others, or anyone who has
              been diagnosed with or treated for active psychosis. Those are not mine to waive.
            </p>
            <p className="dim">
              Beyond that, some things we talk through rather than rule out: certain heart conditions
              and certain medications, a history of serious trauma without support already in place,
              pregnancy. If your history calls for a doctor&apos;s or a therapist&apos;s read first,
              I will tell you, and I would rather send you to get it than skip it. Never stop a
              medication on your own to qualify for anything.
            </p>
            <p className="dim">
              And anyone looking for a guarantee. I will tell you no, and I will mean it kindly.
            </p>
          </div>
        </div>
      </section>

      {/* ============ EVIDENCE ============ */}
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The evidence</p>
            </div>
            <div className="rv">
              <h2>
                Oregon is the first place this has run <i>at scale, in public view</i>.
              </h2>
              <p style={{ marginTop: 26 }} className="dim">
                Which means for the first time there are real numbers instead of anecdotes. All of it
                is below, including the study that complicates it. If someone only shows you the
                encouraging research, be careful with them.
              </p>
            </div>
          </div>

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
                  in the entire state across the year. If you want one number to hold, that is the
                  one.
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
                  days, including people who stayed on their psychiatric medication. Still a
                  preprint, still small, still worth your time.
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
            <li className="rv">
              <a
                href="https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-access-psilocybin-services.aspx"
                target="_blank"
                rel="noopener"
              >
                <span className="t">Oregon Health Authority: how to access psilocybin services</span>
                <span className="s">Oregon Health Authority</span>
                <span className="f">
                  The official walkthrough. Twenty one and over, no prescription, no diagnosis, no
                  referral. Preparation, then administration at a licensed service center, then
                  integration. It also lists every form you will sign, including the Client Bill of
                  Rights.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://www.innertrek.org/psychedelic-facilitator-training"
                target="_blank"
                rel="noopener"
              >
                <span className="t">InnerTrek</span>
                <span className="s">Where I trained</span>
                <span className="f">
                  Founded by Tom Eckert, who architected Measure 109. If you want to know what my
                  training actually consisted of, it is described here in more detail than I could
                  give you in a conversation.
                </span>
              </a>
            </li>
            <li className="rv">
              <a
                href="https://www.simonyugler.com/psychedelics-and-the-soul"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  Psychedelics and the Soul: A Mythic Guide to Psychedelic Healing, Depth
                  Psychology, and Cultural Repair
                </span>
                <span className="s">Simon Yugler &nbsp;·&nbsp; 2024</span>
                <span className="f">
                  Everything above is safety and outcomes. This is about meaning, which no study
                  measures. Simon teaches for InnerTrek, where I trained. He reads the journey
                  through Jung, myth, and depth psychology, the same veil I describe on the home
                  page.
                </span>
              </a>
            </li>
          </ul>

          <div className="callout rv">
            <p>
              What none of this research can tell you is whether it will work for you. The trials
              were small and carefully screened. The evidence is real, growing, and still early, and
              the container matters as much as the compound. Anyone who tells you more than that is
              selling you something.
            </p>
          </div>

          <details className="more rv">
            <summary>How we got here</summary>
            <p>
              Ancient Indigenous use. Suppressed after 1560. Named to Western science in the 1950s,
              which brought real harm to the Mazatec people who shared it. Harvard in the early
              sixties. Scheduled and shut down in 1970. Revived at Johns Hopkins in 2006.
              Oregon&apos;s Measure 109 in 2020. First licenses in 2023.
            </p>
          </details>
        </div>
      </section>

      <div className="close">
        <div className="wrap">
          <p className="mark rv">Love can do that.</p>
          <p className="dim rv" style={{ margin: "26px auto 0", maxWidth: "48ch", fontSize: ".96rem" }}>
            Questions about any of this are welcome before we ever schedule anything. Write to{" "}
            <a className="plainlink" href="mailto:hello@lovecandothat.com">
              hello@lovecandothat.com
            </a>
            .
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
          <p className="disclaimer">
            Psilocybin services are legal for adults twenty one and over in Oregon under Oregon
            Psilocybin Services, established by Measure 109 and administered by the Oregon Health
            Authority. Administration takes place only at a licensed service center in Oregon.
            Psilocybin remains a Schedule I substance under federal law. No psilocybin service of
            any kind is offered, arranged, or provided outside Oregon, and none is offered,
            arranged, provided, or permitted at any immersion. Nothing on this page is medical
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

export default async function Private({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const jar = await cookies();
  const sp = await searchParams;
  const open = isUnlocked(jar.get(COOKIE)?.value);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {open ? <Content /> : <Gate error={sp.e === "1"} />}
    </>
  );
}
