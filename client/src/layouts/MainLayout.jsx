import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout=()=>{
    return (
        <>
        <nav>
            <Navbar/>
        </nav>
        <main>
            {/* saare child pages yaha par render honge */}
            <Outlet/> 
        </main>
        <footer>
            <Footer/>
        </footer>   
        </>
    )
}
export default MainLayout;