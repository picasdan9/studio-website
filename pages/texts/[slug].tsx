import Layout from 'components/Layout/Layout';
import TextMarkdown from 'components/TextMarkdown';
import { getPostBySlug, getPostSlugs } from 'lib/api';
import { Post } from 'lib/models';
import { Params } from 'next/dist/server/router';
import React from 'react';

import textsStyles from './textsStyles.module.css';

const TextPostPage: React.FC<Post> = ({ metadata, markdownBody }) => (
  <Layout title={metadata.title}>
    <div className={textsStyles['text-post']}>
      <div className={textsStyles['text-metadata']}>
        <div>{metadata.year}</div>
        <div>{metadata.type}</div>
        <div className={textsStyles['text-note']}>{metadata.note}</div>
      </div>
      <div className={textsStyles['text-content']}>
        <h1>{metadata.title}</h1>
        <TextMarkdown slug={metadata.slug} markdown={markdownBody} />
      </div>
    </div>
  </Layout>
);

export default TextPostPage;

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug('texts', params.slug);
  return {
    props: { ...post },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs('texts');
  return {
    paths: slugs.map((slug: string) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
