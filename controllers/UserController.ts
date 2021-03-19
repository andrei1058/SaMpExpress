import { server_accounts } from ".prisma/client";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function getOnlineUsers(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerGameID: {
                not: -1
            }
        }
    });
    return amount;
}

export async function getRegisteredUsers(): Promise<number> {
    return await prisma.server_accounts.count();
}

export async function getOfflineUsers(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerGameID: {
                equals: -1
            }
        }
    });
    return amount;
}

export async function getTotalAdmins(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerAdmin: {
                not: 0
            }
        }
    });
    return amount;
}

export async function getOnlineAdmins(): Promise<number> {
    return await prisma.server_accounts.count({
        where: {
            playerAdmin: {
                not: 0
            },
            playerGameID: {
                not: -1
            }
        }
    });
}

export async function getTotalHelpers(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerHelper: {
                not: 0
            }
        }
    });
    return amount;
}

export async function getOnlineHelpers(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerHelper: {
                not: 0
            },
            playerGameID: {
                not: 0
            }
        }
    });
    return amount;
}

export async function getTotalLeaders(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerFactionRank: {
                equals: 7
            }
        }
    });
    return amount;
}

export async function getOnlineLeaders(): Promise<number> {
    let amount = await prisma.server_accounts.count({
        where: {
            playerFactionRank: {
                equals: 7
            },
            playerGameID: {
                not: -1
            }
        }
    });
    return amount;
}

export async function getUser(username: string) {
    let account: server_accounts = await prisma.server_accounts.findFirst({
        where: {
            playerName: {
                equals: username
            }
        }
    });
    return account;
}
