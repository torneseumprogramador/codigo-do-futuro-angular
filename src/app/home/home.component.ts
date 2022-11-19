import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public cliente:Cliente = {} as Cliente
  public valor:String = ""
  public valorPlugin:String = ""

  public clientes:Cliente[] = [
    { id: 1, nome: "Leandro", telefone: 11999999999, endereco: "Rua teste 123", data: new Date(), valor: 33.45, cpf: "33333333333"},
    { id: 2, nome: "Marcia", telefone: 11993999999, endereco: "Rua av 123", data: new Date(), valor: 4533, cpf: "33333333233"},
    { id: 3, nome: "Livinia", telefone: 11999599999, endereco: "Rua florida 123", data: new Date(), valor: 1269.03, cpf: "33333333331"}
  ]

  ngOnInit(): void {
    //this.cliente = this.clientes[0]
  }

  clicou(){
    console.log(this.valorPlugin)

    let id = this.clientes.length + 1
    let novoCliente: Cliente = {
      id: id,
      nome: this.cliente.nome,
      telefone: 11999999999,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: this.convertNumber(this.valor),
      cpf: "33333333333"
    } as Cliente

    this.clientes.push(novoCliente)
  }

  private convertNumber(valor:String): Number{
    let valorMatch = valor.match(/\d|\.|,/g)
    if(valorMatch == null) return 0
    let valorBrasileiro = valorMatch.join("")
    let valorAmericano = valorBrasileiro.replace(".", "").replace(",", ".")
    return Number(valorAmericano)
  }

  somenteNumero(){
    let valorMatch = this.valor.match(/\d|\.|,/g)
    if(valorMatch == null){
      this.valor = ""
      return
    }

    this.valor = valorMatch.join("")
  }

  marcara(){
    let valorFloat = Number(this.valor)
    this.valor = valorFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }


  excluir(cliente:Cliente){
    let listaNova:Cliente[] = []
    for(let i=0;i<this.clientes.length;i++){
      if(this.clientes[i].id != cliente.id){
        listaNova.push(this.clientes[i])
      }
    }

    this.clientes = listaNova
  }
}
