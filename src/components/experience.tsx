import { SectionHeading } from "./section-heading";

const EXPERIENCES = [
 {
        role: "Lead Full-Stack Developer",
        company: "Upwork (Freelance)",
        period: "2025 - Present",
        description: "Designing scalable backend architectures and leading high-performance frontend engineering for high-traffic web applications using React, Next.js, and TypeScript.",
        color: "bg-yellow-200 dark:bg-yellow-900/60"
    },
    {
        role: "Frontend Web Developer",
        company: "Wavic",
        period: "2024 - 2025",
        description: "Developed highly responsive, fluid, and user-centric web interfaces using Next.js and Tailwind CSS, focusing on optimizing client-side performance and state hydration.",
        color: "bg-blue-200 dark:bg-blue-900/60"
    },
    {
        role: "Frontend Engineer",
        company: "Bits Fusion",
        period: "2023 - 2024",
        description: "Designed and developed performant websites for local enterprises, translating complex business logic into smooth, accessible UI interactions that significantly boosted customer engagement.",
        color: "bg-pink-200 dark:bg-pink-900/60"
    },
    {
        role: "Software Engineer",
        company: "4K Labs",
        period: "2023 - Present",
        description: "Architecting interactive website and building hardware-integrated applications, utilizing Raspberry Pi environments for local IoT and embedded system solutions.",
        color: "bg-pink-200 dark:bg-pink-900/60"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Experience" color="bg-emerald-100 dark:bg-emerald-900/50 text-foreground" />

            <div className="relative border-l-4 border-foreground ml-4 md:ml-0 md:pl-8">
                {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="mb-10 ml-6 md:ml-10 relative">
                        {/* Timeline dot */}
                        <div className={`absolute -left-8.5 md:-left-12 top-4 h-4 w-4 rounded-full border-2 border-foreground ${exp.color} z-10`} />

                        <div className="border-4 border-foreground bg-background text-foreground p-5 shadow-[6px_6px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-foreground)]">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                                <span className={`inline-block border-2 border-foreground px-2 py-0.5 text-xs font-bold text-foreground shadow-[2px_2px_0_0_var(--color-foreground)] ${exp.color}`}>
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-sm font-bold mb-3">{exp.company}</h4>
                            <p className="font-medium text-sm border-t-2 border-dashed border-foreground pt-3">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
