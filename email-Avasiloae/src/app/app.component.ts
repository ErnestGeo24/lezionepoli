import { Component, ComponentFactoryResolver } from '@angular/core';
import {email} from './mail.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore: email[] = [];
  nuovaMail(destinaraio: HTMLInputElement,oggetto: HTMLInputElement,corpo: HTMLInputElement): boolean{
    this.vettore.push(new email(destinaraio.value,oggetto.value,corpo.value))

    return false
  }
}
