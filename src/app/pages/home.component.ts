import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PILLARS } from '../data';

@Component({
  standalone: true, imports: [RouterLink],
  template: `
  <section class="dark hero">
    <div class="wrap hero-grid">
      <div>
        <h1>Technology that stays after go-live.</h1>
        <p class="lead">Nexus Edge builds software and mobile apps, supplies devices, fixes websites and advises government on modernising its systems. You deal with a senior engineer from first call to final release.</p>
        <p class="cta"><a routerLink="/contact" class="btn">Start a project</a> <a routerLink="/tenders" class="btn ghost">Tenders &amp; compliance</a></p>
      </div>
      <div class="graph">
        <svg viewBox="0 0 600 400" role="group" aria-label="Nexus Edge service network">
          @for (p of pillars; track p.id) {
            <line x1="300" y1="200" [attr.x1]="300" [attr.y1]="200" [attr.x2]="p.x" [attr.y2]="p.y"
                  [class.live]="active().id === p.id" class="edge"/>
          }
          <circle cx="300" cy="200" r="46" class="core"/><circle cx="300" cy="200" r="64" class="halo"/>
          <text x="300" y="205" text-anchor="middle" class="core-t">Nexus</text>
          @for (p of pillars; track p.id) {
            <g class="node" tabindex="0" role="button" [attr.aria-label]="p.title"
               [class.live]="active().id === p.id"
               (mouseenter)="active.set(p)" (focus)="active.set(p)" (click)="active.set(p)">
              <circle [attr.cx]="p.x" [attr.cy]="p.y" r="14"/>
              <text [attr.x]="p.x" [attr.y]="p.y + (p.y < 200 ? -26 : 38)" text-anchor="middle">{{ p.title }}</text>
            </g>
          }
        </svg>
        <div class="detail" aria-live="polite">
          <h3>{{ active().title }}</h3><p>{{ active().blurb }}</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <h2>Who we build for</h2>
      <div class="grid g3">
        <div class="panel"><h3>Startups</h3><p>An MVP, a mobile app or the laptops your team starts on, from a founder who has shipped AI and logistics SaaS products.</p></div>
        <div class="panel"><h3>Schools</h3><p>Devices, networking and digital systems that are configured, delivered and supported, not just dropped off.</p></div>
        <div class="panel"><h3>Government</h3><p>Delivery discipline from work on National Treasury’s Central Supplier Database: structured requirements, SQL reporting, controlled releases.</p></div>
      </div>
    </div>
  </section>`,
  styles: [`
    .hero{padding:72px 0 80px}
    .hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center}
    .hero h1{color:#fff}.lead{margin:22px 0 30px;font-size:1.15rem}
    .cta{display:flex;gap:14px;flex-wrap:wrap}
    .edge{stroke:#2B4378;stroke-width:2;stroke-dasharray:6 6;animation:flow 2.4s linear infinite;transition:stroke .2s}
    .edge.live{stroke:var(--crimson);stroke-width:3}
    @keyframes flow{to{stroke-dashoffset:-24}}
    .core{fill:var(--navy-2)}.halo{fill:none;stroke:var(--crimson);stroke-opacity:.5}
    .core-t{fill:#fff;font:700 18px var(--display)}
    .node{cursor:pointer}.node circle{fill:var(--crimson);transition:r .2s}
    .node text{fill:#DCE4F5;font:600 15px var(--body)}
    .node.live circle,.node:hover circle{r:19;fill:#fff;stroke:var(--crimson);stroke-width:5}
    .detail{border-top:2px solid var(--crimson);padding-top:14px;margin-top:6px;min-height:120px}
    @media(max-width:900px){.hero-grid{grid-template-columns:1fr}}`]
})
export class HomeComponent {
  pillars = PILLARS; active = signal(PILLARS[0]);
}
