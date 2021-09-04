import Layout from 'components/Layout';
import { getPostBySlug, getPostSlugs } from 'lib/api';
import { Post } from 'lib/models';
import { Params } from 'next/dist/next-server/server/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from 'styles/Home.module.css';

const TextPost = (post: Post) => (
  <Layout title={post.metadata.title}>
    <div className={styles['text-post']}>
      <div className={styles['text-metadata']}>
        <div>{post.metadata.year}</div>
        <div>{post.metadata.type}</div>
      </div>
      <div className={styles['text-content']}>
        <h1>{post.metadata.title}</h1>
        <ReactMarkdown>{post.markdownBody}</ReactMarkdown>
      </div>
    </div>
  </Layout>
);

export default TextPost;

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug('text', params.slug);
  return {
    props: { ...post },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs('text');
  return {
    paths: slugs.map((slug: string) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
