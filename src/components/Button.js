export const Button = (props) => {
  return (
    <div className=' h-[28px] p-1.5 rounded-xl flex justify-center items-center bg-[#E5E7EB] dark:bg-[#374151]' >
      <p className="text-[#4B5563] text-medium text-sm  p-3 dark:text-[#D1D5DB]">{props.title}</p>
    </div>
  );
};
