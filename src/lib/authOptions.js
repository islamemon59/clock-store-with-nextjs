import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collectionObj, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
    // Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const userDataCollection = await dbConnect(
            collectionObj.userCollection
          );

          const user = await userDataCollection.findOne({
            email: credentials.email,
          });

          if (!user) throw new Error("No user found");

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) throw new Error("Invalid password");

          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),

    // Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/signIn",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      // Store Google users in DB
      if (account.provider === "google") {
        try {
          const db = await dbConnect(collectionObj.userCollection);
          const existingUser = await db.findOne({ email: user.email });

          if (!existingUser) {
            await db.insertOne({
              name: user.name,
              email: user.email,
              image: user.image,
              createdAt: new Date(),
              provider: account.provider,
            });
          }
          return true;
        } catch (err) {
          console.error("Error saving Google user:", err);
          return false;
        }
      }
      return true;
    },

    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};
