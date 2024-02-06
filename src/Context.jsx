import { createContext, useState } from 'react';

export const appContext = createContext(null)

export const ContextProvider = ({ children }) => {
    const styles =
    {
        headingLetterSpacing: -3,
        colors: {
            orange: "#FF5800",
            blue: "#007FFF",
            lightblue: "#67AEFA",
            white: "#EEEEEE",
            black: "#3A3B3A",
        }
    }

    return (
        <appContext.Provider value={{ styles }}>
            {children}
        </appContext.Provider>
    )
}


export default ContextProvider;