// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
  
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hospital } from './components/hospital/hospital';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hospital],
  templateUrl: './app.html'
})
export class App { }

