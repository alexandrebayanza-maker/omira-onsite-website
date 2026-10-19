import { projects, projectsSection } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './Projects.css';

function Projects() {
  const sampleLabel = projectsSection.sampleLabel;

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">Selected work</p>
          <h2 id="projects-heading" className="section__title section__title--underline">
            Projects
          </h2>
          <p className="section__lead">{projectsSection.intro}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-tile project-tile--${project.size} reveal`}
            >
              {project.type === 'before-after' ? (
                <div className="project-tile__pair">
                  <PhotoPanel
                    src={project.beforeImage}
                    alt={`${project.title} — before`}
                    label={sampleLabel}
                    labelVariant="discreet"
                  />
                  <PhotoPanel
                    src={project.afterImage}
                    alt={`${project.title} — after`}
                    label={sampleLabel}
                    labelVariant="discreet"
                  />
                </div>
              ) : (
                <PhotoPanel
                  src={project.image}
                  alt={project.title}
                  label={sampleLabel}
                  labelVariant="discreet"
                  className="project-tile__photo"
                />
              )}
              <h3 className="project-tile__title">{project.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
