export const EachBox = (props) => {
  return (
    <div
      className="w-[78px] h-[96px] flex flex-col items-center gap-[8px]
    sm:w-[88px] sm:h-[100px] "
    >
      <div className="w-[64px] h-[64px]">
        <img className="w-full h-full" src={props.image} />
      </div>
      <p className="text-[#4B5563] text-[16px] dark:text-[#D1D5DB]">
        {props.name}
      </p>
    </div>
  );
};
