
import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('es');

  const switchTheme = () => {
    if(theme === 'light') {
      localStorage.theme = 'dark';
      localStorage.setItem('theme', 'dark')
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      localStorage.setItem('theme', 'light')
      setTheme('light');
    }
  }
  const switchLanguage = () => {
    if(language === 'en') {
      localStorage.language = 'es';
      localStorage.setItem('language', 'es')
      setLanguage('es');
    } else {
      localStorage.language = 'en';
      localStorage.setItem('language', 'en')
      setLanguage('en');
    }
  }


  useEffect(() => {
    const loaderElement = document.querySelector(".container");
    if (loaderElement) {
      setTimeout(() => {
        loaderElement.remove();
        setIsLoading(false);
      }, 2000)
    }
  })
  useEffect(()=> {

    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }

  },[theme]);

  useEffect(()=> {
    if (localStorage.language === 'es' || (!('language' in localStorage))) {
      setLanguage('es');
    } else {
      setLanguage('en')
    }
  },[language])
  
  return (
    !isLoading &&
    <div className={`bg-white leading-7 App text-font-color-dark/80 text-justify text-sm sm:text-base font-medium font-['Nunito']
     dark:bg-dark dark:text-font-color-white/80`}>
      <Header switchTheme={switchTheme} theme={theme} language={language} switchLanguage={switchLanguage}/>
      <About language={language} />
      <Skills language={language} />
      <Work language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div> 
  )
}

export default App;
