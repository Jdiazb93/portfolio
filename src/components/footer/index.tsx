import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-sky-950 text-center py-2">
      {t("footer")}
    </footer>
  );
};

export default Footer;
