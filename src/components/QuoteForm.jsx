import { useState } from 'react';
import { quoteSection, serviceOptions } from '../data/content';
import './QuoteForm.css';

const initialForm = {
  fullName: '',
  contact: '',
  service: '',
  details: '',
};

function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  }

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!form.contact.trim()) next.contact = 'Email or phone is required.';
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.details.trim()) next.details = 'Project details are required.';
    return next;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="section section--alt" id="quote" aria-labelledby="quote-heading">
      <div className="container quote">
        <div className="quote__intro reveal">
          <p className="section__eyebrow">Request</p>
          <h2 id="quote-heading" className="section__title section__title--underline">
            {quoteSection.heading}
          </h2>
          <p className="section__lead">{quoteSection.text}</p>
        </div>

        <form className="quote__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={form.fullName}
              onChange={updateField}
              required
            />
            {errors.fullName ? <span className="error">{errors.fullName}</span> : null}
          </div>

          <div className="form-field">
            <label htmlFor="contact">Email or phone</label>
            <input
              id="contact"
              name="contact"
              type="text"
              autoComplete="tel"
              value={form.contact}
              onChange={updateField}
              required
            />
            <span className="hint">Use whichever contact method you prefer.</span>
            {errors.contact ? <span className="error">{errors.contact}</span> : null}
          </div>

          <div className="form-field">
            <label htmlFor="service">Service required</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={updateField}
              required
            >
              <option value="">Select a service…</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service ? <span className="error">{errors.service}</span> : null}
          </div>

          <div className="form-field">
            <label htmlFor="details">Project details</label>
            <textarea
              id="details"
              name="details"
              value={form.details}
              onChange={updateField}
              required
            />
            {errors.details ? <span className="error">{errors.details}</span> : null}
          </div>

          <button type="submit" className="btn btn--primary">
            Submit request
          </button>

          {submitted ? (
            <div className="form-success" role="status">
              <strong>Prototype only — not sent.</strong>
              <p>
                Thanks, {form.fullName}. In a live site this would go to the company. For
                now, nothing was emailed or saved.
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default QuoteForm;
