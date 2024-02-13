import { createContext } from "react";

interface ChildrenType  {
    children: React.ReactNode

}


export const CourseContext = createContext({})

export const CourseContextProvider: React.FC<ChildrenType> = ({children}) => {

    const value = {}
    return(
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    )
}