import { ArrowIcon } from "@src/icons/ArrowIcon";

export interface CardTalentProps {
  title: string;
  heading: string;
  text: string;
  img: string;
  link?: string;
}

export const CardTalent = (props: CardTalentProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center min-h-[606px] bg-peach rounded-lg">
      <div className="min-w-1/2 px-[56px] space-y-8 py-10 md:py-0">
        <div className="text-[16px] font-semibold uppercase">{props.title}</div>
        <div className="text-[40px] font-semibold leading-[50px] capitalize">
          {props.heading}
        </div>
        <div className="text-[18px] leading-[30px] text-dark-gray">
          {props.text}
        </div>
        {props.link && (
          <button className="btn bg-black text-light-gray">
            <div className="flex space-x-3">
              <span> Learn more</span>
              <span>
                <ArrowIcon />
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="flex justify-end w-full py-7">
        <img src={props.img} />
      </div>
    </div>
  );
};
