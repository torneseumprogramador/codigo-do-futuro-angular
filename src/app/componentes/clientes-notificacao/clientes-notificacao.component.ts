import { Component, OnInit } from '@angular/core';
import { ClienteObserverService } from 'src/app/servicos/clienteObserver.service';

@Component({
  selector: 'app-clientes-notificacao',
  templateUrl: './clientes-notificacao.component.html',
  styleUrls: ['./clientes-notificacao.component.css']
})
export class ClientesNotificacaoComponent implements OnInit {

  constructor(public clienteObserverService: ClienteObserverService) {
  }


  ngOnInit(): void {
  }

}
