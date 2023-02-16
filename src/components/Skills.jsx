import GenerateIcon from "./iconComponents/GenerateIcon"
import { techs } from "../db";


export default function Skills ({language}) {
    const allTechs = Object.values(techs).flat();
    return (
        <div className="bg-light-2 -mt-[70px] bg-content-transparent text-color-font-dark sm:p-82px p-64px
        dark:bg-dark-2" id="skills">
            <h2 className="sm:text-3xl text-2xl font-['Poppins']  font-bold mb-4  ">
                {language === 'en' ? "My ": "Mis "}  
                <span className="dark:text-light-contrast-color text-content-light">
                {language === 'en' ? "Skills": "Habilidades"}  
                </span>
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-6 ">
                {
                    allTechs?.map((tech, i) => {
                        return(
                            <div className="flex flex-col items-center justify-center" key={i}>
                                <div className="dark:bg-dark bg-white sm:p-6 p-4 rounded-full">
                                    <GenerateIcon iconName={tech} 
                                    className='sm:h-[40px] dark:fill-secondary-dark-1 fill-content-dark h-[30px]
                                    '/>
                                </div>
                                <span >{tech}</span>
                            </div>
                        )
                    })
                }
            </div>
    
        </div>
    )
}