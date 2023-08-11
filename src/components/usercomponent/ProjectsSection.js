import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      name: "Netflix Clone",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sint nemo obcaecati quos consequuntur autem rem! Natus laborum illo neque quas incidunt modi, doloremque molestias tempore culpa? Culpa, minus ullam!",
      techStack: [
        {
          id: 1,
          name: "Html",
        },
        {
          id: 1,
          name: "Css",
        },
        {
          id: 1,
          name: "Javascript",
        },
        {
          id: 1,
          name: "React JS",
        },
        {
          id: 1,
          name: "Imdb Api",
        },
      ],
    },
    {
      id: 1,
      name: "Netflix Clone",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sint nemo obcaecati quos consequuntur autem rem! Natus laborum illo neque quas incidunt modi, doloremque molestias tempore culpa? Culpa, minus ullam!",
      techStack: [
        {
          id: 1,
          name: "Html",
        },
        {
          id: 1,
          name: "Css",
        },
        {
          id: 1,
          name: "Javascript",
        },
        {
          id: 1,
          name: "React JS",
        },
        {
          id: 1,
          name: "Imdb Api",
        },
      ],
    },
    {
      id: 1,
      name: "Netflix Clone",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sint nemo obcaecati quos consequuntur autem rem! Natus laborum illo neque quas incidunt modi, doloremque molestias tempore culpa? Culpa, minus ullam!",
      techStack: [
        {
          id: 1,
          name: "Html",
        },
        {
          id: 1,
          name: "Css",
        },
        {
          id: 1,
          name: "Javascript",
        },
        {
          id: 1,
          name: "React JS",
        },
        {
          id: 1,
          name: "Imdb Api",
        },
      ],
    },
  ];
  return (
    <div className="py-10 min-h-[100vh] mt-60" id="about">
      <h2 className="text-4xl text-center font-bold dark:text-white">
        Projects
      </h2>
      {projectsData.map((data, index) => {
        const isEven = index % 2 === 0;
        const paddingRow = index % 2 === 0;
        const flexDirection = isEven ? "flex-row-reverse" : "flex-row";
        const padding = paddingRow ? "pl-24" : "pr-24";
        return (
          <section className="text-gray-600 body-font mt-24" key={data.id}>
            <div
              className={`container mx-auto flex py-10 ${flexDirection} items-center projectSection bg-red-100/20`}
            >
              <div
                className={`lg:flex-grow md:w-1/2 ${padding}  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`}
              >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                  Netflix Clone
                </h1>
                <p className="mb-4 leading-relaxed dark:text-white">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Maiores
                  sint nemo obcaecati quos consequuntur autem rem! Natus laborum
                  illo neque quas incidunt modi, doloremque molestias tempore
                  culpa? Culpa, minus ullam!
                </p>
                <div className="flex space-x-4">
                  {data.techStack.map((items) => {
                    return <Badge>Html</Badge>;
                  })}
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    className="dark:border-white dark:text-white"
                  >
                    View Now
                  </Button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                <img
                  className="object-contain object-center rounded"
                  alt="hero"
                  src="https://kampunggadget.com/wp-content/uploads/2022/03/Buka-Netflix-.jpg"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
