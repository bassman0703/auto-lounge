
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../libs/layout/src/lib/header';
import { Footer } from '../../libs/layout/src/lib/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
