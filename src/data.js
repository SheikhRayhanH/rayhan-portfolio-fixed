// ALL editable content lives here.
export const profile = {
  name: 'Md. Rayhan Sheikh Rahat',
  initials: 'RSR',
  role: 'Web Developer / Full-Stack Developer',
  email: 'sheikhrayhanraht@gmail.com',
  phone: '+8801331997732',
  location: 'Dhaka, Bangladesh',
  availability: 'Open to work & freelance',
  github: 'https://github.com/your-username', // TODO: replace
  linkedin: 'https://www.linkedin.com/in/your-username', // TODO: replace
  photo: '/assets/profile.jpg', // file: public/assets/profile.jpg
  cvUrl: '/assets/Rayhan-Sheikh-Rahat-CV.pdf', // file: public/assets/Rayhan-Sheikh-Rahat-CV.pdf
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroTech = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js'];

export const skills = [
  { title: 'Frontend', icon: '</>', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Backend', icon: '⚙', items: ['Node.js', 'PHP', 'Laravel (learning)'] },
  { title: 'Other', icon: '◐', items: ['Responsive Web Design', 'UI/UX', 'Website Maintenance', 'IT Support'] },
];

export const experience = [
  {
    role: 'Jr. Officer — ERP (MIS)',
    company: 'Muazuddin Textile Ltd.',
    period: 'July 2024 – June 2025',
    place: 'Gazipur',
    points: ['Managed ERP data systems', 'Prepared MIS reports', 'Maintained data accuracy', 'Provided technical support to ERP users', 'Improved reporting efficiency'],
  },
  {
    role: 'Executive — IT (Intern)',
    company: 'BABUE, TUTAN TECHNOLOGY',
    period: 'June 2023 – December 2023',
    place: 'Dhaka',
    points: ['Provided IT technical support', 'Assisted with company website maintenance', 'Monitored and prototyped CCTV systems'],
  },
];

// image: put screenshots in public/projects/ and use e.g. '/projects/hb-textiles.jpg'. Leave '' for a placeholder.
// github: leave '' to hide the GitHub button.
export const projects = [
  {
    title: 'HB Textiles Bangladesh',
    description: 'A responsive multi-section website, designed and built by me with a clean, easy-to-scan layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript'], // TODO: adjust to what you really used
    image: '/projects/hb-textiles.jpg',
    live: 'https://hb-textiles-bangladesh-byrayhan.netlify.app',
    github: '',
  },
  {
    title: 'Arafat Pharmacy',
    description: 'A responsive pharmacy website, designed and built by me with a simple, clear navigation flow.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/arafat-pharmacy.jpg',
    live: 'https://arafat-pharmacy-by-rayhan.netlify.app',
    github: '',
  },
  {
    title: 'Frontend Web Project',
    description: 'A responsive frontend project focused on layout, spacing and clean UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/frontend-project.jpg',
    live: 'https://rayhanshweb.netlify.app',
    github: '',
  },
];

