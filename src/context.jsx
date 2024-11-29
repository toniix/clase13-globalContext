import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = { // exportamos los idiomas
    english: {
        id: "EN",
        text: EN
    },
    portugues: {
        id: "PTBR",
        text: PTBR
    },
    spanish: {
        id: "ES",
        text: ES
    },
    
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = createContext(languages.english);

export default LanguageContext;     // exportamos el contexto