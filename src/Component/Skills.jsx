import './Skills.css'
const Skills = () => {
    return (
        <>
            <div className="skill-main-contaier">

                <h1>My Skill</h1>
                <div className="skill">

                    <li><h3>html</h3>
                        <span className='bar'><span className='html'></span>
                            <span className="percentage">90%</span>
                        </span>
                    </li>

                    <li><h3>css</h3>
                        <span className='bar'><span className='css'></span>
                            <span className="percentage">75%</span>
                        </span>
                    </li>

                    <li><h3>javascript</h3>
                        <span className='bar'><span className='javascript'></span>
                            <span className="percentage">40%</span>
                        </span>
                    </li>

                    <li><h3>react</h3>
                        <span className='bar'><span className='react'></span>
                            <span className="percentage">70%</span>
                        </span>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Skills
