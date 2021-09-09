import { Injectable } from '@angular/core';
import { dvh_Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class dvh_HeroService {
  
  constructor(private dvh_messageService: MessageService) { }
  get_dvh_Heroes(): Observable<dvh_Hero[]>{
    const dvh_list_hero = of(HEROES);
    this.dvh_messageService.add('HeroService: fetched heroes');
    return dvh_list_hero;
  }
}