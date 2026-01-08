import { Briefcase, Code, User } from "lucide-react"
import mustafa from '../assets/m2.jpg';
import resume from '../assets/myresume.pdf';

export const AboutSection = ()=>
    {
        return(
            <section id="about" className="py-24 px-4 relative space-y-10 ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-center">
                    About <span className="text-primary">Mustafa</span>
                </h2>
                <div className="flex justify-center py-2 ">
                    <img src={mustafa} className="w-50 h-50 rounded-full " />
                </div>

 <div className="grid grid-col-2 md:grid-cols-2 gap-12 text-center pt-6 ">
            <div className="space-y-6 ml-2">
                <h3 className="text-2xl font-semibold">Fullstack Web Developer</h3>
                <p className="text-foreground text-sm">
                    Full-Stack Web Developer with strong experience in building modern, responsive web applications. Skilled in HTML, CSS, PHP, Laravel, React.js, Tailwind CSS, RESTful APIs, and MySQL.
                </p>
                <p className="text-foreground text-sm">
                    I specialize in developing scalable backend systems with Laravel and creating dynamic, user-friendly interfaces using React.
                </p>
                <p className="text-foreground text-sm">
                Experienced in database design, API integration, authentication, and performance optimization. Passionate about clean code, problem-solving, and continuously learning new technologies to deliver high-quality web solutions.               
                </p >
                <div className="space-x-4">
                    <a href="#contact" className="cosmic">Contact me</a>
                    <a href={resume} download className="border border-indigo-500 rounded-full p-2 hover:bg-indigo-500 hover:text-white text-indigo-500  shadow hover:shadow-2xl duration-300 cursor-pointer" >Download my CV</a>
                </div>
                </div>
                
                {/*  */}

                <div className=" gap-6 flex flex-col">
                     <div className=" gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <Code/>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl text-card2">
                                Front end Development
                            </h3>
                            <p className="text-card2 dark:text-gray-400">Building responsive, modern interfaces with HTML, CSS, Tailwind, and React.</p>
                        </div>
                      </div>  

                      <div className="gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <User/>
                        </div>
                        <div className="text-left ">
                            <h3 className="text-xl text-card2">
                                Back end Development
                            </h3>
                            <p className="text-card2 dark:text-gray-400">Developing secure, scalable systems using PHP, Laravel, APIs, and databases.</p>
                        </div>
                      </div>  

                      <div className="gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <Briefcase/>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl text-card2">
                                Project Management
                            </h3>
                            <p className="text-card2 dark:text-gray-400">
                                Planning, organizing, and delivering projects efficiently from start to finish.
                            </p>
                        </div>
                      </div>  
                    </div>

</div>

             
            </div>

         
        </section>
        )
        
    }
