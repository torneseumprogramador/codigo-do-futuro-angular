import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  public clientes:Cliente[] = ClienteServico.buscaClientes()

  novo(){
    this.router.navigateByUrl("/form")
  }

  excluir(cliente:Cliente){
    ClienteServico.excluirCliente(cliente)
    this.clientes = ClienteServico.buscaClientes()
  }
}
