import Layout from "components/Layout";
import { getAllPostMetadata } from "lib/api";
import { Metadata, MetadataGroupbyYear, PageIndexProps } from "lib/models";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from 'styles/Home.module.css'

const TextsIndex = (props: PageIndexProps) => {
  const metadataGroupbyYear = props.postMetadata.reduce((metadataGroups: MetadataGroupbyYear, metadata: Metadata) => {
    if (metadata.year in metadataGroups)
      metadataGroups[metadata.year].push(metadata);
    else
      metadataGroups[metadata.year] = [metadata];
    return metadataGroups;
  }, {});

  return (
    <Layout title='texts'>
      <Container className={styles["text-index-page-container"]}>
        {Object.entries(metadataGroupbyYear)
            .sort((group1: [string, Metadata[]], group2: [string, Metadata[]]) => 
                parseInt(group2[0], 10) - parseInt(group1[0], 10))
            .map((group: [string, Metadata[]]) => metadataGroupToBlock(...group))}
      </Container>
    </Layout>
  )
}

const metadataGroupToBlock = (year: string, metadataList: Metadata[]) => (
  <Row key={year}>
    <Col sm={2} className={styles["block-header"]}>{year}</Col>
    <Col sm={8}>{metadataList.map(metadataToLine)}</Col>
  </Row>
)

const metadataToLine = (metadata: Metadata) => (
  <div key={metadata.slug}>
        <a href={metadata.url}><i>{metadata.title}</i></a>
        <span className={styles["text-index-page-metadata-sans"]}>
          , {metadata.type}
          {metadata.externalSiteName && (
            <>, {metadata.externalSiteName}</>
          )}
        </span>
  </div>
)

export default TextsIndex;

export async function getStaticProps() {
  const postMetadata = await getAllPostMetadata('text');
  return {
    props: {
      postMetadata
    }
  }
}
