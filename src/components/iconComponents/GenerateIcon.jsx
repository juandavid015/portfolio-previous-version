import { CssIcon, ExpressIcon, FigmaIcon, GithubIcon, HtmlIcon, JavaScriptIcon, NodeIcon, OpenIcon, PostgreSQLIcon, ReactIcon, ReduxIcon, SequelizeIcon, TailwindIcon, TypescriptIcon } from "./IconComponents";

export default function GenerateIcon ({iconName, height, color, className}) {
    let firstWordOfIcon = iconName.split(' ')[0].toLowerCase();

    if (firstWordOfIcon.includes('react')) return (<ReactIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('javascript')) return (<JavaScriptIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('node')) return (<NodeIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('postgresql')) return (<PostgreSQLIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('express')) return (<ExpressIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('redux')) return (<ReduxIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('html')) return (<HtmlIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('css')) return (<CssIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('typescript')) return (<TypescriptIcon color={color} height={height} className={className}/>)
    else if (firstWordOfIcon.includes('tailwind')) return (<TailwindIcon color={color} height={height} className={className}/>) 
    else if (firstWordOfIcon.includes('figma')) return (<FigmaIcon color={color} height={height} className={className}/>)  
    else if (firstWordOfIcon.includes('github')) return (<GithubIcon color={color} height={height} className={className}/>)  
    else if (firstWordOfIcon.includes('open')) return (<OpenIcon color={color} height={height} className={className}/>)  
    else if (firstWordOfIcon.includes('sequelize')) return (<SequelizeIcon color={color} height={height} className={className}/>)  
    else return
}