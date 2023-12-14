// import { IconName } from "react-icons/cg";
export const Header = (props) => {
  return (
  
      <div class="py-5 pr-10 pl-20 w-[1440px] h-68 flex justify-between dark:bg-neutral-900" >
        <p className="font-bold text-sm dark:text-white"> &#60;SS &#47;&#62;</p>
        <div className="flex flex-row gap-20">
          <div class="flex flex-row gap-10">
            <p class="dark:text-[#D1D5DB]">About</p>
            <p className=" dark:text-[#D1D5DB]">Work</p>
            <p className="dark:text-[#D1D5DB]">Testimonials</p>
            <p  className="dark:text-[#D1D5DB]">Contact</p>
          </div>
          <div class="flex flex-row gap-5">
            <img onClick={props.function} src="/sun.png" width={24} height={10}></img>
            <button className="w-[130px] h-[25spx] bg-black dark:bg-[#D1D5DB] dark:text-black text-white rounded-2xl">Download CV</button>
          </div>
        </div>
      </div>

  );
}