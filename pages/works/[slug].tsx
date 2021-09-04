import { Box, ImageList, ImageListItem } from "@material-ui/core";
import Layout from "components/Layout";
import { getPostBySlug, getPostSlugs } from "lib/api";
import { Post } from "lib/models";
import { Params } from "next/dist/next-server/server/router";
import Image from "next/image";
import React from "react"
import ReactMarkdown from 'react-markdown';
import styles from 'styles/Home.module.css'

const WorkPost = (post: Post) => {
  return (
    <Layout title={post.metadata.title}>
      <div className={styles['work-post']}>
        <h1>{post.metadata.title}</h1>
        <ReactMarkdown>{post.markdownBody}</ReactMarkdown>
        <ImageList variant='masonry' cols={3} gap={8}>
        {(post.metadata.images || []).map((image) => (
          <ImageListItem key={image}>
            <Image
              src={`/assets/${post.metadata.slug}/${image}`}
              height={500}
              width={500}
              alt={post.metadata.slug}
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    </Layout>
  );
} 

export default WorkPost

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug('work', params.slug)
  return {
    props: { ...post },
  }
}

export async function getStaticPaths() {
  const slugs = getPostSlugs('work');
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}