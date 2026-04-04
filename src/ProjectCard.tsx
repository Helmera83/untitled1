import type { Project } from './types/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="h-48 w-full rounded-lg bg-slate-200 mb-4 overflow-hidden">
                {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full items-center justify-center text-slate-400 italic">No image available</div>
                )}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                    <span
                        key={tech}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                    >
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;