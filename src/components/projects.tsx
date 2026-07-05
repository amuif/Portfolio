import { SectionHeading } from "./section-heading";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
    {
        title: "Retro E-Commerce",
        description: "A full-stack e-commerce platform built with Next.js and Prisma.",
        color: "bg-rose-100 dark:bg-rose-900/40 text-foreground",
        tags: ["Next.js", "TailwindCSS"],
        live: "#",
        span: "md:col-span-2 md:row-span-2" // Large card
    },
    {
        title: "TaskMaster Pro",
        description: "A drag-and-drop task management tool with real-time updates.",
        color: "bg-cyan-100 dark:bg-cyan-900/40 text-foreground",
        tags: ["React", "Zustand"],
        live: "#",
        span: "md:col-span-1 md:row-span-1" // Small card
    },
    {
        title: "DevBlog Platform",
        description: "A high-performance blogging platform for developers.",
        color: "bg-amber-100 dark:bg-amber-900/40 text-foreground",
        tags: ["Astro", "MDX"],
        live: "#",
        span: "md:col-span-1 md:row-span-1" // Small card
    },
    {
        title: "AI Chat Interface",
        description: "A seamless conversational UI for modern AI models.",
        color: "bg-fuchsia-100 dark:bg-fuchsia-900/40 text-foreground",
        tags: ["OpenAI", "React"],
        live: "#",
        span: "md:col-span-1 md:row-span-1" // Small card
    },
    {
        title: "Crypto Dashboard",
        description: "Real-time analytics and portfolio tracker for cryptocurrency.",
        color: "bg-lime-100 dark:bg-lime-900/40 text-foreground",
        tags: ["Web3", "Vue"],
        live: "#",
        span: "md:col-span-2 md:row-span-1" // Wide card
    },
    {
        title: "Weather Station",
        description: "A highly visual weather forecasting progressive web app.",
        color: "bg-sky-100 dark:bg-sky-900/40 text-foreground",
        tags: ["PWA", "APIs"],
        live: "#",
        span: "md:col-span-3 md:row-span-1" // Full width card
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Selected Works" color="bg-blue-100 dark:bg-blue-900/40 text-foreground" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[250px]">
                {PROJECTS.map((project, idx) => (
                    <div key={idx} className={`group relative flex h-full flex-col overflow-hidden border-4 border-foreground bg-background text-foreground shadow-[6px_6px_0_0_var(--color-foreground)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-foreground)] ${project.span}`}>
                        
                        <div className={`h-24 md:h-32 w-full border-b-4 border-foreground ${project.color} p-4 flex items-center justify-center shrink-0`}>
                            <h3 className="text-center text-xl md:text-2xl font-black uppercase rotate-[-3deg] group-hover:rotate-0 transition-transform line-clamp-2">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex flex-1 flex-col p-4">
                            <p className="mb-4 flex-1 text-sm font-medium leading-snug line-clamp-3">
                                {project.description}
                            </p>
                            
                            <div className="mb-4 flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="border-2 border-foreground bg-zinc-100 dark:bg-zinc-800 text-foreground px-2 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-[2px_2px_0_0_var(--color-foreground)] whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <a href={project.live} className="flex items-center justify-center gap-2 border-2 border-foreground bg-indigo-100 dark:bg-indigo-900/50 text-foreground px-3 py-1.5 font-bold shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase text-xs w-fit">
                                Live Demo <ArrowRight className="h-3 w-3" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
