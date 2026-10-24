
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-cta.html',
  styleUrl: './service-cta.scss',
})
export class ServiceCta {}
