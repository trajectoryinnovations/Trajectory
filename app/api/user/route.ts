// app/api/user/route.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        email: "super@trajectoryinnovations.com",
        password: hashedPassword,
        name: "Admin",
        role: "admin", // Adjust role as needed
      },
    });

    // Return the created user as a response
    return new Response(JSON.stringify({ message: "User created", user }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
