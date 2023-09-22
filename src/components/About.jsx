
import ProfileImage from '../assets/images/Profilepic.png'
export default function About ({language}) {
    return (
        <div className="sm:mx-82px mx-16px -translate-y-[70px] flex flex-col lg:flex-row
        bg-white dark:bg-dark" id='about'>
            <div className="sm:p-82px p-32px">
                <h2 className=" sm:text-3xl text-2xl font-['Poppins'] font-bold mb-2 ">
                    <span className='dark:text-light-contrast-color text-content-light font-bold'>
                        {language === 'en' ? "About " : "Sobre "}
                    </span>
                        {language === 'en' ? "me": "mi"}
                </h2>
                <p className="mb-2">
                    {/* {language === 'en' ? "I'm a": "Soy un"}
                    <span className="dark:text-light-contrast-color text-content-light font-bold">
                        {language === 'en' ? " web developer ": " desarrollador web "}    
                    </span>  */}
                    {language === 'es' ? 
                    `Resido en Colombia y comencé mi camino como programador a partir de 2022 de
                    forma autodidacta. A partir de ahí, mi curiosidad y pasión por esta area han ido
                    creciendo cada día. He estado trabajando con tecnologías tanto `: 
                    `I'm based in Colombia and started my road as a programmer since 2022 as an autodidact,
                    From there, my curiosity and passion for this career have been growing each day.
                    Currently i’ve been working with `}
                    
                    
                    <span className="dark:text-light-contrast-color text-content-light font-bold">
                         front end 
                    </span>
                    {language === 'en' ? " and ": " como "}  
                    <span className="dark:text-light-contrast-color text-content-light font-bold">
                        back end
                    </span>
                    {language === 'en' ? " technologies building somethings for the. ": " desarrollando algunas aplicaciones para la  "}  
                    <span className="dark:text-light-contrast-color text-content-light font-bold">
                        web  
                    </span> 
                </p >
                <p className="mb-2">
                    {language === 'en' ? 
                    ` Also, i'm a person who: likes continuous learning, dedicated, oriented to details and with good analytical ability.`:
                     " También, soy una persona a la que: le gusta el aprendizaje continuo, dedicada, orientada a los detalles y con buena capacidad analítica"}
                   
                </p>
                <p>
                    {language === 'en' ? 
                    `Right now and for the future: i want to learn/practice more about`: 
                    "Ahora mismo y a futro: quiero aprender/practicar más sobre"}  
                    
                    <span className="dark:text-light-contrast-color text-content-light font-bold">
                        {language === 'en' ? " design ": " diseño "}  
                    </span>
                    {language === 'en' ? 
                    `  as an extra for my web skills improvement.`:
                    " como un extra para mejorar mis habilidades en el desarrollo web "}  
                   
                   
                </p>
            </div>
            <div className="dark:bg-dark bg-content-dark sm:min-w-[300px] w-[calc(100%-8rem)]
            lg:self-start self-center lg:justify-self-center mb-64px">
                {/* <DeveloperIcon className={'sm:h-[300px] h-[200px] m-auto'}/> */}
                <img className="h-full w-full object-contain max-w-[250px] m-auto" src={ProfileImage} alt="profile"  />
            </div>
        </div>
    )
}