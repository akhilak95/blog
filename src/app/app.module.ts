import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    ToastrModule.forRoot() ,
    RouterModule.forRoot([
       {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'about',component:AboutComponent},
        {path:'create',component:BlogCreateComponent},
        {path:'blog/:blogId',component:BlogViewComponent},
        {path:'edit/:blogId',component:BlogEditComponent},
        {path:'**',component:NotFoundComponent},
        

    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
