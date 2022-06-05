import { PropsWithChildren } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

// Types
import type { Post } from "../types/Post";

type Props = PropsWithChildren<{
  posts?: Array<Post>;
}>;

const Posts = ({ posts = [] }: Props) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post: Post, i) => (
        <Grid key={i} item xs={4}>
          <Card
            color="secondary"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {post.title}
              </Typography>
              <Typography>{post.body}</Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary" variant="outlined">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
