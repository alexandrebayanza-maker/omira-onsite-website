import { hero } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div className="hero__content container">
          <p className="hero__tag">{hero.tag}</p>
          <h1 id="hero-heading" className="hero__title">
            {hero.headline}
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">
              {hero.primaryCta}
            </a>
            <a href="#quote" className="btn btn--ghost">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__media">
          <PhotoPanel
            src={hero.image}
            alt={hero.imageAlt}
            className="hero__photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
