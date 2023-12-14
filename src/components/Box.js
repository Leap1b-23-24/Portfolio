export function Box(props) {
    return (
        <div className=" pb-10 w-[900px]  h-fit dark:bg-[#1F2937] shadow-xl flex flex-row rounded-xl ">
            <div className="pt-10 pl-10">
                <img src="/logo-upwork.png" width={100}></img>
            </div>
            <div className="w-[400px] dark:text-[#D1D5DB]">
                <div className=" text-xl font-bold pt-10 pl-20 ">
                    <p>{props.title}</p>
                </div >

                <ul className="dark:text-[#D1D5DB] pt-3 pl-20 list-disc  gap-8 text-[#71717a]">
                    {props.exps.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="text-[#52525b] pt-10 pl-20 dark:text-[#D1D5DB]">
                <p>{props.date}</p>
            </div>
        </div>
    )
}
