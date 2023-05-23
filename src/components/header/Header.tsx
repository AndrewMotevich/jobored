"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import icon from "../../../public/icons/logo.svg";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="header-container">
        <nav>
          <h1>
            <Image src={icon} width={30} height={30} alt="Logo" />
            <Link href="/">Jobored</Link>
          </h1>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                <h3 className={pathname === "/" ? "active" : ""}>
                  Поиск вакансий
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <h3 className={pathname === "/favorites" ? "active" : ""}>
                  Избранное
                </h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
