import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { ThrowStmt } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlogs;
  public baseURL = "https://blogapp.edwisor.com/api/v1/blogs";
  constructor(private _http: HttpClient) {
    console.log()
  }
  public getAllBlogs() {
    let myresponse = this._http.get(this.baseURL + '/all?authToken=YTM2NDBlMDRlOTA5NzMwZmY1MGQzYjc5ODAxMTI3MTE4Mzk5ODFkZDExZmMxNDg2YTZjNjk3NTIxN2JjMTg5MzY2NTZiY2RmNWI2YTk5YWY2YmY2OGRiNjgyOGJlZjhhMzgyMzdiMjczZTgwNzM2YzkwYmEwNjRiYmZlMmEwMzgyMw==')
    console.log(myresponse)
    return myresponse
  }
  public currentBlog;
  public getsinglinformation(currentBlogId: any) {
    this.currentBlog = this._http.get(this.baseURL + '/view' + '/' + currentBlogId + '?authToken=YTM2NDBlMDRlOTA5NzMwZmY1MGQzYjc5ODAxMTI3MTE4Mzk5ODFkZDExZmMxNDg2YTZjNjk3NTIxN2JjMTg5MzY2NTZiY2RmNWI2YTk5YWY2YmY2OGRiNjgyOGJlZjhhMzgyMzdiMjczZTgwNzM2YzkwYmEwNjRiYmZlMmEwMzgyMw==')
    console.log(this.currentBlog)
    return this.currentBlog;

  }

  public createBlog(blogDaa): any {
    let myresponse = this._http.post(this.baseURL + '/create' + '?authToken=YTM2NDBlMDRlOTA5NzMwZmY1MGQzYjc5ODAxMTI3MTE4Mzk5ODFkZDExZmMxNDg2YTZjNjk3NTIxN2JjMTg5MzY2NTZiY2RmNWI2YTk5YWY2YmY2OGRiNjgyOGJlZjhhMzgyMzdiMjczZTgwNzM2YzkwYmEwNjRiYmZlMmEwMzgyMw==', blogDaa)
    console.log(myresponse)
    return myresponse
  }

  public deleteBlog(blogId): any {
    let data = {}
    let myresponse = this._http.post(this.baseURL + '/' + blogId + '/delete' + '?authToken=YTM2NDBlMDRlOTA5NzMwZmY1MGQzYjc5ODAxMTI3MTE4Mzk5ODFkZDExZmMxNDg2YTZjNjk3NTIxN2JjMTg5MzY2NTZiY2RmNWI2YTk5YWY2YmY2OGRiNjgyOGJlZjhhMzgyMzdiMjczZTgwNzM2YzkwYmEwNjRiYmZlMmEwMzgyMw==', data)

    console.log(myresponse)
    return myresponse
  }

  public editBlog(blogId, blogData): any {
    let myresponse = this._http.put(this.baseURL + '/' + blogId + '/edit' + '?authToken=YTM2NDBlMDRlOTA5NzMwZmY1MGQzYjc5ODAxMTI3MTE4Mzk5ODFkZDExZmMxNDg2YTZjNjk3NTIxN2JjMTg5MzY2NTZiY2RmNWI2YTk5YWY2YmY2OGRiNjgyOGJlZjhhMzgyMzdiMjczZTgwNzM2YzkwYmEwNjRiYmZlMmEwMzgyMw==', blogData)
    console.log(myresponse)


    return myresponse
  }
}
