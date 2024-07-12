import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NutritionService } from '../../service/nutrition.service';
import { ProductionService } from 'src/app/features/production/services/production.service';

@Component({
  selector: 'app-addnutrition',
  templateUrl: './addnutrition.component.html',
  styleUrls: ['./addnutrition.component.scss']
})
export class AddnutritionComponent implements OnInit {

  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  aliments: any[] = []
  allAlevins: any[] = []
  alevins: any[] = []


  constructor(
    private _nutritionServeice: NutritionService,
    private _productionService: ProductionService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      quantite_aliment: [, Validators.required],
      heure: ['', Validators.required],
      date_nutrition: ['', [Validators.required]],
      id_aliment: ['', [Validators.required]],
      id_geniteur: [], // Initialisé à false par défaut
      id_alevinCycle: [], // Initialisé à false par défaut
      id_cycle: ['', [Validators.required]], // Initialisé à false par défaut
    });

    this.getAllCycle() 
    this.getAllAliment()
    this.getAllAlevinCycle()
  }

  getAllCycle() {
    this._productionService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }

  getAllAliment(){
    this._nutritionServeice.getAllAliment().subscribe(res => {
      this.aliments = res.data
    })
  }

  filterAlevinByCycle(){
    console.log(" Cycle change ");
    const is_cycle = 
    this.alevins = this.allAlevins.filter(allAlevin =>  allAlevin.cycle.id == +this.createForm.get("id_cycle")?.value!)
  }

  getAllAlevinCycle(){
    this._nutritionServeice.getAllAlevinCycle().subscribe(res => {
      this.allAlevins = res.data
    })
  }


  public createNutrition() {
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
