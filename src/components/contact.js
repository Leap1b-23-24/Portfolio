export const Contact = (props) => {
  return (
    <div className="w-fit h-fit flex items-center  gap-4">
      <div className="w-[24px] h-[24px] flex items-center justify-center sm:w-[44px] sm:h-[44px]">
        <img className="dark:invert w-full h-full" src={props.image1} />
      </div>
      <p className="text-[18px] text-[#111827] dark:text-[#F9FAFB] font-semibold sm:text-[36px]">
        {props.text}
      </p>
      <div className="w-[24px] h-[24px] flex items-center justify-center sm:w-[44px] sm:h-[44px]">
        <img className="dark:invert w-full h-full" src={props.image2} />
      </div>
    </div>
  );
};
