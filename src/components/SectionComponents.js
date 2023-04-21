import React from "react";
import TitleSection from "./TitleSection";
import CardBlog from "./Card/CardBlog";
import CardImgBlog from "./Card/CardImgBlog";
import CardSectionComponents from "./Card/CardSectionComponents";
export default function SectionComponents() {
  return (
    <>
      <>
        <div className="py-10 px-10 bg-blue-100">
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
        <div className="py-20 px-9">
          <CardBlog
            title="Find out more content in our Blog"
            description="View all post»"
            text="The blog is used to display AstroWind documentation. Each new article will be an important step that you will need to know to be an expert in creatinga website using Astro + Tailwind CSS. Astro is a very interesting technology. Thanks."
          />
          <div className="flex justify-between py-4">
            <CardImgBlog
              img="img/5.jpg"
              title="Get started with AstroWind to create a website using Astro and Tailwind CSS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
            />
            <CardImgBlog
              img="img/6.jpg"
              title="Useful tools and resources to create a professional website"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
            />
            <CardImgBlog
              img="img/5.jpg"
              title="AstroWind template in depth"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
            />
            <CardImgBlog
              img="img/7.jpg"
              title="How to customize AstroWind template to suit your branding"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
            />
          </div>
        </div>
      </>
    </>
  );
}
