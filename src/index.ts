import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SwingStackComponent} from './angular2-swing/swing-stack-component';
import {SwingCardComponent} from './angular2-swing/swing-card-component';

export * from './angular2-swing/swing-stack-component';
export * from './angular2-swing/swing-card-component';

export * from './angular2-swing/swing';

export * from './swing/card';
export * from './swing/direction';
export * from './swing/stack';
export * from './swing/utilities';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwingStackComponent,
    SwingCardComponent
  ],
  exports: [
    SwingStackComponent,
    SwingCardComponent
  ]
})
export class IonicSwingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicSwingModule
    };
  }
}
