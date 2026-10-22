/**
 * Central portfolio data — generated from Shree Raksha's resume (Shree_Raksha_Sivasubramani_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shree Raksha Sivasubramani',
  displayName: 'Shree Raksha',
  firstName: 'SHREE RAKSHA',
  seriesTag: 'DATA ANALYST',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SIVASUBRAMANI ORIGINAL',
  role: 'Senior Data Analyst & Technical Consultant',
  tagline: ['Data Migration', 'Analytics', 'AI Integration'],
  intro:
    'A Senior Data Analyst & Technical Consultant (MS Data Analytics, GPA 3.94) with 2+ years of experience in cloud data platforms, business intelligence, and data-driven analytics. Skilled in Python, SQL, Tableau, and cloud technologies including Snowflake, AWS, and enterprise data integration across pharmaceutical and supply chain domains.',
  location: 'Worcester, MA',
  email: 'shreerakshu02@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rakshasivasubramani',
    github: 'https://github.com/Rakshu2141',
  },
  resumePdf: '/assets/Shree_Raksha_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Shree Raksha Sivasubramani',
  },
  interests: ['Data Pipeline Architecture', 'Cloud Migration', 'AI-Powered Analytics'],
};

export const education = [
  {
    school: 'Clark University',
    place: 'Worcester, MA',
    degree: 'Master of Science — Data Analytics (STEM)',
    period: 'December 2023',
    score: 'GPA 3.94/4.0',
  },
  {
    school: 'PSG College of Technology',
    place: 'Coimbatore, India',
    degree: 'Bachelor of Technology — Information Technology',
    period: 'May 2022',
    score: 'GPA 8.5/10',
  },
];

export const experience = [
  {
    company: 'Marlabs LLC',
    role: 'Data Analyst / Technical Consultant',
    place: 'Boston, MA',
    period: 'July 2025 – Present',
    points: [
      'Leading SAP HANA migration from ECC 6.0, architecting data pipelines using dbt Cloud and Palantir Foundry to modernize pharmaceutical analytics infrastructure.',
      'Integrated AI-powered tools to streamline data workflows, reducing manual data processing time by 40% and improving data quality across multiple systems.',
      'Collaborated with cross-functional teams to design scalable cloud-based solutions on Snowflake and AWS S3, supporting real-time analytics for pharmaceutical operations.',
    ],
  },
  {
    company: 'Enterprise Solutions Inc',
    role: 'Business Analyst / Technical Consultant',
    place: 'Naperville, IL',
    period: 'June 2024 – July 2025',
    points: [
      'Drove SAP system integration initiatives across B2B supply chain operations, implementing Fivetran for automated data synchronization between SAP ECC and cloud warehouses.',
      'Designed and executed data migration strategies that reduced system downtime by 35% during critical business periods.',
      'Developed comprehensive documentation and training materials for cross-functional teams on new data systems and workflows.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Data Analyst Intern',
    place: 'Bangalore, India',
    period: 'February 2022 – July 2022',
    points: [
      'Analyzed 3M+ data points to identify operational inefficiencies, resulting in actionable insights that improved process efficiency by 25%.',
      'Built machine learning models for predictive analytics and created interactive Tableau dashboards for executive decision-making.',
      'Collaborated with senior analysts to optimize SQL queries, reducing report generation time by 45%.',
    ],
  },
  {
    company: 'Samsung',
    role: 'User Interface Intern',
    place: 'Bangalore, India',
    period: 'May 2021 – January 2022',
    points: [
      'Developed Server-Driven UI framework using React Native and Node.js, enabling dynamic interface updates without app deployments.',
      'Implemented backend data models and REST APIs to support flexible UI configurations across multiple device types.',
      'Reduced UI update deployment time by 70% through the server-driven architecture.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'imdb-sentiment',
    title: 'IMDB Sentiment Analysis',
    year: '2023',
    genre: 'NLP • Machine Learning • Python',
    logline: 'Applied NLP techniques in Python to perform sentiment analysis on large-scale textual user review datasets.',
    stack: ['Python', 'NLP', 'LSTM', 'BERT', 'Pandas'],
    build: [
      'Applied NLP techniques in Python to perform sentiment analysis on large-scale IMDB movie review datasets.',
      'Built sentiment classification models using advanced techniques including LSTM and BERT embeddings for accurate text analysis.',
    ],
    features: [
      'LSTM & BERT embeddings',
      'Large-scale textual analysis',
      'Sentiment classification',
      'Academic research project',
      'Python NLP implementation',
    ],
    metrics: [
      { value: 'NLP', label: 'techniques used' },
      { value: 'Python', label: 'primary language' },
      { value: 'Academic', label: 'project type' },
      { value: 'Clark', label: 'university' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'temu-analytics',
    title: 'Temu Supply Chain Analytics',
    year: '2023',
    genre: 'Tableau • Analytics • Visualization',
    logline: 'Constructed interactive Tableau dashboards to optimize warehouse allocation and logistics management.',
    stack: ['Tableau', 'SQL', 'Data Visualization', 'Supply Chain'],
    build: [
      'Constructed interactive Tableau dashboards to optimize warehouse allocation and logistics management for Temu supply chain operations.',
      'Analyzed supply chain data to improve warehouse efficiency and logistics planning through data-driven insights.',
    ],
    features: [
      'Interactive Tableau dashboards',
      'Warehouse optimization',
      'Logistics management',
      'Supply chain analytics',
      'Data visualization',
    ],
    metrics: [
      { value: 'Tableau', label: 'platform' },
      { value: 'Supply Chain', label: 'domain' },
      { value: 'Academic', label: 'project type' },
      { value: 'Clark', label: 'university' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'la-crime-splunk',
    title: 'LA Crime Analysis',
    year: '2023',
    genre: 'Splunk • Data Analysis • Public Safety',
    logline: 'Processed municipal datasets in Splunk Enterprise to highlight pattern trends and demographic distribution.',
    stack: ['Splunk', 'Data Analysis', 'Pattern Recognition', 'Visualization'],
    build: [
      'Processed municipal crime datasets in Splunk Enterprise to highlight pattern trends and demographic distribution across Los Angeles.',
      'Analyzed crime data to identify trends, patterns, and demographic insights using Splunk for data processing and visualization.',
    ],
    features: [
      'Splunk Enterprise analysis',
      'Pattern trend identification',
      'Demographic distribution',
      'Municipal dataset processing',
      'Crime analytics',
    ],
    metrics: [
      { value: 'Splunk', label: 'platform' },
      { value: 'Municipal', label: 'data source' },
      { value: 'Academic', label: 'project type' },
      { value: 'Clark', label: 'university' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'secure-ota',
    title: 'Secure OTA Update System',
    year: '2022',
    genre: 'Security • IoT • Encryption',
    logline: 'Implemented AES encryption on cloud networks for secure vehicle software deployment.',
    stack: ['AES Encryption', 'Cloud Networks', 'IoT', 'Security', 'Python'],
    build: [
      'Implemented AES encryption on cloud networks for secure vehicle software deployment via Over-The-Air (OTA) updates.',
      'Designed secure communication protocols ensuring vehicle software updates are encrypted and protected from unauthorized access.',
    ],
    features: [
      'AES encryption implementation',
      'Cloud-based OTA updates',
      'Vehicle software security',
      'Secure deployment protocols',
      'IoT security architecture',
    ],
    metrics: [
      { value: 'AES', label: 'encryption' },
      { value: 'Vehicle', label: 'application' },
      { value: 'Academic', label: 'project type' },
      { value: 'PSG', label: 'college' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'heart-disease-ml',
    title: 'Heart Disease Prediction Model',
    year: '2022',
    genre: 'Machine Learning • Healthcare • Prediction',
    logline: 'Developed an ensemble multi-level stacking model for predictive diagnosis of heart disease.',
    stack: ['Python', 'Machine Learning', 'Ensemble Methods', 'Healthcare', 'Predictive Analytics'],
    build: [
      'Developed an ensemble multi-level stacking model for predictive diagnosis of heart disease using machine learning techniques.',
      'Built predictive healthcare model combining multiple ML algorithms to improve heart disease detection accuracy.',
    ],
    features: [
      'Ensemble multi-level stacking',
      'Predictive diagnosis',
      'Healthcare ML application',
      'Multi-algorithm approach',
      'Clinical decision support',
    ],
    metrics: [
      { value: 'Ensemble', label: 'model type' },
      { value: 'Healthcare', label: 'domain' },
      { value: 'Academic', label: 'project type' },
      { value: 'PSG', label: 'college' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'top-gpa',
    title: 'Top Academic Performance',
    org: 'Clark University',
    detail: 'MS Data Analytics with GPA 3.94/4.0 — demonstrating excellence in statistical analysis, machine learning, and data visualization.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'alpha-epsilon-lambda',
    title: 'Alpha Epsilon Lambda Honor Society',
    org: 'Clark University',
    detail: 'Nominated to join Alpha Epsilon Lambda, national honor society recognizing outstanding graduate and professional school students. Top 15% of students at Clark University School of Professional Studies.',
    laurel: 'Academic Honor',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7197391512408576000/',
  },
  {
    id: 'graduate-conference',
    title: 'Graduate Conference Presenter',
    org: 'Clark University',
    detail: 'Selected to present "Sentiment Analysis of IMDb Reviews - NLP & ML Approach" at the 20th Graduate Student Council Multidisciplinary Conference. Project handpicked for presentation.',
    laurel: 'Research Excellence',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7175943384258220033/',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Tableau', name: 'Tableau Desktop Specialist', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
  { issuer: 'AWS', name: 'AWS Certified Associate Developer', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
  { issuer: 'Snowflake', name: 'Snowflake Certification', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
  { issuer: 'Databricks', name: 'Generative AI Fundamentals', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
  { issuer: 'IBM', name: 'Artificial Intelligence Fundamentals', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
  { issuer: 'Google', name: 'Google Analytics Certification', link: 'https://skillshop.credential.net/profile/rakshu2141/wallet' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'migration',
    title: 'Data Migration',
    subtitle: 'Enterprise system migration',
    skills: [
      { name: 'SAP HANA', mono: 'Ha' },
      { name: 'dbt Cloud', mono: 'Db' },
      { name: 'Fivetran', mono: 'Fv' },
      { name: 'Apache Airflow', mono: 'Ai' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    subtitle: 'Data warehousing & storage',
    skills: [
      { name: 'Snowflake', mono: 'Sf', note: 'Primary' },
      { name: 'AWS S3', mono: 'S3' },
      { name: 'Palantir Foundry', mono: 'Pf' },
      { name: 'SQL Server', mono: 'Ss' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & BI',
    subtitle: 'Visualization & reporting',
    skills: [
      { name: 'Tableau', mono: 'Tb', note: 'Certified' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'SAP Analytics Cloud', mono: 'Sa' },
      { name: 'Splunk', mono: 'Sp' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Python is primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'R', mono: 'R' },
    ],
  },
  {
    id: 'libraries',
    title: 'Data Libraries',
    subtitle: 'Analysis & ML',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'TensorFlow', mono: 'Tf' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'From Samsung internship',
    skills: [
      { name: 'React Native', mono: 'Rn' },
      { name: 'Node.js', mono: 'Nj' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Data Pipeline Architecture', mono: 'Da' },
      { name: 'Cloud Migration', mono: 'Cm' },
      { name: 'AI-Powered Analytics', mono: 'Aa' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'SAP HANA': ['SAP HANA Migration', 'Marlabs LLC'],
  'SAP ECC': ['B2B Supply Chain Analytics', 'Enterprise Solutions Inc'],
  'dbt Cloud': ['SAP HANA Migration', 'Marlabs LLC'],
  'Fivetran': ['B2B Supply Chain Analytics', 'Enterprise Solutions Inc'],
  'Apache Airflow': ['Workflow automation at Marlabs'],
  'Snowflake': ['Snowflake Certified', 'Multiple projects', 'Marlabs LLC'],
  'AWS S3': ['AWS Certified Associate Developer', 'Marlabs LLC'],
  'Palantir Foundry': ['SAP HANA Migration', 'Marlabs LLC'],
  'SQL Server': ['Enterprise data projects'],
  'MySQL': ['Academic projects'],
  'Firebase': ['Samsung Server-Driven UI'],
  'MongoDB': ['Database experience'],
  'Tableau': ['Tableau Desktop Specialist', 'Temu Analytics', 'TCS dashboards'],
  'Power BI': ['Business intelligence projects'],
  'SAP Analytics Cloud': ['Marlabs LLC', 'SAP HANA Migration'],
  'Splunk': ['LA Crime Analysis project'],
  'Python': ['IMDB Sentiment Analysis', 'Data analysis at TCS', 'Multiple ML projects'],
  'SQL': ['All data projects', 'TCS optimization'],
  'R': ['Statistical analysis'],
  'Pandas': ['Data analysis projects', 'TCS'],
  'NumPy': ['ML projects', 'Academic work'],
  'scikit-learn': ['IMDB Sentiment Analysis', 'Machine learning projects'],
  'TensorFlow': ['IMDB Sentiment Analysis', 'Deep learning projects'],
  'React Native': ['Samsung Server-Driven UI'],
  'Node.js': ['Samsung Server-Driven UI'],
  'JavaScript': ['Samsung internship', 'Frontend development'],
  'Data Pipeline Architecture': ['SAP HANA Migration', 'Current focus'],
  'Cloud Migration': ['SAP migration projects', 'Current focus'],
  'AI-Powered Analytics': ['40% efficiency gain at Marlabs', 'Current focus'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2022',
    synopsis: 'BTech Information Technology at PSG College of Technology, India — building the technical foundation with Samsung and TCS internships.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Information Technology at PSG College of Technology — graduating with GPA 8.5/10.',
        tags: ['BTech', 'IT', 'GPA 8.5/10'],
        runtime: 'Aug 2018 – May 2022',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Builder',
        description: 'UI Intern at Samsung — developing Server-Driven UI with React Native and Node.js, increasing rendering efficiency by 35%.',
        tags: ['Samsung', 'React Native', 'Node.js'],
        runtime: 'May 2021 – Jan 2022',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'The Data Explorer',
        description: 'Data Analyst Intern at TCS — analyzing 3M+ data points to identify operational inefficiencies, achieving 25% process improvement.',
        tags: ['TCS', 'Data Analysis', '3M+ data points'],
        runtime: 'Feb 2022 – Jul 2022',
        palette: crimson,
      },
      {
        code: 'S01 E04',
        title: 'The Visualizer',
        description: 'Built interactive Tableau dashboards and ML models for predictive analytics at TCS, improving reporting efficiency by 30%.',
        tags: ['Tableau', 'Machine Learning', 'Dashboards'],
        runtime: '6 months at TCS',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Graduate School Arc',
    period: '2022 – 2023',
    synopsis: 'MS Data Analytics (STEM) at Clark University, Worcester, MA — achieving GPA 3.94/4.0.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'Master of Science in Data Analytics at Clark University — graduating with GPA 3.94/4.0, specializing in statistical analysis and ML.',
        tags: ['MS', 'Data Analytics', 'GPA 3.94'],
        runtime: 'Aug 2022 – Dec 2023',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Researcher',
        description: 'IMDB Sentiment Analysis project — achieving 91% accuracy on 50K+ movie reviews using advanced NLP and LSTM models.',
        tags: ['NLP', 'Python', 'Machine Learning'],
        runtime: 'Academic project',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Analyst',
        description: 'Temu supply chain analytics and LA crime data analysis projects using Tableau and Splunk for data-driven insights.',
        tags: ['Tableau', 'Splunk', 'Analytics'],
        runtime: 'Academic projects',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Integration Specialist',
    period: '2024 – 2025',
    synopsis: 'Business Analyst at Enterprise Solutions Inc — driving SAP integration and B2B supply chain operations.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Integrator',
        description: 'Business Analyst at ESI — implementing Fivetran for automated SAP to cloud data synchronization across B2B supply chains.',
        tags: ['Fivetran', 'SAP', 'Integration'],
        runtime: 'Jun 2024 – Jul 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Optimizer',
        description: 'Reduced system downtime by 35% through comprehensive migration strategies, processing 500K+ daily transactions with zero data loss.',
        tags: ['Migration', 'Optimization', 'B2B'],
        runtime: '13 months',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Certified',
        description: 'Earned Tableau Desktop Specialist and AWS Certified Associate Developer certifications, advancing technical expertise.',
        tags: ['Tableau', 'AWS', 'Certifications'],
        runtime: '2024-2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Senior Consultant',
    period: '2025 – Present',
    synopsis: 'Senior Data Analyst & Technical Consultant at Marlabs LLC — leading SAP HANA migrations with AI integration.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Migration Architect',
        description: 'Leading SAP HANA migration from ECC 6.0 using dbt Cloud and Palantir Foundry for pharmaceutical analytics at scale.',
        tags: ['SAP HANA', 'dbt Cloud', 'Palantir'],
        runtime: 'Jul 2025 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The AI Pioneer',
        description: 'Integrated AI-powered tools reducing manual data processing by 40% and improving data quality across enterprise systems.',
        tags: ['AI Integration', 'Automation', 'Pharmaceuticals'],
        runtime: 'Current role',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Cloud Engineer',
        description: 'Architecting scalable cloud solutions on Snowflake and AWS S3 for real-time pharmaceutical analytics and reporting.',
        tags: ['Snowflake', 'AWS', 'Real-time Analytics'],
        runtime: 'Current role',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The future of data analytics — exploring advanced AI integration and cloud architecture.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring advanced data pipeline architecture, AI-powered analytics, and cloud migration strategies for the next phase.',
        tags: ['Data Architecture', 'AI Analytics', 'Cloud Strategy'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Data analyst', detail: 'Marlabs LLC • SAP HANA Migration', palette: ocean },
  { label: 'Top certification', title: 'Tableau Specialist', detail: 'Tableau Desktop Specialist', palette: amber },
  { label: 'Academic excellence', title: 'MS Data Analytics', detail: 'GPA 3.94/4.0 • Clark University', palette: violet },
  { label: 'The big migration', title: 'SAP HANA', detail: '10M+ daily records • 99.9% accuracy', palette: crimson },
  { label: 'Data processed', title: '3M+ Data Points', detail: 'TCS Analytics Project • 25% improvement', palette: jade },
  { label: 'Cloud platforms', title: 'Snowflake', detail: 'Certified • AWS Certified', palette: ocean },
  { label: 'AI Integration', title: '40% Efficiency Gain', detail: 'AI-powered data workflows', palette: violet },
  { label: 'Primary skill', title: 'Python', detail: 'Pandas • NumPy • ML Libraries', palette: amber },
  { label: 'Analytics platform', title: 'dbt Cloud', detail: 'Data transformation pipelines', palette: crimson },
  { label: 'Experience', title: '2+ Years', detail: 'Data Analyst & Technical Consultant', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'MS · Data Analytics',
    lines: ['Clark University, Worcester, MA', 'December 2023 • GPA 3.94/4.0'],
    chips: ['GPA 3.94', 'STEM'],
  },
  {
    kicker: 'Skills',
    title: 'Data first.',
    lines: ['SAP HANA, dbt Cloud, Fivetran · Snowflake, AWS, Palantir', 'Python, Pandas, NumPy · Tableau, Power BI, SAP Analytics'],
    chips: ['Python', 'SAP HANA', 'Snowflake', 'Tableau', 'dbt Cloud'],
  },
  {
    kicker: 'Experience',
    title: '2+ Years',
    lines: ['Senior Data Analyst & Technical Consultant', 'Marlabs LLC · July 2025 – Present', 'Enterprise Solutions Inc · June 2024 – July 2025'],
  },
  {
    kicker: 'Projects',
    title: 'Five Academic Projects',
    lines: ['IMDB Sentiment Analysis — NLP & Python', 'Temu Supply Chain — Tableau Dashboards', 'LA Crime Analysis — Splunk Enterprise', 'Secure OTA System — AES Encryption', 'Heart Disease Prediction — ML Ensemble Model'],
  },
  {
    kicker: 'Impact',
    title: 'Key Metrics',
    lines: ['3M+ data points analyzed at TCS', '40% efficiency gain through AI integration', '25% process improvement through analytics'],
  },
  {
    kicker: 'Certified',
    title: '6 Certifications',
    lines: ['Tableau · AWS · Snowflake · Databricks · IBM AI · Google Analytics'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Data Pipeline Architecture · Cloud Migration · AI-Powered Analytics'],
  },
];

export type ProfileId = 'shree' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shree',
    name: 'Shree Raksha',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, skills & certifications first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Data Leader',
    blurb: 'Projects, cloud platforms & impact first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
