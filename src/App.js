import Navbar from "./components/navigation/Navbar";
import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import SectionComponents from "./components/SectionComponents";
import SectionFaq from "./components/SectionFaq";
import SectionStep from "./components/SectionStep";


function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <main>
        <SectionFeatures />
        <SectionInsideTemplate />
        <SectionStep/>
        <SectionComponents />
        <SectionFaq />
      </main>
    </div>
  );
}

export default App;
