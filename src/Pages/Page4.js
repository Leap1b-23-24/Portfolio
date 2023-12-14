import { PageHeader } from "@/components/pageHeader";
import { Experience } from "@/components/experience";
export const PageFour = () => {
  return (
    <div className="w-screen h-fit px-[16px] py-[64px] bg-[#F9FAFB] dark:bg-[#111827] flex flex-col items-center gap-[24px]">
      <PageHeader
        head="Experience"
        desc="Here is a quick summary of my most recent experiences:"
      />
      <Experience
        title1="title1"
        date1="Nov 2021 - Present"
        title2="title1"
        date2="Nov 2021 - Present"
        title3="title1"
        date3="Nov 2021 - Present"
      />
    </div>
  );
};
