import OtherWork from "./OtherWork";
import Project from "./Project";

import { mainProjects, otherProjects } from "../db";

export default function Work ({language}) {
    return (
        <>
      
        <div className="dark:bg-dark dark:text-font-color-white bg-content-light sm:p-82px p-32px
         flex flex-col gap-8 items-center text-white/70" id="work">
           <div className="self-start">
                <h2 className="self-start sm:text-3xl text-2xl font-['Poppins'] mb-2
                ">
                    {language === 'en' ? "Some ": "Algunos "}  
                    <span className="font-bold text-white dark:text-light-contrast-color">
                    {language === 'en' ? "Projects ": "Proyectos "}  
                    </span>
                
                </h2>
                <p className="self-start">
                {language === 'en' ? 
                `Here are some of the projects that i’ve worked on as full stack web applications`:
                "Estos son algunos de los proyectos en los cuales he estado trabajando como aplicaciones full stack "}  
                   
                </p>
            </div>
            {
                mainProjects.map((project, i) => {
                    return (
                        <Project 
                        title={project.title} 
                        description={project.description} 
                        backgroundImage={project.mainBackgroundImage}
                        technologies={project.technologies}
                        previewImages={project.otherPreviewImages}
                        url={project.url}
                        repository={project.repository}
                        language={language}
                        key={i}/>
                    )
                })
            }
        </div>
        <div className="dark:bg-dark-2 bg-light-2  sm:p-82px p-32px 
        grid grid-cols-1 sm:grid-cols-layoutOherProjects gap-4">
           
            <h2 className="dark:text-font-color-white sm:text-3xl text-2xl font-['Poppins']  font-bold 
            col-span-full ">
                <span className="dark:text-light-contrast-color text-content-light">
                {language === 'en' ? "Other ": "Otras "}  
                   
                </span>
                {language === 'en' ? "stuff ": "cosas "}  
            </h2>
            <p className="col-span-full text-font-color-dark
            dark:text-font-color-white">
                {language === 'en' ? 
                "Other random stuff speacially oriented to front-end ": 
                "Otras cosas orientadas especialmente a front-end"
                }  
                
            </p>
            {
                otherProjects.map((oProject , i)=> {
                    return (
                        <OtherWork 
                        title={oProject.title} 
                        resume= {oProject.resume}
                        description={oProject.description} 
                        backgroundImage={oProject.mainBackgroundImage}
                        technologies={oProject.technologies}
                        previewImages={oProject.otherPreviewImages}
                        url={oProject.url}
                        repository={oProject.repository}
                        language={language}
                        key={i}/>
                    )
                })
            }
        </div>
        </>
        
    )
}