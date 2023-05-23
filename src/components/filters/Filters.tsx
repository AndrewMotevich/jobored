"use client";
import React, { ReactNode } from "react";
import styles from "./Filters.module.scss";
import { Button } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import SelectCategory from "./SelectCategory/SelectCategory";

const Filters = () => {
  return (
    <>
      <form className={styles.filterContainer}>
        <div className={styles.twoColLayout}>
          <h2>Фильтры</h2>
          <div>Сбросить все x</div>
        </div>
        <h3>Отрасль</h3>
        <SelectCategory />
        <h3>Оклад</h3>
        <NumberInput
          defaultValue={18}
          placeholder="Your age"
          label="Your age"
          withAsterisk
        />
        <NumberInput
          defaultValue={18}
          placeholder="Your age"
          label="Your age"
          withAsterisk
        />
        <Button>Применить</Button>
      </form>
    </>
  );
};

export default Filters;
