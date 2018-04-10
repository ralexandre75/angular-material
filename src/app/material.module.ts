import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

const MATERIAL = [
		MatFormFieldModule,
		MatInputModule
	]

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports : MATERIAL,
  declarations: []
})
export class MaterialModule { }
