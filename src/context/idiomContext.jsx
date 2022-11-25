import { createContext, useState } from "react";

export const IdiomContext = createContext();

export const useIdiom = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a IdiomaContextProvider"
    );
  }
  return context;
};

export const IdiomContextProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("Español");
  const handleIdioma = () => {
    if (idioma == "Español") {
      setIdioma("Quechua");
    } else {
      setIdioma("Español");
    }
    console.log(idioma);
  };
  return (
    <IdiomContext.Provider value={{ handleIdioma, idioma }}>
      {children}
    </IdiomContext.Provider>
  );
};
