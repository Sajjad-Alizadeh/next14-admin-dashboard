import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/Search";
import Pagination from "@/app/ui/dashboard/Pagination";
import {fetchProducts} from "@/lib/data";
import {deleteProduct} from "@/lib/actions";

async function ProductsPage({searchParams}) {
    const q = searchParams?.q || "";
    let page = searchParams?.page || 1;
    if (page <= 0) page = 1;

    const {products, productsCount} = await fetchProducts(q, page)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for a product..."}/>
                <Link href={`/dashboard/products/add`}>
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div className={styles.product}>
                                    <Image src={product.img || "/noproduct.jpg"} alt={product.title} width={40}
                                           height={40}
                                           className={styles.productImage}/>
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>{product.createdAt?.toString().slice(4, 16)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/products/${product.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <form action={deleteProduct}>
                                        <input type="hidden" value={product.id} name="id"/>
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>

                        </tr>
                    ))
                }

                </tbody>
            </table>
            <Pagination totalLength={productsCount}/>
        </div>
    )
}

export default ProductsPage;