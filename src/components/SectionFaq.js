import React from "react";
import TitleSection from "./TitleSection";
import CardFaq from "./Card/CardFaq";
import BtnWith from "./btn/BtnWith";
import CardNumbers from "./Card/CardNumbers";
export default function SectionFaq() {
  return (
    <>
      <div className="py-10 px-10">
        <TitleSection
          title="FAQS"
          subtitle="Frequently Asked Questions"
          description="Duis turpis dui,fringilla mattis sem nec,fringilla euismod neque.Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        />
      </div>
      <div className="flex gap-10 justify-center ">
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="What do I need to start?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="What's an example of when you changed your mind?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
      </div>
      <div className="flex gap-10 justify-center">
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="How to install the Astro + Tailwind CSS template?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="What is something that you would like to try again?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
      </div>
      <div className="flex gap-10 justify-center ">
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="What something that you don't understand?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
        <CardFaq
          iconName="FcRightDown"
          bgColorIcon="bg-[#3141AA p-2 text-4x"
          title="If you could only ask one question to each person?"
          description="Space,the final frontier.These are the voyage of the Starship  Enterprise.its five-year mission:toexplore strange new world.Many say exploration is part ou our destiny but it's actually our duty to future generations."
        />
      </div>
      <div className="flex justify-center gap-10 space-x-10 py-20">
        <CardNumbers title="132K" subtitle="Downloads" />
        <CardNumbers title="24.8K" subtitle="Starts" />
        <CardNumbers title="10.3K" subtitle="Forks" />
        <CardNumbers title="48.4K" subtitle="Users" />
      </div>
      <div className="py-10 px-10 mb-4 bg-slate-100 p-5  max-w-lg shadow-lg shadow-gray-700 md:shadow-xlg mx-auto ">
        <TitleSection
          subtitle="Astro + Tailwind CSS"
          description="Be very surprised by these huge fake numbers you are seeing on this page. Don't waste more time! :P"
        />
        <div className="pt-5 flex justify-center space-x-">
          <BtnWith title="Get template" bgColor="bg-blue-700" />
        </div>
      </div>
    </>
  );
}
