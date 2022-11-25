import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteServico } from './clienteServico';

@Injectable({
  providedIn: 'root'
})
export class ClienteObserverService {

  constructor(private http:HttpClient) { 
    this.atualizaQuantidade()
  }

  public quantidade:Number = 0

  async atualizaQuantidade(){
    let lista = await new ClienteServico(this.http).lista();
    this.quantidade = lista ? lista.length : 0;
  }
}
