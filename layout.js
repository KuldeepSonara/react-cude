import { Outlet } from "react-router-dom"
import Footer from "./footer";
import Hader from "./hader"

function Layout() {
    return(
        <>
        <Hader/>
        <Outlet/>
        <Footer/>
        </>
    ); 
}

export default Layout;