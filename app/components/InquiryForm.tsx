"use client";

/* The inquiry form, markup unchanged from the original. Used on the home page
   and, with different options, on the immersion page.
   To collect these in your inbox automatically: make a free form at formspree.io and
   pass the id it gives you as `formId`. Until then the button opens the visitor's own
   mail app with everything filled in, so the page works the day it goes live. */

type Props = {
  formId?: string;
  subject?: string;
  selectName?: string;
  selectLabel?: string;
  selectOptions?: string[];
  messageLabel?: string;
  messagePlaceholder?: string;
};

export default function InquiryForm({
  formId = "YOUR_FORM_ID",
  subject = "Inquiry from",
  selectName = "interest",
  selectLabel = "What you are looking for",
  selectOptions = [
    "One to one coaching",
    "A three day immersion",
    "Something for my leadership team",
    "Not sure yet",
  ],
  messageLabel = "What brings you here",
  messagePlaceholder = "As much or as little as you want to say. There is no wrong answer and no one else reads this.",
}: Props) {
  const action = "https://formspree.io/f/" + formId;
  const placeholder = formId.indexOf("YOUR_") === 0;

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    if (!placeholder) return;
    ev.preventDefault();
    const f = ev.currentTarget;
    const g = (n: string) => {
      const el = f.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      return el && el.value ? el.value : "";
    };
    const body =
      "Name: " + g("name") + "\n\nEmail: " + g("email") +
      "\n\n" + selectLabel + ": " + g(selectName) +
      "\n\n" + messageLabel + ":\n" + g("message");
    window.location.href =
      "mailto:hello@lovecandothat.com?subject=" +
      encodeURIComponent(subject + " " + (g("name") || "the website")) +
      "&body=" + encodeURIComponent(body);
  }

  return (
    <form className="formcard rv" id="inquiryform" action={action} method="POST" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="What you would like to be called" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Where I can reach you privately" />
      </div>
      <div className="field">
        <label htmlFor="interest">{selectLabel}</label>
        <select id="interest" name={selectName} defaultValue="">
          <option value="">Choose one</option>
          {selectOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">{messageLabel}</label>
        <textarea id="message" name="message" placeholder={messagePlaceholder}></textarea>
      </div>
      <button className="btn" type="submit">Send it</button>
      <p className="note">
        If a form is not how you want to start, write to <a href="mailto:hello@lovecandothat.com">hello@lovecandothat.com</a>.
      </p>
    </form>
  );
}
