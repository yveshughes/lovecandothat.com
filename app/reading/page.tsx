import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "Before We Begin · Love Can Do That",
  description:
    "What I would want you to read before a psilocybin session. Research, the Oregon program, and the honest limits of what is known.",
};

export default function Reading() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteNav current="research" />

      <header>
        <div className="wrap">
          <p className="eyebrow">For clients, before we begin</p>
          <h1>
            What I would want you to read <i>before</i>, not after.
          </h1>
          <p className="lede dim">
            You do not need to read any of this to work with me. But most of the people I sit with
            are the kind who want to see the evidence themselves, so here it is, including the parts
            that complicate the story.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>Start here: how this actually works</h2>
          <p className="dim" style={{ marginTop: 18 }}>
            Oregon built the first state regulated psilocybin program in the country. Knowing the
            mechanics takes most of the fear out of it.
          </p>
          <div className="grp">
            <div className="item">
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
            </div>
            <div className="item">
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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>What the research shows</h2>
          <div className="grp">
            <div className="item">
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
                  5,935 clients and 5,375 sessions in 2025. Serious adverse events were rare: 2.42
                  behavioral and 2.79 medical per 1,000 sessions, and seven hospitalizations across
                  the whole state for the whole year. If you want one number to hold, that is the
                  one.
                </span>
              </a>
            </div>
            <div className="item">
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
                  The first outcomes study conducted inside this exact model rather than in a lab.
                  88 participants, significant improvement in depression, anxiety, and well-being at
                  thirty days, including among people who stayed on their psychiatric medication.
                  Still a preprint, still small, still worth your time.
                </span>
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.psychiatrictimes.com/view/phase-3-program-investigating-comp360-psilocybin-for-treatment-resistant-depression-breaking-poster-data-from-the-2026-ascp-annual-meeting"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  COMP360 psilocybin for treatment resistant depression, phase 3
                </span>
                <span className="s">Compass Pathways &nbsp;·&nbsp; six month data, July 2026</span>
                <span className="f">
                  581 participants. Thirty nine percent of the 25 mg group reached a clinically
                  meaningful drop in depression scores by week six, and the effect held through week
                  twenty six. Read it knowing this is a controlled clinical trial, not a service
                  center. The setting is different and the difference is not cosmetic.
                </span>
              </a>
            </div>
            <div className="item">
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
                  One of the studies that moved this out of the fringe. Good if you want to see the
                  method rather than the headline.
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>The part most people skip</h2>
          <p className="dim" style={{ marginTop: 18 }}>
            If someone only shows you the encouraging research, be careful with them.
          </p>
          <div className="grp">
            <div className="item">
              <a
                href="https://oregoncapitalchronicle.com/2026/06/30/growing-scope-of-oregon-psilocybin-program-raises-safety-concerns-study-says/"
                target="_blank"
                rel="noopener"
              >
                <span className="t">
                  Growing scope of Oregon&apos;s psilocybin program raises safety concerns
                </span>
                <span className="s">
                  Johns Hopkins, International Journal of Drug Policy &nbsp;·&nbsp; June 2026
                </span>
                <span className="f">
                  Most people using Oregon&apos;s program are seeking wellness rather than
                  treatment, and they skew high income and out of state. The researchers raised real
                  concern about people bringing serious psychiatric conditions into a supported
                  adult use model that was not designed to treat them. This is the study behind how
                  carefully I screen, and behind the fact that I will tell some people no.
                </span>
              </a>
            </div>
          </div>
          <div className="callout">
            <p>
              What none of this research can tell you is whether it will work for you. The honest
              position is that the evidence is real, growing, and still early, and that the
              container matters as much as the compound. Anyone who tells you more than that is
              selling you something.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p className="mark">Love can do that.</p>
          <p className="dim" style={{ marginTop: 20, fontSize: ".95rem" }}>
            Questions about any of this are welcome before we ever schedule anything. Write to{" "}
            <a className="plainlink" href="mailto:hello@lovecandothat.com">
              hello@lovecandothat.com
            </a>
            .
          </p>
          <nav
            style={{
              marginTop: 30,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px 30px",
              fontSize: ".72rem",
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            <a href="/" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Home
            </a>
            <a href="/roatan" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Retreats
            </a>
            <a
              href="https://substack.com/@lovecandothat"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}
            >
              Journal
            </a>
            <a href="#" style={{ color: "var(--cocoa)", textDecoration: "none", borderBottom: "1px solid var(--tan)" }}>
              Back to top
            </a>
          </nav>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
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
          <p className="fine">
            Tracey Abbott. Licensed psilocybin facilitator, Oregon. InnerTrek trained. Psilocybin
            services are legal for adults twenty one and over in Oregon under Oregon Psilocybin
            Services, established by Measure 109 and administered by the Oregon Health Authority.
            Administration takes place only at a licensed service center. Psilocybin remains a
            Schedule I substance under federal law. Nothing on this page is medical advice, a
            diagnosis, a treatment claim, or a substitute for care from a licensed medical or mental
            health professional. If you are in crisis, call or text 988.
          </p>
        </div>
      </footer>
    </>
  );
}
