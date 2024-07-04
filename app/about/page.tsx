'use client'

import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";


const words = "I'm Frooge, an 18-year-old passionate about software development. With 5 years of hands-on experience in languages like Python, C#, Lua, Go, and a dab of assembly, I thrive in backend development while being versatile enough for frontend tasks. My expertise lies in Object-Oriented Programming, complemented by intermediate skills in functional programming. I'm excited to bring my knowledge and enthusiasm to projects that demand innovation and robust solutions.";


export default function About() {
  return (
    <div className="flex flex-row">
        <BackgroundBeams className="pointer-events-none" />
        
        <div className="h-[60rem] w-full flex flex-col items-left overflow-hidden rounded-md pl-20 pt-20">

            <h1 className=" md:text-7xl text-3xl lg:text-9xl font-bold text-left text-white relative">
            About me
            </h1>
            
            <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

            <TextGenerateEffect words={words} className="text-white bg-black"/>

            </div>

        </div>
        <div className="flex flex-col justify-center align-center pr-20">
            <Image src="/profile-portfolio.png" alt="frooge-profile" width={"1000"} height={"1000"}/>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={() => location.href="/"}>
                    HOME
                </button>
        </div>
    </div>

  );
}