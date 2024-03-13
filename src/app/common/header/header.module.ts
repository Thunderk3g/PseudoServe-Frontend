import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component'; // Make sure the path is correct

@NgModule({
  declarations: [
    HeaderComponent // This component is declared here
  ],
  imports: [
    CommonModule // Only modules should be in imports
  ],
  exports: [
    HeaderComponent // Exporting HeaderComponent so it can be used in other modules
  ]
})
export class HeaderModule { }
