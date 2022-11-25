import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverService } from 'src/app/servicos/clienteObserver.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private router:Router,
    private http:HttpClient,
    private routerParams: ActivatedRoute,
    private clienteObserverService: ClienteObserverService
  ) { }

  private clienteServico:ClienteServico = {} as ClienteServico
  public titulo:String = "Novo cliente"
  public cliente:Cliente | undefined = {} as Cliente
  public valor:any = ""
  public valorPlugin:String = ""

  ngOnInit(): void {
    this.clienteServico = new ClienteServico(this.http)
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.editaCliente(id)
    }
  }

  private async editaCliente(id: Number) {
    this.titulo = "Alterando cliente"
    this.cliente = await this.clienteServico.buscaPorId(id)
    this.valor = this.cliente?.valor.toString()
  }

  salvar(){
    if(this.valor && this.cliente && this.cliente.id > 0){
      this.cliente.valor = this.convertNumber(this.valor)
      this.clienteServico.update(this.cliente)
    }
    else{
      this.clienteServico.criar({
        id: 0,
        nome: this.cliente?.nome,
        telefone: 11999999999,
        endereco: this.cliente?.endereco,
        data: new Date(),
        valor: this.convertNumber(this.valor ),
        cpf: "33333333333"
      });
    }

    this.clienteObserverService.atualizaQuantidade();
    this.router.navigateByUrl("/contatos")
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

}
