
import { useParams } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import NotFound from "../pages/notfound"
import Admin from "../pages/admin";


//create an array of all pages

const pages = [
    {
        url:"signup",
        Component:SignUp
    },
    {
        url:"login",
        Component:Login
    },
    {
        url:"admin",
        Component:Admin
    }
    

]

const PagesRenderer = () => {
    const { page } = useParams();
    
    console.log(`The params is ${page}`)
    if (page) {
        const FoundPage = pages.find(renderPage => renderPage.url === `${page}`)
        if (FoundPage) {
            const { Component } = FoundPage
        
            return <Component/>
            
        }
        else {
            return <NotFound/>
        }

    }
    else {
        return (
            <div> </div>

        )
    }
    
    
}
export default PagesRenderer;