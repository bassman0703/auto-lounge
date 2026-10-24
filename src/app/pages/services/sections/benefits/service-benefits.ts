
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-benefits',
  standalone: true,
  templateUrl: './service-benefits.html',
  styleUrl: './service-benefits.scss',
})
export class ServiceBenefits {
  splitPosition = 50;
  private dragging = false;

  onPointerDown(event: PointerEvent): void {
    this.dragging = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) return;

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const position = ((event.clientX - rect.left) / rect.width) * 100;

    this.splitPosition = Math.min(100, Math.max(0, position));
  }

  onPointerUp(): void {
    this.dragging = false;
  }

  onPointerLeave(event: PointerEvent): void {
    if (event.buttons === 0) {
      this.dragging = false;
    }
  }

  moveSplit(amount: number): void {
    this.splitPosition = Math.min(
      100,
      Math.max(0, this.splitPosition + amount),
    );
  }
}
