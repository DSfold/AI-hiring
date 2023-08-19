import { useScrollTop } from "@src/hooks/useScrollTop";
import { ChevronIcon } from "@src/icons/ChevronIcon";

export const ScrollTopButton = () => {
  const { showScroll, scrollTop } = useScrollTop();
  return (
    <>
      <div>
        <button
          onClick={scrollTop}
          className={`${
            showScroll ? "flex" : "hidden"
          } fixed w-12 right-5 bottom-5 h-12 items-center justify-center z-50 transition-opacity opacity-50 duration-100 bg-light-green rounded-full hover:opacity-100`}
        >
          <div className="rotate-180 mb-1">
            <ChevronIcon />
          </div>
        </button>
      </div>
    </>
  );
};
