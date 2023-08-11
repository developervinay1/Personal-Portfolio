import IntroSection from "@/components/usercomponent/IntroSection";
import { Navbar } from "@/components/usercomponent/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Navbar />
      <IntroSection />
    </main>
  );
}
