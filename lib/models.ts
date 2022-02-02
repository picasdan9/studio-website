import React from 'react';

export interface Page {
  title: string;
  children: React.ReactNode;
}

export interface Post {
  markdownBody: string;
  metadata: Metadata;
}

export interface Metadata {
  slug: string;
  title: string;
  // use timestamp because NextJS doesn't support serialization for Date
  // object when fetched as static props
  // https://github.com/vercel/next.js/issues/13209#issuecomment-633149650
  timestamp: number;
  type: string;
  url?: string;
  externalSiteName?: string;
  note?: string;
  coverImage?: string;
  imgUrlList?: string[];
}
