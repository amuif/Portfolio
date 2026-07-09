import { SectionHeading } from "./section-heading";
import { User } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Touch swipe support
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section id="testimonials" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading title="Testimonials" color="bg-yellow-100 dark:bg-yellow-900/40 text-foreground" />
            
            <div className="relative w-full">
                {/* Carousel Container */}
                <div 
                    className="relative overflow-hidden rounded-lg"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <div 
                                key={idx} 
                                className="w-full shrink-0 px-0 md:px-12"
                            >
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
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6 md:block">
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="static border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)] text-foreground bg-background rounded-md p-2 md:absolute md:-left-2 md:top-1/2 md:-translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="static border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)] text-foreground bg-background rounded-md p-2 md:absolute md:-right-2 md:top-1/2 md:-translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                if (!isTransitioning) {
                                    setIsTransitioning(true);
                                    setCurrentIndex(idx);
                                    setTimeout(() => setIsTransitioning(false), 500);
                                }
                            }}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                    ? 'w-8 bg-foreground' 
                                    : 'w-3 bg-foreground/30 hover:bg-foreground/50'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};