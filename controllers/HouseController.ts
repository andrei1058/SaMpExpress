const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function getOwnedHousesCount(): Promise<number> {
    return await prisma.server_houses.count({
        where: {
            houseOwnedBy: {
                not: 0
            }
        }
    });
}

export async function getTotalHousesCount() : Promise<number> {
    return await prisma.server_houses.count();
}