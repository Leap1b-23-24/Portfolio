export const EachExps = (props) => {
  return (
    <div
      className="w-full h-fit flex flex-col gap-[16px] bg-[#FFFFFF] rounded-md shadow-md p-[32px]
              dark:bg-[#1F2937] sm:flex-row sm:items-start sm:justify-between"
    >
      <div className="w-fit h-[28px]">
        <img src="/Group.png" />
      </div>
      <div className="w-fit h-fit flex flex-col gap-6 sm:flex-row-reverse sm:w-[60%] sm:justify-between ">
        <div className="w-full h-[24px] dark:text-[#D1D5DB] text-[#4B5563] ">
          {props.date}
        </div>
        <div className="w-full h-fit">
          <ul className="w-full h-fit">
            {props.lists.map((each, index) => {
              return (
                <li
                  key={index}
                  className=" w-fit h-fit leading-6 text-[16px] flex gap-[5px] dark:text-[#D1D5DB] text-[#4B5563] "
                >
                  <p className="text-[20px]">-</p>
                  {each}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
