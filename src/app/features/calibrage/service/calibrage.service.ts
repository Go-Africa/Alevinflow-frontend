import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, catchError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class CalibrageService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un calibrageAlevincycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createCalibrageAlevincycle(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/calibrageAlevincycles/create`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("Calibrage d'Alevin  crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des calibrageAlevincycle
    * 
    * @returns {any[]}
  */
  public getAllCalibrageAlevincycle(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/calibrageAlevincycles`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  public getCalibrageAlevincycleById(idCalibrageAlevincycle: number): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/calibrageAlevincycles/${idCalibrageAlevincycle}`).pipe(
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }


   /**
    * Mise à jour d'un calibrageAlevincycle
    * 
    * @param {any}
    * @returns {any[]}
  */
   public updateCalibrageAlevincycle(value: any, id_cycle: number): Observable<any> {
    const data = { ...value }
    return this._http.put<any>(`${this.apiURL}/calibrageAlevincycles/update/${id_cycle}`, data).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("CalibrageAlevincycle mise à jour avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Suppression d'un calibrageAlevincycle
    * 
    * @param {any}
    * @returns {any[]}
  */
  public deleteCalibrageAlevincycle(id_calibrageAlevincycle: number): Observable<any> {
    return this._http.delete<any>(`${this.apiURL}/calibrageAlevincycles/delete/${id_calibrageAlevincycle}`).pipe(
      tap(users => {
        users.status == 200 ? this._toastrService.success("CalibrageAlevincycle supprimé avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 404 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }
   
}
