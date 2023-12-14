export const Button = (props) => {
  return (
    <div className="AboutMeTitle flex items-center justify-center ">
      <span className="bg-[#E5E7EB] px-5 py-1 rounded-[12px] justify-self-center text-[#4B5563] text-sm font-medium leading-5 cursor-pointer dark:bg-[#374151] dark:text-[#D1D5DB]">
        {props.text}
      </span>
    </div>
  );
};
