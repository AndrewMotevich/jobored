import Filters from "@/components/filters/Filters";
import SearchInput from "../components/SearchInput/SearchInput";

export default async function Home() {
  return (
    <>
      <SearchInput />
      <Filters />
    </>
  );
}
