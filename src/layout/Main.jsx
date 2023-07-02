import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import SocialLinks from "../components/SocialLinks/SocialLinks";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>

            <SocialLinks></SocialLinks>
        </div>
    );
};

export default Main;