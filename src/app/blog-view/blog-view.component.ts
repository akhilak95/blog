import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
 
})
export class BlogViewComponent implements OnInit {
public currentBlog;

  constructor(private toastr: ToastrService,private _route:ActivatedRoute, private _router:Router,private blogService:BlogHttpService,public location: Location) { }

  ngOnInit() {
    
    let myblogId = this._route.snapshot.paramMap.get('blogId')
    this.currentBlog = this.blogService.getsinglinformation(myblogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"],
        
        error =>{
          console.log(error.errorMessage)
        }
      }
    )
   
  }

public deleteThisBlog():any{
  this.blogService.deleteBlog(this.currentBlog.blogId).subscribe(
    data=>{
      console.log(data);
      
      setTimeout(()=>{
        this._router.navigate(['/home']);
      },1000)
      this.toastr.success('Blog Deleted Successfully', 'Success');
    },
    error =>{
      this.toastr.error('Something Went Wrong', 'Error');
    }
    
  )
}
  
public goBackToPreviousPage():any{
  this.location.back();
}
  

}
