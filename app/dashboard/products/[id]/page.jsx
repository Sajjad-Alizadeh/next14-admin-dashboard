import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import {fetchProduct} from "@/lib/data";
import {updateProduct} from "@/lib/actions";

async function SingleProductPage({params}) {
    const {id} = params
    const {product} = await fetchProduct(id)
    const {title, desc, price, stock, img, color, size} = product;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={img || "/noavatar.png"} alt="" fill/>
                </div>
                {title}
            </div>

            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" value={id} name={"id"}/>
                    <label>Title</label>
                    <input type="text"
                           placeholder="Product title"
                           name="title"
                           defaultValue={title}
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
                           defaultValue={price}
                           name="price"
                    />

                    <label>Stock</label>
                    <input type="number"
                           placeholder="stock"
                           defaultValue={stock}
                           name="stock"
                    />

                    <label>Color</label>
                    <input type="text"
                           placeholder="red"
                           defaultValue={color}
                           name="color"
                    />

                    <label>Size</label>
                    <input type="text"
                           placeholder="medium"
                           defaultValue={size}
                           name="size"
                    />

                    <label>Description</label>
                    <textarea name="desc"
                              id="desc"
                              defaultValue={desc}
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