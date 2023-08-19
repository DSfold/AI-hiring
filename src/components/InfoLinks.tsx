import { InfoLinksData } from "@src/assets/data/links";

export const InfoLinks = (props: InfoLinksData) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-white text-[18px] font-semibold leading-[30px]">
        {props.sectionName}
      </div>
      <div className="flex flex-col gap-y-4 text-[18px] font-medium text-light-gray-4">
        {props.links.map((link) => (
          <a key={link.name} href={link.link}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
