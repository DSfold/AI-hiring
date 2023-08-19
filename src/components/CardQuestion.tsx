import { QuestionData } from "@src/assets/data/questions";
import { ChevronIcon } from "@src/icons/ChevronIcon";
import { useState } from "react";

export const CardQuestion = (props: QuestionData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="text-[18px] font-medium leading-[30px] cursor-pointer w-full">
        <div
          className="flex justify-between items-center bg-light-gray py-[16px] px-[24px] rounded-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{props.question}</div>
          <div
            className={`${
              !isOpen ? "" : "rotate-180"
            } ml-2 ease-out duration-150`}
          >
            <ChevronIcon />
          </div>
        </div>
        {isOpen && (
          <div className="mt-[16px] text-[16px] text-dark-gray px-[24px]">{`"${props.answer}"`}</div>
        )}
      </div>
    </>
  );
};
