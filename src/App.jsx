import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {

    setLanguage( (prevLanguage) => {
      if (prevLanguage.id === "EN") {
        return languages.portugues;
      } else if (prevLanguage.id === "PTBR") {
        return languages.spanish;
      } else if (prevLanguage.id === "ES") {
        return languages.english;
      }
    })

  }
  return (
    <LanguageContext.Provider value={{language, handleChangeLA }}>
      <Navbar />
      <Body />
    </LanguageContext.Provider>

    // <div className="App">
    //   <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
    //     <Navbar />
    //     <Body />
    //   </>
    // </div>
  );
}

export default App