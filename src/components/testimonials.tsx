import { SectionHeading } from "./section-heading";
import { User } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Product Manager",
        company: "TechNova",
        message: "Ibrahim completely transformed our frontend architecture. The performance improvements were immediate, and the codebase has never been cleaner. An absolute professional.",
        color: "bg-orange-100 dark:bg-orange-900/40"
    },
    {
        name: "David Chen",
        role: "CTO",
        company: "CodeWorks",
        message: "Working with Ibrahim was a breath of fresh air. He doesn't just write code; he understands the business needs and consistently delivers exceptional, highly-responsive user experiences.",
        color: "bg-teal-100 dark:bg-teal-900/40"
    },
    {
        name: "Elena Rodriguez",
        role: "Lead Designer",
        company: "CreativeAgency",
        message: "Finally, a developer who truly respects design! Ibrahim's attention to detail is unmatched. He brought our complex mockups to life perfectly with seamless micro-animations.",
        color: "bg-violet-100 dark:bg-violet-900/40"
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Testimonials" color="bg-yellow-100 dark:bg-yellow-900/40 text-foreground" />
            
            <div className="grid gap-6 md:grid-cols-3 mt-4">
                {TESTIMONIALS.map((testimonial, idx) => (
                    <div key={idx} className={`relative flex flex-col p-6 border-4 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-foreground)] text-foreground ${testimonial.color}`}>
                        <div className="flex items-center gap-4 mb-5 border-b-2 border-dashed border-foreground pb-4">
                            <div className="flex shrink-0 items-center justify-center h-12 w-12 rounded-full border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0_0_var(--color-foreground)]">
                                <User className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-black uppercase tracking-tight text-sm">{testimonial.name}</h3>
                                <p className="text-[10px] font-bold opacity-80 uppercase mt-0.5">{testimonial.role} @ {testimonial.company}</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm leading-relaxed relative z-10">
                                <span className="absolute -left-3 -top-3 text-5xl opacity-20 font-serif font-black -z-10">"</span>
                                {testimonial.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
