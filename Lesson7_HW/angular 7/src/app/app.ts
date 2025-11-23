import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Driver } from './moduls/driver';
import { Drivers } from './components/drivers/drivers';

@Component({
  selector: 'app-root',
  standalone: true,//////////////////////////////////////////////
  // imports: [RouterOutlet,Drivers],/////מחיקת הקובץ מודול
  imports: [Drivers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson7');
}
