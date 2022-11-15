
import logo from "../../images/logo1.svg";
import "../../scss/components/_footer.scss"
import { FaFacebookSquare, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { useState } from "react";
const Footer = () => {

const [submit, setsubmit] = useState(false);
const [email,setEmail]=useState("");
const handleSubmit=(e)=>{
e.preventDefault();
setsubmit(true);
setTimeout(() =>setsubmit(false),5000);
setEmail("");
}
  return (
    <footer >
      <div className="content">
        <div className="manage">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logos">

            <ul>

              <li><a href="https://github.com/aLpSabre"><FaFacebookSquare size = '45'  /></a></li>
              <li><a href="https://github.com/aLpSabre"><FaYoutube  size = '45'  /></a></li>
              <li><a href="https://github.com/aLpSabre"><FaTwitter  size = '45'  /></a></li>
              <li><a href="https://github.com/aLpSabre"><FaPinterest  size = '45' /></a></li>
              <li><a href="https://github.com/aLpSabre"><FaInstagram  size = '45' /></a></li>
            </ul>
          </div>
        </div>
        <div className="links">
          <div className="link-left">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Pricing</a></li>
            <li><a href="#home">Products</a></li>
            <li><a href="#home"> About Us</a></li>
      
            </ul>
          
          </div>
          <div className="link-right">
            <ul>
            <li><a href="#home">Careers</a></li>
            <li><a href="#home">Community</a></li>
            <li><a href="#home">Privacy Policy</a></li>
          
      
            </ul>
            </div>
          </div>
          <div className="form">
          <form action="get" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" style={{display:"none"}}>Email</label>
            <input type="email" name="email" id="email" value={email} placeholder="Enter an Email for updates..." onChange={(e)=>setEmail(e.target.value)} required />
          {submit && <p>  Updates in your inbox…</p> }  
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