import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
    return (
        <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 mb-1">
                    <a href="https://www.linkedin.com/in/istiak-ahmed-a35b89278/" className="flex justify-around w-full text-white" target='_blank' rel="noreferrer">
                        <>LinkdIn <FaLinkedin size={30}></FaLinkedin></>
                    </a>
                </li>

                <li className="flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 mb-1">
                    <a href="https://github.com/istiakantu"  className="flex justify-around w-full text-white" target='_blank' rel="noreferrer">
                        <>GitHub <FaGithub size={30}></FaGithub></>
                    </a>
                </li>

                <li className="flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 mb-1">
                    <a href="resume.pdf" download className="flex justify-around w-full text-white">
                        <>Resume <BsPersonLinesFill size={30}></BsPersonLinesFill></>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;