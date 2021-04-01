import { NextApiHandler } from 'next'
import { getPosts } from '../../lib/posts'
function mytimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}
const Posts: NextApiHandler = async (req, res) => {
  await mytimeout()
  const posts = await getPosts()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(posts))
  res.end()
}
export default Posts
