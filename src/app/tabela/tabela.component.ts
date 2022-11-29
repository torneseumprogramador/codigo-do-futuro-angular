import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`=======[change do componente]========= [${JSON.stringify(changes)}] ======`)
  }

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
