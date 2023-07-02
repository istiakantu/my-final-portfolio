import { Link } from "react-scroll";
import logo from '../../assets/logo/ERFAN DESIGN ISTIAK LOGO-01.png'


const Navbar = () => {


    const navbarItems = [
        { id: "home", text: "home" },
        { id: "about", text: "about" },
        { id: "projects", text: "projects" },
        { id: "experience", text: "experience" },
        { id: "contact", text: "contact" },
    ];

    const navbarLinks = navbarItems.map((item) => (
        <li key={item.id} className="hover:scale-110 duration-200 capitalize">
            <Link to={item.id} smooth duration={500}>
                {item.text}
            </Link>
        </li>))

    return (
        <div className="navbar bg-black fixed md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbarLinks
                        }
                    </ul>
                </div>
                <Link to="home" smooth duration={500}>
                    <img src={logo} alt="" className='h-20' />
                    <h2 className='font-bold text-2xl text-center'>Istiak</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        navbarLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a href='resume.pdf' download className="btn">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;