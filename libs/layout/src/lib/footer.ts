import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/utils/src/lib/language.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly language = inject(LanguageService);
  readonly year = new Date().getFullYear();
}
