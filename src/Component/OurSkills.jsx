
import './OurSkills.css'

const OurSkills = () => {
    return (
        <>
            <div className="skills-container">
                <div className="row">
                    <div className="col-md-12 grident-color-sub-title">
                        <h1 className="Skills-heading">Our Skills</h1>
                    </div>
                </div>
                <div className="our-skills-inner-container">

                    <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                        <img src="./images/html.png" alt="" className="w-100 h-40" />
                        <h5>HTML</h5>

                    </div>


                    <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                        <img src="https://brandslogos.com/wp-content/uploads/images/large/css-logo.png" alt="" className="w-100 h-40" />
                        <h5>CSS</h5>

                    </div>
                    <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                        <img src="./assets/react.svg" className="w-100 h-40" alt="" />
                        <h5>React</h5>
                    </div>




                    <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                        <img src="./images/java-script.png" alt="" className="w-100 h-40" />
                        <h5>Java Srcipt</h5>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSkills
