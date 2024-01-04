import NextAuth from "next-auth"
import {authConfig} from "@/app/authConfig";
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDB} from "@/lib/utils";
import {User} from "@/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        connectToDB()
        const user = await User.findOne({username: credentials.username})
        if (!user || !user.isAdmin) throw new Error("Wrong credentials!")

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.password)

        if (!isCorrectPassword) throw new Error("Wrong credentials!")
        return user
    } catch (err) {
        console.log(err)
        throw new Error("Failed to login!")
    }
}

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) { // get data from user and pass it to the token
            if (user) {
                token.username = user.username
                token.img = user.img
            }
            return token
        },
        async session({session, token}) { // get data from token and pass it to the session
            if (token) {
                session.user.username = token.username
                session.user.img = token.img
            }
            return session
        }
    }
})