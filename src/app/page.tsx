"use client";
// import Filters from "@/components/Filters/Filters";
import VacancyList from "../components/VacancyList/VacancyList";
import { FilterDataType } from "@/models/filterDataType";
import { useState } from "react";

export default async function Home() {
  const [formData, setFormData] = useState<FilterDataType>();
  function formCallback(values: FilterDataType) {
    setFormData(values);
  }

  return (
    <div className="main-wrapper">
      {/* <Filters callback={formCallback} /> */}
      <VacancyList
        payment_from={
          typeof formData?.payment_from === "number" ? formData?.payment_from : 0
        }
        payment_to={
          typeof formData?.payment_to === "number" ? formData?.payment_to : 0
        }
        catalogues={Number(formData?.catalogues) || 33}
      />
    </div>
  );
}
