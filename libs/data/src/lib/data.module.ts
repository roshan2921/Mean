import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ticket {
  id: number;
  title: string;
}

@NgModule({
  imports: [CommonModule],
})
export class DataModule {}