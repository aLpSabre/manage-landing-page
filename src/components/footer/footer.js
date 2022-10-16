
import logo from "../../images/logo1.svg";
import "../../scss/components/_footer.scss"
import { FaFacebookSquare, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
const Footer = () => {


  return (
    <footer >
      <div className="content">
        <div className="manage">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logos">

            <ul>

              <li><a href=""><FaFacebookSquare size = '45'  /></a></li>
              <li><a href=""><FaYoutube  size = '45'  /></a></li>
              <li><a href=""><FaTwitter  size = '45'  /></a></li>
              <li><a href=""><FaPinterest  size = '45' /></a></li>
              <li><a href=""><FaInstagram  size = '45' /></a></li>
            </ul>
          </div>
        </div>
        <div className="links">
          <div className="link-left">
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#"> About Us</a></li>
      
            </ul>
          
          </div>
          <div className="link-right">
            <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Privacy Policy</a></li>
          
      
            </ul>
            </div>
          </div>
          <div className="form">
          <form action="get">
            <div>
              <label htmlFor="email"></label>
            <input type="email" name="email" id="email" />
            <p>  Updates in your inbox…</p>
            </div>
            <button type="submit" className="go">Go</button>
          </form>
          <p className="copy"> Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
          
      
      </div>

    </footer>
  )
}

export default Footer