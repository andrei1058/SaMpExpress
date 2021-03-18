import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getOwnedCarsCount() : Promise<number> {
    return await prisma.server_pcars.count();
}

export async function getModelsCount() : Promise<number> {
    return await prisma.server_vehicles.count();
}