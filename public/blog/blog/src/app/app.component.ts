import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentfulService } from './contentful.service';
import { createClient, Entry } from 'contentful';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['Users/romankhrupa/Developer/web-pages/space_mark_landpage/blog/blog/src/app/app.component.scss']
})
export class AppComponent implements OnInit {

  lesson$: Observable<any>;
  posts: Entry<any>[] = [];

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
   // this.contentful.logContent('some_id') // to console log the content for debugging
    //  this.contentful.logPosts()
    //  .then(entry => console.log(entry)

    //  this.contentfulService.getPosts()
    //  .then(posts => this.posts = posts);
    //this.contentful.logContent('9yWTYdYDCggae6AYGgg6e');
   //this.lesson$ = this.contentful.getContent('9yWTYdYDCggae6AYGgg6e')
  }

}
