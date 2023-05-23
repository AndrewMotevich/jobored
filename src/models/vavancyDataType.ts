export type VacancyDataType = {
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  firm_name: string;
  currency: string;
  vacancyRichText: string;

  type_of_work: {
    id: number;
    title: string;
  };

  town: {
    id: number;
    title: string;
    declension: string;
    hasMetro: boolean;
    genitive: string;
  };
};
