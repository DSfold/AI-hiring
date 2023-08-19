import { IAboutCardData } from "@src/assets/data/aboutCardsData";
import { CardTalent } from "./CardTalent";

export interface CarouselProps {
  data: IAboutCardData[];
  active: number;
  handleSetActive: (value: number) => void;
}

export const Carousel = (props: CarouselProps) => {
  return (
    <div className="relative space-y-10">
      <div
        className={`relative duration-700 ease-in-out transition-transform rounded-xl min-h-[606px]`}
      >
        {props.data.map((el) => (
          <div
            key={el.id}
            id={el.id.toString()}
            className={`${
              el.id === props.active ? "inline-flex" : "hidden"
            } w-full`}
            data-carousel-item
          >
            <CardTalent
              title={el.title}
              heading={el.heading}
              text={el.text}
              img={el.image}
              link={el.link}
            />
          </div>
        ))}
      </div>

      <div className="z-30 flex items-center justify-center space-x-2">
        {props.data.map((item) => (
          <button
            key={item.id}
            id={item.id.toString()}
            type="button"
            className={`h-[13px] ${
              item.id === props.active ? "active-dots " : "passive-dots"
            } rounded-full cursor-pointer ease-in duration-100 hover:bg-green`}
            onClick={() => props.handleSetActive(item.id)}
          ></button>
        ))}
      </div>
    </div>
  );
};
