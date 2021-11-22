import React from 'react';

export interface Page {
  title: string;
  children: React.ReactNode;
}

export interface Post {
  markdownBody: string;
  metadata: Metadata;
}

export type Data = {
  texts: { [key: string]: Post };
  works: { [key: string]: Post };
};

export interface Metadata {
  slug: string;
  title: string;
  year: string;
  type: string;
  url?: string;
  externalSiteName?: string;
  note?: string;
  coverImage?: string;
  imgUrlList?: string[];
}
