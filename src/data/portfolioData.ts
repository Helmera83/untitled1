import type { About, Education, Experience, Project, SkillCategory } from '../types/types';

export const ABOUT_ME: About = {
    name: "Amanda Helmer",
    title: "Business Administration Graduate | CRM & Systems Focus",
    location: "Durant, Oklahoma",
    bio: "Purdue Global student bridging the gap between operational business strategy and modern technical implementation. I specialize in data integrity, CRM workflows, and system optimization.",
    valueStatement: "I turn messy operational processes into reliable, trackable systems that improve speed and decision quality.",
    email: "Helmeramanda90@gmail.com",
    socials: {
        github: "https://github.com/amandahelmer",
        credly: "https://www.credly.com/users/amanda-helmer"
    }
};

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "CRM Workflow Automation",
        problem: "Manual data entry was causing 15% error rates in lead tracking and slowing down response times.",
        solution: "Built an automated ingestion pipeline using TypeScript and integrated it with a mock CRM interface.",
        technologies: ["React", "TypeScript", "Node.js"],
        outcome: "Reduced manual entry time by 40% and established a 'single source of truth' for client data.",
        link: "#"
    }
];

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        company: 'RDSolutions',
        role: 'Data Scanning Associate',
        location: 'Remote',
        period: 'March 2026 - Present',
        isCurrent: true,
        description: [
            'Managing high-volume data intake and digital transformation workflows.',
            'Ensuring data integrity and accuracy within specialized scanning systems.'
        ]
    },
    {
        id: 2,
        company: 'Driveline Retail Merchandising',
        role: 'Retail Merchandiser',
        location: 'On-site',
        period: 'Feb 2026 - Present',
        isCurrent: true,
        description: [
            'Optimizing product placement and visual presentation for major retail accounts.',
            'Using reporting tools to track inventory and compliance.'
        ]
    }
];

export const EDUCATION_DATA: Education[] = [
    {
        school: 'Purdue Global University',
        degree: 'Bachelor of Science',
        major: 'Business Administration',
        status: 'In Progress (Expected Graduation: 2026)',
        relevantCoursework: [
            'Project Management',
            'Business Strategy (SWOT/PESTLE)',
            'Digital Marketing and E-commerce'
        ]
    }
];

export const SKILLS_DATA: SkillCategory[] = [
    { category: "CRM Tools", items: ["Salesforce", "HubSpot", "Microsoft Dynamics"] },
    { category: "Technical", items: ["Excel (VLOOKUP/Macros)", "SQL", "Kotlin", "React", "TypeScript"] },
    { category: "Business", items: ["PESTLE Analysis", "SWOT", "Project Management", "Operations Reporting"] }
];

export const PROJECTS = PROJECTS_DATA;
export const SKILLS = SKILLS_DATA;
