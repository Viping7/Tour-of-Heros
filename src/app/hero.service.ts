import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
  private heroesUrl = 'api/heroes';    
constructor(private http:Http){}    
getHeros():Promise<Hero[]>{
    return this.http.get(this.heroesUrl).toPromise().then(response=>response.json().data as Hero[]).catch(this.errorhandle);
}
private errorhandle(error:any):Promise<any>{
    console.log("an error occured"+error);
    return Promise.reject(error.message || error);

}    
getHero(id):Promise<Hero>{
    const url=`${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise().then(response=>response.json().data as Hero).catch(this.errorhandle);
}
private headers = new Headers({'Content-Type': 'application/json'});
update(hero:Hero):Promise<Hero>{
     const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise().then(()=>hero).catch(this.errorhandle);
}    
}