import { whyChooseUs } from '../data/content';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section__header reveal">
          <p className="section__eyebrow">Working with us</p>
          <h2 id="why-heading" className="section__title section__title--underline">
            Why Choose Us
          </h2>
        </div>

        <ol className="why-list">
          {whyChooseUs.map((item, index) => (
            <li key={item.title} className="why-item reveal">
              <span className="why-item__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WhyChooseUs;
