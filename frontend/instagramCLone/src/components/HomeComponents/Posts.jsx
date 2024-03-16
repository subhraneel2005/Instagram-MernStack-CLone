import React, { useContext } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import UseContext from '../../contexts/UseContext';

const Posts = () => {
  

  const {allPosts} = useContext(UseContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-4">Posts</h1>
      {allPosts.map((post) => (
        <div key={post._id} className="border border-gray-200 p-4 mb-4 rounded">
          <div className="flex items-center mb-2">
            {/* <img className="w-8 h-8 rounded-full mr-2" src={post.imgUrl} alt="User" />
            <span className="font-semibold">{post.username}</span> */}
          </div>
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
