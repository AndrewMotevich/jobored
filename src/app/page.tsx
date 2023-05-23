import Filters from "@/components/filters/Filters";
import { CategoryDataType } from "@/models/categoryDataType";
import SearchInput from "../components/textInut/SearchInput";

export default async function Home() {
  return (
    <>
      <SearchInput />
      <Filters />
    </>
  );
}
