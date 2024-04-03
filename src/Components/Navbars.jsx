import { useState } from 'react';
import './Navbar.css'; // Import CSS file if you have styles
import { BiSearch, BiHomeAlt, BiBarChartAlt2 } from 'react-icons/bi';
import { LiaLessThanSolid } from "react-icons/lia";


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    // const [darkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    return (
        <>
            <nav className='sidebar'>
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src="logo.png" alt="Logo" /> */}
                        </span>
                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>
                    {/* <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i> */}
                    <LiaLessThanSolid fontSize={'10px'} onClick={toggleSidebar} className='toggle' />
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box" style={{ display: 'flex', gap: '16px' }}>
                            <BiSearch className='icon' style={{ fontSize: '20px' }} />
                            <input type="text" placeholder="Search..." />
                        </li>
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="" style={{ display: 'flex', gap: '16px' }}>
                                    <BiHomeAlt className='icon' style={{ fontSize: '20px' }} />
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#" style={{ display: 'flex', gap: '16px' }}>
                                    <BiBarChartAlt2 className='icon' style={{ fontSize: '20px' }} />
                                    <span className="text nav-text">Revenue</span>
                                </a>
                            </li>
                            {/* Add more menu items here */}
                        </ul>
                    </div>
                    {/* <div className="bottom-content">
                        <li className="">
                            <a href="" style={{ display: 'flex', gap: '16px' }}>
                                <BiLogOut className='icon' style={{ fontSize: '20px' }} />
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                    </div> */}
                </div>
            </nav>
            <section className="home">
                <div className="navbar-container">
                    <div className="navbar-amount">
                        Total Amount :
                        <div className="navbar-amount-1">1000</div>
                        Refferel Amount :
                        <div className="navbar-amount-2">200</div>
                    </div>
                    <div className="sign-in">
                        <button >
                            Login Now
                        </button>
                    </div>
                </div>
            </section>
            {/* Add full-width item to dashboard navbar */}

        </>
    );
};

export default Navbar;
