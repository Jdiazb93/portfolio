import { Icons } from "@helper/icons";

export interface KnowledgeInterface {
  icon: keyof typeof Icons;
  knowledgeValue: KnowledgeValueInterface[];
}

export interface KnowledgeValueInterface {
  value: number;
  color: string;
  label: string;
}
