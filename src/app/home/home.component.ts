import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public clientes:any[] = [
    { id: 1, nome: "Leandro", telefone: 11999999999, endereco: "Rua teste 123"},
    { id: 2, nome: "Marcia", telefone: 11993999999, endereco: "Rua av 123"},
    { id: 3, nome: "Livinia", telefone: 11999599999, endereco: "Rua florida 123"}
  ]

  ngOnInit(): void {
  }

}
