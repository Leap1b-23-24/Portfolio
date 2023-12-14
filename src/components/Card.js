import { Button } from "./Button";
export const Card = () => {
  return (
    <div className="flex sm:flex-row flex-col">
      <img className="p-[48px]" src="Picture.png"></img>
      <div className="p-[48px] flex flex-col gap-[24px]">
        <h2 className="text-[20px] font-bold">Fiskil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-[8px]">
          <Button text="JavaScript" />
          <Button text="JavaScript" />
          <Button text="JavaScript" />
          <Button text="JavaScript" />
        </div>
        <img className="w-[24px] h-[24px] " src="Icon Button.png"></img>
      </div>
    </div>
  );
};
export const Card1 = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse ">
      <div className="p-[48px] flex flex-col gap-[24px]">
        <h2 className="text-[20px] font-bold">Fiskil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-[8px]">
          <Button text="Java" />
          <Button text="Java" />
          <Button text="Java" />
          <Button text="Java" />
        </div>
        <img className="w-[24px] h-[24px] " src="Icon Button.png"></img>
      </div>
      <img className="p-[48px]" src="Picture.png"></img>
    </div>
  );
};
