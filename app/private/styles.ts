/* Private page stylesheet. The page runs the same earth palette and layout
   primitives as the home page, so it builds on that stylesheet and adds only
   the password gate and the citation list. Do not restructure the base rules. */

import { css as base } from "../styles";

export const css =
  base +
  `
  .topbar{padding:26px 0 0}
  .back{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);text-decoration:none;display:inline-flex;gap:12px;align-items:center}
  .back span{width:30px;height:1px;background:var(--tan);display:block}
  .back:hover{color:var(--clay)}

  /* ---------- the gate ---------- */
  .gate{min-height:100svh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 24px}
  .gate .box{max-width:400px;width:100%}
  .gate h1{font-size:clamp(1.8rem,4.4vw,2.6rem);margin:20px 0 18px}
  .gate p{margin:0 auto;color:var(--muted);font-size:.98rem;max-width:34ch}
  .gate form{margin-top:38px}
  .gate label{text-align:center}
  .gate input{text-align:center;font-size:1.1rem;letter-spacing:.08em}
  .gate .btn{width:100%;margin-top:24px}
  .gate .err{margin-top:20px;font-size:.86rem;color:#9C4A32;min-height:1.4em}

  .callout{background:var(--sand);padding:34px;margin-top:38px;max-width:780px}
  .callout p{font-size:.97rem;color:var(--cocoa)}
  a.plainlink{color:var(--clay);text-decoration:none;border-bottom:1px solid var(--tan)}
`;
