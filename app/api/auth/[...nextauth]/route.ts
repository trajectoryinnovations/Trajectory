import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          throw new Error("No user found");
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name
        };
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  }
});

export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcrypt";
//
// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Hardcoded email and password
//         const hardcodedEmail = "akhilrajr482@gmail.com";
//         const hardcodedPassword = "Akhil@123"; // In a real app, hash and compare passwords
//
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing credentials");
//         }
//
//         // Check if the email matches the hardcoded email
//         if (credentials.email !== hardcodedEmail) {
//           throw new Error("No user found");
//         }
//
//         // Check if the password matches the hardcoded password
//         if (credentials.password !== hardcodedPassword) {
//           throw new Error("Invalid password");
//         }
//
//         // Return user object if credentials match
//         return {
//           id: "1", // You can hardcode user ID here
//           email: hardcodedEmail,
//           name: "Admin", // You can hardcode the user name here
//         };
//       }
//     })
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt"
//   }
// });
//
// export { handler as GET, handler as POST };
