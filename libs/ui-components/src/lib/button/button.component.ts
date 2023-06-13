import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 's-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {

  @Input({required: true}) text?: string
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}


