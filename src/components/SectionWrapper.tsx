interface SectionWrapperProps {
  type: "white" | "gray" | "main";
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ type, className = "", children }: SectionWrapperProps) {
  if (type === "white") {
    return (
      <section className={`relative mx-auto max-w-screen-lg px-4 py-16 text-center ${className}`}>
        {children}
      </section>
    );
  }

  if (type === "main") {
    return (
      <section className="bg-main text-white">
        <div className={`relative mx-auto max-w-screen-lg px-4 py-16 text-center ${className}`}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-page-green">
      <div className={`relative mx-auto max-w-screen-lg px-4 py-16 text-center ${className}`}>
        {children}
      </div>
    </section>
  );
}
