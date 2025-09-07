import { createContext, useState } from "react";

export const OptionContext = createContext()

export function OptionProvider({children}){
    const [option, setOption] =  useState('main')
    const [isMenuOpen, setIsMenuOpen] =  useState(false)

    return (
        <OptionContext.Provider value={{
            option,
            setOption,
            isMenuOpen,
            setIsMenuOpen
        }}>
            {children}
        </OptionContext.Provider>
    )

}