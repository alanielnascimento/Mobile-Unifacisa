import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  usuarioForm!: FormGroup;

  constructor(private aptService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      date: [''],
      picture: ['https://ionicframework.com/docs/img/demos/avatar.svg']
    })
  }

  formSubmit() {
    console.log('teste')
    if (!this.usuarioForm.valid) {
      return false;
    } else {
      this.aptService.createUsuario(this.usuarioForm.value).then(res => {
        console.log(res)
        this.usuarioForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
        return false;
    }
  }

}
