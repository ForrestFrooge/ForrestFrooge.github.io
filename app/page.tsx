import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function Home() {
  const words : Array<{text: string; className: string;}>	= [
    {
      text: "Programming",
      className:""
    },
    {
      text: "your",
      className:""
    },
    {
      text: "ideas",
      className:""
    },
    {
      text:"to",
      className:""
    },
    {
      text: "LIFE",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
        <BackgroundBeams />

        <div className="flex flex-col" style={{justifyContent : "center", alignContent:"center",alignItems:"center",paddingBottom:"5vh",paddingTop:"10vh"}}>
        <p className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          FROOGE
        </p>
          <TypewriterEffectSmooth words={words}/>
        </div>

        <section className="flex flex-row">
          <div className="flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <EvervaultCard text="about me"/>
          </div>
          <div className="flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <EvervaultCard text="work"/>
          </div>
          <div className="flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <EvervaultCard text="contact"/>
          </div>

        </section>
    </div>
  );
}