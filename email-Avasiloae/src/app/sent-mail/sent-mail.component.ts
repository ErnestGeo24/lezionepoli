import { Component,Input } from '@angular/core';
import { email } from '../mail.models';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mailozza !: email;
}
