import Layout from "components/Layout";
import { getAllPostMetadata } from "lib/api";
import { Metadata, TextsIndexProps } from "lib/models";
import Link from "next/link";
import React from "react";

const TextsIndex = (props: TextsIndexProps) => (
  <Layout title='texts'>
    {props.postMetadata.map(metadataToListItem)}
  </Layout>
)

const metadataToListItem = (metadata: Metadata) => (
  <div>
    <Link href={{ pathname: `/texts/${metadata.slug}` }}>
      <i>{metadata.title}</i>
    </Link>
    , {metadata.type}
    {metadata.externalSite.name && (
      <>, <a href={metadata.externalSite.url}>{metadata.externalSite.name}</a></>
    )}
  </div>
)

export default TextsIndex;

export async function getStaticProps() {
  const postMetadata = await getAllPostMetadata();
  return {
    props: {
      postMetadata
    }
  }
}
