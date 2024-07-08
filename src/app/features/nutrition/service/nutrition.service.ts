import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  createNutrition(value: any) {
    return of({data: []})  }
  getAllUser() {
return of({data: []})
  }

  constructor() { }
}
