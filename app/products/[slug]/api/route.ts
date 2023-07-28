import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const product = await prisma.product.findFirst({
    where: {
      // ... provide filter here
      id: String(id),
    },
  });
  prisma.$disconnect();
  // console.log(product);

  //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   });

  return NextResponse.json({ product });
}
