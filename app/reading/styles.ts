/* Reading page stylesheet — ported verbatim from original/reading.html.
   This is a finished design: do not restructure or "clean up" these rules.
   Only the --serif/--sans definitions changed, to use the self-hosted
   next/font versions of the same typefaces. */

export const css = `
  :root{
    --paper:#FBF8F2;--sand:#F2EBE0;--linen:#E7DDCD;--tan:#D3C2AA;
    --clay:#A8815C;--cocoa:#6E5A48;--bark:#3B2F26;--ink:#2C231C;--muted:#71645A;
    --line:rgba(59,47,38,.16);
    --serif:var(--font-serif),"Cormorant Garamond",Iowan Old Style,Palatino,Georgia,serif;
    --sans:var(--font-sans),"Jost",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--paper);color:var(--ink);font-family:var(--sans);font-weight:300;font-size:17.5px;line-height:1.8;-webkit-font-smoothing:antialiased}
  .wrap{max-width:760px;margin:0 auto;padding:0 34px}
  @media(max-width:600px){.wrap{padding:0 24px}}
  h1{font-family:var(--sans);font-weight:300;font-size:clamp(2.1rem,5.4vw,3.4rem);line-height:1.1;letter-spacing:-.02em;max-width:17ch}
  h2{font-family:var(--sans);font-weight:300;font-size:clamp(1.4rem,3vw,1.9rem);line-height:1.2;letter-spacing:-.015em;margin-top:0}
  i,em{font-family:var(--serif);font-style:italic;font-weight:400;font-size:1.09em}
  p{max-width:62ch}p+p{margin-top:1.25em}
  .eyebrow{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--clay)}
  .dim{color:var(--muted)}
  header{padding:clamp(70px,11vh,120px) 0 clamp(46px,7vh,70px)}
  header h1{margin:24px 0 26px}
  header .lede{font-size:1.15rem;color:var(--cocoa);max-width:46ch}
  section{padding:clamp(48px,7vh,76px) 0;border-top:1px solid var(--line)}
  .grp{margin-top:34px}
  .item{padding:24px 0;border-bottom:1px solid var(--line)}
  .item:first-child{border-top:1px solid var(--line)}
  .item a{text-decoration:none;display:block}
  .item .t{display:block;font-size:1.03rem;line-height:1.5;color:var(--ink);transition:color .3s ease;max-width:56ch}
  .item a:hover .t{color:var(--clay)}
  .item .s{display:block;margin-top:7px;font-size:.76rem;letter-spacing:.1em;text-transform:uppercase;color:var(--clay);opacity:.85}
  .item .f{display:block;margin-top:9px;font-size:.93rem;color:var(--muted);line-height:1.7;max-width:60ch}
  .callout{background:var(--sand);padding:34px;margin-top:34px}
  .callout p{font-size:.97rem;color:var(--cocoa)}
  footer{padding:56px 0 64px;border-top:1px solid var(--line);margin-top:20px}
  .mark{font-family:var(--serif);font-style:italic;font-size:2rem;color:var(--clay);font-weight:300}
  .fine{margin-top:22px;font-size:.75rem;line-height:1.75;color:#8B7F75}
  a.plainlink{color:var(--clay);text-decoration:none;border-bottom:1px solid var(--tan)}
`;
