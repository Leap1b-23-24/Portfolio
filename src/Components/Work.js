import { Button } from "./Buttons";
import { Card } from "./Cards";
import { Card2 } from "./Cards";
export const Work = () => {
  return (
    <div className="flex flex-col md:px-24 md:py-20 p-6 bg-white gap-12  dark:bg-neutral-900 text-justify">
      <div className="flex flex-col gap-4">
        <Button text="Work" />
        <p className="text-xl text-[#4B5563] text-center leading-7 font-normal mt-4  dark:text-[#F9FAFB]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <Card />
      <Card2 />
      <Card />
    </div>
  );
};
