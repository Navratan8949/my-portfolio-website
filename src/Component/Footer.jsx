import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    const currentyear = new Date().getFullYear()
    return (
        <div className=" footer">
            <div className="container">
                {/* <div className="footer-row-1">
                    <div className="about-company">
                        <h2>Heading</h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                        <p>
                            <a href="#"><FaFacebook /></a>

                            <a href="#"><FaLinkedin/></a>
                        </p>
                    </div>
                    <div className=" links">
                        <h4 className="">Links</h4>
                        <ul className="">
                            <li>- <a href="#">Lorem ipsum</a></li>
                            <li>- <a href="#">Nam mauris velit</a></li>
                            <li>- <a href="#">Etiam vitae mauris</a></li>
                            <li>- <a href="#">Fusce scelerisque</a></li>
                            <li>- <a href="#">Sed faucibus</a></li>
                            <li>- <a href="#">Mauris efficitur nulla</a></li>
                        </ul>
                    </div>
                    <div className=" location">
                        <h4 className="">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p className=""><i className="fa fa-phone " />(541) 754-3010</p>
                        <p><i className="fa fa-envelope-o " />info@hsdf.com</p>
                    </div>
                </div> */}
                <div className="footer-row-2 ">
                    <div className=" copyright">
                        <p className><small className=""> Developed with love by Navratan Prajapat @{currentyear} </small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
