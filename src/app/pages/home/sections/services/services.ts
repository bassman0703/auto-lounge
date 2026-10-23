
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services: ServiceItem[] = [
    {
      number: '01',
      title: 'ავტომობილის პოლირება',
      description:
        'ნაკაწრებისა და პოლირების დეფექტების მოცილება, საღებავის სიღრმისა და ბზინვარების აღდგენა.',
      image: '/images/services/polishing.jpg',
      link: '/services/polishing',
    },
    {
      number: '02',
      title: 'სალონის ქიმწმენდა',
      description:
        'ტყავის, ქსოვილის, პლასტმასის და სალონის სხვა ზედაპირების ღრმა წმენდა.',
      image: '/images/services/interior.jpg',
      link: '/services/interior-cleaning',
    },
    {
      number: '03',
      title: 'კერამიკული დაცვა',
      description:
        'მყარი, მბზინავი ფენა, რომელიც საღებავის ზედაპირს გარე ზემოქმედებისგან იცავს.',
      image: '/images/services/ceramic.jpg',
      link: '/services/ceramic-coating',
    },
    {
      number: '04',
      title: 'მინების დაბურვა',
      description:
        'პრემიუმ ფირები UV-სხივებისგან და სინათლისგან დაცვისთვის.',
      image: '/images/services/glass.jpg',
      link: '/services/glass-treatment',
    },
  ];
}
