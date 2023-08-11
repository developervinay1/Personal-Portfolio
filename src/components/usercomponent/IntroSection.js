"use client";

import React from "react";
import { HeroImage } from "./IntroImage";
import { Button } from "../ui/button";
import { Download, Github, Linkedin } from "lucide-react/dist/esm/icons";
import { MobileIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function IntroSection() {
  const contactOptions = [
    {
      tooltipTitle: "Connect On A Call",
      Icon: MobileIcon,
    },
    {
      tooltipTitle: "Download Resume",
      Icon: Download,
    },
    {
      tooltipTitle: "Github Profile",
      Icon: Github,
    },
    {
      tooltipTitle: "LinkedIn Profile",
      Icon: Linkedin,
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center mt-40">
      <HeroImage />
      <h2 className="text-black text-4xl text-center max-w-2xl leading-normal mt-10 dark:text-white">
        <span className="font-bold">Hi, I am Vinay</span>. I'm a{" "}
        <span className="font-bold">web developer </span>
        with 1 year of experience.I enjoy building sites and apps.My main focus
        is <span className="underline">React(Next js)</span>
      </h2>
      <div className="mt-10 space-x-6">
        {contactOptions.map(({ tooltipTitle, Icon }) => {
          return (
            <TooltipProvider key={Icon}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltipTitle}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}

        {/* <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
        </Button> */}
      </div>
    </div>
  );
}
