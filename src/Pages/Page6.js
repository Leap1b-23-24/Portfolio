import { PageHeader } from "@/components/pageHeader";
import { Contact } from "@/components/contact";
import { ButtonIcons } from "@/components/Logos";

export const PageSix = (props) => {
  return (
    <div
      ref={props.refValue}
      id="Contactsection"
      className="w-screen h-fit py-[64px] px-4 bg-[#FFFFFF] dark:bg-[#030712] flex flex-col items-center justify-center"
    >
      <PageHeader head="Get in touch" />
      <p className="text-[#4B5563] text-[20px] leading-[28px] dark:text-[#D1D5DB] text-center">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex flex-col items-center w-full h-fit mt-[24px]">
        <Contact
          text="reachsagarshah@gmail.com"
          image1="/msgicon.png"
          image2="/copyicon.png"
        />
        <Contact
          text="+91 8980500565"
          image1="/callicon.png"
          image2="/copyicon.png"
        />
      </div>
      <ButtonIcons />
    </div>
  );
};
