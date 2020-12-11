import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

export enum Storable {
  isAuth = 'isAuth', haveAccount = 'haveAccount'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

store = (name: Storable,value: boolean):void => localStorage.setItem(name,String(value))
retrieve = (name: Storable): boolean => localStorage.getItem(name)=="true"

}
