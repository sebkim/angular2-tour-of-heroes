import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }
  goBack() {
    window.history.back();
  }
}
