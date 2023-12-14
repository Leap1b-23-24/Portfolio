"use client"
import { Hero, Header, About, Skills, Experience, Work, Contact ,Footer} from '@/components';
import { useState ,useContext, createContext} from 'react';

export default function Home() {

    const [isDark , setIsDark] = useState(false);

    const DarkContext = createContext();
    
    const clickHandler = ()=>{
        setIsDark((prev)=>!prev)
    }
    console.log(isDark);
    return (
        <div className={isDark && "dark"}>
            <DarkContext.Providerrovider value ={{isDark,setIsDark}}>
        <div className=" w-screen h-fit bg-gray-50 flex flex-col justify-items-center items-center  ">
            <Header function={clickHandler}/>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Contact />
            <Footer/>
        </div>
        </DarkContext.Providerrovider>
        </div>
    );
};