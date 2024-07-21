// src/pages/index.tsx
import { Container, Heading } from '@chakra-ui/react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <Container>
      <Heading as="h1" my={4}>掲示板アプリケーション</Heading>
      <PostForm />
      <PostList />
    </Container>
  );
};

export default Home;
