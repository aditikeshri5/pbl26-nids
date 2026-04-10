import { BookOpen, PenTool, Globe, BarChart3, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const subsections = [
  {
    icon: BookOpen,
    title: "Research Work Completed",
    items: [
      "Developed understanding of Network Intrusion Detection Systems (NIDS)",
      "Studied how NIDS monitors network traffic and detects threats",
      "Explored detection techniques: Signature-based and Anomaly-based",
      "Reviewed comparison between IDS and IPS systems",
    ],
  },
  {
    icon: PenTool,
    title: "Writing Progress",
    items: [
      "Completed Introduction section",
      'Drafted "What is NIDS and How it Works"',
      'Started "Types of NIDS"',
    ],
  },
  {
    icon: Globe,
    title: "Sources Referred",
    items: [
      "Cybersecurity blogs and online articles",
      "Class notes and study materials",
      "Basic research references",
    ],
  },
  {
    icon: ArrowRight,
    title: "Next Steps",
    items: [
      "Complete remaining sections (Advantages, Limitations, Applications)",
      "Add diagrams and examples",
      "Perform proofreading and final formatting",
    ],
  },
];

const ResearchProgress = () => (
  <section id="research-progress" className="section-container">
    <div className="gold-badge mb-4">Section 11</div>
    <h2 className="section-title">Progress on Research Paper (NIDS)</h2>
    <p className="section-subtitle">Tracking milestones toward publication</p>

    {/* Current Status Card */}
    <div className="academic-card border-primary/20 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">Current Status</h3>
          <p className="text-sm text-muted-foreground">Core concepts and foundation sections ready</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Overall Completion</span>
          <span className="font-mono font-semibold text-primary">~35%</span>
        </div>
        <Progress value={35} className="h-3" />
        <p className="text-xs text-muted-foreground">Approximately 30–40% of the research paper completed</p>
      </div>
    </div>

    {/* Subsection Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {subsections.map(({ icon: Icon, title, items }, i) => (
        <div key={i} className="academic-card">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display text-foreground">{title}</h3>
          </div>
          <ul className="space-y-3">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ResearchProgress;
