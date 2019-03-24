import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogData } from '../blog-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs: BlogData[] = [
    new BlogData("1", "2019-03-24T12:13:49.303Z", "2019-03-24T12:13:49.303Z", ["Comedy", "Humour", "Quick Laughter"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "First Blog"),
    new BlogData("2", "2019-02-24T12:13:49.303Z", "2019-02-24T12:13:49.303Z", ["Horror", "Chill down the spine"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Second Blog"),
    new BlogData("3", "2019-01-24T12:13:49.303Z", "2019-01-24T12:13:49.303Z", ["Drama"], "Comedy", "Tushar", true, 0, "<p>This is first blog</p>", "Test blog", "Third Blog")
  ];

  constructor() { }

  ngOnInit() {
    console.log("Home ngOnInit called.");
  }

  ngOnDestroy() {
    console.log("Home component destroyed.");
  }
}

