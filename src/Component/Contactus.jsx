import './Contactus.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contactus = () => {
    return (
        <>
            <div className="contact-us-container">
                <div className="contact-left-container">
                    <h1 className='contact-us-heading'>
                        Contact <span style={{ color: 'aqua' }}>Me</span>
                    </h1>
                    <h3>Let's work together</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolores fuga culpa dolorem quo est. Aut, nulla, repudiandae perferendis iure error debitis iste quia quisquam magni veniam aliquid accusamus laboriosam. Dolorum a nam sequi ipsum alias, reiciendis, sed facere neque nemo quod iusto sint ad architecto, suscipit quas in? Facilis?</p>
                    <p> <FaGreaterThan color='aqua' /> Contact@gmail.com</p>
                    <p><FaPhoneAlt color='aqua' /> 0123456789</p>

                    <div className="social-media-icons">
                        <a href="http://" target="_blank" rel="noopener noreferrer" >
                            <FaFacebook style={{ color: 'white' }} />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'white' }} /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white' }} /></a>
                        {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white' }} /></a> */}

                    </div>
                </div>
                <div className="contact-right-container">
                    <form action className="contact-form">
                        <h2 className='contact-form-heading'>Send your Feedback</h2>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Enter your message" cols={20} rows={5} defaultValue={""} />
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </>

    )
}

export default Contactus
