import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public form: FormGroup;

	constructor(private fb: FormBuilder){}

	ngOnInit(){
		this.form = this.fb.group({
			email: ['', Validators.email ],
			checkbox: [''],
			radio: [''],
			slidetoggle: [''],
			select: [''],
			range: [''],
			date: ['']
		})
	}

	public getError(): string {
		if(this.form.get('email').hasError('email')){
			return `L'email n'est pas valide`
		}
	}

	public onSubmit() {
		console.log(this.form.value);
	}

}
