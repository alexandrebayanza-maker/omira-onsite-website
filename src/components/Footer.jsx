import { company, contactDetails, navLinks } from '../data/content';
import './Footer.css';

function Footer() {
  const phone = contactDetails.find((item) => item.label === 'Phone')?.value;
  const email = contactDetails.find((item) => item.label === 'Email')?.value;
  const location = contactDetails.find((item) => item.label === 'Location')?.value;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{company.name}</p>
          <p className="site-footer__text">{company.footerLine}</p>
        </div>

        <nav aria-label="Footer">
          <p className="site-footer__label">Navigate</p>
          <ul className="site-footer__nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="site-footer__label">Contact</p>
          <p className="site-footer__text">{phone}</p>
          <p className="site-footer__text">{email}</p>
          <p className="site-footer__text">{location}</p>
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
