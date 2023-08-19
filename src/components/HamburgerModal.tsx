import { links } from "@src/assets/data/links";

export interface HamburgerModalProps {
  onClickLink: () => void;
  openModal: () => void;
  openModalSignIn: () => void;
}

export const HamburgerModal = (props: HamburgerModalProps) => {
  return (
    <div className="absolute z-50 flex md:hidden items-start justify-center w-full">
      <div className="absolute w-full m-auto items-center bg-light-gray overflow-hidden">
        <div className="flex flex-col py-20 items-center gap-y-8 text-[18px] font-medium">
          {links[0].links.map((el) => (
            <a
              key={el.link}
              onClick={props.onClickLink}
              href={el.link}
              className="hover:text-green ease-linear duration-150 cursor-pointer"
            >
              {el.name}
            </a>
          ))}
          <a
            href="#benefits"
            className="hover:text-green ease-linear duration-150 cursor-pointer"
            onClick={props.onClickLink}
          >
            Benefits
          </a>
        </div>
        <div className="flex flex-col py-2">
          <button
            onClick={props.openModal}
            className="bg-violet p-4 text-[16px] text-white hover:bg-button-hover"
          >
            Contact us
          </button>
          <button
            onClick={props.openModalSignIn}
            className="border-y p-4 border-gray text-[16px] font-semibold  hover:bg-button-hover"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
