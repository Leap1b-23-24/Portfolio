import Graybttn from "./Graybttn";
import Texts from "./Texts";
import Card from "./Card";
export function Page4() {
  return (
    <div className="py-[64px] px-[16px] bg-gray-50 dark:bg-[#111827] xl:py-[96px] xl:px-[80px]">
      <div className="flex flex-col items-center gap-[16px] xl:gap-[48px] xl:px-[192px]">
        <Graybttn title="Experience" />
        <Texts text="Here is a quick summary of my most recent experiences:" />
        <div className="w-full">
          <Card
            title="Sr. Frontend Developer"
            first="Nov 2021"
            last="Present"
            list="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            title="Team Lead"
            first="Jul 2017"
            last="Oct 2021"
            list="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            title="Full Stack Developer"
            first="Dec 2015"
            last="May 2017"
            list="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
}
