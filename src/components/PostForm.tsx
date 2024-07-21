// src/components/PostForm.tsx
import { useState, FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import { Box, Input, Button, Textarea } from '@chakra-ui/react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useRecoilState(postsState);

  const handleSubmit = async (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const savedPost = await response.json();  // バックエンドから返された完全な投稿データを取得
      console.log("savedPost");
      console.log(savedPost);
      console.log("posts");
      console.log(...posts);
      setPosts([savedPost, ...posts]);  // 返されたデータを状態に追加
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to save the post:', error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius={8} mb={4}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        mb={2}
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        mb={2}
      />
      <Button type="submit">Add Post</Button>
    </Box>
  );
};

export default PostForm;
