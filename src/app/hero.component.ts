import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service'; 
import {Router} from '@angular/router'; 



@Component({
  selector: 'my-heros',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers:[HeroService]    
})
export class HeroComponent implements OnInit{
  title = 'Tour of Heros';
selectedHero:Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
    heros:Hero[];
  getHeros(): void {
    this.heroService.getHeros().then(heroes => this.heros = heroes);
  }

  ngOnInit(): void {
    this.getHeros();
  }
    
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/herodetail', this.selectedHero.id]);
  }
}  

