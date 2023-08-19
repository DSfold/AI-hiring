import { ChevronIcon } from "@src/icons/ChevronIcon";
import { HelpIcon } from "@src/icons/HelpIcon";
import { NotificationsIcon } from "@src/icons/NotificationsIcon";
import { SearchIcon } from "@src/icons/SearchIcon";

export const HeroTableHeader = () => {
  return (
    <div className="header w-full flex justify-between items-center py-[3%] px-[2%]">
      <div className="flex">
        <div className="rotate-90 cursor-pointer hover:bg-light-gray-2 rounded-full">
          <ChevronIcon />
        </div>
        <div className="-rotate-90 cursor-pointer hover:bg-light-gray-2 rounded-full">
          <ChevronIcon />
        </div>
      </div>
      <div className="flex justify-between w-1/2 items-center gap-x-5">
        <div className="flex w-3/4">
          <input
            className="py-[6px] text-[10px] bg-light-gray w-full outline-none rounded-s-md  text-dark-gray px-[10px]"
            placeholder="Search by anything"
          />
          <button className="bg-black p-[5px] rounded-e-md">
            <SearchIcon />
          </button>
        </div>
        <section className="flex items-center gap-x-3">
          <div>
            <NotificationsIcon />
          </div>
          <div>
            <HelpIcon />
          </div>
          <div className="hover:cursor-pointer hover:border rounded-full hover:border-violet">
            <img src="/images/profilePics/Main.png" />
          </div>
        </section>
      </div>
    </div>
  );
};
