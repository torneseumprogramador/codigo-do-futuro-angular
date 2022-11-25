import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverService } from 'src/app/servicos/clienteObserver.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';
import { LogadoService } from 'src/app/servicos/logado.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private logadoService: LogadoService,
    private clienteObserverService: ClienteObserverService
  ) { }

  ngOnInit(): void {
    if(this.logadoService.redirecionaLoginNaoLogado()) return
    
    this.clienteServico = new ClienteServico(this.http)
    this.listaClientes()
  }
  
  private clienteServico:ClienteServico = {} as ClienteServico
  public clientes:Cliente[] | undefined = []

  private async listaClientes(){
    this.clientes = await this.clienteServico.lista();
  }

  novo(){
    this.router.navigateByUrl("/form")
  }

  async excluir(cliente:Cliente){
    if(confirm("Confirma ?")){
      await this.clienteServico.excluirPorId(cliente.id)
      this.clientes = await this.clienteServico.lista()
      this.clienteObserverService.atualizaQuantidade();
    }
  }
}
