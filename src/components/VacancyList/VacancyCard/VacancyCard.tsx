"use client";
import { VacancyDataType } from "@/models/vavancyDataType";
import { Card } from "@mantine/core";
import React from "react";
import styles from "../VacancyList.module.scss";
import Link from "next/link";
import Image from "next/image";
import locationIcon from "../../../../public/icons/location.svg";
import StarIcon from "../../../../public/icons/star";

const VacancyCard = ({ elem }: { elem: VacancyDataType }) => {
  return (
    <Card className={styles.cardWrapper} radius={12} withBorder>
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
        <StarIcon id={elem.id} />
      </Link>
    </Card>
  );
};

export default VacancyCard;
