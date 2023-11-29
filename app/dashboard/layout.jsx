import Sidebar from "@/app/ui/dashboard/Sidebar";
import Navbar from "@/app/ui/dashboard/Navbar";
import styles from "@/app/ui/dashboard/dashboard.module.css"

function DashboardLayout({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;