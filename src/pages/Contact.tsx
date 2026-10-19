import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [params] = useSearchParams();
  const [subject, setSubject] = useState(
    params.get("subject") ?? "General enquiry",
  );
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(false);
  return (
    <div className="container mx-auto px-6 py-16">
      <header className="page-heading">
        <p className="eyebrow">A portfolio experience</p>
        <h1>Try an enquiry</h1>
        <p>
          This restaurant is fictional. Preview a message here; nothing is sent
          or stored. Please use fictional information.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="luxury-card p-6 md:p-10">
          <h2 className="mb-6">Demo enquiry</h2>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setPreview(true);
            }}
          >
            <label className="form-field">
              Subject
              <input
                required
                maxLength={120}
                className="luxury-input"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setPreview(false);
                }}
              />
            </label>
            <label className="form-field">
              Message
              <textarea
                required
                maxLength={2000}
                rows={6}
                className="luxury-input"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setPreview(false);
                }}
              />
            </label>
            <button className="btn-gold px-6 py-4" type="submit">
              <span>Preview demo message</span>
            </button>
          </form>
          {preview && (
            <section
              role="status"
              className="mt-8 border-t border-[var(--muted)] pt-6"
            >
              <h3>Demo preview — not sent</h3>
              <p className="mt-3 font-semibold">{subject}</p>
              <p className="mt-3 whitespace-pre-wrap break-words">{message}</p>
            </section>
          )}
        </section>
        <section className="luxury-card p-6 md:p-10">
          <h2>Good to know</h2>
          <dl className="space-y-6 mt-6">
            <div>
              <dt className="font-semibold">Is this a real restaurant?</dt>
              <dd className="mt-2 text-[var(--muted)]">
                No. Aurum & Noir is a portfolio concept. Addresses, menus,
                awards, team stories, and prices are illustrative.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Can I make a booking?</dt>
              <dd className="mt-2 text-[var(--muted)]">
                The reservation page creates a sample plan only.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">What do dietary labels mean?</dt>
              <dd className="mt-2 text-[var(--muted)]">
                They demonstrate menu filtering. They are not verified allergen
                or preparation information.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
