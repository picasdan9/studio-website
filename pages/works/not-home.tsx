import ImageSlider from 'components/ImageSlider/ImageSlider';
import Layout from 'components/Layout/Layout';
import { getPostBySlug } from 'lib/api';
import { Post } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const NotHomePage: React.FC<Post> = ({ markdownBody, metadata }) => {
  return (
    <Layout title={metadata.title}>
      <h1>{metadata.title}</h1>
      <ImageSlider imgUrlList={metadata.imgUrlList || []} />
      <ReactMarkdown>{markdownBody}</ReactMarkdown>
    </Layout>
  );
};

export default NotHomePage;

export async function getStaticProps(): Promise<GetStaticPropsResult<Post>> {
  const post = getPostBySlug('works', 'not-home');
  return {
    props: { ...post },
  };
}
