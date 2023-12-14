import { Button } from "./buttons";
import { names } from "./pictures";
export const PageFiveProps = () => {
  return (
    <>
      <h1
        className="text-[#111827] text-[18px] dark:text-[#F9FAFB]
       w-fit h-fit "
      >
        Fiskil
      </h1>
      <p
        className="text-[#4B5563] text-[16px] dark:text-[#F9FAFB] 
      w-fit"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <div className="flex-wrap flex gap-[8px] px-[5px] py-[10px] text-[16px] ">
        {names.map((items, index) => {
          return (
            <div key={index} className="w-fit h-[px]">
              <Button text={items} />
            </div>
          );
        })}
      </div>
      <div className="w-fit h-fit">
        <img className="w-[24px] h-[24px] dark:invert" src="/iconbtn.png" />
      </div>
    </>
  );
};
export const PageFivePic = () => {
  return (
    <div
      className="w-full h-[192px] overflow-hidden flex justify-center items-center 
     bg-[#F9FAFB] rounded-lg sm:h-full"
    >
      <img className="w-full h-full" src="/Picture.jpeg" />
    </div>
  );
};
