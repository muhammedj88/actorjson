import { ActorService } from './../actor.service';
import { Actor } from './../Actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor(private actorService: ActorService) { }

  getActors(): void {
    this.actorService.getActors().subscribe(p => {
      this.actors = p;
    });
    // this.actorService.getActors()
   // .subscribe(actors => this.actors = actors);
  }
  ngOnInit() {
    this.getActors();
  }

}
