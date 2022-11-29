import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../paginas/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormLeaveGuard implements CanDeactivate<FormComponent> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component && component.cliente?.nome)
        return confirm("Você não preencheu o nome, deseja relamente sair?");
      
      return true
  }
  
}
