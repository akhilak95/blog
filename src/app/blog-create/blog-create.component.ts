import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private toastr: ToastrService,public BloghttpService:BlogHttpService,private router:ActivatedRoute,private _route:Router) { }

  public blogTitle :string;
  public blogDescription :string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCatagories =["Comedy","Drama","Action","Technology"]
  ngOnInit() {
  }

  public createBlog(){

    let blogData ={
    title:this.blogTitle,
    description:this.blogDescription,
    blogBody:this.blogBodyHtml,
    category:this.blogCategory,}

    console.log(blogData)
    this.BloghttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created");
        console.log(data);
        this.toastr.success('Blog Created Successfully', 'Success');
        
      
      setTimeout(() =>{
        this._route.navigate(['/blog',data.data.blogId]);
      },1000)
      
      },
        error =>{
          console.log(error.errorMessage)
          console.log("some error")
          this.toastr.error('Something Went Wrong', 'Error');
        }
  
    )

  }
  
}


