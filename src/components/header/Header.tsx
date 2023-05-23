"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">Jobored</Link>
      </h1>
      <Link href="/">Поиск вакансий</Link>
      <Link href="/favorites">Избранное</Link>
    </header>
  );
};

export default Header;
