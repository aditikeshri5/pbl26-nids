const TeamCredits = () => (
  <section id="team" className="section-container">
    <div className="gold-badge mb-4">Section 10</div>
    <h2 className="section-title">Team &amp; Credits</h2>
    <p className="section-subtitle">The people behind this research</p>

    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
      <div className="academic-card text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mx-auto mb-4">
          👩‍🏫
        </div>
        <h3 className="text-lg font-semibold font-display text-foreground">Dr. Surbhi Sharma</h3>
        <p className="text-sm text-primary mt-1">Project Guide</p>
        <p className="text-xs text-muted-foreground mt-1">Dept. of CSE, MUJ</p>
      </div>

      <div className="academic-card text-center border-primary/20">
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl mx-auto mb-4">
          👩‍💻
        </div>
        <h3 className="text-lg font-semibold font-display text-foreground">Aditi Keshri</h3>
        <p className="text-sm text-primary mt-1">Student Researcher</p>
        <p className="text-xs text-muted-foreground mt-1">Reg. No: 2427030217</p>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="academic-card max-w-2xl mx-auto text-center mb-12">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Disclaimer:</strong> This is an academic demonstration prototype.
        The system demonstrates suspicious activity detection and does not claim attack prevention,
        malware blocking, or detection before link interaction.
      </p>
    </div>

    {/* Footer */}
    <footer className="text-center border-t border-border pt-8">
      <p className="font-display text-lg font-semibold text-foreground">Manipal University Jaipur</p>
      <p className="text-sm text-muted-foreground mt-1">Department of Computer Science &amp; Engineering</p>
      <p className="text-sm text-primary font-semibold mt-1">PBL 2026</p>
    </footer>
  </section>
);

export default TeamCredits;
