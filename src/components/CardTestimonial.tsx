import { TestimonialData } from "@src/assets/data/testimonials";

export const CardTestimonial = (props: TestimonialData) => {
  return (
    <div className="flex flex-col justify-center items-center border border-light-gray-3 md: lg:w-full rounded-lg h-[401px] p-[10px]">
      <div className="flex max-w-[330px] flex-col justify-around items-start h-full">
        <div className="text-[18px] font-medium leading-[32px] text-black">{`"${props.testimonial}"`}</div>
        <div className="flex">
          <div className="w-[42px] h-[42px] mr-[16px]">
            <img src={props.image} />
          </div>
          <div className="flex flex-col justify-between gap-y-[18px]">
            <div
              className={`p-[10px] ${props.color} text-[16px] font-bold leading-[16.271px] text-light-gray rounded-ss-lg rounded-r-lg w-fit`}
            >
              {props.name}
            </div>
            <div className="text-[16px] font-medium leading-[24px] text-dark-gray-2">
              {props.position}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
