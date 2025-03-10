import { CommonModule } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-condition',
  imports: [
    CommonModule
  ],
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.scss'
})
export class ConditionComponent {

  cards: any[] = [
    {
      id: 1,
      imageUrl: "/assets/images/coins.jpg",
      title: "Financial Barriers",
      description: "High costs prevent access to essential healthcare services, leading to untreated conditions and worsening health outcomes"
    },
    {
      id: 2,
      imageUrl: "/assets/images/women_pounding_grain.jpg",
      title: "Limited Awareness",
      description: "Lack of education on disease prevention results in increased susceptibility to life-threatening illnesses"
    },
    {
      id: 3,
      imageUrl: "/assets/images/child_and_older_sibling.jpg",
      title: "Inequality",
      description: "The disparities in healthcare access between these at-risk groups and the broader population are excessively large"
    }
  ]
  
  trackById(index: number, card: any): number {
    return card.id;
  }

}
