import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    MenuComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    MenuComponent,
    ButtonComponent
  ]
})
export class CoreModule { }
