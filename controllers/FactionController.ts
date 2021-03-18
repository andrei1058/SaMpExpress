import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getLatestFactionActions(){
    return await prisma.server_faction_logs.findMany({
        take: 10,
        orderBy:{
            f_logID: 'desc'
        },
        include: {
            server_accounts_server_accountsToserver_faction_logs_f_logByID: {
                select: {
                    playerID: true,
                    playerGameID: true,
                    playerName: true,
                    playerAdmin: true,
                    playerHelper: true,
                    playerLevel: true,
                    playerRespect: true,
                    playerGender: true, 
                    playerSkin: true,
                    playerPremium: true, 
                    playerVip: true,
                    playerFaction: true, 
                    playerFactionRank: true,
                    playerClan: true,
                    playerClanRank: true,
                    playerStatus: true,
                    playerJob: true,
                    playerColor: true,
                    playerColorCategory: true, 
                }
            },
            server_accounts_server_accountsToserver_faction_logs_f_logPlayer: {
                select: {
                    playerID: true,
                    playerGameID: true,
                    playerName: true,
                    playerAdmin: true,
                    playerHelper: true,
                    playerLevel: true,
                    playerRespect: true,
                    playerGender: true, 
                    playerSkin: true,
                    playerPremium: true, 
                    playerVip: true,
                    playerFaction: true, 
                    playerFactionRank: true,
                    playerClan: true,
                    playerClanRank: true,
                    playerStatus: true,
                    playerJob: true,
                    playerColor: true,
                    playerColorCategory: true, 
                }
            }
        }
    });
}