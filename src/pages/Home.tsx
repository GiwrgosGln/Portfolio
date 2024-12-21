import Experience from "../components/experience";
import Header from "../components/header";
import Projects from "../components/projects";
import Social from "../components/social";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center py-10 xl:py-20">
      <Header />
      <Experience />
      <Projects />
      <Social />
    </div>
  );
}
