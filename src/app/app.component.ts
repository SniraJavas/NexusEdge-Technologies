import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { COMPANY } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <a class="skip" href="#main">Skip to content</a>
  <header>
    <div class="wrap bar">
      <a routerLink="/" class="brand" aria-label="Nexus Edge home">
        <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#13295A"/>
          <g stroke="#C8102E" stroke-width="1.4" fill="none"><path d="M20 8 28 14 20 20 12 14Z M20 20 28 26 20 32 12 26Z"/></g>
          <circle cx="20" cy="8" r="2.2" fill="#C8102E"/><circle cx="20" cy="32" r="2.2" fill="#C8102E"/>
          <circle cx="20" cy="20" r="3" fill="#fff"/>
        </svg>
        <span>Nexus <b>Edge</b></span>
      </a>
      <button class="burger" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Menu">Menu</button>
      <nav [class.open]="open()" (click)="open.set(false)">
        @for (l of links; track l.path) {
          <a [routerLink]="l.path" routerLinkActive="on" [routerLinkActiveOptions]="{exact: l.path === ''}">{{ l.label }}</a>
        }
        <a routerLink="/contact" class="btn">Start a project</a>
      </nav>
    </div>
  </header>
  <main id="main"><router-outlet/></main>
  <footer class="dark">
    <div class="wrap foot">
      <div>
        <h3>{{ c.name }}</h3>
        <p>Connecting businesses, schools and government to the edge of technology.</p>
      </div>
      <div>
        <p><a href="mailto:{{ c.email }}">{{ c.email }}</a></p>
        <p>{{ c.phones.join(' / ') }}</p>
        <p>{{ c.offices.join(' and ') }}</p>
      </div>
      <div><p>100% Black-owned South African enterprise</p><p>&copy; {{ year }} {{ c.name }}</p></div>
    </div>
  </footer>`,
  styles: [`
    .skip{position:absolute;left:-999px}.skip:focus{left:8px;top:8px;background:#fff;padding:8px;z-index:99}
    header{position:sticky;top:0;z-index:20;background:rgba(238,242,248,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
    .bar{display:flex;align-items:center;justify-content:space-between;height:68px}
    .brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-family:var(--display);font-size:1.35rem;font-weight:500;color:var(--navy)}
    .brand b{color:var(--crimson);font-weight:800}
    nav{display:flex;align-items:center;gap:26px}
    nav a:not(.btn){text-decoration:none;font-weight:500;padding:4px 0;border-bottom:2px solid transparent}
    nav a.on{border-color:var(--crimson)}
    nav .btn{padding:9px 20px}
    .burger{display:none;background:none;border:1px solid var(--navy);border-radius:8px;padding:6px 12px;font:inherit;color:var(--navy)}
    .foot{display:grid;gap:32px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
    footer{padding:56px 0}footer p{margin:.2em 0}
    @media(max-width:820px){
      .burger{display:block}
      nav{display:none;position:absolute;top:68px;left:0;right:0;flex-direction:column;align-items:flex-start;background:var(--mist);padding:20px 24px;border-bottom:1px solid var(--line)}
      nav.open{display:flex}
    }`]
})
export class AppComponent {
  c = COMPANY; year = new Date().getFullYear(); open = signal(false);
  links = [
    { path: 'services', label: 'Services' }, { path: 'about', label: 'Track record' },
    { path: 'tenders', label: 'Tenders' }, { path: 'contact', label: 'Contact' }
  ];
}
