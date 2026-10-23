import { company, contactDetails, services, slogan } from '../data/content';
import './Footer.css';

function externalLinkProps(href) {
  if (!href.startsWith('http')) return {};
  return { target: '_blank', rel: 'noopener noreferrer' };
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{company.name}</p>
          <p className="site-footer__slogan">
            {slogan.map((line) => (
              <span key={line} className="site-footer__slogan-line">
                {line}
              </span>
            ))}
          </p>
          <p className="site-footer__line">{company.line}</p>
        </div>

        <nav aria-label="Services">
          <p className="site-footer__label">Services</p>
          <ul className="site-footer__nav">
            {services.map((service) => (
              <li key={service.number}>
                <a href={`#service-${service.number}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="site-footer__label">Contact</p>
          <ul className="site-footer__contact">
            {contactDetails.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} {...externalLinkProps(item.href)}>
                    {item.value}
                  </a>
                ) : (
                  <span className="site-footer__text">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>{company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
