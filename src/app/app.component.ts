import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EntityValueDefinitionComponent } from './entity-value-definition/entity-value-definition.component';
import { FormsModule } from '@angular/forms';
import { Pipe } from 'stream';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EntityValueDefinitionComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pages';
}
