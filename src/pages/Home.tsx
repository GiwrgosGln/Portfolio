import Experience from "../components/experience";
import Header from "../components/header";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center py-20">
      <Header />
      <Experience />
      <Projects />
    </div>
  );
}
