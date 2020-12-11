import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

store = (name: string,value: boolean):void => localStorage.setItem(name,String(value))
retrieve = (name: string): boolean => localStorage.getItem(name)=="true"

}
