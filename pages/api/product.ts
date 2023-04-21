import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import _ from 'lodash';
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  prisma.$connect();
  if (req.method === 'POST') {
    const data = req.body.data;

    await prisma.product.create({
      data: {
        caption: data.caption,
        description: data.description,
        thumbnail: data.thumbnail,
        descriptionImage: data.descriptionImage,
        content: data.content,
        price: Number(data.price),
        stock: Number(data.stock),
        category: { connect: { id: Number(data.category_id) } },
      },
    });
    prisma.$disconnect();
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    const data = req.query;

    const product = await prisma.product.findFirst({
      where: {
        // ... provide filter here
        id: String(data.id),
      },
    });
    prisma.$disconnect();
    // console.log(product);
    product?.id ? res.status(200).send(product) : res.status(302).send(null);
  }
}
