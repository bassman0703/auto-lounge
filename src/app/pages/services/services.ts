
import { Component } from '@angular/core';
import {ServiceHero} from './sections/hero/service-hero';
import {ServiceProcess} from './sections/process/service-process';
import {ServicePackages} from './sections/packages/service-packages';
import {ServiceFaq} from './sections/faq/service-faq';
import {ServiceCta} from './sections/cta/service-cta';
import {ServiceBenefits} from './sections/benefits/service-benefits';



@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ServiceHero,
    ServiceProcess,
    ServiceBenefits,
    ServicePackages,
    ServiceFaq,
    ServiceCta,
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesPage {}
