import { Component } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/Usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Usuarios :  Usuario[] = [];

  constructor(private aptService: UsuarioService) {}

  ngOnInit(){
    this.fetchUsuarios();
    let usuarioRes = this.aptService.getUsuarioList();
    usuarioRes.snapshotChanges().subscribe(res => {

      this.Usuarios = [];
      res.forEach(item => {
        let a: any =  item.payload.toJSON();
        a['$key'] = item.key;

        this.Usuarios.push(a as Usuario);
      });
    })
  }

  fetchUsuarios(){
    this.aptService.getUsuarioList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteUsuario(id: string){
    console.log(id)
    if (window.confirm('Você realmente deseja excluir esse usuário?')){
      this.aptService.deleteUsuario(id)
    }
  }

}
