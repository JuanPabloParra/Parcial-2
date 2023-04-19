import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postActions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #555;
  text-align: center;
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const PostTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const PostBody = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const PostNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #999;
  margin-right: 10px;
`;

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const maxPosts = 100;
  const filteredPosts = posts.slice(0, maxPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <TitleContainer>
        <Title>API Parcial 2 Juan Pablo Parra</Title>
      </TitleContainer>
      <List>
        {filteredPosts.map((post) => (
          <ListItem key={post.id}>
            <PostNumber>{filteredPosts.indexOf(post) + 1}</PostNumber>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
