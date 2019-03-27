import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';

import { BlogService } from '../blog.service';
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog: BlogData;
  public possibleCategories = ["Action", "Drama", "Melodrama", "Horror", "Technology", "Science"];

  constructor(
    private _route: ActivatedRoute, 
    private router: Router, 
    private blogService: BlogService,
    private toastr: ToastrService) { 
      this.currentBlog = new BlogData("0", "", "", [""], "", "", false, 0, "", "", "");
    }

  ngOnInit() {
    let currentBlogId = this._route.snapshot.paramMap.get('blogId');
    this.getSingleBlogInformation(currentBlogId);
  }

  public getSingleBlogInformation(currentBlogId: string) {
    this.currentBlog = this.blogService.getSingleBlogInformation(currentBlogId).subscribe(
      (data) => {
        this.currentBlog = data.data;
      },
      (error) => {
        this.toastr.error("Error occurred while getting blog information", "Error", {
          timeOut: 2000
        });
        console.log(error.errorMessage);
      }
    );
  }

  public editBlog(): any {
    this.blogService.editBlog(this.currentBlog).subscribe(
      (data) => {
        this.toastr.success("Blog Edited Successfully", "Edited", {
          timeOut: 2000
        });
        setTimeout( ()=> {
        this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000);
      },
      (error) => {
        this.toastr.error("Error occurred while editing blog", "Error", {
          timeOut: 2000
        });
        console.log(error.errorMessage);
      }
    );
  }

}
