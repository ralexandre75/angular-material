import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs/hammer';
import { MatFormFieldModule, 
		 MatInputModule, 
		 MatCheckboxModule, 
		 MatRadioModule,
		 MatSlideToggleModule, 
		 MatSelectModule,
		 MatSliderModule,
		 MatDatepickerModule,
		 MatNativeDateModule,
		 MatAutocompleteModule } from '@angular/material';

const MATERIAL = [
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatSlideToggleModule,
		MatSelectModule,
		MatSliderModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatAutocompleteModule
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
