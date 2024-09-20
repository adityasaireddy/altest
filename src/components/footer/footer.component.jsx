import ".././footer/footer.style.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='fnav'>
      <div className='footer-main'>
        <div className='f1'>
          <div className='logof'>
            <img src={logo} alt='Logo' height='50px' width='100%' />
          </div>
          <div className='addressf'>
            <p>
              Flat no 376/B , <br /> Raghavendra colony Kondapur , <br />{" "}
              Hyderabad - 500084
            </p>
            <p>
              Call us at <strong>6309126121</strong>
            </p>
          </div>
        </div>
        <div className='f2'>
          <div className='headf'>Explore AlphaLhub</div>
          <div className='bodyf'>
            <Link>Mean Stack</Link>
            <Link>Java Full Stack</Link>
            <Link>Mern Stack</Link>
            <Link>Python Full Stack</Link>
            <Link>Software Testing</Link>
          </div>
        </div>
        <div className='f2'>
          <div className='headf'>Others</div>
          <div className='bodyf'>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Become a Mentor</Link>
            <Link>Hire From Us</Link>
          </div>
        </div>
        <div className='f3'>
          <div className='headf'>Socials</div>
          <div className='bodyf'>
            <Link>
              <FaFacebook /> Facebook
            </Link>
            <Link>
              <FaInstagram /> Instagram
            </Link>
            <Link>
              <FaLinkedin /> LinkedIn
            </Link>
            <Link>
              <AiFillYoutube /> Youtube
            </Link>
          </div>
        </div>
      </div>
      <div className='underaction'>Need Help? Talk to us at 6309126121 📞</div>
    </div>
  );
};

export default Footer;
