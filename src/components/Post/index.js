import React, { useState } from 'react';
import { Box, Grid, GridItem, Input, Text } from '@chakra-ui/react';

/* eslint-disable react/prop-types */
const Post = ({ postData }) => {
  const { user, text, likes, comments, createdAt } = postData;
  const [hasLiked, setHasLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(likes);
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState(comments);

  return (
    <Grid
      templateRows="auto 1fr repeat(2, 10%)"
      templateColumns="1fr"
      w="750px"
      border="solid 1px"
      borderColor="palette.700"
      borderRadius={4}
      marginBottom={8}
    >
      <GridItem
        rowStart={1}
        rowEnd={2}
        borderBottom="solid 1px"
        borderColor="palette.700"
      >
        <Box padding={4} display="flex" justifyContent="space-between">
          <Text>{user}</Text>
          <Text>{createdAt}</Text>
        </Box>
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={3}
        borderBottom="solid 1px"
        borderColor="palette.700"
      >
        <Box padding={4}>{text}</Box>
      </GridItem>
      <GridItem
        p={4}
        rowStart={3}
        rowEnd={4}
        borderBottom="solid 1px"
        borderColor="palette.700"
      >
        <>
          {postComments.map((comment, idx) => (
            <Box
              key={`comment-${idx}`}
              p={3}
              mb={4}
              bgColor="palette.300"
              borderRadius={6}
            >
              <Text fontWeight="bold">{comment.user}</Text>
              <Text wordBreak="break-all" whiteSpace="normal">
                {comment.text}
              </Text>
            </Box>
          ))}
        </>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!e.target[0].value) return;
            setNewComment('');
            setPostComments([
              ...postComments,
              { user: 'Demo User', text: e.target[0].value },
            ]);
          }}
        >
          <Input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a new comment"
          />
        </form>
      </GridItem>
      <GridItem rowStart={4} rowEnd={5}>
        <Box padding={4} display="flex" justifyContent="flex-end">
          <Box display="flex">
            <Box
              marginRight={2}
              color={hasLiked ? 'palette.500' : ''}
              onClick={() => {
                setHasLiked(!hasLiked);
                if (hasLiked) {
                  setPostLikes(postLikes - 1);
                } else {
                  setPostLikes(postLikes + 1);
                }
              }}
              cursor="pointer"
              transition="color .1s ease-out"
              userSelect="none"
            >
              Like
            </Box>
            <Text>{postLikes}</Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};
/* eslint-enable react/prop-types */

export default Post;
