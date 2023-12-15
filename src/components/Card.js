import Work from "./Work";
export function Card(props) {
  return (
    <div className="p-[32px] rounded-xl mb-[16px] bg-white shadow-xl dark:bg-[#1F2937]">
      <div className="flex flex-col gap-[16px] items-start dark:text-[#F9FAFB] xl:hidden">
        {/* <img className="h-[28px] w-[102px]" src="cardlogo.png"></img> */}
        <Work imgs="/cardlogo.svg" />
        <span className="dark:text-[#D1D5DB]">
          {props.first} - {props.last}
        </span>
        <h3 className="text-[18px] leading-7 font-semibold">{props.title}</h3>
        <div className="flex dark:text-[#D1D5DB]">
          {/* <span className="w-[8px] h-[8px] bg-gray-600 rounded-full"></span> */}
          <p>{props.list}</p>
        </div>
      </div>
      <div className=" gap-[48px] items-start dark:text-[#F9FAFB] hidden xl:flex">
        {/* <img className="h-[28px] w-[102px]" src="cardlogo.png"></img> */}
        <Work imgs="/cardlogo.svg" />

        <div className="">
          <h3 className="text-[16px] leading-6 font-normal">{props.title}</h3>
          <div className="flex dark:text-[#D1D5DB]">
            {/* <span className="w-[8px] h-[8px] bg-gray-600 rounded-full"></span> */}
            <p>{props.list}</p>
          </div>
        </div>
        <span className="dark:text-[#D1D5DB]">
          {props.first} - {props.last}
        </span>
      </div>
    </div>
  );
}
export default Card;
