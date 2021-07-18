export interface Page {
  title: string,
  children: React.ReactNode
}

export interface NavButtonProps {
  path: string,
  label: string
}


// Texts

export interface TextsDb {
  [key: string]: Post
}

export interface TextsIndexProps {
  postMetadata: Metadata[]
}

export interface Post {
  markdownBody: string,
  metadata: Metadata
}

export interface Metadata {
  title: string,
  type: string,
  year: number,
  externalSite: ExternalSite
}

export interface ExternalSite {
  name: string,
  url: string
}