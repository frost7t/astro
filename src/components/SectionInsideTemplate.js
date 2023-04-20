import React from "react";
import TitleSection from "./TitleSection";
import CardSectionInsideTemplate from "./CardSectionInsideTemplate";

export default function SectionInsideTemplate() {
  return (
    <>
      <>
        <div className="py-10 px-20 bg-blue-100">
          <TitleSection
            title="inside Template"
            subtitle="And what's inside ? ..."
          />
        </div>
        <div>
          <CardSectionInsideTemplate />
        </div>
      </>
    </>
  );
}
