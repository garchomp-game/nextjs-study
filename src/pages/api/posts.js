// pages/api/posts.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 新しい投稿をデータベースに保存
    const { title, content } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        createdAt: new Date(),
      },
    });
    return res.status(200).json(post);
  } else if (req.method === 'GET') {
    // 保存されている投稿を全て取得
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json(posts);
  }
}
