import { SectionHeading } from "./section-heading";
import { User } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const TESTIMONIALS = [
    {
        name: "Lidetu Tadesse",
        role: "Founder",
        company: "4k Labs",
        message: "He possesses exceptional technical skills, particularly in web development, and consistently takes full ownership of his projects to deliver high-quality results. Combining stellar communication with a highly accountable work ethic, he ensures a smooth development process from start to finish. He doesn't just build functional applications; he focuses heavily on performance, clean architecture, and modern best practices to ensure the codebase is scalable and optimized. I highly recommend him as an invaluable asset to any engineering team.",
        color: "bg-orange-100 dark:bg-orange-900/40"
    },
    {
        name: "Emran Kamil",
        role: "Software Engineer",
        company: "Eaglepoint AI",
        message: "His technical skills, especially in frontend development, are really impressive. I saw him build features that I honestly didn't think were possible. He doesn't just build what's asked. He takes time to understand the problem, suggests better solutions when needed, and always thinks about what is best for the product, not just the code. He's someone I can trust to take ownership of his work and deliver great results. I'd be happy to work with him again anytime.",
        color: "bg-teal-100 dark:bg-teal-900/40"
    },
    {
        name: "LLuis",
        role: "Founder",
        company: "Wavic",
        message: "After months of working together, he has demonstrated strong front-end skills and excellent communication when collaborating with the back-end lead. He consistently exceeded expectations with high-quality deliverables, showing great commitment, professionalism, and a collaborative spirit. On top of his technical strengths, his willingness to help, approachable nature, and positive energy have made working with him truly enjoyable. If you're looking for someone with strong ownership, consistent results in front-end development (including building components from scratch), and a great connection with back-end and overall product development, he's the right profile",
        color: "bg-yellow-50 dark:bg-yellow-900/20"
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Testimonials" color="bg-yellow-100 dark:bg-yellow-900/40 text-foreground" />
            
            {/* Added relative and px adjustments to give the side buttons breathing room on desktop */}
            <Carousel opts={{loop:true}} className="relative w-full md:px-12">
                <CarouselContent className="pb-0">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <CarouselItem key={idx} >
                            <div className={`relative flex flex-col p-6 border-4 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-foreground)] text-foreground ${testimonial.color}`}>
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
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* 
                  Container forces buttons to layout horizontally centered at the bottom on mobile (`flex justify-center gap-4 mt-6`)
                  On desktop (`md:...`), we reset the container layout so Shadcn's absolute positions take back over.
                */}
                <div className="flex justify-center gap-4 md:block">
                    <CarouselPrevious size={'lg'} className="static -translate-y-4/3 border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] md:shadow-[6px_6px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5  hover:shadow-[6px_6px_0_0_var(--color-foreground)] text-foreground md:absolute md:-left-4 md:top-1/2 md:-translate-y-1/2" />
                    <CarouselNext className="static -translate-y-4/3 border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] md:shadow-[6px_6px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5  hover:shadow-[6px_6px_0_0_var(--color-foreground)] text-foreground md:absolute md:-right-4 md:top-1/2 md:-translate-y-1/2" />
                </div>
            </Carousel>
        </section>
    );
};