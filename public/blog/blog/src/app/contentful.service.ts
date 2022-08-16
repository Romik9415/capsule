import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/observable/fromEvent';

import * as marked from 'marked';

@Injectable()
export class ContentfulService {

  [x: string]: any;
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  // console logs a response for debugging
  logContent(contentId) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry) )
  }
//   logListContent(query?: object) {
//     this.client.getEntry(Object.assign({
//       content_type: 'course'
//     }, query))
//      .then(entry => console.log(entry) )
//  }

//  retrieves content mapped to its data fields
  // getContent(contentId) {
  //   const promise = this.client.getEntry(contentId)
  //   return Observable.fromPromise(promise).map(entry => entry.fields)
  // }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'post'
    }, query))
      .then(res => res.items);
  }
  logPosts(query?: object) {
    this.client.getEntries(Object.assign({
      content_type: 'post'
    }, query))
      .then(res => console.log(res.items));
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md)
  }

}