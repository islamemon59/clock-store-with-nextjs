import CredentialsProvider from "next-auth/providers/credentials";
import { collectionObj, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
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

          // Find user by email
          const user = await userDataCollection.findOne({
            email: credentials.email,
          });
          if (!user) throw new Error("No user found");

          // Check password
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) throw new Error("Invalid password");

          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
