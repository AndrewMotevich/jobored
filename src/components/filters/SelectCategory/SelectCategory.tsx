"use client";
import { CategoryDataType } from "@/models/categoryDataType";
import { Select, SelectItem } from "@mantine/core";
import React, { useEffect, useState } from "react";

export async function getData(baseUrl: string): Promise<CategoryDataType[]> {
  const res = await fetch(`${baseUrl}/api/category`, {
    next: { revalidate: 50 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SelectCategory = () => {
  const [category, setCategory] = useState<SelectItem[]>([]);

  useEffect(() => {
    (async () => {
      await getData("http://localhost:3000").then((res) => {
        setCategory(
          res.map((elem): SelectItem => {
            return { value: elem.key.toString(), label: elem.title };
          })
        );
      });
    })();
  }, []);

  return <Select placeholder="Pick one" data={category} />;
};

export default SelectCategory;
