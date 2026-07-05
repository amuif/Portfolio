import cvPdf from "../data/cv.pdf";
import { ArrowRight, Code, Share2 } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="relative mx-auto flex min-h-[85dvh] w-full max-w-6xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
            {/* Decorative background shapes */}
            <div className="absolute top-10 left-10 h-16 w-16 rounded-full border-4 border-foreground bg-pink-200 dark:bg-pink-900/50 shadow-[4px_4px_0_0_var(--color-foreground)] max-md:hidden" />
            <div className="absolute right-10 bottom-20 h-24 w-24 rotate-12 border-4 border-foreground bg-blue-200 dark:bg-blue-900/50 shadow-[6px_6px_0_0_var(--color-foreground)] max-md:hidden" />
            <div className="absolute top-1/4 right-20 h-12 w-12 -rotate-12 border-4 border-foreground bg-yellow-200 dark:bg-yellow-900/50 shadow-[4px_4px_0_0_var(--color-foreground)] max-md:hidden" />

            <div className="z-10 w-full max-w-4xl space-y-4 flex flex-col items-center">
                <div className="inline-block border-2 border-foreground bg-orange-100 dark:bg-orange-900/50 text-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_0_var(--color-foreground)]">
                    👋 Hi, my name is Ibrahim Hassen
                </div>

                <h1 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl text-foreground">
                    I turn ideas into <br className="hidden md:block" />
                    <span className="inline-block mt-2 -rotate-2 border-4 border-foreground bg-indigo-200 dark:bg-indigo-900/50 text-foreground px-4 py-2 shadow-[4px_4px_0_0_var(--color-foreground)] hover:rotate-0 transition-transform">Reality</span>
                </h1>

                <h2 className="text-xl font-bold sm:text-3xl text-foreground">
                    through code.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base font-bold sm:text-lg border-x-4 border-foreground px-4 py-3 bg-white dark:bg-zinc-900 text-foreground shadow-[4px_4px_0_0_var(--color-foreground)]">
                    I am a software engineer specializing in building exceptional digital
                    experiences that are as beautiful as they are functional.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href={cvPdf}
                        download
                        className="flex items-center gap-2 border-4 border-foreground bg-emerald-200 dark:bg-emerald-900/50 text-foreground px-6 py-3 text-sm font-black uppercase tracking-wider shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-foreground)]"
                    >
                        Get CV <ArrowRight className="h-5 w-5" />
                    </a>

                    <div className="flex gap-3">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center border-4 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-foreground)]" aria-label="GitHub">
                            <Code className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center border-4 border-foreground bg-blue-100 dark:bg-blue-900/50 text-foreground shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-foreground)]" aria-label="LinkedIn">
                            <Share2 className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
