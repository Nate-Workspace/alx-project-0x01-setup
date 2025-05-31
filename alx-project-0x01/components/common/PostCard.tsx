import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Post Title</h2>
      <p className="text-gray-600">Post content goes here...</p>
    </div>
  );
};

export default PostCard;
