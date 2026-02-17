const attacks = [
  { name: "DoS", desc: "Denial of Service – overwhelming network resources", color: "bg-destructive/20 text-destructive" },
  { name: "Probe", desc: "Surveillance and scanning of network vulnerabilities", color: "bg-primary/15 text-primary" },
  { name: "R2L", desc: "Remote to Local – unauthorized remote access attempts", color: "bg-primary/15 text-primary" },
  { name: "U2R", desc: "User to Root – privilege escalation attacks", color: "bg-destructive/20 text-destructive" },
];

const DatasetSection = () => (
  <section id="dataset" className="section-container">
    <div className="gold-badge mb-4">Section 05</div>
    <h2 className="section-title">Dataset</h2>
    <p className="section-subtitle">NSL-KDD benchmark dataset for intrusion detection research</p>

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="academic-card">
        <h3 className="text-xl font-semibold font-display text-foreground mb-4">NSL-KDD Overview</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          NSL-KDD is an improved version of the original KDD'99 dataset, widely used as a benchmark for evaluating intrusion detection systems. It eliminates redundant records, ensuring unbiased model training and evaluation.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Binary classification strategy maps all attack types to a single "Suspicious" label, enabling focused detection of anomalous behavior for supervised offline training.
        </p>
      </div>

      <div className="academic-card">
        <h3 className="text-xl font-semibold font-display text-foreground mb-4">Attack Categories</h3>
        <div className="space-y-3">
          {attacks.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`px-2 py-0.5 rounded-md text-xs font-bold shrink-0 ${a.color}`}>{a.name}</span>
              <span className="text-sm text-muted-foreground">{a.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DatasetSection;
