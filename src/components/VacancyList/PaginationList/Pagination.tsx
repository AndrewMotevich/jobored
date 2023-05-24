"use client";
import React, { useEffect, useState } from "react";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { VacanciesDataType } from "@/models/vacanciesDataType";
import { VacancyDataType } from "@/models/vavancyDataType";
import { Loader, Pagination } from "@mantine/core";
import styles from "../VacancyList.module.scss";
import axios from "axios";
import VacancyCard from "../VacancyCard/VacancyCard";

const PaginationList = () => {
  const [pageQnt, setPageQnt] = useState(1);
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<VacancyDataType[]>([]);
  const [data, isLoading] = useAsyncCallback(async () => {
    await getData({ page: activePage }).then((res) => {
      setPageQnt(res.objects.length / 4);
      setVacancies(res.objects);
    });
  });

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <div className={styles.vacancyPaginationContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        vacancies.map((elem) => {
          return <VacancyCard key={elem.id} elem={elem} />;
        })
      )}
      <Pagination
        className={styles.paginationBar}
        size="xl"
        onChange={setPage}
        total={pageQnt}
      />
    </div>
  );
};

async function getData(params: { page: number }): Promise<VacanciesDataType> {
  const res = await axios.get(
    `http://localhost:3000/api/vacancies/?published=1&count=4&page=${params.page}&keyword=Frontend&payment_from=0&payment_to=150000&catalogues=33`
  );

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default PaginationList;
