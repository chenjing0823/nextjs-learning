import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/posts/abc">
          <a>Go to pages/posts/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/abc?foo=bar">
          <a>Also goes to pages/posts/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/abc/a-comment">
          <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>

      <li>
        <a href="/posts/first-post">a 点击这里</a>
        <Link href="/posts/first-post">
          <a>Go to pages/first-post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
