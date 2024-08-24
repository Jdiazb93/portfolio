import { Icons, CompanyLogo } from "@helper/icons";

export interface ProjectsInterface {
  title: string;
  content: string;
  url: string;
  visit: string;
  tecnologies: TecnologiesInterface[];
  companyLogo: CompanyLogoInterface;
}

export interface TecnologiesInterface {
  icon: keyof typeof Icons;
  label: string;
}

export interface CompanyLogoInterface {
  icon: keyof typeof CompanyLogo;
}
