/**
 * EDITABLE CONTENT
 * Change text and image paths here — components read from these arrays/objects.
 */

export const company = {
  name: 'OMIRAN ON-SITE LTD',
  shortName: 'Omiran',
  line: 'On-site welding, steel structures, and electrical services across Rwanda.',
  copyright: '© 2026 OMIRAN ON-SITE LTD. All rights reserved.',
  phone: '+250 791 825 418',
  phoneHref: 'tel:+250791825418',
  /** Digits only, country code, no + or spaces. */
  whatsapp: '250791825418',
  whatsappMessage: 'Hello Omiran On-Site, I would like a quote for...',
  // TO CONFIRM: email spelling
  email: 'omiranonisite@gmail.com',
  websiteLabel: 'omiranonsite.rw',
  websiteHref: 'https://omiranonsite.rw',
};

export function whatsappHref() {
  const text = encodeURIComponent(company.whatsappMessage);
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}

/** Hero and footer each stack these as three lines. */
export const slogan = [
  'Weld for Strength.',
  'Build for Trust.',
  'Power for Life.',
];

export const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'quote', label: 'Quote' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  tag: 'ON-SITE WELDING • STEEL STRUCTURES • ELECTRICAL',
  headline: slogan,
  text: "We deliver heavy-duty welding, electrical solutions, and structural installations directly to our clients' sites across Rwanda. We don't just build structures, we build lasting trust.",
  primaryCta: 'Our Services',
  secondaryCta: 'Request a Quote',
  image: '/images/hero-rutare-roof.jpg',
  imageAlt:
    'Red steel roof framework under construction at Rutare, with two chimneys behind the building',
};

export const services = [
  {
    number: '01',
    title: 'Heavy Structural Steel Frameworks (Roofs)',
    description:
      'Fabrication and professional welding of heavy-duty steel roof frames, trusses, and supports for large-scale commercial, industrial, and institutional projects.',
    image: '/images/truss-assembly.jpg',
    imageAlt: 'Worker assembling red steel roof trusses on a building frame',
  },
  {
    number: '02',
    title: 'All Residential & Commercial Metalwork',
    description:
      'On-site metal fabrication and welding for homes and commercial buildings: custom steel designs, gates, fences, safety doors, windows, handrails, and structural metal installations.',
    image: '/images/site-gate.jpg',
    imageAlt: 'Metal site gate in front of industrial buildings',
  },
  {
    number: '03',
    title: 'Imported Doors & Windows Installation',
    description:
      'Professional on-site installation and precise fitting of high-quality imported metal, aluminium, and security doors, and modern window systems.',
    image: '/images/framework-install.jpg',
    imageAlt: 'Crew lifting a steel beam into place on a concrete frame',
    imageLabel: 'Photo coming soon',
  },
  {
    number: '04',
    title: 'Commercial & Domestic Electrical Services',
    description:
      'Complete building wiring, electrical system installations, maintenance, and troubleshooting for homes and businesses.',
    image: '/images/welder-on-site.jpg',
    imageAlt: 'OMIRAN ON-SITE LTD worker beside a steel framework on site',
    imageLabel: 'Photo coming soon',
  },
  {
    number: '05',
    title: 'Warehouse Steel Structures',
    description:
      'Precise installation of durable steel structures and frameworks for commercial warehouses and industrial buildings.',
    image: '/images/rutare-finished-roof.jpg',
    imageAlt: 'Finished blue steel warehouse roof at the Rutare site',
  },
];

/** Featured project. Nav “Projects” points at this section. */
export const featuredProject = {
  id: 'projects',
  eyebrow: 'Featured project',
  title: 'Rutare Brick Manufacturing',
  text: 'Our flagship project: the full structural fabrication and installation of the industrial roof for Rutare Brick Manufacturing, built to support large-scale factory operations.',
  details: [
    { label: 'Location', value: 'Gahengeri, Rwamagana' },
    {
      label: 'Scope',
      value:
        'Complete fabrication and installation of the heavy-duty industrial roofing framework',
    },
    { label: 'Status', value: 'Completed' },
  ],
  before: {
    label: 'Before',
    image: '/images/rutare-before.jpg',
    imageAlt:
      'Rutare site before the roof, with an open steel framework and timber scaffolding',
  },
  after: {
    label: 'After',
    image: '/images/rutare-after.jpg',
    imageAlt:
      'Rutare site after the roof, a blue industrial building with two chimneys',
  },
  journeyHeading: 'Project journey',
  journey: [
    {
      number: '01',
      title: 'Assembling the roof trusses',
      image: '/images/truss-assembly.jpg',
      imageAlt: 'Worker assembling red steel roof trusses on a building frame',
    },
    {
      number: '02',
      title: 'Raising the framework',
      image: '/images/roof-framework-progress.jpg',
      imageAlt: 'Red steel roof framework raised on scaffolding at the Rutare site',
    },
    {
      number: '03',
      title: 'Welding with full protective gear',
      image: '/images/welder-on-site.jpg',
      imageAlt: 'Welder in full protective gear beside the steel framework',
    },
    {
      number: '04',
      title: 'Final installation and handover',
      image: '/images/rutare-finished-roof.jpg',
      imageAlt: 'Finished blue steel roof handed over at the Rutare site',
    },
  ],
};

