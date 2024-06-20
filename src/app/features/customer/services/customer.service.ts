import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createCustomer(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/customers/create`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Client crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des clients
    * 
    * @returns {any[]}
  */
  public getAllCustomer(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/customers`).pipe(
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
    * Mise à jour d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateCustomer(value: any, id_fournisseur: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/customers/update/${id_fournisseur}`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Client mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un client
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteCustomer(id_fournisseur: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/customers/delete/${id_fournisseur}`).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Client mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
