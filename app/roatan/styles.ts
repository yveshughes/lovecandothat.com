/* Water page stylesheet — ported verbatim from original/roatan.html.
   This is a finished design: do not restructure or "clean up" these rules.
   Only the --serif/--sans definitions changed, to use the self-hosted
   next/font versions of the same typefaces. */

export const css = `
  :root{
    /* the water page runs cool. the landing page keeps its earth tones. */
    --paper:#F4F8FA;--sand:#E4EEF3;--linen:#D2E1EA;--tan:#A6C2D1;
    --clay:#387187;--cocoa:#3A5A6B;--bark:#1D3946;--ink:#152A34;--muted:#556E7D;
    --line:rgba(29,57,70,.16);
    --serif:var(--font-serif),"Cormorant Garamond",Iowan Old Style,Palatino,Georgia,serif;
    --sans:var(--font-sans),"Jost",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
  body{background:var(--paper);color:var(--ink);font-family:var(--sans);font-weight:300;font-size:17.5px;line-height:1.8;overflow-x:hidden;-webkit-font-smoothing:antialiased}
  img{display:block;width:100%;height:100%;object-fit:cover}
  .wrap{max-width:1180px;margin:0 auto;padding:0 34px;position:relative}
  @media(max-width:600px){.wrap{padding:0 24px}}

  h1,h2{font-family:var(--sans);font-weight:300;letter-spacing:-.02em;line-height:1.08}
  h1{font-size:clamp(2.4rem,6vw,4.6rem);max-width:17ch}
  h2{font-size:clamp(1.8rem,4vw,2.9rem);line-height:1.14}
  i,em{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:0;font-size:1.09em}
  p{max-width:60ch}p+p{margin-top:1.3em}
  a{color:inherit}
  .eyebrow{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--clay)}
  .lede{font-size:clamp(1.1rem,2.2vw,1.35rem);line-height:1.7;color:var(--cocoa);max-width:44ch}
  .dim{color:var(--muted)}
  section{padding:clamp(78px,11vh,132px) 0}
  .band{background:var(--sand)}

  .rv{opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)}
  .rv.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}}

  .topbar{padding:26px 0 0}
  .back{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);text-decoration:none;display:inline-flex;gap:12px;align-items:center}
  .back span{width:30px;height:1px;background:var(--tan);display:block}
  .back:hover{color:var(--clay)}

  .hero{padding:clamp(56px,9vh,100px) 0 0}
  .hero h1{margin:24px 0 30px}
  .facts{margin-top:44px;padding-top:22px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:9px 34px;font-size:.72rem;letter-spacing:.19em;text-transform:uppercase;color:var(--muted)}

  .fig{background:var(--linen);overflow:hidden;position:relative;border-radius:30px}
  .wide{margin-top:clamp(52px,8vh,90px);aspect-ratio:3/2}
  .split{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.5fr);gap:clamp(26px,6vw,90px);align-items:start}
  @media(max-width:880px){.split{grid-template-columns:1fr;gap:22px}}
  .duo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(32px,4.5vw,66px);align-items:start}
  .duo .fig{aspect-ratio:3/4}
  .duo .fig img{object-position:center 24%}
  .duo.wide-l{grid-template-columns:minmax(0,.86fr) minmax(0,1fr)}
  .duo.wide-r{grid-template-columns:minmax(0,1fr) minmax(0,.86fr)}
  .duo p{max-width:none}
  /* long sections used to leave a dead column beside the copy once the photo ended.
     the photo now travels with the text instead of stopping short of it. */
  .duo .fig{position:sticky;top:clamp(20px,9vh,86px);align-self:start}
  @media(max-width:980px){
    .duo,.duo.wide-l,.duo.wide-r{grid-template-columns:1fr;gap:40px}
    .duo .fig{aspect-ratio:4/5;max-width:560px;position:static}
  }
  .pair{display:grid;grid-template-columns:1fr 1fr;gap:clamp(16px,3vw,34px);margin-top:clamp(40px,6vh,70px)}
  .pair .fig{aspect-ratio:1/1}
  .pair .fig img{object-position:center 30%}
  @media(max-width:700px){.pair{grid-template-columns:1fr;gap:44px}}

  /* ---------- the pearl dive ---------- */
  .gift{display:grid;grid-template-columns:minmax(0,.62fr) minmax(0,1fr);gap:clamp(34px,5vw,72px);align-items:center;margin-top:clamp(40px,6vh,64px)}
  .gift .cover{border:1px solid var(--line);background:var(--linen)}
  .gift .cover img{aspect-ratio:8.5/11;object-fit:cover;object-position:center top;
    box-shadow:0 16px 38px rgba(29,57,70,.20),0 2px 6px rgba(29,57,70,.12)}
  .giftlist{list-style:none;margin:26px 0 0}
  .giftlist li{padding:11px 0;border-bottom:1px solid var(--line);font-size:.95rem;color:var(--muted);line-height:1.6;max-width:52ch}
  .giftlist li:first-child{border-top:1px solid var(--line)}
  .giftbtn{display:inline-block;margin-top:30px;border:1px solid var(--tan);color:var(--bark);text-decoration:none;font-size:.73rem;letter-spacing:.22em;text-transform:uppercase;padding:18px 40px;transition:background .4s ease,color .4s ease}
  .giftbtn:hover{background:var(--bark);color:var(--paper)}
  .giftnote{margin-top:18px;font-size:.82rem;color:var(--muted);max-width:46ch}
  @media(max-width:880px){.gift{grid-template-columns:1fr;gap:34px}.gift .cover{max-width:330px}}

  .cap{margin-top:12px;font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}

  .pull{text-align:center;padding:clamp(86px,14vh,160px) 0}
  .pull p{font-family:var(--serif);font-size:clamp(1.8rem,4.2vw,2.9rem);line-height:1.3;max-width:22ch;margin:0 auto;color:var(--bark);font-weight:300}
  .pull .attrib{margin-top:26px;font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;color:var(--clay);font-family:var(--sans);font-style:normal;max-width:none}

  .close{text-align:center;padding:clamp(80px,13vh,150px) 0 0}
  .close .mark{font-family:var(--serif);font-style:italic;font-size:clamp(2.2rem,6vw,4.2rem);color:var(--clay);font-weight:300}
  .close .sub{margin:26px auto 0;max-width:44ch;color:var(--muted);font-size:.98rem}
  .close a.cta{display:inline-block;margin-top:34px;border:1px solid var(--tan);color:var(--bark);text-decoration:none;font-size:.73rem;letter-spacing:.22em;text-transform:uppercase;padding:18px 42px;transition:background .4s ease,color .4s ease}
  .close a.cta:hover{background:var(--bark);color:var(--paper)}

  footer{padding:60px 0;margin-top:clamp(66px,10vh,110px);border-top:1px solid var(--line)}
  .fgrid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:22px;font-size:.78rem;color:var(--muted)}
  .disclaimer{margin-top:32px;font-size:.75rem;line-height:1.75;color:#8B7F75;max-width:78ch}
`;
