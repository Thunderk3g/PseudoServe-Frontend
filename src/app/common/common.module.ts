import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonRoutingModule } from './common.routing.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, CommonRoutingModule],
})
export class CommonModule { }
