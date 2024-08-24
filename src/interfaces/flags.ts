import { FlagsIcon } from "@helper/icons";

export interface FlagsInterface {
  flag: keyof typeof FlagsIcon;
  label: string;
  value: string;
}
