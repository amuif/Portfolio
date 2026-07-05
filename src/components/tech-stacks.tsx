import { SectionHeading } from "./section-heading";

const STACKS = [
    "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Node.js", "Express", 
    "PostgreSQL", "MongoDB", "Figma", "Git", "Docker", "Prisma", "Vite"
];

const COLORS = [
    "bg-primary text-primary-foreground", "bg-secondary text-secondary-foreground"
];

export const TechStacks = () => {
    return (
        <section id="tech-stacks" className="w-full bg-secondary/20 py-16 border-y-4 border-foreground">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Tech Stack" color="bg-secondary text-secondary-foreground" />
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
                    {STACKS.map((tech, idx) => (
                        <div 
                            key={idx} 
                            className={`flex items-center justify-center border-4 border-foreground px-4 py-2 text-sm md:text-base font-black uppercase shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-foreground)] ${COLORS[idx % COLORS.length]}`}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
