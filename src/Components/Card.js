import { Button } from "../components/Button";
import { EditIcon } from "../components/assets/EditIcon";
export const Card = () => {
  return (
    <div className="md:flex block p-0 m-0 border-box justify-center items-center w-full rounded-xl drop-shadow-md bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] dark:from-[#374151] dark:to-[#374151]">
      <div
        className={`md:w-1/2  flex p-12 border-r-[#F3F4F6]  bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] dark:bg-gradient-to-b dark:from-[#374151] dark:to-[#374151] `}
      >
        <img src="/Picture.png" />
      </div>
      <div className="flex flex-col md:w-1/2 bg-white gap-6  p-12  dark:bg-[#1F2937]">
        <h3 className="text-gray-900 font-bold dark:text-[#F9FAFB]">Fiskil</h3>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2 ">
          <Button text="React" />
          <Button text="Nest.js" />
          <Button text="Typescript" />
          <Button text="Nest.js" />
          <Button text="PostgreSQL" />
          <Button text="Tailwindcss" />
          <Button text="Figma" />
          <Button text="Cypress" />
          <Button text="Storybook" />
          <Button text="Git" />
        </div>
        <EditIcon />
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="md:flex p-0 m-0 border-box justify-center items-center w-full rounded-xl drop-shadow-md bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] dark:from-[#374151] dark:to-[#374151]">
      <div
        className={`md:w-1/2  p-12 border-r-[#F3F4F6] order-last from-[#F9FAFB] to-[#F3F4F6]`}
      >
        <img src="/Picture.png" />
      </div>
      <div className="flex flex-col md:w-1/2 bg-white gap-6 p-12 dark:bg-[#1F2937]">
        <h3 className="text-gray-900 font-bold dark:text-[#F9FAFB]">Fiskil</h3>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2 ">
          <Button text="React" />
          <Button text="Nest.js" />
          <Button text="Typescript" />
          <Button text="Nest.js" />
          <Button text="PostgreSQL" />
          <Button text="Tailwindcss" />
          <Button text="Figma" />
          <Button text="Cypress" />
          <Button text="Storybook" />
          <Button text="Git" />
        </div>
        <div className="flex items-center justify-start w-9 h-9">
          <img
            className="flex text-left justify-start w-6 h-6 object-contain order-last"
            src="ibtn.png"
          />
        </div>
      </div>
    </div>
  );
};
