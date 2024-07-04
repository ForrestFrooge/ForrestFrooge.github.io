'use client'

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";


export default function Contact() {
  return (
    <div className="">
        <BackgroundBeams className="pointer-events-none"/>
        <div className="flex flex-col" style={{justifyContent : "center", alignContent:"center",alignItems:"center",paddingBottom:"7vh",paddingTop:"7vh"}}>
            <p className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                CONTACT
            </p>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => location.href="/"}>
                HOME
            </button>
        </div>
        <div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                If you want to contact me : here is my {""}
                <LinkPreview url="https://discordapp.com/users/454665229318488065" className="font-bold">
                Discord
                </LinkPreview>{" "}
                and my {" "}
                <LinkPreview url="https://github.com/ForrestFrooge" className="font-bold">
                Github.
                </LinkPreview>{" "}
            </p>
        </div>
    </div>

  );
}