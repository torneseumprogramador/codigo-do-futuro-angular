import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  constructor(private router:Router) { 
    this.notificar()
  }

  public logado:boolean = false
  public adm:boolean = false

  public verificaLogado():boolean{
    this.notificar()
    return this.logado
  }

  public notificar(){
    this.logado = localStorage.getItem("logado") ? true : false
    this.adm = localStorage.getItem("adm") ? true : false
  }

  public deslogar(){
    localStorage.clear()
    this.logado = false
    this.adm = false
    this.router.navigateByUrl("/")
  }
}
