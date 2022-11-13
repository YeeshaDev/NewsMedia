import { createContext, useContext, useState, } from "react";
 const AppContext = createContext();

 export const getStaticProps = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=316a577c19404b0da26da52720868967')
    const data = await res.json();

    return {
        props: {
            blog:data.articles,
        }
    }
}
 export const AppProvider = ({children,blog}) => {
     const [test,setTest] = useState('i hate this')
 
 return (
    <AppContext.Provider value={{blog,test}}>
      {children}
    </AppContext.Provider>
 )
 }

 export const useAppContext = () => {
    return useContext(AppContext)
 }