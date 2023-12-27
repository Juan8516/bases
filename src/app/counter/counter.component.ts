import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3 class="font-fontEncabezado">Counter: {{ counter }}</h3>

    <div class="flex justify-evenly mt-4 mb-4">
      <button
        class="bg-[#9AD0C2] hover:bg-[#2D9596] text-white font-bold py-6 px-8 rounded"
        (click)="increaseBy(-1)"
      >-</button>
      <button class="bg-[#2D9596] hover:bg-[#9AD0C2] text-white font-bold py-6 px-12 rounded"(click)="resetCounter()">Reset</button>
      <button class="bg-[#9AD0C2] hover:bg-[#2D9596] text-white font-bold py-6 px-8 rounded" (click)="increaseBy(+1)">+</button>
    </div>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
