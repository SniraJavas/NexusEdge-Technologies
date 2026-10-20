import { Component, signal, computed } from '@angular/core';
import { PROJECTS } from '../data';

@Component({
  standalone: true,
  template: `
  <section><div class="wrap">
    <h1>Founder-led, enterprise-trained</h1>
    <div class="grid g2 founder">
      <div>
        <h2>Sinikiwe Nangoku Jumba</h2>
        <p>Founder and Managing Director. Fullstack software engineer with 8 years of experience and a BSc in Computer Science and Information Systems from the University of the Western Cape (2018).</p>
        <p style="margin-top:12px">He started Nexus Edge because too many startups, schools and departments get let down by partners who disappear after go-live or oversell. He stays hands-on in every engagement.</p>
      </div>
      <div class="panel"><h3>Core stack</h3>
        <p>C# / .NET Core, React / React Native, Angular, Docker / Kubernetes, Azure Cloud &amp; Azure AI, SQL Server, RESTful APIs, enterprise SDLC.</p></div>
    </div>

    <h2 style="margin-top:64px">Track record</h2>
    <div class="filters" role="group" aria-label="Filter by sector">
      @for (s of sectors; track s) {
        <button [class.on]="sector() === s" (click)="sector.set(s)">{{ s }}</button>
      }
    </div>
    <div class="grid g2">
      @for (p of shown(); track p.client) {
        <article class="panel">
          <h3>{{ p.client }}</h3>
          <p class="meta">{{ p.sector }}, {{ p.period }}</p>
          <p>{{ p.scope }}</p><p class="tech">{{ p.tech }}</p>
        </article>
      }
    </div>
  </div></section>`,
  styles: [`
    .founder{margin-top:32px}
    .filters{display:flex;gap:10px;flex-wrap:wrap;margin:8px 0 24px}
    .filters button{border:1.5px solid var(--navy);background:transparent;color:var(--navy);border-radius:999px;padding:6px 18px;font:inherit;cursor:pointer}
    .filters button.on{background:var(--navy);color:#fff}
    .meta{color:var(--muted);font-size:.92rem;margin-bottom:8px}.tech{margin-top:10px;font-weight:600;color:var(--wine);font-size:.92rem}`]
})
export class AboutComponent {
  sectors = ['All', ...new Set(PROJECTS.map(p => p.sector))];
  sector = signal('All');
  shown = computed(() => this.sector() === 'All' ? PROJECTS : PROJECTS.filter(p => p.sector === this.sector()));
}
