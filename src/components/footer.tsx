import { Code, Hash, Share2 } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full border-t-8 border-foreground bg-primary text-primary-foreground px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter shadow-sm">Ibrahim Hassen</h2>
                    <p className="mt-1 text-sm sm:text-base font-bold">Building beautiful digital experiences.</p>
                </div>
                
                <div className="flex flex-col items-center gap-4 md:items-end">
                    <a href="mailto:hello@example.com" className="border-4 border-foreground bg-secondary text-secondary-foreground px-6 py-3 text-lg sm:text-xl font-black uppercase shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-foreground)]">
                        Let's Talk
                    </a>
                    
                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-background text-foreground shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold">
                            <Code className="h-4 w-4" /> GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-secondary text-secondary-foreground shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold">
                            <Share2 className="h-4 w-4" /> LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold">
                            <Hash className="h-4 w-4" /> Twitter
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto mt-8 max-w-6xl border-t-2 border-foreground pt-6 text-center text-xs font-bold">
                <p>&copy; {new Date().getFullYear()} Ibrahim Hassen. All rights reserved.</p>
            </div>
        </footer>
    );
};
