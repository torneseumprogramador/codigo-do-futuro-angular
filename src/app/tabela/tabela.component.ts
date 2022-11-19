import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  @Input()
  public clientes:Cliente[] = []

  @Output() excluirComponente = new EventEmitter();

  ngOnInit(): void {
  }

  excluir(cliente: Cliente){
    this.excluirComponente.emit(cliente)
  }

}
