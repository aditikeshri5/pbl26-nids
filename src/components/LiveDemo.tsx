import { useState, useEffect } from "react";

const LiveDemo = () => {
  const [connections, setConnections] = useState(12);
  const [duration, setDuration] = useState(0);
  const [prediction, setPrediction] = useState("Normal");
  const [modelUpdated, setModelUpdated] = useState(false);
  const [monitoring, setMonitoring] = useState(false);

  useEffect(() => {
    if (!monitoring) return;

    const interval = setInterval(() => {
      setDuration((d) => d + 1);
      setConnections(Math.floor(Math.random() * 30) + 5);

      // Simulate occasional suspicious detection
      if (Math.random() > 0.7) {
        setPrediction("Suspicious Activity Detected");
      } else {
        setPrediction("Normal");
      }
      setModelUpdated(true);
      setTimeout(() => setModelUpdated(false), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, [monitoring]);

  return (
    <section id="live-demo" className="section-container">
      <div className="gold-badge mb-4">Section 07</div>
      <h2 className="section-title">Live ML Demonstration</h2>
      <p className="section-subtitle">System-wide network monitoring with incremental learning</p>

      <div className="academic-card max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="gold-badge">Academic Demonstration Prototype</span>
        </div>

        {/* Start button */}
        <button
          onClick={() => setMonitoring(!monitoring)}
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all mb-8 ${
            monitoring
              ? "bg-destructive/10 border border-destructive/30 text-destructive hover:bg-destructive/20"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {monitoring ? "⏹ Stop Monitoring" : "▶ Start Live Monitoring"}
        </button>

        {/* Dashboard grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <DashCard label="Input" value="System-wide network activity" sub="All applications" />
          <DashCard label="Active Connections" value={String(connections)} sub="Real-time count" highlight />
          <DashCard label="Monitoring Duration" value={`${duration}s`} sub="Elapsed time" />
          <DashCard label="ML Algorithm" value="SGD Classifier" sub="Online / Incremental Learning" />
        </div>

        {/* Prediction output */}
        <div
          className={`rounded-xl border p-5 text-center transition-all duration-500 ${
            prediction === "Normal"
              ? "bg-emerald-500/5 border-emerald-500/20"
              : "bg-destructive/5 border-destructive/20"
          }`}
        >
          <p className="text-xs text-muted-foreground mb-1">Live Prediction</p>
          <p
            className={`text-lg font-bold font-display ${
              prediction === "Normal" ? "text-emerald-400" : "text-destructive"
            }`}
          >
            {prediction}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Model Update: {modelUpdated ? (
              <span className="text-primary">✓ Successful</span>
            ) : (
              <span>Waiting...</span>
            )}
          </p>
        </div>

        <p className="text-xs text-muted-foreground mt-6 leading-relaxed text-center">
          This section demonstrates incremental learning from live system behavior
          without inspecting encrypted content.
        </p>
      </div>
    </section>
  );
};

const DashCard = ({ label, value, sub, highlight }: { label: string; value: string; sub: string; highlight?: boolean }) => (
  <div className="bg-secondary/50 rounded-xl border border-border p-4">
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className={`text-lg font-semibold font-display ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
    <p className="text-xs text-muted-foreground">{sub}</p>
  </div>
);

export default LiveDemo;
