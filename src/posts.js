import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../src/store/post/postSlice";
const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  return <div>Posts
    {posts.map(post=><p key={post.id}>{post.title}</p>)}
  </div>;
};

export default Posts;
