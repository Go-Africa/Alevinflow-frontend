import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DecesService {


  getAllDeces() {
    return of({data : []});
  }

  constructor() { }
}
