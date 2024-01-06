import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import {fetchUser} from "@/lib/data";
import {updateUser} from "@/lib/actions";

async function SingleUserPage({params}) {
    const {id} = params;
    const {user} = await fetchUser(id)
    const {img, username, email, password, phone, address, isAdmin, isActive} = user

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={img || "/noavatar.png"} alt="" fill/>
                </div>
                {username}
            </div>

            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" value={id} name={"id"}/>
                    <label>Username</label>
                    <input type="text" name="username" defaultValue={username} placeholder="John Doe"/>
                    <label>Email</label>
                    <input type="email" name="email" defaultValue={email} placeholder="JohnDoe@gmail.com"/>
                    <label>Password</label>
                    <input type="password" name="password" defaultValue={password} placeholder="****"/>
                    <label>Phone</label>
                    <input type="phone" name="phone" defaultValue={phone} placeholder="123456789"/>
                    <label>Address</label>
                    <textarea name="address" defaultValue={address} placeholder="New York"/>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="true" selected={isAdmin}>Yes</option>
                        <option value="false" selected={!isAdmin}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value="true" selected={isActive}>Yes</option>
                        <option value="false" selected={!isActive}>No</option>
                    </select>
                    <button>Update</button>
                </form>

            </div>
        </div>
    )
}

export default SingleUserPage;