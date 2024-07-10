import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  createNutrition(value: any) {
    return of({data: []})  }
 

  private apiURL = apiUrl.baseUrl

  constructor(

    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }


   /**
    * Creation d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
   public createCycle(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/nutritions/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Nutrition crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

    /**
    * Récupérer la liste totale des cycle
    * 
    * @returns {any[]}
  */
    public getAllNutrition(): Observable<any> {
      return this._http.get<any>(`${this.apiURL}/nutritions`).pipe(
        catchError(error => {
          error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
          error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
          throw error
        })
      )
    }
  
}
