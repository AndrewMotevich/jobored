import Filters from "@/components/Filters/Filters";
import VacancyList from "../components/VacancyList/VacancyList";

export default async function Home() {
  return (
    <div className="main-wrapper">
      <Filters />
      <VacancyList />
    </div>
  );
}
