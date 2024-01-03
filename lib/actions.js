"use server";

import {Product, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    const {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
    } = Object.fromEntries(formData)

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    try {
        const newUser = new User({
            username,
            email,
            password: hashedPass,
            phone,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
    } catch (e) {
        console.log(e)
        throw new Error("Failed to create user!")
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users")
}

export const addProduct = async (formData) => {
    const {
        title,
        desc,
        price,
        stock,
        img,
        color,
        size,
    } = Object.fromEntries(formData)

    try {
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            img,
            color,
            size,
        });
        await newProduct.save();
    } catch (e) {
        console.log(e)
        throw new Error("Failed to create user!")
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}