
export const ADMIN_SECRET_PATH = '/admin-portal-9876';
export const ADMIN_CREDENTIALS = {
  username: 'pranikov_admin',
  passwordHash: 'e99a18c428cb38d5f260853678922e03' // md5 of 'admin123'
};

export const INITIAL_SERVICES = [
  {
    id: 's1',
    title: 'Application Development',
    description: 'Custom web and mobile applications built with modern technologies to solve real business problems.',
    icon: 'Code',
    features: ['Web Apps', 'Mobile Apps', 'Full-Stack Solutions', 'API Development']
  },
  {
    id: 's2',
    title: 'Website Development',
    description: 'Beautiful, responsive websites designed to engage users and drive conversions for your business.',
    icon: 'Globe',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Modern UX']
  },
  {
    id: 's3',
    title: 'AI Agent Development',
    description: 'Intelligent AI agents that automate tasks, enhance decision-making, and streamline workflows.',
    icon: 'Zap',
    features: ['Custom AI Agents', 'Automation Workflows', 'Smart Integrations', 'Continuous Learning']
  },
  {
    id: 's4',
    title: 'Management & Maintenance',
    description: 'Ongoing support, updates, and optimization to keep your systems running smoothly and efficiently.',
    icon: 'TrendingUp',
    features: ['24/7 Support', 'Performance Monitoring', 'Regular Updates', 'Security Management']
  }
];

export const INITIAL_ABOUT = {
  description: "We build powerful applications, stunning websites, and intelligent AI agents that transform how businesses operate. We don't just deliver software—we architect complete solutions and continuously manage them to drive sustainable growth and innovation.",
  mission: "To empower businesses through intelligent applications, seamless websites, and AI-driven automation that scale.",
  vision: "To be the trusted partner for businesses seeking to innovate, automate, and lead their digital transformation journey.",
  profileImage: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767282502/WhatsApp_Image_2025-12-26_at_9.46.40_PM_r0gh1g.jpg",
  logo: "", // Default empty to use SVG fallback
  values: [
    { title: "End-to-End Excellence", desc: "We architect and deliver powerful applications, responsive websites, and intelligent systems from concept to production." },
    { title: "Intelligent Automation", desc: "We harness cutting-edge AI agents to automate workflows, drive efficiency, and amplify your business capabilities." },
    { title: "Continuous Optimization", desc: "We proactively manage and optimize your digital assets to ensure peak performance, reliability, and growth." }
  ],
  team: [
    { name: "Nikhil", role: "CEO", bio: "Visionary leader driving strategic direction and client relationships." },
    { name: "Bharath", role: "CMO", bio: "Marketing strategist shaping brand presence and market positioning." },
    { name: "Pranay", role: "COO", bio: "Operations expert ensuring seamless project delivery and efficiency." },
    { name: "Manoj", role: "CTO", bio: "Technical architect leading innovation and technology excellence." }
  ],
  milestones: [
    { year: "December 2024", title: "Our Launch", desc: "Started building custom web applications and websites for fun, and it gradually turned into a serious passion", image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767289910/Screenshot_2026-01-01_232137_coika6.png" },
    { year: "Jan 2025", title: "First Milestone", desc: "Started by building immersive 3D and Particle.js–based websites, expanding into full-scale custom web applications", image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767289770/Screenshot_2026-01-01_231905_o2th62.png" },
    { year: "Feb 2025", title: "Uphill to Pranikov", desc: "We upgraded the frame work and changed to Pranikov to build some thing new", image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767287808/WhatsApp_Image_2026-01-01_at_10.46.09_PM_2_vikqjy.jpg" },
    { year: "March 2025", title: "Examination Platform", desc: "Created a examination and assignment evaluation platform for the teachers and students" , image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767290992/Screenshot_2026-01-01_233932_euizkd.png" },
    { year: "August 2025", title: "AI Integration", desc: "Started developing and integrating AI agents into our projects." , image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767290633/Screenshot_2026-01-01_233340_xx9fl2.png" },
    { year: "December 2025", title: "Growing Strong", desc: "Expanded into management services. Successfully managing multiple client projects and growing our team.", image: "https://res.cloudinary.com/dezv0qrah/image/upload/v1767283733/Screenshot_2026-01-01_213833_u6lcel.png" }
  ]
};

export const INITIAL_PROJECTS = [
  {
    id: 'p1',
    title: 'Smart Café Management System',
    description: 'A modern café management platform designed for seamless order processing, inventory tracking, and real-time sales analytics.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['https://res.cloudinary.com/dezv0qrah/image/upload/v1767285971/Screenshot_2026-01-01_220815_dxwm22.png','https://res.cloudinary.com/dezv0qrah/image/upload/v1767285969/Screenshot_2026-01-01_221448_l7moiy.png','https://res.cloudinary.com/dezv0qrah/image/upload/v1767285969/Screenshot_2026-01-01_221448_l7moiy.png','https://res.cloudinary.com/dezv0qrah/image/upload/v1767285971/Screenshot_2026-01-01_221504_svc5jy.png'],
    date: '2023-11-15',
    client: 'Manasa cafe',
    featured: true,
    views: 1240
  },
  {
    id: 'p2',
    title: 'Health Care Management Systems',
    description: 'A real-time healthcare management platform that integrates IoT-based patient monitoring with AI-powered predictive analytics to improve care delivery and operational efficiency.',
    techStack: ['Springboot', 'Postgres', 'React', 'railway'],
    images: ['https://res.cloudinary.com/dezv0qrah/image/upload/v1767283733/Screenshot_2026-01-01_213833_u6lcel.png', 'https://res.cloudinary.com/dezv0qrah/image/upload/v1767283848/Screenshot_2026-01-01_214015_f6ton1.png'],
    date: '2026-01-10',
    client: 'Shilpa Hospitals',
    featured: true,
    views: 890
  }
];
