"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import {usePathname} from "next/navigation";

export function MenuLink({item}) {
    const pathname = usePathname()

    return(
        <Link className={`${styles.container} ${pathname === item.path && styles.active}`} href={item.path}>
            {item.icon}
            {item.title}
        </Link>
    )
}