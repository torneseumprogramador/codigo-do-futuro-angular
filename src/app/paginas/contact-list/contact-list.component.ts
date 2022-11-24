import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  ngOnInit(): void {
    this.listaClientes()
  }
  
  public clientes:Cliente[] | undefined = []

  private async listaClientes(){
    this.clientes = await new ClienteServico(this.http).lista();
  }

  novo(){
    this.router.navigateByUrl("/form")
  }

  excluir(cliente:Cliente){
    ClienteServico.excluirCliente(cliente)
    this.clientes = ClienteServico.buscaClientes()
    this.clienteObserverServicoService.atualizaQuantidade();
  }
}
