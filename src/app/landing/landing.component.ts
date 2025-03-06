import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { VisionComponent } from "../vision/vision.component";
import { CommonModule } from '@angular/common';
import { ConditionComponent } from '../condition/condition.component';
import { SolutionComponent } from '../solution/solution.component';
import { MarketComponent } from '../market/market.component';
import { CompetitorsComponent } from '../competitors/competitors.component';
import { PartnersComponent } from '../partners/partners.component';
import { RevenueComponent } from '../revenue/revenue.component';
import { TeamComponent } from '../team/team.component';
import { FundsComponent } from '../funds/funds.component';
import { RoadMapComponent } from '../road-map/road-map.component';

@Component({
  selector: 'app-landing',
  imports: [
    CommonModule,
    HomeComponent,
    HeaderComponent,
    VisionComponent,
    ConditionComponent,
    SolutionComponent,
    MarketComponent,
    CompetitorsComponent,
    PartnersComponent,
    RevenueComponent,
    TeamComponent,
    FundsComponent,
    RoadMapComponent,
    FooterComponent,
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // When scrolling, add a shadow if scrollY > 0
    this.scrolled = window.scrollY > 0;
  }

}
