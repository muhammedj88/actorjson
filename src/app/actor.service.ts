import { Http } from '@angular/http';
import { Actor } from './Actor';
import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders,
           HttpParams,
           HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ActorService {

  // private actorsUrl = 'http://api.myjson.com/bins/jm75e';  // URL to web api
    private actorsUrl = 'http://localhost:8080/SakilaSystem/rest/actor';  // URL to web api
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private http1: Http) { }
    actors: Actor[];

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.actorsUrl);

    /*.pipe(
      map(response => response._embedded.actors),
      tap(actors => this.log(`fetched actors`))
    );*/
}

  /*private log(message: string) {
    this.messageService.add('ActorService: ' + message);
  }*/

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


