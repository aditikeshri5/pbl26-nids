import Navbar from "@/components/Navbar";
import Timer from "@/components/Timer";
import TitleSection from "@/components/TitleSection";
import ProblemStatement from "@/components/ProblemStatement";
import LiteratureReview from "@/components/LiteratureReview";
import ResearchGap from "@/components/ResearchGap";
import Methodology from "@/components/Methodology";
import DatasetSection from "@/components/DatasetSection";
import DatasetPrediction from "@/components/DatasetPrediction";
import LiveDemo from "@/components/LiveDemo";
import ResultsAnalysis from "@/components/ResultsAnalysis";
import ExpectedOutcomes from "@/components/ExpectedOutcomes";
import TeamCredits from "@/components/TeamCredits";
import ResearchProgress from "@/components/ResearchProgress";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Timer />
    <main className="pt-14">
      <TitleSection />
      <ProblemStatement />
      <LiteratureReview />
      <ResearchGap />
      <Methodology />
      <DatasetSection />
      <DatasetPrediction />
      <LiveDemo />
      <ResultsAnalysis />
      <ExpectedOutcomes />
      <ResearchProgress />
      <TeamCredits />
    </main>
  </div>
);

export default Index;
