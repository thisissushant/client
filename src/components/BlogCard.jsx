/* eslint-disable react/prop-types */
import {} from "react";

const BlogCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex justify-end">
        <button
          onClick={() => onEdit(post)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(post._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
