import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    // db connect
    prisma.$connect();

    //   parse body
    const data = req.body.data;

    // check if user exists
    const isUserExists = await prisma.user.findFirst({
      where: { email: String(data?.email)! },
    });
    if (isUserExists)
      return res.status(422).json({ message: 'User Already Exists...!' });

    // hash password and add to db
    await prisma.user
      .create({
        data: {
          name: String(data?.name),
          lastname: String(data?.family_name),
          email: String(data?.email),
          password: await hash(String(data?.password), 12),
        },
      })
      .then((value) => res.status(201).json({ status: true, user: value }))
      .catch((reason) => res.status(404).json({ reason }));

    // disconnect db
    prisma.$disconnect();

    // send response
  }
  res.status(500).json({ message: 'HTTP method not valid only POST Accepted' });
}
