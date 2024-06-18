import React, { useContext, useEffect, useState } from 'react'
import PostCard from './components/PostCard'
import axios from 'axios'
import { useSelector } from 'react-redux'




const Posts = () => { 
  const [postList, setPostList] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

      const fetchPostData = async () =>{
          try {
              const response = await axios.get("https://json-placeholder.mock.beeceptor.com/posts",)
              setPostList(response.data)
          } catch (error) {
            console.log(error)
              setIsError(true)
          }finally{
              setIsLoading(false)
          }
      }

      fetchPostData()

  },[])


  if (isLoading) {
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Something went wrong in post section</div>
  }

  return (
    <div className='flex flex-col gap-3'>
        {
            postList.map((post) => {
                return <PostCard key={post.id} post={post} />
            })
        }

    
    </div>
  )
}

export default Posts


// {
//   "userId": 1,
//   "id": 1,
//   "title": "Introduction to Artificial Intelligence",
//   "body": "Learn the basics of Artificial Intelligence and its applications in various industries.",
//   "link": "https://example.com/article1",
//   "comment_count": 8
// }