import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // https://stackoverflow.com/questions/42026045/difference-between-angulars-canload-and-canactivate
      console.log("====[CanLoad]=====")
      return confirm("Deseja carregar o modulo ?");
  }
}
