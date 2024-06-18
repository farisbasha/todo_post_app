import React from 'react'

const PostCard = ({
    post
}) => {
  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
    
    </a>
  )
}

export default PostCard

// {
//   "userId": 1,
//   "id": 1,
//   "title": "Introduction to Artificial Intelligence",
//   "body": "Learn the basics of Artificial Intelligence and its applications in various industries.",
//   "link": "https://example.com/article1",
//   "comment_count": 8
// }