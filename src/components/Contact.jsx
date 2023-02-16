// import { useState } from "react";

import { GithubIcon, LinkedinIcon } from "./iconComponents/IconComponents";


export default function Contact ({language}) {


    return (
        <div className="sm:p-64px p-32px flex flex-col gap-8 items-center" id="contact">
            <h2 className="sm:text-3xl text-2xl font-['Poppins'] font-bold  text-center">
                {language === 'en' ? "Get in ": ""}  
                <span className="dark:text-light-contrast-color text-content-light">
                {language === 'en' ? "contact ": "Contacta "}  
                 </span>
                {language === 'en' ? "with me ": "conmigo "}  
            </h2> 

            <h3 className="text-center col-span-full sm:text-2xl text-xl font-['Poppins'] font-bold
             dark:text-light-contrast-color text-content-light">
                    {language === 'en' ? "Send me a message ": "Envíame un mensaje"}  
            </h3>

            <form target="_blank" action="https://formsubmit.co/juandavidgr1002@gmail.com" method="POST"
            className="grid grid grid-cols-1 sm:grid-cols-2 text-left gap-8 uit">
                
                <label htmlFor="name" className="dark:text-light-contrast-color/70 text-content-light">Your name
                    <input placeholder="Enter your name" name="name" id="name" 
                    className="text-font-color-dark bg-transparent block border-b-2 border-b-content-light outline-none min-w-[250px]
                    dark:text-font-color-white"/>
                </label>
                <label htmlFor="email" className="dark:text-light-contrast-color/70 text-content-light">Your Email
                    <input placeholder="Enter your Email" name="email" id="email" required
                    className="text-font-color-dark bg-transparent block border-b-2 border-content-light outline-none min-w-[250px]
                    dark:text-font-color-white" type={'email'}/>
                </label>
                <label htmlFor="message" className="dark:text-light-contrast-color/70 col-span-full text-content-light">Your message
                    <textarea placeholder="Say hi or enter your message..." name="message" id="message"
                    className="text-font-color-dark bg-transparent font-inherit block border-b-2 border-b-content-light outline-none resize-none min-w-[250px]
                    w-full overflow-y-auto dark:text-font-color-white" rows={'3'} required/>
                </label>
                <button type="submit" className="col-span-full justify-self-center w-fit py-4 px-8
                 border border-content-light bg-[length:800%_100%] transition-all ease-out duration-1000
                 bg-g1 bg-right-bottom hover:bg-left-bottom hover:text-white">
                    Send
                </button>
            </form>
            
            <h3 className="text-content-light sm:text-2xl text-xl font-['Poppins'] font-bold
            dark:text-light-contrast-color">
                {language === 'en' ? "Or, find me in ": "O encuentrame en "}  
            </h3>
            <div className="flex flex-row items-center justify-center gap-4 ">
          
                <a href="https://www.linkedin.com/in/juan-dgr/" target={'_blank'} rel="noreferrer"
                className="hover:opacity-80 bg-content-light flex-1 w-full p-4 text-white fill-white flex flex-row gap-2 items-center">
                    <LinkedinIcon className={'h-[20px] w-[20px]'} />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/juandavid015" target={'_blank'} rel="noreferrer" 
                className="hover:opacity-80 bg-content-light flex-1 w-full p-4 text-white fill-white flex flex-row gap-2 items-center">
                    <GithubIcon className={'h-[20px] w-[20px]'} />
                    <span>Github</span>
                </a>
            </div>
        </div>
    )
}