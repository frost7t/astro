import React from "react";
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import CardSectionFeature from "./CardSectionFeatures";
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
        <div className="flex justify-center p-5 space-x-5">
          <aside className="">
            <CardSectionFeature
              iconName="TbBrandTailwind"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Astro + Tailwind CSS Integration"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeature
              iconName="BsXDiamondFill"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Ready-to-use Components"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeature
              iconName="VscChecklist"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Best Practices"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
          </aside>
          <aside>
            <CardSectionFeature
              iconName="IoIosRocket"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Excellent Page Speed"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeature
              iconName="BsArrowLeftRight"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Search Engine Optimization (SEO)"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeature
              iconName="HiOutlineLightBulb"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Open to new ideas and contributions"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
          </aside>
        </div>
      </div>
    </>
  );
}
