export default function Footer ({language}) {
    return (
        <footer className="p-64px text-center font-bold ">
            {language === 'en' ? "Built and designed by ": "Desarrollado y diseñado por "}  
            <span className="dark:text-light-contrast-color text-content-light"> @juandgr</span> 
            
            <ul className="mt-4 flex flex-wrap justify-center sm:gap-24 gap-4 border-t dark:border-secondary-light-1/30 border-content-light/30 py-16px text-font-color-white/50">
                <li className="dark:text-light-contrast-color/70 dark:hover:text-light-contrast-color  transition-all inline-block hover:-translate-y-0.5 hover:text-content-light text-content-light/50 cursor-pointer">
                    <a href="#about">
                    {language === 'en' ? "Aboute": "Acerca de"}  
                       
                    </a>
                 </li>
                <li className="dark:text-light-contrast-color/70 dark:hover:text-light-contrast-color transition-all inline-block hover:-translate-y-0.5 hover:text-content-light text-content-light/50 cursor-pointer">
                    <a href="#work">
                    {language === 'en' ? "Work": "Proyectos "}  
                    </a>
                </li>
                <li className="dark:text-light-contrast-color/70 dark:hover:text-light-contrast-color  transition-al
                l inline-block hover:-translate-y-0.5 hover:text-content-light text-content-light/50 cursor-pointer">
                    <a href="#skills">
                    {language === 'en' ? "Skills": "Habilidades"}  
                    </a>
                </li>
                <li className="dark:text-light-contrast-color/70 dark:hover:text-light-contrast-color transition-all inline-block hover:-translate-y-0.5 hover:text-content-light text-content-light/50 cursor-pointer">
                    <a href="#contact">
                    {language === 'en' ? "Contact ": "Contacto"}     
                    </a>
                </li>
            </ul>
            {language === 'en' ? "Aplication made using ": "Aplicación hecha utilizando "}  
            <span className="dark:text-light-contrast-color text-content-light"> React </span> 
            {language === 'en' ? "and ": "y "}    
            <span className="dark:text-light-contrast-color text-content-light"> Tailwind</span>
        </footer>
    )
}