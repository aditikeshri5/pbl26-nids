const reviews = [
  {
    title: "Signature-Based IDS",
    desc: "Early studies on systems like Snort (Roesch, 1999) focused on rule-based detection of known attack signatures. These systems achieved high accuracy for known threats but failed to detect zero-day attacks and required frequent signature updates.",
    tag: "1️⃣",
  },
  {
    title: "Anomaly-Based Detection",
    desc: "Lee and Stolfo (2000) introduced data mining techniques to detect abnormal network behavior. These methods improved detection of unknown attacks but produced higher false positives and required careful feature selection.",
    tag: "2️⃣",
  },
  {
    title: "Machine Learning-Based IDS",
    desc: "Recent research applied algorithms such as SVM, Decision Trees, and Random Forest using datasets like NSL-KDD. These models improved detection accuracy for both known and unknown attacks but required large datasets and high computational resources.",
    tag: "3️⃣",
  },
  {
    title: "Cryptographic Security",
    desc: "Studies on hashing and digital signatures ensured data integrity and authentication in network communication. However, these approaches focused on security verification rather than intrusion classification.",
    tag: "4️⃣",
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
