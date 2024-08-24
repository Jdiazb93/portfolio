import React from "react";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Tooltip } from "primereact/tooltip";
import { Divider } from "primereact/divider";
import { useTranslation } from "react-i18next";
import {
  ProjectsInterface,
  TecnologiesInterface,
  CompanyLogoInterface,
} from "@interfaces/projects";
import { Icons, CompanyLogo } from "@helper/icons";

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: ProjectsInterface[] = [
    {
      title: t("projects.pepper.title"),
      content: t("projects.pepper.content"),
      url: t("projects.pepper.url"),
      visit: t("projects.pepper.visit"),
      tecnologies: [
        { icon: "react", label: "React JS" },
        { icon: "nodejs", label: "Node JS" },
        { icon: "js", label: "JavaScript" },
        { icon: "ts", label: "TypeScript" },
        { icon: "mongodb", label: "Mongo DB" },
        { icon: "redis", label: "Redis" },
        { icon: "graphql", label: "GraphQl" },
        { icon: "tailwind", label: "Tailwind CSS" },
        { icon: "sass", label: "Sass" },
        { icon: "nest", label: "Nest JS" },
        { icon: "redux", label: "Redux" },
        { icon: "jira", label: "Jira" },
      ],
      companyLogo: { icon: "pepper" },
    },
    {
      title: t("projects.ots.title"),
      content: t("projects.ots.content"),
      url: t("projects.ots.url"),
      visit: t("projects.ots.visit"),
      tecnologies: [
        { icon: "react", label: "React JS" },
        { icon: "nodejs", label: "Node JS" },
        { icon: "js", label: "JavaScript" },
        { icon: "mongodb", label: "Mongo DB" },
        { icon: "bootstrap", label: "Bootstrap" },
        { icon: "express", label: "Express JS" },
        { icon: "jira", label: "Jira" },
      ],
      companyLogo: { icon: "otsicon" },
    },
    {
      title: t("projects.pandita.title"),
      content: t("projects.pandita.content"),
      url: t("projects.pandita.url"),
      visit: t("projects.pandita.visit"),
      tecnologies: [
        { icon: "react", label: "React JS" },
        { icon: "next", label: "Next JS" },
        { icon: "js", label: "JavaScript" },
        { icon: "ts", label: "TypeScript" },
        { icon: "tailwind", label: "Tailwind CSS" },
        { icon: "nodejs", label: "Node JS" },
        { icon: "mongodb", label: "Mongo DB" },
        { icon: "prime", label: "PrimeReact" },
        { icon: "express", label: "Express JS" },
        { icon: "jira", label: "Jira" },
        { icon: "calendly", label: "Calendly" },
      ],
      companyLogo: { icon: "panditaicon" },
    },
  ];

  const title = (label: string, companyLogo: CompanyLogoInterface) => {
    return (
      <span className="flex gap-x-4 items-center">
        <Image
          src={CompanyLogo[companyLogo.icon]}
          width={`${companyLogo.icon === "pepper" ? "40px" : "50px"}`}
          height="50px"
          className="w-14 h-14 flex items-center justify-center"
        />
        {label}
      </span>
    );
  };

  const footer = (tecnologies: TecnologiesInterface[]) => {
    const icons = tecnologies.map((element, index) => {
      return (
        <span key={index} className="items-end">
          <Tooltip
            target={`.${element.icon}`}
            position="bottom"
            className="shadow-none"
          />
          <Image
            data-pr-tooltip={element.label}
            src={Icons[element.icon]}
            width="30px"
            height="30px"
            className={`ml-4 rounded-full ${element.icon} ${
              (element.icon === "next" || element.icon === "express") &&
              "dark:bg-white"
            }`}
          />
        </span>
      );
    });
    return icons;
  };
  return (
    <div className="flex justify-center" id="projects">
      <div className="container px-10 pt-20">
        <div className="py-8 text-start">
          <Divider
            align="left"
            className="before:dark:border-gray-300"
            pt={{
              content: { className: "!bg-transparent" },
            }}
          >
            <b className="text-4xl font-lexend-bold bg-[#2d937699] dark:bg-[#1e1e1ecc]">
              {t("projects.title")}
            </b>
          </Divider>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={title(project.title, project.companyLogo)}
              subTitle={
                <a href={project.url} target="_blank">
                  {project.visit}
                </a>
              }
              footer={footer(project.tecnologies)}
              pt={{
                body: { className: "grid" },
                footer: { className: "items-end" },
              }}
              className="transition-all duration-200 hover:cursor-default hover:scale-105 !grid"
            >
              {project.content}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
