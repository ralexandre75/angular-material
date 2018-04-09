import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {  } from '@angular/material';

const MATERIAL = [
		
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
