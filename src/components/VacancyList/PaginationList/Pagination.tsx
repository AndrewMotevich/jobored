"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { VacanciesDataType } from "@/models/vacanciesDataType";
import { VacancyDataType } from "@/models/vavancyDataType";
import { Loader, Pagination } from "@mantine/core";
import styles from "../VacancyList.module.scss";
import axios from "axios";
import VacancyCard from "../VacancyCard/VacancyCard";
import { SearchParamsDataType } from "@/models/searchParamsType";

const PaginationList = (props: SearchParamsDataType) => {
  const [pageQnt, setPageQnt] = useState(1);
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<VacancyDataType[]>([]);
  const router = useRouter();
  const [data, isLoading] = useAsyncCallback(async () => {
    await getData({ page: activePage, params: props }).then((res) => {
      setPageQnt(res.total / 4);
      setVacancies(res.objects);
      if (res.objects.length === 0) {
        router.push("/empty");
      }
    });
  });

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activePage,
    props.keyword,
    props.payment_from,
    props.payment_to,
    props.catalogues,
  ]);

  return (
    <div className={styles.vacancyPaginationContainer}>
      {isLoading ? (
        <Loader size="xl" />
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

async function getData(props: {
  page: number;
  params: SearchParamsDataType;
}): Promise<VacanciesDataType> {
  const res = await axios.get(`http://localhost:3000/api/vacancies/`, {
    params: {
      keyword: props.params.keyword,
      payment_from: props.params.payment_from,
      payment_to: props.params.payment_to,
      catalogues: props.params.catalogues,
      count: 4,
      page: props.page,
    },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default PaginationList;
