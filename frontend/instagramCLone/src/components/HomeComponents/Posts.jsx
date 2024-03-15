import React from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const Posts = () => {
  const postsData = [
    { id: 1, username: 'user1', postContent: 'This is post 1', imageUrl: 'https://via.placeholder.com/400x200' },
    { id: 2, username: 'user2', postContent: 'This is post 2', imageUrl: 'https://via.placeholder.com/400x200' },
    { id: 3, username: 'user3', postContent: 'This is post 3', imageUrl: 'https://via.placeholder.com/400x200' },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-4">Posts</h1>
      {postsData.map((post) => (
        <div key={post.id} className="border border-gray-200 p-4 mb-4 rounded">
          <div className="flex items-center mb-2">
            <img className="w-8 h-8 rounded-full mr-2" src={`https://via.placeholder.com/40/000000/FFFFFF?text=${post.username}`} alt="User" />
            <span className="font-semibold">{post.username}</span>
          </div>
          <p className="mb-4">{post.postContent}</p>
          {post.imageUrl && (
            <div className="mb-4">
              <img className="w-full rounded" src={post.imageUrl} alt="Post" />
            </div>
          )}
          <div className="flex justify-between">
            <button className="flex items-center text-gray-500 mr-4">
              <FaHeart className="mr-1" />
              <span>Like</span>
            </button>
            <button className="flex items-center text-gray-500 mr-4">
              <FaComment className="mr-1" />
              <span>Comment</span>
            </button>
            <button className="flex items-center text-gray-500">
              <FaShare className="mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
