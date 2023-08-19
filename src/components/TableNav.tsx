import { NavbarData } from "@src/assets/data/heroTableData";
import { LogoTableIcon } from "@src/icons/LogoTableIcon";

export interface TableNavProps {
  data: NavbarData[];
  activeCategory: number;
  handleSetActiveCategory: (value: number) => void;
}

export const TableNav = (props: TableNavProps) => {
  return (
    <div className="py-[29px] px-[27px] flex flex-col border-r border-light-gray-2 gap-y-8">
      <div>
        <LogoTableIcon />
      </div>
      <div className="flex w-full flex-col gap-y-6 pb-5">
        {props.data.map((item) => (
          <section key={item.id} className="flex px-1 flex-col gap-y-1">
            <div className="uppercase font-medium leading-[154%] text-black text-[10px] ">
              {item.sectionName}
            </div>
            {item.categories.map((el) => (
              <div
                onClick={() => props.handleSetActiveCategory(el.id)}
                key={el.id}
                className={`flex ${
                  props.activeCategory === el.id && "bg-black"
                } gap-x-2 hover:bg-light-gray-2 rounded-lg cursor-pointer py-2`}
              >
                <div>{el.icon}</div>
                <div
                  className={`${
                    props.activeCategory === el.id
                      ? "text-white"
                      : "text-dark-gray"
                  }  capitalize font-medium text-[10px] `}
                >
                  {el.name}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};
