import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NutritionService } from '../../service/nutrition.service';

@Component({
  selector: 'app-addnutrition',
  templateUrl: './addnutrition.component.html',
  styleUrls: ['./addnutrition.component.scss']
})
export class AddnutritionComponent  implements OnInit {

  createForm!: FormGroup
submitted: any;

  constructor(
    private _nutritionServeice: NutritionService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: [, [Validators.required]], // Initialisé à false par défaut
      fonction: ['', [Validators.required]], // Initialisé à false par défaut
      mot_de_passe: ['', [Validators.required]], // Initialisé à false par défaut
      statut: ['ACTIF', [Validators.required]], // Initialisé à false par défaut
      id_role: ['', [Validators.required]],
    });
  }


  public createUser() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._nutritionServeice.createNutrition(this.createForm.value).subscribe(res => {
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
