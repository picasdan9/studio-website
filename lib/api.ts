import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Data, Post } from './models';

const posts: Data = {
  texts: {},
  works: {},
};

const workingDirectory = process.cwd();
const directories: { [key: string]: string } = {
  texts: join(workingDirectory, '_texts'),
  works: join(workingDirectory, '_works'),
};

export function getPostSlugs(cat: string): string[] {
  return fs
    .readdirSync(directories[cat])
    .map((filename) => filename.replace(/\.md$/, ''));
}

export function getPostBySlug(cat: 'texts' | 'works', slug: string): Post {
  if (!(slug in posts[cat])) {
    posts[cat][slug] = retrievePostBySlug(cat, slug);
  }
  return posts[cat][slug];
}

export function getAllPosts(cat: 'texts' | 'works'): Post[] {
  return getPostSlugs(cat).map((slug) => getPostBySlug(cat, slug));
}

export function getAllPostMetadata(cat: 'texts' | 'works') {
  return getAllPosts(cat).map((post) => post.metadata);
}

export function getImageUrlList(slug: string) {
  return fs
    .readdirSync(join('public', 'works', slug))
    .sort()
    .map((filename) => join('/works', slug, filename));
}

function retrievePostBySlug(cat: string, slug: string): Post {
  const fullPath = join(directories[cat], `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: Post = {
    markdownBody: content,
    metadata: {
      slug: slug,
      title: data.title,
      type: data.type,
      year: data.year,
    },
  };

  if (data.url) post.metadata.url = data.url;
  if (data.note) post.metadata.note = data.note;
  if (data.externalSiteName)
    post.metadata.externalSiteName = data.externalSiteName;

  if (cat === 'works') {
    post.metadata.imgUrlList = getImageUrlList(slug);
  }

  return post;
}
