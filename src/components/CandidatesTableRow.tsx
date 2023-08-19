import { StarIcon } from "@src/icons/StarIcon";

export interface CandidatesTableRowProps {
  candidate: { profile: string; name: string };
  rating: number;
  stages: { name: string; color: string; progress: number };
  appliedDate: Date;
  owner: { profile: string; name: string };
  isFirst?: boolean;
  isLast?: boolean;
}

export const CandidatesTableRow = (props: CandidatesTableRowProps) => {
  return (
    <tr className="bg-lightest w-full text-[10px] font-medium text-black leading-[125%] hover:bg-light-gray-4">
      <td
        className={`pl-[15px] py-[10px] ${
          props.isFirst ? "rounded-ss-lg" : ""
        } ${props.isLast ? "rounded-es-lg" : ""}  `}
      >
        <div className="flex items-center gap-x-2">
          <div>
            <img src={props.candidate.profile} alt="profile" />
          </div>
          <div>{props.candidate.name}</div>
        </div>
      </td>
      <td>
        <div className="flex justify-start text-left gap-x-1 items-center mr-11">
          <StarIcon />
          <div>{props.rating}</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-1">
          <div>{props.stages.name}</div>
          <div></div>
          <div className="flex gap-x-0.5">
            {new Array(6).fill(0).map((el, i) => (
              <div
                key={i}
                className={`w-[5px] h-[2px] rounded-lg ${
                  i >= props.stages.progress
                    ? "bg-light-gray-3"
                    : props.stages.color
                }`}
              ></div>
            ))}
          </div>
        </div>
      </td>
      <td>{props.appliedDate.toDateString().split(" ").slice(1).join(" ")}</td>
      <td
        className={`
      ${props.isFirst ? "rounded-se-lg" : ""} ${
          props.isLast ? "rounded-ee-lg" : ""
        }`}
      >
        <div className="flex gap-x-2 items-center">
          <div>
            <img src={props.owner.profile} alt="profile" />
          </div>
          <div>{props.owner.name}</div>
        </div>
      </td>
    </tr>
  );
};
