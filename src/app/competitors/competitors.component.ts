import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-competitors',
  imports: [
    CommonModule
  ],
  templateUrl: './competitors.component.html',
  styleUrl: './competitors.component.scss'
})
export class CompetitorsComponent {

  cards: any[] = [
    {
      id: 1,
      imageUrl: "/assets/svg/purple_1_competitor_logoipsum.svg",
      title: "HealthAccess",
      description: "Provides basic healthcare services but lacks comprehensive community engagement",
      footer: "VMP offers targeted interventions and education, ensuring sustainable health improvements"
    },
    {
      id: 2,
      imageUrl: "/assets/svg/blue_2_competitor_logoipsum.svg",
      title: "MediCare Plus",
      description: "Focuses on urban areas, neglecting rural and underserved communities",
      footer: "VMP prioritizes reaching vulnerable populations, ensuring equitable healthcare access"
    },
    {
      id: 3,
      imageUrl: "/assets/svg/orange_3_competitor_logoipsum.svg",
      title: "Wellness Corp",
      description: "Offers wellness programs but lacks disease prevention education",
      footer: "VMP integrates education and prevention, reducing health disparities effectively"
    }
  ]
  
  trackById(index: number, card: any): number {
    return card.id;
  }

}
