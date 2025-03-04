import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { VisionComponent } from "../vision/vision.component";

@Component({
  selector: 'app-landing',
  imports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    VisionComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
