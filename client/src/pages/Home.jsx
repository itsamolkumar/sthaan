import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Popular from "../components/Popular";


export default function Home(){
  return(
    <main>
      {/* <Navbar /> */}
      <Intro/>
      <Popular/>
      {/* <Footer/> */}
    </main>
  )
}