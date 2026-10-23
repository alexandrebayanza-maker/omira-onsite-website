import { featuredProject } from '../data/content';
import BeforeAfter from './BeforeAfter';
import PhotoPanel from './PhotoPanel';
import './Projects.css';

function Projects() {
  return (
    <section
      className="section"
      id={featuredProject.id}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">{featuredProject.eyebrow}</p>
          <h2 id="projects-heading" className="section__title section__title--underline">
            {featuredProject.title}
          </h2>
          <p className="section__lead">{featuredProject.text}</p>
        </div>

        <dl className="project-facts reveal">
          {featuredProject.details.map((item) => (
            <div key={item.label} className="project-facts__item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="reveal">
          <BeforeAfter before={featuredProject.before} after={featuredProject.after} />
        </div>

        <div className="journey-block">
          <h3 className="journey-block__title">{featuredProject.journeyHeading}</h3>
          <ol className="journey">
            {featuredProject.journey.map((step) => (
              <li key={step.number} className="journey__step reveal">
                <span className="journey__index" aria-hidden="true">
                  {step.number}
                </span>
                <div className="journey__body">
                  <PhotoPanel src={step.image} alt={step.imageAlt} />
                  <h4 className="journey__title">{step.title}</h4>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Projects;
