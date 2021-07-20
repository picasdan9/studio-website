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

export interface Metadata {
  slug: string;
  title: string;
  year: number;
  type?: string;
  externalSite?: ExternalSite;
  coverImage?: string;
  images?: string[];
}

export interface ExternalSite {
  name: string;
  url: string;
}
