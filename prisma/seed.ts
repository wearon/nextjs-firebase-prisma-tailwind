import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@dropjar.com',
            emailVerified: true,
            photoUrl: 'https://example.com/alice'
        }
    })
}
