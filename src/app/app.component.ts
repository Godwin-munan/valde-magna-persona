import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from './sharedmodules/shared.modules';

@Component({
  selector: 'valde-website',
  imports: [
    RouterOutlet,
    ...SHARED_IMPORTS
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
