import { useState } from "react";

        const skills = [
    {name:"html" ,  category:"frontend"},
    {name:"CSS" ,  category:"frontend"},
    {name:"React js" ,  category:"frontend"},
    {name:"JavaScript" , category:"frontend"},
    {name:"tailwindcss" , category:"frontend"},
    {name:"Bootstrap" , category:"frontend"},
    

    {name:"PHP" ,  category:"Backend"},
    {name:"Laravel" ,  category:"Backend"},
    {name:"MYSQL" ,  category:"Backend"},
    {name:"Restful Api" ,  category:"Backend"},
    {name:"SQlite" ,  category:"Backend"},

    {name:"GIT/GitHub" ,  category:"tools"},
    {name:"Vs Code" ,  category:"tools"},
    {name:"Postman" ,  category:"tools"},
    {name:"Herd" ,  category:"tools"},
    
];

const categories = ["all","frontend" ,"Backend","tools"];


export const SkillsSection = ()=>
    {
       const [activecategory,setActivecategory] = useState("all");
       const filterskills = skills.filter(skills=> activecategory==="all" || skills.category === activecategory);


        return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/40">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>


                <div className=" flex  space-x-4  justify-center mt-6 mb-6">
                    {categories.map((category,key)=><button 
                    onClick={()=>setActivecategory(category)}
                    className={` px-5 py-2 ${activecategory===category? " bg-gray-500 rounded-full" : "bg-primary rounded-full hover:bg-primary/50 hover:animate-pulse"}`}
                    key={key}>
                        {category}
                    </button>)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
                    {filterskills.map((skills,key)=> <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover appear">
                            <div className="flex flex-col">
                            <span className=" font-semibold texl-lg">{skills.name}</span>

                            </div>

                     </div>)}
                </div>

            </div>

        </section>
        );
    }
