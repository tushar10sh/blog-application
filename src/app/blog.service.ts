import { Injectable } from '@angular/core';
import { BlogData } from './blog-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = '';
  private authToken = '';

  constructor(private _http: HttpClient) { 
    console.log("blog service constructor called.");
  }

  public getAllBlogs():any {
    let apiResponse = this._http.get(this.baseUrl+'/all' + '?authToken=' + this.authToken);
    return apiResponse;
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    let apiResponse = this._http.get(this.baseUrl + currentBlogId + '?authToken=' + this.authToken)
    return apiResponse;
  }
}
