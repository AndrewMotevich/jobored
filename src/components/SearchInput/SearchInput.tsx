"use client";
import React from "react";
import { MantineProvider, TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Search } from "tabler-icons-react";

const SearchInput = () => {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          TextInput: {
            styles: () => ({
              rightSection: {
                marginRight: "2rem",
              },
            }),
          },
        },
      }}
    >
      <TextInput
        size="xl"
        radius={8}
        placeholder="Введите название вакансии"
        icon={<Search size={16} strokeWidth={2} color={"#ACADB9"} />}
        rightSection={
          <Button size="lg" radius={8}>
            Поиск
          </Button>
        }
      />
    </MantineProvider>
  );
};

export default SearchInput;
