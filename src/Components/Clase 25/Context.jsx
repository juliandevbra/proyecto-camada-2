import { createContext, useContext, useState } from "react";

const GlobalStates = createContext()

const Context = ({children}) => {

    const [salario, setSalario] = useState(100000)
    const [pokePlantel, setPokePlantel] = useState([])

    return (
        <GlobalStates.Provider
            value={{
                salario, 
                setSalario,
                pokePlantel,
                setPokePlantel
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export const useGlobalStates = () => useContext(GlobalStates)

export default Context; 
