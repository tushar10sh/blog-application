import { Injectable } from '@angular/core';
import { BlogData } from './blog-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable , of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  private authToken = 'MjNhYzE0NDExNzI2MzE1YzkyMGMyYTI2ODk0NGEzMjk1MGRhMzBlNjE3NTEyYjBmZTI2NDgzNWJjNTM4YTdjNjY3ZDNlZDg0NjE1NDFkZDU2ZjJiMDNlZWFmNGU5ZGNmMDMyNzQzNzA1N2NlMzM4M2Y1YzgyYjhkMjU4ZWY3ZmJmNQ==';

  constructor(private _http: HttpClient) { 
  }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

  public getAllBlogs():any {
    let apiResponse = this._http.get(this.baseUrl+'all' + '?authToken=' + this.authToken);
    return apiResponse;
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    let apiResponse = this._http.get(this.baseUrl + 'view/' + currentBlogId + '?authToken=' + this.authToken);
    // console.log(apiResponse);
    return apiResponse;
  }

  public createBlog(blogData: any): any {
    let apiResponse = this._http.post(this.baseUrl + 'create/?authToken=' + this.authToken, blogData );
    return apiResponse;
  }

  public editBlog(blogData: BlogData): any {
    let apiResponse = this._http.put(this.baseUrl + blogData.blogId + '/edit?authToken=' + this.authToken, blogData );
    return apiResponse;
  }

  public deleteBlog(blogId: string): any {
    let apiResponse = this._http.post(this.baseUrl + blogId + '/delete?authToken=' + this.authToken, {});
    return apiResponse;
  }
}
