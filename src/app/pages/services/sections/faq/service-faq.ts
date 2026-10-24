
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-faq',
  standalone: true,
  templateUrl: './service-faq.html',
  styleUrl: './service-faq.scss',
})
export class ServiceFaq {
  openIndex: number | null = 0;

  readonly questions = [
    {
      question: 'რამდენ ხანს ძლებს კერამიკული დაცვა?',
      answer:
        'სწორი მოვლის შემთხვევაში 2-დან 5 წლამდე, არჩეული პაკეტის მიხედვით.',
    },
    {
      question: 'რამდენი დრო სჭირდება პროცესს?',
      answer:
        'დამუშავების დრო დამოკიდებულია ავტომობილის ზომაზე, საღებავის მდგომარეობასა და არჩეულ პაკეტზე. ზუსტ დროს წინასწარ შეგითანხმებთ.',
    },
    {
      question: 'როდის შეიძლება მანქანის რეცხვა?',
      answer:
        'პირველი რეცხვის დრო დამოკიდებულია გამოყენებულ კერამიკულ პროდუქტზე. დასრულებისას მოგცემთ კონკრეტულ რეკომენდაციას.',
    },
    {
      question: 'იცავს თუ არა ნაკაწრებისგან?',
      answer:
        'კერამიკული საფარი ამარტივებს მოვლას და იცავს ზედაპირს ზოგიერთი გარემო ფაქტორისგან, თუმცა ღრმა ნაკაწრებისა და ქვების დარტყმისგან სრულ დაცვას არ უზრუნველყოფს.',
    },
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
