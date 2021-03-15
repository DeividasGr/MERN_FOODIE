import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import moment from 'moment';
import { FooterContainer, IconContainer, FooterText } from './styles';
import './index.css';

function Footer() {
  return (
    <FooterContainer>
      <IconContainer>
        <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
          <FaFacebook className="footer__icons footer__icons--fb" />
        </a>
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
          <FaInstagram className="footer__icons footer__icons--insta" />
        </a>
        <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
          <FaTwitter className="footer__icons footer__icons--tw" />
        </a>
        <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
          <FaLinkedin className="footer__icons footer__icons--li" />
        </a>
      </IconContainer>
      <FooterText>Foodie &copy; {moment().year()}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
