import { IAboutCardData } from "@src/assets/data/aboutCardsData";
import { Carousel } from "@src/components/Carousel";
import { Title } from "@src/components/Title";
import { useCarouselControls } from "@src/hooks/useCarouselControls";

export interface AboutProps {
  data: IAboutCardData[];
}

export const About = (props: AboutProps) => {
  const { active, handleSetActive } = useCarouselControls();

  return (
    <>
      <div id="about" className="block-outline space-y-10">
        <Title title="Explore Talent Lifecycle Management" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
          {props.data.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSetActive(section.id)}
              className={`btn-lg font-medium ${
                section.id === active
                  ? "bg-green text-light-gray"
                  : "bg-peach text-black"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="w-full">
          <Carousel
            data={props.data}
            active={active}
            handleSetActive={handleSetActive}
          />
        </div>
      </div>
    </>
  );
};
