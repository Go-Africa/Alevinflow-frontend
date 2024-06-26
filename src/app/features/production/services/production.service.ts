import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

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
  public createProduction(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/cycles/create`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Cycle crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des cycles
    * 
    * @returns {any[]}
  */
  public getAllProduction(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/cycles`).pipe(
      tap(users => {
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }
   
   /**
    * Récupérer la liste des cycles en fonction de id
    * 
    * @returns {any[]}
  */
   public getProduction(id_cycle: number): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/cycles/${id_cycle}`).pipe(
      tap(users => {
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Mise à jour d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateProduction(value: any, id_cycle: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/cycles/update/${id_cycle}`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Cycle mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un cycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteProduction(id_cycle: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/cycles/delete/${id_cycle}`).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Cycle mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
