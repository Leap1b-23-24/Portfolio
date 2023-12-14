import { Button } from "./Button";
import { useTheme } from "@/app/page";
export const Work = () => {
  const darkmode = useTheme();
  return (
    <div
      className="w-full flex flex-col  gap-[50px] items-center rounded-[12px] "
      id="work"
    >
      <div className="mt-[50px]">
        <Button title="Work"></Button>
      </div>
      <p className="font-normal text-[#4B5563] text-xl dark:text-[#D1D5DB]">
        {" "}
        Some of the noteworthy projects I have built:
      </p>
      <div className=" flex flex-col md:flex md:flex-row w-[80%] shadow-md rounded-[12px] justify-center items-center overflow-hidden">
        <div className="flex grow basis-0 bg-[#F3F4F6] justify-center items-center dark:bg-[#374151] ">
          <img
            src="/Picture.png"
            className="flex rounded-[12px] p-[48px]"
          ></img>
        </div>
        <div className="flex flex-col gap-[24px] h-[100%]  grow basis-0 p-[50px] dark:bg-[#1F2937]">
          <p>Fiskil</p>
          <p className="flex flex-wrap dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="Reacdsfdt"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="Reasdfsct"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="Readsfct"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="Refssact"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="Rvbveact"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex md:flex-row w-[80%] shadow-md rounded-[12px] justify-center items-center overflow-hidden">
        {/* <div className="flex grow basis-0 bg-[#F3F4F6] rounded-[12px] justify-center items-center">
          <img
            src="/Picture.png"
            className="flex rounded-[12px] p-[48px]"
          ></img>
        </div> */}
        <div className="flex flex-col gap-[24px]  grow basis-0 p-[50px]  dark:bg-[#1F2937]">
          <p>Fiskil</p>
          <p className="flex flex-wrap dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex grow basis-0 bg-[#F3F4F6]  justify-center items-center dark:bg-[#374151]">
          <img
            src="/Picture.png"
            className="flex rounded-[12px] p-[48px]"
          ></img>
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row w-[80%] shadow-md rounded-[12px] justify-center items-center overflow-hidden">
        <div className="flex grow basis-0 bg-[#F3F4F6] justify-center items-center dark:bg-[#374151]">
          <img
            src="/Picture.png"
            className="flex rounded-[12px] p-[48px]"
          ></img>
        </div>
        <div className="flex flex-col gap-[24px]  grow basis-0 p-[50px] h-full dark:bg-[#1F2937]">
          <p>Fiskil</p>
          <p className="flex flex-wrap dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
              <div className="flex gap-[10px]">
                <Button title="React"></Button>
                <Button title="Next.js"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
