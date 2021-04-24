import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(text:string){
    console.log(`Log: ${text}`)
  }
}
