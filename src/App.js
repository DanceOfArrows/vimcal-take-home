import React, { useState } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed';
import NewPost from './components/Post/create';
import Profile from './components/Profile';

const SideNav = () => {
  return (
    <GridItem
      colStart={1}
      colEnd={2}
      rowStart={2}
      rowEnd={6}
      borderRight="solid 1px"
      borderColor="palette.700"
      display="flex"
      flexDir="column"
    >
      <Text
        fontSize={20}
        marginBottom={4}
        marginTop={4}
        marginLeft="auto"
        marginRight={8}
        as={NavLink}
        to="/"
        h="max-content"
        _hover={{ color: 'palette.500' }}
        transition="color .1s ease-out"
        style={({ isActive }) => {
          return {
            color: isActive ? '#A63446' : '',
          };
        }}
      >
        Feed
      </Text>
      <Text
        fontSize={20}
        marginBottom={4}
        marginTop={4}
        marginLeft="auto"
        marginRight={8}
        as={NavLink}
        to="/profile"
        h="max-content"
        _hover={{ color: 'palette.500' }}
        transition="color .1s ease-out"
        style={({ isActive }) => {
          return {
            color: isActive ? '#A63446' : '',
          };
        }}
      >
        Profile
      </Text>
      <Text
        fontSize={20}
        marginBottom={4}
        marginTop={4}
        marginLeft="auto"
        marginRight={8}
        as={NavLink}
        to="/new-post"
        h="max-content"
        _hover={{ color: 'palette.500' }}
        transition="color .1s ease-out"
        style={({ isActive }) => {
          return {
            color: isActive ? '#A63446' : '',
          };
        }}
      >
        New Post
      </Text>
    </GridItem>
  );
};

const TopNav = () => {
  return (
    <>
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={2}
        borderBottom="solid 1px"
        borderColor="palette.700"
        display="flex"
      >
        <Text
          alignSelf="center"
          marginLeft="auto"
          marginRight={8}
          fontSize={36}
          fontWeight="bold"
          as={Link}
          to="/"
        >
          VimCal Media
        </Text>
      </GridItem>
      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={1}
        rowEnd={2}
        borderBottom="solid 1px"
        borderColor="palette.700"
      ></GridItem>
    </>
  );
};

function App() {
  const [userPosts, setUserPosts] = useState([]);
  return (
    <Grid
      bg="palette.900"
      h="100%"
      templateRows="7.5% repeat(4, 1fr)"
      templateColumns="25% 1fr"
      overflow="hidden"
    >
      <TopNav></TopNav>
      <SideNav></SideNav>
      <Routes>
        <Route path="/" element={<Feed userPosts={userPosts} />}></Route>
        <Route
          path="/profile"
          element={<Profile userPosts={userPosts} />}
        ></Route>
        <Route
          path="/new-post"
          element={
            <NewPost userPosts={userPosts} setUserPosts={setUserPosts} />
          }
        ></Route>
      </Routes>
    </Grid>
  );
}

export default App;
