import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public clientes:any[] = [
    { id: 1, nome: "Leandro", telefone: 11999999999, endereco: "Rua teste 123", data: new Date(), valor: 33.45, cpf: "33333333333"},
    { id: 2, nome: "Marcia", telefone: 11993999999, endereco: "Rua av 123", data: new Date(), valor: 4533, cpf: "33333333233"},
    { id: 3, nome: "Livinia", telefone: 11999599999, endereco: "Rua florida 123", data: new Date(), valor: 1269.03, cpf: "33333333331"}
  ]

  ngOnInit(): void {
  }

}
