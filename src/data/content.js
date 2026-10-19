/**
 * EDITABLE CONTENT
 * Change text and image paths here — components read from these arrays/objects.
 * Contact fields marked isPlaceholder are not real company details yet.
 */

export const company = {
  name: 'Omira Onsite Ltd',
  shortName: 'Omira',
  footerLine:
    'Omira Onsite Ltd. Steel structures, metalwork, electrical services, and installations.',
  copyright: '© 2026 Omira Onsite Ltd. All rights reserved.',
  // Digits-only WhatsApp link stays empty until a real number is ready
  whatsapp: '',
};

export const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'quote', label: 'Quote' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  tag: 'STEEL • METALWORK • ELECTRICAL',
  headline: 'Built on Site. Built to Last.',
  text: 'Omira Onsite Ltd handles steel structures, metal fabrication, electrical work, and door and window installation, from the first measurement to the final weld.',
  primaryCta: 'Our Services',
  secondaryCta: 'Request a Quote',
  image: '/images/hero.jpg',
  imageAlt: 'On-site steel and metalwork',
};

export const services = [
  {
    number: '01',
    title: 'Warehouse Steel Structures',
    description:
      'Installation of strong steel structures and frameworks for warehouses and industrial buildings.',
    image: '/images/service-warehouse.jpg',
    imageAlt: 'Warehouse steel structures',
  },
  {
    number: '02',
    title: 'Heavy Structural Steel Frameworks and Roofs',
    description:
      'Fabrication and welding of heavy roof trusses, steel frames, and supports for large construction projects.',
    image: '/images/service-roof.jpg',
    imageAlt: 'Heavy structural steel frameworks and roofs',
  },
  {
    number: '03',
    title: 'Residential and Commercial Metalwork',
    description:
      'Custom gates, fences, security doors, windows, handrails, and steel designs, made and fitted on site.',
    image: '/images/service-metalwork.jpg',
    imageAlt: 'Residential and commercial metalwork',
  },
  {
    number: '04',
    title: 'Commercial and Domestic Electrical Services',
    description:
      'Building wiring, electrical installations, maintenance, and troubleshooting for homes and businesses.',
    image: '/images/service-electrical.jpg',
    imageAlt: 'Commercial and domestic electrical services',
  },
  {
    number: '05',
    title: 'Imported Doors and Windows Installation',
    description:
      'Precise fitting of imported metal, aluminium, and security doors, and modern window systems.',
    image: '/images/service-doors.jpg',
    imageAlt: 'Imported doors and windows installation',
  },
];

/**
 * Projects gallery — all photos use the discreet "Sample image" label.
 * For before/after pairs later, set type: 'before-after' with beforeImage + afterImage.
 */
export const projectsSection = {
  intro: 'A look at the type of work we do. Real project photos coming soon.',
  sampleLabel: 'Sample image',
};

export const projects = [
  {
    id: 'p1',
    title: 'Warehouse frame installation',
    type: 'single',
    image: '/images/project-1.jpg',
    size: 'large',
  },
  {
    id: 'p2',
    title: 'Roof truss welding',
    type: 'single',
    image: '/images/project-2.jpg',
    size: 'tall',
  },
  {
    id: 'p3',
    title: 'Custom steel gate',
    type: 'single',
    image: '/images/project-3.jpg',
    size: 'wide',
  },
  {
    id: 'p4',
    title: 'Commercial electrical wiring',
    type: 'single',
    image: '/images/project-4.jpg',
    size: 'wide',
  },
  {
    id: 'p5',
    title: 'Security door fitting',
    type: 'single',
    image: '/images/project-5.jpg',
    size: 'small',
  },
  {
    id: 'p6',
    title: 'Steel staircase and handrail',
    type: 'single',
    image: '/images/project-6.jpg',
    size: 'small',
  },
];

export const about = {
  heading: 'We Work Where the Job Is',
  text: 'Omira Onsite Ltd is a construction services company focused on steelwork, metal fabrication, electrical installations, and door and window fitting. As the name says, we work on site: we measure, build, weld, and install where your project happens. [Company story to be added by the CEO.]',
  image: '/images/about.jpg',
  imageAlt: 'Omira Onsite Ltd on-site work',
};

export const whyChooseUs = [
  {
    title: 'On-site work',
    text: 'We come to your project and do the work where it is needed.',
  },
  {
    title: 'One team, many services',
    text: 'Steel, metalwork, electrical, doors and windows, handled by one company.',
  },
  {
    title: 'Clear quotes',
    text: 'We look at your project and give you a quote before work starts.',
  },
  {
    title: 'Careful finishing',
    text: 'We pay attention to strong welds, clean fitting, and safe installations.',
  },
];

export const quoteSection = {
  heading: 'Tell Us About Your Project',
  text: 'Send us the details and we will get back to you with a quote.',
};

export const serviceOptions = [
  'Warehouse Steel Structures',
  'Heavy Structural Steel Frameworks and Roofs',
  'Residential and Commercial Metalwork',
  'Commercial and Domestic Electrical Services',
  'Imported Doors and Windows Installation',
  'Other / Not sure',
];

/** Contact — all entries are placeholders until real details are confirmed */
export const contactDetails = [
  {
    label: 'Phone',
    value: '+250 7XX XXX XXX',
    isPlaceholder: true,
  },
  {
    label: 'WhatsApp',
    value: '+250 7XX XXX XXX',
    isPlaceholder: true,
    key: 'whatsapp',
  },
  {
    label: 'Email',
    value: 'info@[company-domain]',
    isPlaceholder: true,
  },
  {
    label: 'Location',
    value: 'Kigali, Rwanda (to confirm)',
    isPlaceholder: true,
  },
  {
    label: 'Working hours',
    value: 'Mon to Sat, 8:00 to 17:00 (to confirm)',
    isPlaceholder: true,
  },
];
