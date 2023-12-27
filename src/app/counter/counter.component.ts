import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="flex justify-center">
    <p class="flex justify-center mt-5 mb-5
        box-border h-45 w-40 pb-5 border-4
        bg-yellow-200
        text-lime-900 text-9xl
        text-center">
      {{ counter }}</p>
    </div>

    <div class="flex justify-evenly mt-4 mb-4">
      <button
        class="font-fontContador text-5xl bg-[#9AD0C2] hover:bg-[#2D9596] text-white font-bold py-6 px-8 rounded"
        (click)="increaseBy(-1)"
      >-</button>

      <button
        class=" font-fontContador text-5xl bg-[#2D9596] hover:bg-[#9AD0C2] text-white font-bold py-6 px-12 rounded"
        (click)="resetCounter()">
      Reset</button>

      <button
        class="font-fontContador text-5xl bg-[#9AD0C2] hover:bg-[#2D9596] text-white font-bold py-6 px-8 rounded"
        (click)="increaseBy(+1)">
      +</button>
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
