import React from "react";
import TitleSection from "./TitleSection";
import CardSectionComponents from "./CardSectionComponents";
export default function SectionComponents() {
  return (
    <>
      <>
        <div className="py-10 px-20 bg-blue-100">
          <TitleSection
            title="Components"
            subtitle="Most used widgets"
            description="Provides frequently used components for building websites using Tailwind CSS"
          />
          <div className="py-5 px-60 w-full">
            <div className="grid grid-cols-3 gap-8">
              <CardSectionComponents
                img="img/headers.png"
                title="Header"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/heros.png"
                title="Heros"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/check-list.png"
                title="Features"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/file.png"
                title="Content"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/megaphone.png"
                title="Call-to-Action"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/euro.png"
                title="Pricing"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/chat.png"
                title="Testimonial"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/contact.png"
                title="Contact"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
              <CardSectionComponents
                img="img/disposition.png"
                title="Footers"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliqui"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
