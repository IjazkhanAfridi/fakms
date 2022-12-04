import { createContext, useState } from "react";


export const StateContext = createContext();

export const StateContextProvider = ({children})=>{

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('FAK ULD Location')

    return (

        <StateContext.Provider
            value={{
                open,
                setOpen,
                setTitle,
                title
            }}
        >

            {children}
        </StateContext.Provider>
    )
}