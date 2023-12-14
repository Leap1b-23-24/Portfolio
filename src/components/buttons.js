export function Button(props) {
    return (
        <div className="flex flex-col gap-5 justify-items-center items-center">
            <div className="w-fit  pl-5 pr-5 h-[25px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] bg-[#e7e5e4]">
                {props.button}
            </div>
            <div className="w-fit  text-[#52525b] dark:text-[#D1D5DB]">
                {props.text}
            </div>
        </div>
    );
}

