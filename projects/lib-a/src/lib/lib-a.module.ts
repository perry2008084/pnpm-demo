import { NgModule } from '@angular/core';
import { LibBModule } from 'lib-b';
import { LibAComponent } from './lib-a.component';

@NgModule({
  declarations: [
    LibAComponent
  ],
  imports: [
    LibBModule,
  ],
  exports: [
    LibAComponent
  ]
})
export class LibAModule { }
