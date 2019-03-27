import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogData } from '../blog-data';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs: BlogData[];

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  ngOnDestroy() {
  }

  public getAllBlogs():any {
    this.allBlogs = this.blogService.getAllBlogs().subscribe(
      (data) =>{
        this.allBlogs = data["data"];
      },
      (error) =>{
        console.log("Error Occurred");
        console.log(error.errorMessage);
      }
    );
  }
}

