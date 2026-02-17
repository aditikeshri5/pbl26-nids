const cards = [
  {
    title: "Input Data",
    icon: "📥",
    items: [
      "Offline Dataset: NSL-KDD",
      "Live Input: System-wide network activity",
      "Metadata-based analysis",
      "No packet payload inspection",
    ],
  },
  {
    title: "ML & Cryptography",
    icon: "⚙️",
    items: [
      "ML Model (Offline): Random Forest",
      "ML Model (Live): Online Learning (SGD)",
      "Cryptography: SHA-256 hashing",
      "Binary classification: Normal / Suspicious",
    ],
  },
  {
    title: "Detection & Output",
    icon: "🎯",
    items: [
      "Behavior-based analysis",
      "Early warning alerts",
      "Decision support system",
    ],
  },
];

const flowSteps = [
  "System Network Activity / Dataset",
  "Feature Extraction",
  "Cryptographic Hash Generation",
  "ML Prediction",
  "Incremental Model Update",
  "Suspicious Activity Alert",
];

const Methodology = () => (
  <section id="methodology" className="section-container">
    <div className="gold-badge mb-4">Section 04</div>
    <h2 className="section-title">Methodology</h2>
    <p className="section-subtitle">Three-stage hybrid detection pipeline</p>

    <div className="grid md:grid-cols-3 gap-5 mb-16">
      {cards.map((c, i) => (
        <div key={i} className="academic-card">
          <span className="text-2xl mb-3 block">{c.icon}</span>
          <h3 className="text-lg font-semibold font-display text-foreground mb-4">{c.title}</h3>
          <ul className="space-y-2">
            {c.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Flowchart */}
    <div className="academic-card max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold font-display text-foreground mb-6 text-center">System Flowchart</h3>
      <div className="flex flex-col items-center gap-1">
        {flowSteps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="px-6 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground font-medium text-center w-full max-w-xs">
              {step}
            </div>
            {i < flowSteps.length - 1 && (
              <svg className="w-4 h-6 text-primary my-1" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 0v18M3 14l5 6 5-6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Methodology;
