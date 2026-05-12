import { CommonModule } from '@angular/common';
import { consejosR } from '../../data/consejos';
import { Component } from '@angular/core';



@Component({
  selector: 'app-consejos',
  imports: [CommonModule],
  templateUrl: './consejos.component.html',
  styleUrl: './consejos.component.css'
})
export class ConsejosComponent {
  consejosR = consejosR
}
