import { useState } from "react";

const sampleData = [
  { id: 1, duration: 0, protocol: "tcp", service: "http", flag: "SF", src_bytes: 181, dst_bytes: 5450 },
  { id: 2, duration: 0, protocol: "tcp", service: "http", flag: "SF", src_bytes: 239, dst_bytes: 486 },
  { id: 3, duration: 0, protocol: "tcp", service: "private", flag: "S0", src_bytes: 0, dst_bytes: 0 },
  { id: 4, duration: 0, protocol: "tcp", service: "http", flag: "SF", src_bytes: 235, dst_bytes: 1337 },
  { id: 5, duration: 0, protocol: "udp", service: "private", flag: "SF", src_bytes: 105, dst_bytes: 146 },
];

const DatasetPrediction = () => {
  const [uploaded, setUploaded] = useState(false);
  const [results, setResults] = useState<{ id: number; label: string; confidence: number }[] | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
    setResults(null);
  };

  const handlePredict = () => {
    setProcessing(true);
    setTimeout(() => {
      setResults([
        { id: 1, label: "Normal", confidence: 94.2 },
        { id: 2, label: "Normal", confidence: 91.7 },
        { id: 3, label: "Suspicious Activity Detected", confidence: 87.3 },
        { id: 4, label: "Normal", confidence: 96.1 },
        { id: 5, label: "Suspicious Activity Detected", confidence: 78.5 },
      ]);
      setProcessing(false);
    }, 2000);
  };

  return (
    <section id="dataset-prediction" className="section-container">
      <div className="gold-badge mb-4">Section 06</div>
      <h2 className="section-title">Dataset-Based ML Prediction</h2>
      <p className="section-subtitle">Offline trained Random Forest model analyzing unseen data samples</p>

      <div className="academic-card max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="gold-badge">Academic Demonstration – Dataset-Based Prediction</span>
        </div>

        {/* Upload simulation */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Input: Upload CSV Dataset Sample</h4>
          <button
            onClick={handleUpload}
            className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-navy-lighter text-foreground text-sm font-medium transition-all border border-border hover:border-primary/30"
          >
            📁 Simulate CSV Upload
          </button>
        </div>

        {uploaded && (
          <>
            {/* Data preview */}
            <div className="mb-6 overflow-x-auto">
              <h4 className="text-sm font-semibold text-foreground mb-3">Data Preview</h4>
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-border">
                    {Object.keys(sampleData[0]).map((k) => (
                      <th key={k} className="text-left py-2 px-3 text-muted-foreground font-medium">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row) => (
                    <tr key={row.id} className="border-b border-border/50">
                      {Object.values(row).map((v, j) => (
                        <td key={j} className="py-2 px-3 text-foreground/80">{String(v)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Predict button */}
            {!results && (
              <button
                onClick={handlePredict}
                disabled={processing}
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
              >
                {processing ? "⏳ Processing Features & Running Model..." : "🧠 Run ML Prediction"}
              </button>
            )}

            {/* Results */}
            {results && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">ML Classification Results</h4>
                <div className="space-y-2">
                  {results.map((r) => (
                    <div
                      key={r.id}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm ${
                        r.label === "Normal"
                          ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
                          : "bg-destructive/5 border-destructive/20 text-destructive"
                      }`}
                    >
                      <span className="font-mono">Sample #{r.id}</span>
                      <span className="font-semibold">{r.label}</span>
                      <span className="text-xs opacity-70">{r.confidence}% confidence</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DatasetPrediction;
