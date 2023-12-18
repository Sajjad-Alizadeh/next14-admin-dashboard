import styles from "@/app/ui/dashboard/Card/card.module.css";
import {MdSupervisedUserCircle} from "react-icons/md";

export const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span className={styles.details}> <span className={styles.positive}>12%</span> more than previous week</span>
            </div>
        </div>
    )
}