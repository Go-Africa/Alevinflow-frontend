import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseInterfaceData, purchaseData } from 'src/app/shared/utils/data/purchaseData';
import { DecesService } from '../../service/deces.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductionService } from 'src/app/features/production/services/production.service';
import { CycleService } from 'src/app/features/production/modules/cycle/services/cycle.service';
import { GeniteurService } from 'src/app/features/product/modules/geniteur/services/geniteur.service';


@Component({
  selector: 'app-adddeces',
  templateUrl: './adddeces.component.html',
  styleUrls: ['./adddeces.component.scss']
})
export class AdddecesComponent implements OnInit {
  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  geniteurs: any[] = []
  allAlevins: any[] = []
  alevins: any[] = []


  constructor(
    private _decesService: DecesService,
    private _cycleService: CycleService,
    private _geniteurService: GeniteurService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      date_deces: ['', [Validators.required]],
      quantite: [],
      poids: [],
      id_cycle: [],
      id_geniteur: [], // Initialisé à false par défaut
      id_alevinCycle: [], // Initialisé à false par défaut
    });

    this.getAllCycle() 
    this.getAllAlevinCycle()
    this.getAllGeniteur()
  }

  getAllCycle() {
    this._cycleService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }

  getAllGeniteur() {
    this._geniteurService.getAllGeniteur().subscribe(res => {
      this.geniteurs = res.data
    })
  }

  filterAlevinByCycle(){
    console.log(" Cycle change ");
    this.alevins = this.allAlevins.filter(allAlevin =>  allAlevin.cycle.id == +this.createForm.get("id_cycle")?.value!)
  }

  getAllAlevinCycle(){
    this._decesService.getAllAlevinCycle().subscribe(res => {
      this.allAlevins = res.data
    })
  }


  public createDeces() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    const data = {...this.createForm.value}
    this._decesService.createDeces(data).subscribe(res => {
      
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






