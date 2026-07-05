export const SectionHeading = ({ title, color = "bg-primary text-primary-foreground" }: { title: string, color?: string }) => {
    return (
        <div className="mb-10 flex justify-center">
            <h2 className={`inline-block border-4 border-foreground px-4 py-2 text-2xl font-black uppercase tracking-widest shadow-[4px_4px_0_0_var(--color-foreground)] ${color} sm:text-4xl`}>
                {title}
            </h2>
        </div>
    );
};
