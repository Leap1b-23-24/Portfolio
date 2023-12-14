import { Button } from "./buttons";
export const PageHeader = (props) => {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-[20px]">
      <Button text={props.head} />
      <p
        className="w-fit h-fit text-[20px] text-[#4B5563] leading-7 text-center 
            sm:max-w-[576px] dark:text-[#D1D5DB] "
      >
        {props.desc}
      </p>
    </div>
  );
};
