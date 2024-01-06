import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings,
    MdOutlineSupervisedUserCircle, MdPeople,
    MdShoppingBag,
    MdWork
} from "react-icons/md";
import Image from "next/image";
import MenuLink from "@/app/ui/dashboard/Sidebar/MenuLink";
import styles from "./sidebar.module.css";
import {auth, signOut} from "@/app/auth";

const items = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>
            },

            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdOutlineSupervisedUserCircle/>
            },

            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney/>
            },

        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork/>
            },

            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics/>
            },

            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople/>
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings/>
            },

            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter/>
            },
        ]
    },
]

export async function Sidebar() {
    const {user} = await auth()
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src={"/noavatar.png"} alt={"user"} width={50} height={50}/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {
                    items.map((category) => (
                        <li key={category.title}>
                            <span className={styles.category}>{category.title}</span>
                            {category.list.map((menuLink) => (
                                <MenuLink key={menuLink.title} item={menuLink}/>
                            ))}
                        </li>
                    ))
                }
            </ul>
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button className={styles.logout}><MdLogout/>Logout</button>
            </form>
        </div>
    )
}