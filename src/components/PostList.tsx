// src/components/PostList.tsx
import { useRecoilValue } from 'recoil';
import { postsState, Post } from '../atoms/postsAtom';  // Post型もpostsAtomからインポート
import { Box, Heading, Text } from '@chakra-ui/react';

const PostList = () => {
  const posts = useRecoilValue<Post[]>(postsState);

  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.id} p={4} borderWidth={1} borderRadius={8} mb={4}>
          <Heading size="md">{post.title}</Heading>
          <Text mt={2}>{post.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
