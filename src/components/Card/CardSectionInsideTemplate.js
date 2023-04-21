import React from "react";
import CardSectionFeatures from "./CardSectionFeatures";

export default function CardSectionInsideTemplate({ img, img2, img3 }) {
  return (
    <>
      <>
        <div className="flex mx-auto justify-center gap-8 bg-blue-100">
          <aside className="">
            <CardSectionFeatures
              title="Ad vix debet docendi"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
          </aside>
          <div className="max-w-md ">
            <img src="img/2.jpg" className="rounded-lg" alt="image1" />
          </div>
        </div>
        <div className="flex flex-row-reverse bg-blue-100 mx-auto justify-center gap-8 py-20 pr-52">
          <aside className="py-10 ml-5 text-sm">
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Per ei quaeque sensibus"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Cu imperdiet posidonium sed"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Nulla omittam sadipscing mel ne"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Per ei quaeque Sensibus"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Cu imperdiet posidonium"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
              title="Nulla omittam sadipscing mel ne"
            />
          </aside>
          <div className="max-w-md">
            <img src="img/3.jpg" className="rounded-lg" alt="image1" />
          </div>
        </div>
      </>
    </>
  );
}
