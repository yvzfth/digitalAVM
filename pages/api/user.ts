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
    await prisma.users.create({
      data,
    });
    prisma.$disconnect();
    res.status(200).send('OK');
  }
  if (req.method === 'GET') {
    res.status(200).json('get');
  }
}
