/*
 * @Author: your name
 * @Date: 2021-03-30 21:03:30
 * @LastEditTime: 2021-03-30 21:03:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/pages/posts/[pid]/[comment].js
 */
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  // const { pid } = router.query
  const str = JSON.stringify(router.query)

  return <p>Post: {str}</p>
}

export default Post