"use client"
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";


export default function Work() {
    return(
        <div className="p-10">
            <BackgroundBeams className="pointer-events-none"/>
            <div className="flex flex-col" style={{justifyContent : "center", alignContent:"center",alignItems:"center",paddingBottom:"7vh",paddingTop:"7vh"}}>
                <p className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    PREVIOUS WORK
                </p>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={() => location.href="/"}>
                    HOME
                </button>
            </div>
            <TracingBeam>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-grey-800 min-h-[500px] lg:min-h-[200px]"
                    className=""
                >
                    <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        TCP chat room
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200 pb-4">
                        A command line interface displayed, TCP chat-room. Made with Python sockets. Accelerated with multithreading. Designed for seamless real-time communication.
                    </p>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-3 pl-6 pr-6"
                        onClick={() => location.href = "https://github.com/ForrestFrooge/TCP-chatroom"}
                    >
                        <span>Code</span>
                    </HoverBorderGradient>
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    ComputerCraft - Better excavate
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    An improved and more efficient alternative to the excavate program present in the minecraft computercraft modpack.
                    </p>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-3 pl-6 pr-6"
                        onClick={() => location.href = "https://github.com/ForrestFrooge/CC-BTE"}

                    >
                        <span>Code</span>
                    </HoverBorderGradient>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[200px]">
                    <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Whatever I am going to put here.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Bro wtf am I doin?
                    </p>
                    </div>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-3 pl-6 pr-6"
                        onClick={() => location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"}

                    >
                        <span>Code</span>
                    </HoverBorderGradient>
                </WobbleCard>
                </div>
            </TracingBeam>
    </div>
  );
}

