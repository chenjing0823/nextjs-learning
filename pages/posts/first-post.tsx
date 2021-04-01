import React from "react"
import Head from 'next/head'
import { NextPage } from 'next';
 
const FirstPost: NextPage = () => {
  return (
    <div>
      <Head><title>我的博客</title></Head>
      First Post
    </div>
  )
}
export default FirstPost;