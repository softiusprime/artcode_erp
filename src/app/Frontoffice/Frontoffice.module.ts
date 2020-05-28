import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontofficeRoutingModule } from './Frontoffice-routing.module';
import { calllogComponent } from './calllog/calllog.component';
@NgModule({
  declarations: [calllogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule {
}





