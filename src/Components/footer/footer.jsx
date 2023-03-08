import{FaFacebook} from 'react-icons/fa'
import{FiInstagram}from 'react-icons/fi'
import './footer.css'

const Footer = () => {
    return ( 
        <footer id='footer'>
            <a href="#" className="footer__logo">Hari Sankar</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/harisankar.valath?mibextid=ZbWKwL" target="_blank"><FaFacebook/></a>
                <a href="https://instagram.com/hari_sankar_valath?igshid=ZDdkNTZiNTM=" target="_blank"><FiInstagram/></a>
               
            </div>
            <div className="footer__copyright">
                <small>&copy; Hari Sankar. All rights reserved</small>
            </div>

        </footer>
     );
}
 
export default Footer;