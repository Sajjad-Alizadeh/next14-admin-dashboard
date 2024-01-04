import {Product, User} from "@/lib/models";
import {connectToDB} from "@/lib/utils";

export const ITEM_PER_PAGE = 2;

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")
    try {
        await connectToDB()
        const usersCount = await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {users, usersCount}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!");
    }
}

export const fetchUser = async (id) => {
    try {
        await connectToDB()
        const user = await User.findById(id);
        return {user}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user!");
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")
    try {
        await connectToDB()
        const productsCount = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {products, productsCount}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch products!");
    }
}

export const fetchProduct = async (id) => {
    try {
        await connectToDB()
        const product = await Product.findById(id)
        return {product}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch product!");
    }
}