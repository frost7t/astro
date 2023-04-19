import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
export default function SectionFeatures() {
  return (
    <>
      <div>
        <div className="bg-blue-200 py-6 flex justify-center space-x-4">
          <BsInfoSquare className="text-2xl" />
          <p>
            <span className="font-bold">Philosophy</span>:Simplicity,Best
            Practices and High Performance
          </p>
        </div>
        <div className="py-20 px-20">
          <TitleSection
            title="Features"
            subtitle="What you get with AstroWind"
            description="lorem, ipsum dolor sit amet consectur adipising elit, error impedit abf fugiat"
          />
        </div>
      </div>
    </>
  );
}
