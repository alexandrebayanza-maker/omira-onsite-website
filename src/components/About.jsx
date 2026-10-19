import { about } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './About.css';

function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container about">
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
    </section>
  );
}

export default About;
