
import { Component } from '@angular/core';

import { Hero } from './sections/hero/hero';
import { Intro } from './sections/intro/intro';
import { Services } from './sections/services/services';
import { Projects } from './sections/projects/projects';
import { Process } from './sections/process/process';
import { Journal } from './sections/journal/journal';
import { Cta } from './sections/cta/cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Intro,
    Services,
    Projects,
    Process,
    Journal,
    Cta,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
