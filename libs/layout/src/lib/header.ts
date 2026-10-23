import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../shared/utils/src/lib/language.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'lib-header',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly language = inject(LanguageService);
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
