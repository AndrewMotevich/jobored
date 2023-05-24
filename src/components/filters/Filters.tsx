"use client";
import React from "react";
import styles from "./Filters.module.scss";
import { useForm } from "@mantine/form";
import { Button, MantineProvider } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import SelectCategory from "./SelectCategory/SelectCategory";
import { FilterDataType } from "@/models/filterDataType";

const Filters = (props: { callback: (value: FilterDataType) => void }) => {
  const form = useForm<FilterDataType>({
    initialValues: {
      catalogues: "",
      payment_from: "",
      payment_to: "",
    },
  });
  const dirty =
    form.isDirty("catalogues") ||
    form.isDirty("payment_from") ||
    form.isDirty("payment_to");
  return (
    <>
      <form
        className={styles.filterContainer}
        onSubmit={form.onSubmit((values, _event) => {
          _event.preventDefault();
          props.callback(values);
        })}
        onReset={form.onReset}
      >
        <div className={styles.twoColLayout}>
          <h2>Фильтры</h2>
          <button disabled={!dirty} type="reset" className={styles.resetButton}>
            Сбросить все <span>&nbsp;&#10005;</span>
          </button>
        </div>
        <h3 className={styles.category}>Отрасль</h3>
        <SelectCategory form={form} />
        <h3 className={styles.payment}>Оклад</h3>
        <MantineProvider
          inherit
          theme={{
            components: {
              NumberInput: {
                styles: () => ({
                  wrapper: {
                    marginTop: "0.8rem",
                  },
                  rightSection: {
                    button: {
                      border: "none",
                    },
                  },
                }),
              },
            },
          }}
        >
          <NumberInput
            size="xl"
            radius={8}
            placeholder="От"
            {...form.getInputProps("payment_from")}
          />
          <NumberInput
            size="xl"
            radius={8}
            placeholder="До"
            {...form.getInputProps("payment_to")}
          />
        </MantineProvider>
        <Button
          size="xl"
          radius={8}
          className={styles.submitButton}
          type="submit"
          fullWidth
        >
          Применить
        </Button>
      </form>
    </>
  );
};

export default Filters;
