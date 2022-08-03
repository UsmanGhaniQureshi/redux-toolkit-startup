import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../src/store/post/postSlice";
const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);

  if (loading) return <p>Loading...</p>;
  return <div>Posts</div>;
};

export default Posts;
