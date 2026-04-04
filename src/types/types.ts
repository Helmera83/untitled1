/**
 * Core types for Amanda Helmer's Professional Portfolio
 * Structured for Business Administration & Systems Focus
 */

export interface Project {
    id: number;
    title: string;
    problem: string;      // Non-negotiable: The specific challenge addressed
    solution: string;     // Non-negotiable: What you built or implemented
    description?: string; // Optional legacy summary used by older cards
    technologies: string[]; // Tools used (CRM, SQL, Kotlin, etc.)
    outcome: string;      // Non-negotiable: The measurable result or benefit
    link?: string;        // Optional: Link to GitHub or Live Demo
    imageUrl?: string;    // Optional: Project screenshot
}

export interface SkillCategory {
    category: "CRM Tools" | "Technical" | "Business"; // Logically grouped categories
    items: string[];
}

export interface About {
    name: string;
    title: string;        // e.g., "Business Administration Graduate | CRM & Systems Focus"
    location: string;
    bio: string;          // Short, direct background
    valueStatement: string; // 1-2 sentences: what you do + what you bring
    email: string;
    socials: {
        github?: string;
        linkedin?: string;
        credly?: string;
    };
}

export interface Experience {
    id: number;
    company: string;
    role: string;
    location?: string;
    period: string;
    isCurrent?: boolean;
    description: string[];
}

export interface Education {
    school: string;
    degree: string;
    major?: string;
    status: string;
    relevantCoursework: string[];
}