export const Button = (props) => {
  return (
    <div>
      <p className="border-[1px] max-w-fit px-[20px] py-[4px] rounded-[10px] bg-[#E5E7EB] dark:bg-[#374151]">
        {props.text}
      </p>
    </div>
  );
};
