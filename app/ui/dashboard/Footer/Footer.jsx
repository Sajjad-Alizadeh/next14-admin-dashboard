import styles from "@/app/ui/dashboard/Footer/footer.module.css";

export const Footer = () => {
  return(
      <div className={styles.container}>
          <div className={styles.logo}>Dev studio</div>
          <div className={styles.text}>&copy;All rights reserved.</div>
      </div>
  )
}