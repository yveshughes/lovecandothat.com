/* Home page stylesheet — ported verbatim from original/index.html.
   This is a finished design: do not restructure or "clean up" these rules.
   Only the --serif/--sans definitions changed, to use the self-hosted
   next/font versions of the same typefaces. */

export const css = `
  :root{
    --paper:#FBF8F2;
    --sand:#F2EBE0;
    --linen:#E7DDCD;
    --tan:#D3C2AA;
    --clay:#A8815C;
    --cocoa:#6E5A48;
    --bark:#3B2F26;
    --ink:#2C231C;
    --muted:#71645A;
    --line:rgba(59,47,38,.16);
    --serif:var(--font-serif),"Cormorant Garamond",Iowan Old Style,Palatino,Georgia,serif;
    --sans:var(--font-sans),"Jost",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
  body{
    background:var(--paper);color:var(--ink);
    font-family:var(--sans);font-weight:300;font-size:17.5px;line-height:1.8;
    overflow-x:hidden;-webkit-font-smoothing:antialiased;
  }
  img{display:block;width:100%;height:100%;object-fit:cover}

  .wrap{max-width:1180px;margin:0 auto;padding:0 34px;position:relative}
  @media(max-width:600px){.wrap{padding:0 24px}}

  /* ---------- type ---------- */
  h1,h2,h3{font-family:var(--sans);font-weight:300;letter-spacing:-.02em;line-height:1.1}
  h1{font-size:clamp(2.5rem,6.4vw,4.9rem);line-height:1.06}
  h2{font-size:clamp(1.8rem,4vw,2.9rem);line-height:1.14}
  h3{font-family:var(--sans);font-size:1.02rem;font-weight:400;letter-spacing:.02em;line-height:1.4}
  i,em,.it{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:0;font-size:1.09em}
  p{max-width:60ch}
  p+p{margin-top:1.3em}
  a{color:inherit}
  .eyebrow{font-size:.7rem;font-weight:400;letter-spacing:.3em;text-transform:uppercase;color:var(--clay)}
  .lede{font-size:clamp(1.1rem,2.2vw,1.35rem);line-height:1.7;color:var(--cocoa);max-width:42ch;font-weight:300}
  .dim{color:var(--muted)}

  section{padding:clamp(80px,12vh,140px) 0}
  .band{background:var(--sand)}
  .rule{height:1px;background:var(--line);border:0}

  /* ---------- reveal ---------- */
  .rv{opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)}
  .rv.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}}

  /* ---------- swirl ---------- */
  .swirl{position:absolute;pointer-events:none;opacity:.16;color:var(--clay)}
  .swirl svg{width:100%;height:auto;display:block}

  /* ---------- hero ---------- */
  .hero{padding:clamp(90px,13vh,150px) 0 0;position:relative;overflow:hidden}
  .hero .swirl{top:-6vh;right:-9vw;width:min(46vw,520px)}
  .hero h1{max-width:16ch;margin:26px 0 32px}
  .facts{
    margin-top:46px;padding-top:22px;border-top:1px solid var(--line);
    display:flex;flex-wrap:wrap;gap:9px 34px;
    font-size:.72rem;letter-spacing:.19em;text-transform:uppercase;color:var(--muted);
  }
  .herofig{margin-top:clamp(56px,9vh,96px);aspect-ratio:3/2;background:var(--linen);overflow:hidden;border-radius:30px}
  .herofig img{filter:saturate(.93) contrast(1.02)}

  /* ---------- layout ---------- */
  .split{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.5fr);gap:clamp(26px,6vw,90px);align-items:start}
  @media(max-width:880px){.split{grid-template-columns:1fr;gap:22px}}

  .duo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(32px,4.5vw,66px);align-items:start}
  .duo .fig{aspect-ratio:3/4;background:var(--linen);overflow:hidden;border-radius:30px}
  .duo .fig img{object-position:center 24%}
  /* wide-l = photo on the left, copy on the right */
  .duo.wide-l{grid-template-columns:minmax(0,.86fr) minmax(0,1fr)}
  /* wide-r = copy on the left, photo on the right */
  .duo.wide-r{grid-template-columns:minmax(0,1fr) minmax(0,.86fr)}
  .duo p{max-width:none}
  /* long sections used to leave a dead column beside the copy once the photo ended.
     the photo now travels with the text instead of stopping short of it. */
  .duo .fig{position:sticky;top:clamp(20px,9vh,86px);align-self:start}
  /* for pairings where the copy is short, centre it against the photo instead of
     leaving a column of dead space underneath it */
  .duo.mid{align-items:center}
  @media(max-width:980px){
    .duo,.duo.wide-l,.duo.wide-r{grid-template-columns:1fr;gap:40px}
    .duo .fig{aspect-ratio:4/5;max-width:560px;position:static}
    .duo.wide-r .fig{order:2}
  }

  /* ---------- identity wheel ---------- */
  /* the words sit on the wheel itself at every size. resting on one (desktop)
     or tapping it reveals its story in the centre; tapping the panel or any
     empty spot closes it again. */
  .wheelwrap{display:flex;justify-content:center;margin-top:clamp(46px,7vh,78px)}
  .wheel{position:relative;width:min(660px,94vw);color:var(--clay)}
  .wheel svg{width:100%;height:auto;display:block;overflow:visible}

  .facets{list-style:none;position:absolute;inset:0;margin:0;padding:0}
  .facets .k{position:absolute;transform:translate(-50%,-50%);white-space:nowrap;cursor:pointer;
    outline:none;font-size:.72rem;font-weight:400;letter-spacing:.18em;text-transform:uppercase;
    color:var(--cocoa);transition:color .3s ease}
  .facets .k:hover,.facets .k:focus,.facets li.on .k{color:var(--clay)}
  .facets .v{position:absolute;left:50%;top:48.4%;transform:translate(-50%,-50%);
    width:min(30ch,56vw);text-align:center;font-size:.86rem;line-height:1.65;color:var(--muted);
    background:var(--sand);border-radius:14px;padding:14px 12px;opacity:0;pointer-events:none;
    transition:opacity .45s ease}
  .facets .k:hover+.v,.facets .k:focus+.v,.facets li.on .v{opacity:1;pointer-events:auto}

  @media(max-width:880px){
    /* phones keep the words on the wheel; only the sizes shrink so they fit,
       and the centre panel gets a soft shadow so it reads over the rings */
    .wheelwrap{margin-top:clamp(30px,5vh,52px)}
    .wheel{width:min(560px,96vw)}
    .facets .k{font-size:.56rem;letter-spacing:.08em}
    .facets .v{width:min(22ch,66vw);font-size:.82rem;padding:15px 13px;
      box-shadow:0 10px 34px rgba(59,47,38,.16)}
  }

  /* ---------- doors ---------- */
  .doors{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:64px;border-top:1px solid var(--line)}
  .door{padding:40px 36px 46px;border-right:1px solid var(--line)}
  .door:last-child{border-right:0}
  .door .n{font-family:var(--serif);font-style:italic;font-size:2.5rem;color:var(--clay);line-height:1;display:block;margin-bottom:16px}
  .door h3{margin-bottom:14px;font-size:1.22rem;font-weight:400}
  .door p{font-size:.95rem;color:var(--muted);max-width:40ch;line-height:1.75}
  @media(max-width:880px){
    .doors{grid-template-columns:1fr;margin-top:46px}
    .door{border-right:0;border-bottom:1px solid var(--line);padding:34px 0 36px}
    .door:last-child{border-bottom:0}
  }

  /* ---------- words strip ---------- */
  .words{padding:clamp(64px,10vh,110px) 0;text-align:center}
  .words ul{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;gap:14px 46px}
  .words li{font-family:var(--serif);font-style:italic;font-size:clamp(1.4rem,3.4vw,2.3rem);color:var(--cocoa);font-weight:300}
  .words li:nth-child(even){color:var(--clay)}

  /* ---------- lists ---------- */
  .cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,80px);margin-top:56px}
  @media(max-width:760px){.cols{grid-template-columns:1fr;gap:46px}}
  .plain{list-style:none;margin-top:22px}
  .plain li{padding:14px 0;border-bottom:1px solid var(--line);font-size:.96rem;color:var(--muted);max-width:44ch;line-height:1.7}
  .plain li:last-child{border-bottom:0}

  /* ---------- citations ---------- */
  .cites{list-style:none;margin-top:44px;border-top:1px solid var(--line);max-width:780px}
  .cites li{border-bottom:1px solid var(--line);padding:24px 0}
  .cites a{display:block;text-decoration:none}
  .cites .t{display:block;font-size:1.04rem;line-height:1.5;color:var(--ink);max-width:56ch;transition:color .3s ease}
  .cites a:hover .t{color:var(--clay)}
  .cites .s{display:block;margin-top:8px;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--clay);opacity:.85}
  .cites .f{display:block;margin-top:10px;font-size:.93rem;color:var(--muted);max-width:60ch;line-height:1.7}

  /* ---------- pull ---------- */
  .pull{text-align:center;padding:clamp(90px,15vh,170px) 0}
  .pull p{
    font-family:var(--serif);font-size:clamp(1.8rem,4.4vw,3rem);line-height:1.3;
    max-width:22ch;margin:0 auto;color:var(--bark);font-weight:300;
  }
  .pull .attrib{margin-top:28px;font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;color:var(--clay);font-family:var(--sans);font-style:normal;max-width:none}

  /* ---------- form ---------- */
  .formcard{margin-top:48px;max-width:660px}
  .field{margin-bottom:30px}
  label{display:block;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--clay);margin-bottom:10px}
  input,textarea,select{
    width:100%;background:transparent;border:0;border-bottom:1px solid var(--line);
    color:var(--ink);font-family:var(--sans);font-size:1.02rem;font-weight:300;
    padding:11px 0;border-radius:0;transition:border-color .35s ease;
  }
  select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--cocoa) 50%),linear-gradient(135deg,var(--cocoa) 50%,transparent 50%);background-position:calc(100% - 13px) 20px,calc(100% - 8px) 20px;background-size:5px 5px,5px 5px;background-repeat:no-repeat}
  textarea{resize:vertical;min-height:120px;line-height:1.7}
  input:focus,textarea:focus,select:focus{outline:none;border-bottom-color:var(--clay)}
  input::placeholder,textarea::placeholder{color:#A79B90}
  .btn{
    display:inline-block;margin-top:14px;background:var(--bark);cursor:pointer;
    border:1px solid var(--bark);color:var(--paper);
    font-family:var(--sans);font-size:.73rem;font-weight:400;letter-spacing:.22em;text-transform:uppercase;
    padding:19px 46px;transition:background .4s ease,color .4s ease;
  }
  .btn:hover{background:transparent;color:var(--bark)}
  .note{margin-top:26px;font-size:.87rem;color:var(--muted);max-width:48ch}
  .note a{color:var(--clay);text-decoration:none;border-bottom:1px solid var(--tan)}

  /* ---------- close ---------- */
  .close{text-align:center;padding:clamp(96px,16vh,180px) 0 0;position:relative;overflow:hidden}
  .close .mark{font-family:var(--serif);font-style:italic;font-size:clamp(2.4rem,6.6vw,4.6rem);line-height:1.1;color:var(--clay);font-weight:300}
  footer{padding:64px 0 60px;margin-top:clamp(70px,10vh,110px);border-top:1px solid var(--line)}
  .fgrid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:22px;font-size:.78rem;letter-spacing:.06em;color:var(--muted)}
  .disclaimer{margin-top:34px;font-size:.75rem;line-height:1.75;color:#8B7F75;max-width:78ch}
`;
