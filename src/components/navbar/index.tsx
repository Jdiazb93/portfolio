import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Image } from "primereact/image";
import Dropdown from "@components/custom/dropdown";
import Email from "@assets/icons/emailicon.svg";
import Linkedin from "@assets/icons/linkedinicon.svg";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(true);

  const end = (
    <div className="flex gap-x-3 items-center">
      <Dropdown />
      {theme === "light" ? (
        <Button
          text
          rounded
          icon="pi pi-sun"
          size="large"
          onClick={() => {
            localStorage.theme = "dark";
            setUpdate(true);
          }}
        >
          <Ripple pt={{ root: { style: { background: "rgb(59 130 246)" } } }} />
        </Button>
      ) : (
        <Button
          text
          rounded
          icon="pi pi-moon"
          severity="help"
          size="large"
          onClick={() => {
            localStorage.theme = "light";
            setUpdate(true);
          }}
        >
          <Ripple
            pt={{ root: { style: { background: "rgb(192 132 252)" } } }}
          />
        </Button>
      )}
    </div>
  );

  useEffect(() => {
    if (update) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      setUpdate(false);
    }
  }, [window, update]);

  const items: MenuItem[] = [
    {
      label: t("navbar.aboutme"),
      icon: "pi pi-home",
      command: () => window.scrollTo(0, 0),
    },
    {
      label: t("navbar.projects"),
      icon: "pi pi-folder",
      command: () => {
        const projectsSection = document.getElementById("projects")!;
        projectsSection.scrollIntoView();
      },
    },
    {
      label: t("navbar.experience"),
      icon: "pi pi-star",
      command: () => {
        const experienceSection = document.getElementById("experience")!;
        experienceSection.scrollIntoView();
      },
    },
    {
      label: t("navbar.contact.title"),
      icon: "pi pi-mobile",
      items: [
        {
          label: t("navbar.contact.options.email"),
          icon: (
            <Image
              src={Email}
              alt="Algo"
              width="20px"
              height="20px"
              className="mr-4"
            />
          ),
          command: () =>
            window.open("mailto:j.diaz.b93@hotmail.com?subject=Hablemos!"),
        },
        {
          label: t("navbar.contact.options.linkedin"),
          icon: (
            <Image
              src={Linkedin}
              alt="Algo"
              width="20px"
              height="20px"
              className="mr-4"
            />
          ),
          command: () =>
            window.open(
              "https://www.linkedin.com/in/jonathan-diaz-bustos/",
              "_blank"
            ),
        },
      ],
    },
  ];
  return (
    <div className="w-full flex justify-center p-4 sticky top-0 z-50">
      <div className="container px-10">
        <Menubar model={items} end={end} />
      </div>
    </div>
  );
};

export default Navbar;
