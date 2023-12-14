import { PageHeader } from "@/components/pageHeader";
import { EachBox } from "@/components/eachBox";
import { myPics } from "@/components/pictures";

export const PageThree = (props) => {
  return (
    <div
      ref={props.refValue}
      id="Testomonialssection"
      className="w-screen h-fit bg-[#FFFFFF] px-[16px] flex flex-col py-[64px] dark:bg-[#030712] gap-6 items-center "
    >
      <PageHeader
        head="Skills"
        desc="The skills, tools and technologies I am really good at:"
      />
      <div className=" grid grid-cols-3 gap-[64px] sm:grid-cols-5 sm:gap-[74px] md:grid-cols-8 ">
        {myPics.map((eachPic) => {
          return (
            <EachBox
              key={eachPic.id}
              name={eachPic.name}
              image={eachPic.image}
            />
          );
        })}
      </div>
    </div>
  );
};
