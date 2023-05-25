"use client";
import { CategoryDataType } from "@/models/categoryDataType";
import { MantineProvider, Select, SelectItem } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { ChevronUp } from "tabler-icons-react";
import React, { useEffect, useState } from "react";
import { UseFormReturnType } from "@mantine/form";
import { FilterDataType } from "@/models/filterDataType";

async function getData(): Promise<CategoryDataType[]> {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/category`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SelectCategory = ({
  form,
}: {
  form: UseFormReturnType<FilterDataType>;
}) => {
  const [category, setCategory] = useState<SelectItem[]>([]);
  useEffect(() => {
    (async () => {
      await getData().then((res) => {
        return setCategory(
          res.map((elem): SelectItem => {
            return { value: elem.key.toString(), label: elem.title };
          })
        );
      });
    })();
  }, []);

  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Select: {
            styles: () => ({
              wrapper: {
                marginTop: "0.8rem",
              },
            }),
          },
        },
      }}
    >
      <Select
        data-elem={"industry-select"}
        size="xl"
        radius={8}
        className="select"
        placeholder="Выберете отрасль"
        data={category}
        rightSection={<ChevronDown size="2rem" strokeWidth={1} />}
        {...form.getInputProps("catalogues")}
      />
    </MantineProvider>
  );
};

export default SelectCategory;
