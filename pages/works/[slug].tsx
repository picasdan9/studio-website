import ImageListSlide from 'components/ImageListSlide';
import Layout from 'components/Layout';
import { getPostBySlug, getPostSlugs } from 'lib/api';
import { Post } from 'lib/models';
import { Params } from 'next/dist/next-server/server/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from 'styles/Home.module.css';

const WorkPost: React.FC<Post> = ({ markdownBody, metadata }) => {
  return (
    <Layout title={metadata.title}>
      <h1>{metadata.title}</h1>
      <ReactMarkdown>{markdownBody}</ReactMarkdown>
      <ImageListSlide imageUrlList={metadata.imageUrlList || []} />
    </Layout>
  );
};

export default WorkPost;

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug('works', params.slug);
  return {
    props: { ...post },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs('works');
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
