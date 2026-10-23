import { services } from '../data/content';
import PhotoPanel from './PhotoPanel';
import './Services.css';

function Services() {
  return (
    <section className="section section--alt" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">What we build</p>
          <h2 id="services-heading" className="section__title section__title--underline">
            Services
          </h2>
        </div>

        <ol className="services-list">
          {services.map((service, index) => {
            const imageLeft = index % 2 === 1;
            return (
              <li
                key={service.number}
                id={`service-${service.number}`}
                className={`service-row reveal ${imageLeft ? 'service-row--flip' : ''}`}
              >
                <div className="service-row__text">
                  <span className="service-row__number" aria-hidden="true">
                    {service.number}
                  </span>
                  <h3 className="service-row__title">{service.title}</h3>
                  <p className="service-row__desc">{service.description}</p>
                </div>
                <div className="service-row__media">
                  <PhotoPanel
                    src={service.image}
                    alt={service.imageAlt}
                    label={service.imageLabel}
                    labelVariant="discreet"
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Services;
