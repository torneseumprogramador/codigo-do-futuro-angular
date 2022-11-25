import { Component, OnInit } from '@angular/core';
import { ClienteObserverService } from 'src/app/servicos/clienteObserver.service';
import { LogadoService } from 'src/app/servicos/logado.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public clienteObserverService: ClienteObserverService,
    public logadoService:LogadoService
  ) { }

  ngOnInit(): void {
  }

}
