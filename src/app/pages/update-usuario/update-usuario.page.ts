import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.page.html',
  styleUrls: ['./update-usuario.page.scss'],
})
export class UpdateUsuarioPage implements OnInit {

  updateUsuarioForm!: FormGroup;
  id!: any;

  constructor( private aptService: UsuarioService,private actRoute: ActivatedRoute,
    private router: Router,public fb: FormBuilder) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.aptService.getUsuario(this.id).valueChanges().subscribe(res => {
        this.updateUsuarioForm.setValue(res);
      });
    }

  ngOnInit() {
    this.updateUsuarioForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      date: [''],
      picture: ['']
    })
    console.log(this.updateUsuarioForm.value)
  }

  updateForm() {
    this.aptService.updateUsuario(this.updateUsuarioForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
