/**
 * Core types for Amanda Helmer's Professional Portfolio
 * Purpose: Ensures type safety for Business Administration & Systems Focus
 */

export interface Project {
    id: number;
    title: string;
    problem: string;      // Non-negotiable: The specific challenge addressed
    solution: string;     // Non-negotiable: What you built or implemented
    description?: string; // Optional summary used by card-style project layouts
    technologies: string[]; // e.g., Kotlin, SQL, Salesforce
    outcome: string;      // Non-negotiable: The measurable result or benefit
    link?: string;        // Optional: Link to GitHub or demo
    imageUrl?: string;
}

export interface SkillCategory {
    // Enforces grouping into your three core areas
    category: "CRM Tools" | "Technical" | "Business";
    items: string[];
}

export interface About {
    name: string;         // Amanda Helmer
    title: string;        // e.g., "Business Administration Graduate | CRM & Systems Focus"
    location: string;     // Durant, Oklahoma
    bio: string;          // Short, direct background
    valueStatement: string; // 1–2 sentences: what you do + what you bring
    email: string;        // Helmeramanda90@gmail.com
    socials: {
        github?: string;
        linkedin?: string;
        credly?: string;    // For Google Digital Marketing certificate
    };
}

export interface Education {
    school: string;       // Purdue Global University
    degree: string;// Bachelor of Science in Business Administration
    major?: string;
    status: string;       // e.g., "In Progress (2026)"
    relevantCoursework: string[]; // e.g., Quality Management, ProjectCard Management
}

export interface Experience {
    id: number;
    company: string;
    location: string;
    role: string;
    period: string;
    description: string[];
}