import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  constructor(private router:Router) { 
    this.verificaLogado()
  }

  public logado:boolean = false

  public verificaLogado():boolean{
    this.logado = localStorage.getItem("logado") ? true : false
    return this.logado
  }

  public deslogar(){
    localStorage.removeItem("logado")
    this.logado = false
    this.router.navigateByUrl("/")
  }

  public redirecionaLoginNaoLogado(): boolean{
    if(!this.verificaLogado()){
      this.router.navigateByUrl("/login")
      return true
    }

    return false
  }
}
