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
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
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
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Per ei quaeque sensibus"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Cu imperdiet posidonium sed"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Nulla omittam sadipscing mel ne"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Per ei quaeque Sensibus"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Cu imperdiet posidonium"
            />
            <CardSectionFeatures
              iconName="VscCheck"
              bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4x1"
              title="Nulla omittam sadipscing mel ne"
            />
          </aside>
          <div className="max-w-md">
            <img src="img/3.jpg" className="rounded-lg" alt="image1" />
          </div>
        </div>
      </>
      <div className="py-10 px-20">
        <div className="text-2xl font-black uppercase max-w-md justify-center mx-auto">
          <h2>
            Get your dream website up and running in to no time with Astrowind.
          </h2>
        </div>
        <div className="flex mx-auto justify-center gap-8">
          <asidestyle>
            <CardSectionFeatures
              iconName="BsBoxSeam"
              title="Step 1: Download"
              bgColorIcon=" border border-2 border-blue-900 rounded-full p-2 text-5xl text-[#3141AA] rounded-full p-2 text-2xl"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="IoTextOutline"
              title="Step 2: Add content"
              bgColorIcon=" border border-2 border-blue-900 rounded-full p-2 text-5xl text-[#3141AA] rounded-full p-2 text-2xl1"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <CardSectionFeatures
              iconName="GiPaintRoller"
              title="Step 3:Customize styles "
              bgColorIcon="border border-2 border-blue-900 rounded-full p-2 text-5xl text-[#3141AA] rounded-full p-2 text-2xl"
              description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
            />
            <div className="py-5">
              <CardSectionFeatures
                iconName="VscCheck"
                bgColorIcon="bg-[#3141AA]   border-2 border-blue-900 rounded-full p-2 text-5xl  rounded-full "
                title="Ready !"
              />
            </div>
          </asidestyle>
          <div className="max-w-sm">
            <img src="img/4.jpg" className="rounded-lg" alt="image1" />
          </div>
        </div>
      </div>
    </>
  );
}
