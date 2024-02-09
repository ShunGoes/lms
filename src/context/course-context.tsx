import { createContext } from "react";
import { CourseData } from "../course-data";

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