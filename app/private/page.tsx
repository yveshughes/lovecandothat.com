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

      <header className="hero" style={{ paddingTop: "clamp(40px,7vh,80px)" }}>
        <div className="wrap">
          <p className="eyebrow rv">Client materials &nbsp;·&nbsp; Private</p>
          <h1 className="rv" style={{ fontSize: "clamp(2.1rem,5vw,3.6rem)", maxWidth: "20ch" }}>
            I do not promise outcomes. Here is what is <i>actually known</i>, including the parts
            that complicate it.
          </h1>
          <p className="lede rv">
            This is the first place on earth where the work has run at scale in public view, which
            means there are finally real numbers instead of anecdotes. I read all of it. I would
            rather you did too.
          </p>
        </div>
      </header>

      {/* ============ THE LEGAL FRAME ============ */}
      <section className="band" style={{ marginTop: "clamp(60px,9vh,100px)" }}>
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">The frame</p>
          </div>
          <div className="rv">
            <h2>
              How it works here, and <i>what I am</i>.
            </h2>
            <p style={{ marginTop: 34 }} className="dim">
              Psilocybin services are legal here under the country&apos;s first state regulated
              model. A supervised session with a licensed facilitator, at a licensed service
              center. Real preparation before. Real integration after.
            </p>
            <p className="dim">
              I trained at InnerTrek, the program founded by Tom Eckert, who architected Measure 109
              and the first state regulated model of psychedelic care in the country. Over a hundred
              and fifty hours of coursework, forty hours of supervised practicum, and fifty hours of
              consultation. I am licensed by the Oregon Health Authority. And I sat in my own hard
              chair before I ever asked anyone to sit in theirs.
            </p>
            <p className="dim">
              I am not a therapist and this is not therapy. I am not a physician and this is not
              medical treatment. I do not diagnose, I do not treat, and I do not promise outcomes.
              Anyone who promises you an outcome is selling something.
            </p>
            <p className="dim">
              I do not fix anyone. I hold the container, and I am the catalyst. The medicine is the
              short part. The healing is yours.
            </p>
          </div>
        </div>
      </section>

      {/* ============ THE ARC ============ */}
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The arc</p>
            </div>
            <div className="rv">
              <h2>
                How it works. Three meetings, and only one of them <i>involves medicine</i>.
              </h2>
              <p style={{ marginTop: 26 }} className="dim">
                It always starts the same way, with a conversation. No commitment, no medicine, just
                the two of us deciding together whether this is right for you.
              </p>
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
          <figure
            className="rv"
            style={{ margin: "clamp(64px,9vh,100px) auto 0", maxWidth: 720 }}
          >
            <div style={{ borderRadius: 30, overflow: "hidden", aspectRatio: "3/2" }}>
              <img
                src="/images/service-center-room.jpg"
                alt="A one-on-one session room at the licensed service center: a made bed under a hand-painted owl mural and hanging lanterns"
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
              Where the one-on-one work happens
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ SCREENING ============ */}
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">Screening</p>
            </div>
            <div className="rv">
              <h2>
                This work is not for everyone, and I would rather say so <i>here</i> than in the
                room.
              </h2>
            </div>
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
                <li>
                  Anyone with a personal or family history of psychosis, schizophrenia, or bipolar
                  I.
                </li>
                <li>
                  Certain cardiac conditions, and certain medications including lithium and some
                  antidepressants. Never stop a medication on your own to qualify for anything.
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
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <p className="eyebrow">The evidence</p>
            </div>
            <div className="rv">
              <h2>
                Oregon is the first place where this has run <i>at scale, in public view</i>.
              </h2>
              <p style={{ marginTop: 26 }} className="dim">
                Which means for the first time there are real numbers instead of anecdotes. All of
                it is below, including the study that complicates it. If someone only shows you the
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
              What none of this research can tell you is whether it will work for you. The honest
              position is that the evidence is real, growing, and still early, and that the
              container matters as much as the compound. Anyone who tells you more than that is
              selling you something.
            </p>
          </div>
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
