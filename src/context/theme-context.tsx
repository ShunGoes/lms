import { createContext, useState} from "react";

interface ChildrenType{
    children: React.ReactNode
}
interface ThemeType {
    toggle_darkmode: () => void,
    darkMode: boolean
}
export const Theme_Context  = createContext<ThemeType>({
    toggle_darkmode: () => {}, darkMode: false
})


export const Theme_context_provider = ({children}: ChildrenType) => {
    const [darkMode,setDarkMode] = useState(false)

    const toggle_darkmode = () => {
        const elem = document.querySelector('#elem')
        elem?.classList.toggle('dark')
        setDarkMode((prev:boolean) => !prev)
    }

    const value = {toggle_darkmode,darkMode}
    return (
        <Theme_Context.Provider value={value}>
            {children}
        </Theme_Context.Provider>
    )
}