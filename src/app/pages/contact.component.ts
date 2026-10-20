import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMPANY } from '../data';

@Component({
  standalone: true, imports: [FormsModule],
  template: `
  <section><div class="wrap grid g2">
    <div>
      <h1>Let’s talk</h1>
      <p class="intro">Tell us what you’re building, fixing or buying. You’ll hear back from the founder.</p>
      <p><strong>Email</strong><br><a href="mailto:{{ c.email }}">{{ c.email }}</a></p><br>
      <p><strong>Phone</strong><br>{{ c.phones.join(' / ') }}</p><br>
      <p><strong>Offices</strong><br>{{ c.offices.join(' and ') }}</p>
    </div>
    <div class="panel">
      <label for="n">Your name</label><input id="n" [(ngModel)]="name">
      <label for="t">I need help with</label>
      <select id="t" [(ngModel)]="topic">
        <option>Software or mobile app</option><option>Devices for my school or startup</option>
        <option>Fixing my website</option><option>Government technology advisory</option><option>A tender or quotation</option>
      </select>
      <label for="m">Message</label><textarea id="m" rows="5" [(ngModel)]="msg"></textarea>
      <button class="btn" (click)="send()">Open email to send</button>
      <p class="note">This opens your email app. A server-side form will replace it when the backend is added.</p>
    </div>
  </div></section>`,
  styles: [`.intro{margin:18px 0 32px;font-size:1.15rem}
    label{display:block;font-weight:600;margin:14px 0 4px}
    input,select,textarea{width:100%;padding:11px 12px;border:1.5px solid var(--line);border-radius:8px;font:inherit}
    button{margin-top:20px}.note{color:var(--muted);font-size:.88rem;margin-top:12px}`]
})
export class ContactComponent {
  c = COMPANY; name = ''; topic = 'Software or mobile app'; msg = '';
  send() {
    const body = `Hi Nexus Edge,\n\n${this.msg}\n\nRegards,\n${this.name}`;
    location.href = `mailto:${this.c.email}?subject=${encodeURIComponent(this.topic)}&body=${encodeURIComponent(body)}`;
  }
}
