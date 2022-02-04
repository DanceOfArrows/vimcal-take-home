import React from 'react';
import { Box, GridItem } from '@chakra-ui/react';

import Post from '../Post';

/* eslint-disable react/prop-types */
const Profile = ({ userPosts }) => {
  return (
    <GridItem
      colStart={2}
      colEnd={3}
      rowStart={2}
      rowEnd={6}
      display="flex"
      overflowY="auto"
    >
      <Box
        p={8}
        flex={1}
        h="max-content"
        display="flex"
        alignItems="center"
        flexDir="column"
      >
        {userPosts
          .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)) // Sort by newest first
          .map((post, idx) => (
            <Post key={`feed-post-${idx}`} postData={post} />
          ))}
      </Box>
    </GridItem>
  );
};
/* eslint-enable react/prop-types */

export default Profile;
