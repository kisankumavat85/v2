export interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: number;
  isFeatured: boolean;
  isCompleted: boolean;
}

export interface PostMetadata extends Frontmatter {
  slug: string;
}
