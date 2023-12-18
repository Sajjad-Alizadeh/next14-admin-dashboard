import styles from "./pagination.module.css"

export const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}