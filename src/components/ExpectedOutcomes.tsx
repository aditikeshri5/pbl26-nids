const outcomes = [
  "Successful demonstration of hybrid ML + cryptography approach",
  "Dataset-trained ML model for intrusion detection",
  "Live behavior-based detection using online learning",
  "Privacy-preserving and ethical monitoring",
  "Web-based academic prototype",
  "Research-oriented system design",
];

const publications = [
  "Project structured with intent to publish a research paper",
  "Methodology and experimental results documented",
  "Comparative analysis with existing IDS approaches",
  "Scope for submission to student conferences or journals",
  "Foundation for further research and enhancement",
];

const ExpectedOutcomes = () => (
  <section id="outcomes" className="section-container">
    <div className="gold-badge mb-4">Section 09</div>
    <h2 className="section-title">Expected Outcomes &amp; Research Publication</h2>
    <p className="section-subtitle">Projected impact and publication roadmap</p>

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="academic-card">
        <h3 className="text-xl font-semibold font-display text-foreground mb-5">Expected Outcomes</h3>
        <ul className="space-y-3">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">✓</span>
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="academic-card border-primary/20">
        <h3 className="text-xl font-semibold font-display text-primary mb-5">Research Publication</h3>
        <ul className="space-y-3">
          {publications.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="text-primary mt-0.5">📄</span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 text-xs text-primary">
          This project is designed with the objective of academic research publication.
        </div>
      </div>
    </div>
  </section>
);

export default ExpectedOutcomes;
