"use client";

import Link from "next/link";
import styles from "./linkItem.module.css";
import {usePathname} from "next/navigation";

function LinkItem({item}) {
    const pathname = usePathname()

    return(
        <Link className={`${styles.container} ${pathname === item.path && styles.active}`} href={item.path}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default LinkItem;