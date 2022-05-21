import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Metadata, Post } from './models';

const workingDirectory = process.cwd();
const directories: { [key: string]: string } = {
  texts: join(workingDirectory, '_texts'),
  images: join(workingDirectory, '_images'),
};

export function getPostSlugs(cat: string): string[] {
  return fs
    .readdirSync(directories[cat])
    .map((filename) => filename.replace(/\.md$/, ''));
}

export function getAllPosts(cat: 'texts' | 'images'): Post[] {
  return getPostSlugs(cat).map((slug) => getPostBySlug(cat, slug));
}

export function getAllPostMetadata(cat: 'texts' | 'images') {
  return getAllPosts(cat)
    .map((post) => post.metadata)
    .filter((metadata) => cat === 'texts' || 'coverImage' in metadata)
    .sort(metadataComparator);
}

export function getImageUrlList(slug: string) {
  try {
    return fs
      .readdirSync(join('public', 'images', slug, 'contents'))
      .filter(isImageFile)
      .sort()
      .map((filename) => join('/images', slug, 'contents', filename));
  } catch {
    return [];
  }
}

export function getPostBySlug(cat: 'texts' | 'images', slug: string): Post {
  const fullPath = join(directories[cat], `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: Post = {
    markdownBody: content,
    metadata: {
      slug: slug,
      title: data.title,
      type: data.type,
      timestamp: new Date(data.date).getTime(),
    },
  };

  if (data.coverImage) post.metadata.coverImage = data.coverImage;
  if (data.url) post.metadata.url = data.url;
  if (data.note) post.metadata.note = data.note;
  if (data.externalSiteName)
    post.metadata.externalSiteName = data.externalSiteName;

  if (cat === 'images') {
    post.metadata.imgUrlList = getImageUrlList(slug);
  }

  return post;
}

function metadataComparator(a: Metadata, b: Metadata): number {
  return b.timestamp - a.timestamp;
}

function isImageFile(filename: string): boolean {
  const split = filename.split('.');
  if (split.length < 2) return false;
  const fileExtension = split[split.length - 1].toLowerCase();
  return ['jpg', 'jpeg', 'png'].indexOf(fileExtension) > -1;
}
