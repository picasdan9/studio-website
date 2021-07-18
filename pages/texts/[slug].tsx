import { getPostBySlug, getPostSlugs } from "lib/api";
import { Post } from "lib/models";
import { Params } from "next/dist/next-server/server/router";
import React from "react"
import ReactMarkdown from 'react-markdown';

const TextPost = (props: Post) => (
  <div>
    <h1>{props.metadata.title}</h1>
    <ReactMarkdown children={props.markdownBody} />
  </div>
);

export default TextPost

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)
  return {
    props: {...post},
  }
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug: string) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}
