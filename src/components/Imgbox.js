

export function Imgbox(props) {
    return (
        <div className={`w-[1152px] w-full h-fit  rounded-xl justify-center`}>
            <div className={`flex ${props.reverse ? " flex-row-reverse" : "flex-row"}  shadow-xl gap-10 w-[1152px] dark:bg-[#1F2937] justify-items-center items-center`}>
                <div className="  dark:bg-[#374151] bg-[#e7e5e4] w-[576px] h-[450px] flex justify-center items-center ">
                    <img src="/Picture.png" width={480} height={384}></img>
                </div>

                <div className="w-[576px] flex flex-col gap-5  pl-5">
                    <div className="text-xl dark:text-[#D1D5DB] font-bold">
                        <p>{props.title}</p>
                    </div>
                    <div className=" text-[#71717a]  dark:text-[#D1D5DB] w-[400px]">
                        <p >{props.text}</p>
                    </div>
                    <div className=" dark:text-[#D1D5DB]  flex flex-wrap gap-5 ">
                        {props.exps.map((item, index) => {
                            return (
                                <div key={index} className=" dark:bg-[#374151] dark:text-[#D1D5DB] pl-3 pr-3 h-[25px] flex flex-row-reverse rounded-xl bg-[#e4e4e7]">
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <img src="/share.png"></img>
                    </div>
                </div>
            </div>
        </div >
    );
}