import styles from "@/app/ui/dashboard/RightBar/rightBar.module.css";
import Image from "next/image";
import {MdPlayCircleFilled} from "react-icons/md";

export const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src={"/astronaut.png"} alt={""} fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version on the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>
                        Takes 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloribus eligendi eveniet fugiat tempora velit.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>


            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🚀 Coming soon</span>
                    <h3 className={styles.title}>
                        New server actions are available, partial pre-rendering is coming up!
                    </h3>
                    <span className={styles.subtitle}>
                        Boost your productivity
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloribus eligendi eveniet fugiat tempora velit.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}