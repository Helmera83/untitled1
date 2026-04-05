import type { About, Education, Experience, Project, SkillCategory } from '../types/types';

export const ABOUT_ME: About = {
    name: "Amanda Helmer",
    title: "Business Systems Builder | Workflow Designer",
    location: "Durant, Oklahoma",
    bio: "I design and build systems that solve real organizational problems. With a background in Business Administration and hands-on experience in application development, I focus on improving task management, data visibility, and workflow efficiency. My work centers on turning business requirements into functional, scalable solutions using tools such as Kotlin, React, and CRM platforms.",
    valueStatement:"I transform operational processes into structured, trackable systems that increase efficiency and improve decision-making.",
    email: "Helmeramanda90@gmail.com",
    socials: {
        github: "https://github.com/amandahelmer",
        credly: "https://www.credly.com/users/amanda-helmer"
    }
};
export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "CRM Data Ingestion Pipeline",
        problem: "Manual data entry was causing 15% error rates in lead tracking and slowing down response times.",
        solution: "Built an automated ingestion pipeline using TypeScript and integrated it with a mock CRM interface.",
        technologies: ["React", "TypeScript", "Node.js"],
        outcome: "Reduced manual entry time by 40% and established a 'single source of truth' for client data.",
        link: "https://amanda-pf.vercel.app"
    },
    {
        id: 2,
        title: "E-commerce System Design",
        problem: "Inefficient inventory tracking and lack of mobile-responsive interface for retail clients.",
        solution: "Developed a responsive dashboard focusing on inventory turnover analysis and mobile-first UI.",
        technologies: ["Kotlin", "Figma", "React"],
        outcome: "Improved data visibility for stakeholders and streamlined the user journey for mobile users.",
        link: "http://next-link-lilac.vercel.app"
    }
];

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        company: 'RDSolutions',
        role: 'Data Scanning Associate',
        location: 'Remote',
        period: 'March 2026 - Present',
        description: [
            'Managing high-volume data intake and digital transformation workflows.',
            'Ensuring data integrity and accuracy within specialized scanning systems.'
        ]
    },
    {
        id: 2,
        company: 'Driveline Retail Merchandising',
        role: 'Retail Merchandiser',
        location: 'Durant, OK',
        period: 'Feb 2026 - Present',
        description: [
            'Optimizing product placement and visual presentation for major retail accounts.',
            'Using reporting tools to track inventory and compliance.'
        ]
    },
    {
        id: 3,
        company: 'Creative Content',
        role: 'Founder & Web Designer',
        location: 'Bullhead City, AZ',
        period: 'December 2020 - March 2023',
        description: [
            'Managed all aspects of the business, including project management, budgeting, and client communication.',
            'Designed and developed visually appealing websites using HTML, CSS, and JavaScript.'
        ]
    },
    {
        id: 4,
        company: 'ABC Contractor Services',
        role: 'Administrative Assistant',
        location: 'Sherman, TX',
        period: 'July 2014 - August 2019',
        description: [
            'Streamlined office operations through implementation of standardized processes resulting in increased productivity.',
            'Supported HR department in recruitment efforts by screening resumes based on predefined criteria.'
        ]
    }
];

export const EDUCATION_DATA: Education[] = [
    {
        school: 'Purdue Global University',
        degree: 'Bachelor of Science in Business Administration',
        status: 'In Progress (Expected Graduation: February 2026)',
        relevantCoursework: [
            'ProjectCard Management',
            'Business Strategy (SWOT/PESTLE)',
            'Digital Marketing and E-commerce',
            'Quality Management'
        ]
    }
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        category: "CRM Tools",
        items: ["Salesforce", "HubSpot", "Zoho CRM", "Tableau", "Microsoft Outlook"]
    },
    {
        category: "Technical",
        items: ["Excel (Formulas/Macros)", "SQL", "Kotlin", "React", "TypeScript", "Python", "HTML/CSS", "JavaScript", "Figma (UX/UI)"]
    },
    {
        category: "Business",
        items: ["Agile/Kanban", "Data Analytics", "SWOT Analysis", "PESTLE", "ProjectCard Management Software (Jira/Slack)", "Operations Reporting"]
    }
];

export const CERTIFICATIONS = [
    "Google ProjectCard Management Professional Certificate",
    "Google Business Intelligence Professional Certificate",
    "Google Digital Marketing & E-commerce Certificate",
    "Google UX Design Professional Certificate",
    "Google Analytics Certification"
];

export const PROJECTS = PROJECTS_DATA;
export const SKILLS = SKILLS_DATA;
