import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Location} from '@angular/common';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(private toastr: ToastrService,private _route:ActivatedRoute, private _router:Router,private blogService:BlogHttpService) { }
  public currentBlog;
  public possibleCategories =["Comedy","Drama","Action","Technology"];
  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogService.getsinglinformation(myBlogId).subscribe(
      data =>{
        this.currentBlog = data["data"];
      },
      error =>{
        console.log("some error occured");
      }
    )
  }
  public editThisBlog():any{
    this.blogService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data =>{
        console.log("blog edited successfully");
        this.toastr.success('Blog Edited Successfully', 'Success');
        setTimeout(()=>{
          this._router.navigate(['/blog',this.currentBlog.blogId]);
        },1000),
        error =>{
          this.toastr.error('Something Went Wrong', 'Error');
        }
      }
    )
  }
}
