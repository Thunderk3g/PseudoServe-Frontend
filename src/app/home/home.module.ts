import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'; // Ensure this path is correct
import { HeaderModule } from '../common/header/header.module'; // Adjust path as necessary
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent // Correctly declare HomeComponent here
  ],
  imports: [
    CommonModule,
    HeaderModule,// Correctly import HeaderModule here,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
