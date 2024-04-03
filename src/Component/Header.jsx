
import './Header.css'

const Header = () => {

    const handledownloadCV = () => {
        const Cvurl = 'Navratan Prajapat CV.pdf_20240321_073815_0000.pdf'
        window.open(Cvurl, '_blank')
    }
    return (
        <div className="header-container">
            <div className="header-inner-container">
                <div className="header-left-div">
                    <div className="hello">
                        Hello
                    </div>
                    <div className="I-am">
                        I am <span style={{ color: '#00fff0' }}>
                            Navratan
                        </span>
                    </div>
                    <div className="developer">
                        A <span> Web Developer
                        </span>
                    </div>
                    <div className="about-me-paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi soluta eius voluptates nulla nesciunt quis. Amet, sed? Rem, possimus quisquam.</p>
                    </div>

                    <div className="header-buttons">
                        <button onClick={handledownloadCV}>Download CV</button>
                        <button>Hire Me</button>
                    </div>
                </div>
                <div className="header-right-div">
                    <div className="round-img-div">
                        <img src="https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