export const about = {
  heading: 'Built From Field Experience',
  text: 'OMIRAN ON-SITE LTD is a Rwandan limited liability company providing professional on-site welding and electrical services to the construction sector. We combine long field experience with modern engineering knowledge to deliver high-precision work for commercial, industrial, institutional, and residential projects. Before our official registration, our team had already completed many welding and electrical projects, building a strong reputation for reliability.',
  image: '/images/team-on-site.jpg',
  imageAlt:
    'OMIRAN ON-SITE LTD crew in high-visibility vests beside a red steel roof frame',
  aims: [
    {
      label: 'Vision',
      text: 'To be the most trusted on-site welding service provider in Rwanda by 2031, empowering construction companies, engineers, and individuals through fast, safe, and high-quality solutions.',
    },
    {
      label: 'Mission',
      text: 'To provide high-quality welding and electrical services to our partners, delivering heavy-duty steel frameworks, warehouse structures, metalwork, door and window installations, and electrical services within short, well-planned timelines.',
    },
  ],
};

export const teamSection = {
  id: 'team',
  eyebrow: 'People',
  heading: 'Our Team',
  stats: [
    {
      value: '18+ years',
      label: "Technical Director's welding experience",
    },
    { value: '2', label: 'civil engineers' },
    { value: '1', label: 'electrical engineer' },
    { value: '4', label: 'deployment teams' },
  ],
  text: 'Our Technical Department is led by a Technical Director with over 18 years of structural welding experience, working with two civil engineers and one electrical engineer. Every project is planned before work starts: scope, cost estimate, and timeline. Our four deployment teams, each with five certified welders and a team leader, can work on four sites at the same time.',
  director: {
    // TO CONFIRM: his permission to show this photo before launch.
    image: '/images/technical-director.jpg',
    imageAlt: 'Technical Director standing beside a red steel frame on site',
    name: '[Name to confirm]',
    role: 'Technical Director',
  },
};

export const whyChooseUs = [
  {
    number: '01',
    title: 'Speed, Secure Materials, Quality Work',
    text: 'Fast work, secured materials, and skilled craftsmanship to reduce rework and protect quality.',
  },
  {
    number: '02',
    title: '24/7 Rotational Shifts',
    text: 'Day and night welding shifts keep projects moving while staying safe and precise.',
  },
  {
    number: '03',
    title: 'Two-Year Service Warranty',
    // TO CONFIRM: warranty terms with CEO before launch
    text: 'A two-year warranty covering corrective work if an operational defect appears.',
  },
  {
    number: '04',
    title: 'On-Site Safety',
    text: 'Strict PPE rules on every site and insurance for our workforce.',
  },
  {
    number: '05',
    title: 'Clear, Milestone-Based Pricing',
    text: 'Clear pricing by project stage, so you can control your budget with no surprise charges.',
  },
];

export const equipmentStrip = {
  text: 'We own our equipment: mobile welding generators, precision metal cutters, and electrical testing tools, so we can work on sites without grid power.',
};

export const quoteSection = {
  heading: "Let's Build the Future Together",
  text: 'Tell us about your project. We help construction firms, developers, and homeowners deliver work safely, efficiently, and to the required standard.',
};

export const serviceOptions = [
  ...services.map((service) => service.title),
  'Other / Not sure',
];

export const contactDetails = [
  {
    label: 'Phone',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    label: 'WhatsApp',
    value: company.phone,
    href: whatsappHref(),
  },
  {
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: 'Location',
    value: 'Remera, Kisment, KN 5, Kigali, Rwanda',
  },
  {
    label: 'Website',
    value: company.websiteLabel,
    href: company.websiteHref,
  },
];
