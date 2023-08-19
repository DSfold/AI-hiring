export const OffsetCardLeft = () => {
  return (
    <div className="absolute opacity-25 lg:opacity-100 left-8 z-0 w-[313px] h-[184px] top-[450px] -rotate-[20deg] bg-lightest p-[22px] border border-light-gray shadow-md rounded-xl">
      <div className="flex flex-col">
        <div className="text-[14px] font-semibold leading-[24px] text-black">
          Strong Middle designer
        </div>
        <div className="text-[12px] leading-[20px] text-dark-gray">
          1 year of experience, remote
        </div>
        <div className="flex gap-x-3 mt-[14px] mb-[16px]">
          <button className="rounded-lg px-[5px] text-black text-[9px] font-bold leading-[15px] bg-light-green p-1 hover:bg-button-hover">
            Full time
          </button>
          <button className="rounded-lg px-[5px] p-1 text-lightest text-[9px] font-bold leading-[15px] bg-green hover:bg-button-hover">
            Pre-intermedia
          </button>
        </div>
        <div className="text-[13px] leading-[20px] text-dark-gray">
          We are looking for a Strong Middle designer in a product IT company..
        </div>
      </div>
    </div>
  );
};
