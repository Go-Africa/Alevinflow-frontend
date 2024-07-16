import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductionService } from 'src/app/features/production/services/production.service';
import { EclosionService } from '../../services/eclosion.service';
import { ProductService } from 'src/app/features/product/service/product.service';

@Component({
  selector: 'app-add-eclosion',
  templateUrl: './add-eclosion.component.html',
  styleUrls: ['./add-eclosion.component.scss']
})
export class AddEclosionComponent {
  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  alevins: any[] = []


  constructor(
    private _eclosionService: EclosionService,
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
      quantite: [, Validators.required],
      id_alevin: [, Validators.required],
      id_cycle: ['', [Validators.required]], // Initialisé à false par défaut
    });

    this.getAllCycle() 
    this.getAllCalibre()
  }

  getAllCycle() {
    this._productionService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }

  getAllCalibre() {
    this._eclosionService.getAllCalibre().subscribe(res => {
      this.alevins = res.data
    })
  }

  public createEclosion() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._eclosionService.createEclosion(this.createForm.value).subscribe(res => {
      
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
