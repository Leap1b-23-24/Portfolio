import Texts from "./Texts";
import Graybttn from "./Graybttn";
import Cards from "./Cards";
export function Page5() {
  return (
    <div
      className="px-[16px] py-[64px] dark:bg-[#030712] xl:px-[144px] xl:py-[96px]"
      id="work"
    >
      <div className="flex flex-col items-center gap-[16px] xl:gap-[48px]">
        <Graybttn title="Work" />
        <Texts text="Some of the noteworthy projects I have built:" />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
