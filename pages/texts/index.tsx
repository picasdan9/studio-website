import Layout from "components/Layout";
import { getAllPostMetadata, getAllPosts } from "lib/api";
import { Metadata, TextsIndexProps } from "lib/models";

const TextsIndex = (props: TextsIndexProps) => (
  <Layout title='texts'>
    {props.postMetadata.map(metadataToListItem)}
  </Layout>
)

const metadataToListItem = (metadata: Metadata) => (
  <div>
    <i>{metadata.title}</i>
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
