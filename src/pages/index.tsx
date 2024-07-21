// src/pages/index.tsx
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import { Container, Heading } from '@chakra-ui/react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Home = () => {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    // APIからデータをフェッチしてRecoilステートを更新
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Failed to load posts:', error));
  }, [setPosts]); // 依存配列にsetPostsを含む

  return (
    <Container>
      <Heading as="h1" my={4}>掲示板アプリケーション</Heading>
      <PostForm />
      <PostList />
    </Container>
  );
};

export default Home;
