/*
 * @Author: your name
 * @Date: 2021-03-30 20:51:03
 * @LastEditTime: 2021-03-30 21:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/pages/posts/[12].js
 */
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  // const { pid } = router.query
  const str: string = JSON.stringify(router.query)

  return <p>Post: {str}</p>
}

export default Post