import GenerateIcon from './iconComponents/GenerateIcon'
import { GithubIcon, OpenIcon } from "./iconComponents/IconComponents"


export default function OtherWork ({repository, title, description, technologies, backgroundImage, previewImages, resume, url, language}) {
    return (
        <div className="bg-white text-font-color-dark flex flex-row justify-between p-4
        dark:bg-dark dark:text-font-color-white">
        
            <div className="p-2">
                <h3 className="sm:text-lg text-md font-bold ">{title}</h3>
                <p className="opacity-70">
                {language === 'en' ?
                    resume.en:
                    resume.es
                }
                </p>
                <div className="flex flex-row gap-2 items-center mt-2">
                {
                technologies.map((tech, i) => {
                    return (
                        <GenerateIcon iconName={tech} className={'h-[20px] fill-content-dark/70 dark:fill-font-color-white/70'} key={i}/>
                    )
                })
                }
                </div>
                 
            </div>
        
            <div className="flex flex-col h-full gap-4 p-2 fill-white color-white ">
                <a href={url} target={'_blank'} rel="noreferrer" className='hover:scale-110' >
                    <OpenIcon height={'20px'} color='rgba(24, 19, 47, 0.5)'/>
                </a>
                <a href={repository} target={'_blank'} rel="noreferrer" className='hover:scale-110'>
                    <GithubIcon height={'20px'} color='rgba(24, 19, 47, 0.5)' />
                </a>
            </div>
        </div>
    )
}