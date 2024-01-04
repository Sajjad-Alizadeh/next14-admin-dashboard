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

export const updateUser = async (formData) => {
    const {
        id,
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
    } = Object.fromEntries(formData)

    const updatedFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
    }

    Object.keys(updatedFields).forEach(key => (updatedFields[key] === "" || updatedFields[key] === undefined) && delete updatedFields[key])

    try {
        await User.findByIdAndUpdate(id, updatedFields)
    } catch (e) {
        console.log(e)
        throw new Error("Failed to update user!")
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
    const {
        id,
    } = Object.fromEntries(formData)

    try {
        await User.findByIdAndDelete(id)
    } catch (e) {
        console.log(e)
        throw new Error("Failed to delete user!")
    }

    revalidatePath("/dashboard/users");
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

export const updateProduct = async (formData) => {
    const {
        id,
        title,
        desc,
        price,
        stock,
        img,
        color,
        size,
    } = Object.fromEntries(formData)

    const updateFields = {
        title,
        desc,
        price,
        stock,
        img,
        color,
        size,
    }

    Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]);

    try {
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (e) {
        console.log(e)
        throw new Error("Failed to create product!")
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData) => {
    const {
        id,
    } = Object.fromEntries(formData)

    try {
        await Product.findByIdAndDelete(id);
    } catch (e) {
        console.log(e)
        throw new Error("Failed to delete product!")
    }

    revalidatePath("/dashboard/products");
}