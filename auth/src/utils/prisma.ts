import {PrismaClient} from "@prisma/client";

export const prisma = new PrismaClient();

async function connectDB() {
  try {
    console.log(process.env.DATABASE_URL);
    const connection = await prisma.$connect();
    console.log(connection);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export default connectDB;
