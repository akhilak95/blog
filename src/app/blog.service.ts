import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  public allBlogs =
[  
     {  
        "blogId":"1",
        "lastModified":"2018-06-20T17:09:11.743Z",
        "created":"2018-06-20T17:09:11.743Z",
        "tags":[ "fgvbh" ,"fghbj"

        ],
        "author":"Anurag  Ghosh",
        "category":"Action",
        "isPublished":true,
        "views":0,
        "bodyHtml":"<h1>lkmmlkm</h1>",
        "description":"jn",
        "title":"First Blog "
     },
     {  
        "blogId":"S1Nz3CFZm",
        "lastModified":"2018-06-22T02:16:44.516Z",
        "created":"2018-06-22T02:16:44.516Z",
        "tags":[  

        ],
        "author":"Pritesh Jakhotia",
        "category":"Technical",
        "isPublished":true,
        "views":0,
        "bodyHtml":"<h1>POSTMAN rocks!!!</h1>",
        "description":"This blog has been created directly using API and this description has been edited.",
        "title":"Blog using POSTMAN"
     },
     {  
      "blogId":"Hym89YXzm",
      "lastModified":"2018-06-29T10:30:34.764Z",
      "created":"2018-06-29T10:30:34.764Z",
      "tags":[  

      ],
      "author":"Sumit Manohar",
      "category":"[object Object]",
      "isPublished":true,
      "views":0,
      "bodyHtml":"kjefijpioejf",
      "description":"kewjfvipjwf",
      "title":"klewjfij"
   },
   {  
    "blogId":"Hym89YXzm",
    "lastModified":"2018-06-29T10:30:34.764Z",
    "created":"2018-06-29T10:30:34.764Z",
    "tags":[  

    ],
    "author":"Sumit Manohar",
    "category":"[object Object]",
    "isPublished":true,
    "views":0,
    "bodyHtml":"kjefijpioejf",
    "description":"kewjfvipjwf",
    "title":"klewjfij"
 },
 {  
  "blogId":"Hym89YXzm",
  "lastModified":"2018-06-29T10:30:34.764Z",
  "created":"2018-06-29T10:30:34.764Z",
  "tags":[  

  ],
  "author":"Sumit Manohar",
  "category":"[object Object]",
  "isPublished":true,
  "views":0,
  "bodyHtml":"kjefijpioejf",
  "description":"kewjfvipjwf",
  "title":"klewjfij"
},
{  
 "blogId":"Hym89YXzm",
 "lastModified":"2018-06-29T10:30:34.764Z",
 "created":"2018-06-29T10:30:34.764Z",
 "tags":[  

 ],
 "author":"Sumit Manohar",
 "category":"[object Object]",
 "isPublished":true,
 "views":0,
 "bodyHtml":"kjefijpioejf",
 "description":"kewjfvipjwf",
 "title":"klewjfij"
}
  ]

  public getAllBlogs(){
    return this.allBlogs
  }
public currentBlog
  public getsinglinformation(currentBlogId:any){
    for(let blog of this.allBlogs){
     
      if (blog.blogId == currentBlogId){
        this.currentBlog = blog;
        
      }
    }
   return this.currentBlog
      }
}
