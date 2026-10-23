
import { Component } from '@angular/core';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  readonly steps: ProcessStep[] = [
    {
      number: '01',
      title: 'კონსულტაცია',
      description:
        'ვისმენთ, რა გჭირდებათ და გირჩევთ საუკეთესო გადაწყვეტილებას.',
    },
    {
      number: '02',
      title: 'შეფასება',
      description:
        'ვამოწმებთ საღებავის მდგომარეობას და ზედაპირის მდგომარეობას.',
    },
    {
      number: '03',
      title: 'შესრულება',
      description:
        'ვმუშაობთ კონტროლირებად გარემოში, სტუდიურ განათებაში.',
    },
    {
      number: '04',
      title: 'ჩაბარება',
      description:
        'გაბარებთ ავტომობილს და გაგაცნობთ მოვლის რჩევებს.',
    },
  ];
}
