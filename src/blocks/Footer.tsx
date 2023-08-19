import { InfoLinksData } from "@src/assets/data/links";
import { InfoLinks } from "@src/components/InfoLinks";
import { LogoFooterIcon } from "@src/icons/LogoFooterIcon";

export interface FooterProps {
  data: InfoLinksData[];
}

export const Footer = (props: FooterProps) => {
  return (
    <div
      id="contacts"
      className="px-[52px] xl:px-[144px] pt-[56px] pb-[32px] bg-black min-h-[480px] flex flex-col justify-between"
    >
      <div>
        <div className="mb-[42px]">
          <LogoFooterIcon />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-x-[15%] gap-y-8">
          <div className="flex flex-1 flex-col gap-y-8 max-w-[420px]">
            <div className="text-[16px] text-light-gray-4 font-medium leading-[24px]">
              Stop wasting your time on unnecessary things and get started with
              <span className="font-semibold"> Scalemate</span> today.
            </div>
            <div className="flex gap-x-2">
              <button className="btn bg-violet text-light-gray font-medium leading-[24px]">
                Start for free
              </button>
              <button className="btn bg-light-gray font-semibold">
                Book demo
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-row justify-between">
            {props.data.map((el) => (
              <InfoLinks
                key={el.id}
                links={el.links}
                sectionName={el.sectionName}
                id={el.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-[18px] font-medium text-light-gray-4">
        © Scalemate. 2023 — All rights reserved.
      </div>
    </div>
  );
};
