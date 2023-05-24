import { VacancyDataType } from "./vavancyDataType";

export type VacanciesDataType = {
  objects: VacancyDataType[];
  total: number;
  more: boolean;
  subscription_id: 0;
  subscription_active: boolean;
};
