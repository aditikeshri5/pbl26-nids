const problems = [
  {
    icon: "🌐",
    title: "Growing Cyber Threats",
    desc: "Modern networks face increasingly sophisticated and frequent cyberattacks targeting critical infrastructure and sensitive data.",
  },
  {
    icon: "🔒",
    title: "Payload Inspection Limits",
    desc: "Traditional intrusion detection relies on inspecting packet payloads, which becomes ineffective as more traffic is encrypted.",
  },
  {
    icon: "🔐",
    title: "Encrypted Traffic Challenges",
    desc: "The widespread adoption of TLS/SSL encryption renders content-based detection methods largely obsolete.",
  },
  {
    icon: "📊",
    title: "Shift Toward Behavior-Based Detection",
    desc: "A paradigm shift toward analyzing network behavior patterns rather than payload content is essential for modern intrusion detection systems.",
  },
];

const ProblemStatement = () => (
  <section id="problem" className="section-container">
    <div className="gold-badge mb-4">Section 01</div>
    <h2 className="section-title">Problem Statement</h2>
    <p className="section-subtitle">Why current intrusion detection systems fall short</p>

    <div className="grid sm:grid-cols-2 gap-5">
      {problems.map((p, i) => (
        <div key={i} className="academic-card group">
          <span className="text-2xl mb-4 block">{p.icon}</span>
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProblemStatement;
