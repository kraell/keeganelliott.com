
import styles from "./Intro.module.css";
import Socials from "../Socials/Socials";
import ProfilePicture from "../ProfilePicture/ProfilePicture";


export default function Intro() {
    return (
        <>
        <div className={styles.container + " border-b"}>
            <div className={styles.innerContainer}>
                <div className={styles.column1}>
                    <div className={styles.title}>Keegan Elliott</div>
                    <div className={styles.description}>
                        <div>
                            Software engineer just trying to learn cool stuff.
                            <br />
                            Neuroscience enthusiast.
                            <br />
                            Passionate about wet mozzarella.
                            <br />
                            Welcome to my digital garden.&#129716;
                            <br />
                            <br />
                            [It's bit sparse right now, but the bits are being sown.]
                        </div>
                    </div>
                    <div className={styles.socialLinks}>
                        <Socials />
                    </div>
                </div>
                <div className={styles.profilePicture}>
                    <ProfilePicture />
                </div>
            </div>
        </div>
        </>
    )
}