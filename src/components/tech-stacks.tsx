import { SectionHeading } from "./section-heading";

const STACKS = [
    "JavaScript", "TypeScript", "Python", "Go", "React", "Next.js", "TailwindCSS", "Node.js", "Express",
    "PostgreSQL", "SQL", "Figma", "Git", "Docker", "Prisma", "Vite", "Tasntack"
];

const COLORS = [
    "bg-red-100 dark:bg-red-900/40",
    "bg-orange-100 dark:bg-orange-900/40",
    "bg-amber-100 dark:bg-amber-900/40",
    "bg-green-100 dark:bg-green-900/40",
    "bg-emerald-100 dark:bg-emerald-900/40",
    "bg-teal-100 dark:bg-teal-900/40",
    "bg-cyan-100 dark:bg-cyan-900/40",
    "bg-blue-100 dark:bg-blue-900/40",
    "bg-indigo-100 dark:bg-indigo-900/40",
    "bg-violet-100 dark:bg-violet-900/40",
    "bg-purple-100 dark:bg-purple-900/40",
    "bg-fuchsia-100 dark:bg-fuchsia-900/40",
    "bg-pink-100 dark:bg-pink-900/40",
    "bg-rose-100 dark:bg-rose-900/40"
];

export const TechStacks = () => {
    return (
        <section id="tech-stacks" className="w-full bg-zinc-50 dark:bg-zinc-950/50 py-16 border-y-4 border-foreground">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Skills" color="bg-rose-100 dark:bg-rose-900/50 text-foreground" />

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
                    {STACKS.map((tech, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center justify-center border-4 border-foreground px-4 py-2 text-sm md:text-base font-black uppercase text-foreground shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)] ${COLORS[idx % COLORS.length]}`}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
