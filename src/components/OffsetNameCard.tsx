import { MoreIcon } from "@src/icons/MoreIcon";
import { ProfileStarIcon } from "@src/icons/ProfileStarIcon";

export interface OffsetNameCardProps {
  name: string;
  postion: string;
  image?: string;
  color?: string;
}

export const OffsetNameCard = (props: OffsetNameCardProps) => {
  return (
    <div className="shadow-sm p-2 border justify-between hover:bg-light-green border-light-gray rounded-xl flex items-center ">
      <div className="flex gap-x-3">
        <div className="relative">
          {!props.image ? (
            <div
              className={`w-[42px] text-center  pt-2 h-[42px] ${props.color} rounded-full text-[16px] font-bold text-lightest uppercase`}
            >
              MJ
            </div>
          ) : (
            <img src={props.image} />
          )}
          <div className="absolute -bottom-2 -right-2">
            <ProfileStarIcon />
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-[12px] font-semibold leading-[136%] text-black">
            {props.name}
          </div>
          <div className="text-[12px] text-dark-gray leading-[20px]">
            {props.postion}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <MoreIcon />
      </div>
    </div>
  );
};
