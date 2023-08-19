import { HeroTable } from "@src/components/HeroTable";
import { OffsetCardLeft } from "@src/components/OffsetCardLeft";
import { OffsetCardRight } from "@src/components/OffsetCardRight";

export const HeroScreen = () => {
  return (
    <div className="px-[50px] lg:px-[280px] pt-[165px] pb-[56px] flex flex-col justify-center items-center">
      <div className="text-center z-30 text-[78px] font-bold leading-[90px] mb-[24px] capitalize">
        Build a Skills-Based Organization
      </div>
      <div className="text-[18px] z-30 max-w-[400px] text-center leading-[30px] text-dark-gray-2 mb-[44px]">
        Discover a single AI-powered talent acqusition platform to hire
        potential employees faster
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-[42px]">
        <button className="btn bg-violet font-medium leading-[24px] text-light-gray-3">
          Start for free
        </button>
        <button className="btn font-semibold bg-light-gray leading-[24px]">
          Book demo
        </button>
      </div>
      <HeroTable />
      <OffsetCardLeft />
      <OffsetCardRight />
    </div>
  );
};
