import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import { dataCards } from "../data/dataCardsFeatures"; 
import CardSectionFeatures from "./Card/CardSectionFeatures";
export default function SectionFeature() {

  return (
    <>
      <div className="flex justify-center bg-blue-100 items-center text-sm space-x-2 p-4">
        <BsInfoSquare />
        <p>
          <span className="font-bold">Philosophy:</span> Simplicity, Best
          Practices and High Perfomance
        </p>
      </div>
      <div className="py-10 px-20">
        <TitleSection
          title="Features"
          subtitle="What you get with AstroWind"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliquid."
        />
      </div>
      <div className="flex justify-center p-5">
        <aside className="grid grid-cols-2">
          {dataCards.map((item) => (
            <CardSectionFeatures
            icons={item.icons}
            title ={item.title}
            description = {item.description}
            />
          ))}
        </aside>
      </div>
    </>
    
  );
}
