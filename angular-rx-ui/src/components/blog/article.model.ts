import { Picture } from "./picture.model";
import { Tag } from "../tag/tag.model";
import { Category } from "./category.model";
import { Author } from "./author.model";

export class Article {    
    id: number;
    body: string;
    excerpt: string;
    title: string;
    shortTitle: string;
    slug: string;
    promoImage: Picture;
    featuredImage: Picture;
    author: Author;
    categories: Array<Category> = [];
    tags: Array<Tag> = [];
}