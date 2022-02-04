import React from 'react';
import { Box, GridItem } from '@chakra-ui/react';

import Post from '../Post';

/* eslint-disable react/prop-types */
const Feed = ({ userPosts }) => {
  const feedData = [
    {
      user: 'User 1',
      text: 'First post!',
      likes: 0,
      comments: [],
      createdAt: new Date().toDateString(),
    },
    {
      user: 'User 1',
      text: `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac feugiat magna. Etiam cursus, ipsum sit amet suscipit elementum, neque elit cursus mauris, id luctus lectus tellus elementum orci. Aliquam vitae nunc semper, convallis augue nec, consequat est. Integer ut orci quam. Fusce condimentum ipsum nec libero vestibulum convallis. Integer pretium metus vel nulla sodales, a vestibulum purus auctor. Cras enim nisi, accumsan sed elit fringilla, rhoncus egestas magna.

In diam massa, commodo non ullamcorper ut, commodo vel justo. Cras in blandit lorem. Vestibulum gravida augue tortor, laoreet auctor magna ultricies quis. Donec luctus fermentum nibh eu varius. Integer euismod posuere volutpat. Donec tristique aliquam ornare. Curabitur sed enim fermentum, lobortis leo eu, ullamcorper dolor. In hac habitasse platea dictumst. Fusce eros arcu, dignissim eget libero sed, viverra elementum sapien.

Duis dictum pharetra est, finibus vestibulum ipsum lobortis id. Proin porttitor feugiat metus. Fusce finibus pellentesque dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean lobortis turpis id ante pretium tristique. Sed varius pellentesque nisl, vitae hendrerit dui vehicula a. Ut ac venenatis eros. Sed vitae lacinia lacus, consequat accumsan dui. Sed consequat dignissim mauris, et dignissim lectus vestibulum sit amet. Morbi congue sapien et orci tincidunt, vitae hendrerit nulla pretium. Vestibulum laoreet pretium porttitor. Phasellus quis magna tincidunt, ullamcorper tortor eu, condimentum elit. Nulla hendrerit lacus in felis fringilla, in interdum mi dictum. Nunc tristique rutrum ultrices. Ut ac ullamcorper magna, ut pretium velit. Nullam sit amet orci erat.

Aenean non nulla sit amet sem ullamcorper lobortis. Ut ultricies, metus et rhoncus aliquam, quam tellus tempor metus, vel mollis ante turpis ac sapien. Suspendisse et mattis dolor. Suspendisse pulvinar volutpat scelerisque. Fusce vitae diam molestie, varius turpis ut, interdum mauris. Phasellus finibus augue ac felis eleifend, in vulputate erat mattis. Nunc a aliquam massa, in consectetur elit. Vestibulum rhoncus, diam sed malesuada tempus, elit tortor volutpat nibh, at condimentum neque neque et est. Donec semper imperdiet odio vel molestie.

Morbi eu velit lacus. Sed mattis vestibulum lorem, ac pulvinar nunc ullamcorper et. Ut sed dui in diam ornare commodo. Duis dignissim sapien eu nunc aliquam, malesuada eleifend turpis faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis lectus non nisi pellentesque congue ac scelerisque orci. Praesent cursus felis nunc, nec finibus enim tempor sed. Suspendisse maximus imperdiet mauris sed finibus. Aliquam erat volutpat. Cras mattis enim sit amet orci commodo, a fringilla odio suscipit. Quisque et metus ultrices, hendrerit erat vitae, lobortis metus. Nulla eros ipsum, placerat tempor arcu volutpat, euismod lacinia dui. Sed pulvinar tincidunt neque in pellentesque. Proin neque turpis, ultrices sit amet elit ac, porta tincidunt nibh. Proin turpis odio, imperdiet vitae bibendum sit amet, dignissim sagittis est.`,
      likes: 0,
      comments: [],
      createdAt: new Date().toDateString(),
    },
  ];

  const posts = [...feedData, ...userPosts];

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
        {posts
          .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)) // Sort by newest first
          .map((post, idx) => (
            <Post key={`feed-post-${idx}`} postData={post} />
          ))}
      </Box>
    </GridItem>
  );
};
/* eslint-enable react/prop-types */

export default Feed;
