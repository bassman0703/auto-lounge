
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface JournalArticle {
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journal.html',
  styleUrl: './journal.scss',
})
export class Journal {
  readonly articles: JournalArticle[] = [
    {
      category: 'მოვლა',
      readTime: '5 წთ',
      title: 'კერამიკა თუ ცვილი: რა სჭირდება თქვენს ავტომობილს?',
      description:
        'გაიგეთ განსხვავება ორ პოპულარულ დაცვას შორის და შეარჩიეთ თქვენი ავტომობილისთვის შესაფერისი.',
      image: '/images/services/ceramic.jpg',
      slug: 'ceramic',
    },
    {
      category: 'სალონი',
      readTime: '4 წთ',
      title: 'როგორ მოვუაროთ ტყავის სალონს ზამთარში',
      description:
        'მარტივი, ეფექტური და პრაქტიკული რჩევები ტყავის ზედაპირის სისუფთავისა და მდგომარეობის შესანარჩუნებლად.',
      image: '/images/services/interior.jpg',
      slug: 'interior',
    },
    {
      category: 'დაცვა',
      readTime: '3 წთ',
      title: 'მინების დაბურვა: რა უნდა იცოდეთ კანონის შესახებ',
      description:
        'დასაშვები პროცენტების, ფირების ტიპებისა და სწორი შერჩევის შესახებ მნიშვნელოვანი ინფორმაცია.',
      image: '/images/services/glass.jpg',
      slug: 'glass',
    },
  ];
}
