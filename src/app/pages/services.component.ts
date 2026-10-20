import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PILLARS } from '../data';

@Component({
  standalone: true, imports: [RouterLink],
  template: `
  <section><div class="wrap">
    <h1>What we do</h1>
    <p class="intro">Four services that cover a client’s whole technology life: a first website, a custom platform, and the hardware the team works on.</p>
    <div class="grid g2">
      @for (p of pillars; track p.id) {
        <article class="panel">
          <h3>{{ p.title }}</h3><p>{{ p.blurb }}</p>
          <ul>@for (i of p.items; track i) {<li>{{ i }}</li>}</ul>
        </article>
      }
    </div>
    <p style="margin-top:36px"><a routerLink="/contact" class="btn">Tell us what you need</a></p>
  </div></section>`,
  styles: [`.intro{margin:18px 0 40px;font-size:1.15rem}ul{margin:14px 0 0 20px}li{margin:4px 0}`]
})
export class ServicesComponent { pillars = PILLARS; }
