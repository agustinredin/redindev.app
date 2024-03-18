import { createContext, useState } from 'react';

export const appContext = createContext(null)

export const ContextProvider = ({ children }) => {
    const styles =
    {
        headingLetterSpacing: -3,
        containerWidth: {
            base: '90vw', 
            md: '80vw', 
            /* lg: '70vw' */
        },
        colors: {
            orange: "#FF5800",
            blue: "#0011FF",
            lightblue: "#67AEFA",
            white: "white",
            black: "#3A3B3A",
        },
        titleAnimationVariants: {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5
                }
            },
            exit: {
                opacity: 0,
                y: 20,
                transition: {
                    duration: 0.5
                }
            },
          }
    }

    return (
        <appContext.Provider value={{ styles }}>
            {children}
        </appContext.Provider>
    )
}


export default ContextProvider;