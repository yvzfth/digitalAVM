import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  prisma.$connect();
  if (req.method === 'POST') {
    // const data = req.body.data;
    // delete data.category_name;
    // await prisma.product.create({
    //   data: {
    //     ...data,
    //     price: Number(data.price),
    //     stock: Number(data.stock),
    //     category: { connect: { name: 'a' } },
    //   },
    // });
    // prisma.$disconnect();
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    // const data = req.query;

    const product = await prisma.category.findMany({
      where: {
        // ... provide filter here
        // title: String(data?.title),
      },
    });
    prisma.$disconnect();
    // console.log(users);
    product ? res.status(200).send(product) : res.status(302).send([]);
  }
}
