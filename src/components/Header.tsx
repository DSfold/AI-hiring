import { LogoIcon } from "@src/icons/LogoIcon";
import { HamburgerMenu } from "./HamburgerMenu";
import { HamburgerModal } from "./HamburgerModal";
import { useState } from "react";

export interface HeaderProps {
  openModal: () => void;
  openModalSignIn: () => void;
}

export const Header = (props: HeaderProps) => {
  const [isModal, setIsModal] = useState<boolean>();

  return (
    <>
      <div className="w-full h-[133px] px-[52px] lg:px-[144px] py-[32px] flex justify-between items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="hidden text-[14px] lg:text-[16px] xl:text-[18px] font-medium md:flex space-x-3 xl:space-x-[32px]">
          <a
            href="#about"
            className="hover:text-green ease-linear duration-100"
          >
            About
          </a>
          <a
            href="#benefits"
            className="hover:text-green ease-linear duration-100"
          >
            Benefits
          </a>
          <a
            href="#testimonials"
            className="hover:text-green ease-linear duration-100"
          >
            Testimonials
          </a>
          <a href="#faq" className="hover:text-green ease-linear duration-100">
            FAQ
          </a>
          <a
            href="#contacts"
            className="hover:text-green ease-linear duration-100"
          >
            Contacts
          </a>
        </div>
        <div className="hidden md:flex space-x-[8px] font-medium">
          <button
            onClick={props.openModal}
            className="text-light-gray btn bg-violet"
          >
            Contact us
          </button>
          <button
            onClick={props.openModalSignIn}
            className="btn text-dark-gray-2 border border-light-gray-2"
          >
            Sign in
          </button>
        </div>
        <div onClick={() => setIsModal(!isModal)} className="block md:hidden">
          <HamburgerMenu />
        </div>
      </div>
      {isModal && (
        <HamburgerModal
          openModal={props.openModal}
          openModalSignIn={props.openModalSignIn}
          onClickLink={() => setIsModal(!isModal)}
        />
      )}
    </>
  );
};
