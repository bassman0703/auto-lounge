
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-packages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-packages.html',
  styleUrl: './service-packages.scss',
})
export class ServicePackages {
  readonly packages = [
    {
      name: 'ESSENTIAL',
      price: 'დან 600 ₾',
      duration: '1 წლიანი დაცვა',
      features: [
        'დეკონტამინაცია',
        'ერთსაფეხურიანი პოლირება',
        '1 ფენა კერამიკა',
      ],
      popular: false,
    },
    {
      name: 'SIGNATURE',
      price: 'დან 000 ₾',
      duration: '3 წლიანი დაცვა',
      features: [
        'დეკონტამინაცია',
        'ორსაფეხურიანი პოლირება',
        '2 ფენა კერამიკა',
        'დისკები და მინები',
      ],
      popular: true,
    },
    {
      name: 'PRESTIGE',
      price: 'დან 000 ₾',
      duration: '5 წლიანი დაცვა',
      features: [
        'სრული დეკონტამინაცია',
        'მრავალსაფეხურიანი პოლირება',
        '3 ფენა კერამიკა',
        'დისკები, მინები, სალონი',
      ],
      popular: false,
    },
  ];
}
