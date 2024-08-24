import React, { useState, useRef, useEffect } from "react";
import { Image } from "primereact/image";
import { useTranslation } from "react-i18next";
import { FlagsInterface } from "@interfaces/flags";
import { FlagsIcon } from "@helper/icons";

export const Dropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const lng: string = i18n.language;

  const flags: FlagsInterface[] = [
    { flag: "es", label: "Esp", value: "es" },
    { flag: "en", label: "Eng", value: "en" },
  ];

  const currentFlag = flags.find((f) => f.flag === lng)!;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-10 h-10 grid items-center hover:cursor-pointer"
      ref={containerRef}
    >
      <Image
        src={FlagsIcon[currentFlag.flag]}
        alt="esp"
        width="30px"
        height="30px"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <ul className="absolute top-14 right-10 bg-gray-100 text-[#374151] dark:bg-slate-900 dark:text-white py-2 z-[1002]">
          {flags.map((flag, index) => (
            <li
              key={index}
              className="flex items-center py-4 px-4 transition-all duration-300 hover:bg-gray-200 hover:dark:bg-slate-500"
              onClick={() => {
                i18n.changeLanguage(flag.value);
                setOpen(false);
              }}
            >
              <Image
                src={FlagsIcon[flag.flag]}
                alt={flag.label}
                width="30px"
                height="30px"
              />
              <span>{flag.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
