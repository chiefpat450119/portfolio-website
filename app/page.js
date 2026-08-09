import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import StarfieldBackground from "./components/StarfieldBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d0a14] relative">
      {/* <StarfieldBackground /> */}
      <Navbar />
      <div className="container mt-24 mx-auto px-6 py-4 relative z-10">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
