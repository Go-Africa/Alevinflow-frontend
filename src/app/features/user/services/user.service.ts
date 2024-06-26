import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) { }

  /**
    * Creation d'un utilisateur
    * 
    * @param {any}
    * @returns {any[]}
  */
  public createUser(value: any): Observable<any> {
    const data = { ...value }
    return this._http.post<any>(`${this.apiURL}/users/create`, data).pipe(
      tap(users => {
        users.status == 201 ? this._toastrService.success("Utilisateur crée avec succès !", "Succès") : ""
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        throw error
      })
    )
  }

  /**
    * Récupérer la liste totale des utilisateurs
    * 
    * @returns {any[]}
  */
  public getAllUser(): Observable<any> {
    return this._http.get<any>(`${this.apiURL}/users`).pipe(
      tap(users => {
      }),
      catchError(error => {
        error.status == 400 ? this._toastrService.error(`${error.error.message}`, "Echec") : ""
        error.status == 0 ? this._toastrService.error(`${error.message}`, "Echec") : ""
        throw error
      })
    )
  }
}
 