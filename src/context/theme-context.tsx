import { createContext} from "react";

interface ChildrenType{
    children: React.ReactNode
}
interface ThemeType {
    toggle_darkmode: () => void
}
export const Theme_Context  = createContext<ThemeType>({
    toggle_darkmode: () => {}
})


export const Theme_context_provider = ({children}: ChildrenType) => {
    // const [darkMode,setDarkMode] = useState(false)

    const toggle_darkmode = () => {
        const elem = document.querySelector('#elem')
        elem?.classList.toggle('dark')
    }

    const value = {toggle_darkmode}
    return (
        <Theme_Context.Provider value={value}>
            {children}
        </Theme_Context.Provider>
    )
}