export const profile = {
  name: 'Shiv Kumar',
  roles: ['Java Developer', 'Spring Boot Engineer', 'Data Migration Engineer', 'AI Agent Builder'],
  summary:
    'Full stack Java developer with 1.5+ years of experience across application layers, presentation layers and databases. Certified in front end and back end technology, and motivated to grow in Big Data.',
  email: 'kshiv.dot@gmail.com',
  phones: ['+91 8210385661', '+91 7050753895'],
  location: 'Munger, Bihar',
  resume: '/Resume/Shiv_Kumar-Resume.pdf',
  github: 'https://github.com/Shiv-96',
  linkedin: 'https://www.linkedin.com/in/shiv-k-355a83216/',
  whatsapp: 'https://wa.me/917050753895',
}

export const experience = [
  {
    company: 'Cotrafix Technologies Pvt. Ltd',
    title: 'Junior Software Engineer',
    period: 'Oct 2026 - Present',
    points: [
      'Working on a data migration project, moving data from existing systems into a new target database.',
      'Mapping source and target schemas and writing transformation logic so records stay consistent after the move.',
      'Validating migrated data with record counts and reconciliation checks to catch missing or duplicate records.',
      'Finding and fixing data quality issues found during migration runs.',
    ],
    tech: ['Java', 'SQL', 'MySQL', 'Data Migration'],
  },
  {
    company: 'Fintek Software Services Pvt. Ltd',
    title: 'Java Developer',
    period: 'Mar 2025 - Sep 2026',
    points: [
      'Built AI-based agent systems using Python.',
      'Enhanced backend modules in Java applications.',
      'Wrote unit and integration tests to make releases more reliable.',
      'Implemented Retrieval-Augmented Generation (RAG) pipelines and tuned prompts to improve response quality.',
    ],
    tech: ['Java', 'Python', 'RAG', 'Prompt Engineering', 'JUnit'],
  },
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Hibernate', 'Spring Data JPA', 'MySQL', 'REST APIs'] },
  { group: 'AI and data', items: ['Python', 'RAG pipelines', 'Prompt optimization', 'Data migration'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'] },
]

export const tools = [
  ['VS Code', 'vscode_icon.png'], ['Eclipse', 'eclipse.png'], ['STS', 'spring-tool-suite-icon.png'],
  ['Postman', 'postman-icon.png'], ['Maven', 'maven.png'], ['GitHub', 'github.png'], ['Swagger', 'swagger-icon.png'],
]

export const projects = [
  {
    title: 'Smile Harbor: Dental Clinic Website', type: 'frontend', img: 'smile-harbor.webp', note: 'Client-style concept project',
    desc: 'A fast, accessible website for a fictional dental clinic in Pune, with services and pricing, doctor profiles, a keyboard-friendly FAQ and an appointment form with validation and spam protection through Netlify Forms (no backend).',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Netlify Forms', 'SEO'],
    links: [['GitHub', 'https://github.com/Shiv-96/smile-harbor-dental-nextjs'], ['Live site', 'https://smile-harbor-dental-care.netlify.app/']],
  },
  {
    title: 'Zafraan: Restaurant Website', type: 'frontend', img: 'zafraan.webp', note: 'Client-style concept project',
    desc: 'A responsive website for a fictional Awadhi restaurant in Lucknow, with a filterable veg/non-veg menu, gallery lightbox, dark/light theme and online table booking through Netlify Forms (no backend).',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Netlify Forms', 'SEO'],
    links: [['GitHub', 'https://github.com/Shiv-96/zafraan-restaurant'], ['Live site', 'https://zafraan-lucknow.netlify.app/']],
  },
  {
    title: 'Online Shopping Application', type: 'backend', img: 'online_shopping_application.png',
    desc: 'Spring Boot REST APIs with full CRUD for an online store, with separate access for Admin and Customer users.',
    tech: ['Java', 'MySQL', 'Spring Boot', 'Maven', 'Lombok', 'Spring Data JPA'],
    links: [['GitHub', 'https://github.com/Shiv-96/Online-Shopping-Application'], ['Demo video', 'https://drive.google.com/file/d/195cb9BZIeYorRh9MI6zaN21K4ZoeOTvN/view']],
  },
  {
    title: 'Amusement Park Application', type: 'backend', img: 'AmusementParkApplication.png', note: 'Team project',
    desc: 'Spring Boot REST APIs for managing park activities, with role-based access for Admin and Customer users.',
    tech: ['Java', 'MySQL', 'Spring Boot', 'Maven', 'Lombok', 'Spring Data JPA'],
    links: [['GitHub', 'https://github.com/SubhadeepBid/Amusement-Park-Application'], ['Demo video', 'https://drive.google.com/file/d/1M_MO7uC3gaH2bgrjPWcy-fzk0NPRCKLf/view']],
  },
  {
    title: 'Zara Clone', type: 'frontend', img: 'zara.png',
    desc: 'An e-commerce storefront where visitors can browse and buy clothing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    links: [['GitHub', 'https://github.com/Shiv-96/WEB-18-ZARA.COM-CLONE-WEBSITE-'], ['Live site', 'https://wonderful-bombolone-a5b620.netlify.app/']],
  },
  {
    title: 'Apollo 24X7 Clone', type: 'frontend', img: 'apollo.png', note: 'Team project',
    desc: 'A healthcare site with doctor booking and online consultation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    links: [['GitHub', 'https://github.com/ahmad-DS/WEB18-APOLLO24X7'], ['Live site', 'https://calm-alpaca-414005.netlify.app/']],
  },
  {
    title: 'DSA Revision Tracker', type: 'frontend', img: 'dsa.png',
    desc: 'Track which DSA questions you have solved, flag the hard ones and come back to revise them.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    links: [['GitHub', 'https://github.com/Shiv-96/DSA_Revision'], ['Live site', 'https://keen-cendol-2d3bcd.netlify.app/']],
  },
  {
    title: 'Calculator', type: 'frontend', img: 'calculator.png',
    desc: 'A calculator for addition, subtraction, multiplication and division.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    links: [['GitHub', 'https://github.com/Shiv-96/Calculator'], ['Live site', 'https://kaleidoscopic-brigadeiros-a1712b.netlify.app/']],
  },
]
