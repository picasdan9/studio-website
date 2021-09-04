import React from "react";

export interface Page {
  title: string;
  children: React.ReactNode;
}

export interface NavButtonProps {
  path: string;
  label: string;
}

export interface PostsDb {
  [key: string]: Table
}

export interface Table {
  [key: string]: Post;
}

export interface PageIndexProps {
  postMetadata: Metadata[];
}

export interface Post {
  markdownBody: string;
  metadata: Metadata;
}

export interface MetadataGroupbyYear {
  [key: string]: Metadata[]
}

export interface Metadata {
  slug: string;
  title: string;
  year: string;
  type?: string;
  externalSiteName?: string;
  url: string;
  coverImage?: string;
  images?: string[];
}

