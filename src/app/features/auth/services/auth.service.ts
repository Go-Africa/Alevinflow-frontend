import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.interface';
import { IResetPassword } from '../models/reset-password.interface';
import { IUtilisateurGet } from '../models/user-get.interface';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string = apiUrl.baseUrl;
  private jwtHelper!: JwtHelperService;

  constructor(private _http: HttpClient,) {
    this.jwtHelper = new JwtHelperService();
  }

  /**
   * Vérifier si l'utilisateur est connecté
   * 
   * @returns {boolean}
   */
  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('token');
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
   * Récupérer le token de l'utilisateur connecté
   * 
   * @returns {string}
   */
  get token(): any {
    return localStorage.getItem('token')!;
  }

  /**
   * Connexion d'un utilisateur
   * 
   * @param {ILogin}
   * @returns {IUtilisateurGet}
   */
  login(data: ILogin): Observable<IUtilisateurGet> {
    return this._http.post<IUtilisateurGet>(`${this.apiURL}/auth/login`, data);
  }

  /**
   * Mot de passe oublié
   * 
   * @param {IForgetPassword}
   * @returns {IUtilisateurGet}
   */
  forgotPassword(data: any): Observable<ILogin> {
    return this._http.post<ILogin>(`${this.apiURL}/auth/forgot-password`, data);
  }

  /**
   * Réinitialiser son mot de passe
   * 
   * @param {IResetPassword}
   * @returns {IUtilisateurGet}
   */
  resetPassword(data: IResetPassword) {
    return this._http.post(`${this.apiURL}/auth/reset-password`, data);
  }
}

