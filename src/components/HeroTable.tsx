import { navbarSections } from "@src/assets/data/heroTableData";
import { TableNav } from "./TableNav";
import { FilterIcon } from "@src/icons/FilterIcon";
import { HeroTableHeader } from "./HeroTableHeader";
import { CandidatesTable } from "./CandidatesTable";
import { candidates } from "@src/assets/data/candidatesTableData";
import { useSetHeroTableData } from "@src/hooks/useSetHeroTableData";

export const HeroTable = () => {
  const { activeCategory, handleSetActiveCategory } = useSetHeroTableData();
  return (
    <div className="border max-h-[670px] w-full border-light-gray-2 rounded-xl overflow-hidden">
      <div className="flex">
        <div className="w-1/4">
          <TableNav
            activeCategory={activeCategory}
            handleSetActiveCategory={handleSetActiveCategory}
            data={navbarSections}
          />
        </div>
        <div className="w-full table">
          <HeroTableHeader />
          <div className="wrapper bg-light-voilet h-full w-full p-[20px]">
            <section className="flex items-center justify-between">
              <div className="flex flex-col gap-y-4">
                <div className="text-black text-[15px] font-semibold">
                  Candidates
                </div>
                <div className="text-[11px] font-medium text-dark-gray">
                  Matches to your request: <span className="text-blue">32</span>
                </div>
              </div>
              <div>
                <button className="bg-light-gray p-[10px] flex text-[11px] text-dark-gray rounded-md hover:bg-button-hover">
                  <FilterIcon /> <div className="ml-2">Filter</div>
                </button>
              </div>
            </section>
            <div className="header-table"></div>
            <div className="table rows w-full">
              <CandidatesTable data={candidates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
