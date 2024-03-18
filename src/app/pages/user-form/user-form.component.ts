import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  modelForm: FormGroup;
  usersServices = inject(UsersService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

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

  ngOnInit() {
    this.activatedRoute.params.subscribe(async(params: any) => {
      if(params.id){
        const response = await this.usersServices.getById(params.id);
        this.modelForm = new FormGroup({
          _id:new FormControl(response._id),
          first_name: new FormControl(response.first_name, [
            Validators.required, Validators.minLength(3), 
            Validators.maxLength(50)]),
          last_name: new FormControl(response.last_name, [
            Validators.required, Validators.minLength(3), 
            Validators.maxLength(50)]),
          email: new FormControl(response.email, [
            Validators.required,
            Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]), 
          image: new FormControl(response.image, [
            Validators.required]),
        })
      }
    
    })
  }


  async getDataForm(): Promise<void> {
    if(this.modelForm.value._id){
      const response = await this.usersServices.update(this.modelForm.value);
      if(response.id){
        alert('Usuario actualizado con éxito')
        this.router.navigate(['/users'])
      }else {
        alert('Error al modificar el usuario, inténtalo de nuevo')
      }

    }else {
      const response = await this.usersServices.insert(this.modelForm.value);
      this.modelForm.reset();
      if(response.id){
        alert('Usuario creado con éxito')
        this.router.navigate(['/users'])
      }else {
        alert('Error al crear el usuario, inténtalo de nuevo')
      }
    }  
  }

  checkControl (formControlName:string, validador:string): boolean | undefined {
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched;
  }
}

