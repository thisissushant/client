/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../redux/blogSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogCard = ({ post, onEdit, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-96 w-64 m-4">
    <div className="h-40 bg-gray-300 animate-pulse"></div>
    <div className="p-4 flex-grow">
      <h2 className="text-xl font-bold mb-2 truncate">{post.title}</h2>
      <p
        className="text-gray-700 mb-4 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {post.content}
      </p>
    </div>
    <div className="flex justify-end p-4">
      <button
        onClick={() => onEdit(post)}
        className="text-blue-500 hover:text-blue-600 mr-2"
      >
        <FaEdit size={20} />
      </button>
      <button
        onClick={() => onDelete(post._id)}
        className="text-red-500 hover:text-red-600"
      >
        <FaTrash size={20} />
      </button>
    </div>
  </div>
);

const BlogPage = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.blog);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      dispatch(
        updatePost({ id: editingPost._id, postData: { title, content } })
      );
    } else {
      dispatch(createPost({ title, content }));
    }
    setShowModal(false);
    setTitle("");
    setContent("");
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(id));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-100 flex items-center"
        >
          Add New
        </button>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">
              {editingPost ? "Edit Post" : "Create New Post"}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                  {editingPost ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
