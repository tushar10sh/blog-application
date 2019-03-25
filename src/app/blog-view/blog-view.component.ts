import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogData } from '../blog-data';
import { delay } from 'q';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public allBlogs: BlogData[] = [
    new BlogData("1", "2019-03-24T12:13:49.303Z", "2019-03-24T12:13:49.303Z", ["Comedy", "Humour", "Quick Laughter"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "First Blog"),
    new BlogData("2", "2019-02-24T12:13:49.303Z", "2019-02-24T12:13:49.303Z", ["Horror", "Chill down the spine"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Second Blog"),
    new BlogData("3", "2019-01-24T12:13:49.303Z", "2019-01-24T12:13:49.303Z", ["Drama"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Third Blog")
  ];
  public currentBlog: BlogData;

  constructor(private _route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    let currentBlogId = this._route.snapshot.paramMap.get('blogId');
    this.getSingleBlogInformation(currentBlogId);
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    for( let blog of this.allBlogs ) {
      if ( blog.blogId == currentBlogId ) {
        this.currentBlog = blog;
        break;
      }
    }
  }
}
