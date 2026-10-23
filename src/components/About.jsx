import { about } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './About.css';

function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about">
          <div className="about__copy reveal">
            <p className="section__eyebrow">Company</p>
            <h2 id="about-heading" className="section__title section__title--underline">
              {about.heading}
            </h2>
            <p>{about.text}</p>
          </div>
          <div className="about__media reveal">
            <PhotoPanel src={about.image} alt={about.imageAlt} />
          </div>
        </div>

        <div className="about-aims">
          {about.aims.map((aim) => (
            <article key={aim.label} className="about-aim reveal">
              <h3 className="about-aim__label">{aim.label}</h3>
              <p>{aim.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
