import {useDark} from "@/app/page"

export const Card = (props) => {
    const {dark, setDark} = useDark();
    return (
        <div className="sm:w-[896px] rounded-[12px] shadow-xl flex flex-col px-8 gap-4 sm:gap-12 py-8 bg-white sm:flex-row borde justify-between">
            <div className="sm:w-[206px]">
                <img src="/logo-upwork.png" />
            </div>

            <div className="flex flex-col-reverse gap-4 sm:flex-row ">
                <div className="w-[398px]">
                    <h1 className="text-gray-900 text-xl font-semibold" >{props.title}</h1>
                    <ul>
                        {props.exps.map((item, index) => {
                            return <li className="list-disc text-base font-normal text-gray-600" key={index}>{item}</li>
                        })}
                    </ul>
                </div>

                <div className="text-base font-normal text-gray-600">
                    <p>
                        {props.date}
                    </p>
                </div>
            </div>
        </div>

    )
}