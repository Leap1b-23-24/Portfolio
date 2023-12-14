export const Button = (props) => {
  return (
    <p className="mb-[16px] sm:mb-[24px] text-sm dark:text-[#D1D5DB] text-[#4B5563] px-[20px] py-[4px] rounded-[12px] dark:bg-[#374151] bg-[#E5E7EB]">
      {props.text}
    </p>
  );
};
