import { PageFiveProps } from "@/components/pageFiveContent";
import { PageFivePic } from "@/components/pageFiveContent";
export const PageFiveContent = () => {
  return (
    <div
      className="h-fit w-full flex flex-col  overflow-hidden items-stretch
      sm:flex-row  max-w-[1400px]  rounded-lg shadow-md"
    >
      <div
        className="w-full h-fit flex justify-center items-center gap-[24px]
          p-[30px] sm:p-[40px]
         bg-[#F9FAFB] dark:bg-[#374151] sm:h-full"
      >
        <PageFivePic />
      </div>
      <div className="w-full  flex flex-col gap-6 p-[30px] dark:bg-[#111827] ">
        <PageFiveProps />
      </div>
    </div>
  );
};
