import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPLIANCE } from '../data';

@Component({
  standalone: true, imports: [RouterLink],
  template: `
  <section><div class="wrap">
    <h1>Tenders &amp; compliance</h1>
    <p class="intro">We are available to bid for custom software, mobile app, website development and maintenance, IT technical support, and supply of technology equipment to schools, startups and government entities.</p>
    <h2>Compliance pack</h2>
    <div class="table">
      @for (c of items; track c.item) {
        <div class="row">
          <div><strong>{{ c.item }}</strong><br><span class="note">{{ c.note }}</span></div>
          <span class="pending" [class.ok]="c.status === 'Ready'">{{ c.status }}</span>
        </div>
      }
    </div>
    <h2 style="margin-top:56px">Tender desk <span class="pending">Coming soon</span></h2>
    <p>This section will list open opportunities we are tracking and let procurement officers request our documents directly. For now, email us and we’ll send the pack.</p>
    <p style="margin-top:20px"><a routerLink="/contact" class="btn">Request compliance documents</a></p>
  </div></section>`,
  styles: [`.intro{margin:18px 0 40px;font-size:1.15rem}
    .row{display:flex;justify-content:space-between;gap:20px;align-items:center;background:#fff;padding:16px 22px;border-bottom:1px solid var(--line)}
    .note{color:var(--muted);font-size:.92rem}`]
})
export class TendersComponent { items = COMPLIANCE; }
