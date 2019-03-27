import { Component, OnInit } from '@angular/core';
import { BlogData } from '../blog-data';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent implements OnInit {
  public newBlog: BlogData;
  public possibleCategories = ["Action", "Drama", "Melodrama", "Horror", "Technology", "Science"];

  constructor(
    private router: Router, 
    private blogService: BlogService) { 
    this.newBlog = new BlogData("0", "", "", [""], "", "", false, 0, "", "", "");
  }

  ngOnInit() {
  }

  public createBlog(): any{
    let blogData = {
      title: this.newBlog.title,
      description: this.newBlog.description,
      blogBody: this.newBlog.bodyHtml,
      category: this.newBlog.category,
    };
    console.log(blogData);

    this.blogService.createBlog(blogData).subscribe(
      (data) => {
        console.log(data.data);
        setTimeout( ()=>{
          this.router.navigate(['/blog', data.data.blogId]);
        }, 2000);
      },
      (error) => {
        console.log("Error occured while creating blog");
        console.log(error.errorMessage);
      }
    );
    
  }
}
