import React from 'react';
import { GridItem, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NewPost = ({ userPosts, setUserPosts }) => {
  const navigate = useNavigate();
  return (
    <GridItem
      colStart={2}
      colEnd={3}
      rowStart={2}
      rowEnd={6}
      display="flex"
      overflowY="auto"
      p={4}
      flexDir="column"
    >
      <Text mb={4} fontSize={24}>
        Create new post
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target[0].value) return;
          setUserPosts([
            ...userPosts,
            {
              user: 'Demo User',
              text: e.target[0].value,
              likes: 0,
              comments: [],
              createdAt: new Date().toDateString(),
            },
          ]);
          navigate('/');
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Input placeholder="Enter post text here" w="max-content" />
        <button
          style={{
            marginTop: '1rem',
            backgroundColor: '#A63446',
            borderRadius: '12px',
            padding: '0.75rem',
          }}
          type="submit"
        >
          Post
        </button>
      </form>
    </GridItem>
  );
};
/* eslint-enable react/prop-types */

export default NewPost;
