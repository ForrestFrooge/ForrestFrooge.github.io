import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";



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

  const words2 : string[] = [
    "front-end",
    "back-end",
    "systems",
    "game_ai",
    "databases",
    "algorithms",
    "debugging",
    "data_structures",
    "web_applications",
    "RESTful_APIs",
    "unit_tests",
    "integration_testing",
    "version_control",
    "design_patterns",
    "performance_optimization",
    "team_collaboration",
    "documentation",
    "responsive_design",
    "third-party_APIs",
    "prototyping"
  ];

  return (
    <div>
        <BackgroundBeams />

        <div className="flex flex-col" style={{justifyContent : "center", alignContent:"center",alignItems:"center",paddingBottom:"5vh",paddingTop:"10vh"}}>
          <p className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            FROOGE
          </p>
          <TypewriterEffectSmooth words={words}/>
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Here to build your
            <FlipWords words={words2} duration={1000}/>
          </div>

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