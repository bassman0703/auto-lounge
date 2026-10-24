
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  splitPosition = 50;
  private dragging = false;

  readonly project = {
    title: 'Porsche 911 Carrera S',
    description: 'სრული პოლირება + კერამიკული დაცვა · 4 დღე',
    beforeImage: '/images/projects/porsche-before.jpg',
    afterImage: '/images/projects/porsche-after.jpg',
    current: '01',
    total: '06',
  };

  onPointerDown(event: PointerEvent): void {
    this.dragging = true;

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);

    event.preventDefault();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) return;

    const comparison = event.currentTarget as HTMLElement;
    const rect = comparison.getBoundingClientRect();

    if (!rect.width) return;

    const position = ((event.clientX - rect.left) / rect.width) * 100;
    this.splitPosition = Math.min(100, Math.max(0, position));
  }

  onPointerUp(): void {
    this.dragging = false;
  }

  onKeyMove(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.splitPosition = Math.max(0, this.splitPosition - 3);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.splitPosition = Math.min(100, this.splitPosition + 3);
    }
  }
}
