import { useState } from "react"
import { FullStackIcon, GithubIcon, LanguageIcon, LinkedinIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from "./iconComponents/IconComponents";
import cv from '../assets/pdf/Juan_Garzón_Web_Developer_.pdf'
export default function Header ({switchTheme, theme, language, switchLanguage}) {

    const [expandMenu, setExpandMenue] = useState(false)

    const expandNavigationBar = () => {
        setExpandMenue(!expandMenu);
    }
    
    return (
        <header className="flex flex-col sm:min-h-[80vh] min-h-screen bg-content-light px-64px text-left relative text-white
        dark:bg-content-dark pb-64px">
            <div className="block sm:relative flex flex-col items-end z-40 fixed top-4 right-0 w-fit sm:w-full min-w-[200px]">
                <div className="cursor-pointer sm:hidden mb-2 pr-4 w-fit"
                onClick={expandNavigationBar}>
                    {
                        !expandMenu ? <MenuIcon  className={'h-6 fill-content-dark dark:fill-white'}/> 
                        :
                        <XIcon className={'h-6 fill-content-dark dark:fill-white'} />
                    }
                </div>
                <nav className={`transition-all animate-fade-in ${!expandMenu && 'hidden'} h-fit
                text-content-dark bg-white font-bold sm:h-fit w-full sm:w-full sm:p-0 p-4 sm:block sm:bg-transparent
                dark:sm:bg-transparent dark:bg-dark`}>
                    <ul className="flex h-full flex-col sm:flex-row sm:gap-2 sm:justify-around justify-start items-center gap-8 sm:border-b border-white/30 py-16px 
                    dark:border-font-color-white/30 ">
                        <li className="animate-fade-in  transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <a href="#about">
                                {language === 'es' ? 'Sobre mi' : 'About'}
                            </a>
                        </li>
                        <li className="transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <a href="#work">
                                {language === 'es' ? 'Mi trabajo' : 'Work'}
                            </a>
                        </li>
                        <li className="transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <a href="#skills">
                                {language === 'es' ? 'Habilidades' : 'Skills'}
                            </a>
                        </li>
                        <li className="transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <a href="#contact">
                                {language === 'es' ? 'Contacto' : 'Contact'}
                            </a>
                        </li>
                        <li className="transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <button onClick={switchTheme}>
                                {
                                    theme !== 'light' ?
                                     <SunIcon className={'fill-light h-[30px]'}/>
                                    :<MoonIcon className={'sm:fill-light h-[30px] fill-dark'}/>
                                }
                            </button>
                        </li>
                        <li className="transition-all inline-block hover:-translate-y-0.5 sm:hover:text-white sm:text-white/70 
                        text-content-dark/70 hover:text-content-dark  fill-white/50 text-font-color-white/50 cursor-pointer
                        dark:text-font-color-white/80 dark:hover:text-font-color-white">
                            <button onClick={switchLanguage}>
                                <LanguageIcon className={'h-[30px] dark:fill-light sm:fill-light fill-dark'}/>    
                                {language === 'en' ? 'EN' : 'ES'}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div className="my-auto flex flex-row justify-around items-center sm:flex-nowrap flex-wrap">
                <div className="my-auto gap-16">
                    <h1 className="md:text-4xl text-3xl font-bold text font-['Poppins']">
                        <span>{language === 'es' ? "Hola! Me llamo Juan" : "Hey! I'm Juan"},</span><br/>
                        <span className="dark:text-light-contrast-color text-secondary-dark-1">Full Stack Web Developer</span>
                    </h1>
                    <a href={cv} target={'_blank'} rel='noopener noreferrer' 
                    className=" p-4 mr-2 mt-16px inline-block 
                    bg-right-bottom hover:bg-left-bottom bg-gradient-to-r from-secondary-dark-1 to-content-light bg-[length:200%_100%] transition-all ease-out duration-1000" >
                        Download CV
                    </a>
                    <a className="py-2 transition-all inline-block hover:-translate-y-0.5 hover:fill-white hover:text-white fill-white/50 text-font-color-white/50 cursor-pointer" href="https://github.com/juandavid015" target={"_blank"} rel="noreferrer">
                        <GithubIcon className="inline-block h-5 w-fit px-2" />
                        Github   
                    </a>
                    <a className="py-2 transition-all inline-block hover:-translate-y-0.5 hover:fill-white hover:text-white fill-white/50 text-font-color-white/50 cursor-pointer" href="https://www.linkedin.com/in/juan-dgr/" target={"_blank"} rel="noreferrer">
                        <LinkedinIcon className="inline-block h-5 w-fit px-2" />
                        LinkedIn
                    </a>
                </div>
                <div>
                    <FullStackIcon className='md:h-96 h-64' />
                </div>
            </div>
            
        </header>
    )
}