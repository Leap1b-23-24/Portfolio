import { Button } from "../components/buttons"
export function Contact() {
    return (
        <div className="pl-20 pt-10 pb-10 w-[1440px]  flex flex-col justify-items-center dark:bg-neutral-900 items-center gap-10">
            <div>
                <Button button="Get in touch" text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
            </div>
            <div className="flex flex-col gap-5 justify-items-center items-center">
                <div className="flex flex-row gap-10">
                    <img className="dark:invert" src="/msj.png"></img>
                    <p className=" text-2xl font-bold dark:text-[#D1D5DB]">reachsagarshah@gmail.com </p>
                    <img className="dark:invert" src="/box.png"></img>
                </div>

                <div className="flex flex-row gap-10">
                    <img className="dark:invert" src="/phone.png"></img>
                    <p className=" text-2xl font-bold dark:text-[#D1D5DB]">+91 8980500565 </p>
                    <img  className="dark:invert" src="/box.png"></img>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className=" text-[#52525b] dark:text-[#D1D5DB]"> You may also find me on these platforms!</p>
                <div className="flex flex-row gap-2 " >
                    <img className="dark:invert" src="/Icon Button.png" width={30} height={30}></img>
                    <img className="dark:invert" src="/icon.png" width={20} height={20}></img>
                    <img className="dark:invert" src="/aa.png" width={30} height={30}></img>
                </div>

            </div>

        </div>

    );
}