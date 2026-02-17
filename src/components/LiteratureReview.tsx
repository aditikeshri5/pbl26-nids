const reviews = [
  {
    title: "Traditional IDS",
    desc: "Signature-based systems like Snort and Suricata match known attack patterns but fail against zero-day threats and novel attack vectors.",
    tag: "Baseline",
  },
  {
    title: "ML-Based IDS",
    desc: "Machine learning models (SVM, Random Forest, Neural Networks) improve detection of unknown attacks through pattern recognition and anomaly detection.",
    tag: "Advancement",
  },
  {
    title: "Cryptographic Security",
    desc: "Cryptographic hashing and integrity verification techniques ensure data authenticity and detect tampering in network communications.",
    tag: "Security Layer",
  },
  {
    title: "Existing Limitations",
    desc: "Current approaches lack integration between ML classification and data integrity verification. Most systems cannot handle encrypted traffic effectively.",
    tag: "Gap",
  },
];

const LiteratureReview = () => (
  <section id="literature" className="section-container">
    <div className="gold-badge mb-4">Section 02</div>
    <h2 className="section-title">Literature Review</h2>
    <p className="section-subtitle">Survey of existing intrusion detection approaches</p>

    <div className="space-y-4">
      {reviews.map((r, i) => (
        <div key={i} className="academic-card flex flex-col sm:flex-row sm:items-start gap-4">
          <span className="gold-badge shrink-0">{r.tag}</span>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground mb-1">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LiteratureReview;
