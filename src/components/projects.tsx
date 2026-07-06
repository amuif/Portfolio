import { SectionHeading } from "./section-heading";
import { ArrowRight } from "lucide-react";


const PROJECTS = [
    {
        title: "SAAS Landing Page",
        description: "A high-performance SaaS landing page built to showcase seamless user experiences and fluid micro-interactions. Focuses on structured layouts, optimized asset delivery, and responsive UI components.",
        color: "bg-rose-100 dark:bg-rose-900/40 text-foreground",
        tags: ["Vite", "GSAP", "TailwindCSS"],
        live: "https://landingpagedemogsap.netlify.app/",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Admin Dashboard",
        description: "A high-performance drag-and-drop task management tool featuring real-time state synchronization, secure user authentication, and a responsive, modern analytics UI.",
        color: "bg-cyan-100 dark:bg-cyan-900/40 text-foreground",
        tags: ["Svelete", "SvelteKit", "Superbase", "TailwindCSS", "SQLite"],
        live: "https://svelte-admin-panel.vercel.app/login",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        title: "BookBites",
        description: "Concise, spoiler-free perspectives on the best fantasy and sci-fi. We dive deep into the soul of the story so you don't have to.",
        color: "bg-amber-100 dark:bg-amber-900/40 text-foreground",
        tags: ["Astro", "TailwindCSS"],
        live: "https://bookbites-two.vercel.app/",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Dire Dawa Transport Citizen Charter Portal",
        description: "An official public service portal designed to give citizens seamless access to transport services, complaint tracking, staff directories, and service quality ratings.",
        color: "bg-blue-100 dark:bg-blue-900/40 text-foreground",
        tags: ["Next.js", "Tanstack Query", "TailwindCSS", "Express", "SQL"],
        live: "https://diredawatransport.org/",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        title: "GitHub Profile",
        description: "The central hub for my open-source contributions, core architecture projects, production web applications, and experimental full-stack development tooling.",
        color: "bg-lime-100 dark:bg-lime-900/40 text-foreground",
        tags: ["Open Source", "Software Architecture", "Full-Stack Development", "Monorepos"],
        live: "https://github.com/amuif",
        span: "md:col-span-3 md:row-span-1"
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Selected Works" color="bg-blue-100 dark:bg-blue-900/40 text-foreground" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[350px]">
                {PROJECTS.map((project, idx) => (
                    <div key={idx} className={`group relative flex h-full flex-col overflow-hidden border-4 border-foreground bg-background text-foreground shadow-[6px_6px_0_0_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-foreground)] ${project.span}`}>

                        <div className={`h-24 md:h-32 w-full border-b-4 border-foreground ${project.color} p-4 flex items-center justify-center shrink-0`}>
                            <h3 className="text-center text-xl md:text-2xl font-black uppercase -rotate-3 group-hover:rotate-0 transition-transform line-clamp-2">
                                {project.title}
                            </h3>
                        </div>

                        <div className={`flex flex-1 flex-col p-4 ${project.title === 'Weather Station' ? 'pb-8 md:pb-12' : ''}`}>
                            <p className="mb-4 flex-1 text-sm font-medium leading-snug line-clamp-3">
                                {project.description}
                            </p>

                            <div className="mb-4 flex flex-wrap gap-2 mt-auto">
                                {project?.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="border-2 border-foreground bg-zinc-100 dark:bg-zinc-800 text-foreground px-2 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-[2px_2px_0_0_var(--color-foreground)] whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href={project.live} target="_blank" rel='noreferrer' className="flex items-center justify-center gap-2 border-2 border-foreground bg-indigo-100 dark:bg-indigo-900/50 text-foreground px-3 py-1.5 font-bold shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase text-xs w-fit">
                                Live Demo <ArrowRight className="h-3 w-3" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};
