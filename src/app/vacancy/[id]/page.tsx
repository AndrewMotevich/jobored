import VacancyCard from "@/components/VacancyList/VacancyCard/VacancyCard";
import { VacancyDataType } from "@/models/vavancyDataType";
import React from "react";
import parse from "html-react-parser";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string): Promise<VacancyDataType> {
  const res = await fetch(`http://localhost:3000/api/vacancies/${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Vacancy = async ({ params }: Props) => {
  const data = await getData(params.id);
  return (
    <div className="vacancy-wrapper">
      <VacancyCard elem={data} />
      <div className="vacancy-info">{parse(data.vacancyRichText)}</div>
    </div>
  );
};

export default Vacancy;
