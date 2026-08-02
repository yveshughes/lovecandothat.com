import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import InquiryForm from "./components/InquiryForm";
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

const swirlPath =
  "M200 20c99 0 180 81 180 180s-81 180-180 180S20 299 20 200c0-84 68-152 152-152s152 68 152 152c0 71-58 129-129 129S66 271 66 200c0-60 49-109 109-109s109 49 109 109c0 51-41 92-92 92s-92-41-92-92c0-43 35-78 78-78s78 35 78 78c0 36-29 65-65 65s-65-29-65-65c0-30 24-54 54-54s54 24 54 54";

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="wrap">
          <div className="swirl" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d={swirlPath} />
            </svg>
          </div>
          <img
            src="/images/brand/logo-horizontal-gold.svg"
            alt="Love can do that. Risk the possible."
            className="rv"
            style={{ width: "min(440px, 84vw)", height: "auto", objectFit: "contain", marginBottom: 44 }}
          />
          <p className="eyebrow rv">By invitation</p>
          <h1 className="rv">
            I have followed the white rabbit my whole life. This is the <i>deepest door</i> I have
            walked through.
          </h1>
          <p className="lede rv">
            Licensed psilocybin facilitation. Private, prepared, and held with more care than
            anything else I do.
          </p>
          <div className="facts rv">
            <span>State licensed</span>
            <span>InnerTrek trained</span>
            <span>Adults 21 and over</span>
            <span>No diagnosis required</span>
            <span>Private &amp; small group sessions</span>
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
      <section>
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
              childhood book, and I learned early to follow the white rabbit. From my hometown in
              Alabama to a decade as an expat, from deep scuba diving to studying alternative
              medicine, I have always explored the depths, whether of oceans or of the human
              spirit.
            </p>
            <p className="dim">
              That curiosity carried me through the highest stakes of private equity, and into the
              roles that matter even more. Caregiver. Daughter. Sister. Friend. Mentor. What all of
              it taught me is that leadership is not about scaling results. It is about aligning
              power with purpose. Getting deeply curious, and asking better questions.
            </p>
            <p className="dim">
              None of that is why you are on this page. It is why I can sit across from the person
              reading it and already know what hesitation is costing them. I spent a career watching
              it cost capable people everything.
            </p>
            <p className="dim">
              The white rabbit came from a phone call. Standing at the edge of leaving private
              equity, I called an investment banker I trusted who had become a conscious
              capitalist. I expected advice. A framework. A model. Instead he said, follow the
              white rabbit. It will lead you to doorways you cannot see yet. Every decision that
              has mattered since has come down to the same choice. Probability, which you can
              calculate. Or possibility, which you cannot. I choose possibility. <i>Risk the
              possible</i> is not a tagline to me. It is the method.
            </p>
            <p className="dim">
              I did not come to this work because talk therapy failed me or because I needed a
              second act. I came because the leaders I have advised for thirty years are the ones
              who need a room like this the most, and the least likely to ever ask for one.
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
                Nine things I have been at the same time for about <i>thirty years</i>.
              </h2>
              <p style={{ marginTop: 30 }} className="dim">
                Somebody asked me once to name the parts of myself that actually show up for work.
                This is the list I keep landing on. Rest on a word and it will tell you its story.
              </p>
              <p className="dim">
                It is also why I can sit with a CEO at nine in the morning and someone taking the
                mask off at two in the afternoon, and not have to become a different person in
                between.
              </p>
            </div>
          </div>

          <div className="wheelwrap">
            <div className="wheel rv">
              <svg
                viewBox="44 44 534 426"
                role="img"
                aria-label="Identity wheel: connector, builder, empath, insider, expatriate, explorer, observer, outsider, balanced human"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="320" cy="250" r="168" opacity=".5" />
                  <circle cx="320" cy="250" r="118" opacity=".2" />
                  <circle cx="320" cy="250" r="54" opacity=".5" />
                  <line x1="320.0" y1="196.0" x2="320.0" y2="82.0" opacity=".28" />
                  <line x1="354.7" y1="208.6" x2="428.0" y2="121.3" opacity=".28" />
                  <line x1="373.2" y1="240.6" x2="485.4" y2="220.8" opacity=".28" />
                  <line x1="366.8" y1="277.0" x2="465.5" y2="334.0" opacity=".28" />
                  <line x1="338.5" y1="300.7" x2="377.5" y2="407.9" opacity=".28" />
                  <line x1="301.5" y1="300.7" x2="262.5" y2="407.9" opacity=".28" />
                  <line x1="273.2" y1="277.0" x2="174.5" y2="334.0" opacity=".28" />
                  <line x1="266.8" y1="240.6" x2="154.6" y2="220.8" opacity=".28" />
                  <line x1="285.3" y1="208.6" x2="212.0" y2="121.3" opacity=".28" />
                </g>
                <g className="wl">
                  <text x="385.7" y="69.6" textAnchor="start" dy="-0.25em">CONNECTOR</text>
                  <text x="486.3" y="154.0" textAnchor="start" dy="0.34em">BUILDER</text>
                  <text x="509.1" y="283.3" textAnchor="start" dy="0.34em">EMPATH</text>
                  <text x="443.4" y="397.1" textAnchor="start" dy="0.34em">INSIDER</text>
                  <text x="320.0" y="442.0" textAnchor="middle" dy="0.90em">EXPATRIATE</text>
                  <text x="196.6" y="397.1" textAnchor="end" dy="0.34em">EXPLORER</text>
                  <text x="130.9" y="283.3" textAnchor="end" dy="0.34em">OBSERVER</text>
                  <text x="153.7" y="154.0" textAnchor="end" dy="0.34em">OUTSIDER</text>
                  <text x="254.3" y="69.6" textAnchor="end" dy="-0.25em">BALANCED HUMAN</text>
                </g>
                <text className="wc" x="320" y="250" textAnchor="middle" dy=".34em">all nine</text>
              </svg>
            </div>
            <ul className="facets rv">
              <li>
                <span className="k">Connector</span>
                <span className="v">
                  I have spent a career putting the right people in the right room. This room only
                  holds two. It is still the same job.
                </span>
              </li>
              <li>
                <span className="k">Builder</span>
                <span className="v">
                  A Chick-fil-A I opened myself. A three hundred fifty million dollar P&amp;L. A
                  practice I started from nothing with no net. I build the container before anybody
                  walks in.
                </span>
              </li>
              <li>
                <span className="k">Empath</span>
                <span className="v">
                  I feel a room before I read it. For most of my career that was the thing I
                  apologized for. Here it is the whole job.
                </span>
              </li>
              <li>
                <span className="k">Insider</span>
                <span className="v">
                  Eight years as an Operating Partner. Five board seats. I already know what your
                  calendar looks like and what it is costing you.
                </span>
              </li>
              <li>
                <span className="k">Expatriate</span>
                <span className="v">
                  Ten years living outside my own country. You learn fast that the way you were
                  raised to see things is one option, not the truth.
                </span>
              </li>
              <li>
                <span className="k">Explorer</span>
                <span className="v">
                  Alice in Wonderland as a child. Under water off Roatán now. Follow the white
                  rabbit is not a slogan for me. It is a method.
                </span>
              </li>
              <li>
                <span className="k">Observer</span>
                <span className="v">
                  Thousands of hours watching leaders under pressure. I notice who partners, who
                  opposes, and who goes quiet exactly when it matters.
                </span>
              </li>
              <li>
                <span className="k">Outsider</span>
                <span className="v">
                  Single mom household in Alabama, then boardrooms on four continents. I have never
                  fully belonged in either one. That turns out to be useful in here.
                </span>
              </li>
              <li>
                <span className="k">Balanced human</span>
                <span className="v">
                  Human beings and becomings, not human doings. I will not ask you to be anything in
                  that room that I am not willing to be first.
                </span>
              </li>
            </ul>
          </div>
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
              Alice in Wonderland was my favorite book as a child. I learned early to walk through
              doors <i>other people could not see</i>.
            </h2>
            <p style={{ marginTop: 32 }} className="dim">
              Curiosity carried me across five continents and into rooms where the answer was
              supposed to come from analysis. Sometimes it did. More often, what actually moved was
              something the person already knew and had never let themselves say out loud.
            </p>
            <p className="dim">
              This is a different room. The same belief lives underneath it. People are not broken.
              They are carrying something they have not had a safe place to set down.
            </p>
            <p className="dim">
              Here is the real reason I got into this. I have seen it and lived it myself. How much
              healing happens the moment we finally take off the masks and get back to who we
              actually are underneath them.
            </p>
            <p className="dim">
              Psilocybin services are legal here under the country&apos;s first state regulated
              model. This is not a prescription and not something borrowed from somewhere else. It
              is a supervised session with a licensed facilitator, at a licensed service center,
              with real preparation before it and real integration after.
            </p>
            <p className="dim">The medicine is the short part. The container is the work.</p>
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
              I am careful with that language, because it goes soft fast. So here is the unromantic
              version. For a few hours, the part of you that manages and edits and defends gets
              quiet. What is behind it was always there. You have never had the room to look at it
              without flinching.
            </p>
            <p className="dim">
              There is a version of you that is less defended and more alive. Most people met her
              once and have been looking for the door ever since.
            </p>
            <p className="dim">
              I scuba dive, and it is the closest thing I know. The ocean taught me to stop
              controlling, to let the current carry me, to be a kid again. Full of wonder and play.
              This work does the same thing, closer in.
            </p>
            <p className="dim">
              Carl Jung called it the collective unconscious. A layer underneath your own story that
              is not only yours, carrying symbols and instincts every human seems to recognize
              without ever being taught them.
            </p>
            <p className="dim">
              I did not study psychology to believe that. I studied people. In boardrooms, in dive
              tanks, and in that room. I have watched them meet something in themselves that was
              older than their own biography.
            </p>
            <p className="dim">
              That is the real reason I do this. Not the license, though I earned that the hard way.
              What surfaces in that room does not belong only to the person lying there. It belongs
              to something we are all quietly plugged into, whether we ever say so out loud.
            </p>
            <p className="dim">
              Some people find grief they filed away years ago. Some find a decision they made at
              nineteen and never revisited. Some find they are not angry, they are tired. Almost
              nobody finds something they did not already own.
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
                history. What you are actually here for, which is rarely the first thing anyone
                says. We build a safety and support plan and a plan for getting you home. Either of
                us can decide not to go forward, and that decision costs you nothing.
              </p>
            </div>
            <div className="door rv">
              <span className="n">ii</span>
              <h3>The session</h3>
              <p>
                Administration happens at a licensed service center. Several hours. Eye shades,
                music, a blanket, a facilitator who stays. Mostly I am quiet. You do not drive
                yourself anywhere afterward.
              </p>
            </div>
            <div className="door rv">
              <span className="n">iii</span>
              <h3>Integration</h3>
              <p>
                I follow up within seventy two hours, and we meet again. The session is not the
                work. The work is what you do with it on an ordinary Tuesday, in your kitchen, in
                your marriage, in your company. That is where it lands or evaporates.
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
              Everything above is built for one person. I also hold this for small groups who want
              to do it together instead of alone. Founders who have run something with the same two
              or three people for a decade. A leadership team that survived a merger, a layoff, or a
              brutal year and never once talked about what it actually cost them. Old friends who
              have already earned the kind of trust this work asks for.
            </p>
            <p className="dim">
              The discipline is the same as the individual work, just built for a room instead of a
              chair. We prepare together and separately. The session is held at a private location,
              given only once everyone is confirmed, never published in advance. Integration
              continues after everyone goes home, because a group that only processes something
              together in the room and never again is a group that will quietly disagree about what
              happened.
            </p>
            <p className="dim">
              Up to eight people. Never more. Past that, a room stops being a room and starts being
              an audience, and this work does not survive an audience.
            </p>
            <p className="dim">
              Before any of that there is something you can do on your own tonight.{" "}
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
              is a thirty minute assessment I built for the leaders I coach. It is free and it asks
              nothing of you, not even an email.
            </p>
            <p className="dim">
              For groups who want to take the integration further, I also lead small leadership
              retreats on{" "}
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
              , built around the same water that taught me how to stay calm for someone else. The
              medicine stays where it is licensed. The integration does not.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PULL ============ */}
      <div className="pull rv">
        <div className="swirl" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d={swirlPath} />
          </svg>
        </div>
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
