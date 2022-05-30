import Layout from 'components/Layout/Layout';
import TextMarkdown from 'components/TextMarkdown';
import { getPostBySlug, getPostSlugs } from 'lib/api';
import { Post } from 'lib/models';
import { Params } from 'next/dist/server/router';
import React from 'react';

import textsStyles from './textsStyles.module.css';

const TextPostPage: React.FC<Post> = ({ metadata, markdownBody }) => (
  <Layout title={metadata.title}>
    <div className={textsStyles['txt-header']}>
      <div className='sans'>
        <div>
          {new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
            new Date(metadata.timestamp)
          )}
        </div>
        <div>{metadata.type}</div>
      </div>
      <h1>{metadata.title}</h1>
    </div>
    <div className={textsStyles['txt-body']}>
      <div className={'sans small'}>{metadata.note}</div>
      <div>
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
