import ImageSlider from 'components/ImageSlider';
import Layout from 'components/Layout/Layout';
import { getPostBySlug } from 'lib/api';
import { Post } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MapperPage: React.FC<Post> = ({ markdownBody, metadata }) => {
  return (
    <Layout title={metadata.title}>
      <h1>{metadata.title}</h1>
      <ImageSlider imgUrlList={metadata.imgUrlList || []} />
      <ReactMarkdown>{markdownBody}</ReactMarkdown>
      <p>
        <a
          href='https://picasdan9.github.io/M-A-P-P-E-R/M-A-P-P-E-R.txt'
          target='blank'
          download
        >
          Download M-A-P-P-E-R.txt
        </a>
      </p>
      <p>
        <a
          href='https://picasdan9.github.io/M-A-P-P-E-R/OralDefence/index.html'
          target='blank'
        >
          Presentation slides
        </a>
      </p>
      <div>{metadata.note}</div>
    </Layout>
  );
};

export default MapperPage;

export async function getStaticProps(): Promise<GetStaticPropsResult<Post>> {
  const post = getPostBySlug('works', 'm-a-p-p-e-r');
  return {
    props: { ...post },
  };
}
