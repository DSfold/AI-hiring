import { BenefitsCard } from "@src/assets/data/benefits";

export const CardBenefits = (props: BenefitsCard) => {
  return (
    <div className="flex flex-col space-y-7 mx-4 my-6">
      <div
        className={`h-[328px] rounded-xl ${props.color} flex items-end justify-center`}
      >
        <img src={props.image} />
      </div>
      <div className="text-2xl leading-[29px] font-semibold text-black">
        {props.title}
      </div>
      <div className="text-[18px] leading-[30px] text-dark-gray-2">
        {props.text}
      </div>
    </div>
  );
};
