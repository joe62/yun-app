import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

const Post = () => {
    const router = useRouter()
  return (
    <Layout>Post: {router.query.slug}</Layout>
  )
}

export default Post