import { useEffect, useState } from 'react';
import { company, navLinks } from '../data/content';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__stripe" aria-hidden="true" />
      <div className="container site-header__inner">
        <a href="#top" className="site-logo" onClick={handleNavClick}>
          {/* Light-mode logo */}
          <img
            className="site-logo__img site-logo__img--light"
            src="/logo-light.jpeg"
            alt={`${company.name} logo`}
            width="160"
            height="56"
          />
          {/* Dark-mode logo slot — add /logo-dark.png later (white/light version) */}
          <img
            className="site-logo__img site-logo__img--dark"
            src="/logo-dark.png"
            alt={`${company.name} logo`}
            width="160"
            height="56"
            onError={(event) => {
              // Fall back to light logo until dark version is added
              event.currentTarget.src = '/logo-light.jpeg';
            }}
          />
        </a>

        <nav
          id="primary-nav"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="btn btn--primary site-nav__cta"
            onClick={handleNavClick}
          >
            Get a Free Quote
          </a>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
