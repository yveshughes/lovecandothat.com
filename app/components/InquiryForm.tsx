"use client";

/* The inquiry form, markup unchanged from the original.
   To collect these in your inbox automatically: make a free form at formspree.io and
   replace YOUR_FORM_ID below with the id it gives you. Until then the button opens the
   visitor's own mail app with everything filled in, so the page works the day it goes live. */

const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID";

export default function InquiryForm() {
  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    if (FORM_ACTION.indexOf("YOUR_FORM_ID") === -1) return;
    ev.preventDefault();
    const f = ev.currentTarget;
    const g = (n: string) => {
      const el = f.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      return el && el.value ? el.value : "";
    };
    const body =
      "Name: " + g("name") + "\n\nEmail: " + g("email") +
      "\n\nDone this before: " + g("experience") +
      "\n\nWhat brings me here:\n" + g("message");
    window.location.href =
      "mailto:hello@lovecandothat.com?subject=" +
      encodeURIComponent("Inquiry from " + (g("name") || "the website")) +
      "&body=" + encodeURIComponent(body);
  }

  return (
    <form className="formcard rv" id="inquiryform" action={FORM_ACTION} method="POST" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="What you would like to be called" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Where I can reach you privately" />
      </div>
      <div className="field">
        <label htmlFor="state">Have you done this kind of work before</label>
        <select id="state" name="experience" defaultValue="">
          <option value="">Choose one</option>
          <option>Never</option>
          <option>Once or twice, not in a legal setting</option>
          <option>Yes, with a facilitator</option>
          <option>Rather talk about it than type it</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">What brings you here</label>
        <textarea id="message" name="message" placeholder="As much or as little as you want to say. There is no wrong answer and no one else reads this."></textarea>
      </div>
      <button className="btn" type="submit">Send it</button>
      <p className="note">
        If a form is not how you want to start, write to <a href="mailto:hello@lovecandothat.com">hello@lovecandothat.com</a>.
      </p>
    </form>
  );
}
