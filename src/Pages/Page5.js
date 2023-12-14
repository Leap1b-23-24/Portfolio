import { PageHeader } from "@/components/pageHeader";
import { PageFiveContent } from "@/components/contentOfFive";

export const PageFive = (props) => {
  return (
    <div
      ref={props.refValue}
      id="Worksection"
      className="w-screen h-fit py-[64px] px-[16px] flex flex-col items-center
     bg-[#FFFFFF] gap-[24px] dark:bg-[#030712] sm:px-[144px]"
    >
      <PageHeader
        head="Work"
        desc="Some of the noteworthy projects I have built:"
      />
      <PageFiveContent />
      <PageFiveContent />
      <PageFiveContent />
    </div>
  );
};
