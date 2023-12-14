export function Button(props) {
  return (
    <button className="text-[14px] text-[400] px-[20px] py-[4px] text-white bg-[#374151] rounded-[12px]">
      {props.text}
    </button>
  );
}
