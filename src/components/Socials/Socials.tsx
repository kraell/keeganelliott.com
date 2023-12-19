import {
    faGithub,
    // faGithubAlt,
    faLinkedin,
    // faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { 
    // faFile, 
    faFileAlt, 
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Socials.module.css";


export default function Socials() {
    return (
        <>
        <div className={styles.container}>
            <a className={styles.link} href="https://www.linkedin.com/in/keeganelliott/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
            </a>
            <a className={styles.link} href="https://github.com/kraell" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                {/* <FontAwesomeIcon icon={faGithubAlt} /> */}
            </a>
            <a className={styles.link} href="/src/public/resume.pdf" target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faFile} /> */}
                <FontAwesomeIcon icon={faFileAlt} />
            </a>
        </div>
        </>
    )
}
