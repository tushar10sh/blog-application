import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogData } from '../blog-data';
import { BlogService } from '../blog.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public allBlogs: BlogData[] = [
    new BlogData("1", "2019-03-24T12:13:49.303Z", "2019-03-24T12:13:49.303Z", ["Comedy", "Humour", "Quick Laughter"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "First Blog"),
    new BlogData("2", "2019-02-24T12:13:49.303Z", "2019-02-24T12:13:49.303Z", ["Horror", "Chill down the spine"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Second Blog"),
    new BlogData("3", "2019-01-24T12:13:49.303Z", "2019-01-24T12:13:49.303Z", ["Drama"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Third Blog")
  ];
  public currentBlog: BlogData;

  constructor(
    private _route: ActivatedRoute, 
    private router: Router, 
    private blogService: BlogService,
    private location: Location,
    private toastr: ToastrService) { 
  }

  ngOnInit() {
    let currentBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(currentBlogId); 
    this.getSingleBlogInformation(currentBlogId);
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    
    this.currentBlog = this.blogService.getSingleBlogInformation(currentBlogId).subscribe(
      (data) =>{
        this.currentBlog = data["data"];
      },
      (error) =>{
        console.log(error.errorMessage);
      }
    );
  }

  public deleteBlog(): any {
    this.blogService.deleteBlog(this.currentBlog.blogId).subscribe(
      (data) => {
        this.toastr.success("Blog Deleted successfully", "Deleted", {
          timeOut: 2000
        });
        setTimeout( () => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      (error) => {
        this.toastr.error("Error occurred while deleting blog", "Error", {
          timeOut: 2000
        });
        console.log(error.errorMessage);
      }
    );
  }

  public goBack(): any {
    this.location.back();
  }
}
