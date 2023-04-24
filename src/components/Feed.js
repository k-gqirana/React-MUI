import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import nali from "../images/nali.jpg";
import teddy from "../images/teddy.enc";
import anga from "../images/anga.jpeg";
const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post
            title="Luthando Mkonkqwana"
            subheader="Kotin' 4 Life"
            bgcolor="red"
            initial="L"
            message="Meticulous about my fabric. You gotta look good in order to do good, to feel Good."
            image={teddy}
          />
          <Post
            title="Nali Mbana"
            subheader="Playbook"
            bgcolor="orange"
            initial="N"
            message="Supervillains teach us that you can accomplish great things even if the world is gainst you"
            image={nali}
          />

          <Post
            title="Anganathi Zimasa"
            subheader="There are no secrets to success"
            initial="A"
            bgcolor="green"
            message="Owning the facts is a prerequisite to leadership. But there are millions of technocrats out there with lots of facts in their quivers and little leadership potential. In many cases, what they are missing is empathy. No one is a leader who can’t put himself or herself in the other person’s shoes. Empathy and expertise command respect"
            image={anga}
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
