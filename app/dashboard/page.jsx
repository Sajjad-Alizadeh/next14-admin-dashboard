import styles from "@/app/ui/dashboard/dashboard.module.css"
import RightBar from "@/app/ui/dashboard/RightBar";
import Card from "@/app/ui/dashboard/Card";
import Transactions from "@/app/ui/dashboard/Transactions";
import Chart from "@/app/ui/dashboard/Chart";

function DashboardPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <RightBar/>
            </div>
        </div>
    )
}

export default DashboardPage;