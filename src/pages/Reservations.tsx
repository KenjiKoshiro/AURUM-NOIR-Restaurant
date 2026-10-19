import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  availableTimes,
  localDate,
  reservationError,
} from "../lib/reservation";

export default function Reservations() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Dining");
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const summary = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (complete) summary.current?.focus();
  }, [complete]);

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="page-heading">
        <p className="eyebrow">Explore the experience</p>
        <h1>Plan your evening</h1>
        <p>
          Try a sample reservation. No table is booked, payment taken, or email
          sent. No personal details are needed.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-3">
        <section className="luxury-card p-6 md:p-10 lg:col-span-2">
          {complete ? (
            <div>
              <h2 ref={summary} tabIndex={-1}>
                Your demo plan is ready
              </h2>
              <p className="my-4">This is a simulation, not a reservation.</p>
              <dl className="summary-grid">
                <dt>Date</dt>
                <dd>
                  {new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
                    dateStyle: "long",
                  })}
                </dd>
                <dt>Time</dt>
                <dd>{time}</dd>
                <dt>Guests</dt>
                <dd>{guests}</dd>
                <dt>Occasion</dt>
                <dd>{occasion}</dd>
              </dl>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  className="btn-outline-gold px-6 py-3"
                  onClick={() => setComplete(false)}
                >
                  Edit demo plan
                </button>
                <Link to="/menu" className="btn-gold px-6 py-3">
                  Explore the menu
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const message = reservationError(date, time, guests);
                setError(message);
                if (!message) setComplete(true);
              }}
            >
              <h2 className="mb-6">Sample reservation details</h2>
              {error && (
                <p role="alert" className="mb-4 text-[var(--gold)]">
                  {error}
                </p>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="form-field">
                  Date
                  <input
                    required
                    name="date"
                    type="date"
                    onInput={(e) => {
                      setDate(e.currentTarget.value);
                      setTime("19:00");
                    }}
                    className="luxury-input"
                    value={date}
                    min={localDate()}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setTime("19:00");
                    }}
                  />
                </label>
                <label className="form-field">
                  Time
                  <select
                    className="luxury-input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    {availableTimes(date).map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="form-field">
                  Guests
                  <select
                    className="luxury-input"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-field">
                  Occasion
                  <select
                    className="luxury-input"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    {[
                      "Dining",
                      "Birthday",
                      "Anniversary",
                      "Business dinner",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button className="btn-gold px-6 py-4 mt-8" type="submit">
                <span>Create demo plan</span>
              </button>
            </form>
          )}
        </section>
        <aside className="space-y-6">
          <section className="luxury-card p-6">
            <h2>Sample hours</h2>
            <p className="mt-4 leading-8">
              Mon–Thu: 5pm–10pm
              <br />
              Fri–Sat: 5pm–11pm
              <br />
              Sunday: 4pm–9pm
            </p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Demo arrival slots end one hour before closing.
            </p>
          </section>
          <section className="luxury-card p-6">
            <h2>Private dining</h2>
            <p className="my-4">Explore a sample enquiry for a larger group.</p>
            <Link
              to="/contact?subject=Private%20dining"
              className="btn-outline-gold inline-block px-5 py-3"
            >
              Private dining enquiry
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
