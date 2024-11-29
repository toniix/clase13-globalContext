import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {

    const { language,  handleChangeLA } = useContext(LanguageContext);
    // console.log(useContext(LanguageContext));
    
    // const { text,  handleChangeLA } = useContext(LanguageContext);
    return (
        <div className="navbar">
            {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
            <p> {language.text.home} </p>
            <p> {language.text.current} </p>
            <button onClick={handleChangeLA}> {language.text.button} </button>
          
        </div>
    )
}

export default Navbar