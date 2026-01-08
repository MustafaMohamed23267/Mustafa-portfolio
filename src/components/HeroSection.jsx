import {  ArrowDown01Icon, ArrowDownCircleIcon } from "lucide-react"

export const HeroSection = ()=>{
    return(
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 ">
        <div className=" max-w-4xl mx-auto z-10 text-center space-y-4 ">
            <h1 className="text-4xl md:text-6xl font-bold">
                <span className=" fade-in">Hi, I am </span>
                <span className="fill-gray-500 drop-shadow-xl/50 drop-shadow-gray-500/50 text-primary fade-in" >Mustafa</span>
                <span className="text-linear-to-r/hsl from-red-500 to-blue-600"> Mohamed</span>
            </h1>
            <p className="text-md md:text-xl text-gray-500 moving-animation">I am a Full-Stack Web Developer with expertise in HTML, CSS, and React.js on the front end, and PHP Laravel REST APIs with MySQL on the back end. I focus on building efficient, scalable, and user-friendly web applications</p>
            <div className="moving-animation-delay-2 pt-4 ">
                <a href="#projects" className="cosmic ">
                    View My Projects
                </a>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 animate-bounce flex flex-col max-sm:left-55 ">
        <span className="text-indigo-700 text-lg ">Scroll</span>
        <ArrowDownCircleIcon className=" ml-2 text-indigo-700"/>
        </div>
    </section>
)}