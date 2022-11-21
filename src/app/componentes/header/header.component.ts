import { Component, OnInit } from '@angular/core';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public clienteObserverServicoService: ClienteObserverServicoService) { }

  ngOnInit(): void {
  }
}
