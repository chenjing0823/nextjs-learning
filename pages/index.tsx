import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TsExample from '../components/ReactTs'
import FuncExample from '../components/ReactFc'
import DefaultExample from '../components/DefaultPrppsExample'
import Link from 'next/link'

function Home() {
  const [defaultVal, setVal] = React.useState('')
  // useEffect
  React.useEffect(() => {
    setTimeout(() => {
      setVal('默认参数示例')
    }, 2000)
  })
  return (
    <>
      <Head>
        <title>测试标题</title>
      </Head>
      <TsExample name="123"></TsExample>
      <FuncExample name="234"></FuncExample>
      <DefaultExample count={1} name={defaultVal}></DefaultExample>
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
          <Link href="/posts/first-post">
            <a className={styles.a_color}>Go to pages/first-post</a>
          </Link>
        </li>

        <li>
          <Link href="/posts/BSR">
            <a className={styles.a_color}>posts/BSR</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
