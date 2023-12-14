import { Button } from "./Button";
export const Skill = () => {
  return (
    <>
      <div className="px-[80px] py-[96px]">
        <div className="px-[32px] flex flex-col text-center">
          <div className="w-100% flex justify-center mb-[16px]">
            <Button text="Skills" />
          </div>
          <p className="mb-[48px]">
            The skills, tools and technologies I am really good at:
          </p>
          <div className="flex justify-center">
            <img className="hidden sm:flex" src="Row.png"></img>
            <img className="flex sm:hidden" src="Grid.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};
