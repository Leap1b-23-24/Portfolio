export function Col(props) {
  return (
    <div className="flex">
      <div className="bg-[#374151] p-[48px] w-[576px] h-[486px">
        <img src="/picture.png" />
      </div>
      <div className="flex flex-col gap-5 items-start p-[48px] bg-[#4B5563] w-[576px] h-[486px]">
        <h2 className="text-[20px] font-[600] text-white">{props.title}</h2>
        <p className="text-[16px] font-[400] text-[#D1D5DB]">{props.text}</p>
        <div className="flex flex-wrap gap-5 text-[14px] text-[400]">
          {props.btn.map((item) => {
            return (
              <div
                key={item.id}
                className="px-[20px] py-[4px] bg-[#374151] rounded-[12px] text-white"
              >
                {item}
              </div>
            );
          })}
        </div>
        <img src="/iconn.svg" className="w-6 h-6" />
      </div>
    </div>
  );
}
