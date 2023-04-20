import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import SectionComponents from "./components/SectionComponents";
import SectionBlog from "./components/SectionBlog";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionFeatures/>
      <SectionInsideTemplate/>
      <SectionComponents/>
      <SectionBlog/>
    </div>
  );
}

export default App;
