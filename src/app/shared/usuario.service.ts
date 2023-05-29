import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFireObject } from '@angular/fire/compat/database';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioListRef!: AngularFireList<any>;
  usuarioRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createUsuario(apt: Usuario){
    this.usuarioListRef = this.db.list('/usuario/');
    return this.usuarioListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      date: apt.date,
      picture: apt.picture
    })
  }

  getUsuario(id: string){
    this.usuarioRef = this.db.object('/usuario/' + id);
    return this.usuarioRef;
  }

  getUsuarioList(){
    this.usuarioListRef = this.db.list('/usuario/');
    return this.usuarioListRef;
  }

  updateUsuario(apt: Usuario){
    return this.usuarioRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      date: apt.date,
      picture: apt.picture
    });
  }

  deleteUsuario(id: string){
    this.usuarioRef = this.db.object('/usuario/' + id);
    this.usuarioRef.remove();
  }
}
