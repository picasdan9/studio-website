import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { Post, PostsDb } from './models';

const posts: PostsDb = {
  text: {},
  work: {}
}

const workingDirectory = process.cwd()
const directories: ({[key: string]: string}) = {
  text: join(workingDirectory, '_texts'),
  work: join(workingDirectory, '_works')
}

export function getPostSlugs(table: string): string[] {
  return fs.readdirSync(directories[table]).map((filename: string) => filename.replace(/\.md$/, ''));
}

export function getPostBySlug(table: string, slug: string): Post {
  if (!(slug in posts[table])) {
    posts[table][slug] = retrievePostBySlug(table, slug);
  }
  return posts[table][slug]
}

export function getAllPosts(table: string): Post[] {
  return getPostSlugs(table)
    .map(slug => getPostBySlug(table, slug));
}

export function getAllPostMetadata(table: string) {
  return getAllPosts(table).map(post => post.metadata)
}


function retrievePostBySlug(table: string, slug: string): Post {
  const fullPath = join(directories[table], `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const post: Post = {
    markdownBody: content,
    metadata: {
      slug: slug,
      title: data.title,
      year: data.year,
    }
  }
  if (table === 'text') {
    if (data.type) 
      post.metadata.type = data.type
    if (data.externalSiteName && data.externalSiteUrl)
      post.metadata.externalSite = {
        name: data.externalSiteName,
        url: data.externalSiteUrl
      }
  } else if (table === 'work') {
    post.metadata.images = data.images
  }

  return post
}
