export interface TitleProps {
  title: string;
  subTitle?: string;
  accent?: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-[42px] text-center max-w-[910px]">
      <div className="text-[40px] md:text-[56px] font-semibold leading-[40px] md:leading-[66px] mb-[24px] capitalize">
        {props.title}
      </div>
      {props.subTitle && (
        <div className="text-[18px] max-w-[400px] text-dark-gray-2 leading-[30px]">
          <span>{props.subTitle}</span>
          {props.accent && (
            <span className="text-dark-gray font-semibold">{props.accent}</span>
          )}
        </div>
      )}
    </div>
  );
};
