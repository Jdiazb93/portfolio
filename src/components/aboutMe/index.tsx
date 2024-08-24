import React from "react";
import { Image } from "primereact/image";
import Me from "@assets/me/j-fondo.png";
import { useTranslation } from "react-i18next";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center px-10">
      <div className="pt-10 container sm:grid sm:gap-y-10 lg:flex">
        <div className="w-full flex justify-center items-center -mt-12 mb-8 md:mb-0">
          <Image src={Me} width="400px" className="fondo-img" />
        </div>
        <div className="w-full grid gap-y-4 text-justify md:text-center bg-[#2d937699] dark:bg-[#1e1e1ecc] p-6 rounded-md">
          <p>{t("aboutmeParagraph1")}</p>
          <p>{t("aboutmeParagraph2")}</p>
          <p>{t("aboutmeParagraph3")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
