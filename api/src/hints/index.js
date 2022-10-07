import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const create = async (ctx) => {

    if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
        ctx.status = 400
        return
    }

    const userId = 'cl8ypcfz90000u5tcyt2kxqpu';
    const { gameId } = ctx.request.body
    const homeTeamScore = parseInt(ctx.request.body.homeTeamScore)
    const awayTeamScore = parseInt(ctx.request.body.awayTeamScore)

    try {
        const [hint] = await prisma.hint.findMany({
            where: { userId, gameId }
        })

        ctx.body = hint
            ? await prisma.hint.update({
                where: {
                    id: hint.id
                },
                data: {
                    homeTeamScore,
                    awayTeamScore
                }
            })
            : await prisma.hint.create({
                data: {
                    userId,
                    gameId,
                    homeTeamScore,
                    awayTeamScore
                }
            })

    } catch (error) {
        ctx.body = error
        ctx.status = 500
    }
}