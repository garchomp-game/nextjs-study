// src/components/PostForm.tsx
import { useState, FormEvent } from 'react'; // FormEventをインポート
import { useRecoilState } from 'recoil';
import { postsState, Post } from '../atoms/postsAtom';
import { Box, Input, Button, Textarea } from '@chakra-ui/react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useRecoilState(postsState);

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => { // 型を指定
    event.preventDefault();
    const newPost: Post = { 
      id: Date.now(), 
      title, 
      content, 
      createdAt: new Date()  // 'createdAt' プロパティを追加
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
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
