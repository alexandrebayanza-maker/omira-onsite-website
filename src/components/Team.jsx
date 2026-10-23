import { teamSection } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './Team.css';

function Team() {
  const { director } = teamSection;

  return (
    <section className="section" id={teamSection.id} aria-labelledby="team-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">{teamSection.eyebrow}</p>
          <h2 id="team-heading" className="section__title section__title--underline">
            {teamSection.heading}
          </h2>
        </div>

        <ul className="team-stats">
          {teamSection.stats.map((stat) => (
            <li key={stat.label} className="team-stat reveal">
              <p className="team-stat__value">{stat.value}</p>
              <p className="team-stat__label">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className="team-layout">
          <p className="team-layout__text reveal">{teamSection.text}</p>
          <article className="director reveal">
            {/* TO CONFIRM: his permission to show this photo before launch. */}
            <PhotoPanel src={director.image} alt={director.imageAlt} />
            <div className="director__body">
              <h3 className="director__name">{director.name}</h3>
              <p className="director__role">{director.role}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Team;
