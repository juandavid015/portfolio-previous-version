import { OpenIcon } from "./iconComponents/IconComponents";



export default function Project ({repository, title, description, technologies, backgroundImage, previewImages, url, language}) {
    return (

        <div className=" max-w-[1000px] flex flex-col items-center ">
            <div className="bg-g2  max-h-[400px] overflow-hidden rounded-xl">
                <a href={url} target={'_blank'} rel="noreferrer" >
                    <img className="w-full opacity-80 hover:opacity-100 h-full object-cover" 
                    src={backgroundImage} alt="project" />
                </a>
                
            </div>

            <div className="bg-light-2 rounded-xl max-w-[700px] p-8 -translate-y-[70px]
            dark:bg-dark text-font-color-dark/70 dark:text-font-color-white/80 " >
                <h3 className="text-content-light sm:text-2xl text-xl font-bold font-['Poppins']
                dark:text-light-contrast-color">{title}</h3>
                <p className="line-clamp-3 hover:line-clamp-none">
                {language === 'en' ?
                    description.en:
                    description.es    
                }
                </p>
                <div>
               {
                 technologies?.map((tech, i) => {
                       return (
                            <div className="p-8  w-fit inline-flex flex-row gap-1 mr-2 mt-2 p-1 text-[12px] " key={i}>
                            <span>{tech}</span>
                                {/* <GenerateIcon iconName={tech} className='h-[20px] fill-white/70  '/> */}
                        </div>
                      )
                    })
                }
                </div>
                <div className=" flex flex-row flex-wrap items-center justify-start gap-2 mt-4">
                         <a className="bg-content-dark rounded-full  p-4
                        flex flex-row gap-2 fill-white hover:bg-white hover:fill-content-light
                        [&>*:nth-child(2)]:hover:block text-sm text-content-light"
                        href={url} target={'_blank'} rel="noreferrer" >
                           <OpenIcon className={' h-[20px] w-[20px]'}/>
                            <span className="hidden">Visit Project</span>
                        </a>
                        {/* <button className=" bg-content-dark rounded-full  p-4
                        flex flex-row gap-2 fill-white hover:bg-white hover:fill-content-light
                        [&>*:nth-child(2)]:hover:block text-sm text-content-light">
                           <SeeIcon className={' h-[20px] w-[20px]'}/>
                            <span className="hidden">See more</span>
                        </button> */}
                </div>
            </div>
        </div>
        
        
    )
} 