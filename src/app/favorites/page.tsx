"use client";
import VacancyCard from "@/components/VacancyList/VacancyCard/VacancyCard";
import styles from "../../components/VacancyList/VacancyList.module.scss";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { VacancyDataType } from "@/models/vavancyDataType";
import { Loader, Pagination } from "@mantine/core";
import axios from "axios";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Favorite",
};

async function getData(id: number = 35833432): Promise<VacancyDataType> {
  const res = await axios.get(`http://localhost:3000/api/vacancies/${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

function checkLocalStorage() {
  const savedFavorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as number[];
  return savedFavorites;
}

const Favorites = () => {
  const [pageQnt, setPageQnt] = useState(1);
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<VacancyDataType[]>([]);
  const router = useRouter();
  const [data, isLoading] = useAsyncCallback(async () => {
    const favoritesArray = checkLocalStorage();
    if (favoritesArray.length === 0) {
      router.push("/empty");
    } else {
      setPageQnt(
        favoritesArray.length / 4 > 0 ? Math.ceil(favoritesArray.length / 4) : 1
      );
      const tempVacancies: VacancyDataType[] = [];
      for (let i = (activePage - 1) * 4; i < (activePage - 1) * 4 + 4; i += 1) {
        await getData(favoritesArray[i]).then(async (res) => {
          tempVacancies.push(res);
        });
      }
      setVacancies(tempVacancies);
    }
  });

  function clearCallback(id: number) {
    setVacancies(vacancies.filter((elem) => elem.id !== id));
  }

  useEffect(() => {
    (async () => {
      await data();
    })();
  }, [activePage]);

  return (
    <div className={styles.vacancyPaginationContainer}>
      {isLoading ? (
        <Loader size="xl" />
      ) : (
        vacancies.map((elem) => {
          return (
            <VacancyCard
              key={elem.id}
              elem={elem}
              clearCallback={clearCallback}
            />
          );
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

export default Favorites;
