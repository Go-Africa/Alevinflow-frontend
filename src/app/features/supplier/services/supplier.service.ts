import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createSupplier(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/fournisseurs/create`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Fournisseur crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des forunisseurs
    * 
    * @returns {any[]}
  */
  public getAllSupplier(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/fournisseurs`).pipe(
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
    * Mise à jour d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public updateSupplier(value: any, id_fournisseur: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/fournisseurs/update/${id_fournisseur}`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Fournisseur mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un founisseur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteSupplier(id_fournisseur: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/fournisseurs/delete/${id_fournisseur}`).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Fournisseur mit à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
