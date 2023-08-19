import { OffsetNameCard } from "./OffsetNameCard";

export const OffsetCardRight = () => {
  return (
    <div className="absolute rotate-[40deg] opacity-25 w-[304px] h-[332px] -right-5 top-[250px] lg:opacity-100 border border-light-gray rounded-xl shadow-md">
      <div className="flex flex-col gap-y-5 justify-between h-full p-5">
        <div className="text-[14px] text-black leading-[136%] font-semibold">
          Recommended candidates
        </div>
        <OffsetNameCard
          color="bg-violet"
          name="Robert Fox"
          postion="Junior UX/UI Designer"
        />
        <OffsetNameCard
          image="/images/profilePics/KristinWatson.png"
          name="Kristin Watson"
          postion="Middle UX/UI Designer"
        />
        <OffsetNameCard
          color="bg-apricot"
          name="Annette Black"
          postion="Senior UX/UI Designer"
        />
      </div>
    </div>
  );
};
