import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/Usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-details-usuario',
  templateUrl: './details-usuario.page.html',
  styleUrls: ['./details-usuario.page.scss'],
})
export class DetailsUsuarioPage implements OnInit, AfterViewInit{

  usuario = {
    key: '',
    name: '',
    email: '',
    mobile: '',
    date: '',
    picture: ''
  }

  constructor(private actRoute: ActivatedRoute, private aptService: UsuarioService, private router: Router) {}

  ngOnInit(){
  }

  ngAfterViewInit(): void{
    const id = this.actRoute.snapshot.paramMap.get('id');
    if (id) {
      this.aptService.getUsuario(id).valueChanges().subscribe(res => {
        this.usuario = res;
      });
    }
  }

  deleteUsuario(id: string){
    console.log(id)
    if (window.confirm('Você realmente deseja excluir esse usuário?')){
      this.aptService.deleteUsuario(id)
    }
  }



}
