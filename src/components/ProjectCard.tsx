import type { Project } from '../types/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const summary = project.description ?? project.solution ?? project.problem;

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-500">No image available</div>
                )}
            </div>

            <div className="flex grow flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                    {project.technologies.map((tag: string) => (
                        <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">{summary}</p>

                {project.link && (
                    <div className="mt-auto flex items-center gap-4 pt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                        >
                            {'View Project ->'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;