import { company, contactDetails } from '../data/content';
import './Contact.css';

function Contact() {
  const whatsappReady = Boolean(company.whatsapp);

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">Reach us</p>
          <h2 id="contact-heading" className="section__title section__title--underline">
            Contact
          </h2>
          <p className="section__lead">
            Details below are placeholders until the company confirms them.
          </p>
        </div>

        <dl className="contact-list reveal">
          {contactDetails.map((item) => (
            <div className="contact-item" key={item.label}>
              <dt>
                {item.label}
                {item.isPlaceholder ? (
                  <span className="contact-placeholder-tag">Placeholder</span>
                ) : null}
              </dt>
              <dd>
                {item.key === 'whatsapp' && whatsappReady ? (
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Contact;
