import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { 
    console.log("blog service constructor called.");
  }
}
