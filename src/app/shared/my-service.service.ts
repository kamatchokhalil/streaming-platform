import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

   searchTitle: string;
  constructor() { }

  itemToLookFor(data: string){
     this.searchTitle = data;
  }

  getItemToLookFor(): string{
    return this.searchTitle;
  }
}
