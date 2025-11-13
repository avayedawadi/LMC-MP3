import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentData {
  title: string;
  description?: string;
  keywords?: string[];
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentBySlug(slug: string): ContentData | null {
  try {
    let filePath: string;

    if (slug === '' || slug === '/') {
      filePath = path.join(contentDirectory, 'introduction.md');
    } else {
      const cleanSlug = slug.replace(/^\//, '').replace(/\/$/, '');
      filePath = path.join(contentDirectory, `${cleanSlug}.md`);
    }

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || 'Untitled',
      description: data.description,
      keywords: data.keywords || [],
      content,
    };
  } catch (error) {
    console.error(`Error loading content for slug ${slug}:`, error);
    return null;
  }
}

export function getAllContentSlugs(): string[] {
  const slugs: string[] = [];

  function traverseDirectory(dir: string, prefix: string = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDirectory(fullPath, `${prefix}/${file}`);
      } else if (file.endsWith('.md')) {
        const slug = `${prefix}/${file.replace('.md', '')}`;
        slugs.push(slug);
      }
    }
  }

  traverseDirectory(contentDirectory);
  return slugs;
}
