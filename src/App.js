import Navbar from "./components/navigation/Navbar";
import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import SectionComponents from "./components/SectionComponents";
import SectionFaq from "./components/SectionFaq";


function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <main>
        <SectionFeatures />
        <SectionInsideTemplate />
        <SectionComponents />
        <SectionFaq />
      </main>
    </div>
  );
}

export default App;
