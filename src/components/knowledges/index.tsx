import React from "react";
import { Divider } from "primereact/divider";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { MeterGroup } from "primereact/metergroup";
import { useTranslation } from "react-i18next";
import { KnowledgeInterface } from "@interfaces/knowledge";
import { Icons } from "@helper/icons";

export const Knowledges: React.FC = () => {
  const { t } = useTranslation();

  const tecnologies: KnowledgeInterface[] = [
    {
      icon: "js",
      knowledgeValue: [
        {
          label: "JavaScript",
          value: 100,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "ts",
      knowledgeValue: [
        {
          label: "TypeScript",
          value: 75,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "react",
      knowledgeValue: [
        {
          label: "React JS",
          value: 90,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "next",
      knowledgeValue: [
        {
          label: "Next JS",
          value: 85,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "tailwind",
      knowledgeValue: [
        {
          label: "Tailwind CSS",
          value: 95,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "sass",
      knowledgeValue: [
        {
          label: "Sass",
          value: 90,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "vite",
      knowledgeValue: [
        {
          label: "Vite",
          value: 90,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "redux",
      knowledgeValue: [
        {
          label: "Redux",
          value: 85,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "nodejs",
      knowledgeValue: [
        {
          label: "Node JS",
          value: 90,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "nest",
      knowledgeValue: [
        {
          label: "Nest JS",
          value: 75,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "express",
      knowledgeValue: [
        {
          label: "Express JS",
          value: 85,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "graphql",
      knowledgeValue: [
        {
          label: "GraphQl",
          value: 85,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "mongodb",
      knowledgeValue: [
        {
          label: "MongoDb",
          value: 95,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "redis",
      knowledgeValue: [
        {
          label: "Redis",
          value: 60,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "git",
      knowledgeValue: [
        {
          label: "Git",
          value: 85,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "bootstrap",
      knowledgeValue: [
        {
          label: "Bootstrap",
          value: 95,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "prime",
      knowledgeValue: [
        {
          label: "PrimeReact",
          value: 95,
          color: "#38bdf8",
        },
      ],
    },
    {
      icon: "jira",
      knowledgeValue: [
        {
          label: "Jira",
          value: 100,
          color: "#38bdf8",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center mb-8" id="experience">
      <div className="px-10 pt-20 container">
        <div className="py-8 text-start">
          <Divider
            align="right"
            className="before:dark:border-gray-300"
            pt={{
              content: { className: "!bg-transparent" },
            }}
          >
            <b className="text-4xl font-lexend-bold bg-[#2d937699] dark:bg-[#1e1e1ecc]">
              {t("knowledge.title")}
            </b>
          </Divider>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 rounded-md p-1 bg-white dark:bg-gray-900 transition-all duration-200">
          {tecnologies.map((element, index) => (
            <Card
              key={index}
              className="shadow-none border-none rounded-none transition-all duration-200"
            >
              <div className="flex gap-x-4">
                <Image
                  src={Icons[element.icon]}
                  width="30px"
                  height="30px"
                  className={`h-[24px] rounded-full ${element.icon} ${
                    (element.icon === "next" || element.icon === "express") &&
                    "dark:bg-white"
                  }`}
                />
                {
                  <MeterGroup
                    values={element.knowledgeValue}
                    className="w-full transition-all duration-200"
                  />
                }
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowledges;
