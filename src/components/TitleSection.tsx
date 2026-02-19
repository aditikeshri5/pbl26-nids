const TitleSection = () => (
  <section id="title" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
    </div>

    <div className="section-container text-center relative z-10">
      <div className="gold-badge mb-8">PBL 2026 Presentation</div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-tight mb-6 text-foreground">
        Hybrid Network Intrusion
        <br />
        Detection System using
        <br />
        <span className="text-[hsl(var(--gold))]">Cryptography</span>
        {" & "}
        <span className="text-[hsl(var(--gold))]">Machine Learning</span>
      </h1>

      <p className="text-muted-foreground text-base mb-10">
        PBL 2026 – Department of Computer Science &amp; Engineering
      </p>

      <div className="inline-flex flex-col sm:flex-row gap-4 items-center text-sm text-muted-foreground mb-8">
        <span className="text-foreground font-semibold">Aditi Keshri</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>Reg. No: 2427030217</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>Guide: Dr. Surbhi Sharma</span>
      </div>

      <div className="text-xs text-muted-foreground tracking-widest uppercase">
        Manipal University Jaipur
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 animate-bounce">
        <svg className="mx-auto w-5 h-5 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
);

export default TitleSection;
