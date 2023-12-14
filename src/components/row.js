export function Row(props) {
  return (
    <div className="flex p-[32px] bg-[#1F2937] ">
      <div className="flex gap-[100px] w-[896px]">
        <img className="self-start" src="/logo-upwork.svg" />

        <div>
          <h2 className="text-[20px] font-[600] text-white mb-5">
            {props.title}
          </h2>
          <ul className="w-[384px]">
            {props.exps.map((item) => {
              return (
                <li className="text-[16px] list-disc font-[400] text-[#D1D5DB] ml-7">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-[16px] font-[400] text-[#D1D5DB]">{props.date}</p>
      </div>
    </div>
  );
}
