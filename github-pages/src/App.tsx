import { Header } from "./components/header";
import { About } from "./components/about";
import { Career } from "./components/career";
import { Certification } from "./components/certification";
import { Skills } from "./components/skills";
import { SocialLinks } from "./components/social-links";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 bg-[linear-gradient(to_right,#f0e6d2_1px,transparent_1px),linear-gradient(to_bottom,#f0e6d2_1px,transparent_1px)] bg-[size:20px_20px]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-red-200"></div>
          <Header />
        </div>
        <main className="px-20 border-l-2 border-r-2 border-blue-100">
          <About />
          <Career />
          <Certification />
          <Skills />
          <SocialLinks />
        </main>
        <footer className="bg-blue-100 text-blue-800 text-center py-4 text-sm">
          <p>&copy; 2023 Shunji Muto. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
