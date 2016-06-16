import { Tag } from "../tag/tag.model";
import { Category } from "../category/category.model";
import { Author } from "../author/author.model";

export class Article {    
    id: number;
    articleBody: string;
    excerpt: string;
    headline: string;
    alternativeHeadline: string;
    url: string;
    thumbnailUrl: string;
    image: Array<string>;
    author: Author;
    categories: Array<Category> = [];
    tags: Array<Tag> = [];
    datePublished: Date;
    dateModified: Date;
}