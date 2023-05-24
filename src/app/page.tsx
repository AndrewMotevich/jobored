import Filters from "@/components/Filters/Filters";
import SearchInput from "../components/SearchInput/SearchInput";

export default async function Home() {
  return (
    <div className="main-wrapper">
      <Filters />
      <SearchInput />
    </div>
  );
}
