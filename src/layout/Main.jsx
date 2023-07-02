import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import SocialLinks from "../components/SocialLinks/SocialLinks";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Experience></Experience>
            <Contact></Contact>

            <SocialLinks></SocialLinks>
            <Footer></Footer>
        </div>
    );
};

export default Main;