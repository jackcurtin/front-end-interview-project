import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";


export default function Footer () {
    return (
        <div className="footer-container">
            <span className="social-links">
                <FontAwesomeIcon icon={faLink} className="footer-icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} className="footer-icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className="footer-icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook} className="footer-icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon"></FontAwesomeIcon>
            </span>
            <span className="fine-print-links">
                <p>Terms of Service</p>
                <p>Privacy</p>
            </span>
        </div>
    )
}
