import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from './logado.service';

@Injectable({
  providedIn: 'root'
})
export class PermicaoEdicaoGuard implements CanActivateChild {
  constructor(private logagadoService:LogadoService){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.logagadoService.adm) return true

      alert("Você não tem permissão para editar")
      return false;
  }
  
}
