import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    const testUser = await prisma.user.create({
      data: {
        email: "test@example.com",
        password: await hash("password123", 10),
        name: "Test User",
        role: "user"
      },
    });

    console.log("Test user created:", testUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
