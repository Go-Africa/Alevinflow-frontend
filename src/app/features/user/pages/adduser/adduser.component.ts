import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdduserComponent implements OnInit {

  createForm!: FormGroup
submitted: any;

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      matricule: ['', [Validators.required]],
      nom: ['', Validators.required],
      prenom: [''],
      email: ['', [Validators.required]],
      nom_utilisateur: ['', [Validators.required]], // Initialisé à false par défaut
      mot_de_passe: ['', [Validators.required]], // Initialisé à false par défaut
      id_role: ['', [Validators.required]],
    });
  }


  public createUser() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._userService.createUser(this.createForm.value).subscribe(res => {
      this.createForm.reset()
    })
    return ""
  }



  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end
  hide = true;

}
