import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdcAppBarModule, MdcButtonModule, MdcTypographyModule} from '@angular-mdc/web';

@NgModule({
  imports: [
    CommonModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcAppBarModule,
  ],
  exports: [
    MdcTypographyModule,
    MdcButtonModule,
    MdcAppBarModule,
  ],
  declarations: []
})
export class MaterialModule { }
