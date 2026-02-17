const gaps = [
  "Existing systems rely heavily on packet payload inspection",
  "Encrypted traffic limits detection effectiveness",
  "Limited integration of ML with data integrity mechanisms",
];

const innovations = [
  { icon: "🧠", text: "Behavior-based intrusion detection without payload inspection" },
  { icon: "🤖", text: "Machine learning for binary classification of network activity" },
  { icon: "🔑", text: "Cryptographic hashing (SHA-256) for data integrity verification" },
  { icon: "🔬", text: "Offline dataset analysis + live system behavior demonstration" },
];

const ResearchGap = () => (
  <section id="research-gap" className="section-container">
    <div className="gold-badge mb-4">Section 03</div>
    <h2 className="section-title">Research Gap &amp; Innovation</h2>
    <p className="section-subtitle">What's missing and how we address it</p>

    <div className="grid lg:grid-cols-2 gap-6">
      {/* Gaps */}
      <div className="academic-card">
        <h3 className="text-xl font-semibold font-display text-foreground mb-5">Research Gaps</h3>
        <ul className="space-y-3">
          {gaps.map((g, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1 w-2 h-2 rounded-full bg-destructive shrink-0" />
              {g}
            </li>
          ))}
        </ul>
      </div>

      {/* Innovation */}
      <div className="academic-card border-primary/20">
        <h3 className="text-xl font-semibold font-display text-primary mb-5">Our Innovation</h3>
        <ul className="space-y-4">
          {innovations.map((inv, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="text-lg">{inv.icon}</span>
              {inv.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ResearchGap;
