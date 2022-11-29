import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogadoService } from 'src/app/servicos/logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private logadoService:LogadoService
  ) { }

  ngOnInit(): void {
  }
  
  public email:String = ""
  public senha:String = ""
  public mensagem:string = ""

  logar(){
    if(this.email === "danilo@alunos.com" && this.senha === "123456"){
      localStorage.setItem("logado", "true")
      localStorage.setItem("adm", "true")
      this.logadoService.notificar()
      this.router.navigateByUrl("/contatos")
    }
    else if(this.email === "erika@alunos.com" && this.senha === "123456"){
      localStorage.setItem("logado", "true")
      this.logadoService.notificar()
      this.router.navigateByUrl("/contatos")
    }
    else{
      this.mensagem = "Usuário ou senha inválidos"
      this.email = ""
      this.senha = ""
    }
  }

}
