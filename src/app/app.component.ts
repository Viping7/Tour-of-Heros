import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]    
})
export class AppComponent implements OnInit{
  title = 'Tour of Heros';
 constructor(private heroService:HeroService){
    
 }
heros:Hero[];       
getHeros(){
    this.heroService.getHeros().then(heros=>this.heros=heros);
} 
ngOnInit(){
    this.getHeros();
}
 onSelect=function(hero){
    this.selectedHero=hero;
}    
}
