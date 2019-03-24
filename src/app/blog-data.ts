export class BlogData {
    public blogId: string;
    public lastModified: string;
    public created: string;
    public tags: string[];
    public category: string;
    public author: string;
    public isPublished: boolean;
    public views: number;
    public bodyHtml: string;
    public description: string;
    public title: string;
    constructor(
      blogId: string, 
      lastModified: string,
      created: string,
      tags: string[],
      category: string,
      author: string,
      isPublished: boolean,
      views: number,
      bodyHtml: string, 
      description: string,
      title: string) {
        this.blogId = blogId;
        this.lastModified = lastModified;
        this.created = created;
        this.tags = tags;
        this.category = category;
        this.author = author;
        this.isPublished = isPublished;
        this.views = views;
        this.bodyHtml = bodyHtml;
        this.description = description;
        this.title = title;
    }
  }