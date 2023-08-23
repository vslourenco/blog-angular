import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input() articleId: number = 0;
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
}
