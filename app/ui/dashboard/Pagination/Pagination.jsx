"use client";

import styles from "./pagination.module.css"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ITEM_PER_PAGE} from "@/lib/data";

export const Pagination = ({totalLength}) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()
    const params = new URLSearchParams(searchParams)

    const page = searchParams.get("page") || 1
    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < totalLength
    function handlePagination(type) {
        type === "PREV" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`)
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handlePagination("PREV")}>Previous
            </button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handlePagination("NEXT")}>Next</button>
        </div>
    )
}