"use client";
import React from "react";
import styles from "./VacancyList.module.scss";
import SearchInput from "../SearchInput/SearchInput";
import PaginationList from "./PaginationList/Pagination";

const VacancyList = () => {
  return (
    <div className={styles.vacancyListContainer}>
      <SearchInput />
      <PaginationList />
    </div>
  );
};

export default VacancyList;
