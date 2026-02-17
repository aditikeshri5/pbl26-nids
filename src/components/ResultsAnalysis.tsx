const metrics = [
  { label: "Model Accuracy", value: "~77%", desc: "Random Forest on NSL-KDD" },
  { label: "Detection Type", value: "Behavior", desc: "Metadata & flow analysis" },
  { label: "Encryption Safe", value: "Yes", desc: "No payload inspection" },
  { label: "Early Warning", value: "Active", desc: "Pre-emptive alerting" },
];

const ResultsAnalysis = () => (
  <section id="results" className="section-container">
    <div className="gold-badge mb-4">Section 08</div>
    <h2 className="section-title">Results &amp; Analysis</h2>
    <p className="section-subtitle">Performance evaluation and comparative insights</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((m, i) => (
        <div key={i} className="academic-card text-center">
          <p className="text-3xl font-bold font-display text-primary mb-1">{m.value}</p>
          <p className="text-sm font-semibold text-foreground mb-1">{m.label}</p>
          <p className="text-xs text-muted-foreground">{m.desc}</p>
        </div>
      ))}
    </div>

    {/* Simple bar chart */}
    <div className="academic-card max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold font-display text-foreground mb-6 text-center">
        Comparison: Traditional IDS vs. Hybrid NIDS
      </h3>
      <div className="space-y-4">
        <Bar label="Payload-Based IDS" value={65} />
        <Bar label="ML-Only IDS" value={72} />
        <Bar label="Hybrid NIDS (Ours)" value={77} highlight />
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Accuracy comparison on NSL-KDD dataset (approximate values)
      </p>
    </div>
  </section>
);

const Bar = ({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className={highlight ? "text-primary font-semibold" : "text-muted-foreground"}>{label}</span>
      <span className={highlight ? "text-primary font-semibold" : "text-muted-foreground"}>{value}%</span>
    </div>
    <div className="h-3 bg-secondary rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${highlight ? "bg-primary" : "bg-muted-foreground/30"}`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default ResultsAnalysis;
