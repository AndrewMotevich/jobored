"use client";
import React from "react";
import Image from "next/image";
import seeker from "../../../public/images/seeker.png";
import { Button } from "@mantine/core";
import Link from "next/link";

const EmptyPage = () => {
  return (
    <div className="empty-wrapper">
      <Image src={seeker} width={240} height={230} alt="Seeker" />
      <p>Упс, здесь ничего нет!</p>
      <Link href="/">
        <Button size="xl" variant="light">
          Поиск вакансий
        </Button>
      </Link>
    </div>
  );
};

export default EmptyPage;
