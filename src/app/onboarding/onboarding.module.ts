import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding.routing.module';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { HeaderModule } from '../common/header/header.module';

@NgModule({
  declarations: [
    LoginComponent, // Declare LoginComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,// Correctly import HeaderModule here,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
