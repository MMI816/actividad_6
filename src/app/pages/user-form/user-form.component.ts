import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  modelForm: FormGroup;

  constructor() {
    this.modelForm = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required, Validators.minLength(3), 
        Validators.maxLength(50)]),
      last_name: new FormControl(null, [
        Validators.required, Validators.minLength(3), 
        Validators.maxLength(50)]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]), 
      image: new FormControl(null, [
        Validators.required]),
    })
  }

  getDataForm(): any {
    console.log(this.modelForm.value);
    this.modelForm.reset();
  }

  checkControl (formControlName:string, validador:string): boolean | undefined {
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched;
  }
}

