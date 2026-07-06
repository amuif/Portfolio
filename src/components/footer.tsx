export const Footer = () => {
    return (
        <footer className="w-full  bg-slate-50 dark:bg-zinc-950 text-foreground px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter shadow-sm">Ibrahim Hassen</h2>
                    <p className="mt-1 text-sm sm:text-base font-bold">Building beautiful digital experiences.</p>
                </div>

                <div className="flex flex-col items-center gap-4 md:items-end">
                    <a href="mailto:amudiworks@gmail.com" className="border-4 border-foreground bg-yellow-100 dark:bg-yellow-900/50 text-foreground px-6 py-3 text-lg sm:text-xl font-black uppercase shadow-[4px_4px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-foreground)]">
                        Let's Talk
                    </a>

                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                        <a href="https://github.com/amuif" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-zinc-100 dark:bg-white text-foreground dark:text-black shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold hover:bg-slate-200 dark:hover:bg-zinc-800">
                            <img src="/github.svg" alt='github' className='h-5 w-5' />  GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ibrahim-hassen/" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-zinc-100 dark:bg-white text-foreground dark:text-black shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold hover:bg-slate-200 dark:hover:bg-zinc-800">
                            <img src="/linkedin.svg" alt='linkedin' className='h-5 w-5' /> LinkedIn
                        </a>
                        <a href="https://x.com/Amuif1" target="_blank" rel="noreferrer" className="flex gap-2 px-3 py-2 text-sm items-center justify-center border-4 border-foreground bg-zinc-100 dark:bg-white text-foreground dark:text-black shadow-[3px_3px_0_0_var(--color-foreground)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--color-foreground)] uppercase font-bold hover:bg-slate-200 dark:hover:bg-zinc-800">
                            <img src="/x.svg" alt='twitter' className='h-5 w-5' /> Twitter
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
