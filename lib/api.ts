import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { Post, TextsDb } from './models';

let postsTable: TextsDb = {}

const textsDirectory = join(process.cwd(), '_texts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(textsDirectory).map((filename: string) => filename.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): Post {
  if (!(slug in postsTable)) {
    postsTable[slug] = retrievePostBySlug(slug);
  }
  return postsTable[slug]
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((post1, post2) => post1.metadata.year - post2.metadata.year);
}

export function getAllPostMetadata() {
  return getAllPosts().map(post => post.metadata)
}


function retrievePostBySlug(slug: string): Post {
  const fullPath = join(textsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    markdownBody: content,
    metadata: {
      slug: slug,
      title: data.title,
      type: data.type || '',
      year: data.year,
      externalSite: {
        name: data.externalSiteName || '',
        url: data.externalSiteUrl || ''
      }
    }
  }
}
