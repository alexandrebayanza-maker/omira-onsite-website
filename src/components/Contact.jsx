import { contactDetails } from '../data/content';
import './Contact.css';

function externalLinkProps(href) {
  if (!href.startsWith('http')) return {};
  return { target: '_blank', rel: 'noopener noreferrer' };
}

function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">Reach us</p>
          <h2 id="contact-heading" className="section__title section__title--underline">
            Contact
          </h2>
        </div>

        <dl className="contact-list reveal">
          {contactDetails.map((item) => (
            <div className="contact-item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? (
                  <a href={item.href} {...externalLinkProps(item.href)}>
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
