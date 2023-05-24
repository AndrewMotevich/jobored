"use client";
import React, { useEffect, useState } from "react";
import styles from "./VacancyList.module.scss";
import SearchInput from "../SearchInput/SearchInput";
import { Card } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import locationIcon from "../../../public/icons/location.svg";
import StarIcon from "../../../public/icons/star";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { VacanciesDataType } from "@/models/vacanciesDataType";
import { VacancyDataType } from "@/models/vavancyDataType";

export async function getData(baseUrl: string): Promise<VacanciesDataType> {
  const res = await fetch(`${baseUrl}/api/vacancies`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const VacancyList = () => {
  const [vacancies, setVacancies] = useState<VacancyDataType[]>([]);
  const [data, isLoading, error] = useAsyncCallback(async () => {
    getData("http://localhost:3000").then((res) => {
      setVacancies(res.objects);
    });
  });

  useEffect(() => {
    data();
  }, []);

  return (
    <div className={styles.vacancyListContainer}>
      <SearchInput />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        vacancies.map((elem) => {
          return (
            <Card
              key={elem.id}
              className={styles.cardWrapper}
              radius={12}
              withBorder
            >
              <Link href={"http://localhost:3000/vacancy/" + elem.id}>
                <div>
                  <h2>{elem.profession}</h2>
                  <div className={styles.vacancyInfo}>
                    <h3>
                      з/п{" "}
                      {elem.payment_to !== 0
                        ? "от " + elem.payment_from + " " + elem.currency
                        : elem.payment_from + " " + elem.currency}{" "}
                      {elem.payment_to !== 0 &&
                        "до " + elem.payment_to + " " + elem.currency}
                    </h3>
                    <span>&#183;</span>
                    <p>{elem.type_of_work.title}</p>
                  </div>
                  <div className={styles.locationInfo}>
                    <Image
                      src={locationIcon}
                      width={20}
                      height={20}
                      alt="location icon"
                    />
                    <p>{elem.town.title}</p>
                  </div>
                </div>
                <StarIcon />
              </Link>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default VacancyList;
