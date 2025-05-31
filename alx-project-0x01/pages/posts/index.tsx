import React from "react";
import PostCard from "../../components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
        <Header/>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostCard />
    </div>
  );
};

export default PostsPage;
