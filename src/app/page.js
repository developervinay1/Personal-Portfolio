import AboutSection from "@/components/usercomponent/AboutSection";
import IntroSection from "@/components/usercomponent/IntroSection";
import { Navbar } from "@/components/usercomponent/Navbar";
import ProjectsSection from "@/components/usercomponent/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
