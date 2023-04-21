import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  prisma.$connect();
  if (req.method === 'POST') {
    const data = req.body.data;
    await prisma.user.create({
      data,
    });
    prisma.$disconnect();
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    const data = req.query;

    const users = await prisma.user.findFirst({
      where: {
        // ... provide filter here
        email: String(data?.email),
        password: String(data?.password),
      },
    });
    prisma.$disconnect();
    // console.log(users);
    users?.id ? res.status(200).send(true) : res.status(403).send(false);
  }
}
