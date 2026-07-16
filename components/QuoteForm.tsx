"use client";

import { useState, FormEvent } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Front-end demo only. To receive submissions, POST these values to your
    // backend or a service like Formspree (see README).
    setSent(true);
    form.reset();
  }

  return (
    <div className="form-wrap">
      <h2 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Request a quote</h2>
      <p style={{ color: "var(--muted)" }}>Fields marked * are required.</p>

      {sent && (
        <div className="form-success" role="status">
          ✓ Thanks! Your request has been received. We&apos;ll be in touch within one
          business day.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input type="text" id="name" name="name" required placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="service">Service needed *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                Choose a service…
              </option>
              <option>Residential cleaning</option>
              <option>Commercial / office cleaning</option>
              <option>Deep cleaning</option>
              <option>Move in / move out</option>
              <option>Carpet &amp; upholstery</option>
              <option>Window &amp; specialty</option>
              <option>Not sure — recommend for me</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="frequency">Frequency</label>
            <select id="frequency" name="frequency" defaultValue="">
              <option value="" disabled>
                How often?
              </option>
              <option>One-time</option>
              <option>Weekly</option>
              <option>Bi-weekly</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="address">Property address / area</label>
          <input type="text" id="address" name="address" placeholder="Street, city, or ZIP" />
        </div>

        <div className="field">
          <label htmlFor="message">Tell us about your space</label>
          <textarea
            id="message"
            name="message"
            placeholder="e.g. 3-bed / 2-bath house, roughly 1,600 sq ft, needs a deep clean before guests arrive…"
          />
        </div>

        <button type="submit" className="btn btn--brand btn--lg btn--block">
          Send My Free Quote Request
        </button>
        <p className="form-note">
          By submitting, you agree to be contacted about your request. We never share your
          details.
        </p>
      </form>
    </div>
  );
}
