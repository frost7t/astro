import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionFeatures/>
    </div>
  );
}

export default App;
