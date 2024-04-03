import './Services.css'
import { FaCode } from "react-icons/fa";
import { FaCropSimple } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-main-container">
      <h1>My <span style={{ color: "#00fff0" }}>Services</span></h1>
      <div className="services-inner-container">
        <div className="services-boxes">
          <FaCode style={{ fontSize: '35px', color: '#00FFFF' }} />
          <span>UI/UX Designer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ullam ratione cupiditate doloremque molestias, fuga eius similique accusantium ducimus repellat facilis quae quo eveniet accusamus nam sunt veritatis animi? Mollitia!</p>
          <button>Learn More</button>
        </div>
        <div className="services-boxes">
          <FaCropSimple style={{ fontSize: '35px', color: '#00FFFF' }} />
          <span>Web Design</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ullam ratione cupiditate doloremque molestias, fuga eius similique accusantium ducimus repellat facilis quae quo eveniet accusamus nam sunt veritatis animi? Mollitia!</p>
          <button>Learn More</button>
        </div>
        <div className="services-boxes">
          <FaApple style={{ fontSize: '35px', color: '#00FFFF' }} />
          <span>App Design</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ullam ratione cupiditate doloremque molestias, fuga eius similique accusantium ducimus repellat facilis quae quo eveniet accusamus nam sunt veritatis animi? Mollitia!</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Services
