import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, 
		 MatInputModule, 
		 MatCheckboxModule, 
		 MatRadioModule,
		 MatSlideToggleModule } from '@angular/material';

const MATERIAL = [
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatSlideToggleModule
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
