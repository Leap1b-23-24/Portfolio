import Texts from "./Texts";
import Graybttn from "./Graybttn";
import Work from "./Work";
export function Cards() {
  return (
    <>
      <div className="shadow-xl rounded-bl-xl rounded-br-xl xl:hidden">
        <div className="bg-gray-100 p-[32px] rounded-tl-xl rounded-tr-xl dark:bg-[#1F2937]">
          <div className="rounded">
            <img src="Picture.svg"></img>
          </div>
        </div>
        <div className="p-[32px] flex flex-col gap-[24px] rounded-bl-xl rounded-br-xl dark:bg-[#111827]">
          <h3 className="font-semibold leading-7 text-[18px] dark:text-[#F9FAFB]">
            Fiskil
          </h3>
          <Texts text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
          <div className="flex-wrap flex gap-[8px]">
            <Graybttn title="React" />
            <Graybttn title="Next.js" />
            <Graybttn title="Typescript" />
            <Graybttn title="Nest.js" />
            <Graybttn title="PostgreSQL" />
            <Graybttn title="Taiwindcss" />
            <Graybttn title="Figma" />
            <Graybttn title="Cypress" />
            <Graybttn title="Storybook" />
            <Graybttn title="Git" />
          </div>
          <div className="w-[36px] h-[36px] p-[6px]">
            <Work imgs="/icon.svg" />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-bl-xl rounded-br-xl hidden xl:flex">
        <div className="bg-gray-100 p-[32px] rounded-tl-xl rounded-tr-xl dark:bg-[#1F2937] w-6/12">
          <div className="rounded w-full h-full">
            <img className="w-full h-full" src="Picture.svg"></img>
          </div>
        </div>
        <div className="p-[32px] flex flex-col gap-[24px] rounded-bl-xl rounded-br-xl dark:bg-[#111827] w-6/12">
          <h3 className="font-semibold leading-7 text-[18px] dark:text-[#F9FAFB]">
            Fiskil
          </h3>
          <Texts text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
          <div className="flex-wrap flex gap-[8px]">
            <Graybttn title="React" />
            <Graybttn title="Next.js" />
            <Graybttn title="Typescript" />
            <Graybttn title="Nest.js" />
            <Graybttn title="PostgreSQL" />
            <Graybttn title="Taiwindcss" />
            <Graybttn title="Figma" />
            <Graybttn title="Cypress" />
            <Graybttn title="Storybook" />
            <Graybttn title="Git" />
          </div>
          <div className="w-[36px] h-[36px] p-[6px]">
            <Work imgs="/icon.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
