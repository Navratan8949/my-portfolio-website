// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
// import { IoReorderThreeOutline } from "react-icons/io5";
import ResponsiveDrawer from './ResponsiveDrawer';

const Navbar = () => {
    // const [active, setActive] = useState(false);

    // const navToggle = () => {
    //     setActive(!active);
    //     active === "nav_menu" ?
    //         setActive('nav_menu nav_active') :
    //         setActive("nav_menu")

    // };

    const navigate = useNavigate()

    return (
        <div className="navbar-container">
            <div className="navbar-inner-container">
                <div className="navbar-left-div">Portfolio</div>
                <div className="navbar-right-div">
                    <ul
                    // className={active ? 'nav_menu nav_active' : 'nav_menu'}
                    >
                        <li className="nav_item" onClick={() => navigate('./Header')}>Home</li>
                        <li className="nav_item" onClick={() => navigate('./About')}>About</li>
                        <li className="nav_item" onClick={()=>navigate('./Skills')}>Skills</li>
                        {/* <li className="nav_item" onClick={()=>navigate('./Header')}>Projects</li> */}
                        <li className="nav_item" onClick={()=>navigate('./Contactus')}>Contact</li>
                        <li className="nav_item" onClick={()=>navigate('./Services')}>Service</li>
                    </ul>
                </div>
                <div className="three-line-responsive" >
                    {/* <IoReorderThreeOutline className='nav_toggle' fontSize={'23px'} /> */}
                    <ResponsiveDrawer />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
