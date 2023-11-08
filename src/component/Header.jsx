import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <div>
            <div>

            <NavLink to="/"><img src={logo} alt=""  className="img" /></NavLink>
                
            </div>
            
           <div>
            
           <ul className="nav-bar a:hover" >

            <li className="navbar a "><NavLink to="/">Home</NavLink></li>
            <li className="navbar a "><NavLink to="/project">Project</NavLink></li>
            <li className="navbar a "><NavLink to="/blog">Blog</NavLink></li>
            <li className="navbar a "><NavLink to="/contact">contact</NavLink></li>
            <li className="navbar a "><NavLink to="/service">Service</NavLink></li>
            <li className="navbar a "><NavLink to="/about">About</NavLink></li>
            <input type="search" placeholder="Search...." height="20px" className="input-search"></input>
           
            
           </ul>
           </div>
        </div>
    );
};

export default Header;