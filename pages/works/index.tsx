import Layout from "components/Layout";
import { getAllPostMetadata } from "lib/api";
import { Metadata, PageIndexProps } from "lib/models";
import Link from "next/link";
import React from "react";

const WorksIndex = (props: PageIndexProps) => (
  <Layout title='works'>
    {props.postMetadata.map(metadataToListItem)}
  </Layout>
)

const metadataToListItem = (metadata: Metadata) => (
  <div key={metadata.slug}>
    <Link href={{ pathname: `/works/${metadata.slug}` }}>
      <i>{metadata.title}</i>
    </Link>
  </div>
)

export default WorksIndex

export async function getStaticProps() {
  const postMetadata = await getAllPostMetadata('work');
  return {
    props: {
      postMetadata
    }
  }
}
