"use client";
import React, { useState } from "react";
import styles from "./VacancyList.module.scss";
import SearchInput from "../SearchInput/SearchInput";
import PaginationList from "./PaginationList/Pagination";
import { SearchParamsDataType } from "@/models/searchParamsType";

const VacancyList = (props: SearchParamsDataType) => {
  const [keyword, setKeyword] = useState("");
  function searchClick(value: string) {
    setKeyword(value);
  }
  return (
    <div className={styles.vacancyListContainer}>
      <SearchInput handler={searchClick} />
      <PaginationList
        keyword={keyword}
        payment_from={props.payment_from}
        payment_to={props.payment_to}
        catalogues={props.catalogues}
      />
    </div>
  );
};

export default VacancyList;
