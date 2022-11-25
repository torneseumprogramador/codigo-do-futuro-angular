import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  public email:String = ""
  public senha:String = ""
  public mensagem:string = ""

  logar(){
    if(this.email === "danilo@alunos.com" && this.senha === "123456"){
      localStorage.setItem("logado", "true")
      this.router.navigateByUrl("/contatos")
    }
    else{
      this.mensagem = "Usuário ou senha inválidos"
      this.email = ""
      this.senha = ""
    }
  }

}
