import { SortByIcon } from "@src/icons/SortByIcon";

export const CandidatesTableHeader = () => {
  return (
    <div className="w-full mb-[20px]">
      <div className="flex px-[15px] py-[13px]  bg-lightest rounded-lg text-dark-gray text-[10px] font-medium leading-[125%] mb-5">
        <div className="flex items-center w-[29%] gap-x-1">
          <input type="checkbox" />
          <div>Candidate name</div>
        </div>
        <div className="flex items-center w-[17%] gap-x-1">
          <div>Rating</div>
          <div>
            <SortByIcon />
          </div>
        </div>
        <div className="flex items-center w-[18%] gap-x-1 ">
          <div>Stage</div>
          <div>
            <SortByIcon />
          </div>
        </div>
        <div className="flex items-center w-[13%] gap-x-1">
          <div>Applied Date</div>
          <div>
            <SortByIcon />
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <div>Owner</div>
          <div>
            <SortByIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
