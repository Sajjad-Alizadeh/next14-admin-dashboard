import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

function SingleProductPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill/>
                </div>
                John Doe
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text"
                           placeholder="Product title"
                           name="title"
                           required
                    />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="general">Choose a Category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>

                    <label>Price</label>
                    <input type="number"
                           placeholder="$10k"
                           name="price"
                    />

                    <label>Stock</label>
                    <input type="number"
                           placeholder="stock"
                           name="stock"
                    />

                    <label>Color</label>
                    <input type="text"
                           placeholder="red"
                           name="color"
                    />

                    <label>Size</label>
                    <input type="text"
                           placeholder="medium"
                           name="size"
                    />

                    <label>Description</label>
                    <textarea name="desc"
                              id="desc"
                              rows="16"
                              placeholder="Description"
                    ></textarea>
                    <button>Update</button>
                </form>

            </div>
        </div>
    )
}

export default SingleProductPage;