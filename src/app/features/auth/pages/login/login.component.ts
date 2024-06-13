import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ILogin } from '../../models/login.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  hide = true;

  form: FormGroup = new FormGroup({
    matricule: new FormControl(''),
    password: new FormControl(''),
  });


  isSignInSuccessful = false;
  isSignInFailed = false;
  errorMessage = '';
  submitted = false;

  password: any;
  show = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _auth: AuthService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }


   // Connexion d'un utilisateur 
   signIn(value: ILogin): void {
    this.submitted = true;
    this._auth.login(value).subscribe({
      next: data => {
        console.log(data);
        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('userInfos', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        this.isSignInSuccessful = true;

        const returnUrl = this._route.snapshot.queryParams['returnUrl'];

        if (returnUrl) {
          this._router.navigate([returnUrl]);
        } else {
          this._router.navigateByUrl('dashboard');
          // alert("Connection avec sucess")
        }

      },
      error: err => {
        this.isSignInFailed = true;
        console.log(err);
        if (err.error.error = 'Username or password is incorrect')
        if (err.status == 0)
        window.location.reload()
        if (err.status === 401) console.log("");
      }
    });
  }

}
