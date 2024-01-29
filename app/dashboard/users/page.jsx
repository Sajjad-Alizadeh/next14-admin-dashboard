import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/Search";
import Pagination from "@/app/ui/dashboard/Pagination";
import {fetchUsers} from "@/lib/data";
import {deleteUser} from "@/lib/actions";

async function UsersPage({searchParams}) {
    const q = searchParams?.q || "";
    let page = searchParams?.page || 1;
    if (page <= 0) page = 1;
    const {users, usersCount} = await fetchUsers(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for a user..."}/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.img || "/noavatar.png"} alt={user.img} width={40} height={40}
                                           className={styles.userImage}/>
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "Active" : "Passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" value={user.id} name="id"/>
                                        <input type="hidden" value={user.username} name="username"/>
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>

                        </tr>
                    ))
                }

                </tbody>
            </table>
            <Pagination totalLength={usersCount}/>
        </div>
    )
}

export default UsersPage;