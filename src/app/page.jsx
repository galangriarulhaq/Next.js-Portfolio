import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import AchievementsSection from "./component/AchievementsSection";
import ProjectsSection from "./component/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
