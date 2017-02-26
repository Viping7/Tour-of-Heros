import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-hero';

@Injectable()
export class HeroService{
getHeros():Promise<Hero[]>{
        return Promise.resolve(HEROS);
}
getHero(id):Promise<Hero>{
    return this.getHeros().then(heros=>heros.find(hero=>hero.id===id)); 
}    
}