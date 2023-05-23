"use client";
import React from "react";
import styles from "./Filters.module.scss";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { CategoryDataType } from "@/models/categoryDataType";

async function getData(baseUrl: string): Promise<CategoryDataType[]> {
  const res = await fetch(`${baseUrl}/api/category`, {
    next: { revalidate: 50 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Filters = () => {
  return (
    <>
      <form className={styles.filterContainer}>
        <div className={styles.twoColLayout}>
          <h2>Фильтры</h2>
          <div>Сбросить все x</div>
        </div>
        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
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
