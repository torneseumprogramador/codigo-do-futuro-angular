import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from './logado.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private logadoService:LogadoService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("===[login guard]===")

      if(this.logadoService.logado)
        return true
      
      //this.logadoService.redirecionaLoginNaoLogado();
      this.router.navigateByUrl("/login")
      return false;
  }
  
}
